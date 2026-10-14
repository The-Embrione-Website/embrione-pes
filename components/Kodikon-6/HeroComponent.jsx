import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";

export default function HeroComponent() {
  return (
    <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
        <span className="w-2 h-2 rounded-sm bg-cyan-400" />
        <span>PES UNIVERSITY • DEPARTMENT OF CSE</span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
        Kodikon 6.0
      </h1>

      <p className="mt-4 text-lg sm:text-2xl text-cyan-400 font-mono">
        24-Hour Flagship National Hackathon
      </p>

      <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
        The Department of Computer Science &amp; Engineering presents the sixth edition of South India&apos;s premier collegiate hackathon. Research-grounded problem statements, rigorous mentor review, and rapid prototype engineering.
      </p>

      {/* Key Event Facts */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Calendar size={14} />
            <span>DURATION</span>
          </div>
          <div className="text-sm font-semibold text-white mt-1">24 Hours Overnight</div>
          <div className="text-xs text-slate-400 mt-0.5">Continuous in-person sprint</div>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <MapPin size={14} />
            <span>CAMPUS VENUE</span>
          </div>
          <div className="text-sm font-semibold text-white mt-1">PESU 52, PES University</div>
          <div className="text-xs text-slate-400 mt-0.5">100 Feet Ring Road Campus, Bengaluru</div>
        </div>

        <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Users size={14} />
            <span>TEAM COMPOSITION</span>
          </div>
          <div className="text-sm font-semibold text-white mt-1">2 to 4 Members</div>
          <div className="text-xs text-slate-400 mt-0.5">Undergraduate engineers</div>
        </div>
      </div>
    </section>
  );
}
