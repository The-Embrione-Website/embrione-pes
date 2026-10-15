import React from "react";
import Image from "next/image";
import {
  ExternalLink,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  sponsorsHeader,
  titleSponsor,
  platformPartners,
  techPartners,
  sponsorStats,
} from "./sponsorsData";

export default function SponsorsComponent() {
  return (
    <section
  id="sponsors"
  className="relative isolate overflow-hidden bg-brand-canvas font-sans"
>
  {/* Full-width ambient glow — spans the entire viewport */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      background:
        "radial-gradient(ellipse at 50% 0%, rgba(0, 113, 227, 0.20) 0%, rgba(0, 113, 227, 0.10) 28%, rgba(0, 81, 180, 0.04) 48%, transparent 75%), linear-gradient(180deg, #000514 0%, #000000 100%)",
    }}
  />

  {/* Subtle ambient blue light */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 bg-brand-accent-blue/5 blur-[100px]"
  /> <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      {/* Background Cyber Glow & Ambient Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-surface-navy/90 blur-[120px] pointer-events-none -z-10" />
<div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Cyber Section Header */}
      <div className="relative mb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Tactical Status Pill */}
        

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display">
            Sponsors &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">Allies</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            {sponsorsHeader.description}
          </p>

          {/* Quick Telemetry Stats Ribbon */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
            {sponsorStats.map((st, idx) => (
              <div
                key={idx}
                className="relative p-3 bg-black/70 border border-cyan-500/25 text-center group hover:border-cyan-400 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                  {st.value}
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIER 1: TITLE SPONSOR (CYBER APEX MAINFRAME) */}
      <div className="mb-20 ">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
            // SECTOR_01 // TITLE SPONSOR
          </span>
          <div className="h-[1px] flex-1  bg-gradient-to-r from-cyan-500/50 via-slate-800 to-transparent" />
          <span className="text-[10px] font-mono text-cyan-400/70 border border-cyan-500/30 px-2 py-0.5 bg-cyan-950/40">
            FLAGSHIP PARTNER
          </span>
        </div>

        <div className="relative group p-6 sm:p-10 lg:p-12 bg-gradient-to-br bg-brand-surface-navy/90 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.18)] transition-all duration-500 overflow-hidden">
          {/* Cyber Corner brackets */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan-400" />

          {/* Hologram Grid Ambient */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Brand Monolith Display */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-black/80 border border-cyan-500/30 relative group/box">
              {/* Corner Sci-Fi tags */}
              <span className="absolute top-1.5 left-2 text-[8px] font-mono text-cyan-500/60">NODE: PIX-01</span>
              <span className="absolute bottom-1.5 right-2 text-[8px] font-mono text-cyan-500/60">SYS: LIVE</span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase bg-cyan-400/15 border border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-6">
                <Sparkles size={12} />
                <span>{titleSponsor.tierBadge}</span>
              </div>

              <div className="relative w-56 h-32 sm:w-64 sm:h-36 mb-5 transition-transform duration-500 group-hover/box:scale-105">
                <Image
                  src={titleSponsor.logo}
                  alt={titleSponsor.name}
                  fill
                  sizes="(max-width: 768px) 240px, 280px"
                  className="object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                />
              </div>

              <h3 className="text-3xl font-black text-white uppercase tracking-tight font-display text-center">
                {titleSponsor.name}
              </h3>
              <p className="text-xs text-cyan-400 font-mono mt-1 text-center">
                Hardware &amp; IoT Security Pioneers
              </p>

              <a
                href={titleSponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] group/btn"
              >
                <span>Access Mainframe</span>
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: Technical Brief & Integration Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <ShieldCheck size={16} />
                  <span className="tracking-widest uppercase font-bold">PREMIER TECHNICAL ALLIANCE</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug font-display">
                  {titleSponsor.tagline}
                </h4>

                <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
                  {titleSponsor.description}
                </p>

                {/* Tactical Highlights with Terminal Indicators */}
                <div className="mt-6 space-y-3">
                  {titleSponsor.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 bg-black/40 border border-white/5">
                      <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">
                        [0{idx + 1}]
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Footer HUD */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {titleSponsor.stats.map((st, idx) => (
                  <div key={idx} className="p-3 bg-black/60 border border-white/10 text-left">
                    <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                      {st.label}
                    </span>
                    <span className="block text-xs font-mono font-bold text-cyan-300 mt-1">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: PLATFORM PARTNERS */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
            // SECTOR_02 // PLATFORM PARTNERS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 via-slate-800 to-transparent" />
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
            CORE INFRASTRUCTURE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platformPartners.map((partner) => (
            <div
              key={partner.id}
              className="relative p-7 sm:p-8 bg-brand-surface-navy/90 border border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.12)] transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider uppercase bg-cyan-950/60 text-cyan-300 border border-cyan-500/40">
                    <Globe size={12} />
                    <span>{partner.badge}</span>
                  </span>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded bg-black/60 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all"
                    aria-label={`Visit ${partner.name}`}
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Logo & Headline */}
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-20 h-20 rounded bg-black/90 border border-white/10 flex items-center justify-center p-3 relative flex-shrink-0 group-hover:border-cyan-500/40 transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="90px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors font-display">
                      {partner.name}
                    </h4>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      {partner.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>

              {/* Value Add / Perks */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-cyan-400">▶</span>
                <span className="font-light">{partner.perks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIER 3: TECH & INFRASTRUCTURE PARTNERS */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
            // SECTOR_03 // TECH &amp; DEVELOPER PARTNERS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 via-slate-800 to-transparent" />
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
            ECOSYSTEM TOOLING
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techPartners.map((tech) => (
            <div
              key={tech.id}
              className="relative p-5 bg-brand-surface-navy/90 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-black/60 text-cyan-300 border border-cyan-800/50">
                    {tech.badge}
                  </span>
                  <a
                    href={tech.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-cyan-400 transition-colors"
                    aria-label={`Visit ${tech.name}`}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Logo Area */}
                <div className="w-full h-16 rounded bg-black/70 border border-white/5 flex items-center justify-center p-3 mb-4 relative group-hover:border-cyan-500/30 transition-colors">
                  <div className="relative w-full h-full max-w-[130px]">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      sizes="130px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <h5 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                  {tech.name}
                </h5>
                <p className="text-[11px] font-mono text-slate-400 mb-2">
                  {tech.role}
                </p>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5">
                <a
                  href={tech.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase"
                >
                  <span>Connect Node</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
</div>
    </section>
  );
}
