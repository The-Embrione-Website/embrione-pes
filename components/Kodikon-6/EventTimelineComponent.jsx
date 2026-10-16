"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { kodikon4Events } from "@/constants";

/*
  Fiber-optic river timeline (muted cyberpunk).
  - A ribbon of light strands flows across the poster; event anchors sit on its centerline.
  - Hover or click an anchor to open its event details.
  - Esc, the close button, or the background closes the details.
  - Reads `kodikon4Events` ({ eventTitle, eventTimings, eventDescription, miscellaneous }).
    Falls back to sample events if the list is empty.
  - Tokyo variant: old-Tokyo skyline outlines (pagodas, castle keep, temple halls, torii gate,
    townhouses) sit faintly behind the river. Everything else is unchanged.
*/

const FALLBACK_EVENTS = [
  { eventTitle: "Registration opens", eventTimings: "Day 1 · 09:00", eventDescription: "Check in at the desk, collect your badge and find your team's table.", miscellaneous: ["Bring a valid ID", "Laptop and charger"] },
  { eventTitle: "Opening ceremony", eventTimings: "Day 1 · 11:00", eventDescription: "Welcome address, problem statements revealed and rules explained.", miscellaneous: ["Main hall"] },
  { eventTitle: "Hacking begins", eventTimings: "Day 1 · 13:00", eventDescription: "The clock starts. Mentors are available at the help desk throughout.", miscellaneous: ["Meals served at 20:00 and 02:00"] },
  { eventTitle: "Mid-point review", eventTimings: "Day 2 · 09:00", eventDescription: "Short check-in with mentors to review progress and unblock your team.", miscellaneous: ["5 minutes per team"] },
  { eventTitle: "Submissions close", eventTimings: "Day 2 · 13:00", eventDescription: "Push your final code and submit your project link and demo video.", miscellaneous: ["Late submissions are not accepted"] },
  { eventTitle: "Demos and results", eventTimings: "Day 2 · 15:00", eventDescription: "Present to the judges, then watch the winners and closing remarks.", miscellaneous: ["Prizes handed out on stage"] },
];

/* ---------- River geometry (computed once, deterministic so SSR matches the client) ---------- */

const DW = 1440, DH = 584; // desktop viewBox
const MW = 390, MH = 900;  // mobile viewBox
const STRANDS = 22;
const round = (n) => Math.round(n * 10) / 10;

// Catmull-Rom spline through key points, sampled into a dense polyline.
const catmull = (p0, p1, p2, p3, t) => {
  const t2 = t * t, t3 = t2 * t;
  const f = (a, b, c, d) =>
    0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
  return [f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])];
};
const sampleCurve = (pts, per) => {
  const P = [pts[0], ...pts, pts[pts.length - 1]];
  const out = [];
  for (let i = 0; i < pts.length - 1; i++)
    for (let j = 0; j < per; j++) out.push(catmull(P[i], P[i + 1], P[i + 2], P[i + 3], j / per));
  out.push(pts[pts.length - 1]);
  return out;
};

// Desktop centerline in % of the poster: starts low-left, climbs, dives mid-poster, then climbs out right.
const RIVER_KEYS = [
  [-6, 46], [0, 42], [8, 26], [15, 18], [24, 21], [34, 35], [44, 54],
  [52, 64], [58, 66], [66, 60], [75, 50], [84, 49], [92, 42], [100, 31], [106, 26],
];
const RIVER_PCT = sampleCurve(RIVER_KEYS, 9);
const riverYAt = (xPct) => {
  for (let i = 1; i < RIVER_PCT.length; i++) {
    const [x1, y1] = RIVER_PCT[i];
    if (x1 >= xPct) {
      const [x0, y0] = RIVER_PCT[i - 1];
      return y0 + ((y1 - y0) * (xPct - x0)) / (x1 - x0 || 1);
    }
  }
  return RIVER_PCT[RIVER_PCT.length - 1][1];
};
const riverXMobile = (yPct) => 50 + Math.sin((yPct / 100) * Math.PI * 3) * 13;

/* Evenly spaced event anchors, always on the ribbon's centerline. */
const anchorAt = (fraction, mobile = false) => {
  if (mobile) {
    const y = 7 + fraction * 86;
    return { x: riverXMobile(y), y };
  }
  const x = 4 + fraction * 92;
  return { x, y: riverYAt(x) };
};

// Builds the bundle of strands that weave around a centerline. Wide at the ends, pinched mid-flow.
const buildRibbon = (C, widthAt, axisLength, axis) => {
  const n = C.length;
  const strands = [];
  const beads = [];
  for (let k = 0; k < STRANDS; k++) {
    const u = (k / (STRANDS - 1)) * 2 - 1;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = C[Math.max(i - 1, 0)], b = C[Math.min(i + 1, n - 1)];
      let tx = b[0] - a[0], ty = b[1] - a[1];
      const len = Math.hypot(tx, ty) || 1;
      tx /= len; ty /= len;
      const s = Math.min(1, Math.max(0, C[i][axis === "x" ? 0 : 1] / axisLength));
      const off =
        widthAt(s) *
        Math.sin((u * Math.PI) / 2 + 0.55 * Math.sin(s * Math.PI * 5) + 0.12 * Math.sin(s * Math.PI * 9 + k));
      pts.push([C[i][0] - ty * off, C[i][1] + tx * off]);
    }
    strands.push({
      d: pts.map(([x, y], i) => `${i ? "L" : "M"}${round(x)} ${round(y)}`).join(""),
      g: u > 0.1 ? "b" : "a",
      w: round(1.3 + (((k * 37) % 10) / 10) * 1.7),
      o: round(0.6 + (((k * 53) % 10) / 10) * 0.4),
    });
    if (k % 2 === 0) {
      const p = pts[4 + ((k * 11) % (n - 8))];
      beads.push({ cx: round(p[0]), cy: round(p[1]) });
    }
  }
  return { strands, beads };
};

const DESKTOP_RIBBON = buildRibbon(
  RIVER_PCT.map(([x, y]) => [(x / 100) * DW, (y / 100) * DH]),
  (s) =>
    (22 + 64 * (0.5 - 0.5 * Math.cos(2 * Math.PI * (s - 0.58)))) *
    (1 - 0.25 * Math.exp(-(((s - 0.34) / 0.06) ** 2))),
  DW,
  "x"
);

const MOBILE_RIBBON = buildRibbon(
  Array.from({ length: 55 }, (_, i) => {
    const y = -4 + i * 2;
    return [(riverXMobile(y) / 100) * MW, (y / 100) * MH];
  }),
  (s) => 22 + 24 * (0.5 + 0.5 * Math.cos(s * Math.PI * 6)),
  MH,
  "y"
);

/* Deterministic filler "code" text for the HUD blocks. */
const hex = (seed, len) => {
  let s = seed * 2654435761 + 1;
  let out = "";
  for (let i = 0; i < len; i++) {
    s = (Math.imul(s, 1103515245) + 12345) & 0x7fffffff;
    out += "0123456789ABCDEF"[s % 16];
  }
  return out;
};
const hexLine = (seed) => `${hex(seed * 3 + 1, 4)} ${hex(seed * 7 + 2, 6)} ${hex(seed * 5 + 3, 2 + (seed % 4))}`;

const CodeBlock = ({ x, y, seed, rows = 5, fill = "#4fb0bd" }) => (
  <g fill={fill} fontFamily="ui-monospace, 'Courier New', monospace" fontSize="7.5" opacity=".5">
    {Array.from({ length: rows }, (_, i) => (
      <text key={i} x={x} y={y + i * 10}>{hexLine(seed + i)}</text>
    ))}
  </g>
);

/* ---------- Old-Tokyo skyline: outline art behind the river ----------
   Pagodas, a castle keep, temple halls, a torii gate and a row of machiya houses, drawn as thin
   cyan outlines. Built once as SVG markup (deterministic, so the server render matches the client).
   Coordinates are local to each building: x = 0 is its centre, y = 0 is the ground, up is negative. */
const SKY_W = 1440, SKY_H = 400, SKY_G = 388; // desktop skyline viewBox + ground line
const SKY_MW = 390, SKY_MH = 300, SKY_MG = 292; // mobile skyline viewBox + ground line
const SKY_LINE = "#4fb0bd", SKY_FILL = "#05080c", SKY_LAMP = "#b04a8c";
const SKY_DASH = 'fill="none" stroke-dasharray="2 3" opacity=".7"';

const skySeed = (seed) => {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};
const skyPath = (d, extra = "") => `<path d="${d}"${extra ? " " + extra : ""}/>`;
const skyPlace = (x, g, s, inner) => `<g transform="translate(${x} ${g}) scale(${s})">${inner}</g>`;

// Curved temple roof: concave slope, flat ridge, upturned eave tips. One closed outline.
const skyRoof = (x, y, hw, rh) => {
  const rw = hw * 0.2;
  const f = round;
  return (
    `M${f(x - hw - 13)} ${f(y - 8)}` +
    `Q${f(x - hw - 3)} ${f(y + 5)} ${f(x - hw + 10)} ${f(y + 4)}` +
    `H${f(x + hw - 10)}` +
    `Q${f(x + hw + 3)} ${f(y + 5)} ${f(x + hw + 13)} ${f(y - 8)}` +
    `L${f(x + hw)} ${f(y)}` +
    `C${f(x + hw * 0.62)} ${f(y)} ${f(x + rw + hw * 0.16)} ${f(y - rh * 0.55)} ${f(x + rw)} ${f(y - rh)}` +
    `H${f(x - rw)}` +
    `C${f(x - rw - hw * 0.16)} ${f(y - rh * 0.55)} ${f(x - hw * 0.62)} ${f(y)} ${f(x - hw)} ${f(y)}Z`
  );
};
// Open-bottom box (fill closes it, the stroke doesn't draw the bottom edge).
const skyBox = (x, y, bw, bh) => `M${round(x - bw)} ${round(y)}V${round(y - bh)}H${round(x + bw)}V${round(y)}`;
const skyPosts = (bw, y, bh, n) => {
  let d = "";
  for (let k = 1; k <= n; k++) d += `M${round(-bw + (2 * bw * k) / (n + 1))} ${round(y)}V${round(y - bh)}`;
  return d;
};

// Stack of tiers (body + roof), each tucked into the roof below it.
const skyStack = (list, y0) => {
  let out = "", yb = y0, ridge = y0;
  list.forEach((t) => {
    const eave = yb - t.bh;
    out += skyPath(skyBox(0, yb, t.bw, t.bh));
    if (t.posts) out += skyPath(skyPosts(t.bw, yb, t.bh, t.posts), SKY_DASH);
    out += `<rect x="-2.5" y="${round(yb - t.bh / 2 - 2.5)}" width="5" height="5"/>`;
    out += skyPath(skyRoof(0, eave, t.hw, t.rh));
    ridge = eave - t.rh;
    yb = eave - t.rh * 0.25;
  });
  return { out, ridge };
};

const skyPagoda = (tiers, hw, th) => {
  const list = [];
  for (let i = 0; i < tiers; i++) {
    const w = hw * (1 - i * 0.13);
    list.push({ bw: w * 0.5, bh: th * 0.5, hw: w, rh: th * 0.5, posts: 2 });
  }
  const { out, ridge } = skyStack(list, -5);
  const r = (n) => round(ridge - n);
  return (
    skyPath(skyBox(0, 0, hw * 0.85, 5)) +
    out +
    skyPath(`M0 ${round(ridge)}V${r(36)}M-6 ${r(9)}H6M-4.5 ${r(16)}H4.5M-3 ${r(23)}H3`, 'fill="none"') +
    skyPath(`M0 ${r(45)}L3.2 ${r(40)}L0 ${r(35)}L-3.2 ${r(40)}Z`)
  );
};

const skyCastle = () => {
  const { out, ridge } = skyStack(
    [
      { bw: 54, bh: 34, hw: 84, rh: 24, posts: 3 },
      { bw: 38, bh: 30, hw: 62, rh: 22, posts: 2 },
      { bw: 24, bh: 26, hw: 44, rh: 26, posts: 1 },
    ],
    -42
  );
  const wall = (s) =>
    skyPath(`M${s * 92} 0V-26H${s * 172}V0`) +
    skyPath(`M${s * 90} -26L${s * 98} -32H${s * 166}L${s * 174} -26`) +
    skyPath(`M${s * 112} 0V-26M${s * 132} 0V-26M${s * 152} 0V-26`, SKY_DASH);
  const r = (n) => round(ridge + n);
  return (
    wall(1) +
    wall(-1) +
    skyPath("M-92 0L-74 -42H74L92 0Z") +
    skyPath("M-86 -14H86M-80 -28H80", 'fill="none" opacity=".6"') +
    out +
    skyPath("M-26 -76Q-8 -78 0 -92Q8 -78 26 -76Z") +
    '<rect x="-2.5" y="-86" width="5" height="5"/>' +
    skyPath(`M-9 ${r(0)}Q-18 ${r(-2)} -15 ${r(-15)}M9 ${r(0)}Q18 ${r(-2)} 15 ${r(-15)}`, 'fill="none"') +
    skyPath(`M0 ${r(0)}V${r(-10)}`, 'fill="none"')
  );
};

const skyTemple = (hw) => {
  const { out, ridge } = skyStack(
    [
      { bw: hw * 0.7, bh: 40, hw, rh: 30, posts: 5 },
      { bw: hw * 0.42, bh: 26, hw: hw * 0.62, rh: 34, posts: 3 },
    ],
    -6
  );
  const tip = round(hw + 13);
  const ring = (s) =>
    `<circle cx="${s * tip}" cy="-54" r="5"/><circle cx="${s * tip}" cy="-54" r="1.8" fill="${SKY_LINE}" stroke="none"/>`;
  return (
    skyPath(skyBox(0, 0, hw * 0.8, 6)) +
    out +
    ring(1) +
    ring(-1) +
    skyPath(`M0 ${round(ridge)}V${round(ridge - 14)}`, 'fill="none"') +
    `<rect x="-3" y="${round(ridge - 20)}" width="6" height="6"/>`
  );
};

const skyTorii = (w, h) => {
  const y0 = -h;
  const post = (s) =>
    skyPath(`M${round(s * (w + 3.5))} 0L${round(s * (w + 0.5))} ${y0}H${round(s * (w - 6.5))}L${round(s * (w - 3.5))} 0`);
  return (
    post(1) +
    post(-1) +
    skyPath(`M${-w + 5} ${y0 + 22}H${w - 5}V${y0 + 28}H${-w + 5}Z`) +
    skyPath(`M0 ${y0 + 6}V${y0 + 22}`, 'fill="none"') +
    `<rect x="-4" y="${y0 + 10}" width="8" height="10"/>` +
    skyPath(`M${-w - 30} ${y0 - 14}Q0 ${y0 + 4} ${w + 30} ${y0 - 14}L${w + 20} ${y0 - 4}Q0 ${y0 + 14} ${-w - 20} ${y0 - 4}Z`)
  );
};

// Row of low machiya townhouses (tile roofs, lattice windows), seeded.
const skyHouses = (x0, x1, seed) => {
  const r = skySeed(seed);
  let out = "", x = x0;
  while (x < x1) {
    const w = 30 + r() * 34;
    const tall = r() > 0.62;
    const bh = (tall ? 38 : 22) + r() * 8;
    const rh = 10 + r() * 7;
    out += skyPath(
      `M${round(x)} 0V${round(-bh)}H${round(x - 5)}L${round(x + w / 2)} ${round(-bh - rh)}L${round(x + w + 5)} ${round(-bh)}H${round(x + w)}V0`
    );
    if (tall) out += skyPath(`M${round(x - 3)} ${round(-bh * 0.5)}H${round(x + w + 3)}`, 'fill="none"');
    out += skyPath(`M${round(x + w * 0.3)} ${round(-bh + 6)}V-4M${round(x + w * 0.7)} ${round(-bh + 6)}V-4`, SKY_DASH);
    x += w + r() * 6;
  }
  return out;
};

// A string of festival lanterns (chochin) hung between two points.
const skyLanterns = (x0, y0, x1, y1, sag, n) => {
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2 + sag * 2;
  const q = (t, a, c, b) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * b;
  const rope = `fill="none" stroke="${SKY_LAMP}" stroke-opacity=".6" stroke-width=".8"`;
  let out = `<path d="M${x0} ${y0}Q${round(cx)} ${round(cy)} ${x1} ${y1}" ${rope}/>`;
  for (let k = 1; k <= n; k++) {
    const t = k / (n + 1);
    const px = round(q(t, x0, cx, x1)), py = round(q(t, y0, cy, y1));
    out += `<path d="M${px} ${py}v5" ${rope}/>`;
    out += `<ellipse cx="${px}" cy="${py + 10}" rx="3.4" ry="5" fill="${SKY_LAMP}" fill-opacity=".85" stroke="none"/>`;
  }
  return out;
};

// Ground line with tick marks, like the base of the track cards.
const skyGround = (w, g) => {
  let ticks = "";
  for (let x = 6; x < w; x += 24) ticks += `M${x} ${g}v${x % 72 === 6 ? 7 : 4}`;
  return (
    skyPath(`M0 ${g}H${w}`, 'fill="none"') +
    skyPath(`M0 ${g + 6}H${w}`, 'fill="none" opacity=".45" stroke-dasharray="14 6"') +
    skyPath(ticks, 'fill="none" opacity=".7"')
  );
};

// Wraps the far + front art with the glow, edge fades and styling. Ids are suffixed per variant.
const skyMarkup = (suffix, w, h, far, front) =>
  `<defs>
    <filter id="tl-sky-blur${suffix}" filterUnits="userSpaceOnUse" x="-20" y="-20" width="${w + 40}" height="${h + 40}"><feGaussianBlur stdDeviation="2.6"/></filter>
    <linearGradient id="tl-sky-hg${suffix}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".12" stop-color="#fff"/><stop offset=".88" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <linearGradient id="tl-sky-vg${suffix}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".15"/><stop offset=".55" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff"/></linearGradient>
    <mask id="tl-sky-hm${suffix}" maskUnits="userSpaceOnUse" x="0" y="0" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="url(#tl-sky-hg${suffix})"/></mask>
    <mask id="tl-sky-vm${suffix}" maskUnits="userSpaceOnUse" x="0" y="0" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="url(#tl-sky-vg${suffix})"/></mask>
    <g id="tl-sky-far${suffix}">${far}</g>
    <g id="tl-sky-front${suffix}">${front}</g>
  </defs>
  <g mask="url(#tl-sky-hm${suffix})"><g mask="url(#tl-sky-vm${suffix})">
    <use href="#tl-sky-far${suffix}" fill="${SKY_FILL}" stroke="${SKY_LINE}" stroke-width="1" stroke-linejoin="round" opacity=".26"/>
    <use href="#tl-sky-front${suffix}" fill="none" stroke="${SKY_LINE}" stroke-width="3.2" opacity=".5" filter="url(#tl-sky-blur${suffix})"/>
    <use href="#tl-sky-front${suffix}" fill="${SKY_FILL}" stroke="${SKY_LINE}" stroke-width="1.25" stroke-linejoin="round" opacity=".6"/>
  </g></g>`.replace(/\n\s*/g, "");

const SKY_DESKTOP = skyMarkup(
  "",
  SKY_W,
  SKY_H,
  [
    skyPlace(120, SKY_G, 0.55, skyPagoda(5, 58, 54)),
    skyPlace(395, SKY_G, 0.5, skyCastle()),
    skyPlace(860, SKY_G, 0.55, skyTemple(150)),
    skyPlace(1085, SKY_G, 0.55, skyPagoda(3, 46, 50)),
    skyPlace(1345, SKY_G, 0.5, skyPagoda(5, 58, 54)),
  ].join(""),
  [
    skyPlace(0, SKY_G, 1, skyHouses(-10, SKY_W + 10, 7)),
    skyPlace(255, SKY_G, 1, skyTemple(150)),
    skyPlace(530, SKY_G, 1, skyPagoda(5, 62, 56)),
    skyPlace(715, SKY_G, 1, skyTorii(44, 88)),
    skyPlace(960, SKY_G, 1, skyCastle()),
    skyPlace(1185, SKY_G, 1, skyPagoda(3, 46, 50)),
    skyPlace(1345, SKY_G, 0.62, skyTemple(150)),
    skyLanterns(418, SKY_G - 54, 455, SKY_G - 35, 8, 2),
    skyLanterns(789, SKY_G - 102, 872, SKY_G - 76, 14, 3),
    skyGround(SKY_W, SKY_G),
  ].join("")
);

const SKY_MOBILE = skyMarkup(
  "-m",
  SKY_MW,
  SKY_MH,
  [
    skyPlace(185, SKY_MG, 0.55, skyPagoda(3, 46, 50)),
    skyPlace(350, SKY_MG, 0.45, skyPagoda(5, 58, 54)),
  ].join(""),
  [
    skyPlace(0, SKY_MG, 0.8, skyHouses(-10, SKY_MW / 0.8 + 10, 11)),
    skyPlace(80, SKY_MG, 1, skyPagoda(4, 40, 50)),
    skyPlace(292, SKY_MG, 0.55, skyCastle()),
    skyGround(SKY_MW, SKY_MG),
  ].join("")
);

/* ---------- Small helpers ---------- */

const normalize = (e, i) => ({
  title: e?.eventTitle || e?.title || `Event ${i + 1}`,
  time: e?.eventTimings || e?.time || "",
  description: e?.eventDescription || e?.description || "",
  misc: e?.miscellaneous ?? e?.misc ?? null,
});

const Misc = ({ misc }) => {
  if (!misc) return null;
  if (Array.isArray(misc)) {
    if (!misc.length) return null;
    return (
      <ul className="tl-misc">
        {misc.map((m, i) => (
          <li key={i}>{typeof m === "string" ? m : JSON.stringify(m)}</li>
        ))}
      </ul>
    );
  }
  if (typeof misc === "object") {
    return (
      <ul className="tl-misc">
        {Object.entries(misc).map(([k, v]) => (
          <li key={k}>
            <span className="tl-misc-key">{k}</span> {String(v)}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="tl-desc">{String(misc)}</p>;
};

function CyberGlyph({ variant }) {
  return (
    <svg className={`tl-cyber-glyph glyph-${variant}`} viewBox="0 0 32 32" aria-hidden="true">
      <path className="glyph-frame" d="M10 2.8h12L29.2 10v12L22 29.2H10L2.8 22V10z" />
      {variant === 0 && (
        <g className="glyph-detail">
          <rect x="9" y="10" width="14" height="13" rx="1" />
          <path d="M12 8v4m8-4v4M9 14h14M12 17h2m4 0h2m-8 3h2m4 0h2" />
        </g>
      )}
      {variant === 1 && (
        <g className="glyph-detail">
          <path d="M16 25s7-7.3 7-12a7 7 0 1 0-14 0c0 4.7 7 12 7 12Z" />
          <circle cx="16" cy="13" r="2.4" />
          <path d="M16 4V2m0 28v-2M4 16H2m28 0h-2" />
        </g>
      )}
      {variant === 2 && (
        <g className="glyph-detail">
          <path d="m10 16 7-7m-7 7 7 7m0-14 6-2m-6 16 6 2" />
          <circle cx="9" cy="16" r="2.5" />
          <circle cx="19" cy="8" r="2.5" />
          <circle cx="19" cy="24" r="2.5" />
        </g>
      )}
    </svg>
  );
}

/* Gradients, glow filter and the strand bundle, shared by the desktop and mobile backdrops. */
const RibbonDefs = ({ suffix, vertical, w, h }) => (
  <defs>
    <linearGradient id={`tl-grad-a${suffix}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={vertical ? 0 : w} y2={vertical ? h : 0}>
      <stop offset="0" stopColor="#ff4fa8" />
      <stop offset=".3" stopColor="#a885ff" />
      <stop offset=".6" stopColor="#5fb2ff" />
      <stop offset="1" stopColor="#3df0f0" />
    </linearGradient>
    <linearGradient id={`tl-grad-b${suffix}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={vertical ? 0 : w} y2={vertical ? h : 0}>
      <stop offset="0" stopColor="#ff4fa8" />
      <stop offset=".55" stopColor="#f05cc0" />
      <stop offset=".75" stopColor="#8f86ff" />
      <stop offset="1" stopColor="#3df0f0" />
    </linearGradient>
    <filter id={`tl-soft${suffix}`} filterUnits="userSpaceOnUse" x={-60} y={-60} width={w + 120} height={h + 120}>
      <feGaussianBlur stdDeviation="8" />
    </filter>
  </defs>
);

const Ribbon = ({ ribbon, suffix }) => (
  <>
    <use href={`#tl-strands${suffix}`} filter={`url(#tl-soft${suffix})`} opacity=".95" />
    <g id={`tl-strands${suffix}`} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {ribbon.strands.map((s, i) => (
        <path key={i} d={s.d} stroke={`url(#tl-grad-${s.g}${suffix})`} strokeWidth={s.w} opacity={s.o} />
      ))}
    </g>
    <g fill="#d8f8ff" opacity=".95">
      {ribbon.beads.map((b, i) => (
        <circle key={i} cx={b.cx} cy={b.cy} r="2.3" />
      ))}
    </g>
  </>
);

const EventTimeline = ({
  title = "Kodikon 6.0",
  subtitle = "Timeline",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  const events = useMemo(() => {
    const source =
      Array.isArray(kodikon4Events) && kodikon4Events.length
        ? kodikon4Events
        : FALLBACK_EVENTS;
    const n = source.length;
    return source.map((e, i) => ({
      ...normalize(e, i),
      ...anchorAt(n === 1 ? 0.5 : i / (n - 1), isMobile),
    }));
  }, [isMobile]);

  const [openIndex, setOpenIndex] = useState(null);
  const hoverCloseTimer = useRef(null);

  const openCard = (index) => {
    window.clearTimeout(hoverCloseTimer.current);
    setOpenIndex(index);
  };

  const closeCardSoon = () => {
    window.clearTimeout(hoverCloseTimer.current);
    hoverCloseTimer.current = window.setTimeout(() => setOpenIndex(null), 250);
  };

  const closeCard = () => {
    window.clearTimeout(hoverCloseTimer.current);
    setOpenIndex(null);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeCard();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(hoverCloseTimer.current);
    };
  }, []);

  return (
    <div id="timeline" className="tl-root">
      <style>{css}</style>

      <div
        className="tl-poster"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeCard();
        }}
      >
        {/* Old-Tokyo skyline outlines, behind the river */}
        <svg
          className="tl-river-bg tl-river-desktop tl-skyline"
          viewBox={`0 0 ${SKY_W} ${SKY_H}`}
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: SKY_DESKTOP }}
        />
        <svg
          className="tl-river-bg tl-river-mobile tl-skyline"
          viewBox={`0 0 ${SKY_MW} ${SKY_MH}`}
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: SKY_MOBILE }}
        />

        {/* Desktop backdrop */}
        <svg className="tl-river-bg tl-river-desktop" viewBox={`0 0 ${DW} ${DH}`} preserveAspectRatio="none" aria-hidden="true">
          <RibbonDefs suffix="" w={DW} h={DH} />
          <Ribbon ribbon={DESKTOP_RIBBON} suffix="" />
        </svg>

        {/* Desktop decor: keeps its proportions so text and circles don't stretch on any screen */}
        <svg className="tl-river-bg tl-river-desktop" viewBox={`0 0 ${DW} ${DH}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <clipPath id="tl-hexclip"><polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" /></clipPath>
          </defs>

          {/* Faint hex map hologram */}
          <g transform="translate(470 150)" opacity=".5">
            <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="rgba(5,8,12,.85)" stroke="#4fb0bd" strokeOpacity=".7" strokeWidth="1.2" />
            <g clipPath="url(#tl-hexclip)" fill="none" strokeWidth=".7">
              <path d="M-60 -20Q-30 -40 -5 -15T60 5" stroke="#b04a8c" opacity=".6" />
              <path d="M-60 25Q-20 5 20 30T60 40" stroke="#7d6cc0" opacity=".6" />
              <path d="M-60 -45Q-10 -55 30 -35T60 -20" stroke="#b04a8c" opacity=".4" />
              <path d="M-10 -60L5 60M25 -60L40 60M-45 -60L-30 60" stroke="#4fb0bd" opacity=".25" />
            </g>
            <polygon points="0,-52 45,-26 45,26 0,52 -45,26 -45,-26" fill="none" stroke="#4fb0bd" strokeOpacity=".35" strokeDasharray="3 4" />
            <path d="M0 12C-8 2-9-3-9-8a9 9 0 0 1 18 0c0 5-1 10-9 20Z" fill="none" stroke="#9fd2da" strokeWidth="1.2" />
            <circle cx="0" cy="-8" r="3.2" fill="none" stroke="#9fd2da" strokeWidth="1.2" />
          </g>

          {/* Ghost katakana / kanji */}
          <g fill="rgba(150,160,170,.28)" fontFamily="'Noto Sans JP','Yu Gothic','Hiragino Sans',sans-serif">
            <text x="545" y="128" fontSize="34">暗号</text>
            <text x="470" y="368" fontSize="25">タイムライン</text>
            <text x="1170" y="400" fontSize="25">タイムライン</text>
          </g>

          {/* Circuit traces */}
          <g fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity=".6">
            <path d="M150 120H205L232 146H268" stroke="#a8437f" />
            <path d="M610 392V366L632 344H690" stroke="#7d6cc0" />
            <path d="M990 300V268L1010 248H1060" stroke="#3a9fae" />
            <path d="M1180 250H1230L1250 232V210H1290" stroke="#3a9fae" />
            <path d="M1340 330V352H1372L1390 368" stroke="#3a9fae" />
          </g>
          <g fill="#05070a" strokeWidth="1.4" opacity=".8">
            <circle cx="268" cy="146" r="3.5" stroke="#a8437f" />
            <circle cx="690" cy="344" r="3.5" stroke="#7d6cc0" />
            <circle cx="1060" cy="248" r="3.5" stroke="#3a9fae" />
            <circle cx="1290" cy="210" r="3.5" stroke="#3a9fae" />
            <circle cx="1390" cy="368" r="3.5" stroke="#3a9fae" />
          </g>

          {/* HUD code blocks */}
          <CodeBlock x={100} y={262} seed={3} rows={7} />
          <CodeBlock x={232} y={178} seed={11} rows={5} />
          <CodeBlock x={650} y={100} seed={21} rows={4} fill="#b04a8c" />
          <CodeBlock x={706} y={386} seed={31} rows={4} />
          <CodeBlock x={1074} y={236} seed={41} rows={5} />
          <CodeBlock x={1300} y={188} seed={51} rows={5} />
        </svg>

        {/* Mobile backdrop */}
        <svg className="tl-river-bg tl-river-mobile" viewBox={`0 0 ${MW} ${MH}`} preserveAspectRatio="none" aria-hidden="true">
          <RibbonDefs suffix="-m" vertical w={MW} h={MH} />
          <g fill="rgba(150,160,170,.28)" fontFamily="'Noto Sans JP','Yu Gothic','Hiragino Sans',sans-serif">
            <text x="22" y="130" fontSize="22">暗号</text>
            <text x="338" y="520" fontSize="18" style={{ writingMode: "vertical-rl" }}>タイムライン</text>
          </g>
          <Ribbon ribbon={MOBILE_RIBBON} suffix="-m" />
          <g fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity=".6">
            <path d="M15 190H55L75 210H110" stroke="#a8437f" />
            <path d="M280 300H325L350 275H380" stroke="#3a9fae" />
            <path d="M8 520H48L68 500H105" stroke="#7d6cc0" />
            <path d="M275 700H320L345 725H385" stroke="#3a9fae" />
          </g>
          <g fill="#05070a" strokeWidth="1.4" opacity=".8">
            <circle cx="110" cy="210" r="3.5" stroke="#a8437f" />
            <circle cx="380" cy="275" r="3.5" stroke="#3a9fae" />
            <circle cx="105" cy="500" r="3.5" stroke="#7d6cc0" />
            <circle cx="385" cy="725" r="3.5" stroke="#3a9fae" />
          </g>
          <CodeBlock x={14} y={240} seed={7} rows={4} />
          <CodeBlock x={300} y={330} seed={17} rows={4} />
          <CodeBlock x={14} y={560} seed={27} rows={4} fill="#b04a8c" />
        </svg>

        <h2 className="tl-title" data-text={title}>{title}</h2>
        <p className="tl-subtitle">{subtitle}</p>

        {events.map((ev, i) => {
          const open = openIndex === i;
          const panelId = `tl-pop-${i}`;
          const sideLeft = ev.x >= 50; // card opens toward the nearer open space
          const up = ev.y > 68; // flip upward near the bottom of the poster
          const vars = { "--x": ev.x, "--y": ev.y };
          return (
            <React.Fragment key={i}>
              <button
                type="button"
                className={`tl-node ${open ? "is-open" : ""}`}
                style={vars}
                aria-expanded={open}
                aria-controls={open ? panelId : undefined}
                aria-label={`${ev.title}${ev.time ? ", " + ev.time : ""}`}
                onMouseEnter={() => openCard(i)}
                onMouseLeave={closeCardSoon}
                onFocus={() => openCard(i)}
                onBlur={closeCardSoon}
                onClick={() => openCard(i)}
              >
                <CyberGlyph variant={i % 3} />
              </button>

              {open && (
                <div
                  id={panelId}
                  role="region"
                  aria-label={ev.title}
                  className={`tl-pop ${sideLeft ? "to-left" : "to-right"} ${up ? "up" : "down"}`}
                  style={vars}
                  onMouseEnter={() => openCard(i)}
                  onMouseLeave={closeCardSoon}
                  onFocusCapture={() => openCard(i)}
                  onBlurCapture={closeCardSoon}
                >
                  <button
                    type="button"
                    className="tl-close"
                    aria-label="Close details"
                    onClick={closeCard}
                  >
                    <span className="tl-plus" aria-hidden="true" />
                  </button>
                  <span className="tl-index">EV_{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="tl-card-title">{ev.title}</h3>
                  {ev.time && <p className="tl-time">{ev.time}</p>}
                  {ev.description ? (
                    <p className="tl-desc">{ev.description}</p>
                  ) : !ev.misc ? (
                    <p className="tl-desc">Details will be announced soon.</p>
                  ) : null}
                  <Misc misc={ev.misc} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400&display=swap');

.tl-root {
  --ink: #e3e6ea;
  --ink-dim: #8d94a0;
  --bg: #000000;
  --panel: rgba(8, 11, 16, .95);
  --magenta: #b04a8c;
  --violet: #7d6cc0;
  --cyan: #4fb0bd;
  --cyan-soft: #8ccbd4;
  --line: rgba(79, 176, 189, .3);
  width: 100%; background: var(--bg); color: var(--ink);
  font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
  padding: 0; display: flex; justify-content: center;
}
.tl-root *, .tl-root *::before, .tl-root *::after { box-sizing: border-box; }

.tl-poster {
  position: relative; width: 100%; height: 100vh; height: 100svh; min-height: 480px;
  container-type: inline-size; overflow: hidden;
  background: radial-gradient(ellipse at 50% 45%, #080b11 0%, #030406 70%);
}
.tl-river-bg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.tl-river-mobile { display: none; }

/* Title: soft chromatic fringe, with a brief glitch now and then */
.tl-title {
  position: absolute; left: 0; right: 0; top: 5%; margin: 0; text-align: center;
  z-index: 2; font-family: 'Orbitron', ui-monospace, monospace; font-style: italic; font-weight: 700; text-transform: uppercase;
  color: #e4dcee;
  text-shadow: -1.5px 0 rgba(176, 74, 140, .55), 1.5px 0 rgba(79, 176, 189, .55), 0 0 18px rgba(125, 108, 192, .3);
  font-size: 3.2cqw; letter-spacing: .5em; padding-left: .5em; line-height: 1; pointer-events: none;
}
.tl-title::before, .tl-title::after {
  content: attr(data-text); position: absolute; left: 0; right: 0; top: 0; padding-left: .5em;
  text-align: center; opacity: 0; text-shadow: none; pointer-events: none;
}
.tl-title::before { color: var(--magenta); animation: tl-glitch-a 7s steps(1) infinite; }
.tl-title::after { color: var(--cyan); animation: tl-glitch-b 7s steps(1) infinite; }
@keyframes tl-glitch-a {
  0%, 90%, 100% { opacity: 0; }
  91% { opacity: .75; transform: translate(-3px, 0); clip-path: inset(10% 0 55% 0); }
  93% { opacity: .75; transform: translate(2px, 0); clip-path: inset(62% 0 6% 0); }
  95% { opacity: 0; }
}
@keyframes tl-glitch-b {
  0%, 90%, 100% { opacity: 0; }
  92% { opacity: .75; transform: translate(3px, 0); clip-path: inset(40% 0 30% 0); }
  94% { opacity: .75; transform: translate(-2px, 0); clip-path: inset(5% 0 75% 0); }
  96% { opacity: 0; }
}

.tl-subtitle {
  position: absolute; left: 0; right: 0; top: 79%; margin: 0; text-align: center;
  z-index: 4; font-family: 'Orbitron', ui-monospace, monospace; font-style: italic; font-weight: 800; text-transform: uppercase;
  color: #9fd3dc;
  text-shadow: 0 0 6px rgba(79, 176, 189, .5), 0 0 24px rgba(79, 176, 189, .28), 0 0 42px rgba(176, 74, 140, .3), -1px 1px 0 rgba(176, 74, 140, .55);
  font-size: 3.6cqw; line-height: 1.12; letter-spacing: .02em; pointer-events: none;
}

/* Anchor nodes: hex glyph inside a slow dashed ring */
.tl-node {
  all: unset; box-sizing: border-box; cursor: pointer;
  position: absolute; left: calc(var(--x) * 1%); top: calc(var(--y) * 1%);
  width: 46px; height: 46px; margin: -23px 0 0 -23px; z-index: 3;
  display: grid; place-items: center;
  background: transparent; border: 0; border-radius: 0;
  transition: filter .18s, transform .18s;
}
.tl-node::before {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  border: 1px dashed rgba(79, 176, 189, .5);
  animation: tl-spin 30s linear infinite;
  transition: border-color .18s;
}
@keyframes tl-spin { to { transform: rotate(360deg); } }
.tl-node:hover { filter: drop-shadow(0 0 6px rgba(79, 176, 189, .6)); transform: scale(1.1); }
.tl-node:focus-visible { outline: 1px solid var(--cyan-soft); outline-offset: 4px; }
.tl-node.is-open { z-index: 6; filter: drop-shadow(0 0 8px rgba(79, 176, 189, .65)) drop-shadow(0 0 14px rgba(176, 74, 140, .35)); }
.tl-node:hover::before, .tl-node.is-open::before { border-color: rgba(176, 74, 140, .75); }

.tl-cyber-glyph { width: 34px; height: 34px; overflow: visible; color: var(--cyan); transition: color .18s, transform .25s; }
.tl-cyber-glyph .glyph-frame { fill: rgba(3, 6, 10, .92); stroke: currentColor; stroke-width: 1.3; }
.tl-cyber-glyph .glyph-detail { fill: none; stroke: currentColor; stroke-width: 1.3; stroke-linecap: square; stroke-linejoin: miter; }
.tl-node:hover .tl-cyber-glyph, .tl-node.is-open .tl-cyber-glyph { color: var(--cyan-soft); transform: rotate(45deg); }
.tl-node.is-open .tl-cyber-glyph .glyph-frame { fill: rgba(79, 176, 189, .16); }

.tl-plus { position: relative; width: 12px; height: 12px; transition: transform .2s; }
.tl-plus::before, .tl-plus::after { content: ""; position: absolute; background: var(--ink); }
.tl-plus::before { left: 0; right: 0; top: 5.5px; height: 1px; }
.tl-plus::after { top: 0; bottom: 0; left: 5.5px; width: 1px; }

/* Expanded details: dark glass panel with clipped HUD corners */
.tl-pop {
  position: absolute; z-index: 5; width: min(320px, 52%);
  background: linear-gradient(150deg, rgba(10, 13, 19, .96), rgba(4, 6, 10, .97));
  border: 1px solid var(--line); padding: 14px 18px 16px;
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
  animation: tl-open .18s ease-out;
}
.tl-pop.to-right { left: calc(var(--x) * 1% + 28px); border-left: 3px solid var(--cyan); transform-origin: left top; }
.tl-pop.to-left { right: calc((100 - var(--x)) * 1% + 28px); border-right: 3px solid var(--magenta); transform-origin: right top; }
.tl-pop.down { top: calc(var(--y) * 1% - 14px); }
.tl-pop.up { bottom: calc((100 - var(--y)) * 1% - 14px); }
@keyframes tl-open { from { opacity: 0; transform: scale(.95); } to { opacity: 1; transform: scale(1); } }

.tl-index { display: block; font-family: 'Orbitron', ui-monospace, monospace; font-size: 10px; letter-spacing: .22em; color: var(--cyan); }
.tl-card-title { margin: 2px 30px 0 0; font-style: italic; font-weight: 700; font-size: 21px; line-height: 1.2; }
.tl-time { margin: 5px 0 0; font-size: 14px; color: var(--cyan-soft); letter-spacing: .06em; }
.tl-desc { margin: 11px 0 0; font-size: 15.5px; line-height: 1.55; color: var(--ink-dim); }
.tl-misc { margin: 11px 0 0; padding: 0; list-style: none; font-size: 14px; color: var(--ink-dim); }
.tl-misc li { position: relative; padding-left: 14px; margin-top: 4px; }
.tl-misc li::before { content: ""; position: absolute; left: 0; top: .6em; width: 6px; height: 1px; background: var(--magenta); }
.tl-misc-key { color: var(--ink); font-weight: 500; }

.tl-close {
  all: unset; box-sizing: border-box; cursor: pointer; position: absolute; top: 12px; right: 18px;
  width: 24px; height: 24px; display: grid; place-items: center;
}
.tl-close:focus-visible { outline: 2px solid var(--cyan-soft); outline-offset: 2px; }
.tl-close .tl-plus { transform: rotate(45deg); }
.tl-close:hover .tl-plus::before, .tl-close:hover .tl-plus::after { background: var(--cyan-soft); }

/* Phones: the poster is narrow, so details span its width */
@media (max-width: 640px) {
  .tl-poster { aspect-ratio: 390 / 900; height: auto; min-height: 100svh; max-width: 100%; }
  .tl-river-desktop { display: none; }
  .tl-river-mobile { display: block; }
  .tl-node { width: 48px; height: 48px; margin: -24px 0 0 -24px; }
  .tl-cyber-glyph { width: 36px; height: 36px; }
  .tl-title { top: 2.5%; font-size: 4.6cqw; letter-spacing: .25em; padding-left: .25em; }
  .tl-title::before, .tl-title::after { padding-left: .25em; }
  .tl-subtitle { top: auto; bottom: 3%; font-size: 5.6cqw; }
  .tl-pop { max-height: 42%; overflow-y: auto; }
  .tl-pop, .tl-pop.to-left, .tl-pop.to-right {
    left: 10px; right: 10px; width: auto; transform-origin: center top;
    border: 1px solid var(--line); border-left: 3px solid var(--cyan);
  }
  .tl-pop.down { top: calc(var(--y) * 1% + 26px); }
  .tl-pop.up { bottom: calc((100 - var(--y)) * 1% + 26px); }
}

@media (prefers-reduced-motion: reduce) {
  .tl-pop { animation: none; }
  .tl-node, .tl-plus { transition: none; }
  .tl-node::before, .tl-title::before, .tl-title::after { animation: none; }
}
`;

export default EventTimeline;
