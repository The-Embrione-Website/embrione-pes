import React from "react";
import { DRAGON } from "./dragonGeometry";

// Profile points forward along +X. The neck joins the body at (0, 0).
// These are illustration coordinates, independent of scroll or card layout.
export function DragonProfile() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Swept, layered mane; dark negative space separates it from the tower. */}
      <path d="M25 -27 C5 -53 -14 -30 -36 -45 C-27 -31 -13 -26 -25 -20 L-43 -24 Q-34 -7 -17 -7 L-34 7 Q-13 6 -18 23 L-37 28 Q-11 37 10 20 L32 3Z" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.7" />
      <g fill="none" stroke={DRAGON.blue} strokeWidth="1.1">
        <path d="M17 -25 Q-5 -36 -25 -36 M13 -18 Q-9 -24 -29 -17 M11 -7 Q-7 -11 -23 -2 M14 3 Q-2 12 -18 16 M17 10 Q4 26 -22 28" />
        <path d="M-11 -34 Q-5 -22 7 -18 M-19 -17 Q-10 -6 3 -3 M-22 26 Q-7 23 2 12" />
      </g>
      {/* Branching antler-like horns, mainly cyan with amber inner ridges. */}
      <path d="M24 -26 C18 -44 4 -47 2 -66 Q11 -62 15 -52 L18 -70 Q24 -64 22 -50 Q32 -43 33 -29Z" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.65" />
      <path d="M42 -30 Q43 -49 32 -62 Q44 -60 48 -49 L55 -62 Q58 -52 51 -43 L51 -30" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.5" />
      <path d="M28 -30 Q24 -44 17 -48 M47 -33 Q49 -43 44 -51" fill="none" stroke={DRAGON.amber} strokeWidth="1.4" />
      {/* Ear, cheek plates, long bridge and blunt, flared muzzle. */}
      <path d="M16 -17 Q-2 -29 -10 -20 L4 -5Z" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.5" />
      <path d="M19 -23 Q32 -38 48 -29 Q58 -26 62 -15 L78 -13 Q83 -23 91 -16 Q98 -9 91 0 L86 5 Q92 12 83 16 L60 17 Q50 30 33 25 Q15 23 10 10 Q4 -9 19 -23Z" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="2.15" />
      <path d="M15 -18 Q22 -24 26 -15 M15 0 Q23 -11 32 -3 Q28 9 18 12 M26 15 Q39 24 49 14 M44 18 Q52 13 59 12" fill="none" stroke={DRAGON.blue} strokeWidth="1.2" />
      {/* Angry brows and bright, directional pupil. */}
      <path d="M30 -18 Q41 -29 57 -17 Q43 -21 33 -13" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="2" />
      <path d="M33 -12 Q44 -19 54 -10 Q44 -5 35 -7Z" fill="#09232b" stroke={DRAGON.amber} strokeWidth="1.3" />
      <ellipse cx="48" cy="-11" rx="2.4" ry="4" fill={DRAGON.amber} stroke="none" />
      <circle cx="49" cy="-12.5" r=".8" fill="#fff6c7" stroke="none" />
      <path d="M57 -9 Q65 -6 77 -8 M82 -10 Q87 -13 89 -8 M86 -5 L90 -5" fill="none" stroke={DRAGON.cyan} strokeWidth="1.5" />
      {/* Split lip, fangs and chin beard. */}
      <path d="M50 4 Q68 9 88 3 M55 6 L58 13 L61 7 M78 7 L79 12 L83 6" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.25" />
      <path d="M48 22 Q44 39 25 42 Q34 31 32 25 M56 19 Q60 35 48 42 Q52 29 45 26" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.2" />
      {/* Fine facial scales. */}
      <g fill="none" stroke={DRAGON.blue} strokeWidth=".85">
        <path d="M25 -6 q5 -6 10 -2 M22 1 q5 -6 10 -2 M24 8 q5 -5 10 -1 M33 11 q5 -5 10 -1 M36 -29 q3 5 7 3 M47 -26 q3 5 7 3 M60 -12 l5 -3" />
      </g>
      {/* Long, weightless whiskers with deliberately unequal curves. */}
      <g fill="none" stroke={DRAGON.cyan} strokeWidth="1.25">
        <path d="M79 1 C103 -5 113 14 101 29 C86 47 50 36 31 53 C24 60 27 66 33 66" />
        <path d="M77 3 C92 19 87 35 64 40 C39 46 9 34 -5 49 C-10 55 -7 59 -2 59" />
        <path d="M82 -14 C99 -32 109 -22 111 -38 Q112 -47 104 -48" strokeWidth=".8" />
      </g>
      <path d="M31 53 Q24 60 33 66 M-5 49 Q-10 55 -2 59" fill="none" stroke={DRAGON.amber} strokeWidth=".9" />
    </g>
  );
}

// A bilateral three-quarter turning silhouette fills the profile's yaw turn.
// The controller blends it only in transit; settled profiles stay upright.
export function DragonTurningFace() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path d="M0 -12 Q-15 -26 -30 -26 L-16 -13 L-31 0 L-16 13 L-30 26 Q-12 27 0 12 L20 21 L46 25 L65 17 Q81 18 91 7 L91 -7 Q81 -18 65 -17 L46 -25 L20 -21Z" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.7" />
      <path d="M22 -17 Q7 -40 -12 -41 L-3 -31 L-20 -36 Q-8 -20 18 -9 M22 17 Q7 40 -12 41 L-3 31 L-20 36 Q-8 20 18 9" fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.4" />
      <path d="M30 -18 Q43 -23 58 -13 M30 18 Q43 23 58 13 M60 -13 L78 -7 M60 13 L78 7 M82 -7 L87 -4 M82 7 L87 4" fill="none" stroke={DRAGON.blue} strokeWidth="1.5" />
      <path d="M36 -14 Q47 -19 54 -11 Q44 -7 36 -14 M36 14 Q47 19 54 11 Q44 7 36 14" fill={DRAGON.amber} stroke={DRAGON.amber} strokeWidth="1" />
      <path d="M48 -15 l1 4 M48 15 l1 -4" stroke={DRAGON.ink} strokeWidth="2" />
      <path d="M24 -6 Q41 -11 64 -4 M24 6 Q41 11 64 4 M67 0 L86 0" fill="none" stroke={DRAGON.cyan} strokeWidth="1" />
      <path d="M79 -8 C106 -35 64 -54 38 -42 S-7 -54 -12 -49 M79 8 C106 35 64 54 38 42 S-7 54 -12 49" fill="none" stroke={DRAGON.cyan} strokeWidth="1.1" />
    </g>
  );
}

export function DragonClaw() {
  return (
    <g fill={DRAGON.ink} stroke={DRAGON.cyan} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M0 0 Q-17 3 -21 18 L-12 26 Q0 24 9 35 L15 31 Q4 12 -9 13 Q-7 6 3 5Z" />
      <path d="M9 30 Q24 29 26 40 Q19 36 14 37 M9 34 Q20 41 15 49 Q13 43 6 40 M4 33 Q7 47 -2 49 L-2 38" />
      <path d="M-14 14 l4 5 M-17 19 l6 4" stroke={DRAGON.blue} strokeWidth=".8" />
      <path d="M23 36 L26 40 M15 45 L15 49 M1 47 L-2 49" stroke={DRAGON.amber} strokeWidth="1.2" />
    </g>
  );
}

export function DragonTail() {
  return (
    <g fill={DRAGON.ink} stroke={DRAGON.blue} strokeWidth="1.2" strokeLinejoin="round">
      <path d="M0 0 Q-18 -9 -32 -4 Q-23 -1 -19 3 L-40 9 Q-24 12 -13 6 L-24 20 Q-9 16 0 0Z" />
      <path d="M-2 1 Q-18 5 -32 9" fill="none" stroke={DRAGON.cyan} />
    </g>
  );
}
