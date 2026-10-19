"use client";

import React, { useEffect, useState } from "react";
import { Calendar, Clock, Code2, Coffee, Gamepad2, Presentation, Users, Utensils, Trophy, CheckCircle2 } from "lucide-react";
import { kodikon6TimelineEvents, eventDayLabel, eventTimeLabel, eventDateTime, SCHEDULE_STATUS } from "./timelineData";
import DesktopTimeline from "./DesktopTimeline";

export function EventTime({ event }) {
  return (
    <span>
      {event.kind === "deadline" ? "By " : ""}
      <time dateTime={eventDateTime(event.dayOffset, event.startMinute ?? event.endMinute)}>
        {eventTimeLabel(event).split("–")[0].replace("By ", "")}
      </time>
      {event.kind === "interval" && <>{"–"}<time dateTime={eventDateTime(event.endDayOffset, event.endMinute)}>{eventTimeLabel(event).split("–")[1]}</time></>}
    </span>
  );
}

function EventIcon({ event, ...props }) {
  const title = event.title;
  const Icon = /Coding/.test(title) ? Code2 : /Review/.test(title) ? CheckCircle2
    : /Lunch|Dinner|Breakfast/.test(title) ? Utensils : /Snacks/.test(title) ? Coffee
    : /Game/.test(title) ? Gamepad2 : /Presentations/.test(title) ? Presentation
    : /Registration/.test(title) ? Users : /Ceremony|Wrap/.test(title) ? Trophy : Clock;
  return <Icon {...props} />;
}

// Keep the existing mobile rail, card decoration, spacing and typography.
// There are deliberately no scroll observers or animation hooks in this tree.
function MobileTimeline() {
  return (
    <div className="block lg:hidden max-w-2xl mx-auto px-4 sm:px-6" data-mobile-timeline>
      <div className="relative">
        <div aria-hidden="true" className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-cyan-500/50 -translate-x-1/2" />
        <ol className="space-y-8 sm:space-y-10">
          {kodikon6TimelineEvents.map((event, index) => (
            <li key={event.id} className="relative flex gap-4 sm:gap-6 group" data-event-id={event.id}>
              <div className="relative flex-shrink-0" aria-hidden="true">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-105 z-10">
                  <EventIcon event={event} className="w-5 h-5 text-slate-300 transition-colors duration-300 group-hover:text-cyan-300" />
                </div>
              </div>
              <div className="flex-1 min-w-0 pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold">
                    <Calendar aria-hidden="true" className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{eventDayLabel(event)}</span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400"><EventTime event={event} /></span>
                </div>
                <div className="relative rounded-xl border border-neutral-800 bg-[#070e1b]/90 backdrop-blur-md p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                  <div aria-hidden="true" className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-amber-400/80" />
                  <div aria-hidden="true" className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-amber-400/80" />
                  <div aria-hidden="true" className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-amber-400/80" />
                  <div aria-hidden="true" className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-amber-400/80" />
                  <div className="flex items-center gap-2.5 mb-2">
                    <span aria-hidden="true" className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/60 text-red-400 font-bold font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-bold text-white tracking-tight">{event.title}</h3>
                  </div>
                  {event.dayOffset !== event.endDayOffset && <p className="text-neutral-300 text-sm leading-relaxed">Crosses midnight into Day 2.</p>}
                  {event.kind === "deadline" && <p className="text-neutral-300 text-sm leading-relaxed">Finish by 6:00 PM. Start time unspecified.</p>}
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
  useEffect(() => {
    // Matches Tailwind's existing lg breakpoint. Unmounting removes every
    // desktop observer, idle timer and animation frame when it becomes mobile.
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="scroll-mt-20 sm:scroll-mt-24 relative isolate overflow-hidden bg-brand-canvas font-sans text-brand-text-primary pt-20 pb-28 sm:pt-28 sm:pb-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20" style={{ background: "radial-gradient(ellipse at 50% 8%, rgba(6,182,212,.12) 0%, rgba(0,113,227,.04) 35%, #000000 75%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-3 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-mono uppercase tracking-widest">
          <Clock aria-hidden="true" className="w-3.5 h-3.5 text-amber-400" />
          <span>October 31 – November 1, 2026</span>
        </div>
        <h2 id="timeline-heading" className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Kodikon 6.0{" "}<span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">Event Timeline</span>
        </h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 font-normal leading-relaxed px-4">Two days of building, reviews, and presentations.</p>
        <p className="mt-3 text-xs sm:text-sm font-mono text-amber-300/90">{SCHEDULE_STATUS}</p>
        <div aria-hidden="true" className="flex items-center justify-center gap-3 mt-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-2.5 h-2.5 rotate-45 border border-amber-400 bg-cyan-950 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>
      </div>
      <DesktopTimeline enabled={desktop} />
      <MobileTimeline />
    </section>
  );
}

export default EventTimelineComponent;
