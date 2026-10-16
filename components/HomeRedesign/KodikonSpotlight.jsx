"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ZoomIn,
  X,
  ChevronRight,
  ChevronLeft,
  Camera,
  Layers,
} from "lucide-react";
import { ClubEvents } from "@/components/HomeRedesign/constants";

// Only genuine event photographs (omitting sponsor logos or graphics for Kodi 3, 4, and 5)
const eventPhotosMap = {
  "Kodikon 2.0": [
    "/Kodikon2/image4.webp",
    "/Kodikon2/image5.webp",
    "/Kodikon2/image6.webp",
    "/Kodikon2/image7.webp",
    "/Kodikon2/image8.webp",
    "/Kodikon2/image9.webp",
    "/Kodikon2/image10.webp",
    "/Kodikon2/image11.webp",
    "/Kodikon2/image12.webp",
  ],
  "Kodikon 1.0": [
    "/Kodikon1/image1.webp",
    "/Kodikon1/image2.webp",
    "/Kodikon1/image3.webp",
    "/Kodikon1/image4.webp",
    "/Kodikon1/image5.webp",
    "/Kodikon1/image6.webp",
    "/Kodikon1/image7.webp",
    "/Kodikon1/image8.webp",
    "/Kodikon1/image9.webp",
  ],
  Cipher: [
    "/Cipher/image1.webp",
    "/Cipher/image2.webp",
    "/Cipher/image3.webp",
    "/Cipher/image4.webp",
  ],
  Spark: [
    "/Spark/image1.webp",
    "/Spark/image2.webp",
    "/Spark/image3.webp",
  ],
};

export default function KodikonSpotlight() {
  const [selectedEventName, setSelectedEventName] = useState("Kodikon 5.0");
  const [lightboxIndex, setLightboxIndex] = useState(null); // number or null

  const currentEvent =
    ClubEvents?.find((e) => e.eventName === selectedEventName) || ClubEvents[0];

  const currentPhotos = eventPhotosMap[currentEvent?.eventName] || [];

  // Reset lightbox when changing event
  useEffect(() => {
    setLightboxIndex(null);
  }, [selectedEventName]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % currentPhotos.length : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + currentPhotos.length) % currentPhotos.length
            : 0
        );
      }
    };

    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex, currentPhotos.length]);

  return (
    <section
      id="events"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden border-t border-white/[0.06]"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full -z-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-5 backdrop-blur-md">
            <Calendar size={13} />
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

        {/* Apple Capsule Segmented Control Track (All 7 original events preserved) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-10 overflow-x-auto max-w-full scrollbar-none">
          {ClubEvents?.map((event) => {
            const isSelected = selectedEventName === event.eventName;
            return (
              <button
                key={event.eventName}
                type="button"
                onClick={() => setSelectedEventName(event.eventName)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-cyan-500 text-black shadow-[0_0_18px_rgba(6,182,212,0.35)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {event.eventName}
              </button>
            );
          })}
        </div>

        {/* Apple Keynote Showcase Card */}
        {currentEvent && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.eventName}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative p-7 sm:p-11 lg:p-12 rounded-3xl bg-[#040816]/90 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-4xl">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-2">
                  Department Milestone
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {currentEvent.eventName}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  {currentEvent.eventDescription}
                </p>
              </div>

              {/* Event Photo Gallery (Rendered only for events with genuine event photos) */}
              {currentPhotos.length > 0 && (
                <div className="relative z-10 mt-10 pt-8 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <Camera size={14} className="text-cyan-400" />
                      <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
                        Event Photographs ({currentPhotos.length})
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-light">
                      Click photo to zoom
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5 sm:gap-4">
                    {currentPhotos.map((imgSrc, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-left cursor-pointer shadow-lg hover:scale-[1.02]"
                        aria-label={`View photo ${i + 1} from ${currentEvent.eventName}`}
                      >
                        <img
                          src={imgSrc}
                          alt=""
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                            <ZoomIn size={16} />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Institutional Footer Tag */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Layers size={13} className="text-cyan-400/80" />
                  <span>Department of Computer Science &amp; Engineering</span>
                </div>
                <span>PES University</span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Lightbox Modal (Clean preview, keyboard arrow navigation, NO text descriptions) */}
      {lightboxIndex !== null && currentPhotos[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl max-h-[88vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title, Counter and Controls */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                <span>{currentEvent.eventName}</span>
                <span className="text-slate-500 ml-2">
                  ({lightboxIndex + 1} of {currentPhotos.length})
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex(
                      (lightboxIndex - 1 + currentPhotos.length) %
                        currentPhotos.length
                    )
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % currentPhotos.length)
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-2"
                  aria-label="Close photo preview"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Enlarged Image */}
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/80">
              <img
                src={currentPhotos[lightboxIndex]}
                alt=""
                className="max-w-full max-h-[75vh] object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
