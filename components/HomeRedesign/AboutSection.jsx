
"use client";

import React from "react";
import { Cpu, Terminal, Users, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#000000] px-4 py-28 text-white sm:px-6 sm:py-36 lg:px-8"
    >
      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 bg-cyan-500/[0.05] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 max-w-3xl sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Sparkles size={12} />
            <span>The Society · About Embrione</span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl">
            Built on Curiosity.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              Growing Through Technology.
            </span>
          </h2>

          <p className="mt-8 text-base font-light leading-relaxed text-slate-300 sm:text-lg">
            The Embrione is the student-led technical vertical under the
            Department of Computer Science and Engineering at PES University,
            Bengaluru. We bring students together to explore technology, work
            on ideas, build projects, and learn through collaboration and
            hands-on experience.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 sm:gap-6">

          {/* Pillar 1 — Collaborative Building */}
          <div className="group flex flex-col justify-between rounded-3xl border border-white/[0.07] bg-[#040816]/90 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] md:col-span-7 sm:p-10">
            <div>
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                  Pillar 01 · Collaborative Building
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/50 text-cyan-300 transition-transform duration-300 group-hover:scale-105">
                  <Cpu size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-3xl">
                Learn Together.
                <br />
                Build Together.
              </h3>

              <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-slate-300 sm:text-base">
                We bring students together to work on technical projects,
                exchange ideas, explore new technologies, and turn what they
                learn into things they can actually build.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6 text-xs">
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-slate-300">
                Collaboration
              </span>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-slate-300">
                Project Building
              </span>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-slate-300">
                Exploration
              </span>
            </div>
          </div>

          {/* Pillar 2 — Hackathons */}
          <div className="group flex flex-col justify-between rounded-3xl border border-white/[0.07] bg-[#040816]/90 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] md:col-span-5 sm:p-10">
            <div>
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                  Pillar 02 · Hackathons
                </span>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-950/50 text-cyan-300 transition-transform duration-300 group-hover:scale-105">
                  <Terminal size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-3xl">
                The Kodikon Series
              </h3>

              <p className="mt-4 text-sm font-light leading-relaxed text-slate-300">
                Kodikon is our flagship 24-hour national hackathon, bringing
                developers and problem solvers together to build, collaborate,
                and tackle real-world challenges. With five successful
                editions behind us, we continue to create a platform for
                innovation and teamwork.
              </p>
            </div>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <Link
                href="/kodikon-6"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-colors hover:text-white"
              >
                <span>Explore Kodikon 6.0</span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Pillar 3 — Mentorship */}
          <div className="group flex flex-col justify-between gap-8 rounded-3xl border border-white/[0.07] bg-[#040816]/90 p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] md:col-span-12 sm:flex-row sm:items-center sm:p-10">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                  Pillar 03 · Mentorship
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-3xl">
                Guided by Experience
              </h3>

              <p className="mt-4 text-sm font-light leading-relaxed text-slate-300 sm:text-base">
                Students learn with guidance from industry professionals and
                experienced mentors who share practical insights, offer
                technical direction, and help turn early ideas into stronger
                solutions.
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center self-start rounded-2xl border border-cyan-500/30 bg-cyan-950/50 text-cyan-300 sm:self-center">
              <Users size={26} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
