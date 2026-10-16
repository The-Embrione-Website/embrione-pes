"use client";

import React from "react";
import { Globe } from "lucide-react";
import { partnersData } from "./partnersData";

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-5 backdrop-blur-md">
            <Globe size={12} />
            <span>Industry Network · Technology Allies</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
            Previous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Partners.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Leading technology platforms, developer tooling providers, and industry sponsors that have supported our hackathons and empowered student builders.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partnersData.map((partner) => (
            <div
              key={partner.name}
              className="group p-6 rounded-2xl bg-[#060c1d]/85 border border-white/[0.08] hover:border-cyan-400/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[145px] backdrop-blur-xl hover:-translate-y-1"
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
