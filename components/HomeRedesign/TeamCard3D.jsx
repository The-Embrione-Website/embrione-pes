"use client";

import React, { useRef, useState } from "react";
import { Linkedin } from "lucide-react";

export default function TeamCard3D({ member }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth physical tilt
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setCoords({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      rawX: x,
      rawY: y,
    });

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.035, 1.035, 1.035)`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.08s ease-out, box-shadow 0.2s ease"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
      }}
      className={`group relative rounded-xl bg-slate-900 border overflow-hidden select-none flex flex-col justify-between ${
        isHovered
          ? "border-cyan-500/50 shadow-[0_20px_40px_-15px_rgba(6,182,212,0.25)]"
          : "border-slate-800 shadow-md"
      }`}
    >
      {/* Dynamic Cursor Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.rawX || 0}px ${coords.rawY || 0}px, rgba(6, 182, 212, 0.35), transparent 60%)`,
        }}
      />

      {/* Dynamic Specular Sheen / Reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.3 : 0,
          background: `linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.4) ${coords.x}%, transparent ${coords.x + 25}%)`,
        }}
      />

      {/* Photo with Parallax Depth */}
      <div
        className="relative w-full h-64 bg-slate-950 overflow-hidden"
        style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }}
      >
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle bottom vignette inside photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

        {/* Floating 3D Role Badge */}
        <div
          className="absolute top-3 right-3 z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <span
            className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-md border font-semibold backdrop-blur-md shadow-sm ${
              member.role === "Head"
                ? "bg-slate-900/90 text-cyan-300 border-cyan-500/50 shadow-cyan-500/20"
                : "bg-slate-900/90 text-slate-300 border-slate-700"
            }`}
          >
            {member.role || "Core"}
          </span>
        </div>
      </div>

      {/* Member Details with Parallax Depth */}
      <div
        className="p-4 flex flex-col justify-between flex-1 bg-slate-900/95 relative z-10"
        style={{ transform: "translateZ(25px)" }}
      >
        <div>
          <div className="text-[11px] font-mono text-cyan-400 font-medium">
            {member.domain}
          </div>
          <h3 className="text-base font-bold text-white tracking-tight mt-0.5 group-hover:text-cyan-200 transition-colors">
            {member.name}
          </h3>
          {member.term && (
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">
              Tenure: {member.term}
            </div>
          )}
        </div>

        {/* Bottom Bar: University & LinkedIn */}
        <div
          className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between"
          style={{ transform: "translateZ(35px)" }}
        >
          <span className="text-[10px] text-slate-400 font-mono tracking-wider">
            PES UNIVERSITY
          </span>
          {member.linkedinUrl && member.linkedinUrl !== "www" && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-slate-800 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors shadow-sm"
              aria-label={`${member.name} LinkedIn Profile`}
            >
              <Linkedin size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
