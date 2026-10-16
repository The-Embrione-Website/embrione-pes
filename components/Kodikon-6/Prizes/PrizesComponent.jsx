import React from "react";
import Image from "next/image";
import { Trophy, Medal, Award, Zap } from "lucide-react";
import {
  prizePoolSummary,
  mainPrizes,
  categoryPrizes,
  finalistPerks,
} from "./prizesData";

export default function PrizesComponent() {
  // Order for podium on desktop: 2nd Place (Silver), 1st Place (Gold/Apex), 3rd Place (Bronze)
  const firstPrize = mainPrizes.find((p) => p.rank === 1);
  const secondPrize = mainPrizes.find((p) => p.rank === 2);
  const thirdPrize = mainPrizes.find((p) => p.rank === 3);

  const podiumList = [
    {
      prize: secondPrize,
      orderClass: "order-2 lg:order-1",
      colSpan: "lg:col-span-4",
    },
    {
      prize: firstPrize,
      orderClass: "order-1 lg:order-2",
      colSpan: "lg:col-span-4",
    },
    {
      prize: thirdPrize,
      orderClass: "order-3 lg:order-3",
      colSpan: "lg:col-span-4",
    },
  ].filter((item) => Boolean(item.prize));

  return (
    <section
      id="prizes"
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
      />
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-fuchsia-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Cyberpunk HUD Header */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="relative mb-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Tactical Status Pill */}

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display">
            Bounties &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-300 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              Prize Vault
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
            {prizePoolSummary.highlight}
          </p>

          {/* Cyber Megabox: Total Pool HUD Display */}
          <div className="mt-8 relative w-full max-w-2xl group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-amber-400 to-fuchsia-500 rounded-lg blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-[#070b14]/95 border border-cyan-500/40 p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Corner Sci-Fi Crosshairs */}
              <span className="absolute top-1 left-1 text-[8px] font-mono text-cyan-500/70 select-none">
                ◤ 01
              </span>
              <span className="absolute top-1 right-1 text-[8px] font-mono text-cyan-500/70 select-none">
                02 ◥
              </span>
              <span className="absolute bottom-1 left-1 text-[8px] font-mono text-cyan-500/70 select-none">
                ◣ 03
              </span>
              <span className="absolute bottom-1 right-1 text-[8px] font-mono text-cyan-500/70 select-none">
                04 ◢
              </span>

              <div className="flex items-center gap-3.5 text-left">
                <div className="w-12 h-12 rounded bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Zap size={24} className="animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    SYS_ALLOCATION // SECURE_ESCROW
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {prizePoolSummary.poolLabel}
                  </div>
                </div>
              </div>

              <div className="text-center sm:text-right">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white drop-shadow-[0_0_20px_rgba(252,211,77,0.4)]">
                  {prizePoolSummary.totalPool}
                </div>
                <div className="text-[10px] font-mono text-amber-300/80 tracking-widest uppercase">
                  DIRECT CASH + COMPUTE CREDITS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Section Header Divider */}
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
          // SECTOR_01 // THE PODIUM APEX
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 via-slate-800 to-transparent" />
        <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
          PROTOCOL: VERIFIED_DISBURSEMENT
        </span>
      </div>

      {/* PODIUM GRID: 3 Clean Cyber Ranks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
        {podiumList.map(({ prize, orderClass, colSpan }) => {
          if (!prize) return null;
          const isFirst = prize.rank === 1;
          const isSecond = prize.rank === 2;

          // Visual styles tuned per rank
          const theme = isFirst
            ? {
                accentBorder: "border-amber-400/60 hover:border-amber-300",
                glowShadow: "shadow-[0_0_50px_rgba(245,158,11,0.25)]",
                cornerColor: "border-amber-400",
                scanColor: "from-amber-400/0 via-amber-300/30 to-amber-400/0",
                badgeBg: "bg-amber-400/15 border-amber-400/50 text-amber-300",
                badgeGlow: "shadow-[0_0_15px_rgba(245,158,11,0.4)]",
                icon: <Trophy size={16} className="text-amber-300" />,
                heightClass: "lg:-translate-y-6 pt-9 pb-9",
                bgGradient:
                  "bg-gradient-to-b from-[#181308] via-[#0e0f18] to-[#07090f]",
              }
            : isSecond
              ? {
                  accentBorder: "border-cyan-400/50 hover:border-cyan-300",
                  glowShadow: "shadow-[0_0_40px_rgba(6,182,212,0.2)]",
                  cornerColor: "border-cyan-400",
                  scanColor: "from-cyan-400/0 via-cyan-300/30 to-cyan-400/0",
                  badgeBg: "bg-cyan-400/15 border-cyan-400/50 text-cyan-300",
                  badgeGlow: "shadow-[0_0_15px_rgba(6,182,212,0.35)]",
                  icon: <Medal size={16} className="text-cyan-300" />,
                  heightClass: "pt-8 pb-8",
                  bgGradient:
                    "bg-gradient-to-b from-[#081520] via-[#0a0f1d] to-[#07090f]",
                }
              : {
                  accentBorder: "border-orange-500/50 hover:border-orange-400",
                  glowShadow: "shadow-[0_0_40px_rgba(249,115,22,0.2)]",
                  cornerColor: "border-orange-400",
                  scanColor:
                    "from-orange-400/0 via-orange-300/30 to-orange-400/0",
                  badgeBg:
                    "bg-orange-500/15 border-orange-400/50 text-orange-300",
                  badgeGlow: "shadow-[0_0_15px_rgba(249,115,22,0.35)]",
                  icon: <Award size={16} className="text-orange-300" />,
                  heightClass: "pt-8 pb-8",
                  bgGradient:
                    "bg-gradient-to-b from-[#1c0f08] via-[#0e0f18] to-[#07090f]",
                };

          return (
            <div
              key={prize.id}
              className={`relative group ${colSpan} ${orderClass} ${theme.heightClass} px-6 sm:px-8 rounded-none border ${theme.accentBorder} ${theme.bgGradient} ${theme.glowShadow} transition-all duration-500 flex flex-col justify-between`}
            >
              {/* Cyber Cut-Corner Accents */}
              <div
                className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${theme.cornerColor}`}
              />
              <div
                className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${theme.cornerColor}`}
              />
              <div
                className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${theme.cornerColor}`}
              />
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${theme.cornerColor}`}
              />

              {/* Laser / Scanner Line across the top */}
              <div
                className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${theme.scanColor}`}
              />

              {/* Watermark Rank in background */}
              <div className="absolute right-4 top-14 text-7xl font-black font-mono text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors">
                0{prize.rank}
              </div>

              <div>
                {/* Tactical Top Tagline */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider uppercase border ${theme.badgeBg} ${theme.badgeGlow}`}
                  >
                    {theme.icon}
                    <span>{prize.badge}</span>
                  </div>

                  {/* <span className="text-[10px] font-mono px-2 py-0.5 bg-black/60 border border-white/10 text-slate-400">
                    RANK_0{prize.rank}
                  </span> */}
                </div>

                {/* Trophy Graphic with Holographic Backdrop */}
                <div className="relative my-4 flex items-center justify-center">
                  {/* Neon Radial Ring */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-36 h-36 rounded-full border border-dashed border-white/10 ${
                        isFirst
                          ? "group-hover:border-amber-400/40"
                          : "group-hover:border-cyan-400/40"
                      } animate-[spin_20s_linear_infinite] transition-colors`}
                    />
                  </div>

                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                    <Image
                      src={prize.image}
                      alt={prize.title}
                      fill
                      sizes="(max-width: 768px) 130px, 160px"
                      className="object-contain filter drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                </div>

                {/* Rank Details */}
                <div className="text-center mt-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
                    {prize.title}
                  </h3>
                  <div className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                    {prize.subtitle}
                  </div>

                  {/* Cash Amount Hero Display */}
                  <div className="my-5 py-3.5 px-4 bg-black/70 border border-white/10 relative overflow-hidden group-hover:border-white/20 transition-colors">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-0.5">
                      DIRECT CASH ESCROW
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${prize.accentGradient}`}
                    >
                      {prize.amount}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed min-h-[44px] px-2">
                    {prize.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
</div>
      {/*
      ========================================================================
      COMMENTED OUT ADDITIONAL SECTIONS (Per request: not in main issues list)
      - Sector 02: Category Excellence & Diversity Grants
      - Sector 03: Universal Finalist Perks & Tactical Kit
      ========================================================================
      */}

      {/*
      <div className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-fuchsia-400 tracking-widest uppercase font-bold">
                // SECTOR_02 // SPECIAL PROTOCOL HONORS
              </span>
              <span className="w-1.5 h-1.5 bg-fuchsia-400 animate-ping rounded-full" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-display mt-1">
              Category Excellence &amp; Diversity Grants
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoryPrizes.map((cat) => {
            const isAllGirls = cat.id === "all-girls";
            const borderAccent = isAllGirls
              ? "border-fuchsia-500/40 hover:border-fuchsia-400 shadow-[0_0_35px_rgba(217,70,239,0.15)]"
              : "border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.15)]";
            const cornerColor = isAllGirls ? "border-fuchsia-400" : "border-cyan-400";
            const glowBg = isAllGirls ? "bg-fuchsia-600/10" : "bg-cyan-600/10";
            const badgeBg = isAllGirls
              ? "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40 shadow-[0_0_12px_rgba(217,70,239,0.3)]"
              : "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]";
            const amountColor = isAllGirls ? "text-fuchsia-300" : "text-cyan-300";

            return (
              <div
                key={cat.id}
                className={`relative p-6 sm:p-8 bg-[#090d18] border ${borderAccent} transition-all duration-500 flex flex-col justify-between overflow-hidden group`}
              >
                <div className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 ${cornerColor}`} />
                <div className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 ${cornerColor}`} />
                <div className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 ${cornerColor}`} />
                <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 ${cornerColor}`} />

                <div
                  className={`absolute -right-16 -top-16 w-48 h-48 rounded-full blur-3xl pointer-events-none ${glowBg}`}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold tracking-wider uppercase border ${badgeBg}`}
                    >
                      <span>{cat.badge}</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-display">
                      {cat.title}
                    </h4>
                    <div className="text-left sm:text-right">
                      <span className={`text-2xl sm:text-3xl font-black font-mono ${amountColor}`}>
                        {cat.amount}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-400 tracking-wider">
                        {cat.breakdown}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                    {cat.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 bg-black/60 border border-white/10 text-xs flex items-center justify-between gap-2 hover:border-white/20 transition-colors"
                      >
                        <span className="text-slate-200 font-light truncate">
                          {item.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                            isAllGirls
                              ? "bg-fuchsia-950/70 text-fuchsia-300 border-fuchsia-800/60"
                              : "bg-cyan-950/70 text-cyan-300 border-cyan-800/60"
                          }`}
                        >
                          {item.code}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                  {cat.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className={`font-mono text-xs ${isAllGirls ? "text-fuchsia-400" : "text-cyan-400"}`}
                      >
                        ◈
                      </span>
                      <span className="text-xs text-slate-300 font-light">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative p-6 sm:p-9 bg-[#070b14] border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7 pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Zap size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight uppercase font-display">
                  Universal Finalist Perks &amp; Tactical Kit
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                  40 TEAMS
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Standard baseline disbursement issued to all 40 shortlisted engineering teams at PESU 52
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1.5">
            // ALL_FINALISTS
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {finalistPerks.map((perk, idx) => (
            <div
              key={idx}
              className="p-4 bg-black/60 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group/perk"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                    MODULE_0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover/perk:bg-cyan-400 transition-colors" />
                </div>
                <h5 className="text-sm font-semibold text-white mb-1.5 group-hover/perk:text-cyan-300 transition-colors">
                  {perk.title}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {perk.detail}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>STATUS: READY</span>
                <span className="text-cyan-400/80">CONFIRMED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
    </section>
  );
}
