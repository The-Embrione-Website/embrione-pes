"use client";

import React from "react";
import { Cpu, Terminal, Users, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Apple-Style Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Apple Headline & Lead */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-5 backdrop-blur-md">
            <Sparkles size={12} />
            <span>The Society · Core Architecture</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
            Engineered for curiosity. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Built for national impact.
            </span>
          </h2>

          <div className="mt-8 space-y-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">The Embrione</strong> is the official student technical vertical under the Department of Computer Science &amp; Engineering at PES University (Ring Road Campus, Bengaluru). We bridge academic research and production-grade engineering through rigorous student-led initiatives.
            </p>
          </div>
        </div>

        {/* Apple Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Bento Card 1: Research & Systems (Spans 7 cols) */}
          <div className="md:col-span-7 group p-8 sm:p-10 rounded-3xl bg-[#040816]/90 border border-white/[0.07] hover:border-cyan-400/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500 flex flex-col justify-between backdrop-blur-2xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold tracking-widest text-cyan-400 uppercase">
                  Pillar 01 · Engineering Depth
                </span>
                <div className="w-11 h-11 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Cpu size={20} />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Research-Driven Computing
              </h3>
              <p className="mt-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                Moving past boilerplate applications to dive deep into Distributed Systems, Edge Intelligence, Microkernel architectures, and high-throughput data backends.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                Distributed Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                Edge Computer Vision
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                Compiler Engineering
              </span>
            </div>
          </div>

          {/* Bento Card 2: Kodikon Series (Spans 5 cols) */}
          <div className="md:col-span-5 group p-8 sm:p-10 rounded-3xl bg-[#040816]/90 border border-white/[0.07] hover:border-cyan-400/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500 flex flex-col justify-between backdrop-blur-2xl">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold tracking-widest text-cyan-400 uppercase">
                  Pillar 02 · National Sprint
                </span>
                <div className="w-11 h-11 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Terminal size={20} />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                The Kodikon Series
              </h3>
              <p className="mt-3.5 text-sm text-slate-300 font-light leading-relaxed">
                South India&apos;s premier 24-hour national hackathon. Connecting hundreds of collegiate builders, industry sponsors, and research problems.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <Link
                href="/kodikon-6"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
              >
                <span>View Kodikon 6.0</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Department Legacy (Spans full 12 cols, wide format) */}
          <div className="md:col-span-12 group p-8 sm:p-10 rounded-3xl bg-[#040816]/90 border border-white/[0.07] hover:border-cyan-400/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500 flex flex-col sm:flex-row sm:items-center justify-between gap-8 backdrop-blur-2xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold tracking-widest text-cyan-400 uppercase">
                  Pillar 03 · Department Legacy
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                Department of CSE Mentorship &amp; Peer Culture
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Mentored directly by faculty at PES University, fostering a disciplined collegiate engineering culture where students learn, build, collaborate, and ship together.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 flex items-center justify-center">
                <Users size={26} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
