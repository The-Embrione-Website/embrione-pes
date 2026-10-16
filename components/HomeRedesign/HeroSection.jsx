"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Calendar, MapPin, Clock, Award } from "lucide-react";

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
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden">
      {/* Refined Ambient Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[550px] pointer-events-none opacity-40 blur-[130px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.22) 0%, rgba(37, 99, 235, 0.14) 45%, transparent 75%)",
        }}
      />

      {/* Subtle Micro-Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        {/* Eyebrow: Institutional Affiliation */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
              PES University · Department of Computer Science &amp; Engineering
            </span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-white leading-[1.04]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
              Embrione
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={itemVariants} className="mt-5 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-normal tracking-tight leading-snug">
            Technical computing vertical under CSE, PES University.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            A student-led community committed to research-grounded engineering, systems architecture, and organizers of{" "}
            <strong className="text-cyan-300 font-medium">Kodikon 6.0</strong>, South India&apos;s flagship national 24-hour hackathon.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/kodikon-6"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
          >
            <span>Explore Kodikon 6.0</span>
            <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all backdrop-blur-md hover:-translate-y-0.5"
          >
            <span>About The Society</span>
          </a>

          <a
            href="#events"
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-300 px-4 py-2 transition-colors font-medium"
          >
            <span>Past Editions</span>
            <ChevronRight size={14} />
          </a>
        </motion.div>

        {/* Professional Featured Event Banner (Kodikon 6.0) */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 w-full max-w-3xl"
        >
          <Link
            href="/kodikon-6"
            className="group relative block p-6 sm:p-8 rounded-2xl bg-[#060c1d]/90 hover:bg-[#0a1226] border border-cyan-500/20 hover:border-cyan-400/50 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] transition-all duration-300 text-left backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400">
                    Flagship 24-Hour National Hackathon
                  </span>
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-medium text-slate-400">
                    Sixth Edition
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Kodikon 6.0
                </h3>
                <p className="mt-2 text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                  An intensive in-person 24-hour engineering sprint bringing together undergraduate problem solvers from across India at PESU 52, Bengaluru.
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-300 group-hover:text-black bg-cyan-500/10 group-hover:bg-cyan-400 px-5 py-2.5 rounded-full border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300">
                  <span>Enter Portal</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Event Specs Grid */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                  <Clock size={12} className="text-cyan-400" />
                  <span>Duration</span>
                </div>
                <span className="text-white font-medium">24h Overnight</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                  <MapPin size={12} className="text-cyan-400" />
                  <span>Venue</span>
                </div>
                <span className="text-white font-medium">PESU 52, Bengaluru</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                  <Calendar size={12} className="text-cyan-400" />
                  <span>Format</span>
                </div>
                <span className="text-white font-medium">In-Person Sprint</span>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                  <Award size={12} className="text-cyan-400" />
                  <span>Prize Pool</span>
                </div>
                <span className="text-white font-medium">₹1,00,000 Cash + Perks</span>
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
