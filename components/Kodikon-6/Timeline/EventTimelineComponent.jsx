"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  Code2,
  Coffee,
  Gamepad2,
  Presentation,
  Users,
  Utensils,
  Trophy,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import {
  kodikon6Milestones,
  kodikon6TimelineEvents,
  eventDayLabel,
  eventTimeLabel,
  eventDateTime,
  SCHEDULE_STATUS,
} from "./timelineData";
import { SingleJapaneseTower } from "./SingleJapaneseTower";
import DesktopTimeline from "./DesktopTimeline";

const FLOATING_EMBERS = [
  { left: "6%", top: "8%", size: "h-1.5 w-1.5", delay: "0s", duration: "7s", color: "bg-cyan-400" },
  { left: "15%", top: "25%", size: "h-1 w-1", delay: "1.2s", duration: "8.5s", color: "bg-amber-400" },
  { left: "84%", top: "15%", size: "h-1.5 w-1.5", delay: "2.5s", duration: "9s", color: "bg-cyan-300" },
  { left: "92%", top: "45%", size: "h-1 w-1", delay: "3s", duration: "7.5s", color: "bg-purple-400" },
  { left: "10%", top: "55%", size: "h-1.5 w-1.5", delay: "0.8s", duration: "10s", color: "bg-amber-300" },
  { left: "88%", top: "70%", size: "h-1 w-1", delay: "2.2s", duration: "8s", color: "bg-cyan-400" },
];

// Configuration for each floor's connection geometry on desktop for Pagoda Tower
const FLOOR_CONFIG = [
  { floorIndex: 0, floorNum: 5, isLeft: true, cardTop: 280, lineY: 338, roomHalfWidth: 105 },
  { floorIndex: 1, floorNum: 4, isLeft: false, cardTop: 490, lineY: 549, roomHalfWidth: 120 },
  { floorIndex: 2, floorNum: 3, isLeft: true, cardTop: 725, lineY: 784, roomHalfWidth: 134 },
  { floorIndex: 3, floorNum: 2, isLeft: false, cardTop: 985, lineY: 1043, roomHalfWidth: 151 },
  { floorIndex: 4, floorNum: 1, isLeft: true, cardTop: 1270, lineY: 1327, roomHalfWidth: 168 },
];

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
            <span className="text-red-400 font-bold font-tokyo text-sm">
              {event.kanjiNum}
            </span>
            <div className="absolute inset-0.5 border border-red-500/30 pointer-events-none" />
          </div>

          <div>
            <span className="text-xs font-tech font-semibold text-cyan-400 tracking-wider uppercase">
              {event.phaseTag}
            </span>
            <p className="text-[11px] text-neutral-400 font-tech">
              {event.japaneseSubtitle}
            </p>
          </div>
        </div>

        <div className="w-10 h-10 rounded-xl bg-neutral-900/90 border border-neutral-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.4)] group-hover:scale-110">
          <Icon className="w-5 h-5 text-neutral-300 transition-colors duration-300 group-hover:text-cyan-300" />
        </div>
      </div>

      {/* Event Title */}
      <h3 className="font-cyber text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-cyan-200 transition-colors">
        {event.title}
      </h3>

      {/* Date Pill with Calendar Icon */}
      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/30 text-xs font-tech text-cyan-300">
        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
        <span>{event.date}</span>
      </div>

      {/* Event Detailed Description */}
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
        {event.description}
      </p>

      {event.id === 1 && (
        <div className="mt-4 pt-3 border-t border-cyan-500/20">
          <a
            href="https://hack2skill.com/event/kodikon6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 px-3.5 py-1.5 text-xs font-cyber font-medium uppercase tracking-wider text-cyan-200 transition-colors"
          >
            <span>Register on Hack2Skill</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      )}

      {/* Subtle Background Kanji Watermark */}
      <span className="absolute right-4 bottom-2 text-6xl font-bold font-mono text-white/[0.03] select-none pointer-events-none">
        {event.kanjiSeal}
      </span>
    </div>
  );
}

export function EventTime({ event }) {
  return (
    <span>
      {event.kind === "deadline" ? "By " : ""}
      <time dateTime={eventDateTime(event.dayOffset, event.startMinute ?? event.endMinute)}>
        {eventTimeLabel(event).split("–")[0].replace("By ", "")}
      </time>
      {event.kind === "interval" && (
        <>
          {"–"}
          <time dateTime={eventDateTime(event.endDayOffset, event.endMinute)}>
            {eventTimeLabel(event).split("–")[1]}
          </time>
        </>
      )}
    </span>
  );
}

function EventIcon({ event, ...props }) {
  const title = event.title;
  const Icon = /Coding/.test(title)
    ? Code2
    : /Review/.test(title)
    ? CheckCircle2
    : /Lunch|Dinner|Breakfast/.test(title)
    ? Utensils
    : /Snacks/.test(title)
    ? Coffee
    : /Game/.test(title)
    ? Gamepad2
    : /Presentations/.test(title)
    ? Presentation
    : /Registration/.test(title)
    ? Users
    : /Ceremony|Wrap/.test(title)
    ? Trophy
    : Clock;
  return <Icon {...props} />;
}

// 24-Hour Schedule Mobile List
function MobileTimeline() {
  return (
    <div className="block lg:hidden max-w-2xl mx-auto px-4 sm:px-6" data-mobile-timeline>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-cyan-500/50 -translate-x-1/2"
        />
        <ol className="space-y-8 sm:space-y-10">
          {kodikon6TimelineEvents.map((event, index) => (
            <li
              key={event.id}
              className="relative flex gap-4 sm:gap-6 group"
              data-event-id={event.id}
            >
              <div className="relative flex-shrink-0" aria-hidden="true">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-105 z-10">
                  <EventIcon
                    event={event}
                    className="w-5 h-5 text-slate-300 transition-colors duration-300 group-hover:text-cyan-300"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs font-tech text-cyan-300 font-semibold">
                    <Calendar aria-hidden="true" className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{eventDayLabel(event)}</span>
                  </div>
                  <span className="text-[11px] font-tech text-neutral-400">
                    <EventTime event={event} />
                  </span>
                </div>
                <div className="relative rounded-xl border border-neutral-800 bg-[#070e1b]/90 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                  <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-amber-400/80"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-amber-400/80"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-amber-400/80"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-amber-400/80"
                  />
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      aria-hidden="true"
                      className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/60 text-red-400 font-bold font-tokyo text-xs"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-cyber text-sm sm:text-base font-bold text-white tracking-tight">{event.title}</h3>
                  </div>
                  {event.dayOffset !== event.endDayOffset && (
                    <p className="text-neutral-300 text-sm leading-relaxed mt-2">
                      Crosses midnight into Day 2.
                    </p>
                  )}
                  {event.kind === "deadline" && (
                    <p className="text-neutral-300 text-sm leading-relaxed mt-2">
                      Finish by 6:00 PM.
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function EventTimelineComponent() {
  const [desktop, setDesktop] = useState(false);
  const pagodaRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Track active floor as user scrolls down the Pagoda Tower section
  useEffect(() => {
    const handleScroll = () => {
      if (!pagodaRef.current) return;
      const rect = pagodaRef.current.getBoundingClientRect();
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

  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="scroll-mt-20 sm:scroll-mt-24 relative isolate overflow-hidden bg-brand-canvas font-sans text-brand-text-primary pt-20 pb-28 sm:pt-28 sm:pb-36"
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 8%, rgba(6,182,212,.12) 0%, rgba(0,113,227,.04) 35%, #000000 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 h-[1000px] w-[650px] rounded-full bg-cyan-500/5 blur-[160px]"
      />

      {/* Floating Ethereal Embers */}
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

      {/* ============================================================== */}
      {/* PART I: KODIKON 6.0 ROADMAP & MILESTONES                        */}
      {/* ============================================================== */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-3 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-tech uppercase tracking-widest backdrop-blur-sm font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>五重塔 · SACRED CHRONICLE</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        </div>

        <h2
          id="timeline-heading"
          className="font-tokyo text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white mb-4"
        >
          Kodikon 6.0{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Roadmap &amp; Timeline
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-normal leading-relaxed px-4">
          Ascend the sacred five-story pagoda to follow our hackathon journey from registration opening to the grand 24-hour finale.
        </p>

        <div aria-hidden="true" className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-amber-400 bg-cyan-950 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>
      </div>

      {/* DESKTOP VIEW (>= 1024px): 5-Story Pagoda Tower */}
      <div ref={pagodaRef} className="hidden lg:block relative max-w-7xl mx-auto px-6 min-h-[1750px] mb-24">
        {/* Central Pagoda Tower */}
        <div className="relative z-10 pointer-events-none mx-auto w-full max-w-[480px]">
          <SingleJapaneseTower activeFloor={activeFloor} />
        </div>

        {/* 5 Alternating Timeline Cards */}
        <div className="absolute inset-0 pointer-events-auto">
          {kodikon6Milestones.map((event, idx) => {
            const config = FLOOR_CONFIG[idx];
            const isLeft = config.isLeft;
            const isActive = activeFloor === idx;

            return (
              <React.Fragment key={event.id}>
                {/* Connecting Beam */}
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
      <div className="block lg:hidden max-w-2xl mx-auto px-4 sm:px-6 mb-24">
        <div className="relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-cyan-500/50 -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {kodikon6Milestones.map((event) => {
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
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs font-tech text-cyan-300 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{event.date}</span>
                      </div>
                      <span className="text-[11px] font-tech text-neutral-400">
                        {event.phaseTag}
                      </span>
                    </div>

                    <div className="relative rounded-xl border border-neutral-800 bg-[#070e1b]/90 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-amber-400/80" />
                      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-amber-400/80" />
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-amber-400/80" />
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-amber-400/80" />

                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/60 text-red-400 font-bold font-tokyo text-xs">
                          {event.kanjiNum}
                        </span>
                        <h3 className="font-cyber text-base font-bold text-white tracking-tight">
                          {event.title}
                        </h3>
                      </div>

                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {event.description}
                      </p>

                      {event.id === 1 && (
                        <div className="mt-3 pt-2.5 border-t border-cyan-500/20">
                          <a
                            href="https://hack2skill.com/event/kodikon6/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 px-3 py-1 text-xs font-mono font-medium text-cyan-200 transition-colors"
                          >
                            <span>Register on Hack2Skill</span>
                            <ArrowUpRight size={13} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PART II: 24-HOUR HACKATHON DAY SCHEDULE                        */}
      {/* ============================================================== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/[0.08]">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-tech uppercase tracking-widest backdrop-blur-sm font-semibold">
            <Clock aria-hidden="true" className="w-3.5 h-3.5 text-amber-400" />
            <span>October 31 – November 1, 2026 · 24-Hour Itinerary</span>
          </div>

          <h3 className="font-tokyo text-3xl sm:text-5xl font-black uppercase tracking-wide text-white mb-4">
            Hackathon{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              24-Hour Schedule
            </span>
          </h3>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-normal leading-relaxed px-4">
            Hour-by-hour operational schedule for the 24-hour in-person sprint at PESU 52, PES University.
          </p>

          <p className="mt-3 text-xs sm:text-sm font-tech text-amber-300/90 font-medium">{SCHEDULE_STATUS}</p>

          <div aria-hidden="true" className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <div className="w-2.5 h-2.5 rotate-45 border border-amber-400 bg-cyan-950 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </div>

        <DesktopTimeline enabled={desktop} />
        <MobileTimeline />
      </div>
    </section>
  );
}

export default EventTimelineComponent;
