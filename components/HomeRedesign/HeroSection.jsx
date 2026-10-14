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
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      {/* Subtle Apple-style cinematic stage spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[600px] pointer-events-none opacity-40 blur-[130px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(30, 144, 255, 0.25) 0%, rgba(0, 80, 180, 0.12) 50%, transparent 80%)",
        }}
      />

      {/* Subtle hairline ambient top grid line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        {/* Eyebrow: Institutional Line */}
        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-400">
            PES University <span className="text-neutral-600 mx-1.5">•</span> Department of CSE
          </p>
        </motion.div>

        {/* Hero Title: Apple style monumental title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-white leading-[1.05]">
            The Embrione
          </h1>
        </motion.div>

        {/* Subheading: Confident, clean editorial copy */}
        <motion.div variants={itemVariants} className="mt-4 sm:mt-6 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-300 font-normal tracking-tight leading-snug">
            Tech vertical under CSE department, PES University.
          </p>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Organizers of Kodikon, South India&apos;s premier 24-hour national hackathon.
          </p>
        </motion.div>

        {/* Apple-style Pill Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/kodikon-6"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium transition-colors shadow-sm"
          >
            <span>Explore Kodikon 6.0</span>
            <ChevronRight size={15} />
          </Link>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <span>About The Society</span>
          </a>

          <a
            href="#events"
            className="inline-flex items-center gap-1 text-sm text-neutral-400 hover:text-white px-3 py-2 transition-colors font-normal"
          >
            <span>Past Editions</span>
            <ChevronRight size={14} className="text-neutral-500" />
          </a>
        </motion.div>

        {/* Apple-style Featured Event Banner (Kodikon 6.0 Preview) */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 w-full max-w-3xl"
        >
          <Link
            href="/kodikon-6"
            className="group block p-6 sm:p-7 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 text-left backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 block mb-1">
                  Upcoming Flagship Event
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Kodikon 6.0
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
                  24-hour national offline hackathon hosted in-person at PESU 52, PES University (Ring Road Campus).
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:text-cyan-400 transition-colors bg-white/5 group-hover:bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-white/10 group-hover:border-cyan-500/30">
                  <span>View Details</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Apple-style Specs Row */}
            <div className="mt-5 pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-400">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Duration</span>
                <span className="text-neutral-200 font-medium">24 Hours</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Venue</span>
                <span className="text-neutral-200 font-medium">PESU 52</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Mode</span>
                <span className="text-neutral-200 font-medium">In-Person</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Eligibility</span>
                <span className="text-neutral-200 font-medium">National UG</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
