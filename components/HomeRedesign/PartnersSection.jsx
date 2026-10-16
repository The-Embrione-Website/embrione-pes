"use client";

import React from "react";
import { Globe } from "lucide-react";
import { partnersData } from "./partnersData";

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden border-t border-white/5">
      {/* Background Subtle Ambient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Globe size={12} />
            <span>Industry Network · Technology Allies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Previous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Partners.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Leading technology platforms, developer tooling providers, and industry sponsors that have supported our initiatives and empowered student builders.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partnersData.map((partner) => (
            <div
              key={partner.name}
              className="group p-5 rounded-xl bg-[#060c1d]/90 border border-white/10 hover:border-cyan-500/40 shadow-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[140px]"
            >
              <div className="w-full h-12 flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-9 max-w-[85%] object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-semibold text-slate-200 line-clamp-1">{partner.name}</span>
              <span className="text-[10px] text-cyan-400/80 mt-0.5 line-clamp-1 font-medium">{partner.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
