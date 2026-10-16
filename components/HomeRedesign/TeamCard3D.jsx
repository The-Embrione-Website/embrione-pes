"use client";

import React from "react";
import { Linkedin } from "lucide-react";

const getDomainKanji = (domain = "") => {
  const d = domain.toLowerCase();
  if (d.includes("club head") || d.includes("president") || d.includes("lead")) return "統括";
  if (d.includes("web") || d.includes("tech") || d.includes("dev")) return "電脳";
  if (d.includes("event") || d.includes("management") || d.includes("operation")) return "運営";
  if (d.includes("sponsor") || d.includes("finance")) return "渉外";
  if (d.includes("design") || d.includes("media") || d.includes("creative")) return "設計";
  if (d.includes("pr") || d.includes("outreach") || d.includes("public")) return "広報";
  return "幹部";
};

export default function TeamCard3D({ member, index = 0 }) {
  const opId = (index + 1).toString().padStart(2, "0");
  const domainKanji = getDomainKanji(member.domain);

  return (
    <div className="group relative bg-[#060c1d]/95 border border-cyan-500/25 hover:border-cyan-400/70 shadow-[0_0_20px_rgba(6,182,212,0.06)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.22)] cyber-clip transition-all duration-300 ease-out flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden">
      
      {/* ========================================================
          CYBER HUD TARGETING FRAME (Reveals & Locks in on Hover)
          ======================================================== */}
      {/* 4 Animated Corner Brackets */}
      <div className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/40 transition-all duration-300 ease-out group-hover:w-6 group-hover:h-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.9)] z-30" />
      <div className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-500/40 transition-all duration-300 ease-out group-hover:w-6 group-hover:h-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.9)] z-30" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-500/40 transition-all duration-300 ease-out group-hover:w-6 group-hover:h-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.9)] z-30" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/40 transition-all duration-300 ease-out group-hover:w-6 group-hover:h-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.9)] z-30" />

      {/* Inner Targeting Reticle Frame with Edge Crosshairs */}
      <div className="pointer-events-none absolute inset-1.5 border border-cyan-400/0 opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 group-hover:border-cyan-400/40 group-hover:shadow-[inset_0_0_20px_rgba(6,182,212,0.18)] transition-all duration-300 ease-out z-25">
        {/* Top edge center crosshair tick */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-cyan-400" />
        {/* Bottom edge center crosshair tick */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-cyan-400" />
        {/* Left edge center crosshair tick */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-4 w-[1px] bg-cyan-400" />
        {/* Right edge center crosshair tick */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-4 w-[1px] bg-cyan-400" />
        {/* Reticle Status Label */}
        <div className="absolute bottom-1 right-2 font-mono text-[7px] text-cyan-300/80 tracking-widest uppercase">
          LOCKED // 0x{opId}
        </div>
      </div>

      {/* Photo Stage */}
      <div className="relative w-full aspect-[4/5] bg-[#02050e] overflow-hidden">
        {/* Laser Scanner Bar Sweeping on Hover */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent -translate-y-full group-hover:translate-y-[320px] transition-transform duration-1000 ease-in-out z-20 opacity-0 group-hover:opacity-100" />
        
        {/* Scanline CRT Mesh (appears on hover) */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.06)_1px,transparent_1px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />

        {/* Tactical HUD Header on Photo */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
          <span className="font-mono text-[9px] text-cyan-300/90 bg-black/80 backdrop-blur-md px-2 py-0.5 border border-cyan-500/40 flex items-center gap-1.5 cyber-clip-sm shadow-[0_0_10px_rgba(6,182,212,0.25)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>UNIT_{opId}</span>
          </span>
        </div>

        {/* Role Badge (Top-Right) */}
        {member.role && (
          <div className="absolute top-3 right-3 z-20">
            <span className="font-mono text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 bg-[#02050e]/90 backdrop-blur-md text-cyan-300 border border-cyan-400/50 cyber-clip-sm shadow-[0_0_12px_rgba(6,182,212,0.25)]">
              {member.role}
            </span>
          </div>
        )}

        {/* Member Photo */}
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
          loading="lazy"
        />

        {/* Bottom Dark Vignette with Grid Blend */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060c1d] via-[#060c1d]/60 to-transparent pointer-events-none z-10" />

        {/* Japanese Domain Stamp in bottom-left of photo */}
        <div className="absolute bottom-2 left-3 z-20 flex items-center gap-1 text-[10px] font-mono text-cyan-400/90 font-bold bg-black/60 px-2 py-0.5 border border-cyan-500/30 backdrop-blur-sm">
          <span>「{domainKanji}」</span>
          <span className="text-[9px] text-slate-300 font-normal uppercase tracking-wider">{member.domain}</span>
        </div>
      </div>

      {/* Member Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 relative z-20 bg-[#060c1d]">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
              // {member.domain}
            </span>
            <span className="font-mono text-[9px] text-cyan-500/60">
              SYS_ACTIVE
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(6,182,212,0)] group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            {member.name}
          </h3>

          {member.term && (
            <span className="font-mono text-[10px] text-slate-400 block mt-0.5">
              CYCLE: {member.term}
            </span>
          )}
        </div>

        {/* Bottom Strip: Institution & LinkedIn */}
        <div className="mt-4 pt-3 border-t border-cyan-500/20 flex items-center justify-between font-mono text-[10px] text-slate-400">
          <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
            PESU 52 // CSE
          </span>

          {member.linkedinUrl && member.linkedinUrl !== "www" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-black/70 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200 cyber-clip-sm"
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
