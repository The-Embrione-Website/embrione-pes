"use client";

import React from "react";
import { Linkedin } from "lucide-react";

export default function TeamCard3D({ member }) {
  return (
    <div className="group relative rounded-2xl bg-[#060c1d]/90 border border-white/10 hover:border-cyan-400/60 shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)] transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden">
      
      {/* Sleek Professional Hover Focus Frame */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-300 z-30" />
      <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-transparent group-hover:border-cyan-400/20 transition-colors duration-300 z-30" />

      {/* Portrait Photo */}
      <div className="relative w-full aspect-[4/5] bg-[#02050e] overflow-hidden">
        {/* Role Pill Badge */}
        {member.role && (
          <div className="absolute top-3 right-3 z-20">
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#02050e]/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-sm">
              {member.role}
            </span>
          </div>
        )}

        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Soft Vignette Bottom Blend */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060c1d] to-transparent pointer-events-none z-10" />
      </div>

      {/* Member Details */}
      <div className="p-5 flex flex-col justify-between flex-1 relative z-20 bg-[#060c1d]">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-cyan-400 block mb-1">
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
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>PES University</span>

          {member.linkedinUrl && member.linkedinUrl !== "www" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-all duration-200"
              aria-label={`${member.name} LinkedIn Profile`}
            >
              <Linkedin size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
