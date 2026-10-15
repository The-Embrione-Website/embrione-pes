import React from "react";
import { MapPin, TrainFront, Landmark, Bus, ArrowUpRight } from "lucide-react";

const MAPS_LINK = "https://maps.app.goo.gl/K2qedNEbRbfj2J397";
const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.578112425683!2d77.53211787431832!3d12.934815115685213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f4338e1a043%3A0x28b81882af6f590d!2sPESU%2052!5e0!3m2!1sen!2sin!4v1792070221392!5m2!1sen!2sin";

const travelInfo = [
  {
    icon: TrainFront,
    label: "NEAREST METRO",
    title: "Mysuru Road Metro Station (Purple Line)",
    text: "Take an auto or cab from the station to the Ring Road campus gate which is about 2.7 km away and takes around 10 minutes.",
  },
  {
    icon: Bus,
    label: "NEAREST BUS STOP",
    title: "PES College, 100 Feet Ring Road, BSK III Stage",
    text: "Regular BMTC buses ply along Outer Ring Road; use cab or auto for the last stretch.",
  },
  {
    icon: Landmark,
    label: "LANDMARKS",
    title: "Banashankari / BSK III Stage",
    text: "Look for the PES University Ring Road campus; the venue is PESU 52.",
  },
];

export default function MapComponent() {
  return (
    <section
      id="venue"
      aria-labelledby="venue-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-brand-border-divider"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-accent-cyan-glow mb-2">
          <MapPin size={14} aria-hidden="true" />
          <span>CAMPUS VENUE</span>
        </div>
        <h2
          id="venue-heading"
          className="text-2xl font-bold text-brand-text-primary tracking-tight"
        >
          PESU 52, PES University
        </h2>
        <p className="mt-1 text-sm text-brand-text-secondary font-light">
          100 Feet Ring Road, BSK III Stage, Bengaluru, Karnataka 560085
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 rounded-lg overflow-hidden border border-brand-border-subtle bg-brand-surface">
          <iframe
            src={EMBED_SRC}
            title="Map showing PESU 52, PES University Ring Road Campus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            className="block w-full h-72 sm:h-96 lg:h-full lg:min-h-[420px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-3">
          {travelInfo.map(({ icon: Icon, label, title, text }) => (
            <div
              key={label}
              className="p-4 rounded-lg bg-brand-surface-card/60 border border-brand-border-divider hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-[11px] font-mono text-brand-accent-cyan-glow">
                <Icon size={14} aria-hidden="true" />
                <span>{label}</span>
              </div>
              <h3 className="mt-1.5 text-sm font-semibold text-brand-text-primary">
                {title}
              </h3>
              <p className="mt-1 text-xs text-brand-text-secondary leading-relaxed font-light">
                {text}
              </p>
            </div>
          ))}

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-brand-accent-cyan-dark hover:bg-brand-accent-cyan text-white text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <span>Get Directions</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}