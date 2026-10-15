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

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeTrack();
    };

    // Calculate scrollbar width to prevent page jitter/layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const oldOverflow = document.body.style.overflow;
    const oldPaddingRight = document.body.style.paddingRight;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
      document.body.style.paddingRight = oldPaddingRight;
    };
  }, [selectedTrack]);

  return (
    <section
      id="tracks"
      className="tracks-background relative isolate overflow-hidden border-t border-brand-border-subtle bg-brand-canvas px-4 py-12 text-brand-text-primary sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="tracks-background-glow absolute inset-0" />

        <div className="absolute -left-24 top-36 h-72 w-72 rounded-full border border-brand-accent-cyan/10" />

        <div className="absolute -right-28 top-24 h-80 w-80 rounded-full border border-brand-border-subtle" />

        <div className="tracks-grid-overlay absolute inset-0" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <header className="mx-auto mb-8 max-w-4xl text-center sm:mb-12 lg:mb-14">
          <p className="mb-4 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-text-secondary sm:gap-3 sm:text-xs sm:tracking-[0.32em]">
            <span className="h-px w-5 shrink-0 bg-brand-accent-cyan-glow sm:w-7" />
            KODIKON 6.0 · CHALLENGE TRACKS
            <span className="h-px w-5 shrink-0 bg-brand-accent-cyan-glow sm:w-7" />
          </p>

          <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.055em] sm:text-5xl md:text-6xl">
            EXPLORE THE{" "}
            <span className="text-brand-accent-cyan-glow">TRACKS</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-brand-text-secondary sm:mt-5 sm:text-base sm:leading-7">
            Three challenge domains. Choose a track to explore its challenge,
            background, applications, resources and mentor guidance.
          </p>
        </header>

        {/* Track cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {tracksData.map((track) => {
            const Icon = track.icon;

            return (
              <button
                key={track.code}
                type="button"
                onClick={() => openTrack(track)}
                aria-label={`Open details for ${track.title}`}
                className="group relative flex min-w-0 flex-col overflow-hidden border border-brand-border-subtle bg-brand-surface-navy/90 text-left transition duration-300 hover:-translate-y-1 hover:border-brand-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Image */}
                <div className="relative aspect-[5/4] w-full overflow-hidden bg-brand-surface-input sm:aspect-square">
                  <img
                    src={track.image}
                    alt={track.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="tracks-image-overlay absolute inset-0" />

                  <span className="absolute left-3 top-3 border border-brand-border-hover bg-brand-surface-navy/80 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.15em] text-brand-text-primary sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-[10px]">
                    {track.code}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 h-3 w-3 border-r border-t border-brand-accent-cyan-glow sm:right-4 sm:top-4"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-brand-text-secondary sm:bottom-4 sm:right-4"
                  />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-brand-accent-cyan/35 text-brand-accent-cyan sm:h-11 sm:w-11">
                      <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-brand-text-muted transition-colors group-hover:text-brand-accent-cyan-glow"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-lg font-bold leading-tight tracking-[-0.035em] text-brand-text-primary sm:text-xl">
                    {track.title}
                  </h3>

                  <p className="mt-3 break-words font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-brand-accent-cyan-glow sm:text-[10px] sm:tracking-[0.13em]">
                    {track.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-brand-text-secondary sm:mt-4">
                    {track.desc}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 border-t border-brand-border-subtle pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-text-primary/90 transition-colors group-hover:text-brand-accent-cyan-glow sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Explore track
                    <ArrowDownRight size={15} aria-hidden="true" />
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="tracks-accent-line absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Track details modal */}
      {selectedTrack && (
        <div
          className="tracks-modal-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-hidden overscroll-contain p-2 backdrop-blur-md sm:p-4 md:p-6"
          onWheel={(event) => {
            if (event.target === event.currentTarget) {
              event.preventDefault();
            }
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeTrack();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="track-dialog-title"
            className="grid h-[94dvh] w-full max-w-6xl min-w-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden border border-brand-border-hover bg-brand-surface-navy sm:h-[92dvh] md:h-[88dvh] md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:grid-rows-1"
          >
            {/* Image panel */}
            <div className="relative flex min-h-0 min-w-0 items-center justify-center overflow-hidden border-b border-brand-border-subtle bg-brand-surface-input p-0 md:border-b-0 md:border-r md:p-6">
              <div
                className="relative h-full min-h-[180px] w-full overflow-hidden sm:min-h-[220px] md:aspect-square md:h-auto md:max-w-[min(100%,calc(88dvh-3rem))]"
                onMouseMove={(event) => {
                  if (window.matchMedia("(hover: none)").matches) return;

                  const rect = event.currentTarget.getBoundingClientRect();
                  const x = (event.clientY - rect.top) / rect.height - 0.5;
                  const y = (event.clientX - rect.left) / rect.width - 0.5;

                  setTilt({ x: -x * 3, y: y * 4 });
                }}
                onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              >
                <img
                  src={selectedTrack.image}
                  alt={selectedTrack.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  style={{
                    transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.035)`,
                    transition: "transform 220ms ease-out",
                  }}
                />

                <div className="tracks-modal-image-overlay absolute inset-0" />

                <span className="absolute left-3 top-3 border border-brand-border-hover bg-brand-surface-navy/90 px-3 py-2 font-mono text-[9px] tracking-[0.15em] text-brand-text-primary sm:text-[10px]">
                  {selectedTrack.code} / KODIKON 6.0
                </span>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent-cyan-glow">
                    Technical domain / {selectedTrack.number}
                  </p>

                  <h2
                    id="track-dialog-title"
                    className="text-xl font-extrabold leading-tight tracking-[-0.035em] text-brand-text-primary sm:text-2xl"
                  >
                    {selectedTrack.title}
                  </h2>

                  <p className="mt-2 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-brand-text-secondary sm:text-xs">
                    {selectedTrack.subtitle}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-brand-accent-cyan-glow"
                />
              </div>
            </div>

            {/* Scrollable details panel */}
            <div className="tracks-scrollbar relative min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain">
              {/* Sticky modal toolbar */}
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-brand-border-subtle bg-brand-surface-navy/95 px-3 py-3 backdrop-blur sm:px-6 sm:py-4">
                <p className="min-w-0 font-mono text-[8px] uppercase tracking-[0.14em] text-brand-text-secondary sm:text-[9px] sm:tracking-[0.22em]">
                  Track briefing
                  <span className="mx-1.5 text-brand-accent-cyan-glow sm:mx-2">
                    //
                  </span>
                  {selectedTrack.code}
                </p>

                <button
                  type="button"
                  onClick={closeTrack}
                  aria-label="Close track details"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand-border-hover text-brand-text-primary transition-colors hover:border-brand-accent-cyan hover:text-brand-accent-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>

              <div className="min-w-0 p-3 sm:p-6">
                <p className="break-words border-b border-brand-border-subtle pb-4 text-sm leading-6 text-brand-text-secondary sm:pb-5 sm:leading-7">
                  {selectedTrack.desc}
                </p>

                {/* Tabs */}
                <div
                  className="tracks-scrollbar mt-4 flex gap-5 overflow-x-auto border-b border-brand-border-hover sm:gap-6"
                  role="tablist"
                  aria-label="Track information"
                >
                  <button
                    type="button"
                    role="tab"
                    id="problem-tab"
                    aria-controls="track-tab-panel"
                    aria-selected={activeTab === "problem"}
                    onClick={() => setActiveTab("problem")}
                    className={`shrink-0 border-b-2 py-3 text-xs font-semibold transition-colors sm:text-sm ${
                      activeTab === "problem"
                        ? "border-brand-accent-cyan-glow text-brand-accent-cyan-glow"
                        : "border-transparent text-brand-text-muted hover:text-brand-text-primary"
                    }`}
                  >
                    Problem Statement
                  </button>

                  <button
                    type="button"
                    role="tab"
                    id="mentors-tab"
                    aria-controls="track-tab-panel"
                    aria-selected={activeTab === "mentors"}
                    onClick={() => setActiveTab("mentors")}
                    className={`shrink-0 border-b-2 py-3 text-xs font-semibold transition-colors sm:text-sm ${
                      activeTab === "mentors"
                        ? "border-brand-accent-cyan-glow text-brand-accent-cyan-glow"
                        : "border-transparent text-brand-text-muted hover:text-brand-text-primary"
                    }`}
                  >
                    Note from the Mentors
                  </button>
                </div>

                {/* Problem statement tab */}
                {activeTab === "problem" ? (
                  <div
                    id="track-tab-panel"
                    role="tabpanel"
                    aria-labelledby="problem-tab"
                    className="space-y-4 pt-4 sm:pt-5"
                  >
                    <section className="border-l-2 border-brand-accent-cyan bg-brand-surface/60 p-3 sm:p-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-accent-cyan-glow sm:text-[10px] sm:tracking-[0.2em]">
                        01 / The challenge
                      </p>

                      <h3 className="mt-3 text-lg font-bold text-brand-text-primary">
                        Problem Statement
                      </h3>

                      <p className="mt-3 whitespace-pre-line break-words text-sm leading-6 text-brand-text-secondary sm:leading-7">
                        {selectedTrack.problemStatement}
                      </p>
                    </section>

                    {selectedTrack.aboutSections.map((part, index) => (
                      <section
                        key={part.heading}
                        className="min-w-0 border border-brand-border-subtle p-3 sm:p-5"
                      >
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-text-secondary sm:text-[10px] sm:tracking-[0.2em]">
                          {String(index + 2).padStart(2, "0")} / Track details
                        </p>

                        <h3 className="mt-3 break-words text-base font-bold text-brand-text-primary">
                          {part.heading}
                        </h3>

                        {part.content ? (
                          <p className="mt-3 whitespace-pre-line break-words text-sm leading-6 text-brand-text-secondary sm:leading-7">
                            {part.content}
                          </p>
                        ) : null}

                        {part.items ? (
                          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-brand-text-secondary sm:leading-7">
                            {part.items.map((item) => (
                              <li key={item} className="break-words">
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {part.links ? (
                          <ul className="mt-3 space-y-3 text-sm leading-6 text-brand-text-secondary">
                            {part.links.map((link) => (
                              <li key={link.text} className="break-words">
                                {link.url ? (
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline decoration-brand-border-hover underline-offset-4 transition-colors hover:text-brand-accent-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow"
                                  >
                                    {link.text}{" "}
                                    <span aria-hidden="true">↗</span>
                                  </a>
                                ) : (
                                  <span>{link.text}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                    ))}
                  </div>
                ) : (
                  <section
                    id="track-tab-panel"
                    role="tabpanel"
                    aria-labelledby="mentors-tab"
                    className="mt-4 border-l-2 border-brand-accent-cyan bg-brand-surface/60 p-3 sm:mt-5 sm:p-5"
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-text-secondary sm:text-[10px] sm:tracking-[0.2em]">
                      Mentor insight
                    </p>

                    <h3 className="mt-3 break-words text-lg font-bold text-brand-text-primary">
                      {selectedTrack.mentorNoteHeading}
                    </h3>

                    <p className="mt-3 whitespace-pre-line break-words text-sm leading-6 text-brand-text-secondary sm:leading-7">
                      {selectedTrack.mentorNote}
                    </p>
                  </section>
                )}

                <button
                  type="button"
                  onClick={closeTrack}
                  className="mt-6 border-t border-brand-border-subtle pt-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-brand-text-primary transition-colors hover:text-brand-accent-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan-glow sm:tracking-[0.15em]"
                >
                  ← Back to tracks
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}