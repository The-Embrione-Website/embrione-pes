"use client";

import React, { useState, useEffect } from "react";
import { X, ZoomIn, Calendar } from "lucide-react";
import { ClubEvents } from "@/constants";

export default function KodikonSpotlight() {
  const [selectedEvent, setSelectedEvent] = useState("Kodikon 5.0");
  const [lightboxImage, setLightboxImage] = useState(null);

  const currentEvent =
    ClubEvents?.find((e) => e.eventName === selectedEvent) || ClubEvents[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    if (lightboxImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);

  return (
    <section id="events" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-5 backdrop-blur-md">
            <Calendar size={12} />
            <span>Event Archive · Historical Milestones</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
            Past{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Editions.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From beginner-friendly offline challenges to national research hackathons. Explore the evolution of our flagship series.
          </p>
        </div>

        {/* Apple Capsule Segmented Control Track */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-12 overflow-x-auto max-w-full scrollbar-none">
          {ClubEvents?.map((event) => {
            const isSelected = selectedEvent === event.eventName;
            return (
              <button
                key={event.eventName}
                onClick={() => setSelectedEvent(event.eventName)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {event.eventName}
              </button>
            );
          })}
        </div>

        {/* Apple Keynote Showcase Card */}
        {currentEvent && (
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#040816]/90 border border-white/[0.07] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                Department Flagship Milestone
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {currentEvent.eventName}
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {currentEvent.eventDescription}
              </p>
            </div>

            {/* Apple Gallery Grid */}
            {currentEvent.eventImagesArray && currentEvent.eventImagesArray.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/[0.08]">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Edition Photographs
                  </span>
                  <span className="text-xs text-slate-500 font-light">Click to zoom</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
                  {currentEvent.eventImagesArray.slice(0, 8).map((imgSrc, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxImage(imgSrc)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-left cursor-pointer"
                      aria-label={`View photo ${i + 1} from ${currentEvent.eventName}`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${currentEvent.eventName} moment ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                          <ZoomIn size={16} />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none cursor-pointer"
              aria-label="Close photo preview"
            >
              <X size={20} />
            </button>
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
