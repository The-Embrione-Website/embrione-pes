"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

// Golden Angle (137.508°) algorithmically distributes hues across the full 360° color wheel
// ensuring maximum chromatic variety with no repetitive adjacent colors
const GOLDEN_ANGLE = 137.508;

// Physical tilt and dimension variations for desktop editorial gallery
const SHAPE_VARIANTS = [
  { aspect: "aspect-[3/4.4]", tilt: "-rotate-[2.2deg]", offset: "sm:translate-y-0", scale: "scale-[1.02]" },
  { aspect: "aspect-[3/3.7]", tilt: "rotate-[2.5deg]",  offset: "sm:translate-y-5", scale: "scale-[0.95]" },
  { aspect: "aspect-[3/4.6]", tilt: "-rotate-[1.8deg]", offset: "sm:-translate-y-2", scale: "scale-[1.03]" },
  { aspect: "aspect-[3/3.9]", tilt: "rotate-[2.8deg]",  offset: "sm:translate-y-4", scale: "scale-[0.93]" },
  { aspect: "aspect-[3/4.3]", tilt: "-rotate-[2.4deg]", offset: "sm:-translate-y-1", scale: "scale-[1.01]" },
  { aspect: "aspect-[3/3.8]", tilt: "rotate-[1.9deg]",  offset: "sm:translate-y-6", scale: "scale-[0.96]" },
];

export default function TeamCard3D({
  member,
  index = 0,
  isHovered = false,
  isDimmed = false,
  onHover,
  onLeave,
}) {
  const cardRef = useRef(null);
  const shape = SHAPE_VARIANTS[index % SHAPE_VARIANTS.length];
  const formattedIndex = String(index + 1).padStart(2, "0");

  // SSR-safe random base offset: starts at 0 for matching hydration, shifts randomly on mount
  const [randomOffset, setRandomOffset] = useState(0);
  // Mobile on-screen viewport detection
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    // Generate a new random starting angle each page load
    setRandomOffset(Math.floor(Math.random() * 360));
  }, []);

  // Track when card is visible on screen on mobile/touch devices
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsOnScreen(true);
      return;
    }

    const checkMobile = () =>
      typeof window !== "undefined" &&
      (window.innerWidth < 768 ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (checkMobile()) {
            setIsOnScreen(entry.isIntersecting);
          } else {
            setIsOnScreen(false);
          }
        });
      },
      {
        root: null,
        // Active when card enters the viewport focal zone
        rootMargin: "-4% 0px -4% 0px",
        threshold: 0.12,
      }
    );

    observer.observe(el);

    const handleResize = () => {
      if (!checkMobile()) {
        setIsOnScreen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Compute a 100% unique hue (0-360) for every single profile on the page
  const hue = Math.round((index * GOLDEN_ANGLE + randomOffset) % 360);

  // Active state: triggered by mouse hover on desktop OR when scrolled into view on mobile
  const isCardActive = isHovered || isOnScreen;

  // Dynamic HSL color tokens for this card
  const tintColor = `hsla(${hue}, 85%, 52%, 0.28)`;
  const accentColor = `hsl(${hue}, 90%, 65%)`;
  const defaultBorder = `hsla(${hue}, 50%, 30%, 0.38)`;
  const activeBorder = `hsl(${hue}, 85%, 60%)`;
  const glowShadow = isCardActive
    ? `0 24px 60px -10px hsla(${hue}, 85%, 55%, 0.35)`
    : "0 10px 30px -10px rgba(0,0,0,0.8)";

  // Mobile tap handler: toggle active focus on touch
  const handleCardClick = () => {
    if (isHovered) {
      if (onLeave) onLeave();
    } else {
      if (onHover) onHover();
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={handleCardClick}
      className={`group relative w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu cursor-pointer ${
        shape.offset
      } ${
        isCardActive
          ? "z-30 scale-100 sm:scale-[1.08] rotate-0 -translate-y-1 sm:-translate-y-3 opacity-100"
          : isDimmed && !isOnScreen
          ? "sm:scale-[0.86] sm:opacity-25 opacity-100 sm:filter sm:grayscale sm:contrast-75 sm:brightness-75"
          : `${shape.scale} ${shape.tilt} opacity-100 hover:z-30`
      }`}
    >
      {/* Outer Card Shell with Chromatic Tint Border */}
      <article
        style={{
          borderColor: isCardActive ? activeBorder : defaultBorder,
          boxShadow: glowShadow,
        }}
        className={`relative flex flex-col justify-between overflow-hidden rounded-lg border bg-[#08080a] p-3 transition-all duration-500 ${
          isCardActive ? "bg-zinc-950" : ""
        }`}
      >
        {/* Subtle Ambient Radial Backlight in this card's unique color */}
        <div
          style={{
            background: `radial-gradient(circle at top right, ${accentColor}18 0%, transparent 70%)`,
          }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* 1. Catalog Header: Index & Dynamic Hue Indicator */}
        <div className="relative z-10 mb-2 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span
              style={{ backgroundColor: accentColor }}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isCardActive ? "animate-ping" : ""
              }`}
            />
            <span className="text-zinc-500">№ {formattedIndex}</span>
          </div>

          <span
            style={{ color: isCardActive ? accentColor : "#a1a1aa" }}
            className="text-[11px] font-sans font-medium tracking-wide uppercase transition-colors duration-300"
          >
            {member.domain || "Core"}
          </span>
        </div>

        {/* 2. Framed Photographic Window with Individual Chromatic Cast */}
        <div
          className={`relative aspect-[3/4] sm:${shape.aspect} w-full overflow-hidden rounded-md bg-zinc-900 border border-zinc-800/70`}
        >
          {/* Member Photo */}
          {member.photo || member.photoUrl ? (
            <Image
              src={member.photo || member.photoUrl}
              alt={member.name}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
              className={`object-cover object-top transition-all duration-700 ease-out ${
                isCardActive
                  ? "scale-105 filter grayscale-0 contrast-100 brightness-100"
                  : "filter grayscale contrast-125 brightness-95"
              }`}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-serif text-3xl italic text-zinc-700">
              {member.name?.charAt(0) || "—"}
            </div>
          )}

          {/* Full-Spectrum Chromatic Tint Overlay: Active when NOT active */}
          <div
            style={{
              backgroundColor: tintColor,
              mixBlendMode: "color",
            }}
            className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
              isCardActive ? "opacity-0" : "opacity-90 sm:opacity-100"
            }`}
          />

          {/* Subtle Contrast Vignette at Bottom of Frame */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

          {/* Anchored Role Badge */}
          {member.role && (
            <div className="absolute bottom-2 left-2 z-20">
              <span className="rounded bg-black/90 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white border border-white/10 backdrop-blur-md">
                {member.role}
              </span>
            </div>
          )}
        </div>

        {/* 3. Typography & Mobile-Friendly Social Actions */}
        <div className="relative z-10 mt-3 flex items-end justify-between gap-2 pt-1">
          <div className="min-w-0 flex-1">
            <h3
              className={`text-sm sm:text-base font-semibold tracking-tight truncate transition-colors duration-300 ${
                isCardActive ? "text-white" : "text-zinc-200"
              }`}
            >
              {member.name}
            </h3>
            {member.term && (
              <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                Cohort {member.term}
              </p>
            )}
          </div>

          {/* Touch-Friendly Social Link Buttons */}
          <div className="flex items-center gap-1.5 shrink-0 opacity-100 sm:opacity-70 sm:group-hover:opacity-100 transition-opacity">
            {member.linkedin && member.linkedin !== "www" && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on LinkedIn`}
                style={{
                  borderColor: isCardActive ? defaultBorder : undefined,
                }}
                className="flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 active:scale-95 transition-all"
              >
                <Linkedin size={13} />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${member.name} on GitHub`}
                style={{
                  borderColor: isCardActive ? defaultBorder : undefined,
                }}
                className="flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 active:scale-95 transition-all"
              >
                <Github size={13} />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
