"use client";

import React from "react";
import {
  Trophy,
  Medal,
  Award,
  Zap,
  Sparkles,
  Package,
  Gift,
  FileCheck,
  Compass,
  Check,
} from "lucide-react";
import {
  prizePoolSummary,
  mainPrizes,
  top10Goodies,
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
        border: "border-cyan-400/50 hover:border-cyan-300",
        glow: "shadow-[0_0_40px_rgba(6,182,212,0.2)]",
        badge: "bg-cyan-950/60 text-cyan-300 border-cyan-400/50",
        badgeGlow: "shadow-[0_0_15px_rgba(6,182,212,0.35)]",
        textGradient: "from-cyan-300 via-sky-200 to-cyan-400",
        pedestalBg: "bg-gradient-to-t from-cyan-950/60 via-[#071324] to-[#060c1d]",
        pedestalBorder: "border-cyan-500/40",
        pedestalNum: "text-cyan-400/40",
        haloBg: "bg-cyan-500/10",
        icon: <Medal size={28} className="text-cyan-300" />,
        ringColor: "border-cyan-400/40",
      },
    },
    {
      prize: firstPrize,
      podiumRank: "01",
      orderClass: "order-1 lg:order-2 z-10",
      pedestalHeight: "h-28 sm:h-40",
      cardTranslate: "lg:-translate-y-4",
      accent: {
        border: "border-amber-400/60 hover:border-amber-300",
        glow: "shadow-[0_0_55px_rgba(245,158,11,0.28)]",
        badge: "bg-amber-950/70 text-amber-300 border-amber-400/60",
        badgeGlow: "shadow-[0_0_20px_rgba(245,158,11,0.45)]",
        textGradient: "from-amber-300 via-yellow-200 to-amber-400",
        pedestalBg: "bg-gradient-to-t from-amber-950/60 via-[#181308] to-[#060c1d]",
        pedestalBorder: "border-amber-400/50",
        pedestalNum: "text-amber-400/40",
        haloBg: "bg-amber-500/15",
        icon: <Trophy size={32} className="text-amber-300" />,
        ringColor: "border-amber-400/50",
      },
    },
    {
      prize: thirdPrize,
      podiumRank: "03",
      orderClass: "order-3 lg:order-3",
      pedestalHeight: "h-14 sm:h-20",
      cardTranslate: "lg:translate-y-8",
      accent: {
        border: "border-orange-500/50 hover:border-orange-400",
        glow: "shadow-[0_0_40px_rgba(249,115,22,0.2)]",
        badge: "bg-orange-950/60 text-orange-300 border-orange-400/50",
        badgeGlow: "shadow-[0_0_15px_rgba(249,115,22,0.35)]",
        textGradient: "from-orange-300 via-amber-200 to-orange-400",
        pedestalBg: "bg-gradient-to-t from-orange-950/60 via-[#1a0e08] to-[#060c1d]",
        pedestalBorder: "border-orange-500/40",
        pedestalNum: "text-orange-400/40",
        haloBg: "bg-orange-500/10",
        icon: <Award size={28} className="text-orange-300" />,
        ringColor: "border-orange-400/40",
      },
    },
  ].filter((item) => Boolean(item.prize));

  const goodiesIcons = [Package, Gift, FileCheck, Compass];

  return (
    <section
      id="prizes"
      className="relative isolate overflow-hidden bg-[#02050e] border-t border-cyan-500/20 font-sans py-24 sm:py-32"
    >
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-orange-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-900/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16 sm:mb-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Tactical Status Pill */}
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>BOUNTY PROTOCOL // 「賞金首」</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display">
              Bounties &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]">
                Prize Vault
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
              {prizePoolSummary.highlight}
            </p>

            {/* Total Pool Banner */}
            <div className="mt-8 relative w-full max-w-2xl group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-amber-400 to-orange-500 rounded-none blur-[2px] opacity-70 group-hover:opacity-100 transition duration-500 cyber-clip" />
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
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-white drop-shadow-[0_0_20px_rgba(252,211,77,0.4)]">
                    {prizePoolSummary.totalPool}
                  </div>
                  <div className="text-[10px] font-mono text-amber-300/90 tracking-widest uppercase mt-0.5">
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
                  <div
                    className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent ${
                      isFirst ? "via-amber-400/80" : "via-cyan-400/80"
                    } to-transparent`}
                  />

                  {/* Corner Sci-Fi Tags */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase border ${accent.badge} ${accent.badgeGlow} cyber-clip-sm`}
                    >
                      {isFirst ? <Sparkles size={13} /> : <Zap size={13} />}
                      <span>{prize.badge}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-400 border border-white/10 px-2 py-0.5 bg-black/60">
                      RANK // 0{prize.rank}
                    </span>
                  </div>

                  {/* Emblem / Badge (No Image, Sleek Tokyo Cyber Crest) */}
                  <div className="relative my-4 flex flex-col items-center justify-center">
                    {/* Glowing holographic ring */}
                    <div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 ${accent.ringColor} flex items-center justify-center bg-black/70 shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="absolute inset-1 rounded-full border border-dashed border-white/20 animate-[spin_25s_linear_infinite]" />
                      <div className="relative z-10">{accent.icon}</div>
                    </div>

                    {/* Kanji Seal */}
                    <div className="mt-3 text-xs font-mono tracking-widest text-slate-400 flex items-center gap-1.5">
                      <span className="text-white font-bold">{prize.subtitle}</span>
                      <span className="text-cyan-400">「{prize.kanji}」</span>
                    </div>
                  </div>

                  {/* Cash Reward Monolith */}
                  <div className="my-5 py-4 px-4 bg-black/80 border border-white/10 relative text-center group-hover:border-white/25 transition-colors cyber-clip-sm">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                      DIRECT CASH BOUNTY
                    </div>
                    <div
                      className={`text-3xl sm:text-4xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${accent.textGradient} drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
                    >
                      {prize.amount}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-light leading-relaxed text-center mb-6 min-h-[36px]">
                    {prize.description}
                  </p>

                  {/* Perks Checklist */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    {prize.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check
                          size={14}
                          className={`mt-0.5 flex-shrink-0 ${
                            isFirst ? "text-amber-400" : "text-cyan-400"
                          }`}
                        />
                        <span className="font-light">{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physical Podium Pedestal Block */}
                <div
                  className={`mt-3 w-full ${pedestalHeight} ${accent.pedestalBg} border ${accent.pedestalBorder} flex flex-col items-center justify-center relative cyber-clip-sm transition-all duration-300`}
                >
                  <div className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-white">
                    {podiumRank}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">
                    {prize.title} · {prize.kanji}
                  </div>
                  <div className="absolute bottom-1.5 inset-x-4 h-[1px] bg-white/10" />
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTOR 02: GOODIES FOR ALL TOP 10 FINALISTS */}
        <div className="mt-16 sm:mt-24">
          <div className="relative p-6 sm:p-10 bg-[#060c1d]/95 border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] cyber-clip overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase font-bold mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {top10Goodies.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-display">
                  {top10Goodies.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
                  {top10Goodies.subtitle}
                </p>
              </div>

              <div className="flex-shrink-0 self-start md:self-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider cyber-clip-sm shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <Gift size={14} />
                  <span>GUARANTEED FOR TOP 10</span>
                </span>
              </div>
            </div>

            {/* 4 Goodies Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {top10Goodies.perks.map((item, idx) => {
                const IconComponent = goodiesIcons[idx % goodiesIcons.length];

                return (
                  <div
                    key={idx}
                    className="p-5 bg-black/60 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between cyber-clip-sm group/perk"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover/perk:border-cyan-400 transition-colors">
                          <IconComponent size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
                          PERK // 0{idx + 1}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2 group-hover/perk:text-cyan-300 transition-colors font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>STATUS: INCLUDED</span>
                      <span className="text-cyan-400">TOP 10</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
