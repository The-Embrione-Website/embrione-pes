"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X, ZoomIn, ExternalLink } from "lucide-react";
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
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#000514]">
      {/* Featured Banners: Kodikon 6.0 (Upcoming) & Kodikon 5.0 (Latest Archive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {/* Kodi 6.0 Card */}
        <div className="p-6 rounded-lg bg-slate-900 border border-cyan-500/50 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 mb-2">
              <span>NEXT EDITION • PESU 52</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Kodikon 6.0
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Upcoming 24-hour flagship national hackathon hosted in-person at PESU 52, PES University.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/kodikon-6"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-colors"
            >
              <span>Explore Kodikon 6.0</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Kodi 5.0 Card */}
        <div className="p-6 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300 mb-2">
              <span>LATEST COMPLETED EDITION</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Kodikon 5.0
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Research-driven national hackathon with Pixcellence Technologies, Assistive AI, and Edge Vision.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/kodikon-5"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors border border-slate-700"
            >
              <span>View Kodikon 5.0 Portal</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Heading from Old Website */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Here&apos;s What We&apos;ve conducted!
        </h2>
      </div>

      {/* Event Selection Pills/Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {ClubEvents?.map((event) => (
          <button
            key={event.eventName}
            onClick={() => setSelectedEvent(event.eventName)}
            className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors border ${
              selectedEvent === event.eventName
                ? "bg-cyan-600 border-cyan-500 text-white font-semibold"
                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            {event.eventName}
          </button>
        ))}
      </div>

      {/* Active Event Details */}
      {currentEvent && (
        <div className="p-6 sm:p-8 rounded-lg bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400">Department Event</span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                {currentEvent.eventName}
              </h3>
            </div>
            {currentEvent.eventName === "Kodikon 5.0" && (
              <Link
                href="/kodikon-5"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono transition-colors w-fit"
              >
                <span>Open Kodikon 5.0 Portal</span>
                <ArrowRight size={12} />
              </Link>
            )}
            {currentEvent.eventName === "Kodikon 4.0" && (
              <Link
                href="/kodikon-4"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors w-fit"
              >
                <span>View 4.0 Archive Portal</span>
                <ArrowRight size={12} />
              </Link>
            )}
            {currentEvent.eventName === "Kodikon 3.0" && (
              <Link
                href="/kodikon-3"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors w-fit"
              >
                <span>View 3.0 Archive Portal</span>
                <ArrowRight size={12} />
              </Link>
            )}
          </div>

          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {currentEvent.eventDescription}
          </p>

          {/* Interactive Archive Image Gallery (Click to Zoom Lightbox) */}
          {currentEvent.eventImagesArray && currentEvent.eventImagesArray.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                <span>EVENT ARCHIVE PHOTOGRAPHS</span>
                <span className="text-cyan-400">Click image to enlarge</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {currentEvent.eventImagesArray.slice(0, 8).map((imgSrc, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: imgSrc,
                        title: `${currentEvent.eventName} - Archive #${i + 1}`,
                      })
                    }
                    className="group relative h-28 sm:h-32 rounded-md overflow-hidden bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-all duration-200 cursor-pointer focus:outline-none"
                    aria-label={`Enlarge photo ${i + 1} from ${currentEvent.eventName}`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${currentEvent.eventName} moment ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-1.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-700">
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

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn select-none"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-md bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors z-50 cursor-pointer"
            aria-label="Close enlarged image"
          >
            <X size={20} />
          </button>

          {/* Enlarge Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-auto h-auto flex flex-col items-center"
          >
            <img
              src={lightboxImage.src}
              alt="Enlarged archive photograph"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg border border-slate-700 shadow-2xl"
            />
            {lightboxImage.title && (
              <div className="mt-3 px-3 py-1 rounded bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                {lightboxImage.title}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
