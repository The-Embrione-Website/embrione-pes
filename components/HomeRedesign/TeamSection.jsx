"use client";

import React, { useState } from "react";
import { Users, Mail } from "lucide-react";
import TeamCard3D from "./TeamCard3D";
import { teamMembersDetails } from "@/constants";
import { pastHeads2024, pastHeads2023, upcoming2026Roles } from "./pastHeadsData";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <section id="team" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden border-t border-white/[0.06]">
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-5 backdrop-blur-md">
            <Users size={12} />
            <span>Student Leadership · Executive Core</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.08]">
            Meet The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Team.
            </span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The undergraduate students leading domain operations, technical development, logistics, and partnerships across academic terms.
          </p>
        </div>

        {/* Apple Capsule Segmented Control Track */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-12 overflow-x-auto max-w-full scrollbar-none">
          <button
            onClick={() => setActiveTab("2025")}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === "2025"
                ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            2025 Heads &amp; Core
          </button>

          <button
            onClick={() => setActiveTab("2024")}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === "2024"
                ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            2024 Heads
          </button>

          <button
            onClick={() => setActiveTab("2023")}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === "2023"
                ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            2023 Founding
          </button>

          <button
            onClick={() => setActiveTab("2026")}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === "2026"
                ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            2026 Incoming Board
          </button>
        </div>

        {/* TAB CONTENT: 2026 INCOMING HEADS */}
        {activeTab === "2026" && (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#040816]/90 border border-white/[0.07] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                  Incoming Term · 2026–2027
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Executive Committee Transition
                </h3>
              </div>
              <div className="text-xs font-medium px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 w-fit">
                Handover &amp; Selection in Progress
              </div>
            </div>

            <p className="mt-6 text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              Domain leadership applications and transition for the 2026-2027 academic term are coordinated under Department of CSE faculty mentorship. The new executive board will drive Kodikon 6.0 and annual technical initiatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {upcoming2026Roles.map((role) => (
                <div
                  key={role.role}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
                >
                  <span className="text-[11px] uppercase tracking-wider text-cyan-400/80 font-medium block mb-1">Domain Track</span>
                  <h4 className="text-sm font-semibold text-white">{role.role}</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-light">
                Interested in domain leadership or core contributions for 2026?
              </span>
              <a
                href="mailto:embrione_cse@pes.edu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail size={13} />
                <span>Contact Coordinators</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB CONTENT: 2025 HEADS */}
        {activeTab === "2025" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {teamMembersDetails.map((member) => (
              <TeamCard3D key={member.name} member={{ ...member, term: "2025-2026" }} />
            ))}
          </div>
        )}

        {/* TAB CONTENT: 2024 HEADS */}
        {activeTab === "2024" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {pastHeads2024.map((member) => (
              <TeamCard3D key={member.name} member={member} />
            ))}
          </div>
        )}

        {/* TAB CONTENT: 2023 FOUNDING HEADS */}
        {activeTab === "2023" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {pastHeads2023.map((member) => (
              <TeamCard3D key={member.name} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
