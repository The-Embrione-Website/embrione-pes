"use client";

import React, { useEffect, useRef, useState } from "react";
import { Calendar, Clock, Sparkles } from "lucide-react";
import { kodikon6TimelineEvents, kodikon6ScheduleEvents } from "./timelineData";
import { SingleJapaneseTower } from "./SingleJapaneseTower";

const FLOATING_EMBERS = [
  { left: "6%", top: "12%", size: "h-1.5 w-1.5", delay: "0s", duration: "7s", color: "bg-cyan-400" },
  { left: "15%", top: "32%", size: "h-1 w-1", delay: "1.2s", duration: "8.5s", color: "bg-amber-400" },
  { left: "84%", top: "20%", size: "h-1.5 w-1.5", delay: "2.5s", duration: "9s", color: "bg-cyan-300" },
  { left: "92%", top: "52%", size: "h-1 w-1", delay: "3s", duration: "7.5s", color: "bg-purple-400" },
  { left: "10%", top: "65%", size: "h-1.5 w-1.5", delay: "0.8s", duration: "10s", color: "bg-amber-300" },
  { left: "88%", top: "78%", size: "h-1 w-1", delay: "2.2s", duration: "8s", color: "bg-cyan-400" },
];

// Configuration for each floor's connection geometry on desktop
const FLOOR_CONFIG = [
  {
    floorIndex: 0,
    floorNum: 5,
    isLeft: true,
    cardTop: 280,
    lineY: 338,
    roomHalfWidth: 105,
  },
  {
    floorIndex: 1,
    floorNum: 4,
    isLeft: false,
    cardTop: 490,
    lineY: 549,
    roomHalfWidth: 120,
  },
  {
    floorIndex: 2,
    floorNum: 3,
    isLeft: true,
    cardTop: 725,
    lineY: 784,
    roomHalfWidth: 134,
  },
  {
    floorIndex: 3,
    floorNum: 2,
    isLeft: false,
    cardTop: 985,
    lineY: 1043,
    roomHalfWidth: 151,
  },
  {
    floorIndex: 4,
    floorNum: 1,
    isLeft: true,
    cardTop: 1270,
    lineY: 1327,
    roomHalfWidth: 168,
  },
];

export function EventTimelineComponent() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track active floor as user scrolls down the timeline (for Pagoda Tower)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalDistance = rect.height - vh;
      if (totalDistance <= 0) return;

      const rawProgress = -rect.top / totalDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeFloor = Math.min(4, Math.floor(scrollProgress * 5));

  const day1Events = kodikon6ScheduleEvents.filter((item) => item.day === 1);
  const day2Events = kodikon6ScheduleEvents.filter((item) => item.day === 2);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-brand-canvas font-sans text-brand-text-primary pt-20 pb-28 sm:pt-28 sm:pb-36"
    >
      {/* 1. Ambient Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 15%, rgba(6, 182, 212, 0.12) 0%, rgba(0, 113, 227, 0.06) 35%, rgba(0, 5, 20, 0.95) 70%, #000000 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[1100px] w-[650px] rounded-full bg-cyan-500/5 blur-[160px]"
      />

      {/* 2. Japanese Kumiko / Diamond Lattice Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(45deg,rgba(255,255,255,0.06)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,255,255,0.06)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(255,255,255,0.06)_75%),linear-gradient(-45deg,transparent_75%,rgba(255,255,255,0.06)_75%)] bg-[size:32px_32px]"
      />

      {/* 3. Floating Ethereal Embers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {FLOATING_EMBERS.map((ember, idx) => (
          <span
            key={idx}
            className={`absolute rounded-full opacity-35 animate-pulse ${ember.size} ${ember.color}`}
            style={{
              left: ember.left,
              top: ember.top,
              animationDelay: ember.delay,
              animationDuration: ember.duration,
            }}
          />
        ))}
      </div>

      {/* 4. SECTION HEADER */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20 text-center">
        {/* Torii Gate Emblem / Crest */}
        <div className="inline-flex items-center justify-center gap-2 mb-3 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
          <Sparkles
            className="w-3.5 h-3.5 text-amber-400 animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <span>五重塔 · SACRED CHRONICLE</span>
          <Sparkles
            className="w-3.5 h-3.5 text-amber-400 animate-spin"
            style={{ animationDuration: "8s" }}
          />
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Kodikon 6.0{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Roadmap &amp; Timeline
          </span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-normal leading-relaxed px-4">
          Ascend the sacred five-story pagoda to follow our hackathon journey from registration opening to the grand 24-hour finale.
        </p>

        {/* Japanese Calligraphy Divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-amber-400 bg-cyan-950 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. PART I: MILESTONES ROADMAP                                  */}
      {/* ============================================================== */}

      {/* DESKTOP VIEW (>= 1024px): 5-Story Pagoda Tower */}
      <div className="hidden lg:block relative max-w-7xl mx-auto px-6 min-h-[1750px]">
        {/* Central Pagoda Tower */}
        <div className="relative z-10 pointer-events-none mx-auto w-full max-w-[480px]">
          <SingleJapaneseTower activeFloor={activeFloor} />
        </div>

        {/* 5 Alternating Timeline Cards */}
        <div className="absolute inset-0 pointer-events-auto">
          {kodikon6TimelineEvents.map((event, idx) => {
            const config = FLOOR_CONFIG[idx];
            const isLeft = config.isLeft;
            const isActive = activeFloor === idx;

            return (
              <React.Fragment key={event.id}>
                {/* Horizontal Connecting Beam */}
                {isLeft ? (
                  <div
                    className="flex items-center absolute pointer-events-none z-20"
                    style={{
                      top: `${config.lineY}px`,
                      right: `calc(50% + ${config.roomHalfWidth}px)`,
                      width: `calc(280px - ${config.roomHalfWidth}px)`,
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] flex-shrink-0" />
                    <div
                      className={`flex-1 h-[2px] transition-all duration-500 ${
                        isActive
                          ? "bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
                          : "bg-cyan-400/80 shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                      }`}
                    />
                    <div className="w-2 h-2 rotate-45 border border-amber-400 bg-cyan-950 flex-shrink-0" />
                  </div>
                ) : (
                  <div
                    className="flex items-center absolute pointer-events-none z-20"
                    style={{
                      top: `${config.lineY}px`,
                      left: `calc(50% + ${config.roomHalfWidth}px)`,
                      width: `calc(280px - ${config.roomHalfWidth}px)`,
                    }}
                  >
                    <div className="w-2 h-2 rotate-45 border border-amber-400 bg-cyan-950 flex-shrink-0" />
                    <div
                      className={`flex-1 h-[2px] transition-all duration-500 ${
                        isActive
                          ? "bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
                          : "bg-cyan-400/80 shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                      }`}
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] flex-shrink-0" />
                  </div>
                )}

                {/* Timeline Event Card */}
                <div
                  className={`absolute z-20 w-[calc(50%-310px)] max-w-[420px] ${
                    isLeft
                      ? "right-[calc(50%+280px)]"
                      : "left-[calc(50%+280px)]"
                  }`}
                  style={{ top: `${config.cardTop}px` }}
                >
                  <TimelineEventCard
                    event={event}
                    isLeft={isLeft}
                    isActive={isActive}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TABLET VIEW (< 1024px): Connected Vertical Rail */}
      <div className="block lg:hidden max-w-2xl mx-auto px-4 sm:px-6">
        <div className="relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-cyan-500/50 -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {kodikon6TimelineEvents.map((event) => {
              const Icon = event.icon;

              return (
                <div key={event.id} className="relative flex gap-4 sm:gap-6 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-105 z-10">
                      <Icon className="w-5 h-5 text-slate-300 transition-colors duration-300 group-hover:text-cyan-300" />
                    </div>
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{event.date}</span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {event.phaseTag}
                      </span>
                    </div>

                    <div className="relative rounded-xl border border-neutral-800 bg-[#070e1b]/90 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-amber-400/80" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-amber-400/80" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-amber-400/80" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-amber-400/80" />

                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/60 text-red-400 font-bold font-mono text-xs">
                          {event.kanjiNum}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 6. PART II: 24-HOUR HACKATHON DAY SCHEDULE                     */}
      {/* ============================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>24-Hour Hackathon Schedule · Oct 31 – Nov 1</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Hackathon{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Timeline
            </span>
          </h3>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-normal">
            Complete schedule for the 24-hour in-person sprint at PESU 52, PES University.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <div className="w-2 h-2 rotate-45 border border-cyan-400 bg-cyan-950" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </div>

        {/* Two-Column Day Schedule Layout (Day 1 on Left, Day 2 on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* DAY 1 COLUMN */}
          <div className="rounded-2xl border border-neutral-800 bg-[#050b18]/80 p-5 sm:p-7 backdrop-blur-xl">
            {/* Day Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  Friday, 31st October 2026
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  Day 1 · Kickoff &amp; Hacking
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-bold">
                13 Sessions
              </span>
            </div>

            {/* Day 1 Events Timeline */}
            <div className="relative pl-6 space-y-6">
              <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500/60 via-cyan-500/30 to-purple-500/50" />

              {day1Events.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900 shadow-[0_0_8px_#22d3ee] group-hover:scale-125 transition-transform" />

                  {/* Event Details */}
                  <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#070e1b]/90 group-hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-cyan-300">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h5>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DAY 2 COLUMN */}
          <div className="rounded-2xl border border-neutral-800 bg-[#050b18]/80 p-5 sm:p-7 backdrop-blur-xl">
            {/* Day Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-500/20">
              <div>
                <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                  Saturday, 1st November 2026
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                  Day 2 · Finale &amp; Ceremony
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
                8 Sessions
              </span>
            </div>

            {/* Day 2 Events Timeline */}
            <div className="relative pl-6 space-y-6">
              <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500/60 via-amber-500/40 to-amber-500/70" />

              {day2Events.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-900 shadow-[0_0_8px_#fbbf24] group-hover:scale-125 transition-transform" />

                  {/* Event Details */}
                  <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#070e1b]/90 group-hover:border-amber-500/40 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold text-amber-300">
                        {item.time}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h5>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Medieval Japanese Fortress Card (Desktop Milestone Card)
 */
function TimelineEventCard({ event, isLeft, isActive = false }) {
  const Icon = event.icon;

  return (
    <div
      className={`relative rounded-2xl transition-all duration-500 ${
        isActive
          ? "scale-[1.02] shadow-[0_0_35px_rgba(6,182,212,0.3)] border-cyan-400/80 bg-[#070e1b]/95"
          : "hover:scale-[1.01] hover:border-cyan-500/40 border-neutral-800 bg-[#070e1b]/85"
      } border backdrop-blur-xl p-6 sm:p-7 overflow-hidden`}
    >
      {/* Corner Japanese Joinery Accent L-Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-400/80" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-400/80" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-400/80" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-400/80" />

      {/* Top Glowing Beam Accent along the card edge */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-30 group-hover:opacity-75"
        }`}
      />

      {/* Card Header with Traditional Hanko Stamp Seal & Milestone Icon */}
      <div className="flex items-center justify-between gap-4 mb-3.5">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded bg-red-950/80 border border-red-500/80 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.4)]">
            <span className="text-red-400 font-bold font-mono text-sm">
              {event.kanjiNum}
            </span>
            <div className="absolute inset-0.5 border border-red-500/30 pointer-events-none" />
          </div>

          <div>
            <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wider">
              {event.phaseTag}
            </span>
            <p className="text-[11px] text-neutral-400 font-mono">
              {event.japaneseSubtitle}
            </p>
          </div>
        </div>

        <div className="w-10 h-10 rounded-xl bg-neutral-900/90 border border-neutral-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.4)] group-hover:scale-110">
          <Icon className="w-5 h-5 text-neutral-300 transition-colors duration-300 group-hover:text-cyan-300" />
        </div>
      </div>

      {/* Event Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-200 transition-colors">
        {event.title}
      </h3>

      {/* Date Pill with Calendar Icon */}
      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300">
        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
        <span>{event.date}</span>
      </div>

      {/* Event Detailed Description */}
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
        {event.description}
      </p>

      {/* Subtle Background Kanji Watermark */}
      <span className="absolute right-4 bottom-2 text-6xl font-bold font-mono text-white/[0.03] select-none pointer-events-none">
        {event.kanjiSeal}
      </span>
    </div>
  );
}

export default EventTimelineComponent;
