"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowUpRight,
  Compass,
  Sparkles,
} from "lucide-react";


const EDICT_SCROLL_ITEMS = [
  {
    kanji: "日",
    label: "Hackathon Dates",
    value: "31st Oct – 1st Nov",
    subtext: "Registrations: 19th – 25th Oct",
    icon: Calendar,
  },
  {
    kanji: "場",
    label: "Campus Venue",
    value: "PESU 52, PES University",
    subtext: "100 Feet Ring Road, Bengaluru",
    icon: MapPin,
  },
  {
    kanji: "隊",
    label: "Team Size",
    value: "Exactly 4 Members",
    subtext: "4 undergraduate engineers per team",
    icon: Users,
  },
];

const FLOATING_EMBERS = [
  { left: "6%", top: "55%", size: "h-1.5 w-1.5", delay: "0s", duration: "7s", color: "bg-amber-400" },
  { left: "14%", top: "30%", size: "h-1 w-1", delay: "1.2s", duration: "8s", color: "bg-brand-accent-cyan-glow" },
  { left: "24%", top: "68%", size: "h-1.5 w-1.5", delay: "2.5s", duration: "9s", color: "bg-brand-accent-cyan" },
  { left: "48%", top: "75%", size: "h-1 w-1", delay: "3s", duration: "8s", color: "bg-amber-300" },
  { left: "74%", top: "62%", size: "h-1.5 w-1.5", delay: "0.8s", duration: "10s", color: "bg-brand-accent-cyan-glow" },
  { left: "86%", top: "32%", size: "h-1 w-1", delay: "2.2s", duration: "7.5s", color: "bg-brand-accent-blue" },
  { left: "93%", top: "58%", size: "h-1.5 w-1.5", delay: "1.7s", duration: "8.5s", color: "bg-amber-400" },
];

export default function HeroComponent() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        if (window.scrollY <= 900) {
          setScrollY(window.scrollY);
        }
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (
      window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)")
        .matches
    ) {
      return;
    }
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    setMouseOffset({ x: normX, y: normY });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate overflow-hidden bg-[#02050e] font-sans text-white min-h-[100svh] flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Keyframes for Swaying Lanterns, Tassels & Floating Embers */}
      <style jsx>{`
        @keyframes floatEmber {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-28px) translateX(6px) scale(1.3);
            opacity: 0.65;
          }
        }
        @keyframes swayLeftLantern {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(2.5deg);
          }
        }
        @keyframes swayRightLantern {
          0%, 100% {
            transform: rotate(2.8deg);
          }
          50% {
            transform: rotate(-2.8deg);
          }
        }
        @keyframes tasselWave {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        @keyframes lanternPulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.08);
          }
        }
      `}</style>

      {/* 1. Ambient Navy/Cyan Top & Side Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse at 50% 15%, rgba(0, 113, 227, 0.24) 0%, rgba(6, 182, 212, 0.12) 30%, rgba(0, 81, 180, 0.04) 55%, transparent 75%), linear-gradient(180deg, #000514 0%, #000000 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand-accent-cyan/5 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand-accent-blue/5 blur-[110px]"
      />

      {/* 2. Signature 56px Checks Grid Overlay */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${mouseOffset.x * -8}px, ${scrollY * 0.07 + mouseOffset.y * -8}px, 0)`,
          transition: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_92%_80%_at_50%_40%,#000_65%,transparent_100%)] will-change-transform"
      />

      {/* 3. Floating Spirit Embers (Hotaru) Across Full Width */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {FLOATING_EMBERS.map((ember, idx) => (
          <span
            key={idx}
            style={{
              left: ember.left,
              top: ember.top,
              animation: `floatEmber ${ember.duration} ease-in-out ${ember.delay} infinite`,
            }}
            className={`absolute rounded-full ${ember.size} ${ember.color} blur-[0.5px]`}
          />
        ))}
      </div>

      {/* =====================================================================
          4. LEFT & RIGHT LANTERNS: ANCHORED FLUSH TO TOP/NAVBAR (NEVER DETACH)
         ===================================================================== */}

      {/* LEFT SIDE LANTERN & SCROLL */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${scrollY * -0.06 + mouseOffset.y * 8}px, 0)`,
          transition: "transform 300ms ease-out",
        }}
        className="pointer-events-none absolute left-2 sm:left-6 lg:left-10 xl:left-16 top-0 z-0 flex flex-col items-center select-none will-change-transform"
      >
        {/* Continuous Hanging Cord from Navbar */}
        <div className="h-16 sm:h-20 lg:h-24 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-400/50 to-cyan-400/30" />

        {/* Eave Bracket (Noki) */}
        <div className="relative flex flex-col items-start -mt-1">
          <div className="h-[2px] w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-brand-accent-cyan/60 via-brand-accent-cyan/30 to-transparent" />
          <div className="mt-0.5 h-[1px] w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-brand-border-hover to-transparent" />
        </div>

        {/* Swaying Left Chōchin */}
        <div
          style={{
            transformOrigin: "top center",
            animation: "swayLeftLantern 5.5s ease-in-out infinite",
          }}
          className="flex flex-col items-center mt-1"
        >
          <div className="h-4 sm:h-6 w-px bg-cyan-400/50" />
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full border border-brand-accent-cyan/60" />
          <div className="h-1 sm:h-1.5 w-5 sm:w-7 rounded-t-sm bg-brand-surface-navy border border-brand-accent-cyan/50" />

          {/* Main Chōchin Ribbed Body */}
          <div className="relative h-12 w-9 sm:h-16 sm:w-12 lg:h-20 lg:w-14 rounded-2xl border border-brand-accent-cyan/50 bg-brand-surface-navy/90 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.22)]">
            <div
              style={{ animation: "lanternPulse 3.8s ease-in-out infinite" }}
              className="absolute h-8 w-6 sm:h-10 sm:w-8 rounded-full bg-gradient-to-b from-brand-accent-cyan/40 via-amber-400/35 to-brand-accent-cyan/30 blur-md"
            />
            <div className="absolute inset-x-0 top-1/4 h-px bg-brand-accent-cyan/25" />
            <div className="absolute inset-x-0 top-2/4 h-px bg-brand-accent-cyan/25" />
            <div className="absolute inset-x-0 top-3/4 h-px bg-brand-accent-cyan/25" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-brand-accent-cyan/15" />

            <span className="relative z-10 font-mono text-[10px] sm:text-xs lg:text-sm font-bold text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              創
            </span>
          </div>

          <div className="h-1 sm:h-1.5 w-5 sm:w-7 rounded-b-sm bg-brand-surface-navy border border-brand-accent-cyan/50" />

          {/* Tassel */}
          <div
            style={{
              transformOrigin: "top center",
              animation: "tasselWave 3.5s ease-in-out infinite",
            }}
            className="flex flex-col items-center"
          >
            <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-amber-400/70 mt-0.5" />
            <div className="flex gap-[2px]">
              <div className="h-4 sm:h-7 w-px bg-gradient-to-b from-amber-400/60 to-transparent" />
              <div className="h-5 sm:h-8 w-px bg-gradient-to-b from-brand-accent-cyan/60 to-transparent" />
              <div className="h-4 sm:h-7 w-px bg-gradient-to-b from-amber-400/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Vertical Scroll (Desktop & Tablet) */}
        <div className="mt-3 hidden sm:flex flex-col items-center">
          <div className="h-1 w-8 sm:w-10 rounded-full bg-brand-border-hover" />
          <div className="w-7 sm:w-8 border-x border-y border-brand-border-subtle bg-brand-surface-navy/75 py-3 sm:py-4 flex flex-col items-center gap-2 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rotate-45 bg-brand-accent-cyan/60" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-brand-text-secondary/70 [writing-mode:vertical-rl]">
              武士道・技術
            </span>
            <span className="rounded-sm border border-amber-400/30 bg-amber-500/10 px-0.5 py-0.2 font-mono text-[7px] text-amber-300">
              六
            </span>
          </div>
          <div className="h-1 w-8 sm:w-10 rounded-full bg-brand-border-hover" />
        </div>
      </div>

      {/* RIGHT SIDE LANTERN & SCROLL */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${mouseOffset.x * -12}px, ${scrollY * -0.06 + mouseOffset.y * -8}px, 0)`,
          transition: "transform 300ms ease-out",
        }}
        className="pointer-events-none absolute right-2 sm:right-6 lg:right-10 xl:right-16 top-0 z-0 flex flex-col items-center select-none will-change-transform"
      >
        {/* Continuous Hanging Cord from Navbar */}
        <div className="h-16 sm:h-20 lg:h-24 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-400/50 to-cyan-400/30" />

        {/* Eave Bracket (Noki) */}
        <div className="relative flex flex-col items-end -mt-1">
          <div className="h-[2px] w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-brand-accent-cyan/60 via-brand-accent-cyan/30 to-transparent" />
          <div className="mt-0.5 h-[1px] w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-brand-border-hover to-transparent" />
        </div>

        {/* Swaying Right Chōchin */}
        <div
          style={{
            transformOrigin: "top center",
            animation: "swayRightLantern 6.2s ease-in-out infinite",
          }}
          className="flex flex-col items-center mt-1"
        >
          <div className="h-4 sm:h-6 w-px bg-cyan-400/50" />
          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full border border-brand-accent-cyan/60" />
          <div className="h-1 sm:h-1.5 w-5 sm:w-7 rounded-t-sm bg-brand-surface-navy border border-brand-accent-cyan/50" />

          {/* Main Chōchin Ribbed Body */}
          <div className="relative h-12 w-9 sm:h-16 sm:w-12 lg:h-20 lg:w-14 rounded-2xl border border-brand-accent-cyan/50 bg-brand-surface-navy/90 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.22)]">
            <div
              style={{ animation: "lanternPulse 4.2s ease-in-out 1s infinite" }}
              className="absolute h-8 w-6 sm:h-10 sm:w-8 rounded-full bg-gradient-to-b from-brand-accent-cyan/40 via-amber-400/35 to-brand-accent-cyan/30 blur-md"
            />
            <div className="absolute inset-x-0 top-1/4 h-px bg-brand-accent-cyan/25" />
            <div className="absolute inset-x-0 top-2/4 h-px bg-brand-accent-cyan/25" />
            <div className="absolute inset-x-0 top-3/4 h-px bg-brand-accent-cyan/25" />
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-brand-accent-cyan/15" />

            <span className="relative z-10 font-mono text-[10px] sm:text-xs lg:text-sm font-bold text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              技
            </span>
          </div>

          <div className="h-1 sm:h-1.5 w-5 sm:w-7 rounded-b-sm bg-brand-surface-navy border border-brand-accent-cyan/50" />

          {/* Tassel */}
          <div
            style={{
              transformOrigin: "top center",
              animation: "tasselWave 4s ease-in-out 0.5s infinite",
            }}
            className="flex flex-col items-center"
          >
            <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-amber-400/70 mt-0.5" />
            <div className="flex gap-[2px]">
              <div className="h-4 sm:h-7 w-px bg-gradient-to-b from-amber-400/60 to-transparent" />
              <div className="h-5 sm:h-8 w-px bg-gradient-to-b from-brand-accent-cyan/60 to-transparent" />
              <div className="h-4 sm:h-7 w-px bg-gradient-to-b from-amber-400/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Vertical Scroll (Desktop & Tablet) */}
        <div className="mt-3 hidden sm:flex flex-col items-center">
          <div className="h-1 w-8 sm:w-10 rounded-full bg-brand-border-hover" />
          <div className="w-7 sm:w-8 border-x border-y border-brand-border-subtle bg-brand-surface-navy/75 py-3 sm:py-4 flex flex-col items-center gap-2 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rotate-45 bg-brand-accent-cyan/60" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-brand-text-secondary/70 [writing-mode:vertical-rl]">
              電脳・陣地
            </span>
            <span className="rounded-sm border border-amber-400/30 bg-amber-500/10 px-0.5 py-0.2 font-mono text-[7px] text-amber-300">
              陣
            </span>
          </div>
          <div className="h-1 w-8 sm:w-10 rounded-full bg-brand-border-hover" />
        </div>
      </div>

      {/* =====================================================================
          5. MAIN CONTENT BLOCK (CENTERED & PROPORTIONALLY DISTRIBUTED)
         ===================================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="relative flex flex-col items-center text-center">
          
          {/* CENTER PARALLAX: RISING SUN & TORII GATE SILHOUETTE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] -z-10 flex items-center justify-center"
          >
            {/* Deep Cyber Rising Sun */}
            <div
              style={{
                transform: `translate3d(${mouseOffset.x * -16}px, ${scrollY * 0.12 + mouseOffset.y * -16}px, 0)`,
                transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="relative flex items-center justify-center will-change-transform"
            >
              <div className="h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] lg:h-[450px] lg:w-[450px] rounded-full bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-2xl" />
              <div className="absolute h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px] rounded-full border border-cyan-400/20 bg-[#02050e]/60 shadow-[0_0_80px_rgba(6,182,212,0.15)]" />
              <div className="absolute h-[230px] w-[230px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px] rounded-full border border-dashed border-cyan-400/20 animate-[spin_60s_linear_infinite]" />
            </div>

            {/* Geometric Torii Gate Silhouette */}
            <div
              style={{
                transform: `translate3d(${mouseOffset.x * 22}px, ${scrollY * 0.06 + mouseOffset.y * 16}px, 0)`,
                transition: "transform 260ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="absolute flex items-center justify-center will-change-transform"
            >
              <svg
                viewBox="0 0 640 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[320px] sm:w-[500px] md:w-[620px] lg:w-[720px] text-brand-accent-cyan opacity-25"
              >
                <path
                  d="M40 60 C190 88, 450 88, 600 60 L584 82 C440 102, 200 102, 56 82 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="rgba(6,182,212,0.06)"
                />
                <rect
                  x="95"
                  y="120"
                  width="450"
                  height="13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="rgba(0,113,227,0.05)"
                />
                <rect
                  x="302"
                  y="85"
                  width="36"
                  height="35"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line x1="160" y1="86" x2="145" y2="320" stroke="currentColor" strokeWidth="2" />
                <line x1="178" y1="86" x2="165" y2="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="480" y1="86" x2="495" y2="320" stroke="currentColor" strokeWidth="2" />
                <line x1="462" y1="86" x2="475" y2="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Institution Pill */}
          <div className="mb-5 sm:mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-[#040816]/80 px-3.5 sm:px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="font-mono text-[9px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] text-slate-300 uppercase">
              PES UNIVERSITY | DEPARTMENT OF CSE
            </span>
          </div>

          {/* Watermark Kanji + Hero Title */}
          <div className="relative">
            <span
              aria-hidden="true"
              style={{
                transform: `translate3d(calc(-50% + ${mouseOffset.x * -14}px), ${mouseOffset.y * -10}px, 0)`,
                transition: "transform 250ms ease-out",
              }}
              className="pointer-events-none absolute -top-5 sm:-top-7 left-1/2 select-none font-mono text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.22em] text-white/[0.04] whitespace-nowrap will-change-transform"
            >
              武士道・六
            </span>

            <h1
              style={{
                transform: `translate3d(${mouseOffset.x * 7}px, ${mouseOffset.y * 5}px, 0)`,
                transition: "transform 220ms ease-out",
              }}
              className={`tracking-in-expand relative font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase will-change-transform`}
            >
              KODIKON{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                6.0
              </span>
            </h1>
          </div>

          {/* Katana Horizon Subtitle */}
          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2.5 sm:gap-4">
            <span className="h-px w-6 sm:w-14 bg-gradient-to-r from-transparent to-cyan-400/70" />
            <span className="h-1.5 w-1.5 rotate-45 border border-cyan-400 bg-[#000514]" />
            <p className="font-mono text-[10px] sm:text-sm lg:text-base uppercase tracking-[0.16em] sm:tracking-[0.2em] text-cyan-300">
              24-Hour National Hackathon
            </p>
            <span className="h-1.5 w-1.5 rotate-45 border border-cyan-400 bg-[#000514]" />
            <span className="h-px w-6 sm:w-14 bg-gradient-to-l from-transparent to-cyan-400/70" />
          </div>

          {/* Description Copy */}
          <p className="mt-4 sm:mt-5 max-w-xl sm:max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed font-light text-slate-300 px-2 sm:px-0">
            Explore four frontier tracks spanning human-machine interfaces, autonomous AI economies, accessible cyber defense, and hardware innovation. Build impactful solutions through intelligent systems, practical engineering, and rapid prototyping.
          </p>

          {/* Action CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="https://hack2skill.com/event/kodikon6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-brand-accent-cyan hover:bg-brand-accent-cyan-dark px-7 sm:px-8 py-3.5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-black transition-colors"
            >
              <span>Register on Hack2Skill</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#tracks"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-cyan-500/40 hover:border-cyan-400/80 bg-[#070d1e]/80 hover:bg-[#0c1530] px-5 sm:px-6 py-3.5 font-mono text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Tracks</span>
            </a>

            <a
              href="#timeline"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-slate-800 hover:border-slate-700 bg-black/50 hover:bg-black/70 px-4 sm:px-5 py-3.5 font-mono text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar
                size={15}
                className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
              />
              <span>Timeline</span>
            </a>
          </div>
        </div>

        {/* ===================================================================
            6. UNIFIED MAKIMONO HORIZONTAL SCROLL BAR
           =================================================================== */}
        <div className="mt-8 sm:mt-12 lg:mt-14 w-full relative px-2 sm:px-0">
          <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-[#060c1d]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-cyan-500/20">
              {EDICT_SCROLL_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group relative flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 transition-colors duration-300 hover:bg-cyan-500/[0.04]"
                  >
                    <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-[#02050e] text-cyan-300 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                      <span className="font-mono text-base sm:text-lg font-bold select-none opacity-90 group-hover:scale-110 transition-transform text-amber-300">
                        {item.kanji}
                      </span>
                      <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-[#060c1d] border border-cyan-500/40 text-cyan-400">
                        <Icon size={8} />
                      </span>
                    </div>

                    <div className="min-w-0 text-left">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-xs sm:text-sm lg:text-base font-bold text-white truncate font-mono">
                        {item.value}
                      </div>
                      <div className="mt-0.5 text-[11px] sm:text-xs font-light text-slate-400 truncate">
                        {item.subtext}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Bottom Blending into Next Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent via-[#02050e]/80 to-[#02050e] -z-10"
      />
    </section>
  );
}