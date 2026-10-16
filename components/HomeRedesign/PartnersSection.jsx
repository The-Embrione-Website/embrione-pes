
"use client";

import React from "react";
import { Globe } from "lucide-react";

const sponsors = [
  {
    name: "Pixcellence",
    logo: "/Sponsors-till-2026/Pixcellence",
  },
  {
    name: "7Eleven",
    logo: "/Sponsors-till-2026/7Eleven",
  },
  {
    name: "Azure",
    logo: "/Sponsors-till-2026/Azure",
  },
  {
    name: "Brown Burger",
    logo: "/Sponsors-till-2026/Brown Burger",
  },
  {
    name: "Cothas Coffee",
    logo: "/Sponsors-till-2026/Cothas Coffee",
  },
  {
    name: "Flatlogic",
    logo: "/Sponsors-till-2026/Flatlogic",
  },
  {
    name: "Glens",
    logo: "/Sponsors-till-2026/Glens",
  },
  {
    name: "Internshala",
    logo: "/Sponsors-till-2026/Internshala",
  },
  {
    name: "Rage Coffee",
    logo: "/Sponsors-till-2026/Rage Coffee",
  },
  {
    name: "Sentinel One",
    logo: "/Sponsors-till-2026/Sentinel One",
  },
  {
    name: "Wolfram",
    logo: "/Sponsors-till-2026/Wolfram",
  },
];

function SponsorCard({ sponsor }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <article className="group flex min-h-[145px] min-w-0 flex-col items-center justify-center rounded-2xl border border-white/[0.07] bg-[#040816]/90 p-5 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] sm:p-6">
      <div className="mb-3 flex h-12 w-full items-center justify-center">
        {!imageFailed ? (
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="max-h-10 max-w-[85%] object-contain brightness-90 transition-all duration-300 group-hover:brightness-100"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="text-xl font-semibold tracking-tight text-cyan-300">
            {sponsor.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 3)
              .toUpperCase()}
          </span>
        )}
      </div>

      <h3 className="max-w-full break-words text-xs font-semibold text-slate-200 transition-colors group-hover:text-white">
        {sponsor.name}
      </h3>

      {/* <span className="mt-1 text-[10px] font-medium tracking-wide text-cyan-400/80">
        Sponsor
      </span> */}
    </article>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#000000] px-4 py-28 text-white sm:px-6 sm:py-36 lg:px-8"
    >
      {/* Ambient cyan glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[700px] max-w-full -translate-x-1/2 -translate-y-1/2 bg-cyan-500/[0.05] blur-[140px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Globe size={12} />
            <span>Industry Network · Technology Allies</span>
          </div>

          <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl">
            Previous{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              Partners.
            </span>
          </h2>

          <p className="mt-3.5 max-w-2xl text-base font-light leading-relaxed text-slate-300 sm:text-lg">
            The organizations and brands that have supported Embrione's
            initiatives and helped create opportunities for student builders.
          </p>
        </div>

        {/* Responsive sponsor grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}
