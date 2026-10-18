"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { tracksData } from "./tracksData";
import {
  TenshuBuildingRoof,
  PagodaBuildingRoof,
  ShiroPavilionRoof,
  BuildingEngawaBase,
  KumikoPattern,
  SeamlessPopupRoof,
} from "./JapaneseBuildings";

const TRACK_BUILDING_METADATA = {
  "TRACK-01": {
    kanjiNum: "壱",
    subBadge: "HUMAN-MACHINE INTERFACES",
    RoofComponent: TenshuBuildingRoof,
  },
  "TRACK-02": {
    kanjiNum: "弐",
    subBadge: "AUTONOMOUS ECONOMY",
    RoofComponent: PagodaBuildingRoof,
  },
  "TRACK-03": {
    kanjiNum: "参",
    subBadge: "CYBER DEFENSE",
    RoofComponent: ShiroPavilionRoof,
  },
  "TRACK-04": {
    kanjiNum: "四",
    subBadge: "HARDWARE & EMBEDDED",
    RoofComponent: TenshuBuildingRoof,
  },
};

const FLOATING_EMBERS = [
  {
    left: "6%",
    top: "45%",
    size: "h-1.5 w-1.5",
    delay: "0s",
    duration: "7s",
    color: "bg-amber-400",
  },
  {
    left: "16%",
    top: "65%",
    size: "h-1 w-1",
    delay: "1.2s",
    duration: "8s",
    color: "bg-brand-accent-cyan-glow",
  },
  {
    left: "28%",
    top: "35%",
    size: "h-1.5 w-1.5",
    delay: "2.5s",
    duration: "9s",
    color: "bg-brand-accent-cyan",
  },
  {
    left: "52%",
    top: "75%",
    size: "h-1 w-1",
    delay: "3s",
    duration: "8s",
    color: "bg-amber-300",
  },
  {
    left: "70%",
    top: "50%",
    size: "h-1.5 w-1.5",
    delay: "0.8s",
    duration: "10s",
    color: "bg-brand-accent-cyan-glow",
  },
  {
    left: "84%",
    top: "38%",
    size: "h-1 w-1",
    delay: "2.2s",
    duration: "7.5s",
    color: "bg-brand-accent-blue",
  },
  {
    left: "94%",
    top: "60%",
    size: "h-1.5 w-1.5",
    delay: "1.7s",
    duration: "8.5s",
    color: "bg-amber-400",
  },
];

export default function TracksComponent() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [hoveredTrack, setHoveredTrack] = useState(null);

  const openTrack = (track) => setSelectedTrack(track);
  const closeTrack = () => setSelectedTrack(null);

  useEffect(() => {
    if (!selectedTrack) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeTrack();
    };

    const root = document.documentElement;
    const body = document.body;
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;

    document.addEventListener("keydown", onKeyDown);
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [selectedTrack]);

  return (
    <section
      id="tracks"
      className="relative overflow-hidden bg-[#000514] px-4 border-t border-cyan-400/20 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        {/* Top blur fade to soften the grid alignment */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 backdrop-blur-[3px]"
  style={{
    maskImage: "linear-gradient(to bottom, black, transparent)",
    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
  }}
/>

{/* Top background glow */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#000514] via-[#000514]/70 to-transparent"
/>
      <style jsx>{`
        @keyframes floatEmber {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-28px) translateX(6px) scale(1.3);
            opacity: 0.65;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0, 113, 227, 0.22) 0%, rgba(6, 182, 212, 0.12) 32%, rgba(0, 5, 20, 0.6) 65%, transparent 100%), linear-gradient(180deg, #000514 0%, #000000 100%)",
        }}
      />
{/* Subtle chunky geometric background pattern */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 opacity-[0.12]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(34,211,238,0.16) 2px, transparent 2px),
      linear-gradient(90deg, rgba(34,211,238,0.16) 2px, transparent 2px)
    `,
    backgroundSize: "56px 56px",
    maskImage:
      "linear-gradient(to bottom, black, transparent 90%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, black, transparent 90%)",
  }}
/>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/3 -z-10 h-96 w-96 rounded-full bg-brand-accent-cyan/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 -z-10 h-96 w-96 rounded-full bg-brand-accent-blue/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_90%_75%_at_50%_40%,#000_65%,transparent_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {FLOATING_EMBERS.map((ember, index) => (
          <span
            key={index}
            style={{
              left: ember.left,
              top: ember.top,
              animation: `floatEmber ${ember.duration} ease-in-out ${ember.delay} infinite`,
            }}
            className={`absolute rounded-full ${ember.size} ${ember.color} blur-[0.5px]`}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <header className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-10 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#040816]/80 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-200">
                KODIKON 6.0 // CHALLENGE TRACKS
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Tracks
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Discover the four challenge areas and find the problem you want to
              solve.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
          {tracksData.map((track) => {
            const meta = TRACK_BUILDING_METADATA[track.code] || {
              kanjiNum: track.number,
              subBadge: "TECHNICAL DOMAIN",
              RoofComponent: TenshuBuildingRoof,
            };

            const Roof = meta.RoofComponent;
            const isHovered = hoveredTrack === track.code;

            return (
              <div
                key={track.code}
                role="button"
                tabIndex={0}
                onClick={() => openTrack(track)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openTrack(track);
                  }
                }}
                onMouseEnter={() => setHoveredTrack(track.code)}
                onMouseLeave={() => setHoveredTrack(null)}
                aria-label={`Open details for ${track.title}`}
                className="group relative flex cursor-pointer select-none flex-col justify-between transition-transform duration-300 hover:-translate-y-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow motion-reduce:transform-none"
              >
                <div className="relative z-10 w-full px-1">
                  <Roof isHovered={isHovered} />
                </div>

                <div className="relative -mt-3 flex flex-1 flex-col justify-between overflow-hidden rounded-sm border border-brand-accent-cyan/35 bg-gradient-to-b from-brand-surface-navy/85 via-[#000a20]/80 to-brand-surface-navy/95 p-4 backdrop-blur-md transition-all duration-500 group-hover:border-brand-accent-cyan-glow group-hover:shadow-[0_0_35px_rgba(34,211,238,0.22)] sm:p-5">
                  <KumikoPattern id={`kumiko-${track.code}`} />

                  <span
                    aria-hidden="true"
                    className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-brand-accent-cyan-glow/80"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-brand-accent-cyan-glow/80"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-brand-border-hover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-brand-accent-cyan-glow/80"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-accent-cyan/40 via-brand-accent-cyan/15 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-brand-accent-cyan/40 via-brand-accent-cyan/15 to-transparent"
                  />

                  <div className="relative z-10 flex flex-col">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-amber-400/60 bg-amber-500/10 font-mono text-xs font-bold text-amber-300">
                          {track.number}
                        </span>
                        <span className="border border-brand-border-hover bg-brand-surface-navy/90 px-2.5 py-0.5 font-mono text-[9px] tracking-[0.16em] text-brand-text-primary">
                          {track.code}
                        </span>
                      </div>

                      <span className="text-right font-mono text-[9px] uppercase tracking-[0.1em] text-brand-accent-cyan-glow">
                        {meta.subBadge}
                      </span>
                    </div>

                    <div className="group/img relative mt-1 mb-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-brand-accent-cyan/30 shadow-lg sm:aspect-[4/3]">
                      <img
                        src={track.image}
                        alt={track.imageAlt || track.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/90 via-black/65 to-black/35 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                        <span className="flex items-center gap-2 rounded-lg border border-cyan-300/40 bg-gradient-to-r from-brand-accent-cyan to-brand-accent-blue px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                          <span>Know More</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center px-2 pt-2 pb-1 text-center">
                      <h3 className="text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-brand-accent-cyan-glow sm:text-xl">
                        {track.title}
                      </h3>

                      <div className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-brand-accent-cyan-glow to-transparent opacity-60 shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-all duration-500 group-hover:w-28 group-hover:opacity-100" />

                      <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-brand-accent-cyan-glow sm:hidden">
                        <span>Tap to Know More</span>
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 -mt-1 w-full px-2">
                  <BuildingEngawaBase isHovered={isHovered} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedTrack && (
        <div
          className="tracks-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain p-3 backdrop-blur-md sm:p-5 md:p-6"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeTrack();
          }}
        >
          <div
            className="fixed inset-0 -z-10 bg-black/85 backdrop-blur-md"
            onClick={closeTrack}
          />

          <div className="relative z-10 my-auto flex w-full max-w-4xl flex-col items-center lg:max-w-5xl">
            <div className="relative z-30 -mb-[3px] w-[119%] select-none pointer-events-none">
              <SeamlessPopupRoof trackCode={selectedTrack.code} />
            </div>

            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="track-dialog-title"
              className="tracks-scrollbar relative max-h-[75vh] w-full overflow-y-auto rounded-b-2xl border-x border-b border-brand-accent-cyan/40 bg-gradient-to-b from-brand-surface-navy via-[#00081c] to-brand-surface-navy shadow-[0_0_60px_rgba(0,5,20,0.95)] backdrop-blur-xl sm:max-h-[78vh]"
            >
              <button
                type="button"
                onClick={closeTrack}
                aria-label="Close track details"
                className="group absolute right-4 top-4 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-brand-accent-cyan/50 bg-black/60 text-white transition-all hover:border-brand-accent-cyan-glow hover:text-brand-accent-cyan-glow hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] backdrop-blur-md sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90 sm:h-5 sm:w-5" />
              </button>

              <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72">
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.imageAlt || selectedTrack.title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface-navy via-brand-surface-navy/30 to-transparent" />
              </div>

              <div className="px-6 pt-6 pb-8 text-brand-text-primary sm:px-8 sm:pt-8 sm:pb-10 md:px-10">
                <div className="mb-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded border border-amber-400/50 bg-amber-500/10 font-mono text-[10px] font-bold text-amber-300">
                      {selectedTrack.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent-cyan-glow">
                      {selectedTrack.code}
                    </span>
                  </div>

                  <h2
                    id="track-dialog-title"
                    className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
                  >
                    {selectedTrack.title}
                  </h2>
                </div>

                <div className="mb-6 rounded-r-lg border-l-2 border-brand-accent-cyan bg-brand-surface/40 p-4 backdrop-blur-sm sm:p-5">
                  <h3 className="mb-3 text-lg font-semibold text-brand-accent-cyan-glow">
                    Description
                  </h3>
                  <p className="whitespace-pre-line text-sm leading-relaxed text-brand-text-secondary sm:text-base">
                    {selectedTrack.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-brand-border-subtle pt-4">
                  <button
                    type="button"
                    onClick={closeTrack}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-text-primary transition-colors hover:text-brand-accent-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow"
                  >
                    <span>←</span>
                    <span>Back to tracks</span>
                  </button>

                  <span className="font-mono text-[9px] text-brand-text-muted">
                    KODIKON 6.0 · {selectedTrack.code}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}
