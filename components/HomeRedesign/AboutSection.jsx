"use client";

import React from "react";
import { Cpu, Terminal, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden">
      {/* Background Cyber Glow & Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Tokyo Cyberpunk Eyebrow & Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-cyan-400 font-bold">
              ABOUT THE EMBRIONE // 「結社概要」
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight uppercase font-display">
            Engineered for curiosity. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Built for national impact.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            <p>
              <strong className="text-white font-medium">The Embrione</strong> is the official student technical vertical under the Department of Computer Science &amp; Engineering at PES University (Ring Road Campus, Bengaluru). We are a community of student engineers, researchers, and creators driven by curiosity and the pursuit of meaningful innovation.
            </p>
            <p>
              Through initiatives like <strong className="text-cyan-300 font-medium">Kodikon</strong>, our flagship 24-hour national hackathon, we create spaces for undergraduate students across India to think critically, experiment boldly, and build fresh solutions to real-world challenges.
            </p>
          </div>
        </div>

        {/* Tokyo Cyberpunk Three Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="relative group p-8 rounded-xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between">
            <span className="absolute top-2 left-2 font-mono text-[8px] text-cyan-500/40 select-none">◤ 01</span>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                  「研究」01 / RESEARCH &amp; SYSTEMS
                </span>
                <span className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
                  <Cpu size={16} />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Research-Driven Focus</h3>
              <p className="mt-3 text-sm text-slate-400 font-light leading-relaxed">
                Moving beyond basic boilerplate apps to explore academic insights, Edge Computer Vision, Distributed Systems, and emerging intelligence.
              </p>
            </div>
          </div>

          <div className="relative group p-8 rounded-xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between">
            <span className="absolute top-2 left-2 font-mono text-[8px] text-cyan-500/40 select-none">◤ 02</span>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-semibold">
                  「旗艦」02 / FLAGSHIP SPRINT
                </span>
                <span className="p-2 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300">
                  <Terminal size={16} />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Kodikon Series</h3>
              <p className="mt-3 text-sm text-slate-400 font-light leading-relaxed">
                South India&apos;s premier 24-hour national hackathon, bringing hundreds of undergraduate builders, industry mentors, and research challenges together.
              </p>
            </div>
          </div>

          <div className="relative group p-8 rounded-xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between">
            <span className="absolute top-2 left-2 font-mono text-[8px] text-cyan-500/40 select-none">◤ 03</span>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                  「伝統」03 / PEER CULTURE
                </span>
                <span className="p-2 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400">
                  <Users size={16} />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Department Legacy</h3>
              <p className="mt-3 text-sm text-slate-400 font-light leading-relaxed">
                Mentored by Department of CSE faculty at PES University, building a strong peer culture where students do not just study tech, but build it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
