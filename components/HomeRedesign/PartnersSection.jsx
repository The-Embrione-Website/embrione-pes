"use client";

import React from "react";

import { partnersData } from "./partnersData";

export default function PartnersSection() {

  return (
    <section id="partners" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden">
      {/* Background Cyber Ambient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-cyan-400 font-bold">
              INDUSTRY NETWORK // 「協力企業」
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight uppercase font-display">
            Previous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Partners.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Organizations, technology sponsors, and platforms that power our hackathons and support student builders.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {partnersData.map((partner) => (
            <div
              key={partner.name}
              className="group p-5 rounded-xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[140px]"
            >
              <div className="w-full h-12 flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-9 max-w-[85%] object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-mono font-medium text-slate-200 line-clamp-1">{partner.name}</span>
              <span className="text-[10px] font-mono text-cyan-400/70 mt-0.5 line-clamp-1 font-light">{partner.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
