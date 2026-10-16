"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, Clock, MapPin, Award, Users } from "lucide-react";

export default function HeroSection() {
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

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-36 pb-28 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden">
      {/* Apple-style Radial Horizon Lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1200px] h-[500px] sm:h-[650px] pointer-events-none opacity-25 blur-[160px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.22) 0%, rgba(37, 99, 235, 0.12) 40%, transparent 70%)",
        }}
      />

      {/* Subtle Specular Top Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Ultra-Fine Micro-Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_50%,transparent_100%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        {/* Apple-Style Pill Eyebrow */}
        <motion.div variants={itemVariants} className="mb-7">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span className="text-[11px] sm:text-xs tracking-wider uppercase font-medium text-slate-300">
              Department of CSE · PES University
            </span>
          </div>
        </motion.div>

        {/* Monumental Title */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-[-0.035em] text-white leading-[1.02]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300">
              Embrione
            </span>
          </h1>
        </motion.div>

        {/* Apple Editorial Lead */}
        <motion.div variants={itemVariants} className="mt-6 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-normal tracking-[-0.015em] leading-snug">
            Architecture over boilerplate. <br className="hidden sm:inline" />
            Pure technical execution.
          </p>
          <p className="mt-3.5 text-sm sm:text-base text-slate-400 font-light leading-relaxed">
            The premier computing and hackathon vertical under the Department of Computer Science &amp; Engineering at PES University. Hosts of{" "}
            <strong className="text-cyan-300 font-medium">Kodikon 6.0</strong>.
          </p>
        </motion.div>

        {/* Apple-Style Dual Button Group */}
        <motion.div
          variants={itemVariants}
          className="mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          <Link
            href="/kodikon-6"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Kodikon 6.0</span>
            <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href="#about"
            className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 hover:text-white text-sm font-medium border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 backdrop-blur-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>About The Society</span>
          </a>
        </motion.div>

        {/* Apple Bento Spotlight: Kodikon 6.0 Keynote Card */}
        <motion.div
          variants={itemVariants}
          className="mt-16 sm:mt-20 w-full max-w-3xl"
        >
          <Link
            href="/kodikon-6"
            className="group relative block p-7 sm:p-9 rounded-3xl bg-[#040816]/90 hover:bg-[#060c20]/95 border border-white/[0.08] hover:border-cyan-400/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(6,182,212,0.14)] transition-all duration-500 text-left backdrop-blur-2xl overflow-hidden"
          >
            {/* Ambient Inner Corner Light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all duration-500" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Flagship National Sprint · Sixth Edition</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Kodikon 6.0
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                  An intensive 24-hour overnight offline hackathon at PESU 52, PES University. Built for builders solving hard problems.
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-300 group-hover:text-black bg-cyan-500/10 group-hover:bg-cyan-400 px-5 py-3 rounded-full border border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <span>Enter Portal</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Apple-style Bento Specs Grid */}
            <div className="relative z-10 mt-7 pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-white/[0.08] transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Clock size={13} className="text-cyan-400" />
                  <span>Duration</span>
                </div>
                <span className="text-white font-semibold text-sm">24h Overnight</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-white/[0.08] transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Award size={13} className="text-cyan-400" />
                  <span>Prize Pool</span>
                </div>
                <span className="text-white font-semibold text-sm">₹1,00,000 Cash</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-white/[0.08] transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Venue</span>
                </div>
                <span className="text-white font-semibold text-sm">PESU 52</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.05] group-hover:border-white/[0.08] transition-colors">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Users size={13} className="text-cyan-400" />
                  <span>Eligibility</span>
                </div>
                <span className="text-white font-semibold text-sm">National UG</span>
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Seamless Apple Fade into About Section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-[#000000]"
      />
    </section>
  );
}
