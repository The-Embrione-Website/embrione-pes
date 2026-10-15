"use client"
import React, { useEffect, useState } from 'react';
import { CalendarDays, MapPin, RotateCcw, Users, Zap } from "lucide-react";

// Helper Components & Assets
import TitleComponent from '../Kodikon-5/HelperComponents/TitleComponent';

// --- Component Data ---
const aboutData = {
  title: "About The Event",
  paragraphs: [
    "Kodikon 6.0, the sixth edition of our 24-hour national-level flagship hackathon, returns in 2026 to bring engineering undergraduates from across the country together at PES University, Bengaluru. This edition builds on a research-driven edge: problem statements rooted in emerging research themes, encouraging participants to draw on academic insight and build solutions that pair creativity with real-world relevance.",

    "Teams of two to four spend an uninterrupted night turning ideas into working prototypes, guided by mentors from industry and academia. Kodikon 6.0 goes beyond coding. It is about innovation, critical thinking and teamwork, and about turning ideas into impactful, research-backed solutions."
  ]
};

const gridCards = [
  {
    number: "01",
    label: "TIME WINDOW",
    title: "24 Hours",
    subtitle: "Overnight sprint",
    detail: "An uninterrupted, in-person sprint from ideas to working prototypes.",
    icon: CalendarDays,
    color: "cyan",
  },
  {
    number: "02",
    label: "LOCATION",
    title: "PESU 52",
    subtitle: "Bengaluru, India",
    detail: "PES University, 100 Feet Ring Road Campus, Bengaluru.",
    icon: MapPin,
    color: "pink",
  },
  {
    number: "03",
    label: "TEAM SIZE",
    title: "2–4 Members",
    subtitle: "Undergraduate teams",
    detail: "Build with a team of undergraduate engineers.",
    icon: Users,
    color: "purple",
  },
];

/* ---------- Floating micro-shards around the About text ---------- */
const floatingShards = [
  { x: "-1%", y: "12%", size: 15, delay: "0s", color: "cyan" },
  { x: "6%", y: "-5%", size: 10, delay: "1.2s", color: "violet" },
  { x: "18%", y: "-9%", size: 8, delay: "2.1s", color: "cyan" },
  { x: "33%", y: "-4%", size: 12, delay: ".7s", color: "violet" },
  { x: "51%", y: "-10%", size: 9, delay: "1.7s", color: "cyan" },
  { x: "69%", y: "-5%", size: 14, delay: "2.6s", color: "violet" },
  { x: "84%", y: "-8%", size: 9, delay: ".4s", color: "cyan" },
  { x: "98%", y: "13%", size: 16, delay: "1.4s", color: "violet" },
  { x: "-3%", y: "34%", size: 10, delay: "2.3s", color: "violet" },
  { x: "101%", y: "42%", size: 12, delay: ".9s", color: "cyan" },
  { x: "-2%", y: "63%", size: 17, delay: "1.8s", color: "cyan" },
  { x: "99%", y: "72%", size: 9, delay: "2.9s", color: "violet" },
  { x: "8%", y: "103%", size: 11, delay: "1.1s", color: "cyan" },
  { x: "24%", y: "108%", size: 8, delay: "2.4s", color: "violet" },
  { x: "43%", y: "104%", size: 14, delay: ".3s", color: "cyan" },
  { x: "62%", y: "109%", size: 10, delay: "1.6s", color: "violet" },
  { x: "78%", y: "103%", size: 13, delay: "2.7s", color: "cyan" },
  { x: "94%", y: "106%", size: 8, delay: ".6s", color: "violet" },
  { x: "14%", y: "23%", size: 7, delay: "1.5s", color: "cyan" },
  { x: "89%", y: "28%", size: 8, delay: "2.2s", color: "violet" },
  { x: "11%", y: "81%", size: 9, delay: ".8s", color: "violet" },
  { x: "87%", y: "88%", size: 11, delay: "1.9s", color: "cyan" },
];

const AboutTheEvent = () => {
  const [gridEntered, setGridEntered] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const resetGrid = () => setGridEntered(false);
    window.addEventListener("kodikon:reset-grid", resetGrid);
    return () => window.removeEventListener("kodikon:reset-grid", resetGrid);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen py-16 sm:py-20 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Fine, low-contrast connection lines across the transparent section */}
      <svg className="about-network-lines" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M-40 170 L130 80 L280 150 L430 42 L610 130 L770 38 L930 145 L1100 55 L1280 155 L1480 65" />
          <path d="M-30 340 L150 250 L320 350 L490 220 L650 315 L820 205 L990 330 L1160 230 L1320 330 L1470 260" />
          <path d="M-20 600 L160 490 L330 610 L500 470 L670 590 L830 465 L1010 600 L1180 480 L1360 590 L1470 530" />
          <path d="M80 -30 L170 150 L100 300 L230 450 L160 620 L270 930" />
          <path d="M410 -30 L500 120 L420 280 L560 420 L470 600 L590 930" />
          <path d="M760 -30 L690 150 L810 300 L720 470 L850 630 L780 930" />
          <path d="M1080 -30 L1180 130 L1080 290 L1220 440 L1130 620 L1270 930" />
          <path d="M-20 430 L210 430 L300 360 L430 360 M980 410 L1110 410 L1200 350 L1460 350" />
          <path d="M250 720 L380 650 L520 720 M900 740 L1040 660 L1190 720" />
        </g>
        <g fill="currentColor">
          <circle cx="130" cy="80" r="2.2" /><circle cx="430" cy="42" r="2" />
          <circle cx="770" cy="38" r="2.2" /><circle cx="1100" cy="55" r="2" />
          <circle cx="150" cy="250" r="2" /><circle cx="820" cy="205" r="2.2" />
          <circle cx="330" cy="610" r="2" /><circle cx="830" cy="465" r="2.2" />
          <circle cx="1180" cy="480" r="2" /><circle cx="500" cy="120" r="1.8" />
          <circle cx="1180" cy="130" r="2" /><circle cx="560" cy="420" r="1.8" />
        </g>
      </svg>
      <div className="relative z-10 flex justify-center items-center">
        <TitleComponent titleData={aboutData.title} />
      </div>

      {/* About copy is replaced by the event cards while the grid is open. */}
      {!gridEntered && (
        <div className="relative z-10 container mx-auto mt-16 lg:mt-20">
          <div className="flex flex-col gap-8">
            <div className="about-copy-wrap relative mx-auto w-full max-w-4xl">
              <div className="about-floating-shards" aria-hidden="true">
                {floatingShards.map((shard, index) => (
                  <span
                    key={index}
                    className={`about-micro-shard ${shard.color}`}
                    style={{
                      "--shard-x": shard.x,
                      "--shard-y": shard.y,
                      "--shard-size": `${shard.size}px`,
                      "--shard-delay": shard.delay,
                    }}
                  />
                ))}
              </div>
              <div className="relative z-10 space-y-4 text-left text-base leading-relaxed text-gray-100 md:text-lg md:leading-relaxed rounded-2xl bg-[#070816]/70 backdrop-blur-sm p-6 md:p-8 border border-violet-400/15">
                {aboutData.paragraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* The event detail cards live here after Enter the Grid is pressed. */}
      <div className="relative z-10 container mx-auto mt-20 lg:mt-16">
        {!gridEntered ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event("kodikon:enter-grid"));
                setGridEntered(true);
              }}
              className="inline-flex items-center gap-3 border border-cyan-300 bg-cyan-300 px-8 py-5 font-mono text-sm font-extrabold tracking-[0.14em] text-slate-950 shadow-[0_0_24px_rgba(85,243,255,0.28)] transition hover:-translate-y-0.5 hover:bg-cyan-100 hover:shadow-[0_0_34px_rgba(85,243,255,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              style={{ clipPath: "polygon(0 0, 91% 0, 100% 28%, 100% 100%, 9% 100%, 0 72%)" }}
            >
              <Zap size={18} />
              ENTER THE GRID
              <span aria-hidden="true" className="text-lg">↗</span>
            </button>
          </div>
        ) : (
          <>
          <div className="about-event-objects objects-visible">
            {gridCards.map((card, index) => {
              const Icon = card.icon;
              const active = activeCard === card.number;
              return (
                <button
                  key={card.number}
                  type="button"
                  className={`event-object ${card.color} ${active ? "object-active" : ""}`}
                  style={{ "--index": index, "--object-delay": `${index * 180}ms` }}
                  aria-expanded={active}
                  onMouseEnter={() => setActiveCard(card.number)}
                  onMouseLeave={() => setActiveCard(null)}
                  onFocus={() => setActiveCard(card.number)}
                  onBlur={() => setActiveCard(null)}
                  onClick={() => setActiveCard(active ? null : card.number)}
                >
                  <span className="object-orbit" />
                  <span className="object-index">{card.number}</span>
                  <span className="object-icon"><Icon size={19} strokeWidth={1.8} /></span>
                  <span className="object-label">{card.label}</span>
                  <span className="object-reveal">
                    <span className="object-title">{card.title}</span>
                    <span className="object-subtitle">{card.subtitle}</span>
                    <span className="object-description">{card.detail}</span>
                  </span>
                  <span className="object-cross">+</span>
                </button>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new Event("kodikon:reset-grid"));
                setGridEntered(false);
                setActiveCard(null);
              }}
              className="inline-flex items-center gap-2 border border-violet-300/60 bg-[#0a0d1b]/90 px-5 py-3 font-mono text-xs font-bold tracking-[0.14em] text-violet-100 transition hover:border-cyan-300 hover:text-cyan-100"
            >
              <RotateCcw size={14} />
              BACK TO ABOUT
            </button>
          </div>
          </>
        )}
      </div>

      <style>{`
        .about-event-objects {
          --cyan: #55f3ff;
          --pink: #ff5bba;
          --purple: #ae8bff;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 380px));
          justify-content: center;
          gap: 32px 48px;
          align-items: center;
          max-width: 860px;
          margin: 0 auto;
        }
        .about-event-objects .event-object {
          --object-color: var(--cyan);
          position: relative;
          justify-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 156px;
          height: 156px;
          min-height: 156px;
          padding: 18px;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--object-color) 78%, transparent);
          border-radius: 3px;
          background:
            radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--object-color) 13%, transparent), transparent 56%),
            linear-gradient(145deg, rgba(10,18,35,.86), rgba(3,6,18,.94));
          color: #fff;
          text-align: center;
          cursor: pointer;
          clip-path: polygon(0 0, 72% 0, 100% 25%, 100% 100%, 25% 100%, 0 75%);
          box-shadow: inset 0 0 24px color-mix(in srgb, var(--object-color) 8%, transparent), 0 0 22px color-mix(in srgb, var(--object-color) 12%, transparent);
          transition: width .38s cubic-bezier(.2,.8,.2,1), height .38s cubic-bezier(.2,.8,.2,1), transform .38s, background .3s, box-shadow .3s, clip-path .38s;
          animation: about-card-arrive .65s cubic-bezier(.16,1,.3,1) var(--object-delay) both;
          isolation: isolate;
        }
        .about-event-objects .event-object:nth-child(2) { --object-color: var(--pink); }
        .about-event-objects .event-object:nth-child(3) {
          --object-color: var(--purple);
          grid-column: 1 / -1;
          justify-self: center;
        }
        .about-event-objects .event-object.cyan { --object-color: var(--cyan); }
        .about-event-objects .event-object.pink { --object-color: var(--pink); }
        .about-event-objects .event-object.purple { --object-color: var(--purple); }
        .about-event-objects .event-object::before,
        .about-event-objects .event-object::after {
          content: "";
          position: absolute;
          z-index: -1;
          pointer-events: none;
        }
        .about-event-objects .event-object::before {
          inset: 14px;
          border: 1px solid color-mix(in srgb, var(--object-color) 35%, transparent);
          clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
          opacity: .9;
        }
        .about-event-objects .event-object::after {
          width: 74px;
          height: 74px;
          border: 1px solid color-mix(in srgb, var(--object-color) 60%, transparent);
          border-radius: 50%;
          box-shadow: 0 0 0 8px color-mix(in srgb, var(--object-color) 5%, transparent), inset 0 0 18px color-mix(in srgb, var(--object-color) 10%, transparent);
          opacity: .75;
          transition: width .38s, height .38s, opacity .25s;
        }
        .about-event-objects .event-object:hover,
        .about-event-objects .event-object:focus-visible,
        .about-event-objects .event-object.object-active {
          z-index: 5;
          width: min(420px, calc(100vw - 40px));
          height: 286px;
          padding: 28px;
          outline: none;
          transform: translateY(-4px);
          clip-path: polygon(0 0, 87% 0, 100% 13%, 100% 87%, 87% 100%, 0 100%, 0 14%);
          background: linear-gradient(145deg, rgba(14,24,43,.98), rgba(4,8,22,.99));
          box-shadow: 0 0 34px color-mix(in srgb, var(--object-color) 22%, transparent), inset 0 0 32px color-mix(in srgb, var(--object-color) 7%, transparent);
        }
        .about-event-objects .event-object:hover::after,
        .about-event-objects .event-object:focus-visible::after,
        .about-event-objects .event-object.object-active::after { width: 180px; height: 180px; opacity: .15; }
        .about-event-objects .object-orbit {
          position: absolute;
          width: 88px;
          height: 88px;
          border: 1px dashed var(--object-color);
          border-radius: 50%;
          opacity: .62;
          animation: about-orbit-spin 16s linear infinite;
          pointer-events: none;
          transition: width .38s, height .38s, opacity .25s;
        }
        .about-event-objects .event-object:hover .object-orbit,
        .about-event-objects .event-object:focus-visible .object-orbit,
        .about-event-objects .event-object.object-active .object-orbit { width: 200px; height: 200px; opacity: .17; }
        .about-event-objects .object-icon {
          z-index: 1;
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          border: 1px solid var(--object-color);
          border-radius: 50%;
          color: var(--object-color);
          background: rgba(3,8,20,.88);
          box-shadow: 0 0 18px color-mix(in srgb, var(--object-color) 22%, transparent);
          transition: transform .45s, background .3s, box-shadow .3s;
        }
        .about-event-objects .event-object:hover .object-icon,
        .about-event-objects .event-object:focus-visible .object-icon,
        .about-event-objects .event-object.object-active .object-icon {
          transform: translateY(-3px) scale(.9);
          background: color-mix(in srgb, var(--object-color) 14%, #030814);
          box-shadow: 0 0 24px color-mix(in srgb, var(--object-color) 35%, transparent);
        }
        .about-event-objects .object-index { position: absolute; top: 12px; left: 15px; color: #b8c3da; font: 600 11px ui-monospace, monospace; letter-spacing: .12em; }
        .about-event-objects .object-label { z-index: 1; margin-top: 2px; color: var(--object-color); font: 700 10px ui-monospace, monospace; letter-spacing: .15em; }
        .about-event-objects .object-reveal {
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          max-height: 0;
          width: 100%;
          opacity: 0;
          overflow: hidden;
          transform: translateY(10px);
          transition: max-height .32s ease, opacity .25s ease, transform .3s ease;
        }
        .about-event-objects .event-object:hover .object-reveal,
        .about-event-objects .event-object:focus-visible .object-reveal,
        .about-event-objects .event-object.object-active .object-reveal {
          max-height: 190px;
          opacity: 1;
          transform: translateY(0);
        }
        .about-event-objects .event-object:hover .object-label,
        .about-event-objects .event-object:focus-visible .object-label,
        .about-event-objects .event-object.object-active .object-label { margin-top: -2px; }
        .about-event-objects .object-title { color: #fff; font-size: clamp(25px, 2.2vw, 30px); font-weight: 800; letter-spacing: -.04em; line-height: 1.15; }
        .about-event-objects .object-subtitle { color: var(--object-color); font-size: 16px; font-weight: 700; }
        .about-event-objects .object-description { margin-top: 7px; color: #d0d8ea; font-size: 15px; line-height: 1.6; max-width: 340px; }
        .about-event-objects .object-cross { position: absolute; right: 14px; bottom: 10px; color: var(--object-color); font: 16px ui-monospace, monospace; }
        @media (max-width: 760px) {
          .about-event-objects { grid-template-columns: minmax(0, 1fr); gap: 24px; max-width: 400px; }
          .about-event-objects .event-object,
          .about-event-objects .event-object:nth-child(3) { grid-column: auto; width: 164px; height: 164px; }
          .about-event-objects .event-object:hover,
          .about-event-objects .event-object:focus-visible,
          .about-event-objects .event-object.object-active { width: min(380px, calc(100vw - 32px)); height: 280px; padding: 24px; }
        }
        @keyframes about-card-arrive { from { opacity: 0; transform: translateY(12px) scale(.92); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes about-orbit-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .about-event-objects .event-object, .about-event-objects .object-orbit { animation: none !important; }
          .about-event-objects .event-object { opacity: 1; }
          .about-event-objects .event-object, .about-event-objects .object-reveal { transition: none !important; }
        }
        .about-network-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          color: rgba(220, 235, 255, 0.13);
          opacity: .78;
        }
        .about-network-lines g:first-child { stroke-dasharray: 3 7; }
        .about-network-lines g:last-child { opacity: .55; }
        .about-copy-wrap { isolation: isolate; }
        .about-floating-shards {
          position: absolute;
          inset: -30px -34px;
          z-index: 20;
          pointer-events: none;
          overflow: visible;
        }
        .about-micro-shard {
          position: absolute;
          left: var(--shard-x);
          top: var(--shard-y);
          width: var(--shard-size);
          height: calc(var(--shard-size) * 1.8);
          opacity: .9;
          clip-path: polygon(50% 0, 100% 38%, 67% 100%, 0 64%);
          animation: about-shard-float 5.8s ease-in-out var(--shard-delay) infinite;
          filter: drop-shadow(0 0 7px currentColor);
        }
        .about-micro-shard.cyan { color: #55f3ff; background: linear-gradient(145deg, #efffff, #22d3ee 65%, #0891b2); }
        .about-micro-shard.violet { color: #ae8bff; background: linear-gradient(145deg, #ffffff, #a78bfa 60%, #6d28d9); }
        @keyframes about-shard-float {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: .65; }
          50% { transform: translate3d(9px, -16px, 0) rotate(28deg); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-micro-shard { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default AboutTheEvent;
