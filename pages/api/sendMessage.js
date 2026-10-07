const nodemailer = require("nodemailer");

// Simple in-memory rate limiter (5 requests per 15 mins per IP)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Rate Limiting
  const clientIp =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: "Too many requests. Please wait a few minutes before sending another message.",
    });
  }

  const { fullName, emailID, subject, message } = req.body || {};

  // Strict Input Validation
  if (
    typeof fullName !== "string" ||
    typeof emailID !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({ error: "Invalid form input data types." });
  }

  const cleanName = fullName.trim().slice(0, 100);
  const cleanEmail = emailID.trim().slice(0, 120);
  const cleanSubject = subject.replace(/[\r\n]/g, " ").trim().slice(0, 150);
  const cleanMessage = message.trim().slice(0, 3000);

  if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return res.status(400).json({ error: "Invalid email address format." });
  }

  if (!process.env.APP_PASSWORD) {
    console.error("APP_PASSWORD environment variable is not configured.");
    return res.status(503).json({
      error: "Contact service is temporarily unconfigured. Please reach out to embrione_cse@pes.edu directly.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "theembrionetech@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
      connectionTimeout: 10000,
    });

    const mailOptions = {
      from: `"The Embrione Contact Form" <theembrionetech@gmail.com>`,
      to: "embrione_cse@pes.edu",
      replyTo: cleanEmail,
      subject: `[Website Contact] ${cleanSubject}`,
      text: `Sender: ${cleanName} (${cleanEmail})\nIP: ${clientIp}\n\nMessage:\n${cleanMessage}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Success! Your message was sent to the department team.",
    });
  } catch (error) {
    console.error("Nodemailer error:", error.message || error);
    return res.status(500).json({
      error: "Failed to send your message. Please email embrione_cse@pes.edu directly.",
    });
  }
}
