import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import embrioneLogo from "@/public/embrionelogo.webp";
import Navbar from "@/components/HomeRedesign/NavbarHome";

export default function NavbarKodikon6() {
  return (
    <header className="sticky top-0 z-40 bg-[#000514]/90 backdrop-blur-md border-b border-slate-800">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span className="hidden xs:inline">Back to Home</span>
            <span className="xs:hidden">Home</span>
          </Link>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-slate-900 border border-slate-800 flex items-center justify-center p-0.5">
              <Image src={embrioneLogo} alt="Embrione Logo" width={22} height={22} className="object-contain" />
            </div>
            <span className="text-xs font-semibold text-white font-mono">KODIKON 6.0</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#interest-form"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
          >
            <span>Get Notified</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div> */}
      <Navbar />
    </header>
  );
}
