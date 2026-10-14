"use client";

import React from "react";
import { Linkedin } from "lucide-react";

export default function TeamCard3D({ member }) {
  return (
    <div className="group rounded-2xl bg-[#161617] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 flex flex-col justify-between">
      {/* Portrait Photo with Subtle Zoom */}
      <div className="relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Minimal Role Badge */}
        {member.role && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/15">
              {member.role}
            </span>
          </div>
        )}
      </div>

      {/* Member Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <span className="text-xs text-neutral-400 font-normal block mb-0.5">
            {member.domain}
          </span>
          <h3 className="text-base font-semibold text-white tracking-tight">
            {member.name}
          </h3>
          {member.term && (
            <span className="text-[11px] text-neutral-500 block mt-0.5">
              Term: {member.term}
            </span>
          )}
        </div>

        {/* Bottom Strip: Institution & LinkedIn */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-500">
          <span>PES University</span>
          {member.linkedinUrl && member.linkedinUrl !== "www" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
              aria-label={`${member.name} LinkedIn Profile`}
            >
              <Linkedin size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
