import React from "react";
import Link from "next/link";

export default function FooterKodikon6() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
      <p>&copy; {new Date().getFullYear()} The Embrione • Department of CSE, PES University. All rights reserved.</p>
      <div className="mt-2 flex items-center justify-center gap-4 font-mono text-[11px]">
        <Link href="/" className="hover:text-white transition-colors">Home Portal</Link>
        <span>•</span>
        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <span>•</span>
        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
      </div>
    </footer>
  );
}
