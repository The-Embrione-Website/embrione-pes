"use client";

import React, { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { ClubEvents } from "@/constants";

export default function KodikonSpotlight() {
  const [selectedEvent, setSelectedEvent] = useState("Kodikon 5.0");
  const [lightboxImage, setLightboxImage] = useState(null);

  const currentEvent =
    ClubEvents?.find((e) => e.eventName === selectedEvent) || ClubEvents[0];

  // Close lightbox on Escape key
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
    <section id="events" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-black text-white">
      {/* Apple-style Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-400 block mb-3">
          Event Archive
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
          Past Editions.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
          From beginner-friendly offline challenges to national research hackathons. Explore what we&apos;ve conducted.
        </p>
      </div>

      {/* Apple-style Segmented Control Pill Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
        {ClubEvents?.map((event) => {
          const isSelected = selectedEvent === event.eventName;
          return (
            <button
              key={event.eventName}
              onClick={() => setSelectedEvent(event.eventName)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-white text-black shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
              }`}
            >
              {event.eventName}
            </button>
          );
        })}
      </div>

      {/* Apple-style Featured Event Showcase Card */}
      {currentEvent && (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161617] border border-white/10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
              Department Flagship
            </span>
            <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              {currentEvent.eventName}
            </h3>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {currentEvent.eventDescription}
            </p>
          </div>

          {/* Clean Apple Photo Gallery */}
          {currentEvent.eventImagesArray && currentEvent.eventImagesArray.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                  Edition Photographs
                </span>
                <span className="text-xs text-neutral-500 font-light">Click to zoom</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {currentEvent.eventImagesArray.slice(0, 8).map((imgSrc, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: imgSrc,
                        title: `${currentEvent.eventName} • Moment #${i + 1}`,
                      })
                    }
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer focus:outline-none"
                    aria-label={`Enlarge photo from ${currentEvent.eventName}`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${currentEvent.eventName} photograph`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-2 rounded-full bg-black/70 text-white backdrop-blur-md border border-white/20">
                        <ZoomIn size={16} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Apple-style Minimal Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 select-none"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close image"
          >
            <X size={20} />
          </button>

          {/* Lightbox Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-auto h-auto flex flex-col items-center"
          >
            <img
              src={lightboxImage.src}
              alt="Enlarged photograph"
              className="max-h-[80vh] max-w-[92vw] object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
            {lightboxImage.title && (
              <p className="mt-4 text-xs font-normal text-neutral-400 text-center">
                {lightboxImage.title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
