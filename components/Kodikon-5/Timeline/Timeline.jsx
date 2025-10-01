"use client";

import { Monitor, Calendar, Trophy, Rocket } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    title: "Registrations Begin",
    date: "30th September 2024",
    description:
      "Kodikon 4.0, the fourth edition of our 24-hour highly successful flagship national-level hackathon, is opening its registration from 30th September. Hurry up! Slots are open. Log yourself in.",
    icon: Monitor,
  },
  {
    id: 2,
    title: "Registrations and Submissions Close",
    date: "19th October 2024",
    description:
      "The registrations and submissions are going to be closed on 19th October. Register and submit if you have not already!",
    icon: Calendar,
  },
  {
    id: 3,
    title: "Hackathon Begins",
    date: "26th October 2024",
    description:
      "The 24-hour coding marathon begins! Teams will work on their innovative projects with mentorship and support throughout.",
    icon: Rocket,
  },
  {
    id: 4,
    title: "Final Presentations",
    date: "27th October 2024",
    description:
      "Teams present their projects to our panel of expert judges. The best innovations will be recognized and awarded.",
    icon: Trophy,
  },
];

export function KodikonTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Kodikon 4.0 Timeline
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Center line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-cyan-500/20 -translate-x-1/2" />

        {/* Timeline Events */}
        <div className="space-y-24">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={event.id}
                className="relative group"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                  {/* Left Side */}
                  {isLeft ? (
                    <>
                      {/* Content Card */}
                      <div className="relative">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:bg-slate-900/70">
                          <h3 className="text-2xl font-bold text-white mb-3 text-balance">
                            {event.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed text-pretty">
                            {event.description}
                          </p>
                        </div>
                        {/* Connecting line to center */}
                        <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2" />
                      </div>

                      {/* Date Side */}
                      <div className="flex items-center gap-6">
                        {/* Icon Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-110 group-hover:rotate-12">
                            <Icon className="w-7 h-7 text-slate-400 transition-colors duration-500 group-hover:text-cyan-400" />
                          </div>
                        </div>

                        {/* Date */}
                        <div className="text-slate-400 font-medium text-lg group-hover:text-cyan-400 transition-colors duration-300">
                          {event.date}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Date Side */}
                      <div className="flex items-center justify-end gap-6">
                        {/* Date */}
                        <div className="text-slate-400 font-medium text-lg group-hover:text-purple-400 transition-colors duration-300">
                          {event.date}
                        </div>

                        {/* Icon Circle */}
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center transition-all duration-500 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:scale-110 group-hover:rotate-12">
                            <Icon className="w-7 h-7 text-slate-400 transition-colors duration-500 group-hover:text-purple-400" />
                          </div>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="relative">
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:bg-slate-900/70">
                          <h3 className="text-2xl font-bold text-white mb-3 text-balance">
                            {event.title}
                          </h3>
                          <p className="text-slate-300 leading-relaxed text-pretty">
                            {event.description}
                          </p>
                        </div>
                        {/* Connecting line to center */}
                        <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-l from-purple-500/50 to-transparent -translate-y-1/2" />
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                      <Icon className="w-5 h-5 text-slate-400 transition-colors duration-500 group-hover:text-cyan-400" />
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-24 bg-gradient-to-b from-cyan-500/30 to-transparent -translate-x-1/2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="text-cyan-400 font-medium text-sm mb-2">
                      {event.date}
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <h3 className="text-xl font-bold text-white mb-2 text-balance">
                        {event.title}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed text-pretty">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative grid background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  );
}

export default KodikonTimeline;
