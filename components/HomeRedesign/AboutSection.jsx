"use client";

import React from "react";
import { Sparkles, Terminal, Users, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-black text-white">
      {/* Apple-style Eyebrow & Headline */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-400 block mb-3">
          About The Embrione
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
          Engineered for curiosity. <br className="hidden sm:inline" />
          <span className="text-neutral-400">Built for national impact.</span>
        </h2>
        <div className="mt-8 space-y-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          <p>
            <strong className="text-white font-medium">The Embrione</strong> is the official student technical vertical under the Department of Computer Science &amp; Engineering at PES University (Ring Road Campus, Bengaluru). We are a community of student engineers, researchers, and creators driven by curiosity and the pursuit of meaningful innovation.
          </p>
          <p>
            Through initiatives like <strong className="text-white font-medium">Kodikon</strong>, our flagship 24-hour national hackathon, we create spaces for undergraduate students across India to think critically, experiment boldly, and build fresh solutions to real-world challenges.
          </p>
        </div>
      </div>

      {/* Apple-style Three Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">01 / Research &amp; Systems</span>
            <h3 className="text-lg font-semibold text-white tracking-tight">Research-Driven Focus</h3>
            <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              Moving beyond basic boilerplate apps to explore academic insights, Edge Computer Vision, Distributed Systems, and emerging intelligence.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">02 / Flagship Hackathon</span>
            <h3 className="text-lg font-semibold text-white tracking-tight">Kodikon Series</h3>
            <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              South India&apos;s premier 24-hour national hackathon, bringing hundreds of undergraduate builders, industry mentors, and research challenges together.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">03 / Community &amp; Culture</span>
            <h3 className="text-lg font-semibold text-white tracking-tight">Department Legacy</h3>
            <p className="mt-2 text-sm text-neutral-400 font-light leading-relaxed">
              Mentored by Department of CSE faculty at PES University, building a strong peer culture where students do not just study tech, but build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
