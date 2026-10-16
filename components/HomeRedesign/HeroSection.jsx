"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[94vh] flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden">
      {/* Tokyo Cyberpunk Ambient Glow Layers */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[450px] sm:h-[600px] pointer-events-none opacity-40 blur-[130px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.28) 0%, rgba(30, 64, 175, 0.16) 45%, rgba(245, 158, 11, 0.05) 70%, transparent 85%)",
        }}
      />

      {/* Subtle 56px Cyberpunk Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Cyber Neon Top Horizon Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        {/* Eyebrow: Tokyo Cyberpunk Institutional Header */}
        <motion.div variants={itemVariants} className="mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#060c1d]/90 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.22em] text-slate-300">
              PES UNIVERSITY // DEPARTMENT OF CSE
            </span>
            <span className="text-cyan-500/50">|</span>
            <span className="font-mono text-[10px] text-amber-300 font-bold tracking-widest">
              「電脳結社」
            </span>
          </div>
        </motion.div>

        {/* Hero Title: Clean Monumental Cyberpunk Title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-white leading-[1.04]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              Embrione
            </span>
          </h1>
        </motion.div>

        {/* Subheading: Clean editorial copy with Tokyo cyberpunk touch */}
        <motion.div variants={itemVariants} className="mt-4 sm:mt-6 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-normal tracking-tight leading-snug">
            Technical computing vertical under CSE, PES University.
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            Builders of research-grounded architectures and hosts of{" "}
            <strong className="text-cyan-300 font-medium">Kodikon 6.0</strong>, South India&apos;s premier 24-hour national hackathon.
          </p>
        </motion.div>

        {/* Tokyo Cyberpunk Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/kodikon-6"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-black text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:-translate-y-0.5"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span>Explore Kodikon 6.0</span>
            <ChevronRight size={15} />
          </Link>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-md bg-[#081022]/80 hover:bg-[#0e1935] text-slate-200 hover:text-white text-xs sm:text-sm font-mono font-medium uppercase tracking-wider border border-cyan-500/25 hover:border-cyan-400/50 transition-all backdrop-blur-md hover:-translate-y-0.5"
          >
            <span>About The Society</span>
          </a>

          <a
            href="#events"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-mono text-slate-400 hover:text-cyan-300 px-3 py-2 transition-colors uppercase tracking-wider"
          >
            <span>Past Editions</span>
            <ChevronRight size={14} className="text-cyan-500/70" />
          </a>
        </motion.div>

        {/* Tokyo Cyberpunk Featured Event Banner (Kodikon 6.0 Preview) */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 w-full max-w-3xl"
        >
          <Link
            href="/kodikon-6"
            className="group relative block p-6 sm:p-7 rounded-xl bg-[#070e1e]/90 hover:bg-[#0c1630] border border-cyan-500/30 hover:border-cyan-400/70 shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-300 text-left backdrop-blur-md"
          >
            {/* Cyber Corner Markers */}
            <span className="absolute top-1 left-2 font-mono text-[8px] text-cyan-500/50 select-none">◤ 01</span>
            <span className="absolute top-1 right-2 font-mono text-[8px] text-cyan-500/50 select-none">02 ◥</span>
            <span className="absolute bottom-1 left-2 font-mono text-[8px] text-cyan-500/50 select-none">◣ 03</span>
            <span className="absolute bottom-1 right-2 font-mono text-[8px] text-cyan-500/50 select-none">04 ◢</span>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-cyan-400">
                    UPCOMING FLAGSHIP HACKATHON
                  </span>
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  <span className="text-[10px] font-mono text-amber-300 font-bold">
                    「第六回」
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase group-hover:text-cyan-300 transition-colors">
                  Kodikon 6.0
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                  24-hour national offline hackathon hosted in-person at PESU 52, PES University (Ring Road Campus).
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-300 group-hover:text-black bg-cyan-500/10 group-hover:bg-cyan-400 px-4 py-2 rounded border border-cyan-500/40 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <span>Enter Portal</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Cyber Telemetry Specs Row */}
            <div className="mt-5 pt-4 border-t border-cyan-500/15 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2 rounded bg-black/40 border border-cyan-500/10">
                <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400/80 block">Duration</span>
                <span className="text-white font-mono font-semibold">24h Overnight</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-cyan-500/10">
                <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400/80 block">Venue</span>
                <span className="text-white font-mono font-semibold">PESU 52</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-cyan-500/10">
                <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400/80 block">Mode</span>
                <span className="text-white font-mono font-semibold">In-Person</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-cyan-500/10">
                <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400/80 block">Eligibility</span>
                <span className="text-white font-mono font-semibold">National UG</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Seamless Bottom Gradient Fade into About Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-[#02050e]"
      />
    </section>
  );
}
