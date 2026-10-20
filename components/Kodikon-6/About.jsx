
"use client";

import { ArrowUpRight } from "lucide-react";

const tracks = [
  {
    number: "01",
    code: "INTERFACE.SYS",
    title: "Human-Machine Interfaces",
    description:
      "Build intuitive, adaptive interfaces using computer vision, gestures, voice, eye tracking, biometrics, and wearables.",
    symbol: "◉",
  },
  {
    number: "02",
    code: "AUTONOMOUS.NET",
    title: "Autonomous Economy",
    description:
      "Create systems where autonomous agents discover services, negotiate terms, allocate resources, and execute transactions.",
    symbol: "⌘",
  },
  {
    number: "03",
    code: "CYBER.DEFENSE",
    title: "Zero-Expertise Cyber Defense",
    description:
      "Make cybersecurity accessible through intelligent threat detection, clear explanations, and actionable protection.",
    symbol: "⬡",
  },
  {
    number: "04",
    code: "HARDWARE.LAB",
    title: "Hardware & Embedded Innovation",
    description:
      "Enable remote programming, execution, monitoring, and debugging of embedded devices through collaborative tools.",
    symbol: "⌬",
  },
];

function SkylineIllustration() {
  return (
    <svg
      viewBox="0 0 500 390"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Decorative futuristic skyline illustration"
      role="img"
    >
      <defs>
        <linearGradient id="towerGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity=".9" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity=".15" />
        </linearGradient>
        <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#082B48" stopOpacity=".3" />
          <stop offset="100%" stopColor="#020617" stopOpacity=".95" />
        </linearGradient>
      </defs>

      <circle cx="250" cy="190" r="145" stroke="#22D3EE" strokeOpacity=".1" />
      <circle cx="250" cy="190" r="115" stroke="#22D3EE" strokeOpacity=".15" strokeDasharray="3 7" />

      {/* Moon */}
      <circle cx="350" cy="75" r="32" fill="#22D3EE" fillOpacity=".08" />
      <circle cx="350" cy="75" r="32" stroke="#22D3EE" strokeOpacity=".45" />

      {/* Distant skyline */}
      <path
        d="M0 270V185H35V225H62V150H85V240H108V180H135V270H0Z"
        fill="#08243B"
        stroke="#155E75"
        strokeOpacity=".6"
      />
      <path
        d="M365 270V180H390V225H415V145H440V205H466V185H500V270H365Z"
        fill="#08243B"
        stroke="#155E75"
        strokeOpacity=".6"
      />

      {/* Building windows */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 3 }).map((__, col) => (
          <rect
            key={`left-${row}-${col}`}
            x={68 + col * 9}
            y={165 + row * 17}
            width="3"
            height="6"
            fill="#22D3EE"
            opacity={(row + col) % 2 === 0 ? 0.8 : 0.2}
          />
        ))
      )}

      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 3 }).map((__, col) => (
          <rect
            key={`right-${row}-${col}`}
            x={421 + col * 9}
            y={160 + row * 17}
            width="3"
            height="6"
            fill="#22D3EE"
            opacity={(row + col) % 2 === 0 ? 0.8 : 0.2}
          />
        ))
      )}

      {/* Tower-inspired centerpiece */}
      <path
        d="M250 70L215 275H285L250 70Z"
        fill="url(#towerGlow)"
        fillOpacity=".16"
        stroke="url(#towerGlow)"
        strokeWidth="1.6"
      />
      <path
        d="M250 70L225 275M250 70L275 275M232 175H268M225 220H275M219 255H281"
        stroke="#22D3EE"
        strokeOpacity=".8"
        strokeWidth="1.4"
      />
      <path d="M250 70V38" stroke="#67E8F9" strokeWidth="2" />
      <circle cx="250" cy="35" r="4" fill="#22D3EE" />
      <path
        d="M205 275H295L310 291H190L205 275Z"
        fill="#0E7490"
        fillOpacity=".4"
        stroke="#22D3EE"
        strokeOpacity=".65"
      />

      {/* Neon skyline foreground */}
      <path
        d="M0 300H500"
        stroke="#22D3EE"
        strokeOpacity=".5"
      />
      <path
        d="M0 307H500"
        stroke="#22D3EE"
        strokeOpacity=".12"
      />

      <path
        d="M20 300V245H58V300M82 300V215H118V300M380 300V235H416V300M435 300V250H480V300"
        stroke="#22D3EE"
        strokeOpacity=".5"
      />

      {/* Circuit paths */}
      <path
        d="M30 330H105V348H155M470 325H400V350H350"
        stroke="#22D3EE"
        strokeOpacity=".45"
        strokeWidth="1.3"
      />
      <circle cx="155" cy="348" r="3" fill="#22D3EE" />
      <circle cx="350" cy="350" r="3" fill="#22D3EE" />

      <text
        x="250"
        y="375"
        textAnchor="middle"
        fill="#67E8F9"
        fontSize="10"
        letterSpacing="4"
      >
        KODIKON // FUTURE SYSTEMS
      </text>
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 sm:scroll-mt-24 relative isolate w-full overflow-hidden bg-[#000514] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-200 sm:text-xs">
              KODIKON_6.0 // EVENT_INTELLIGENCE
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Beyond the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Code
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            24 hours. Four frontier technology tracks. One environment built
            for turning ambitious ideas into working prototypes.
          </p>
        </div>

        {/* Event overview */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="font-mono text-[10px] tracking-[0.22em] text-cyan-300 sm:text-xs">
                01 / THE MISSION
              </span>
            </div>

            <h3 className="max-w-xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Engineering the next generation of{" "}
              <span className="text-cyan-300">intelligent systems.</span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Kodikon 6.0 is a 24-hour national-level collegiate hackathon
              organised by Embrione. It brings together student innovators to
              tackle research-driven challenges across emerging areas of
              technology.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              From intuitive human-machine interfaces and autonomous digital
              economies to accessible cyber defense and embedded hardware,
              participants turn complex problem statements into practical
              prototypes. With industry-informed challenges, mentor guidance,
              and a focus on real-world relevance, Kodikon is where ideas move
              from concept to creation.
            </p>

            {/* Event tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "RESEARCH-DRIVEN",
                "INDUSTRY MENTORSHIP",
                "RAPID PROTOTYPING",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-2 font-mono text-[9px] tracking-[0.12em] text-cyan-100/80 sm:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Skyline illustration panel */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="relative overflow-hidden rounded-xl border border-brand-border-subtle bg-brand-surface p-3 sm:p-5">
              <div className="flex items-center justify-between border-b border-brand-border-divider px-3 py-3">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  PESU_NODE // 12.9344° N
                </span>
                <span className="flex items-center gap-2 font-mono text-xs text-brand-accent-cyan-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-cyan-glow" />
                  ONLINE
                </span>
              </div>

              <div className="relative aspect-[5/4]">
                <SkylineIllustration />
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-brand-border-divider px-3 py-3">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  EVENT STATUS
                </span>
                <span className="font-mono text-xs text-brand-accent-cyan">
                  INNOVATION ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-24">
          {[
            {
              value: "24",
              unit: "HOURS",
              title: "Continuous Innovation",
              detail: "One intensive hackathon",
            },
            {
              value: "04",
              unit: "TRACKS",
              title: "Frontier Challenges",
              detail: "Four emerging technology domains",
            },
            {
              value: "01",
              unit: "MISSION",
              title: "Ideas Into Prototypes",
              detail: "Build solutions with real-world relevance",
            },
          ].map((stat, index) => (
            <div
              key={stat.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080e1b]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-7"
            >
              <span className="absolute right-4 top-3 font-mono text-[10px] text-slate-700">
                0{index + 1}
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black tracking-tight text-cyan-300 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500">
                  {stat.unit}
                </span>
              </div>

              <h4 className="mt-4 text-base font-bold text-white">
                {stat.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {stat.detail}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>
          ))}
        </div>

        

        {/* Closing statement */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-950/40 via-[#071225] to-blue-950/30 px-6 py-8 text-center sm:mt-20 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-96 max-w-full -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[60px]" />

          <p className="relative font-mono text-[10px] tracking-[0.2em] text-cyan-300 sm:text-xs">
            THE FUTURE IS BUILT, NOT PREDICTED
          </p>

          <h3 className="relative mt-4 text-2xl font-black sm:text-3xl md:text-4xl">
            Think beyond limits.{" "}
            <span className="text-cyan-300">Build what&apos;s next.</span>
          </h3>

          <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Bring your ideas, collaborate with fellow engineers, and turn
            emerging technology challenges into tangible solutions.
          </p>

          <div className="relative mt-7 flex justify-center">
            <a
              href="https://hack2skill.com/event/kodikon6/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all duration-300 hover:from-cyan-300 hover:to-teal-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:-translate-y-0.5"
            >
              <span>Register on Hack2Skill</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
