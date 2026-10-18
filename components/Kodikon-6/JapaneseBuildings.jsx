"use client";

import React from "react";
import { Sparkles } from "lucide-react";

/**
 * Japanese Kumiko / Shoji Lattice Pattern
 * SVG Pattern definition for translucent medieval Japanese sliding screen texture
 */
export function KumikoPattern({ id = "kumiko-grid" }) {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.06] text-brand-accent-cyan" aria-hidden="true">
      <defs>
        <pattern
          id={id}
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          {/* Outer diamond / square grid */}
          <path
            d="M 16 0 L 32 16 L 16 32 L 0 16 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          {/* Inner cross lattice */}
          <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          {/* Center pinpoint */}
          <circle cx="16" cy="16" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/**
 * BUILDING 1 ROOF: Castle Watchtower / Tenshu Keep (天守閣)
 * Designed for Track 01 (Computer Vision & Edge IoT)
 * Features:
 * - Left & Right Shachihoko dragon-fish roof finials
 * - Center Onigawara crest with kanji 壱 (One)
 * - Sweeping Irimoya hip-and-gable roof with upturned eave tips
 * - Under-eave timber rafters (Taruki) with cyan light nodes
 * - Flanking swaying Chōchin lanterns with kanji 視 (Vision)
 * - Intermediate Hisashi canopy sheltering the chamber
 */
export function TenshuBuildingRoof({ isHovered = false }) {
  return (
    <div className="relative w-full overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 420 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="tenshu-roof-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="tenshu-glow-grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.25)" />
            <stop offset="100%" stopColor="rgba(0, 5, 20, 0.02)" />
          </linearGradient>
          <filter id="tenshu-cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Roof ambient backlight aura */}
        <ellipse
          cx="210"
          cy="75"
          rx="170"
          ry="55"
          fill="url(#tenshu-glow-grad)"
          className={`transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-40"}`}
        />

        {/* 1. TOP CREST & SHACHIHOKO DRAGON-FISH FINIALS */}
        {/* Left Shachihoko (curling tail inward with dragon crest) */}
        <g className="text-brand-accent-cyan-glow">
          <path
            d="M 125 38 C 112 28, 114 12, 128 8 C 122 18, 128 26, 138 32 Z"
            fill="rgba(6, 182, 212, 0.2)"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="123" cy="14" r="1.5" fill="#fef08a" />
          <path d="M 120 22 Q 124 24 128 22" stroke="currentColor" strokeWidth="0.8" />
        </g>

        {/* Right Shachihoko */}
        <g className="text-brand-accent-cyan-glow">
          <path
            d="M 295 38 C 308 28, 306 12, 292 8 C 298 18, 292 26, 282 32 Z"
            fill="rgba(6, 182, 212, 0.2)"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="297" cy="14" r="1.5" fill="#fef08a" />
          <path d="M 300 22 Q 296 24 292 22" stroke="currentColor" strokeWidth="0.8" />
        </g>

        {/* Ridge beam (Mune) with ornamental tile ribs */}
        <path
          d="M 132 36 L 288 36 L 285 41 L 135 41 Z"
          fill="rgba(0, 113, 227, 0.25)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        {/* Ridge tile notches */}
        {[150, 165, 180, 195, 210, 225, 240, 255, 270].map((x) => (
          <line key={x} x1={x} y1="36" x2={x} y2="41" stroke="#06b6d4" strokeWidth="0.8" />
        ))}

        {/* Center Onigawara / Crest Tablet with Archaic Kanji 壱 (One) */}
        <g transform="translate(196, 16)">
          <rect
            x="0"
            y="0"
            width="28"
            height="22"
            rx="2"
            fill="#000514"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
          />
          <rect x="2" y="2" width="24" height="18" fill="none" stroke="rgba(251,191,36,0.5)" strokeWidth="0.6" />
          <text
            x="14"
            y="15"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]"
          >
            壱
          </text>
        </g>

        {/* 2. MAIN UPPER ROOF TIER (Sweeping Irimoya Curves) */}
        {/* Main upper roof surface */}
        <path
          d="M 134 40 C 95 56, 55 68, 20 78 C 30 73, 55 69, 78 67 C 130 63, 290 63, 342 67 C 365 69, 390 73, 400 78 C 365 68, 325 56, 286 40 Z"
          fill="rgba(6, 182, 212, 0.08)"
          stroke="url(#tenshu-roof-grad)"
          strokeWidth="1.5"
          className={`transition-all duration-300 ${isHovered ? "filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" : ""}`}
        />

        {/* Upturned Eave Corners (Sori sweep tips) */}
        <path d="M 20 78 C 14 74, 12 66, 16 58" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="58" r="2" fill="#22d3ee" className="animate-pulse" />
        <path d="M 400 78 C 406 74, 408 66, 404 58" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
        <circle cx="404" cy="58" r="2" fill="#22d3ee" className="animate-pulse" />

        {/* Under-eave Rafter Ends (Taruki) */}
        <g stroke="#06b6d4" strokeWidth="0.8" opacity="0.65">
          {[50, 75, 100, 125, 150, 175, 200, 220, 245, 270, 295, 320, 345, 370].map((x) => (
            <line key={x} x1={x} y1="68" x2={x + (x < 210 ? -4 : 4)} y2="76" />
          ))}
        </g>

        {/* Triangular Gable Screen (Gable Wall with Kumiko struts) */}
        <g opacity="0.7">
          <path d="M 155 42 L 210 76 L 265 42" stroke="#06b6d4" strokeWidth="0.75" fill="none" />
          <line x1="210" y1="42" x2="210" y2="76" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="182" y1="58" x2="238" y2="58" stroke="#06b6d4" strokeWidth="0.75" />
        </g>

        {/* 3. FLANKING SWAYING CHŌCHIN LANTERNS */}
        {/* Left Lantern (Hanging from eave tip at x=28) */}
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{
            transformOrigin: "28px 74px",
            animation: "swayLeftLantern 5.5s ease-in-out infinite",
          }}
        >
          {/* Cord & Ring */}
          <line x1="28" y1="74" x2="28" y2="92" stroke="#22d3ee" strokeWidth="0.9" />
          <circle cx="28" cy="94" r="1.5" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          {/* Top Cap */}
          <rect x="22" y="96" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          {/* Lantern Oval Body */}
          <ellipse
            cx="28"
            cy="110"
            rx="11"
            ry="14"
            fill="rgba(0, 5, 20, 0.85)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          {/* Inner ambient glow */}
          <circle cx="28" cy="110" r="7" fill="rgba(34, 211, 238, 0.3)" />
          {/* Ribs */}
          <line x1="18" y1="106" x2="38" y2="106" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />
          <line x1="17" y1="110" x2="39" y2="110" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />
          <line x1="18" y1="114" x2="38" y2="114" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />
          {/* Kanji: 視 (Vision) */}
          <text
            x="28"
            y="114"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_3px_rgba(251,191,36,0.9)]"
          >
            視
          </text>
          {/* Bottom Cap */}
          <rect x="22" y="123" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          {/* Tassel */}
          <line x1="28" y1="125" x2="28" y2="136" stroke="#fef08a" strokeWidth="0.9" />
          <line x1="26" y1="126" x2="26" y2="134" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
          <line x1="30" y1="126" x2="30" y2="134" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
        </g>

        {/* Right Lantern (Hanging from eave tip at x=392) */}
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{
            transformOrigin: "392px 74px",
            animation: "swayRightLantern 6s ease-in-out infinite",
          }}
        >
          <line x1="392" y1="74" x2="392" y2="92" stroke="#22d3ee" strokeWidth="0.9" />
          <circle cx="392" cy="94" r="1.5" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          <rect x="386" y="96" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <ellipse
            cx="392"
            cy="110"
            rx="11"
            ry="14"
            fill="rgba(0, 5, 20, 0.85)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          <circle cx="392" cy="110" r="7" fill="rgba(34, 211, 238, 0.3)" />
          <line x1="382" y1="106" x2="402" y2="106" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />
          <line x1="381" y1="110" x2="403" y2="110" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />
          <line x1="382" y1="114" x2="402" y2="114" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />
          {/* Kanji: 眼 (Eye) */}
          <text
            x="392"
            y="114"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_3px_rgba(251,191,36,0.9)]"
          >
            眼
          </text>
          <rect x="386" y="123" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <line x1="392" y1="125" x2="392" y2="136" stroke="#fef08a" strokeWidth="0.9" />
          <line x1="390" y1="126" x2="390" y2="134" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
          <line x1="394" y1="126" x2="394" y2="134" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
        </g>

        {/* 4. LOWER HISASHI CANOPY (Wide lower roof sheltering the card body) */}
        {/* Main canopy beam */}
        <path
          d="M 12 128 C 48 120, 130 114, 210 114 C 290 114, 372 120, 408 128 L 400 134 C 365 127, 288 122, 210 122 C 132 122, 55 127, 20 134 Z"
          fill="rgba(0, 113, 227, 0.3)"
          stroke="#22d3ee"
          strokeWidth="1.2"
        />
        {/* Canopy upturned wingtips */}
        <path d="M 12 128 C 6 125, 4 118, 8 112" stroke="#06b6d4" strokeWidth="1.2" fill="none" />
        <path d="M 408 128 C 414 125, 416 118, 412 112" stroke="#06b6d4" strokeWidth="1.2" fill="none" />

        {/* Timber bracket corbels (Tokyō) holding the canopy */}
        <g stroke="#06b6d4" strokeWidth="0.9">
          {[70, 140, 210, 280, 350].map((x) => (
            <g key={x}>
              <line x1={x} y1="122" x2={x} y2="148" />
              <line x1={x - 8} y1="130" x2={x + 8} y2="130" />
              <line x1={x - 4} y1="138" x2={x + 4} y2="138" />
            </g>
          ))}
        </g>

        {/* Architrave cross-border at junction with card */}
        <line x1="30" y1="152" x2="390" y2="152" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="45" y1="155" x2="375" y2="155" stroke="rgba(34,211,238,0.3)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * BUILDING 2 ROOF: Gojū Pagoda / Sacred Spire (五重塔)
 * Designed for Track 02 (Assistive GenAI Tools)
 * Features:
 * - Soaring 9-Ring Sōrin Bronze Spire with radiant Lotus Gem (Hōju)
 * - Cloud-flame Suien and sacred dew basins (Roban)
 * - Cascading tiered pagoda roofs with wind chimes (Fūrin)
 * - Center tablet with archaic kanji 弐 (Two)
 * - Swaying Chōchin lanterns with kanji 智 (Wisdom/Intellect)
 */
export function PagodaBuildingRoof({ isHovered = false }) {
  return (
    <div className="relative w-full overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 420 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="pagoda-spire-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="pagoda-roof-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="pagoda-gem-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ambient Spire & Roof Aura */}
        <ellipse
          cx="210"
          cy="95"
          rx="180"
          ry="65"
          fill="rgba(6, 182, 212, 0.08)"
          className={`transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-40"}`}
        />

        {/* 1. SŌRIN SACRED SPIRE (Pinnacle of Medieval Japanese Pagodas) */}
        {/* Central Spire Mast (Shinbashira extension) */}
        <line x1="210" y1="8" x2="210" y2="82" stroke="url(#pagoda-spire-grad)" strokeWidth="1.8" />

        {/* Sacred Lotus Jewel (Hōju / Flaming Pearl) */}
        <circle cx="210" cy="10" r="10" fill="url(#pagoda-gem-glow)" />
        <circle cx="210" cy="10" r="4.5" fill="#fef08a" className="filter drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
        <path d="M 210 2 C 212 5, 214 7, 210 10 C 206 7, 208 5, 210 2 Z" fill="#22d3ee" />

        {/* Suien Flame Halo (Winged decorative bronze plates) */}
        <path
          d="M 210 15 C 203 18, 200 23, 203 27 C 207 23, 208 20, 210 19 C 212 20, 213 23, 217 27 C 220 23, 217 18, 210 15 Z"
          fill="rgba(34, 211, 238, 0.3)"
          stroke="#22d3ee"
          strokeWidth="0.8"
        />

        {/* 9 Sacred Bronze Rings (Kururin / Nine Heavens) */}
        {[29, 34, 39, 44, 49, 54, 59, 64, 69].map((y, idx) => {
          const rx = 8 + idx * 0.9;
          return (
            <g key={y}>
              <ellipse
                cx="210"
                cy={y}
                rx={rx}
                ry="2.4"
                fill="#000514"
                stroke="#22d3ee"
                strokeWidth="1.1"
                className="filter drop-shadow-[0_0_3px_rgba(34,211,238,0.4)]"
              />
              <circle cx={210 - rx} cy={y} r="1" fill="#fef08a" />
              <circle cx={210 + rx} cy={y} r="1" fill="#fef08a" />
            </g>
          );
        })}

        {/* Fukubachi (Inverted Bowl Base) & Roban (Square Plinth) */}
        <path d="M 198 75 C 202 72, 218 72, 222 75 Z" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
        <rect x="194" y="76" width="32" height="6" rx="1" fill="#000514" stroke="#06b6d4" strokeWidth="1" />

        {/* Center Archaic Tablet: 弐 (Two) */}
        <g transform="translate(196, 68)">
          <rect
            x="0"
            y="0"
            width="28"
            height="18"
            rx="2"
            fill="#000514"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          />
          <text
            x="14"
            y="13"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]"
          >
            弐
          </text>
        </g>

        {/* 2. UPPER PAGODA ROOF TIER */}
        <path
          d="M 180 84 C 145 94, 105 102, 60 108 C 72 105, 95 102, 120 100 C 160 98, 260 98, 300 100 C 325 102, 348 105, 360 108 C 315 102, 275 94, 240 84 Z"
          fill="rgba(6, 182, 212, 0.12)"
          stroke="url(#pagoda-roof-grad)"
          strokeWidth="1.4"
          className={`transition-all duration-300 ${isHovered ? "filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" : ""}`}
        />

        {/* Upturned Eave Finials & Wind Bells (Fūrin) on Upper Roof */}
        <path d="M 60 108 C 54 105, 50 98, 54 92" stroke="#22d3ee" strokeWidth="1.4" fill="none" />
        <circle cx="54" cy="92" r="1.5" fill="#fef08a" />
        {/* Wind bell string */}
        <line x1="60" y1="108" x2="60" y2="120" stroke="#fef08a" strokeWidth="0.8" strokeDasharray="2 2" />
        <rect x="58" y="120" width="4" height="6" fill="rgba(34,211,238,0.7)" stroke="#22d3ee" strokeWidth="0.5" />

        <path d="M 360 108 C 366 105, 370 98, 366 92" stroke="#22d3ee" strokeWidth="1.4" fill="none" />
        <circle cx="366" cy="92" r="1.5" fill="#fef08a" />
        <line x1="360" y1="108" x2="360" y2="120" stroke="#fef08a" strokeWidth="0.8" strokeDasharray="2 2" />
        <rect x="358" y="120" width="4" height="6" fill="rgba(34,211,238,0.7)" stroke="#22d3ee" strokeWidth="0.5" />

        {/* Bracket System (Tokyō) between tiers */}
        <g stroke="#06b6d4" strokeWidth="0.8">
          {[120, 160, 210, 260, 300].map((x) => (
            <line key={x} x1={x} y1="102" x2={x} y2="126" />
          ))}
          <line x1="100" y1="116" x2="320" y2="116" stroke="rgba(34,211,238,0.4)" strokeWidth="0.75" />
        </g>

        {/* 3. FLANKING SWAYING CHŌCHIN LANTERNS */}
        {/* Left Lantern: 智 (Wisdom / Mind) */}
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{
            transformOrigin: "32px 108px",
            animation: "swayLeftLantern 5.8s ease-in-out infinite",
          }}
        >
          <line x1="32" y1="108" x2="32" y2="124" stroke="#22d3ee" strokeWidth="0.9" />
          <circle cx="32" cy="126" r="1.5" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          <rect x="26" y="128" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <ellipse
            cx="32"
            cy="142"
            rx="11"
            ry="14"
            fill="rgba(0, 5, 20, 0.85)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          <circle cx="32" cy="142" r="7" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="32"
            y="146"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_3px_rgba(251,191,36,0.9)]"
          >
            智
          </text>
          <rect x="26" y="155" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <line x1="32" y1="157" x2="32" y2="168" stroke="#fef08a" strokeWidth="0.9" />
          <line x1="30" y1="158" x2="30" y2="166" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
          <line x1="34" y1="158" x2="34" y2="166" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
        </g>

        {/* Right Lantern: 創 (Creation / Empower) */}
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{
            transformOrigin: "388px 108px",
            animation: "swayRightLantern 6.4s ease-in-out infinite",
          }}
        >
          <line x1="388" y1="108" x2="388" y2="124" stroke="#22d3ee" strokeWidth="0.9" />
          <circle cx="388" cy="126" r="1.5" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          <rect x="382" y="128" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <ellipse
            cx="388"
            cy="142"
            rx="11"
            ry="14"
            fill="rgba(0, 5, 20, 0.85)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          <circle cx="388" cy="142" r="7" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="388"
            y="146"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_3px_rgba(251,191,36,0.9)]"
          >
            創
          </text>
          <rect x="382" y="155" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <line x1="388" y1="157" x2="388" y2="168" stroke="#fef08a" strokeWidth="0.9" />
          <line x1="386" y1="158" x2="386" y2="166" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
          <line x1="390" y1="158" x2="390" y2="166" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
        </g>

        {/* 4. LOWER GRAND CANOPY (Wide pagoda base eave sheltering chamber) */}
        <path
          d="M 14 152 C 50 144, 130 138, 210 138 C 290 138, 370 144, 406 152 L 398 158 C 362 151, 288 146, 210 146 C 132 146, 58 151, 22 158 Z"
          fill="rgba(0, 113, 227, 0.3)"
          stroke="#22d3ee"
          strokeWidth="1.3"
        />
        {/* Upturned tips */}
        <path d="M 14 152 C 8 148, 6 142, 10 136" stroke="#06b6d4" strokeWidth="1.3" fill="none" />
        <path d="M 406 152 C 412 148, 414 142, 410 136" stroke="#06b6d4" strokeWidth="1.3" fill="none" />

        {/* Under-eave rafters */}
        <g stroke="#06b6d4" strokeWidth="0.8" opacity="0.65">
          {[50, 80, 110, 140, 170, 200, 220, 250, 280, 310, 340, 370].map((x) => (
            <line key={x} x1={x} y1="148" x2={x + (x < 210 ? -3 : 3)} y2="156" />
          ))}
        </g>

        {/* Junction line */}
        <line x1="30" y1="175" x2="390" y2="175" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="45" y1="178" x2="375" y2="178" stroke="rgba(34,211,238,0.3)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * BUILDING 3 ROOF: Shiro Grand Sanctuary / Torii Fortress (本殿・結界)
 * Designed for Track 03 (Privacy-Preserving Distributed Systems)
 * Features:
 * - Sweeping Grand Kasagi Torii Lintel with upturned horns
 * - Karahafu cusped wave-gable in center (Palatial Kyoto style)
 * - Nuki crossbeam with circuit energy conduits
 * - Center tablet with archaic kanji 参 (Three)
 * - Swaying Chōchin lanterns with kanji 密 (Secret / Privacy)
 * - Protective barrier rafters and fortified eave brackets
 */
export function ShiroPavilionRoof({ isHovered = false }) {
  return (
    <div className="relative w-full overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 420 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="shiro-roof-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="torii-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,113,227,0.4)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.6)" />
            <stop offset="100%" stopColor="rgba(0,113,227,0.4)" />
          </linearGradient>
        </defs>

        {/* Ambient Backlight */}
        <ellipse
          cx="210"
          cy="80"
          rx="175"
          ry="55"
          fill="rgba(6, 182, 212, 0.08)"
          className={`transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-40"}`}
        />

        {/* 1. KASAGI TOP CURVED LINTEL (Grand Torii Crest Beam) */}
        <path
          d="M 16 32 C 100 44, 320 44, 404 32 L 396 42 C 315 52, 105 52, 24 42 Z"
          fill="url(#torii-beam-grad)"
          stroke="#22d3ee"
          strokeWidth="1.4"
          className={`transition-all duration-300 ${isHovered ? "filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" : ""}`}
        />
        {/* Kasagi upturned horns */}
        <path d="M 16 32 C 8 28, 4 20, 8 14" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="14" r="2" fill="#22d3ee" className="animate-pulse" />
        <path d="M 404 32 C 412 28, 416 20, 412 14" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
        <circle cx="412" cy="14" r="2" fill="#22d3ee" className="animate-pulse" />

        {/* Nuki Secondary Crossbeam */}
        <rect
          x="65"
          y="56"
          width="290"
          height="8"
          rx="1"
          fill="#000514"
          stroke="#06b6d4"
          strokeWidth="1.1"
        />
        {/* Circuit conduit dots */}
        {[85, 125, 165, 255, 295, 335].map((x) => (
          <circle key={x} cx={x} cy="60" r="1.5" fill="#22d3ee" />
        ))}

        {/* Center Tablet (Gakuzuka) with Archaic Kanji 参 (Three) */}
        <g transform="translate(196, 38)">
          <rect
            x="0"
            y="0"
            width="28"
            height="26"
            rx="2"
            fill="#000514"
            stroke="#22d3ee"
            strokeWidth="1.3"
            className="filter drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
          />
          <rect x="2" y="2" width="24" height="22" fill="none" stroke="rgba(251,191,36,0.6)" strokeWidth="0.6" />
          <text
            x="14"
            y="17"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.8)]"
          >
            参
          </text>
        </g>

        {/* 2. KARAHAFU CUSPED GABLE (Wavy Arch in Center) */}
        <path
          d="M 140 76 C 170 60, 185 54, 210 66 C 235 54, 250 60, 280 76"
          fill="rgba(6, 182, 212, 0.15)"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <circle cx="210" cy="66" r="2" fill="#fef08a" />

        {/* 3. GRAND SANCTUARY ROOF (Sweeping Palatial Eaves) */}
        <path
          d="M 120 74 C 85 86, 50 96, 18 104 C 28 99, 50 95, 75 93 C 120 89, 300 89, 345 93 C 370 95, 392 99, 402 104 C 370 96, 335 86, 300 74 Z"
          fill="rgba(6, 182, 212, 0.1)"
          stroke="url(#shiro-roof-grad)"
          strokeWidth="1.5"
          className={`transition-all duration-300 ${isHovered ? "filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" : ""}`}
        />

        {/* Eave Tips */}
        <path d="M 18 104 C 12 100, 10 92, 14 84" stroke="#22d3ee" strokeWidth="1.4" fill="none" />
        <path d="M 402 104 C 408 100, 410 92, 406 84" stroke="#22d3ee" strokeWidth="1.4" fill="none" />

        {/* Rafter Lines */}
        <g stroke="#06b6d4" strokeWidth="0.8" opacity="0.65">
          {[40, 70, 100, 130, 290, 320, 350, 380].map((x) => (
            <line key={x} x1={x} y1="94" x2={x + (x < 210 ? -4 : 4)} y2="102" />
          ))}
        </g>

        {/* 4. FLANKING SWAYING CHŌCHIN LANTERNS */}
        {/* Left Lantern: 密 (Secret / Privacy) */}
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{
            transformOrigin: "26px 102px",
            animation: "swayLeftLantern 5.4s ease-in-out infinite",
          }}
        >
          <line x1="26" y1="102" x2="26" y2="118" stroke="#22d3ee" strokeWidth="0.9" />
          <circle cx="26" cy="120" r="1.5" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          <rect x="20" y="122" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <ellipse
            cx="26"
            cy="136"
            rx="11"
            ry="14"
            fill="rgba(0, 5, 20, 0.85)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          <circle cx="26" cy="136" r="7" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="26"
            y="140"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_3px_rgba(251,191,36,0.9)]"
          >
            密
          </text>
          <rect x="20" y="149" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <line x1="26" y1="151" x2="26" y2="162" stroke="#fef08a" strokeWidth="0.9" />
          <line x1="24" y1="152" x2="24" y2="160" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
          <line x1="28" y1="152" x2="28" y2="160" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
        </g>

        {/* Right Lantern: 網 (Network / Distributed) */}
        <g
          className="transition-transform duration-700 ease-in-out"
          style={{
            transformOrigin: "394px 102px",
            animation: "swayRightLantern 6.2s ease-in-out infinite",
          }}
        >
          <line x1="394" y1="102" x2="394" y2="118" stroke="#22d3ee" strokeWidth="0.9" />
          <circle cx="394" cy="120" r="1.5" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          <rect x="388" y="122" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <ellipse
            cx="394"
            cy="136"
            rx="11"
            ry="14"
            fill="rgba(0, 5, 20, 0.85)"
            stroke="#22d3ee"
            strokeWidth="1.2"
            className="filter drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
          />
          <circle cx="394" cy="136" r="7" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="394"
            y="140"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_3px_rgba(251,191,36,0.9)]"
          >
            網
          </text>
          <rect x="388" y="149" width="12" height="2" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
          <line x1="394" y1="151" x2="394" y2="162" stroke="#fef08a" strokeWidth="0.9" />
          <line x1="392" y1="152" x2="392" y2="160" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
          <line x1="396" y1="152" x2="396" y2="160" stroke="rgba(34,211,238,0.7)" strokeWidth="0.6" />
        </g>

        {/* 5. LOWER VERANDA CANOPY (Sheltering the card body) */}
        <path
          d="M 12 134 C 50 126, 130 120, 210 120 C 290 120, 370 126, 408 134 L 400 140 C 365 133, 288 128, 210 128 C 132 128, 55 133, 20 140 Z"
          fill="rgba(0, 113, 227, 0.3)"
          stroke="#22d3ee"
          strokeWidth="1.3"
        />

        {/* Framing Gateway Pillars (Torii Hashira) descending on sides */}
        <line x1="45" y1="64" x2="45" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6 3" />
        <line x1="375" y1="64" x2="375" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6 3" />

        {/* Junction line */}
        <line x1="30" y1="158" x2="390" y2="158" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="45" y1="161" x2="375" y2="161" stroke="rgba(34,211,238,0.3)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * BUILDING BASE: Engawa Veranda & Stone Foundation (Ishigaki / 縁側・石垣)
 * Common base component for all 3 buildings featuring:
 * - Timber deck railing (Engawa) with decorative balusters
 * - Foundation bracket posts (Kake-zukuri)
 * - Geometric stone wall foundation lines (Ishigaki) with glowing light-blue mortar
 */
export function BuildingEngawaBase({ isHovered = false }) {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none mt-auto">
      <svg
        viewBox="0 0 400 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Timber Deck Platform (Engawa Beam) */}
        <line x1="10" y1="10" x2="390" y2="10" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.9" />
        <rect x="15" y="12" width="370" height="4" fill="rgba(6, 182, 212, 0.15)" stroke="rgba(34,211,238,0.4)" strokeWidth="0.6" />

        {/* Veranda Balustrade Posts (Koranka / Railing slats) */}
        <g stroke="#06b6d4" strokeWidth="0.8" opacity="0.6">
          {[30, 60, 90, 120, 150, 180, 220, 250, 280, 310, 340, 370].map((x) => (
            <line key={x} x1={x} y1="2" x2={x} y2="10" />
          ))}
          <line x1="20" y1="2" x2="380" y2="2" stroke="#22d3ee" strokeWidth="0.8" />
        </g>

        {/* Foundation Timber Posts */}
        <g stroke="#06b6d4" strokeWidth="1.2" opacity="0.7">
          {[45, 110, 175, 225, 290, 355].map((x) => (
            <g key={x}>
              <line x1={x} y1="16" x2={x} y2="30" />
              {/* Plinth stone cap */}
              <rect x={x - 4} y="28" width="8" height="3" fill="#000514" stroke="#22d3ee" strokeWidth="0.8" />
            </g>
          ))}
        </g>

        {/* Stone Castle Foundation (Ishigaki - Interlocking polygonal masonry with cyan neon glow) */}
        <g
          stroke={isHovered ? "#22d3ee" : "#06b6d4"}
          strokeWidth="0.7"
          opacity={isHovered ? "0.85" : "0.45"}
          className="transition-all duration-300"
        >
          {/* Row 1 */}
          <line x1="20" y1="35" x2="380" y2="35" />
          <line x1="75" y1="31" x2="75" y2="35" />
          <line x1="145" y1="31" x2="145" y2="35" />
          <line x1="210" y1="31" x2="210" y2="35" />
          <line x1="285" y1="31" x2="285" y2="35" />
          <line x1="345" y1="31" x2="345" y2="35" />

          {/* Row 2 (Staggered) */}
          <line x1="10" y1="46" x2="390" y2="46" />
          <line x1="40" y1="35" x2="40" y2="46" />
          <line x1="110" y1="35" x2="110" y2="46" />
          <line x1="180" y1="35" x2="180" y2="46" />
          <line x1="250" y1="35" x2="250" y2="46" />
          <line x1="320" y1="35" x2="320" y2="46" />
          <line x1="370" y1="35" x2="370" y2="46" />

          {/* Base bottom grounding line */}
          <line x1="0" y1="54" x2="400" y2="54" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

/**
 * FULL SANCTUARY MONUMENT: Complete Architectural Elevation (for Modal Left Panel)
 * Renders a full multi-tier glowing vector elevation of the medieval Japanese sanctuary
 * with atmospheric cyber-moon, floating embers, and intricate architectural detail.
 */
export function FullSanctuaryMonument({ track }) {
  const buildingType = track?.code === "TRACK-01"
    ? "tenshu"
    : track?.code === "TRACK-02"
    ? "pagoda"
    : "shinden";

  const kanjiSeal = track?.code === "TRACK-01" ? "視" : track?.code === "TRACK-02" ? "智" : "密";
  const kanjiNum = track?.code === "TRACK-01" ? "壱" : track?.code === "TRACK-02" ? "弐" : "参";
  const buildingLabel = track?.code === "TRACK-01"
    ? "TENSHU KEEP // 監視天守閣"
    : track?.code === "TRACK-02"
    ? "GOJŪ SANCTUARY // 五重智慧塔"
    : "KEKKAI PAVILION // 連邦本殿結界";

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-brand-surface-navy p-6 select-none">
      {/* 1. Ambient Background Glow & Rising Cyber Moon */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-72 w-72 rounded-full bg-gradient-to-b from-brand-accent-cyan/15 via-brand-accent-blue/10 to-transparent blur-3xl" />
        <div className="absolute h-56 w-56 rounded-full border border-brand-accent-cyan/15 bg-brand-surface-navy/40 shadow-[0_0_80px_rgba(6,182,212,0.15)]" />
        <div className="absolute h-64 w-64 rounded-full border border-dashed border-brand-accent-cyan/15 animate-[spin_80s_linear_infinite]" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 2. Top Blueprint Watermark & Kanji Header */}
      <div className="relative z-10 flex w-full items-center justify-between border-b border-brand-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-amber-400/50 bg-amber-500/10 font-mono text-xs font-bold text-amber-300">
            {kanjiNum}
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-accent-cyan-glow">
              {track.code} · ARCHITECTURAL BLUEPRINT
            </p>
            <p className="font-mono text-[10px] text-brand-text-secondary">
              {buildingLabel}
            </p>
          </div>
        </div>

        <span className="rounded-full border border-brand-accent-cyan/30 bg-brand-accent-cyan/10 px-2.5 py-0.5 font-mono text-[9px] text-brand-accent-cyan-glow">
          LIGHT-BLUE VECTOR
        </span>
      </div>

      {/* 3. Center Architectural Elevation Vector */}
      <div className="relative my-auto flex w-full max-w-[340px] flex-col items-center justify-center py-4">
        {buildingType === "tenshu" && (
          <div className="w-full flex flex-col items-center">
            <TenshuBuildingRoof isHovered={true} />
            {/* Middle Floor Balcony Elevation */}
            <div className="w-[82%] -mt-1 border-x border-brand-accent-cyan/40 bg-brand-surface-navy/80 p-3 text-center relative backdrop-blur-sm">
              <KumikoPattern id="modal-kumiko-tenshu" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-mono text-xs text-amber-200 border border-amber-400/40 rounded px-2 py-0.5 bg-amber-500/10 mb-1">
                  第壱殿 · 監視・外縁視覚
                </span>
                <p className="text-xs font-bold text-white tracking-wide">
                  {track.title}
                </p>
              </div>
            </div>
            <BuildingEngawaBase isHovered={true} />
          </div>
        )}

        {buildingType === "pagoda" && (
          <div className="w-full flex flex-col items-center">
            <PagodaBuildingRoof isHovered={true} />
            <div className="w-[80%] -mt-1 border-x border-brand-accent-cyan/40 bg-brand-surface-navy/80 p-3 text-center relative backdrop-blur-sm">
              <KumikoPattern id="modal-kumiko-pagoda" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-mono text-xs text-amber-200 border border-amber-400/40 rounded px-2 py-0.5 bg-amber-500/10 mb-1">
                  第弐殿 · 支援知能・神経多様性
                </span>
                <p className="text-xs font-bold text-white tracking-wide">
                  {track.title}
                </p>
              </div>
            </div>
            <BuildingEngawaBase isHovered={true} />
          </div>
        )}

        {buildingType === "shinden" && (
          <div className="w-full flex flex-col items-center">
            <ShiroPavilionRoof isHovered={true} />
            <div className="w-[82%] -mt-1 border-x border-brand-accent-cyan/40 bg-brand-surface-navy/80 p-3 text-center relative backdrop-blur-sm">
              <KumikoPattern id="modal-kumiko-shinden" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="font-mono text-xs text-amber-200 border border-amber-400/40 rounded px-2 py-0.5 bg-amber-500/10 mb-1">
                  第参殿 · 分散秘匿・連邦結界
                </span>
                <p className="text-xs font-bold text-white tracking-wide">
                  {track.title}
                </p>
              </div>
            </div>
            <BuildingEngawaBase isHovered={true} />
          </div>
        )}
      </div>

      {/* 4. Bottom Blueprint Footer Specs */}
      <div className="relative z-10 w-full rounded border border-brand-border-subtle bg-brand-surface-navy/90 p-3 backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-2 text-center font-mono">
          <div className="border-r border-brand-border-subtle pr-2">
            <p className="text-[8px] uppercase tracking-wider text-brand-text-muted">Domain</p>
            <p className="text-[10px] font-bold text-brand-accent-cyan-glow">{track.number} // 03</p>
          </div>
          <div className="border-r border-brand-border-subtle pr-2">
            <p className="text-[8px] uppercase tracking-wider text-brand-text-muted">Kanji Seal</p>
            <p className="text-[10px] font-bold text-amber-300">{kanjiSeal} · {kanjiNum}</p>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-wider text-brand-text-muted">Architecture</p>
            <p className="text-[10px] font-bold text-brand-accent-cyan-glow">Glass / SVG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * SEAMLESS POPUP ROOF CROWNS
 * Engineered to sit flush directly atop the modal card without pushing it down.
 * Bottom horizontal mounting beam spans x=80 to x=920 at y=166 (matching card width),
 * while the eaves sweep wide to the sides with swaying lanterns framing the modal card.
 *
 * Each crown faithfully matches the architectural styling, finials, tablets,
 * and motifs of its corresponding track card:
 * - Tenshu: Castle Keep with Shachihoko dragon finials, Onigawara 壱, Irimoya gable, 視 / 眼 lanterns.
 * - Pagoda: Gojū Pagoda with 9-ring Sōrin spire, Lotus Jewel, 弐 tablet, Fūrin wind chimes, 智 / 創 lanterns.
 * - Shiro: Sanctuary Torii with sweeping Kasagi horns, Karahafu wave arch, 参 tablet, 密 / 網 lanterns.
 */

/**
 * TRACK 01 POPUP CROWN: Tenshu Castle Keep Watchtower Gateway
 * Faithfully mirrors TenshuBuildingRoof from Track 01 card:
 * - Shachihoko dragon-fish finials curling inward with yellow eyes
 * - Center Onigawara crest tablet with archaic kanji 壱 (One)
 * - Sweeping Irimoya hip-and-gable upper roof with upturned eave tips
 * - Under-eave timber rafters (Taruki) and Kumiko gable wall
 * - Flanking swaying Chōchin lanterns: 視 (Vision) and 眼 (Eye)
 * - Wide Hisashi lower canopy with bracket corbels (Tokyō)
 * - Bottom beam at y=166 flush with card top edge
 */
export function TenshuPopupCrown() {
  return (
    <div className="relative w-full overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 1000 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="tenshu-crown-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Ambient Backlight Glow */}
        <ellipse
          cx="500"
          cy="85"
          rx="460"
          ry="55"
          fill="rgba(6, 182, 212, 0.12)"
          className="filter drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        />

        {/* 1. TOP CREST & SHACHIHOKO DRAGON-FISH FINIALS */}
        {/* Left Shachihoko (curling tail inward at x=375) */}
        <g className="text-brand-accent-cyan-glow">
          <path
            d="M 370 42 C 352 26, 356 8, 375 4 C 368 16, 374 26, 390 34 Z"
            fill="rgba(6, 182, 212, 0.25)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          />
          <circle cx="368" cy="12" r="2" fill="#fef08a" />
          <path d="M 364 22 Q 370 25 376 22" stroke="#22d3ee" strokeWidth="1" />
        </g>

        {/* Right Shachihoko (curling tail inward at x=625) */}
        <g className="text-brand-accent-cyan-glow">
          <path
            d="M 630 42 C 648 26, 644 8, 625 4 C 632 16, 626 26, 610 34 Z"
            fill="rgba(6, 182, 212, 0.25)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          />
          <circle cx="632" cy="12" r="2" fill="#fef08a" />
          <path d="M 636 22 Q 630 25 624 22" stroke="#22d3ee" strokeWidth="1" />
        </g>

        {/* Ridge Beam (Mune) with Ornamental Tile Ribs */}
        <path
          d="M 380 40 L 620 40 L 615 47 L 385 47 Z"
          fill="rgba(0, 113, 227, 0.35)"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        {[395, 410, 425, 440, 455, 545, 560, 575, 590, 605].map((x) => (
          <line key={x} x1={x} y1="40" x2={x} y2="47" stroke="#06b6d4" strokeWidth="1.1" />
        ))}

        {/* Center Onigawara / Crest Tablet with Archaic Kanji 壱 (One) */}
        <g transform="translate(472, 16)">
          <rect
            x="0"
            y="0"
            width="56"
            height="42"
            rx="3"
            fill="#000514"
            stroke="#22d3ee"
            strokeWidth="1.8"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <rect
            x="3"
            y="3"
            width="50"
            height="36"
            rx="1.5"
            fill="none"
            stroke="rgba(251, 191, 36, 0.7)"
            strokeWidth="1"
          />
          <text
            x="28"
            y="28"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="24"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]"
          >
            壱
          </text>
        </g>

        {/* 2. MAIN UPPER IRIMOYA ROOF TIER */}
        <path
          d="M 380 46 C 260 66, 140 80, 52 92 C 70 86, 120 81, 180 78 C 300 73, 700 73, 820 78 C 880 81, 930 86, 948 92 C 860 80, 740 66, 620 46 Z"
          fill="rgba(6, 182, 212, 0.12)"
          stroke="url(#tenshu-crown-grad)"
          strokeWidth="1.8"
          className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        />

        {/* Upturned Eave Corners (Sori sweep tips) */}
        <path d="M 52 92 C 40 86, 36 74, 44 62" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <circle cx="44" cy="62" r="2.5" fill="#22d3ee" />
        <path d="M 948 92 C 960 86, 964 74, 956 62" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <circle cx="956" cy="62" r="2.5" fill="#22d3ee" />

        {/* Under-eave Rafter Ends (Taruki) */}
        <g stroke="#06b6d4" strokeWidth="1" opacity="0.75">
          {[120, 170, 220, 270, 320, 370, 630, 680, 730, 780, 830, 880].map((x) => (
            <line key={x} x1={x} y1="78" x2={x + (x < 500 ? -8 : 8)} y2="90" />
          ))}
        </g>

        {/* Triangular Gable Screen (Gable Wall with Kumiko struts) */}
        <g opacity="0.8">
          <path d="M 420 48 L 500 86 L 580 48" stroke="#06b6d4" strokeWidth="1.2" fill="none" />
          <line x1="500" y1="48" x2="500" y2="86" stroke="#22d3ee" strokeWidth="1.4" strokeDasharray="4 2" />
          <line x1="455" y1="67" x2="545" y2="67" stroke="#06b6d4" strokeWidth="1" />
        </g>

        {/* 3. FLANKING SWAYING CHŌCHIN LANTERNS */}
        {/* Left Lantern: 視 (Vision) */}
        <g
          style={{
            transformOrigin: "48px 84px",
            animation: "swayLeftLantern 5.5s ease-in-out infinite",
          }}
        >
          <line x1="48" y1="84" x2="48" y2="104" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="48" cy="106" r="2" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <rect x="36" y="108" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <path
            d="M 37 111 L 30 128 L 37 146 L 59 146 L 66 128 L 59 111 Z"
            fill="rgba(0, 5, 20, 0.9)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <circle cx="48" cy="128" r="9" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="48"
            y="134"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]"
          >
            視
          </text>
          <rect x="36" y="146" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <line x1="48" y1="149" x2="48" y2="170" stroke="#fef08a" strokeWidth="1.3" />
          <line x1="45" y1="151" x2="45" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
          <line x1="51" y1="151" x2="51" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
        </g>

        {/* Right Lantern: 眼 (Eye) */}
        <g
          style={{
            transformOrigin: "952px 84px",
            animation: "swayRightLantern 6s ease-in-out infinite",
          }}
        >
          <line x1="952" y1="84" x2="952" y2="104" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="952" cy="106" r="2" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <rect x="940" y="108" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <path
            d="M 941 111 L 934 128 L 941 146 L 963 146 L 970 128 L 963 111 Z"
            fill="rgba(0, 5, 20, 0.9)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <circle cx="952" cy="128" r="9" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="952"
            y="134"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]"
          >
            眼
          </text>
          <rect x="940" y="146" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <line x1="952" y1="149" x2="952" y2="170" stroke="#fef08a" strokeWidth="1.3" />
          <line x1="949" y1="151" x2="949" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
          <line x1="955" y1="151" x2="955" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
        </g>

        {/* 4. LOWER HISASHI CANOPY (Wide lower roof sheltering the card) */}
        <path
          d="M 32 142 C 120 132, 300 126, 500 126 C 700 126, 880 132, 968 142 L 956 150 C 870 141, 690 135, 500 135 C 310 135, 130 141, 44 150 Z"
          fill="rgba(0, 113, 227, 0.35)"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        {/* Canopy upturned wingtips */}
        <path d="M 32 142 C 22 138, 18 128, 24 118" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
        <path d="M 968 142 C 978 138, 982 128, 976 118" stroke="#06b6d4" strokeWidth="1.5" fill="none" />

        {/* Timber bracket corbels (Tokyō) holding the canopy */}
        <g stroke="#06b6d4" strokeWidth="1.2">
          {[140, 260, 380, 500, 620, 740, 860].map((x) => (
            <g key={x}>
              <line x1={x} y1="135" x2={x} y2="162" />
              <line x1={x - 12} y1="144" x2={x + 12} y2="144" />
              <line x1={x - 6} y1="152" x2={x + 6} y2="152" />
            </g>
          ))}
        </g>

        {/* 5. CORNER ANCHORS (Aligning with card corners at x=80 and x=920) */}
        <g>
          <rect x="74" y="146" width="12" height="20" fill="#000514" stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M 80 166 L 50 142 L 56 138 L 86 160 Z" fill="rgba(6, 182, 212, 0.3)" stroke="#22d3ee" strokeWidth="1.2" />
        </g>
        <g>
          <rect x="914" y="146" width="12" height="20" fill="#000514" stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M 920 166 L 950 142 L 944 138 L 914 160 Z" fill="rgba(6, 182, 212, 0.3)" stroke="#22d3ee" strokeWidth="1.2" />
        </g>

        {/* 6. BOTTOM HORIZONTAL MOUNTING BEAM (Sits flush on top of card) */}
        <line x1="80" y1="166" x2="920" y2="166" stroke="#22d3ee" strokeWidth="2.5" />
        <line x1="80" y1="161" x2="920" y2="161" stroke="#06b6d4" strokeWidth="1.2" />
        <rect x="80" y="161" width="840" height="5" fill="rgba(6, 182, 212, 0.15)" />
      </svg>
    </div>
  );
}

/**
 * TRACK 02 POPUP CROWN: Gojū Pagoda Sanctuary Gateway
 * Faithfully mirrors PagodaBuildingRoof from Track 02 card:
 * - Soaring 9-ring Sōrin Bronze Spire with radiant Lotus Jewel (Hōju)
 * - Suien flame halo and bronze dew rings with gold beads
 * - Center archaic tablet with kanji 弐 (Two)
 * - Cascading tiered pagoda roofs with wind bells (Fūrin) on strings
 * - Bracket cluster system (Tokyō) between tiers
 * - Flanking swaying Chōchin lanterns: 智 (Wisdom) and 創 (Creation)
 * - Wide lower grand pagoda canopy with under-eave rafters
 * - Bottom beam at y=166 flush with card top edge
 */
export function PagodaPopupCrown() {
  return (
    <div className="relative w-full overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 1000 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="pagoda-crown-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="pagoda-gem-glow-crown" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ambient Backlight Glow */}
        <ellipse
          cx="500"
          cy="90"
          rx="460"
          ry="55"
          fill="rgba(6, 182, 212, 0.12)"
          className="filter drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        />

        {/* 1. SŌRIN SACRED SPIRE (Central Pinnacle of Gojū Pagoda) */}
        {/* Central Spire Mast (Shinbashira) */}
        <line x1="500" y1="4" x2="500" y2="76" stroke="#22d3ee" strokeWidth="2.2" />

        {/* Sacred Lotus Jewel (Hōju / Flaming Pearl) */}
        <circle cx="500" cy="8" r="8" fill="url(#pagoda-gem-glow-crown)" />
        <circle cx="500" cy="8" r="4" fill="#fef08a" className="filter drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
        <path d="M 500 1 C 503 4, 505 6, 500 8 C 495 6, 497 4, 500 1 Z" fill="#22d3ee" />

        {/* Suien Flame Halo (Winged decorative bronze plates) */}
        <path
          d="M 500 12 C 493 15, 488 19, 492 23 C 496 19, 498 17, 500 16 C 502 17, 504 19, 508 23 C 512 19, 507 15, 500 12 Z"
          fill="rgba(34, 211, 238, 0.35)"
          stroke="#22d3ee"
          strokeWidth="1"
        />

        {/* 9 Sacred Bronze Rings (Kururin) */}
        {[22, 27, 32, 37, 42, 47, 52, 57, 62].map((y, idx) => {
          const rx = 10 + idx * 1.1;
          return (
            <g key={y}>
              <ellipse
                cx="500"
                cy={y}
                rx={rx}
                ry="2.4"
                fill="#000514"
                stroke="#22d3ee"
                strokeWidth="1.2"
                className="filter drop-shadow-[0_0_4px_rgba(34,211,238,0.5)]"
              />
              <circle cx={500 - rx} cy={y} r="1.2" fill="#fef08a" />
              <circle cx={500 + rx} cy={y} r="1.2" fill="#fef08a" />
            </g>
          );
        })}

        {/* Fukubachi Base & Roban Plinth */}
        <path d="M 486 68 C 490 65, 510 65, 514 68 Z" fill="#000514" stroke="#22d3ee" strokeWidth="1.2" />
        <rect x="480" y="69" width="40" height="6" rx="1" fill="#000514" stroke="#06b6d4" strokeWidth="1.2" />

        {/* Center Archaic Tablet: 弐 (Two) */}
        <g transform="translate(472, 60)">
          <rect
            x="0"
            y="0"
            width="56"
            height="36"
            rx="3"
            fill="#000514"
            stroke="#22d3ee"
            strokeWidth="1.8"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <rect
            x="3"
            y="3"
            width="50"
            height="30"
            rx="1.5"
            fill="none"
            stroke="rgba(251, 191, 36, 0.7)"
            strokeWidth="1"
          />
          <text
            x="28"
            y="25"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="22"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]"
          >
            弐
          </text>
        </g>

        {/* 2. UPPER PAGODA ROOF TIER */}
        <path
          d="M 440 76 C 340 88, 220 98, 90 106 C 115 101, 180 97, 260 94 C 360 92, 640 92, 740 94 C 820 97, 885 101, 910 106 C 780 98, 660 88, 560 76 Z"
          fill="rgba(6, 182, 212, 0.14)"
          stroke="url(#pagoda-crown-grad)"
          strokeWidth="1.8"
          className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        />

        {/* Upturned Eave Finials & Wind Bells (Fūrin) on Upper Roof */}
        <path d="M 90 106 C 78 101, 72 90, 80 80" stroke="#22d3ee" strokeWidth="1.8" fill="none" />
        <circle cx="80" cy="80" r="2.5" fill="#fef08a" />
        {/* Left Wind Bell */}
        <line x1="90" y1="106" x2="90" y2="124" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="86" y="124" width="8" height="9" fill="rgba(34,211,238,0.8)" stroke="#22d3ee" strokeWidth="0.8" />
        <line x1="90" y1="133" x2="90" y2="145" stroke="#fef08a" strokeWidth="0.8" />

        <path d="M 910 106 C 922 101, 928 90, 920 80" stroke="#22d3ee" strokeWidth="1.8" fill="none" />
        <circle cx="920" cy="80" r="2.5" fill="#fef08a" />
        {/* Right Wind Bell */}
        <line x1="910" y1="106" x2="910" y2="124" stroke="#fef08a" strokeWidth="1" strokeDasharray="3 2" />
        <rect x="906" y="124" width="8" height="9" fill="rgba(34,211,238,0.8)" stroke="#22d3ee" strokeWidth="0.8" />
        <line x1="910" y1="133" x2="910" y2="145" stroke="#fef08a" strokeWidth="0.8" />

        {/* Bracket System (Tokyō) clusters between tiers */}
        <g stroke="#06b6d4" strokeWidth="1">
          {[220, 310, 400, 600, 690, 780].map((x) => (
            <line key={x} x1={x} y1="96" x2={x} y2="122" />
          ))}
          <line x1="180" y1="110" x2="820" y2="110" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
        </g>

        {/* 3. FLANKING SWAYING CHŌCHIN LANTERNS */}
        {/* Left Lantern: 智 (Wisdom / Intellect) */}
        <g
          style={{
            transformOrigin: "48px 84px",
            animation: "swayLeftLantern 5.8s ease-in-out infinite",
          }}
        >
          <line x1="48" y1="84" x2="48" y2="104" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="48" cy="106" r="2" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <rect x="36" y="108" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <path
            d="M 37 111 L 30 128 L 37 146 L 59 146 L 66 128 L 59 111 Z"
            fill="rgba(0, 5, 20, 0.9)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <circle cx="48" cy="128" r="9" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="48"
            y="134"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]"
          >
            智
          </text>
          <rect x="36" y="146" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <line x1="48" y1="149" x2="48" y2="170" stroke="#fef08a" strokeWidth="1.3" />
          <line x1="45" y1="151" x2="45" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
          <line x1="51" y1="151" x2="51" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
        </g>

        {/* Right Lantern: 創 (Creation / Empower) */}
        <g
          style={{
            transformOrigin: "952px 84px",
            animation: "swayRightLantern 6.4s ease-in-out infinite",
          }}
        >
          <line x1="952" y1="84" x2="952" y2="104" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="952" cy="106" r="2" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <rect x="940" y="108" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <path
            d="M 941 111 L 934 128 L 941 146 L 963 146 L 970 128 L 963 111 Z"
            fill="rgba(0, 5, 20, 0.9)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <circle cx="952" cy="128" r="9" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="952"
            y="134"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]"
          >
            創
          </text>
          <rect x="940" y="146" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <line x1="952" y1="149" x2="952" y2="170" stroke="#fef08a" strokeWidth="1.3" />
          <line x1="949" y1="151" x2="949" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
          <line x1="955" y1="151" x2="955" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
        </g>

        {/* 4. LOWER GRAND CANOPY (Wide pagoda base eave) */}
        <path
          d="M 36 142 C 120 134, 300 128, 500 128 C 700 128, 880 134, 964 142 L 952 150 C 866 142, 690 137, 500 137 C 310 137, 134 142, 48 150 Z"
          fill="rgba(0, 113, 227, 0.35)"
          stroke="#22d3ee"
          strokeWidth="1.6"
        />
        {/* Upturned tips */}
        <path d="M 36 142 C 26 138, 22 130, 28 122" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
        <path d="M 964 142 C 974 138, 978 130, 972 122" stroke="#06b6d4" strokeWidth="1.5" fill="none" />

        {/* Under-eave rafters */}
        <g stroke="#06b6d4" strokeWidth="1" opacity="0.75">
          {[120, 180, 240, 300, 360, 420, 480, 520, 580, 640, 700, 760, 820, 880].map((x) => (
            <line key={x} x1={x} y1="137" x2={x + (x < 500 ? -6 : 6)} y2="148" />
          ))}
        </g>

        {/* 5. CORNER ANCHORS */}
        <g>
          <rect x="74" y="146" width="12" height="20" fill="#000514" stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M 80 166 L 50 142 L 56 138 L 86 160 Z" fill="rgba(6, 182, 212, 0.3)" stroke="#22d3ee" strokeWidth="1.2" />
        </g>
        <g>
          <rect x="914" y="146" width="12" height="20" fill="#000514" stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M 920 166 L 950 142 L 944 138 L 914 160 Z" fill="rgba(6, 182, 212, 0.3)" stroke="#22d3ee" strokeWidth="1.2" />
        </g>

        {/* 6. BOTTOM HORIZONTAL MOUNTING BEAM */}
        <line x1="80" y1="166" x2="920" y2="166" stroke="#22d3ee" strokeWidth="2.5" />
        <line x1="80" y1="161" x2="920" y2="161" stroke="#06b6d4" strokeWidth="1.2" />
        <rect x="80" y="161" width="840" height="5" fill="rgba(6, 182, 212, 0.15)" />
      </svg>
    </div>
  );
}

/**
 * TRACK 03 POPUP CROWN: Shiro Grand Sanctuary / Torii Fortress Gateway
 * Faithfully mirrors ShiroPavilionRoof from Track 03 card:
 * - Sweeping Grand Kasagi Torii Lintel with upturned horns reaching upward
 * - Nuki secondary crossbeam with circuit energy conduits
 * - Center Gakuzuka tablet with archaic kanji 参 (Three)
 * - Karahafu cusped wave-gable arch in center (Palatial Kyoto style)
 * - Sweeping grand sanctuary roof with upturned palatial eave tips
 * - Flanking swaying Chōchin lanterns: 密 (Secret / Privacy) and 網 (Network)
 * - Diagonal eave braces and corner anchors at x=80 and x=920
 * - Bottom beam at y=166 flush with card top edge
 */
export function ShiroPopupCrown() {
  return (
    <div className="relative w-full overflow-visible select-none pointer-events-none">
      <svg
        viewBox="0 0 1000 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          <linearGradient id="shiro-crown-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="torii-beam-crown-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,113,227,0.4)" />
            <stop offset="50%" stopColor="rgba(6,182,212,0.6)" />
            <stop offset="100%" stopColor="rgba(0,113,227,0.4)" />
          </linearGradient>
        </defs>

        {/* Ambient Backlight Glow */}
        <ellipse
          cx="500"
          cy="85"
          rx="460"
          ry="55"
          fill="rgba(6, 182, 212, 0.12)"
          className="filter drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
        />

        {/* 1. KASAGI TOP CURVED LINTEL (Grand Torii Crest Beam) */}
        <path
          d="M 28 26 C 240 46, 760 46, 972 26 L 962 38 C 750 56, 250 56, 38 38 Z"
          fill="url(#torii-beam-crown-grad)"
          stroke="#22d3ee"
          strokeWidth="1.8"
          className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        />
        {/* Kasagi upturned horns */}
        <path d="M 28 26 C 18 20, 12 10, 18 2" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <circle cx="18" cy="2" r="2.5" fill="#22d3ee" className="animate-pulse" />
        <path d="M 972 26 C 982 20, 988 10, 982 2" stroke="#22d3ee" strokeWidth="2" fill="none" />
        <circle cx="982" cy="2" r="2.5" fill="#22d3ee" className="animate-pulse" />

        {/* 2. NUKI SECONDARY CROSSBEAM & CIRCUIT ENERGY CONDUITS */}
        <rect
          x="100"
          y="56"
          width="800"
          height="10"
          rx="1.5"
          fill="#000514"
          stroke="#06b6d4"
          strokeWidth="1.4"
        />
        {/* Circuit conduit dots */}
        {[140, 200, 260, 320, 380, 620, 680, 740, 800, 860].map((x) => (
          <circle key={x} cx={x} cy="61" r="2" fill="#22d3ee" />
        ))}

        {/* Vertical struts between Kasagi and Nuki */}
        {[160, 280, 400, 600, 720, 840].map((x) => (
          <line key={x} x1={x} y1="44" x2={x} y2="56" stroke="#06b6d4" strokeWidth="1.2" />
        ))}

        {/* Center Tablet (Gakuzuka) with Archaic Kanji 参 (Three) */}
        <g transform="translate(472, 30)">
          <rect
            x="0"
            y="0"
            width="56"
            height="46"
            rx="3"
            fill="#000514"
            stroke="#22d3ee"
            strokeWidth="1.8"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <rect
            x="3"
            y="3"
            width="50"
            height="40"
            rx="1.5"
            fill="none"
            stroke="rgba(251, 191, 36, 0.7)"
            strokeWidth="1"
          />
          <text
            x="28"
            y="30"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="24"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]"
          >
            参
          </text>
        </g>

        {/* 3. KARAHAFU CUSPED GABLE (Wavy Arch in Center) */}
        <path
          d="M 405 82 C 445 62, 475 56, 500 70 C 525 56, 555 62, 595 82"
          fill="rgba(6, 182, 212, 0.2)"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <circle cx="500" cy="70" r="2.5" fill="#fef08a" />

        {/* 4. GRAND SANCTUARY ROOF (Sweeping Palatial Eaves) */}
        <path
          d="M 370 78 C 260 94, 150 108, 50 118 C 72 112, 130 107, 195 104 C 300 99, 700 99, 805 104 C 870 107, 928 112, 950 118 C 850 108, 740 94, 630 78 Z"
          fill="rgba(6, 182, 212, 0.12)"
          stroke="url(#shiro-crown-grad)"
          strokeWidth="1.8"
          className="filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        />

        {/* Eave Tips */}
        <path d="M 50 118 C 38 112, 34 100, 42 88" stroke="#22d3ee" strokeWidth="1.8" fill="none" />
        <path d="M 950 118 C 962 112, 966 100, 958 88" stroke="#22d3ee" strokeWidth="1.8" fill="none" />

        {/* Rafter Lines */}
        <g stroke="#06b6d4" strokeWidth="1" opacity="0.75">
          {[100, 160, 220, 280, 340, 660, 720, 780, 840, 900].map((x) => (
            <line key={x} x1={x} y1="104" x2={x + (x < 500 ? -8 : 8)} y2="116" />
          ))}
        </g>

        {/* 5. FLANKING SWAYING CHŌCHIN LANTERNS */}
        {/* Left Lantern: 密 (Secret / Privacy) */}
        <g
          style={{
            transformOrigin: "48px 84px",
            animation: "swayLeftLantern 5.4s ease-in-out infinite",
          }}
        >
          <line x1="48" y1="84" x2="48" y2="104" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="48" cy="106" r="2" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <rect x="36" y="108" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <path
            d="M 37 111 L 30 128 L 37 146 L 59 146 L 66 128 L 59 111 Z"
            fill="rgba(0, 5, 20, 0.9)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <circle cx="48" cy="128" r="9" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="48"
            y="134"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]"
          >
            密
          </text>
          <rect x="36" y="146" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <line x1="48" y1="149" x2="48" y2="170" stroke="#fef08a" strokeWidth="1.3" />
          <line x1="45" y1="151" x2="45" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
          <line x1="51" y1="151" x2="51" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
        </g>

        {/* Right Lantern: 網 (Network / Distributed) */}
        <g
          style={{
            transformOrigin: "952px 84px",
            animation: "swayRightLantern 6.2s ease-in-out infinite",
          }}
        >
          <line x1="952" y1="84" x2="952" y2="104" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="952" cy="106" r="2" stroke="#22d3ee" strokeWidth="1" fill="none" />
          <rect x="940" y="108" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <path
            d="M 941 111 L 934 128 L 941 146 L 963 146 L 970 128 L 963 111 Z"
            fill="rgba(0, 5, 20, 0.9)"
            stroke="#22d3ee"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]"
          />
          <circle cx="952" cy="128" r="9" fill="rgba(34, 211, 238, 0.3)" />
          <text
            x="952"
            y="134"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
            className="drop-shadow-[0_0_4px_rgba(251,191,36,0.9)]"
          >
            網
          </text>
          <rect x="940" y="146" width="24" height="3" rx="0.5" fill="#000514" stroke="#22d3ee" strokeWidth="1" />
          <line x1="952" y1="149" x2="952" y2="170" stroke="#fef08a" strokeWidth="1.3" />
          <line x1="949" y1="151" x2="949" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
          <line x1="955" y1="151" x2="955" y2="167" stroke="rgba(34,211,238,0.7)" strokeWidth="0.8" />
        </g>

        {/* 6. CORNER ANCHORS & DIAGONAL BRACES */}
        <g>
          <rect x="74" y="118" width="12" height="48" fill="#000514" stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M 80 166 L 45 114 L 52 110 L 86 160 Z" fill="rgba(6, 182, 212, 0.3)" stroke="#22d3ee" strokeWidth="1.2" />
        </g>
        <g>
          <rect x="914" y="118" width="12" height="48" fill="#000514" stroke="#22d3ee" strokeWidth="1.4" />
          <path d="M 920 166 L 955 114 L 948 110 L 914 160 Z" fill="rgba(6, 182, 212, 0.3)" stroke="#22d3ee" strokeWidth="1.2" />
        </g>

        {/* 7. BOTTOM HORIZONTAL MOUNTING BEAM */}
        <line x1="80" y1="166" x2="920" y2="166" stroke="#22d3ee" strokeWidth="2.5" />
        <line x1="80" y1="161" x2="920" y2="161" stroke="#06b6d4" strokeWidth="1.2" />
        <rect x="80" y="161" width="840" height="5" fill="rgba(6, 182, 212, 0.15)" />
      </svg>
    </div>
  );
}

/**
 * SEAMLESS POPUP ROOF: Router component for selecting the appropriate crown
 */
export function SeamlessPopupRoof({ trackCode, className = "" }) {
  const Crown =
    trackCode === "TRACK-01"
      ? TenshuPopupCrown
      : trackCode === "TRACK-02"
      ? PagodaPopupCrown
      : ShiroPopupCrown;

  return (
    <div
      className={`relative w-full mx-auto pointer-events-none filter drop-shadow-[0_0_20px_rgba(34,211,238,0.45)] ${className}`}
    >
      <Crown />
    </div>
  );
}
