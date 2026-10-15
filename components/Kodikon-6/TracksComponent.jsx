"use client";

import React, { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, X } from "lucide-react";
import { tracksData } from "./tracksData";

export default function TracksComponent() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [activeTab, setActiveTab] = useState("problem");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const openTrack = (track) => {
    setSelectedTrack(track);
    setActiveTab("problem");
    setTilt({ x: 0, y: 0 });
  };
  const closeTrack = () => setSelectedTrack(null);

  useEffect(() => {
    if (!selectedTrack) return undefined;
    const onKeyDown = (event) => { if (event.key === "Escape") closeTrack(); };
    document.addEventListener("keydown", onKeyDown);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
    };
  }, [selectedTrack]);

  return (
    <section id="tracks" className="relative isolate overflow-hidden border-t border-white/10 bg-[#030a13] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,111,157,0.20),transparent_48%),linear-gradient(180deg,#061321_0%,#030811_55%,#02050a_100%)]" />
        <div className="absolute -left-24 top-36 h-72 w-72 rounded-full border border-[#16e5f5]/10" />
        <div className="absolute -right-28 top-24 h-80 w-80 rounded-full border border-white/[0.04]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(150,190,220,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(150,190,220,.25) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "linear-gradient(to bottom, black, transparent 88%)" }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <p className="mb-4 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-[#c2d3e4] sm:text-xs"><span className="h-px w-7 bg-[#16e5f5]" />KODIKON 6.0 · CHALLENGE TRACKS<span className="h-px w-7 bg-[#16e5f5]" /></p>
          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl">EXPLORE THE <span className="text-[#16e5f5]">TRACKS</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#bdc9d8] sm:text-base">Three challenge domains. Choose a track to explore its challenge, background, applications, resources and mentor guidance.</p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracksData.map((track) => {
            const Icon = track.icon;
            return (
              <button key={track.code} type="button" onClick={() => openTrack(track)} aria-label={`Open details for ${track.title}`} className="group relative flex h-full flex-col overflow-hidden border border-white/15 bg-[#07111e]/90 text-left transition duration-500 hover:-translate-y-1 hover:border-[#16e5f5]/70 hover:[transform:perspective(1100px)_rotateX(1deg)_rotateY(-1deg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16e5f5]">
                <div className="relative aspect-square w-full overflow-hidden bg-[#02060c]">
                  <img src={track.image} alt={track.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030a13]/80 via-transparent to-[#030a13]/15" />
                  <span className="absolute left-4 top-4 border border-white/25 bg-[#030a13]/85 px-3 py-2 font-mono text-[10px] tracking-[0.2em]">{track.code}</span>
                  <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.22em] text-[#16e5f5]">DOMAIN_{track.number}</span>
                  <span aria-hidden="true" className="absolute right-4 top-4 h-3 w-3 border-r border-t border-[#16e5f5]" />
                  <span aria-hidden="true" className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/70" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-[#16e5f5]/45 text-[#16e5f5]"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                    <ArrowUpRight size={20} className="text-[#8fa3b8] transition-colors group-hover:text-[#16e5f5]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.035em] text-white">{track.title}</h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.13em] text-[#16e5f5]">{track.subtitle}</p>
                  <p className="mt-4 text-sm leading-6 text-[#bdc9d8]">{track.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 transition-colors group-hover:text-[#16e5f5]">Explore track <ArrowDownRight size={15} /></span>
                </div>
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-0 bg-[#16e5f5] transition-all duration-500 group-hover:w-full" />
              </button>
            );
          })}
        </div>
      </div>

      {selectedTrack && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#01050b]/90 p-3 backdrop-blur-md sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) closeTrack(); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="track-dialog-title" className="grid h-[92dvh] w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden border border-white/20 bg-[#06101d] md:h-[88dvh] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:grid-rows-1">
            <div className="relative flex items-center justify-center border-b border-white/15 bg-[#02070e] p-3 sm:p-5 md:border-b-0 md:border-r md:p-6">
              <div className="relative aspect-square w-full max-w-[min(100%,260px)] overflow-hidden border border-white/25 md:max-w-[min(100%,calc(88dvh-3rem))]" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientY - rect.top) / rect.height - 0.5; const y = (event.clientX - rect.left) / rect.width - 0.5; setTilt({ x: -x * 3, y: y * 4 }); }} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
                <img src={selectedTrack.image} alt={selectedTrack.imageAlt} className="h-full w-full object-cover" style={{ transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.035)`, transition: "transform 220ms ease-out" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02070e]/85 via-transparent to-[#02070e]/10" />
                <span className="absolute left-3 top-3 border border-white/25 bg-[#030a13]/85 px-3 py-2 font-mono text-[10px] tracking-[0.18em]">{selectedTrack.code} / KODIKON 6.0</span>
                <div className="absolute bottom-4 left-4 right-4"><p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#16e5f5]">Technical domain / {selectedTrack.number}</p><h2 id="track-dialog-title" className="text-xl font-extrabold leading-tight tracking-[-0.035em] sm:text-2xl">{selectedTrack.title}</h2><p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c2d3e4]">{selectedTrack.subtitle}</p></div>
                <span aria-hidden="true" className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-[#16e5f5]" />
              </div>
            </div>

            <div className="relative min-h-0 overflow-y-auto">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#06101d]/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#91a5b9]">Track briefing <span className="mx-2 text-[#16e5f5]">//</span>{selectedTrack.code}</p>
                <button type="button" onClick={closeTrack} aria-label="Close track details" className="flex h-9 w-9 items-center justify-center border border-white/25 text-white transition-colors hover:border-[#16e5f5] hover:text-[#16e5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16e5f5]"><X size={18} /></button>
              </div>
              <div className="p-4 sm:p-6">
                <p className="border-b border-white/10 pb-5 text-sm leading-6 text-[#bdc9d8]">{selectedTrack.desc}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 border-b border-white/15" role="tablist" aria-label="Track information">
                  <button type="button" role="tab" aria-selected={activeTab === "problem"} onClick={() => setActiveTab("problem")} className={`border-b-2 py-3 text-sm font-semibold transition-colors ${activeTab === "problem" ? "border-[#16e5f5] text-[#16e5f5]" : "border-transparent text-[#8fa3b8] hover:text-white"}`}>Problem Statement</button>
                  <button type="button" role="tab" aria-selected={activeTab === "mentors"} onClick={() => setActiveTab("mentors")} className={`border-b-2 py-3 text-sm font-semibold transition-colors ${activeTab === "mentors" ? "border-[#16e5f5] text-[#16e5f5]" : "border-transparent text-[#8fa3b8] hover:text-white"}`}>Note from the Mentors</button>
                </div>
                {activeTab === "problem" ? (
                  <div role="tabpanel" className="space-y-4 pt-5">
                    <section className="border-l-2 border-[#16e5f5] bg-white/[0.025] p-4 sm:p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#16e5f5]">01 / The challenge</p><h3 className="mt-3 text-lg font-bold">Problem Statement</h3><p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#bdc9d8]">{selectedTrack.problemStatement}</p></section>
                    {selectedTrack.aboutSections.map((part, index) => <section key={part.heading} className="border border-white/15 p-4 sm:p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#91a5b9]">{String(index + 2).padStart(2, "0")} / Track details</p><h3 className="mt-3 text-base font-bold">{part.heading}</h3>{part.content ? <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#bdc9d8]">{part.content}</p> : null}{part.items ? <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#bdc9d8]">{part.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}{part.links ? <ul className="mt-3 space-y-3 text-sm leading-6 text-[#bdc9d8]">{part.links.map((link) => <li key={link.text}>{link.url ? <a href={link.url} target="_blank" rel="noreferrer" className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-[#16e5f5] hover:decoration-[#16e5f5]">{link.text} <span aria-hidden="true">↗</span></a> : <span>{link.text}</span>}</li>)}</ul> : null}</section>)}
                  </div>
                ) : <section role="tabpanel" className="mt-5 border-l-2 border-[#16e5f5] bg-white/[0.025] p-4 sm:p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#91a5b9]">Mentor insight</p><h3 className="mt-3 text-lg font-bold">{selectedTrack.mentorNoteHeading}</h3><p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#bdc9d8]">{selectedTrack.mentorNote}</p></section>}
                <button type="button" onClick={closeTrack} className="mt-6 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#16e5f5]">← Back to tracks</button>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
