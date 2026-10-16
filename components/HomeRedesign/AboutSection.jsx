"use client";

import React from "react";
import { Cpu, Terminal, Users, Sparkles } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      num: "01",
      tag: "Research & Systems",
      title: "Research-Driven Computing",
      desc: "Going beyond superficial boilerplate apps to explore rigorous computing paradigms, Distributed Systems, Edge Intelligence, and scalable architectures.",
      icon: Cpu,
    },
    {
      num: "02",
      tag: "Flagship Hackathon",
      title: "The Kodikon Series",
      desc: "South India's premier 24-hour national hackathon, connecting hundreds of top undergraduate builders, technical mentors, and challenging real-world problem statements.",
      icon: Terminal,
    },
    {
      num: "03",
      tag: "Department Culture",
      title: "Department Legacy",
      desc: "Mentored by Department of CSE faculty at PES University, fostering a disciplined culture where students do not merely study technology, but build and ship it.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden border-t border-white/5">
      {/* Background Subtle Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Sparkles size={12} />
            <span>About The Society</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Engineered for curiosity. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Built for national impact.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">The Embrione</strong> is the official student technical vertical under the Department of Computer Science &amp; Engineering at PES University (Ring Road Campus, Bengaluru). We are an ecosystem of student engineers, researchers, and creators driven by curiosity and purposeful technical execution.
            </p>
            <p>
              Through initiatives like <strong className="text-cyan-300 font-medium">Kodikon</strong>, our flagship 24-hour national hackathon, we create platforms for undergraduate students across India to think critically, experiment boldly, and build robust solutions to engineering challenges.
            </p>
          </div>
        </div>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group p-8 rounded-2xl bg-[#060c1d]/90 border border-white/10 hover:border-cyan-500/40 shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                      {pillar.num} · {pillar.tag}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.desc}
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
