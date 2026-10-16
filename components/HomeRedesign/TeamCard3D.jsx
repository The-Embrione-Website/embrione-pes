"use client";

import React from "react";
import { Linkedin } from "lucide-react";

export default function TeamCard3D({ member }) {
  return (
    <div className="group relative rounded-xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.06)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-hidden transition-all duration-300 flex flex-col justify-between">
      {/* Cyber Corner Marker */}
      <span className="absolute top-1 left-2 font-mono text-[8px] text-cyan-500/40 select-none z-10">◤</span>

      {/* Portrait Photo with Subtle Zoom */}
      <div className="relative w-full aspect-[4/5] bg-[#02050e] overflow-hidden">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Minimal Cyber Role Badge */}
        {member.role && (
          <div className="absolute top-3 right-3">
            <span className="font-mono text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#02050e]/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              {member.role}
            </span>
          </div>
        )}
      </div>

      {/* Member Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400/80 block mb-1">
            {member.domain}
          </span>
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {member.name}
          </h3>
          {member.term && (
            <span className="font-mono text-[10px] text-slate-500 block mt-0.5">
              Term: {member.term}
            </span>
          )}
        </div>

        {/* Bottom Strip: Institution & LinkedIn */}
        <div className="mt-4 pt-3 border-t border-cyan-500/15 flex items-center justify-between font-mono text-[10px] text-slate-400">
          <span>PES UNIVERSITY</span>
          {member.linkedinUrl && member.linkedinUrl !== "www" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-cyan-400 hover:text-white transition-colors"
              aria-label={`${member.name} LinkedIn Profile`}
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
