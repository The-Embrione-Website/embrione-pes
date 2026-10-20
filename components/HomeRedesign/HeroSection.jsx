"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
import GalaxyBackground from "./GalaxyBackground";

export default function HeroSection() {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[96vh] flex flex-col items-center justify-center pt-32 sm:pt-40 pb-28 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden"
    >
      {/* Cinematic Milky Way Galaxy background */}
      <GalaxyBackground containerRef={sectionRef} />

      {/* Radial atmospheric contrast scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.15) 55%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Subtle background architectural grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#27272a12_1px,transparent_1px),linear-gradient(to_bottom,#27272a12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,#000_50%,transparent_100%)] z-[3]"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        {/* 1. PES University Logo & Department Affiliation (Clean & Prominent) */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8 flex flex-col items-center gap-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
        >
          <div className="relative w-52 h-20 sm:w-64 sm:h-24 md:w-80 md:h-28 shrink-0">
            <Image
              src={pesLogo}
              alt="PES University"
              fill
              priority
              sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 320px"
              className="object-contain"
            />
          </div>

          <span className="text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-zinc-200">
            PES University | Department of CSE
          </span>
        </motion.div>

        {/* 2. Monumental "The Embrione" Title (Big, Bold & Centered) */}
        <motion.div variants={itemVariants} className="w-full">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.75rem] font-bold tracking-tight text-white leading-none drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
            <span className="font-cursive font-normal text-blue-400 inline-block pr-3 sm:pr-5 select-none align-baseline text-[0.85em]">
              The
            </span>
            <span className="font-curvy">Embrione</span>
          </h1>
        </motion.div>

        {/* 3. Purpose & Positioning Statement */}
        <motion.div variants={itemVariants} className="mt-6 max-w-3xl">
          <p className="font-curvy text-xl sm:text-2xl md:text-3xl text-zinc-100 font-medium tracking-tight leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Computing, Development &amp;{" "}
            <span className="font-cursive font-normal text-blue-400 text-3xl sm:text-4xl md:text-5xl inline-block px-1">
              Innovation
            </span>
            .
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed max-w-[62ch] mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            The official computing and technical vertical under the Department of
            Computer Science &amp; Engineering at PES University. We build platforms,
            engineer student systems, and organize{" "}
            <Link
              href="/kodikon-6"
              className="text-blue-400 font-medium hover:text-white transition-colors underline decoration-blue-500/40 underline-offset-4"
            >
              Kodikon
            </Link>{" "}
            — our flagship 24-hour national offline hackathon.
          </p>
        </motion.div>

        {/* 4. Action Engine */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/kodikon-6"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#1e3a8a] hover:bg-[#1d4ed8] border border-blue-500/40 text-white text-sm font-semibold tracking-wide shadow-xl shadow-blue-950/70 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Kodikon 6.0</span>
            <ChevronRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 hover:border-zinc-700 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <span>About The Society</span>
          </a>
        </motion.div>

        {/* 5. Clean, Full-Width Kodikon 6.0 Banner */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 w-full max-w-4xl text-left"
        >
          <Link
            href="/kodikon-6"
            className="group relative block p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-blue-500/50 shadow-2xl transition-all duration-300 backdrop-blur-xl overflow-hidden"
          >
            {/* Subtle ambient light */}
            <div
              aria-hidden="true"
              className="absolute -top-24 right-0 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-900/25 transition-all"
            />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                  Flagship National Hackathon
                </span>
                <h2 className="font-curvy text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1 group-hover:text-blue-400 transition-colors">
                  Kodikon 6.0
                </h2>
                <p className="mt-2 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-2xl">
                  An intensive 24-hour overnight offline hackathon happening at
                  PESU 52, PES University. Built for student builders solving
                  hard engineering problems.
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-zinc-700 bg-zinc-900 group-hover:bg-blue-950/60 group-hover:border-blue-500/50 text-xs font-mono uppercase tracking-wider text-white transition-all">
                  <span>Enter Portal</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </div>

            {/* Clean 4-point telemetry bar */}
            <div className="relative z-10 mt-6 pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono mb-1">
                  <Clock size={13} className="text-blue-400" />
                  <span>Duration</span>
                </div>
                <span className="text-white font-medium text-sm">
                  24h Overnight
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono mb-1">
                  <Award size={13} className="text-blue-400" />
                  <span>Prize Pool</span>
                </div>
                <span className="text-blue-400 font-semibold text-sm">
                  ₹1,50,000 Cash
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono mb-1">
                  <MapPin size={13} className="text-blue-400" />
                  <span>Venue</span>
                </div>
                <span className="text-white font-medium text-sm">
                  PESU 52 Campus
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono mb-1">
                  <Users size={13} className="text-blue-400" />
                  <span>Eligibility</span>
                </div>
                <span className="text-white font-medium text-sm">
                  National UG Teams
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Seamless celestial horizon transition into About section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-44 bg-gradient-to-b from-transparent via-black/85 to-black z-[4]"
      />
    </section>
  );
}
