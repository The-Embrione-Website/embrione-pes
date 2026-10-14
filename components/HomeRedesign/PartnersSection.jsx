"use client";

import React from "react";

const partners = [
  { name: "Pixcellence Technologies", category: "Title Sponsor", logo: "/Kodikon5/kodikon5_title_sponsor.webp" },
  { name: "SentinelOne", category: "Title Sponsor", logo: "/Kodikon4/Sponsors/Title Sponsor/SentinelOne.webp" },
  { name: "Hack2Skill", category: "Platform Partner", logo: "/Partners/h2s_white_logo.webp" },
  { name: "Axure", category: "Tech Partner", logo: "/sponsors/axure.webp" },
  { name: "Wolfram", category: "Tech Partner", logo: "/sponsors/wolfram.webp" },
  { name: "1Password", category: "Tech Partner", logo: "/sponsors/1Password.webp" },
  { name: "echo3D", category: "Tech Partner", logo: "/sponsors/echo-three-d.webp" },
  { name: "Flatlogic", category: "Platform Partner", logo: "/Kodikon4/Sponsors/Platform Partners/flatlogic.webp" },
  { name: "EaseMyTrip", category: "Travel Partner", logo: "/sponsors/TravelPartners/EaseMyTrip-Logo.webp" },
  { name: "Brown Burger", category: "Food Partner", logo: "/sponsors/FoodPartners/brownburger.webp" },
  { name: "Glen's Bakehouse", category: "Food Partner", logo: "/sponsors/FoodPartners/glens.webp" },
  { name: "Cream Bell", category: "Food Partner", logo: "/sponsors/FoodPartners/creambell.webp" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-black text-white">
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-400 block mb-3">
          Industry Network
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
          Previous Partners.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
          Organizations, technology sponsors, and platforms that power our hackathons and support student builders.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="group p-5 rounded-2xl bg-[#161617] border border-white/10 hover:border-white/25 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[140px]"
          >
            <div className="w-full h-12 flex items-center justify-center mb-3">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-9 max-w-[85%] object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-medium text-neutral-200 line-clamp-1">{partner.name}</span>
            <span className="text-[10px] text-neutral-500 mt-0.5 line-clamp-1 font-light">{partner.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
