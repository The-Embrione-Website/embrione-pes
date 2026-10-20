
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Award,
  Users,
} from "lucide-react";
import pesLogo from "@/assets/PES_LogoWhite.webp";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Cursor-following glow for the dotted background.
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--glow-x",
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      "--glow-y",
      `${event.clientY - rect.top}px`
    );

    event.currentTarget.style.setProperty("--glow-opacity", "1");
  };

  const handlePointerLeave = (event) => {
    event.currentTarget.style.setProperty("--glow-opacity", "0");
  };

  // Shared outlined cyan button style.
  const outlineButton =
    "group inline-flex items-center justify-center gap-2 rounded-full " +
    "border border-cyan-400/30 bg-white/[0.035] px-6 sm:px-7 py-3.5 " +
    "text-sm font-semibold tracking-wide text-cyan-200 " +
    "transition-all duration-300 hover:border-cyan-300/70 " +
    "hover:bg-cyan-400/10 hover:text-white " +
    "hover:shadow-[0_0_24px_rgba(6,182,212,0.12)] " +
    "active:scale-[0.98]";

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-36 pb-28 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden"
    >
      {/* Ambient cyan horizon lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1200px] h-[500px] sm:h-[650px] pointer-events-none opacity-25 blur-[160px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.22) 0%, rgba(37,99,235,0.12) 40%, transparent 70%)",
        }}
      />

      {/* Subtle top hairline */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
      />

      {/* Cursor-following blue glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(240px circle at var(--glow-x, 50%) var(--glow-y, 40%), rgba(6,182,212,0.19), rgba(37,99,235,0.07) 45%, transparent 78%)",
          opacity: "var(--glow-opacity, 0)",
        }}
      />

      {/* Dotted texture — remains visible above the glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_50%,transparent_100%)]"
      />

      {/* Particle JS background network & interactive hover effect */}
      <ParticleBackground containerRef={sectionRef} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        
{/* PES University logo and department label */}
<motion.div
  variants={itemVariants}
  className="mb-7 flex flex-col items-center gap-3"
>
  <div className="relative w-36 h-20 sm:w-48 sm:h-[106px]">
    <Image
      src={pesLogo}
      alt="PES University"
      fill
      priority
      sizes="(max-width: 640px) 144px, 192px"
      className="object-contain"
    />
  </div>

  <span className="text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium text-slate-300">
    PES University | Department of CSE
  </span>
</motion.div>


        {/* Hero title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-[-0.035em] text-white leading-[1.02]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300">
              The{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300">
              Embrione
            </span>
          </h1>
        </motion.div>

        {/* Hero description */}
        <motion.div variants={itemVariants} className="mt-6 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-normal tracking-[-0.015em] leading-snug">
            Computing, Development &amp; Innovation.
          </p>

          <p className="mt-3.5 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            The technical community of PES University, bringing together
            developers, problem-solvers and tech enthusiasts through projects,
            collaborations and hosting{" "}<br/>
            <Link
              href="/kodikon-6"
              className="text-cyan-300 font-medium transition-colors hover:text-white"
            >
              Kodikon 6.0
            </Link>
          </p>
        </motion.div>

        {/* Updated themed buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          
<Link
  href="/kodikon-6"
  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold tracking-wide border border-cyan-300/40 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.28)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:scale-[0.98]"
>
  <span>Explore Kodikon 6.0</span>
  <ChevronRight
    size={16}
    className="transition-transform group-hover:translate-x-1"
  />
</Link>


          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.035] px-6 sm:px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-white active:scale-[0.98]"
          >
            About The Society
          </a>
        </motion.div>

        {/* Kodikon 6.0 spotlight card */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 w-full max-w-3xl"
        >
          <Link
            href="/kodikon-6"
            className="group relative block p-7 sm:p-9 rounded-3xl bg-[#040816]/90 hover:bg-[#060c20]/95 border border-white/[0.08] hover:border-cyan-400/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-500 text-left backdrop-blur-2xl overflow-hidden"
          >
            {/* Card ambient light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.07] rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/[0.12] transition-all duration-500" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/35 text-emerald-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Ongoing Now · 24H National Sprint</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Kodikon 6.0
                </h3>

                <p className="mt-2.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                  An intensive 24-hour overnight offline hackathon happening
                  now at PESU 52, PES University. Built for builders solving
                  hard problems.
                </p>
              </div>

              {/* Outlined portal button */}
              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-white/[0.035] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition-all duration-300 group-hover:border-cyan-300/70 group-hover:bg-cyan-400/10 group-hover:text-white">
                  <span>Enter Portal</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </div>

            {/* Event information grid */}
            <div className="relative z-10 mt-7 pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-cyan-400/20 transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Clock size={13} className="text-cyan-400" />
                  <span>Duration</span>
                </div>
                <span className="text-white font-semibold text-sm">
                  24h Overnight
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-cyan-400/20 transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Award size={13} className="text-cyan-400" />
                  <span>Prize Pool</span>
                </div>
                <span className="text-white font-semibold text-sm">
                  ₹1,50,000 Cash
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-cyan-400/20 transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Venue</span>
                </div>
                <span className="text-white font-semibold text-sm">
                  PESU 52
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-cyan-400/20 transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Users size={13} className="text-cyan-400" />
                  <span>Eligibility</span>
                </div>
                <span className="text-white font-semibold text-sm">
                  National UG
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Fade into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-black"
      />
    </section>
  );
}
