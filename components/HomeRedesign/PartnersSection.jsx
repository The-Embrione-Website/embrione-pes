
"use client";

import React from "react";


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
    <article className="group flex min-h-[120px] min-w-0 flex-col items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 p-5 text-center transition-colors hover:border-blue-500/50 sm:p-6">
      <div className="mb-3 flex h-12 w-full items-center justify-center">
        {!imageFailed ? (
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="max-h-9 max-w-[80%] object-contain"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="text-lg font-semibold tracking-tight text-blue-400">
            {sponsor.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 3)
              .toUpperCase()}
          </span>
        )}
      </div>

      <h3 className="max-w-full break-words text-xs font-mono uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-white">
        {sponsor.name}
      </h3>
    </article>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative w-full overflow-hidden border-b border-zinc-800/80 bg-black px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-blue-400">04</span>
            <span className="h-px w-6 bg-blue-500/40" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">Industry Network &amp; Allies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.035em] text-white">
            Previous Partners.
          </h2>

          <p className="mt-3.5 max-w-2xl text-base text-zinc-400 font-normal leading-relaxed sm:text-lg">
            The organizations and brands that have supported Embrione&apos;s
            initiatives and helped create opportunities for student builders.
          </p>
        </div>

        {/* Responsive sponsor grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}
