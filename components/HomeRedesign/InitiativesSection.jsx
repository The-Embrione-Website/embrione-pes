"use client";

import React from "react";
import { Terminal, Cpu, Binary, Layers } from "lucide-react";

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
    <section id="initiatives" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#000514]">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Layers size={14} />
          <span>TECHNICAL PROGRAMS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Department Initiatives &amp; Workshops.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          In addition to annual hackathons, The Embrione conducts academic year technical programs to strengthen engineering fundamentals across batches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <div className="flex items-center gap-2 mt-1.5 text-xs font-mono text-cyan-400">
                  <span>{item.platform}</span>
                  <span>•</span>
                  <span>{item.cohort}</span>
                </div>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
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
