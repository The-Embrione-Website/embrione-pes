"use client";

import React from "react";
import { Building2 } from "lucide-react";

const partners = [
  { name: "Pixcellence Technologies", category: "Title Sponsor", logo: "/Kodikon5/kodikon5_title_sponsor.png" },
  { name: "SentinelOne", category: "Title Sponsor", logo: "/Kodikon4/Sponsors/Title Sponsor/SentinelOne.png" },
  { name: "Hack2Skill", category: "Platform Partner", logo: "/Partners/h2s_white_logo.png" },
  { name: "Axure", category: "Tech Partner", logo: "/sponsors/axure.png" },
  { name: "Wolfram", category: "Tech Partner", logo: "/sponsors/wolfram.png" },
  { name: "1Password", category: "Tech Partner", logo: "/sponsors/1Password.png" },
  { name: "echo3D", category: "Tech Partner", logo: "/sponsors/echo-three-d.png" },
  { name: "Flatlogic", category: "Platform Partner", logo: "/Kodikon4/Sponsors/Platform Partners/flatlogic.png" },
  { name: "EaseMyTrip", category: "Travel Partner", logo: "/sponsors/TravelPartners/EaseMyTrip-Logo.jpg" },
  { name: "Brown Burger", category: "Food Partner", logo: "/sponsors/FoodPartners/brownburger.png" },
  { name: "Glen's Bakehouse", category: "Food Partner", logo: "/sponsors/FoodPartners/glens.png" },
  { name: "Cream Bell", category: "Food Partner", logo: "/sponsors/FoodPartners/creambell.png" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#000514]">
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Previous Partners
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="p-3 sm:p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center text-center hover:border-slate-700 transition-colors"
          >
            <div className="w-full h-14 flex items-center justify-center mb-2">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-[85%] object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-xs font-semibold text-slate-200 line-clamp-1">{partner.name}</span>
            <span className="text-[10px] font-mono text-slate-400 mt-0.5 line-clamp-1">{partner.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
