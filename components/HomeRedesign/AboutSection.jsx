"use client";

import React from "react";
import {
  Sparkles,
  Terminal,
  Users2,
  Cpu,
  Building2,
  Clock,
  Flame,
} from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Terminal,
      tag: "The Core Focus",
      title: "All About The Hackathon",
      description:
        "Our club has one clear, singular mission: organizing and hosting Kodikon — our 24-hour flagship national offline hackathon at PES University.",
      accent: "text-cyan-400",
      border: "hover:border-cyan-400/40",
    },
    {
      icon: Users2,
      tag: "The Circle",
      title: "Meet Great People",
      description:
        "Find your circle of driven developers, builders, and creative problem-solvers. The real takeaway is the community and genuine friendships you build along the way.",
      accent: "text-sky-400",
      border: "hover:border-sky-400/40",
    },
    {
      icon: Cpu,
      tag: "Behind The Scenes",
      title: "Learn The Backend Work",
      description:
        "Master what it actually takes behind the curtain to run a high-stakes national event — building web portals, securing sponsors, and managing live 24-hour operations.",
      accent: "text-teal-400",
      border: "hover:border-teal-400/40",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#000000] px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
          <Sparkles size={12} />
          <span>The Society · About Us</span>
        </div>

        {/* Section title */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
            Built Around The Hackathon.{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
              Run by Students Who Build.
            </span>
          </h2>
        </div>

        {/* Primary Narrative Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#040816]/85 p-7 sm:p-11 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Institutional sub-badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-950/40 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-cyan-300">
            <Building2 size={13} className="text-cyan-400" />
            <span>Department of CSE · PES University, Bengaluru</span>
          </div>

          {/* Official About Content */}
          <div className="space-y-6 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-200">
            <p>
              Embrione is the official technical vertical under the Department
              of Computer Science and Engineering at PES University, Bengaluru.
              We are a student-led collective driven by curiosity,
              collaboration, and the pursuit of meaningful innovation. At
              Embrione, we move beyond building projects — we question ideas,
              explore possibilities, and push the boundaries of technology
              itself.
            </p>

            <p className="text-slate-300">
              Through initiatives like Kodikon, our flagship national hackathon,
              we create spaces for students to think deeply, experiment boldly,
              and bring research-inspired ideas to life. Our goal is to bridge
              the gap between learning and doing — fostering a culture where
              students don’t just work with technology, but actively shape its
              future.
            </p>
          </div>

          {/* Real quick facts bar */}
          <div className="mt-8 pt-7 border-t border-white/[0.07] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-300">
                <Flame size={16} />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Kodikon Series</div>
                <div className="text-[11px] text-slate-400">Our flagship 24H national hackathon</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-300">
                <Clock size={16} />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">24-Hour Offline Sprint</div>
                <div className="text-[11px] text-slate-400">Hosted on campus at PESU 52</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-300">
                <Users2 size={16} />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">100% Student-Run</div>
                <div className="text-[11px] text-slate-400">Organized &amp; executed by undergrads</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Real Pillars of Embrione */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#040816]/70 p-7 backdrop-blur-xl transition-all duration-300 ${item.border} hover:bg-[#060c20]/90 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                      {item.tag}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/25 bg-cyan-950/40 text-cyan-300 transition-transform group-hover:scale-105">
                      <Icon size={17} />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
