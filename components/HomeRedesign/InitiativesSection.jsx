"use client";

import React from "react";
import { Terminal, Cpu, Binary } from "lucide-react";

const initiatives = [
  {
    tag: "Competitive Programming",
    title: "Cipher",
    platform: "HackerRank Platform",
    cohort: "Undergraduate Students",
    description:
      "A timed competitive programming contest designed to evaluate algorithmic thinking, computational efficiency, and data structures implementation under standard collegiate contest rules.",
    icon: Binary,
  },
  {
    tag: "Technical Bootcamp",
    title: "Spark",
    platform: "Multi-Week Workshop Series",
    cohort: "Hands-on Student Teams",
    description:
      "An intensive technical track covering applied machine learning, computer vision, and systems development, guiding participants through architecture design to functional prototype demonstrations.",
    icon: Cpu,
  },
  {
    tag: "Department Infrastructure",
    title: "Embrione Tech Lab",
    platform: "Web & Engineering Vertical",
    cohort: "Core Technical Team",
    description:
      "The student engineering team responsible for building and maintaining the club's web portals, automated submission pipelines, and registration tools for PES University events.",
    icon: Terminal,
  },
];

export default function InitiativesSection() {
  return (
    <section id="initiatives" className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto bg-black border-b border-zinc-800/80">
      <div className="max-w-3xl mb-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400">PROGRAMS</span>
          <span className="h-px w-6 bg-blue-500/40" />
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">Technical Initiatives</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
          Department Initiatives &amp; Workshops.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-[65ch]">
          In addition to annual hackathons, The Embrione conducts academic year technical programs to strengthen engineering fundamentals across batches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-md bg-black/60 border border-zinc-800 flex items-center justify-center text-blue-400">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-black text-zinc-300 border border-zinc-800">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1.5 text-xs font-mono text-blue-400">
                  <span>{item.platform}</span>
                  <span>•</span>
                  <span>{item.cohort}</span>
                </div>

                <p className="mt-3 text-zinc-400 text-sm font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
