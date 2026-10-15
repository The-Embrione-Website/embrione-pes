import React from "react";
import { tracksData } from "./tracksData";

export default function TracksComponent() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
      <div className="mb-10">
        <span className="text-xs font-mono text-cyan-400 uppercase">Curriculum Alignment</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
          Planned Technical Tracks
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Problem statements are developed in consultation with university research faculty and industry technical mentors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tracksData.map((track) => {
          const IconComponent = track.icon;
          return (
            <div
              key={track.code}
              className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-cyan-400">{track.code}</span>
                <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                  <IconComponent size={16} />
                </div>
              </div>
              <h3 className="text-base font-bold text-white">{track.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {track.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
