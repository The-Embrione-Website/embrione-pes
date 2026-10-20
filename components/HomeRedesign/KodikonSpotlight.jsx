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
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-12 bg-black text-white overflow-hidden border-b border-zinc-800/80"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-blue-400">02</span>
            <span className="h-px w-6 bg-blue-500/40" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">Historical Event Archive</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-white leading-[1.05]">
            Past Editions.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            From beginner-friendly offline challenges to national research hackathons. Explore the evolution of our flagship series.
          </p>
        </div>

        {/* Segmented Control Track */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-950 border border-zinc-800 mb-10 overflow-x-auto max-w-full scrollbar-none">
          {ClubEvents?.map((event) => {
            const isSelected = selectedEventName === event.eventName;
            return (
              <button
                key={event.eventName}
                type="button"
                onClick={() => setSelectedEventName(event.eventName)}
                className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-[#1e3a8a] text-white font-semibold shadow-md shadow-blue-950/60 border border-blue-500/40"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {event.eventName}
              </button>
            );
          })}
        </div>

        {/* Keynote Showcase Card */}
        {currentEvent && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.eventName}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative p-6 sm:p-8 lg:p-10 rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl"
            >
              <div className="relative z-10 max-w-4xl">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-mono block mb-2">
                  Department Milestone
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                  {currentEvent.eventName}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                  {currentEvent.eventDescription}
                </p>
              </div>

              {/* Event Photo Gallery */}
              {currentPhotos.length > 0 && (
                <div className="relative z-10 mt-8 pt-8 border-t border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Camera size={14} className="text-blue-400" />
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                        Archive Photographs ({currentPhotos.length})
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">
                      Click photo to zoom
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {currentPhotos.map((imgSrc, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-black/60 border border-zinc-800 hover:border-blue-500/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-left cursor-pointer"
                        aria-label={`View photo ${i + 1} from ${currentEvent.eventName}`}
                      >
                        <img
                          src={imgSrc}
                          alt=""
                          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="p-2 rounded-md bg-black/80 text-white">
                            <ZoomIn size={16} />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Institutional Footer Tag */}
              <div className="relative z-10 mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <Layers size={13} className="text-blue-400" />
                  <span>Department of Computer Science &amp; Engineering</span>
                </div>
                <span>PES University</span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentPhotos[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl max-h-[88vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title, Counter and Controls */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="text-xs sm:text-sm font-medium text-zinc-300">
                <span>{currentEvent.eventName}</span>
                <span className="text-zinc-500 ml-2">
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
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((lightboxIndex + 1) % currentPhotos.length)
                  }
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white transition-colors cursor-pointer ml-2"
                  aria-label="Close photo preview"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Enlarged Image */}
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-black/90">
              <img
                src={currentPhotos[lightboxIndex]}
                alt=""
                className="max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
