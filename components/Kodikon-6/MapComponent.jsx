
"use client";

import React from "react";
import {
  MapPin,
  TrainFront,
  Landmark,
  Bus,
  ArrowUpRight,
} from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/K2qedNEbRbfj2J397";

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.578112425683!2d77.53211787431832!3d12.934815115685213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4338e1a043%3A0x28b81882af6f590d!2sPESU%2052!5e0!3m2!1sen!2sin!4v1792070221392!5m2!1sen!2sin";

const travelInfo = [
  {
    icon: TrainFront,
    label: "NEAREST METRO",
    title: "Mysuru Road Metro Station (Purple Line)",
    text: "Take an auto or cab from the station to the Ring Road campus gate, approximately 2.7 km away.",
  },
  {
    icon: Bus,
    label: "NEAREST BUS STOP",
    title: "PES College, 100 Feet Ring Road, BSK III Stage",
    text: "BMTC buses serve the surrounding area. An auto or cab can help with the last stretch.",
  },
  {
    icon: Landmark,
    label: "LANDMARKS",
    title: "Banashankari / BSK III Stage",
    text: "Look for PES University Ring Road Campus. The event venue is PESU 52.",
  },
];

export default function MapComponent() {
  return (
    <section
      id="venue"
      aria-labelledby="venue-heading"
      className="relative isolate overflow-hidden border-t border-brand-border-subtle bg-brand-canvas px-4 py-16 text-brand-text-primary sm:px-6 lg:px-8"
    >
      {/* Blue glow and subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="venue-background-glow absolute inset-0" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs text-brand-accent-cyan-glow">
            <MapPin size={14} aria-hidden="true" />
            <span>CAMPUS VENUE</span>
          </div>

          <h2
            id="venue-heading"
            className="text-2xl font-bold tracking-tight text-brand-text-primary sm:text-3xl"
          >
            Find the Venue
          </h2>

          <p className="mt-2 text-sm font-light leading-6 text-brand-text-secondary">
            PESU 52, PES University
          </p>

          <p className="text-sm font-light leading-6 text-brand-text-muted">
            100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka 560085
          </p>
        </div>

        {/* Map and travel details */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="overflow-hidden rounded-xl border border-brand-border-subtle bg-brand-surface-card/80 shadow-xl backdrop-blur-sm lg:col-span-3">
            <iframe
              src={EMBED_SRC}
              title="Map showing PESU 52, PES University Ring Road Campus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="block h-72 w-full sm:h-96 lg:h-full lg:min-h-[420px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="flex flex-col gap-3 lg:col-span-2">
            {travelInfo.map(({ icon: Icon, label, title, text }) => (
              <div
                key={label}
                className="rounded-xl border border-brand-border-divider bg-brand-surface-card/70 p-4 backdrop-blur-sm transition-colors duration-200 hover:border-brand-border-hover"
              >
                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] text-brand-accent-cyan-glow">
                  <Icon size={14} aria-hidden="true" />
                  <span>{label}</span>
                </div>

                <h3 className="mt-2 text-sm font-semibold leading-5 text-brand-text-primary">
                  {title}
                </h3>

                <p className="mt-1.5 text-xs font-light leading-relaxed text-brand-text-secondary">
                  {text}
                </p>
              </div>
            ))}

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-brand-accent-blue px-5 py-3 text-sm font-semibold text-brand-text-primary transition-colors hover:bg-brand-accent-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-blue"
            >
              <MapPin size={15} aria-hidden="true" />
              <span>Get Directions</span>
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Footer label */}
        <p className="mt-6 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-brand-text-muted">
          EMBRIONE{" "}
          <span className="mx-1 text-brand-accent-cyan">/</span>
          KODIKON 6.0
        </p>
      </div>
    </section>
  );
}
