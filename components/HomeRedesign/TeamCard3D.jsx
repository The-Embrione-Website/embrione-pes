"use client";

import React from "react";
import { Linkedin } from "lucide-react";

export default function TeamCard3D({ member }) {
  return (
    <div className="group relative rounded-3xl bg-[#060c1d]/85 border border-white/[0.08] hover:border-cyan-400/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.16)] transition-all duration-400 ease-out flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden backdrop-blur-2xl">
      
      {/* Apple-style Specular Border Frame on Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/40 transition-colors duration-400 z-30" />

      {/* Portrait Stage */}
      <div className="relative w-full aspect-[4/5] bg-[#02050e] overflow-hidden">
        {/* Apple-Style Role Pill */}
        {member.role && (
          <div className="absolute top-3.5 right-3.5 z-20">
            <span className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-cyan-300 border border-white/10 shadow-sm">
              {member.role}
            </span>
          </div>
        )}

        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Subtle Dark Vignette Bottom Blend */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060c1d] to-transparent pointer-events-none z-10" />
      </div>

      {/* Member Details */}
      <div className="p-6 flex flex-col justify-between flex-1 relative z-20 bg-[#060c1d]/90">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
            {member.domain}
          </span>

          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {member.name}
          </h3>

          {member.term && (
            <span className="text-xs text-slate-400 font-light block mt-0.5">
              Term: {member.term}
            </span>
          )}
        </div>

        {/* Bottom Strip: Institution & LinkedIn */}
        <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>PES University</span>

          {member.linkedinUrl && member.linkedinUrl !== "www" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-full bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-400/40 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all duration-200"
              aria-label={`${member.name} LinkedIn Profile`}
            >
              <Linkedin size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
