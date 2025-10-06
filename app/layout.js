"use client";
import { useEffect } from "react";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

// 1. Import the fonts from next/font
import { Orbitron, Poppins } from 'next/font/google';

// 2. Configure the fonts and assign them to CSS variables
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron', // CSS variable for Orbitron
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins', // CSS variable for Poppins
});

export default function RootLayout({ children }) {
  // Your existing AOS initialization logic is preserved
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      {/* 3. Apply the font variables to the body tag */}
      <body className={`${orbitron.variable} ${poppins.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}