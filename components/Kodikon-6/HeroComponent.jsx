"use client";

import React, { useEffect, useRef, useState } from "react";

function CircuitBackdrop() {
  const traces = [
    "M72 60h170l44 44h120l38 38v92l-52 52H275l-54 54v92l-44 44H72",
    "M98 82h132l48 48h116l28 28v68l-44 44H268l-68 58v68l-35 35H98",
    "M55 190h114l48 48v84l-42 42H55",
    "M80 340h112l40 40v92l42 42h98l40-40v-56l-30-30",
    "M118 465h100l42 42v67l34 34h82l34-34v-68l44-44h106",
    "M72 630h168l48-48h112l50 50v92l-42 42H270l-48 48H72",
    "M104 654h126l44-44h112l34 34v70l-30 30H277l-43 43H104",
    "M88 790h150l42-42h120l40 40v54l-48 48H88",
    "M140 105h74m42 42h60m-244 90h70m232 94h72m-330 64h70m300 92h72m-224 58h62m-220 108h75m280 75h74m-300 72h60",
  ];
  const nodes = [
    [72,60],[242,60],[286,104],[406,104],[444,142],[444,234],[392,286],[275,286],
    [221,340],[221,432],[177,476],[72,476],[98,82],[230,82],[278,130],[394,130],
    [420,158],[420,226],[376,270],[268,270],[200,328],[200,396],[165,431],[98,431],
    [72,630],[240,630],[288,582],[400,582],[450,632],[450,724],[408,766],[270,766],
    [222,814],[72,862],[88,790],[238,790],[280,748],[400,748],[440,788],[440,842],
  ];
  return (
    <svg className="circuit-backdrop" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="circuit-center-shade">
          <stop offset="0" stopColor="#05060b" stopOpacity=".96" />
          <stop offset=".58" stopColor="#05060b" stopOpacity=".68" />
          <stop offset="1" stopColor="#05060b" stopOpacity=".05" />
        </radialGradient>
        <linearGradient id="circuit-edge-glow" x1="0" x2="1">
          <stop stopColor="#06b6d4" stopOpacity=".48" />
          <stop offset=".5" stopColor="#e2e8f0" stopOpacity=".7" />
          <stop offset="1" stopColor="#0071e3" stopOpacity=".48" />
        </linearGradient>
        <filter id="circuit-light-glow" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="1440" height="900" fill="#08080b" />
      <g fill="none" stroke="url(#circuit-edge-glow)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="square">
        {traces.map((d, i) => <path key={`l-${i}`} d={d} />)}
        {traces.map((d, i) => <path key={`r-${i}`} d={d} transform="translate(1440 0) scale(-1 1)" />)}
      </g>
      <g fill="none" stroke="#dbeafe" strokeOpacity=".58" strokeWidth="1.2">
        {nodes.map(([x, y], i) => <g key={`nl-${i}`}><circle cx={x} cy={y} r="5" /><circle cx={x} cy={y} r="1.3" fill="#dbeafe" /></g>)}
        {nodes.map(([x, y], i) => <g key={`nr-${i}`}><circle cx={1440 - x} cy={y} r="5" /><circle cx={1440 - x} cy={y} r="1.3" fill="#dbeafe" /></g>)}
      </g>
      <g fill="none" stroke="#22d3ee" strokeOpacity=".5" strokeWidth="2">
        <path d="M0 450h170l28 28h90m-288 22h95l22 22h85M0 610h165l32-32h64M0 870h198l25-25h60" />
        <path d="M1440 450h-170l-28 28h-90m288 22h-95l-22 22h-85M1440 610h-165l-32-32h-64M1440 870h-198l-25-25h-60" />
        <path d="M550 0v88l-30 30v74m370-192v88l30 30v74M600 900v-70l40-40h160l40 40v70" />
      </g>
      <rect width="1440" height="900" fill="url(#circuit-center-shade)" />
      {/* Centered red sun and Mount Fuji illustration, layered behind the hero copy. */}
      <g transform="translate(720 450)" opacity=".78">
        <defs>
          <linearGradient id="rising-sun-fill" x1="0" y1="-210" x2="0" y2="210" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff8290" />
            <stop offset=".48" stopColor="#ff294a" />
            <stop offset="1" stopColor="#e11143" />
          </linearGradient>
          <clipPath id="rising-sun-clip"><circle r="320" /></clipPath>
        </defs>
        <circle r="350" fill="#ff173d" opacity=".42" />
        <circle r="320" fill="url(#rising-sun-fill)" stroke="#ff5365" strokeWidth="3" />
        <g clipPath="url(#rising-sun-clip)" fill="#08080b">
          <path d="M-350 18h700v13h-700zm-8 34h716v15h-716zm12 38h692v17h-692zm16 43h660v19h-660zm20 48h620v21h-620zm28 54h564v23h-564z" />
        </g>
        <g clipPath="url(#rising-sun-clip)">
          <path d="M-365 270 -255 200 -215 184 -175 158 -128 145 -93 117 -56 111 -28 91 0 80 24 96 48 111 72 132 102 146 126 170 164 190 193 211 250 239 365 280Z" fill="#08080b" stroke="#05060b" strokeWidth="9" strokeLinejoin="round" />
          <path d="m-116 157 36-28 28-24 28-18 24 23 21-7 31 28 26 16-46-10-31-18-21 14-21-16-26 24-28 18Z" fill="#f8fafc" stroke="#08060b" strokeWidth="8" strokeLinejoin="round" />
          <path d="M-116 157 -80 129 -52 105 -24 87 0 110 21 103 52 131 78 147" fill="none" stroke="#17171c" strokeWidth="6" strokeLinejoin="round" />
          <text x="0" y="242" textAnchor="middle" fill="#ffffff" fontFamily="Orbitron, Arial, sans-serif" fontSize="43" fontWeight="800" letterSpacing="8">fuji</text>
        </g>
        {/* Japanese characters replace the dotted sun rim, arranged as side inscriptions. */}
        <g clipPath="url(#rising-sun-clip)" fill="#08080b" fontFamily="'Noto Sans JP', 'Yu Gothic', sans-serif" fontWeight="800" textAnchor="middle">
          <text x="-265" y="-165" fontSize="35">光</text>
          <text x="-265" y="-112" fontSize="35">ネ</text>
          <text x="-265" y="-59" fontSize="35">オ</text>
          <text x="-265" y="-6" fontSize="35">ン</text>
        </g>
      </g>
      {/* Brief light pulses travel along the board traces, appearing in staggered bursts. */}
      <g fill="#bffaff" filter="url(#circuit-light-glow)">
        <circle r="4">
          <animateMotion dur="8.5s" begin="0s" repeatCount="indefinite" path="M72 60h170l44 44h120l38 38v92l-52 52H275l-54 54v92" />
          <animate attributeName="opacity" dur="8.5s" begin="0s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;.12;.2;.72;.84;1" />
        </circle>
        <circle r="3.5" fill="#ff6680">
          <animateMotion dur="10s" begin="2.2s" repeatCount="indefinite" path="M72 630h168l48-48h112l50 50v92l-42 42H270l-48 48H72" />
          <animate attributeName="opacity" dur="10s" begin="2.2s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;.12;.2;.72;.84;1" />
        </circle>
        <g transform="translate(1440 0) scale(-1 1)">
          <circle r="4">
            <animateMotion dur="9.3s" begin="4.1s" repeatCount="indefinite" path="M72 190h114l48 48v84l-42 42H55" />
            <animate attributeName="opacity" dur="9.3s" begin="4.1s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;.12;.2;.72;.84;1" />
          </circle>
        </g>
        <circle r="3" fill="#ff6680">
          <animateMotion dur="11s" begin="6s" repeatCount="indefinite" path="M88 790h150l42-42h120l40 40v54l-48 48H88" />
          <animate attributeName="opacity" dur="11s" begin="6s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;.12;.2;.72;.84;1" />
        </circle>
      </g>
      <path d="M0 1h1440M0 899h1440" stroke="#94a3b8" strokeOpacity=".28" />
    </svg>
  );
}

/* Static stick-figure marathon runner that sits inside the word HACK|ATHON. */
function Runner() {
  return (
    <svg className="runner" viewBox="0 0 40 56" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="23.9" cy="7.3" r="4.6" />
        <path d="M23.1 12.2 L20 32" />
        <path d="M22.5 16.2 L27.4 23.7 L33.5 20" />
        <path d="M22.5 16.2 L15.9 22.3 L17 31" />
        <path d="M20 32 L27.4 41.5 L32.7 52.3 L37 52.3" />
        <path d="M20 32 L13.6 42.2 L3.4 35.8 L4.2 39.6" />
      </g>
    </svg>
  );
}

export default function HeroComponent() {
  const [pageVisible, setPageVisible] = useState(true);
  const [motionAllowed, setMotionAllowed] = useState(true);
  const [inView, setInView] = useState(true);
  const heroRef = useRef(null);
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotion = () => setMotionAllowed(!media.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);

    updateMotion();
    updateVisibility();

    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      media.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  // Pause every animation (canvases, CSS, clock) once the hero has scrolled out of view.
  useEffect(() => {
    const el = heroRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "80px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Live Tokyo clock for the status bar (stops while the hero is off-screen).
  useEffect(() => {
    if (!inView) return undefined;
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tokyo", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit",
    });
    const tick = () => setClock(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [inView]);

  const animate = pageVisible && motionAllowed && inView;

  return (
    <section
      ref={heroRef}
      className={`living-hero motion-${animate ? "active" : "paused"}`}
    >
      {/* City background */}
      <div className="city-background" aria-hidden="true">
        <CircuitBackdrop />
        <div className="city-vignette" />
      </div>

      {/* Centered hero content */}
      <div className="hero-core">
        <div className="institution">
          <div className="inst-item">
            <span className="inst-text"><span className="live-dot" />PES UNIVERSITY</span>
          </div>
          <span className="institution-divider">/</span>
          <div className="inst-item">
            <span className="inst-text">DEPARTMENT OF CSE</span>
          </div>
        </div>

        <div className="signal-label">
          <span />
          AN EXPERIMENT IN WHAT'S POSSIBLE
          <span />
        </div>

        <h1 className="main-title">
          <span>KODIKON</span>
          <span className="title-version">6.0</span>
        </h1>

        <p className="hero-subtitle">
          24-HOUR FLAGSHIP <span>NATIONAL HACK<Runner />ATHON</span>
        </p>

        <p className="hero-copy">
          Ten million lights. One connected city. Everything begins with an idea.
        </p>
      </div>

      <div className="bottom-status">
        <span className="status-online"><span /> SYSTEM ONLINE</span>
        <span className="status-center">
          {"EDO " + clock + " JST"}
        </span>
        <span>BUILD / BREAK / REPEAT</span>
      </div>

      <style>{`
        /* ============================================================
           KODIKON hero: single consolidated stylesheet
           --u is 1% of the hero height, so type and car scale with the
           screen height and the whole scene fits in one viewport.
           Set --nav-h to your navbar height (0px if there is none).
           ============================================================ */
        .living-hero {
          /* The Embrione design system */
          --canvas: #000000;
          --navy: #000514;
          --surface: #161617;
          --surface-hi: #1d1d1f;
          --slate: #0f172a;
          --divider: #1e293b;
          --blue: #0071e3;
          --blue-hi: #0077ed;
          --cyan: #22d3ee;
          --cyan-deep: #06b6d4;
          --cyan-dark: #0891b2;
          --text: #ffffff;
          --text-2: #a1a1a6;
          --text-3: #6e6e73;
          --line: rgba(255,255,255,.08);
          --line-hi: rgba(255,255,255,.2);
          --pink: #0071e3;   /* secondary accent = Accent Blue */
          --purple: #0891b2; /* tertiary accent = Cyan Dark */
          --nav-h: 62px;
          --hero-h: max(560px, calc(100vh - var(--nav-h)));
          --u: calc(var(--hero-h) / 100);
          position: relative;
          box-sizing: border-box;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: var(--hero-h);
          padding-bottom: 46px;
          overflow: hidden;
          background: #000000;
          color: #ffffff;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }

        @supports (height: 100svh) {
          .living-hero { --hero-h: max(560px, calc(100svh - var(--nav-h))); }
        }

        .living-hero * { box-sizing: border-box; }

        /* ---------- Background ---------- */
        .city-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          background: #000000;
        }

        /* Extra dark veil that fades the whole city once the grid is entered. */
        .city-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 62%, #000514b0 0%, #000514f2 100%);
          opacity: 0;
          transition: opacity 1.3s ease;
          pointer-events: none;
        }
        .is-unlocked .city-background::after { opacity: .85; }

        .tokyo-canvas {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          transform-origin: center bottom;
          transition: filter 1.3s ease, transform 1.3s ease;
        }
        .circuit-backdrop {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          opacity: .86;
          filter: drop-shadow(0 0 4px rgba(148, 163, 184, .18));
        }
        .is-unlocked .tokyo-canvas { transform: scale(1.04); filter: brightness(.32) saturate(.6); }

        .city-vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, #00051450, transparent 30%, #00051435 60%, #000514 100%),
            linear-gradient(90deg, #00051465, transparent 35%, transparent 70%, #00051460);
        }

       

        /* ---------- Hero content (everything scales with --u) ---------- */
        .hero-core {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: min(1100px, 96%);
          margin: 0 auto;
          text-align: center;
          transform: translateY(-10vh);
          transition: transform .7s cubic-bezier(.2,.8,.2,1);
        }

        .is-unlocked .hero-core {
          transform: translateY(-2vh) scale(.78);
          transform-origin: top center;
        }

        .institution {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .8em;
          padding: .8em 1.3em;
          border: 1px solid #1e293b;
          border-radius: 3px;
          background: #0f172a;
          backdrop-filter: blur(14px);
          color: #cbd5e1;
          font: 600 clamp(11px, calc(var(--u) * 2.1), 13.5px) ui-monospace, monospace;
          letter-spacing: .08em;
        }

        .live-dot, .status-online > span {
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 12px var(--cyan);
          animation: dot-pulse 2s infinite;
        }
        .institution-divider { color: var(--pink); align-self: center; }
        .inst-item { display: flex; flex-direction: column; align-items: center; gap: .7em; }
        .inst-text { display: inline-flex; align-items: center; gap: .8em; text-align: center; }

        .signal-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: clamp(10px, calc(var(--u) * 2.6), 26px);
          color: var(--cyan);
          font: 600 clamp(11px, calc(var(--u) * 2.2), 14px) ui-monospace, monospace;
          letter-spacing: .18em;
        }
        .signal-label > span {
          width: clamp(20px, 3vw, 40px);
          height: 1px;
          background: var(--cyan);
          opacity: .7;
        }

        .main-title {
          display: flex;
          align-items: baseline;
          justify-content: center;
          flex-wrap: wrap;
          gap: clamp(8px, 1.2vw, 18px);
          margin: 6px 0 0;
          font-size: clamp(48px, min(calc(var(--u) * 15), 9.6vw), 128px);
          font-weight: 950;
          line-height: .92;
          letter-spacing: -.085em;
        }
        .title-version {
          color: transparent;
          -webkit-text-stroke: 2px var(--cyan);
        }

        .hero-subtitle {
          margin: clamp(8px, calc(var(--u) * 2), 20px) 0 0;
          color: #ffffff;
          font: 500 clamp(14px, calc(var(--u) * 3.3), 22px) ui-monospace, monospace;
          letter-spacing: .04em;
        }
        .hero-subtitle span { color: var(--cyan); }

        /* Marathon runner inside the word HACKATHON (static) */
        .runner {
          display: inline-block;
          height: 1.7em;
          width: auto;
          margin: -.6em .08em;
          vertical-align: -.32em;
          overflow: visible;
          color: var(--cyan);
        }

        .hero-copy {
          max-width: 720px;
          margin: clamp(6px, calc(var(--u) * 1.2), 14px) auto 0;
          color: #a1a1a6;
          font-size: clamp(17px, calc(var(--u) * 3.5), 22px);
          line-height: 1.5;
          text-wrap: balance;
        }

        .enter-button, .reset-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: clamp(12px, calc(var(--u) * 2.6), 24px);
          padding: .95em 1.7em;
          border: 1px solid #06b6d4;
          background: #06b6d4;
          color: #000514;
          font: 800 clamp(12px, calc(var(--u) * 2.5), 14px) ui-monospace, monospace;
          letter-spacing: .12em;
          cursor: pointer;
          clip-path: polygon(0 0, 91% 0, 100% 28%, 100% 100%, 9% 100%, 0 72%);
          transition: transform .2s, box-shadow .2s, background .2s;
        }
        .enter-button:hover, .enter-button:focus-visible {
          outline: none;
          transform: translateY(-3px);
          background: #22d3ee;
          border-color: #22d3ee;
        }
        .button-arrow { font-size: 1.25em; }

        .reset-button {
          background: #0f172a;
          color: var(--cyan);
          clip-path: none;
          border-color: #1e293b;
        }
        .reset-button:hover { background: #1d1d1f; }

        .bottom-status {
          position: absolute;
          right: 0;
          bottom: 14px;
          left: 0;
          z-index: 7;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 0 4%;
          color: #6e6e73;
          font: 600 10px ui-monospace, monospace;
          letter-spacing: .1em;
        }
        .status-online { display: flex; align-items: center; gap: 8px; color: #22d3ee; }

        /* ---------- Motion control ---------- */
        .motion-paused *, .motion-paused *::before, .motion-paused *::after { animation-play-state: paused !important; }

        @media (prefers-reduced-motion: reduce) {
          .ai-caret { animation: none !important; }
          .living-hero *, .living-hero *::before, .living-hero *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }

        /* ---------- Phones: cards zig-zag left / right / left ---------- */
        @media (max-width: 760px) {
          .living-hero { --hero-h: max(640px, calc(100vh - var(--nav-h))); padding-bottom: 40px; }
          @supports (height: 100svh) {
            .living-hero { --hero-h: max(640px, calc(100svh - var(--nav-h))); }
          }

          /* Locked: one screen. Unlocked: taller page so the cards can zig-zag down it. */
          .living-hero.is-unlocked {
            height: auto;
            min-height: 1020px;
            justify-content: flex-start;
            padding-top: 36px;
          }
          .is-unlocked .hero-core { transform: translateY(-10px) scale(.88); }

          .hero-core { width: min(1100px, 96%); margin: 0 auto; }

          .institution { font-size: 11px; padding: .7em 1em; }
          .signal-label { font-size: 10.5px; letter-spacing: .12em; }
          .signal-label > span { width: 16px; }
          .main-title { font-size: clamp(44px, 13vw, 76px); gap: 8px; }
          .hero-subtitle { font-size: clamp(13px, 3.6vw, 17px); }
          .hero-copy { font-size: 17px; padding-inline: 12px; }
          .coordinates { font-size: 10px; gap: 8px; }
          .bottom-status { bottom: 12px; font-size: 9px; }
          .status-center { display: none; }

        }

        @media (max-width: 380px) {
          .institution { gap: 5px; font-size: 9.5px; }
          .main-title { font-size: 44px; }
        }

        /* ---------- Keyframes ---------- */
        @keyframes glow-breathe {
          from { opacity: .1; }
          to { opacity: .2; }
        }
        @keyframes dot-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .35; } }
        @keyframes orbit-spin { to { transform: rotate(360deg); } }
        @keyframes ai-caret { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}

