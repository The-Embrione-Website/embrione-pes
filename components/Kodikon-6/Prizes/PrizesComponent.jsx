"use client";

import React from "react";
import {
  Trophy,
  Medal,
  Award,
  Zap,
  Sparkles,
  Gift,
  Check,
} from "lucide-react";
import {
  prizePoolSummary,
  mainPrizes,
  top10GoodiesNote,
} from "./prizesData";

export default function PrizesComponent() {
  const firstPrize = mainPrizes.find((p) => p.rank === 1);
  const secondPrize = mainPrizes.find((p) => p.rank === 2);
  const thirdPrize = mainPrizes.find((p) => p.rank === 3);

  // Podium order: 2nd place on left, 1st place in center (apex), 3rd place on right
  const podiumList = [
    {
      prize: secondPrize,
      podiumRank: "02",
      orderClass: "order-2 lg:order-1",
      pedestalHeight: "h-20 sm:h-28",
      cardTranslate: "lg:translate-y-4",
      accent: {
        border: "border-cyan-500/40 hover:border-cyan-300",
        glow: "shadow-[0_0_35px_rgba(6,182,212,0.15)]",
        badge: "bg-cyan-950/60 text-sky-300 border-cyan-500/40",
        badgeGlow: "shadow-[0_0_15px_rgba(6,182,212,0.25)]",
        textGradient: "from-sky-300 via-cyan-200 to-white",
        pedestalBg: "bg-gradient-to-t from-cyan-950/50 via-[#060f1e] to-[#060c1d]",
        pedestalBorder: "border-cyan-500/30",
        pedestalNum: "text-cyan-400/40",
        icon: <Medal size={28} className="text-sky-300" />,
        ringColor: "border-cyan-500/40",
      },
    },
    {
      prize: firstPrize,
      podiumRank: "01",
      orderClass: "order-1 lg:order-2 z-10",
      pedestalHeight: "h-28 sm:h-40",
      cardTranslate: "lg:-translate-y-4",
      accent: {
        border: "border-cyan-400/70 hover:border-cyan-300",
        glow: "shadow-[0_0_50px_rgba(6,182,212,0.28)]",
        badge: "bg-cyan-950/80 text-cyan-300 border-cyan-400/60",
        badgeGlow: "shadow-[0_0_20px_rgba(6,182,212,0.4)]",
        textGradient: "from-cyan-300 via-sky-200 to-white",
        pedestalBg: "bg-gradient-to-t from-cyan-950/80 via-[#071324] to-[#060c1d]",
        pedestalBorder: "border-cyan-400/50",
        pedestalNum: "text-cyan-400/60",
        icon: <Trophy size={32} className="text-cyan-300" />,
        ringColor: "border-cyan-400/60",
      },
    },
    {
      prize: thirdPrize,
      podiumRank: "03",
      orderClass: "order-3 lg:order-3",
      pedestalHeight: "h-14 sm:h-20",
      cardTranslate: "lg:translate-y-8",
      accent: {
        border: "border-cyan-500/30 hover:border-cyan-400",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.12)]",
        badge: "bg-cyan-950/40 text-cyan-200 border-cyan-500/30",
        badgeGlow: "shadow-[0_0_12px_rgba(6,182,212,0.2)]",
        textGradient: "from-cyan-400 via-slate-200 to-white",
        pedestalBg: "bg-gradient-to-t from-cyan-950/30 via-[#040a17] to-[#060c1d]",
        pedestalBorder: "border-cyan-500/20",
        pedestalNum: "text-cyan-400/30",
        icon: <Award size={28} className="text-cyan-400" />,
        ringColor: "border-cyan-500/30",
      },
    },
  ].filter((item) => Boolean(item.prize));

  return (
    <section
      id="prizes"
      className="scroll-mt-20 sm:scroll-mt-24 relative isolate overflow-hidden bg-[#02050e] border-t border-cyan-500/20 font-sans py-24 sm:py-32"
    >
      {/* Background Cyber Ambient Lights - Clean Cyan/Blue palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-900/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16 sm:mb-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Tactical Status Pill - Exactly matches Tracks & Sponsors */}
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>BOUNTY PROTOCOL // 「賞金首」</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display">
              Bounties 
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
              {prizePoolSummary.highlight}
            </p>

            {/* Total Pool Banner - Cyan/Sapphire Cyber Theme */}
            <div className="mt-8 relative w-full max-w-2xl group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 rounded-none blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500 cyber-clip" />
              <div className="relative bg-[#060c1d]/95 border border-cyan-500/40 p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 cyber-clip">
                {/* Crosshairs */}
                <span className="absolute top-1.5 left-2 text-[8px] font-mono text-cyan-500/70 select-none">
                  ◤ SYS_ESCROW
                </span>
                <span className="absolute top-1.5 right-2 text-[8px] font-mono text-cyan-500/70 select-none">
                  LOCKED ◥
                </span>

                <div className="flex items-center gap-3.5 text-left">
                  <div className="w-12 h-12 bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] cyber-clip-sm flex-shrink-0">
                    <Zap size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                      {prizePoolSummary.telemetry}
                    </div>
                    <div className="text-sm font-semibold text-slate-200">
                      {prizePoolSummary.poolLabel}
                    </div>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    {prizePoolSummary.totalPool}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400/90 tracking-widest uppercase mt-0.5">
                    ₹50K · ₹30K · ₹20K + TOP 10 GOODIES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Podium Subtitle Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold">
            // SECTOR_01 // THE PODIUM STAGE 「表彰台」
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/50 via-slate-800 to-transparent" />
          <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
            RANK 01 · 02 · 03 DIRECT CASH
          </span>
        </div>

        {/* PODIUM DISPLAY: 3 Columns with Base Pedestals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end mb-16">
          {podiumList.map(({ prize, podiumRank, orderClass, pedestalHeight, cardTranslate, accent }) => {
            if (!prize) return null;
            const isFirst = prize.rank === 1;

            return (
              <div
                key={prize.id}
                className={`flex flex-col ${orderClass} ${cardTranslate} transition-transform duration-300`}
              >
                {/* Prize Card */}
                <div
                  className={`relative p-6 sm:p-8 bg-[#060c1d]/95 border ${accent.border} ${accent.glow} cyber-clip flex flex-col justify-between overflow-hidden group`}
                >
                  {/* Subtle top scan line */}
                  <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />

                  {/* Corner Sci-Fi Tags */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase border ${accent.badge} ${accent.badgeGlow} cyber-clip-sm`}
                    >
                      {isFirst ? <Sparkles size={13} /> : <Zap size={13} />}
                      <span>{prize.badge}</span>
                    </span>

                    <span className="text-xs font-mono text-cyan-400/80 border border-cyan-500/30 px-2 py-0.5 bg-cyan-950/40">
                      RANK // 0{prize.rank}
                    </span>
                  </div>

                  {/* Emblem / Badge (No Image, Sleek Crest Badge) */}
                  <div className="relative my-4 flex flex-col items-center justify-center">
                    {/* Glowing holographic ring */}
                    <div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 ${accent.ringColor} flex items-center justify-center bg-black/70 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="absolute inset-1 rounded-full border border-dashed border-cyan-500/30 animate-[spin_25s_linear_infinite]" />
                      <div className="relative z-10">{accent.icon}</div>
                    </div>

                    {/* Kanji Seal */}
                    <div className="mt-3 text-xs font-mono tracking-widest text-slate-400 flex items-center gap-1.5">
                      <span className="text-white font-bold">{prize.subtitle}</span>
                      <span className="text-cyan-400">「{prize.kanji}」</span>
                    </div>
                  </div>

                  {/* Cash Reward Monolith */}
                  <div className="my-5 py-4 px-4 bg-black/80 border border-cyan-500/30 relative text-center group-hover:border-cyan-400/50 transition-colors cyber-clip-sm">
                    <div className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-widest mb-1">
                      DIRECT CASH BOUNTY
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${accent.textGradient} drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]`}
                    >
                      {prize.amount}
                    </div>
                  </div>
                </div>

                {/* Physical Podium Pedestal Block */}
                <div
                  className={`mt-3 w-full ${pedestalHeight} ${accent.pedestalBg} border ${accent.pedestalBorder} flex flex-col items-center justify-center relative cyber-clip-sm transition-all duration-300`}
                >
                  <div className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-white">
                    {podiumRank}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest mt-0.5">
                    {prize.title} · {prize.kanji}
                  </div>
                  <div className="absolute bottom-1.5 inset-x-4 h-[1px] bg-cyan-500/20" />
                </div>
              </div>
            );
          })}
        </div>

        {/* TOP 10 TEAMS GOODIES NOTE */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-[#060c1d]/90 border border-cyan-500/30 text-slate-200 text-xs sm:text-sm font-mono shadow-[0_0_25px_rgba(6,182,212,0.15)] backdrop-blur-xl">
            <Gift size={16} className="text-amber-400 shrink-0" />
            <span>Top 10 teams (including the top 3) will be receiving goodies.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
