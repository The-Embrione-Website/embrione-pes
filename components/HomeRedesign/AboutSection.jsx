"use client";

import React from "react";
import Link from "next/link";
import {
  Terminal,
  Users2,
  Cpu,
  Building2,
  Clock,
  Flame,
  ArrowUpRight,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-12 border-b border-zinc-800/80"
    >
      {/* Atmospheric subtle top horizon ambient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black via-zinc-950/30 to-transparent z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-blue-400">01</span>
            <span className="h-px w-6 bg-blue-500/40" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">About The Society</span>
          </div>

          <h2 className="font-curvy text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
            Built Around The Hackathon.{" "}
            <span className="block text-zinc-400 mt-1">
              Run by{" "}
              <span className="font-cursive font-normal text-blue-400 text-4xl sm:text-6xl lg:text-7xl inline-block px-1">
                Students
              </span>{" "}
              Who Build.
            </span>
          </h2>
        </div>

        {/* Architectural Bento Grid with Crisp 1px Borders */}
        <div className="grid grid-cols-12 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
          {/* Card 1: Main About & Official Narrative (Span 8) */}
          <div className="col-span-12 lg:col-span-8 bg-zinc-950 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Institutional sub-badge */}
              <div className="mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Building2 size={14} className="text-blue-400" />
                <span>Department of CSE | PES University, Bengaluru</span>
              </div>

              {/* Official About Content */}
              <div className="space-y-5 text-base sm:text-lg font-normal leading-relaxed text-zinc-200 max-w-[68ch]">
                <p>
                  Embrione is the official technical vertical under the Department
                  of Computer Science and Engineering at PES University, Bengaluru.
                  We are a student-led collective driven by curiosity,
                  collaboration, and the pursuit of meaningful innovation. At
                  Embrione, we move beyond building projects — we question ideas,
                  explore possibilities, and push the boundaries of technology
                  itself.
                </p>

                <p className="text-zinc-400">
                  Through initiatives like Kodikon, our flagship national hackathon,
                  we create spaces for students to think deeply, experiment boldly,
                  and bring research-inspired ideas to life. Our goal is to bridge
                  the gap between learning and doing — fostering a culture where
                  students don’t just work with technology, but actively shape its
                  future.
                </p>
              </div>
            </div>

            {/* Real quick facts bar */}
            <div className="mt-8 pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-black text-blue-400">
                  <Flame size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Kodikon Series</div>
                  <div className="text-xs text-zinc-400">Our flagship 24H national hackathon</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-black text-blue-400">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">24-Hour Offline Sprint</div>
                  <div className="text-xs text-zinc-400">Hosted on campus at PESU 52</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-black text-blue-400">
                  <Users2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">100% Student-Run</div>
                  <div className="text-xs text-zinc-400">Organized &amp; executed by undergrads</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pillar 1 - The Core Focus (Span 4) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-zinc-950 p-7 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  The Core Focus
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-black text-blue-400">
                  <Terminal size={16} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                All About The Hackathon
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                Our club has one clear, singular mission: organizing and hosting Kodikon — our 24-hour flagship national offline hackathon at PES University.
              </p>
            </div>

            <Link
              href="/kodikon-6"
              className="mt-8 inline-flex items-center justify-between w-full p-3 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 hover:border-blue-500/50 transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 group-hover:text-white">
                Explore Kodikon 6.0
              </span>
              <ArrowUpRight
                size={14}
                className="text-zinc-500 group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Card 3: Pillar 2 - The Circle (Span 6) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 bg-zinc-950 p-7 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  The Circle
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-black text-blue-400">
                  <Users2 size={16} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Meet Great People
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                Find your circle of driven developers, builders, and creative problem-solvers. The real takeaway is the community and genuine friendships you build along the way.
              </p>
            </div>
          </div>

          {/* Card 4: Pillar 3 - Behind The Scenes (Span 6) */}
          <div className="col-span-12 lg:col-span-6 bg-zinc-950 p-7 sm:p-10 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Behind The Scenes
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-black text-blue-400">
                  <Cpu size={16} />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Learn The Backend Work
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                Master what it actually takes behind the curtain to run a high-stakes national event — building web portals, securing sponsors, and managing live 24-hour operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
