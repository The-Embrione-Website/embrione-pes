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
    <section id="events" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden border-t border-white/5">
      {/* Background Subtle Ambient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Calendar size={12} />
            <span>Event Archive · Historical Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Past{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Editions.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From beginner-friendly offline challenges to national research-grounded hackathons. Explore the evolution of our flagship series.
          </p>
        </div>

        {/* Professional Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 overflow-x-auto scrollbar-none">
          {ClubEvents?.map((event) => {
            const isSelected = selectedEvent === event.eventName;
            return (
              <button
                key={event.eventName}
                onClick={() => setSelectedEvent(event.eventName)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
                }`}
              >
                {event.eventName}
              </button>
            );
          })}
        </div>

        {/* Featured Event Showcase Card */}
        {currentEvent && (
          <div className="relative p-8 sm:p-12 rounded-2xl bg-[#060c1d]/90 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
                Official Department Flagship Archive
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                {currentEvent.eventName}
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {currentEvent.eventDescription}
              </p>
            </div>

            {/* Photo Gallery */}
            {currentEvent.eventImagesArray && currentEvent.eventImagesArray.length > 0 && (
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                    Edition Gallery
                  </span>
                  <span className="text-xs text-slate-500 font-light">Click image to expand</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {currentEvent.eventImagesArray.slice(0, 8).map((imgSrc, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setLightboxImage(imgSrc)}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-left cursor-pointer"
                      aria-label={`View photo ${i + 1} from ${currentEvent.eventName}`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${currentEvent.eventName} moment ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm">
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
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
