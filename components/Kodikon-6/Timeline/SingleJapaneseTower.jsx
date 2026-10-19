"use client";

import React from "react";

/**
 * Pure Cyan Line-Art 5-Story Japanese Pagoda Tower (Gojūnotō 五重塔)
 *
 * Accurate to the reference photograph:
 * - NO gap between rooms: each floor sits directly below the balcony above it
 * - Cyan lines ONLY and NO color filling (matching theme roofs)
 * - Wide rooms (~75% of roof width) with vertical Renji-mado lattice slats
 * - Sweeping Irimoya hip-and-gable roof eaves with upturned corners & hanging Fūtaku bells
 * - Sōrin sacred spire at apex (Hōju jewel, Suien water flames, 9 Kurin bronze rings)
 * - Cut-stone base podium (Kidan) at bottom with dual symmetrical stone staircases
 */
export function SingleJapaneseTower({ x, y, width, height, embedded = false, floors, baseY = 1420 }) {
  return (
      <svg
        x={x}
        y={y}
        width={width}
        height={height}
        aria-hidden="true"
        viewBox={`0 0 500 ${baseY + 200}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={embedded ? "overflow-visible" : "relative w-full max-w-[480px] h-auto mx-auto select-none pointer-events-none overflow-visible"}
      >
        <defs>
          <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient subtle backlight aura */}
        <ellipse
          cx="250"
          cy={(baseY + 200) / 2}
          rx="220"
          ry={(baseY + 200) / 2 - 60}
          fill="none"
          stroke="rgba(6, 182, 212, 0.04)"
          strokeWidth="50"
        />

        {/* ============================================================== */}
        {/* 1. SŌRIN SACRED BRONZE SPIRE (相輪) — Apex y: 0 to 210        */}
        {/* Cyan line art with NO color fills                              */}
        {/* ============================================================== */}
        <g id="sorin-spire" stroke="#22d3ee" strokeWidth="1.4" fill="none">
          {/* Sacred Flaming Jewel (Hōju) */}
          <circle cx="250" cy="18" r="8" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="250" cy="18" r="3" stroke="#fef08a" strokeWidth="1.2" />
          <path d="M 250 4 C 244 10, 243 14, 250 18 C 257 14, 256 10, 250 4 Z" stroke="#22d3ee" strokeWidth="1.2" />

          {/* Ryūsha (Dragon Vehicle Plate) */}
          <ellipse cx="250" cy="30" rx="12" ry="3.5" stroke="#22d3ee" strokeWidth="1.2" />

          {/* Suien (Water-Flame Winged Plates) */}
          <path d="M 246 34 C 230 30, 222 42, 226 54 C 230 62, 240 60, 246 66" strokeWidth="1.3" />
          <path d="M 246 42 C 236 40, 232 46, 236 52" strokeWidth="0.8" strokeDasharray="2 2" />
          <path d="M 254 34 C 270 30, 278 42, 274 54 C 270 62, 260 60, 254 66" strokeWidth="1.3" />
          <path d="M 254 42 C 264 40, 268 46, 264 52" strokeWidth="0.8" strokeDasharray="2 2" />

          {/* Central Mast (Shinbashira) */}
          <line x1="250" y1="30" x2="250" y2="195" stroke="#22d3ee" strokeWidth="2.5" />
          <line x1="247" y1="30" x2="247" y2="195" stroke="#06b6d4" strokeWidth="0.8" />
          <line x1="253" y1="30" x2="253" y2="195" stroke="#06b6d4" strokeWidth="0.8" />

          {/* 9 Kurin Bronze Rings */}
          {[72, 85, 98, 111, 124, 137, 150, 163, 176].map((y, idx) => {
            const rx = 13 + idx * 1.5;
            return (
              <g key={y}>
                <ellipse cx="250" cy={y} rx={rx} ry="3.5" stroke="#22d3ee" strokeWidth="1.3" />
                <circle cx={250 - rx} cy={y} r="1" stroke="#fef08a" strokeWidth="0.8" />
                <circle cx={250 + rx} cy={y} r="1" stroke="#fef08a" strokeWidth="0.8" />
              </g>
            );
          })}

          {/* Ukebana (Lotus Petal Collar) */}
          <path d="M 235 186 C 240 192, 246 195, 250 195 C 254 195, 260 192, 265 186" strokeWidth="1.2" />

          {/* Fukubachi & Roban (Dew Basin Base) */}
          <path d="M 230 204 C 230 196, 270 196, 270 204 Z" stroke="#22d3ee" strokeWidth="1.4" />
          <rect x="222" y="204" width="56" height="10" rx="1.5" stroke="#22d3ee" strokeWidth="1.4" />

          {/* Apex Crest Tablet: 天 (Heaven) */}
          <rect x="238" y="214" width="24" height="16" rx="2" stroke="#f59e0b" strokeWidth="1.2" />
          <text
            x="250"
            y="226"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="10"
            fontWeight="bold"
            fontFamily="monospace"
          >
            天
          </text>
        </g>

        {floors ? floors.map((floor) => (
          <PagodaFloorHollow key={floor.floorNum} {...floor} />
        )) : <>
        {/* ============================================================== */}
        {/* FLOOR 5 (TOP STORY) — y: 220 to 404                           */}
        {/* ============================================================== */}
        <PagodaFloorHollow
          floorNum={5}
          kanji="壱"
          roofTopY={220}
          roofEdgeY={275}
          roofWidth={290}
          roomWidth={220}
          roomTopY={290}
          roomBottomY={390}
          balconyBottomY={404}
        />

        {/* ============================================================== */}
        {/* FLOOR 4 (FOURTH STORY) — y: 404 to 622                        */}
        {/* Starts DIRECTLY at y: 404 (ZERO GAP under Floor 5's balcony!)  */}
        {/* ============================================================== */}
        <PagodaFloorHollow
          floorNum={4}
          kanji="弐"
          roofTopY={404}
          roofEdgeY={474}
          roofWidth={330}
          roomWidth={250}
          roomTopY={492}
          roomBottomY={606}
          balconyBottomY={622}
        />

        {/* ============================================================== */}
        {/* FLOOR 3 (THIRD STORY) — y: 622 to 864                         */}
        {/* Starts DIRECTLY at y: 622 (ZERO GAP under Floor 4's balcony!)  */}
        {/* ============================================================== */}
        <PagodaFloorHollow
          floorNum={3}
          kanji="参"
          roofTopY={622}
          roofEdgeY={702}
          roofWidth={370}
          roomWidth={280}
          roomTopY={722}
          roomBottomY={846}
          balconyBottomY={864}
        />

        {/* ============================================================== */}
        {/* FLOOR 2 (SECOND STORY) — y: 864 to 1130                       */}
        {/* Starts DIRECTLY at y: 864 (ZERO GAP under Floor 3's balcony!)  */}
        {/* ============================================================== */}
        <PagodaFloorHollow
          floorNum={2}
          kanji="四"
          roofTopY={864}
          roofEdgeY={954}
          roofWidth={410}
          roomWidth={315}
          roomTopY={976}
          roomBottomY={1110}
          balconyBottomY={1130}
        />

        {/* ============================================================== */}
        {/* FLOOR 1 (FIRST STORY / GROUND) — y: 1130 to 1420               */}
        {/* Starts DIRECTLY at y: 1130 (ZERO GAP under Floor 2's balcony!) */}
        {/* ============================================================== */}
        <PagodaFloorHollow
          floorNum={1}
          kanji="伍"
          roofTopY={1130}
          roofEdgeY={1230}
          roofWidth={450}
          roomWidth={350}
          roomTopY={1254}
          roomBottomY={1400}
          balconyBottomY={1420}
          isGroundLevel={true}
        />
        </>}

        {/* ============================================================== */}
        {/* 7. ELEVATED STONE BASE PODIUM (KIDAN 基壇) & STAIRS            */}
        {/* Starts DIRECTLY at y: 1420 (ZERO GAP under Floor 1's balcony!) */}
        {/* Matching photo with dual stairs and masonry                    */}
        {/* ============================================================== */}
        <g id="stone-kidan-base" transform={`translate(0 ${baseY - 1420})`} stroke="#22d3ee" strokeWidth="1.4" fill="none">
          {/* Main Stone Podium Perimeter */}
          <path d="M 40 1420 L 460 1420 L 485 1600 L 15 1600 Z" strokeWidth="2" />

          {/* Horizontal Stone Layer Levels */}
          <line x1="33" y1="1465" x2="467" y2="1465" stroke="#06b6d4" strokeWidth="1.2" />
          <line x1="26" y1="1510" x2="474" y2="1510" stroke="#06b6d4" strokeWidth="1.2" />
          <line x1="19" y1="1555" x2="481" y2="1555" stroke="#06b6d4" strokeWidth="1.2" />

          {/* Staggered Vertical Masonry Joints */}
          {[80, 150, 220, 280, 350, 420].map((x) => (
            <line key={`b1-${x}`} x1={x} y1="1420" x2={x} y2="1465" stroke="#06b6d4" strokeWidth="0.8" />
          ))}
          {[115, 185, 250, 315, 385].map((x) => (
            <line key={`b2-${x}`} x1={x} y1="1465" x2={x} y2="1510" stroke="#06b6d4" strokeWidth="0.8" />
          ))}
          {[70, 140, 210, 290, 360, 430].map((x) => (
            <line key={`b3-${x}`} x1={x} y1="1510" x2={x} y2="1555" stroke="#06b6d4" strokeWidth="0.8" />
          ))}
          {[105, 175, 250, 325, 395].map((x) => (
            <line key={`b4-${x}`} x1={x} y1="1555" x2={x} y2="1600" stroke="#06b6d4" strokeWidth="0.8" />
          ))}

          {/* LEFT STONE STAIRCASE (matching photo) */}
          <g transform="translate(60, 1435)">
            <polygon points="0,0 70,0 90,155 0,155" strokeWidth="1.5" />
            {[26, 52, 78, 104, 130].map((y) => (
              <line key={y} x1="5" y1={y} x2={70 + y * 0.12} y2={y} stroke="#fef08a" strokeWidth="0.9" />
            ))}
            <line x1="0" y1="0" x2="90" y2="155" stroke="#22d3ee" strokeWidth="2.5" />
          </g>

          {/* RIGHT STONE STAIRCASE (matching photo) */}
          <g transform="translate(350, 1435)">
            <polygon points="20,0 90,0 90,155 0,155" strokeWidth="1.5" />
            {[26, 52, 78, 104, 130].map((y) => (
              <line key={y} x1={20 - y * 0.12} y1={y} x2="85" y2={y} stroke="#fef08a" strokeWidth="0.9" />
            ))}
            <line x1="20" y1="0" x2="0" y2="155" stroke="#22d3ee" strokeWidth="2.5" />
          </g>

          {/* Center Stone Plinth & Archaic Kanji Monogram */}
          <rect x="200" y="1475" width="100" height="85" rx="2" stroke="#22d3ee" strokeWidth="1.5" />
          <rect x="208" y="1483" width="84" height="69" rx="1" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="3 2" />
          <text
            x="250"
            y="1518"
            textAnchor="middle"
            fill="#22d3ee"
            fontSize="14"
            fontWeight="bold"
            fontFamily="monospace"
          >
            五重塔
          </text>
          <text
            x="250"
            y="1538"
            textAnchor="middle"
            fill="#fef08a"
            fontSize="9"
            letterSpacing="2"
            fontFamily="monospace"
          >
            極点 · SANCTUARY
          </text>

          {/* Ground Foundation Rim Beam */}
          <line x1="0" y1="1600" x2="500" y2="1600" stroke="#22d3ee" strokeWidth="2.5" />
          <line x1="10" y1="1605" x2="490" y2="1605" stroke="#f59e0b" strokeWidth="1" />
        </g>
      </svg>
  );
}

/**
 * Individual Pagoda Story Floor Component
 * Accurate to the attached photo:
 * - Starts DIRECTLY at roofTopY with 0 gap under the floor above
 * - Wide rooms (~75% of roof width) with vertical Renji-mado lattice slats
 * - Sweeping Irimoya hip-and-gable eaves with upturned corners & hanging Fūtaku bells
 * - Under-eave Tokyō brackets & exposed Taruki rafters
 * - Balcony railing (Kōran) wrapping around the room
 * - NO lines crossing inside the building or center
 */
function PagodaFloorHollow({
  floorNum = 5,
  kanji = "壱",
  roofTopY = 220,
  roofEdgeY = 275,
  roofWidth = 290,
  roomWidth = 220,
  roomTopY = 290,
  roomBottomY = 390,
  balconyBottomY = 404,
  isGroundLevel = false,
}) {
  const halfRoof = roofWidth / 2;
  const halfRoom = roomWidth / 2;
  const balconyY = roomBottomY;

  return (
    <g id={`pagoda-story-${floorNum}`} stroke="#22d3ee" fill="none" className="transition-all duration-300">
      {/* 1. ROOF RIDGE CAP (Mune) & ONIGAWARA CREST */}
      <line
        x1={250 - halfRoof * 0.42}
        y1={roofTopY}
        x2={250 + halfRoof * 0.42}
        y2={roofTopY}
        stroke="#22d3ee"
        strokeWidth="2.2"
      />
      <line
        x1={250 - halfRoof * 0.4}
        y1={roofTopY + 5}
        x2={250 + halfRoof * 0.4}
        y2={roofTopY + 5}
        stroke="#06b6d4"
        strokeWidth="1"
      />

      {/* Center Crest Tablet with Kanji */}
      <g transform={`translate(${250 - 14}, ${roofTopY - 14})`}>
        <rect x="0" y="0" width="28" height="20" rx="2" stroke="#f59e0b" strokeWidth="1.2" />
        <text
          x="14"
          y="14"
          textAnchor="middle"
          fill="#fef08a"
          fontSize="11"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {kanji}
        </text>
      </g>

      {/* 2. SWEEPING IRIMOYA HIP-AND-GABLE ROOF EAVES (Cyan lines, no color fill) */}
      <path
        d={`M ${250 - halfRoof * 0.4} ${roofTopY} Q ${250 - halfRoof * 0.72} ${roofEdgeY - 8} ${250 - halfRoof} ${roofEdgeY} C ${250 - halfRoof + 25} ${roofEdgeY + 6}, ${250 - halfRoof * 0.5} ${roofEdgeY + 3}, 250 ${roofEdgeY - 2} C ${250 + halfRoof * 0.5} ${roofEdgeY + 3}, ${250 + halfRoof - 25} ${roofEdgeY + 6}, ${250 + halfRoof} ${roofEdgeY} Q ${250 + halfRoof * 0.72} ${roofEdgeY - 8} ${250 + halfRoof * 0.4} ${roofTopY}`}
        stroke="#22d3ee"
        strokeWidth="2"
      />

      {/* Lower roof eave edge line */}
      <path
        d={`M ${250 - halfRoof} ${roofEdgeY} Q 250 ${roofEdgeY - 5} ${250 + halfRoof} ${roofEdgeY}`}
        stroke="#22d3ee"
        strokeWidth="2.2"
      />
      <path
        d={`M ${250 - halfRoof + 4} ${roofEdgeY + 4} Q 250 ${roofEdgeY} ${250 + halfRoof - 4} ${roofEdgeY + 4}`}
        stroke="#06b6d4"
        strokeWidth="1"
      />

      {/* Upturned Eave Finials */}
      <path d={`M ${250 - halfRoof} ${roofEdgeY} C ${250 - halfRoof - 6} ${roofEdgeY - 4}, ${250 - halfRoof - 8} ${roofEdgeY - 12}, ${250 - halfRoof - 4} ${roofEdgeY - 18}`} strokeWidth="1.6" />
      <circle cx={250 - halfRoof - 4} cy={roofEdgeY - 18} r="1.5" stroke="#fef08a" strokeWidth="1" />

      <path d={`M ${250 + halfRoof} ${roofEdgeY} C ${250 + halfRoof + 6} ${roofEdgeY - 4}, ${250 + halfRoof + 8} ${roofEdgeY - 12}, ${250 + halfRoof + 4} ${roofEdgeY - 18}`} strokeWidth="1.6" />
      <circle cx={250 + halfRoof + 4} cy={roofEdgeY - 18} r="1.5" stroke="#fef08a" strokeWidth="1" />

      {/* Hanging Wind Bells (Fūtaku 風鐸) */}
      <g>
        <line x1={250 - halfRoof} y1={roofEdgeY} x2={250 - halfRoof} y2={roofEdgeY + 14} stroke="#fef08a" strokeWidth="0.8" />
        <path
          d={`M ${250 - halfRoof - 4} ${roofEdgeY + 14} L ${250 - halfRoof + 4} ${roofEdgeY + 14} L ${250 - halfRoof + 6} ${roofEdgeY + 22} L ${250 - halfRoof - 6} ${roofEdgeY + 22} Z`}
          stroke="#22d3ee"
          strokeWidth="0.8"
        />
        <line x1={250 - halfRoof} y1={roofEdgeY + 22} x2={250 - halfRoof} y2={roofEdgeY + 34} stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 1" />
        <circle cx={250 - halfRoof} cy={roofEdgeY + 35} r="1.2" stroke="#fef08a" />
      </g>

      <g>
        <line x1={250 + halfRoof} y1={roofEdgeY} x2={250 + halfRoof} y2={roofEdgeY + 14} stroke="#fef08a" strokeWidth="0.8" />
        <path
          d={`M ${250 + halfRoof - 4} ${roofEdgeY + 14} L ${250 + halfRoof + 4} ${roofEdgeY + 14} L ${250 + halfRoof + 6} ${roofEdgeY + 22} L ${250 + halfRoof - 6} ${roofEdgeY + 22} Z`}
          stroke="#22d3ee"
          strokeWidth="0.8"
        />
        <line x1={250 + halfRoof} y1={roofEdgeY + 22} x2={250 + halfRoof} y2={roofEdgeY + 34} stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 1" />
        <circle cx={250 + halfRoof} cy={roofEdgeY + 35} r="1.2" stroke="#fef08a" />
      </g>

      {/* Vertical Kawara Tile Ribs */}
      {[-0.34, -0.26, -0.17, -0.09, 0, 0.09, 0.17, 0.26, 0.34].map((f) => {
        const xTop = 250 + halfRoof * f * 0.9;
        const xBot = 250 + halfRoof * f * 2.2;
        return (
          <line
            key={`r-${f}`}
            x1={xTop}
            y1={roofTopY + 5}
            x2={xBot}
            y2={roofEdgeY - 2}
            stroke="#06b6d4"
            strokeWidth="0.8"
          />
        );
      })}

      {/* 3. UNDER-EAVE DOUGONG (Tokyō 斗栱) BRACKETS & TARUKI RAFTERS */}
      <line
        x1={250 - halfRoof * 0.72}
        y1={roofEdgeY + 8}
        x2={250 + halfRoof * 0.72}
        y2={roofEdgeY + 8}
        stroke="#22d3ee"
        strokeWidth="1.8"
      />
      <line
        x1={250 - halfRoof * 0.68}
        y1={roofEdgeY + 14}
        x2={250 + halfRoof * 0.68}
        y2={roofEdgeY + 14}
        stroke="#06b6d4"
        strokeWidth="1"
      />

      {/* Stepped bracket arms */}
      {[-0.5, -0.34, -0.17, 0, 0.17, 0.34, 0.5].map((f) => {
        const bx = 250 + halfRoof * f;
        return (
          <path
            key={`bk-${f}`}
            d={`M ${bx - 10} ${roofEdgeY + 8} L ${bx - 5} ${roofEdgeY + 18} L ${bx + 5} ${roofEdgeY + 18} L ${bx + 10} ${roofEdgeY + 8}`}
            stroke="#22d3ee"
            strokeWidth="1"
          />
        );
      })}

      {/* Taruki rafter tips (cyan light nodes) */}
      {[-0.6, -0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45, 0.6].map((f) => (
        <circle key={`tk-${f}`} cx={250 + halfRoof * f} cy={roofEdgeY + 6} r="1.5" stroke="#fef08a" strokeWidth="0.8" />
      ))}

      {/* 4. WIDE ROOM CHAMBER (~75% of roof width) */}
      {/* Outer Chamber Perimeter Box */}
      <rect
        x={250 - halfRoom}
        y={roomTopY}
        width={roomWidth}
        height={roomBottomY - roomTopY}
        stroke="#22d3ee"
        strokeWidth="1.8"
      />

      {/* Main Structural Timber Posts (Hashira) */}
      <line x1={250 - halfRoom + 12} y1={roomTopY} x2={250 - halfRoom + 12} y2={roomBottomY} stroke="#22d3ee" strokeWidth="1.8" />
      <line x1={250 - halfRoom * 0.38} y1={roomTopY} x2={250 - halfRoom * 0.38} y2={roomBottomY} stroke="#22d3ee" strokeWidth="1.6" />
      <line x1={250 + halfRoom * 0.38} y1={roomTopY} x2={250 + halfRoom * 0.38} y2={roomBottomY} stroke="#22d3ee" strokeWidth="1.6" />
      <line x1={250 + halfRoom - 12} y1={roomTopY} x2={250 + halfRoom - 12} y2={roomBottomY} stroke="#22d3ee" strokeWidth="1.8" />

      {/* Horizontal Transom Beam (Nuki) */}
      <line
        x1={250 - halfRoom}
        y1={roomTopY + 26}
        x2={250 + halfRoom}
        y2={roomTopY + 26}
        stroke="#06b6d4"
        strokeWidth="1.2"
      />

      {/* VERTICAL RENJI-MADO LATTICE SLATS */}
      {/* Left Bay Lattice Slats */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 250 - halfRoom + 18 + i * ((halfRoom * 0.62 - 20) / 7);
        return (
          <line
            key={`ls-${i}`}
            x1={x}
            y1={roomTopY + 26}
            x2={x}
            y2={roomBottomY - 8}
            stroke="#06b6d4"
            strokeWidth="0.9"
            strokeDasharray="4 2"
          />
        );
      })}

      {/* Center Bay Lattice / Transom */}
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 250 - halfRoom * 0.34 + i * ((halfRoom * 0.68) / 9);
        return (
          <line
            key={`cs-${i}`}
            x1={x}
            y1={roomTopY + 26}
            x2={x}
            y2={roomBottomY - 8}
            stroke="#06b6d4"
            strokeWidth="0.9"
            strokeDasharray="4 2"
          />
        );
      })}

      {/* Right Bay Lattice Slats */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 250 + halfRoom * 0.42 + i * ((halfRoom * 0.62 - 20) / 7);
        return (
          <line
            key={`rs-${i}`}
            x1={x}
            y1={roomTopY + 26}
            x2={x}
            y2={roomBottomY - 8}
            stroke="#06b6d4"
            strokeWidth="0.9"
            strokeDasharray="4 2"
          />
        );
      })}

      {/* Ground floor double entrance doors (Tobira) if Floor 1 */}
      {isGroundLevel && (
        <g transform={`translate(${250 - 45}, ${roomTopY + 34})`}>
          <rect x="0" y="0" width="90" height={roomBottomY - roomTopY - 42} stroke="#22d3ee" strokeWidth="1.8" />
          <line x1="45" y1="0" x2="45" y2={roomBottomY - roomTopY - 42} stroke="#22d3ee" strokeWidth="1.6" />
          <circle cx="36" cy={(roomBottomY - roomTopY - 42) * 0.5} r="4" stroke="#fef08a" strokeWidth="1.2" />
          <circle cx="54" cy={(roomBottomY - roomTopY - 42) * 0.5} r="4" stroke="#fef08a" strokeWidth="1.2" />
        </g>
      )}

      {/* 5. BALCONY VERANDA RAILING (Kōran 高欄) — y: balconyY to balconyBottomY */}
      {/* Balcony deck platform */}
      <rect
        x={250 - halfRoom - 8}
        y={balconyY}
        width={roomWidth + 16}
        height={balconyBottomY - balconyY}
        rx="1"
        stroke="#22d3ee"
        strokeWidth="1.6"
      />
      {/* Top handrail */}
      <line
        x1={250 - halfRoom - 6}
        y1={balconyY - 12}
        x2={250 + halfRoom + 6}
        y2={balconyY - 12}
        stroke="#22d3ee"
        strokeWidth="1.8"
      />
      {/* Balustrade spindles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const x = 250 - halfRoom - 4 + i * ((roomWidth + 8) / 13);
        return (
          <line
            key={`bp-${i}`}
            x1={x}
            y1={balconyY - 12}
            x2={x}
            y2={balconyY}
            stroke="#06b6d4"
            strokeWidth="0.9"
          />
        );
      })}
      {/* Corner Giboshi lotus finials */}
      <circle cx={250 - halfRoom - 6} cy={balconyY - 14} r="2" stroke="#fef08a" strokeWidth="1" />
      <circle cx={250 + halfRoom + 6} cy={balconyY - 14} r="2" stroke="#fef08a" strokeWidth="1" />
    </g>
  );
}
