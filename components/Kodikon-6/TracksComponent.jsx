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
    kanjiSeal: "視",
    kanjiTheme: "第壱領域 · 監視天守閣",
    subBadge: "EDGE VISION & IOT",
    buildingName: "Tenshu Keep Watchtower",
    RoofComponent: TenshuBuildingRoof,
  },
  "TRACK-02": {
    kanjiNum: "弐",
    kanjiSeal: "智",
    kanjiTheme: "第弐領域 · 五重智慧塔",
    subBadge: "ASSISTIVE GENAI",
    buildingName: "Gojū Sanctuary Pagoda",
    RoofComponent: PagodaBuildingRoof,
  },
  "TRACK-03": {
    kanjiNum: "参",
    kanjiSeal: "密",
    kanjiTheme: "第参領域 · 連邦本殿結界",
    subBadge: "FEDERATED LEARNING",
    buildingName: "Kekkai Fortress Pavilion",
    RoofComponent: ShiroPavilionRoof,
  },
};

const FLOATING_EMBERS = [
  { left: "6%", top: "45%", size: "h-1.5 w-1.5", delay: "0s", duration: "7s", color: "bg-amber-400" },
  { left: "16%", top: "65%", size: "h-1 w-1", delay: "1.2s", duration: "8s", color: "bg-brand-accent-cyan-glow" },
  { left: "28%", top: "35%", size: "h-1.5 w-1.5", delay: "2.5s", duration: "9s", color: "bg-brand-accent-cyan" },
  { left: "52%", top: "75%", size: "h-1 w-1", delay: "3s", duration: "8s", color: "bg-amber-300" },
  { left: "70%", top: "50%", size: "h-1.5 w-1.5", delay: "0.8s", duration: "10s", color: "bg-brand-accent-cyan-glow" },
  { left: "84%", top: "38%", size: "h-1 w-1", delay: "2.2s", duration: "7.5s", color: "bg-brand-accent-blue" },
  { left: "94%", top: "60%", size: "h-1.5 w-1.5", delay: "1.7s", duration: "8.5s", color: "bg-amber-400" },
];

export default function TracksComponent() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [activeTab, setActiveTab] = useState("problem");
  const [hoveredTrack, setHoveredTrack] = useState(null);

  const openTrack = (track) => {
    setSelectedTrack(track);
    setActiveTab("problem");
  };

  const closeTrack = () => setSelectedTrack(null);

  useEffect(() => {
    if (!selectedTrack) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeTrack();
    };

    const root = document.documentElement;
    const body = document.body;

    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const prevRootOverflow = root.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPaddingRight = body.style.paddingRight;

    document.addEventListener("keydown", onKeyDown);

    // Lock both html and body to completely disable main scrollbar
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = prevRootOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.paddingRight = prevBodyPaddingRight;
    };
  }, [selectedTrack]);

  return (
    <section
      id="tracks"
      className="tracks-background relative overflow-hidden border-t border-brand-border-subtle bg-brand-canvas px-4 py-16 text-brand-text-primary sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Keyframe animations for Lanterns & Embers */}
      <style jsx>{`
        @keyframes floatEmber {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-28px) translateX(6px) scale(1.3);
            opacity: 0.65;
          }
        }
        @keyframes swayLeftLantern {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(2.5deg);
          }
        }
        @keyframes swayRightLantern {
          0%, 100% {
            transform: rotate(2.8deg);
          }
          50% {
            transform: rotate(-2.8deg);
          }
        }
      `}</style>

      {/* Atmospheric Ambient Gradients & Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0, 113, 227, 0.22) 0%, rgba(6, 182, 212, 0.12) 32%, rgba(0, 5, 20, 0.6) 65%, transparent 100%), linear-gradient(180deg, #000514 0%, #000000 100%)",
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

      {/* Signature 56px Checks Grid Overlay matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_90%_75%_at_50%_40%,#000_65%,transparent_100%)]"
      />

      {/* Floating Spirit Embers (Hotaru) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {FLOATING_EMBERS.map((ember, idx) => (
          <span
            key={idx}
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
        {/* Section Heading with Medieval Japanese Aesthetic */}
        <header className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-accent-cyan/30 bg-brand-surface-navy/80 px-3.5 py-1.5 text-center backdrop-blur-sm shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <span className="h-1.5 w-1.5 rotate-45 bg-amber-400" />
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-text-secondary sm:text-[10px] sm:tracking-[0.28em]">
              KODIKON 6.0 · CHALLENGE TRACKS
            </p>
            <span className="h-1.5 w-1.5 rotate-45 bg-brand-accent-cyan-glow" />
          </div>

          <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-6xl">
            EXPLORE THE{" "}
            <span className="text-brand-accent-cyan-glow drop-shadow-[0_0_24px_rgba(34,211,238,0.5)]">
              TRACKS
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-brand-text-secondary sm:mt-5 sm:text-base sm:leading-7">
            Three challenge domains housed within light-blue medieval Japanese architectural sanctuaries.
            Hover over a sanctuary to explore its mission and reveal track directives.
          </p>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-brand-accent-cyan/40 to-brand-accent-cyan-glow" />
            <span className="font-mono text-xs font-bold text-amber-300">01 · 02 · 03</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-brand-accent-cyan/40 to-brand-accent-cyan-glow" />
          </div>
        </header>

        {/* =====================================================================
            TRACK BUILDINGS GRID (Image + Title in Building, "Know More" on Hover)
           ===================================================================== */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 items-stretch">
          {tracksData.map((track) => {
            const meta = TRACK_BUILDING_METADATA[track.code] || {
              kanjiNum: "壱",
              kanjiSeal: "道",
              kanjiTheme: "第壱領域",
              subBadge: "TECHNICAL DOMAIN",
              buildingName: "Sanctuary Pavilion",
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openTrack(track);
                  }
                }}
                onMouseEnter={() => setHoveredTrack(track.code)}
                onMouseLeave={() => setHoveredTrack(null)}
                aria-label={`Open details for ${track.title}`}
                className="group relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow motion-reduce:transform-none cursor-pointer select-none"
              >
                {/* 1. ROOF CANOPY (SVG Medieval Japanese Roof Tier) */}
                <div className="relative z-10 w-full px-1">
                  <Roof isHovered={isHovered} />
                </div>

                {/* 2. MAIN BUILDING CHAMBER (Image + Main Title inside the building) */}
                <div className="relative -mt-3 flex flex-1 flex-col justify-between overflow-hidden rounded-sm border border-brand-accent-cyan/35 bg-gradient-to-b from-brand-surface-navy/85 via-[#000a20]/80 to-brand-surface-navy/95 p-4 sm:p-5 backdrop-blur-md transition-all duration-500 group-hover:border-brand-accent-cyan-glow group-hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]">
                  {/* Subtle Japanese Kumiko Screen Texture */}
                  <KumikoPattern id={`kumiko-${track.code}`} />

                  {/* Corner Brass Hardware (Kanamono Accent Fittings) */}
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

                  {/* Left & Right Structural Pillar Guides (Hashira Columns) */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-accent-cyan/40 via-brand-accent-cyan/15 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-brand-accent-cyan/40 via-brand-accent-cyan/15 to-transparent"
                  />

                  {/* Chamber Content */}
                  <div className="relative z-10 flex flex-col">
                    {/* Header Bar: Track Number Badge + Track Code + Domain Tag */}
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {/* Domain Number Badge */}
                        <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-amber-400/60 bg-amber-500/10 font-mono text-xs font-bold text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]">
                          {track.number}
                        </span>

                        <span className="border border-brand-border-hover bg-brand-surface-navy/90 px-2.5 py-0.5 font-mono text-[9px] tracking-[0.16em] text-brand-text-primary">
                          {track.code}
                        </span>
                      </div>

                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-brand-accent-cyan-glow">
                        {meta.subBadge}
                      </span>
                    </div>

                    {/* Image Container with "Know More" Hover Effect */}
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-lg border border-brand-accent-cyan/30 shadow-lg mt-1 mb-3 group/img">
                      <img
                        src={track.image}
                        alt={track.imageAlt || track.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Vignette overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Dark overlay with "Know More" button on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                        <span className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-brand-accent-cyan to-brand-accent-blue text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(34,211,238,0.5)] border border-cyan-300/40 hover:scale-105 transition-transform flex items-center gap-2">
                          <span>Know More</span>
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </span>
                      </div>
                    </div>

                    {/* Main Title Section (Directly seen in the building under image) */}
                    <div className="flex flex-col items-center text-center pt-2 pb-1">
                      <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-brand-accent-cyan-glow px-2">
                        {track.title}
                      </h3>

                      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-brand-accent-cyan-glow">
                        {track.subtitle}
                      </p>

                      {/* Decorative Line (Kodikon-5 style) */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-brand-accent-cyan-glow to-transparent rounded-full mx-auto mt-3 opacity-60 group-hover:opacity-100 group-hover:w-28 transition-all duration-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

                      {/* Mobile Tap Cue (visible only on small touch screens) */}
                      <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-brand-accent-cyan-glow sm:hidden">
                        <span>Tap to Know More</span>
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. BASE (Engawa Veranda & Stone Foundation Plinth) */}
                <div className="relative z-10 w-full px-2 -mt-1">
                  <BuildingEngawaBase isHovered={isHovered} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          TRACK DETAILS POPUP
          (Clean popup with wide respective pagoda roof ABOVE the card,
           full uncropped image banner, and structured text underneath)
         ===================================================================== */}
      {selectedTrack && (
        <div
          className="tracks-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain p-3 sm:p-5 md:p-6 backdrop-blur-md"
          onWheel={(event) => event.stopPropagation()}
          onTouchMove={(event) => event.stopPropagation()}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeTrack();
          }}
        >
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md -z-10"
            onClick={closeTrack}
          />

          {/* Outer Modal Container: Holds the wide roof ABOVE and the card */}
          <div className="relative w-full max-w-4xl lg:max-w-5xl my-auto z-10 flex flex-col items-center">
            {/* 1. SEAMLESS ROOF CROWN: Sits directly flush on top of the card */}
            <div className="relative w-[119%] -mb-[3px] z-30 pointer-events-none select-none">
              <SeamlessPopupRoof trackCode={selectedTrack.code} />
            </div>

            {/* 2. THE MAIN POPUP CARD */}
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="track-dialog-title"
              className="tracks-scrollbar relative w-full max-h-[75vh] sm:max-h-[78vh] overflow-y-auto rounded-b-2xl border-x border-b border-brand-accent-cyan/40 bg-gradient-to-b from-brand-surface-navy via-[#00081c] to-brand-surface-navy shadow-[0_0_60px_rgba(0,5,20,0.95)] backdrop-blur-xl"
            >
              {/* Close Button in top-right */}
              <button
                type="button"
                onClick={closeTrack}
                aria-label="Close track details"
                className="absolute top-4 right-4 z-40 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-brand-accent-cyan/50 bg-black/60 text-white hover:border-brand-accent-cyan-glow hover:text-brand-accent-cyan-glow hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all group backdrop-blur-md"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Clean Image Banner at top of card (no side boxes or overlays) */}
              <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden">
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.imageAlt || selectedTrack.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Soft gradient fade into content */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface-navy via-brand-surface-navy/30 to-transparent" />
              </div>

              {/* 3. TEXT UNDERNEATH IT */}
              <div className="pt-6 sm:pt-8 px-6 pb-8 sm:px-8 sm:pb-10 md:px-10 text-brand-text-primary">
                {/* Category & Title */}
                <div className="mb-5">

                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded border border-amber-400/50 bg-amber-500/10 font-mono text-[10px] font-bold text-amber-300">
                      {selectedTrack.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-accent-cyan-glow">
                      {selectedTrack.code} · TECHNICAL DOMAIN
                    </span>
                  </div>

                  <h2
                    id="track-dialog-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white"
                  >
                    {selectedTrack.title}
                  </h2>
                  <p className="mt-2 font-mono text-xs sm:text-sm uppercase tracking-[0.14em] text-brand-accent-cyan-glow">
                    {selectedTrack.subtitle}
                  </p>
                </div>

                {/* Synopsis Box */}
                <div className="mb-6 border-l-2 border-brand-accent-cyan bg-brand-surface/40 p-4 sm:p-5 rounded-r-lg backdrop-blur-sm">
                  <p className="text-sm sm:text-base leading-relaxed text-brand-text-secondary">
                    {selectedTrack.desc}
                  </p>
                </div>

                {/* Tabs */}
                <div
                  className="flex space-x-6 mb-6 border-b border-brand-border-hover overflow-x-auto"
                  role="tablist"
                  aria-label="Track information tabs"
                >
                  <button
                    type="button"
                    role="tab"
                    id="problem-tab"
                    aria-controls="track-tab-panel"
                    aria-selected={activeTab === "problem"}
                    onClick={() => setActiveTab("problem")}
                    className={`pb-3 text-sm sm:text-base font-semibold transition-all flex items-center gap-2 shrink-0 ${
                      activeTab === "problem"
                        ? "text-brand-accent-cyan-glow border-b-2 border-brand-accent-cyan-glow shadow-[0_2px_10px_rgba(34,211,238,0.3)]"
                        : "text-brand-text-muted hover:text-white"
                    }`}
                  >
                    <span>Problem Statement</span>
                  </button>
                  <button
                    type="button"
                    role="tab"
                    id="mentors-tab"
                    aria-controls="track-tab-panel"
                    aria-selected={activeTab === "mentors"}
                    onClick={() => setActiveTab("mentors")}
                    className={`pb-3 text-sm sm:text-base font-semibold transition-all flex items-center gap-2 shrink-0 ${
                      activeTab === "mentors"
                        ? "text-brand-accent-cyan-glow border-b-2 border-brand-accent-cyan-glow shadow-[0_2px_10px_rgba(34,211,238,0.3)]"
                        : "text-brand-text-muted hover:text-white"
                    }`}
                  >
                    <span>Note from the Mentors</span>
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === "problem" ? (
                  <div
                    id="track-tab-panel"
                    role="tabpanel"
                    aria-labelledby="problem-tab"
                    className="space-y-6"
                  >
                    {/* Problem Statement Card */}
                    <div className="rounded-lg border border-brand-accent-cyan/30 bg-brand-surface-navy/70 p-4 sm:p-6">
                      <h3 className="font-semibold text-brand-accent-cyan-glow text-lg mb-3">
                        Problem Statement
                      </h3>
                      <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-brand-text-secondary">
                        {selectedTrack.problemStatement}
                      </p>
                    </div>

                    {/* About Sections */}
                    <div className="pt-2 space-y-6">
                      <h3 className="font-semibold text-white text-lg border-b border-brand-border-subtle pb-2">
                        About the Problem Statement
                      </h3>

                      {selectedTrack.aboutSections.map((section, index) => (
                        <div
                          key={section.heading}
                          className="rounded-lg border border-brand-border-subtle bg-brand-surface-navy/40 p-4 sm:p-5"
                        >
                          <h4 className="font-bold text-slate-100 text-base mb-3 flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent-cyan/15 text-brand-accent-cyan font-mono text-xs">
                              {index + 1}
                            </span>
                            <span>{section.heading}</span>
                          </h4>

                          {section.content && (
                            <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-brand-text-secondary">
                              {section.content}
                            </p>
                          )}

                          {section.items && (
                            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm sm:text-base text-brand-text-secondary">
                              {section.items.map((item, idx) => (
                                <li key={idx} className="leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}

                          {section.links && (
                            <ul className="mt-3 space-y-2.5 text-sm text-brand-text-secondary">
                              {section.links.map((link, idx) => (
                                <li key={idx}>
                                  {link.url ? (
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-brand-accent-cyan-glow hover:text-cyan-300 underline underline-offset-4 transition-colors inline-flex items-center gap-1.5"
                                    >
                                      <span>{link.text}</span>
                                      <span aria-hidden="true">↗</span>
                                    </a>
                                  ) : (
                                    <span>{link.text}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Mentors Tab Content */
                  <div
                    id="track-tab-panel"
                    role="tabpanel"
                    aria-labelledby="mentors-tab"
                    className="rounded-lg border-l-2 border-brand-accent-cyan bg-brand-surface/60 p-4 sm:p-6"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                      {selectedTrack.mentorNoteHeading}
                    </h3>
                    <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-brand-text-secondary">
                      {selectedTrack.mentorNote}
                    </p>
                  </div>
                )}

                {/* Back to tracks button at bottom */}
                <div className="mt-8 pt-4 border-t border-brand-border-subtle flex justify-between items-center">
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