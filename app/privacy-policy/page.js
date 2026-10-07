import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | The Embrione - PES University",
  description:
    "Privacy Policy for The Embrione, Department of Computer Science & Engineering, PES University.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#020510] text-slate-200">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-[#000514]/90 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <span className="text-xs font-mono text-cyan-400">
            PES CSE • LEGAL
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono mb-4 border border-slate-700">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>DATA GOVERNANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-400 font-mono">
            Last Updated: October 2026 | Department of Computer Science & Engineering, PES University
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-slate-300 border-t border-slate-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">1. Scope and Overview</h2>
            <p>
              This Privacy Policy explains how The Embrione (&quot;we,&quot; &quot;our,&quot; or &quot;the Club&quot;), the official student computing society within the Department of Computer Science and Engineering at PES University (Ring Road Campus, Bengaluru), collects, stores, and handles information through our website (embrionepes.in) and associated event registration platforms.
            </p>
            <p>
              We operate exclusively in an academic and student-welfare capacity under the auspices of PES University. We do not sell, rent, monetize, or trade any personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
            <p>We collect information only when voluntarily submitted by users or automatically logged through basic website infrastructure:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Contact & Inquiry Information:</strong> When you submit a message via our contact forms or email us, we collect your name, email address, institutional affiliation, and the contents of your inquiry.
              </li>
              <li>
                <strong className="text-white">Event & Hackathon Registrations:</strong> For events such as Kodikon, Cipher, and technical workshops, we collect participant names, student registration numbers (SRN/PRN/USN), college email addresses, phone numbers, branch, semester, and project repository links.
              </li>
              <li>
                <strong className="text-white">Technical Analytics:</strong> We use privacy-conscious analytics (Vercel Web Analytics) that collect anonymized metrics such as browser type, referring URLs, and device categories without persistent cross-site tracking or selling advertising profiles.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">3. How Information Is Used</h2>
            <p>Data collected is used strictly for legitimate club operations, including:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Verifying undergraduate student eligibility for university competitions and awards.</li>
              <li>Communicating hackathon problem statements, schedule updates, team shortlists, and logistics.</li>
              <li>Responding directly to inquiries submitted through our contact channels.</li>
              <li>Generating aggregate participation reports for the Department of CSE and PES University administration.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">4. Data Sharing and Third-Party Providers</h2>
            <p>We do not share personal information with commercial entities except as required for technical execution:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Hosting & Cloud Infrastructure:</strong> Vercel Inc. (web hosting) and Google Firebase (secure form submissions and event notifications).
              </li>
              <li>
                <strong className="text-white">Hackathon Platforms:</strong> When third-party platforms (such as Devfolio or Hack2Skill) manage event registrations, participants are governed by the respective platform&apos;s privacy practices in addition to this policy.
              </li>
              <li>
                <strong className="text-white">Institutional Oversight:</strong> Authorized faculty coordinators and the Head of Department (CSE) may access participant rosters for academic certification and university administrative records.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">5. Data Retention and Security</h2>
            <p>
              Participant records are retained for the duration of the relevant academic year to resolve certification, prize disbursement, and institutional auditing queries. We take reasonable administrative and technical precautions to safeguard personal data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">6. Inquiries and Data Corrections</h2>
            <p>
              If you have registered for an event and wish to verify, correct, or request the deletion of your personal contact records, please contact our administrative team:
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>embrione_cse@pes.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Department of CSE, MRD Block, PES University, BSK III Stage, Bengaluru - 560085</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} The Embrione • Department of CSE, PES University. All rights reserved.
      </footer>
    </div>
  );
}
