"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#000514]">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Next Hackathon Badge: Kodi 6.0 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-sm bg-cyan-400" />
            <span>PES UNIVERSITY • DEPT OF CSE</span>
          </div>
          <Link
            href="/kodikon-6"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 transition-colors"
          >
            <span>NEXT HACKATHON: KODIKON 6.0</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* Exact Hero Title & Tagline from Old Website */}
        <span className="text-white text-3xl sm:text-5xl md:text-6xl font-mono tracking-tight">
          The
        </span>
        <h1 className="text-white font-extrabold text-6xl sm:text-8xl md:text-9xl tracking-tight py-2">
          Embrione
        </h1>

        <p className="mt-4 text-base sm:text-2xl md:text-3xl text-slate-200 font-light max-w-3xl leading-relaxed">
          Tech vertical under CSE department, PES University
        </p>

        {/* Action Buttons: Kodi 6.0, Kodi 5.0, About */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/kodikon-6"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-colors"
          >
            <span>Explore Kodikon 6.0</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/kodikon-5"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-colors"
          >
            <span>Kodikon 5.0 Portal</span>
          </Link>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800 font-medium text-sm transition-colors"
          >
            <span>About Us</span>
            <ChevronDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
