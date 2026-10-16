"use client";

import React, { useState } from "react";
import { Mail, ShieldCheck, Terminal } from "lucide-react";
import TeamCard3D from "./TeamCard3D";
import { teamMembersDetails } from "@/constants";
import { pastHeads2024, pastHeads2023, upcoming2026Roles } from "./pastHeadsData";

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <section id="team" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#02050e] text-white overflow-hidden border-t border-cyan-500/20">
      {/* Background Cyber Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-900/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.025)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none -z-10" />

      {/* Floating Vertical Japanese Kanji Watermark */}
      <div className="hidden xl:block absolute right-8 top-1/4 pointer-events-none select-none text-white/[0.03] font-mono text-6xl font-black writing-vertical tracking-widest -z-10">
        電脳結社幹部名簿
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3 cyber-clip-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>// OPERATIVE CORPS // 「学生幹部名簿」</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight uppercase font-display">
              Meet The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                Team.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              The student engineers leading domain operations, systems development, logistics, and partner ecosystems across academic terms.
            </p>
          </div>

          {/* Quick HUD Telemetry Box */}
          <div className="flex-shrink-0 flex items-center gap-3 p-3 bg-[#060c1d]/90 border border-cyan-500/30 cyber-clip-sm">
            <div className="w-8 h-8 bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Terminal size={16} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                ACTIVE_UNITS // 2025
              </div>
              <div className="text-xs font-mono font-bold text-white">
                16 DOMAIN OPERATIVES
              </div>
            </div>
          </div>
        </div>

        {/* Tokyo Cyberpunk Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("2025")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer cyber-clip-sm ${
              activeTab === "2025"
                ? "bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-[#060c1d] hover:bg-[#0c1530] text-slate-400 hover:text-white border border-cyan-500/20"
            }`}
          >
            2025 Domain Heads &amp; Core
          </button>

          <button
            onClick={() => setActiveTab("2024")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer cyber-clip-sm ${
              activeTab === "2024"
                ? "bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-[#060c1d] hover:bg-[#0c1530] text-slate-400 hover:text-white border border-cyan-500/20"
            }`}
          >
            2024 Domain Heads
          </button>

          <button
            onClick={() => setActiveTab("2023")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer cyber-clip-sm ${
              activeTab === "2023"
                ? "bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-[#060c1d] hover:bg-[#0c1530] text-slate-400 hover:text-white border border-cyan-500/20"
            }`}
          >
            2023 Founding Heads
          </button>

          <button
            onClick={() => setActiveTab("2026")}
            className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer cyber-clip-sm ${
              activeTab === "2026"
                ? "bg-gradient-to-r from-cyan-500 to-sky-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "bg-[#060c1d] hover:bg-[#0c1530] text-slate-400 hover:text-white border border-cyan-500/20"
            }`}
          >
            2026 Incoming Board
          </button>
        </div>

        {/* TAB CONTENT: 2026 INCOMING HEADS */}
        {activeTab === "2026" && (
          <div className="p-6 sm:p-10 bg-[#060c1d]/95 border border-cyan-500/40 cyber-clip shadow-[0_0_35px_rgba(6,182,212,0.12)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                  // TRANSITION PROTOCOL // 「次期幹部」
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase font-display">
                  2026 - 2027 Executive Committee
                </h3>
              </div>
              <div className="text-xs font-mono px-3.5 py-1.5 bg-cyan-950/60 text-cyan-300 border border-cyan-400/40 w-fit cyber-clip-sm">
                HANDOVER &amp; SELECTION IN PROGRESS
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
              Domain leadership applications and transition for the 2026-2027 academic term are coordinated under Department of CSE faculty mentorship. The new executive board will drive Kodikon 6.0 and annual technical initiatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {upcoming2026Roles.map((role) => (
                <div
                  key={role.role}
                  className="p-5 bg-black/60 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors cyber-clip-sm group/role"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block mb-1">
                    TRACK // RECRUITMENT
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover/role:text-cyan-300 transition-colors">
                    {role.role}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-light">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-500/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-light font-mono">
                Interested in domain leadership or core contributions for 2026?
              </span>
              <a
                href="mailto:embrione_cse@pes.edu"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all cyber-clip-sm shadow-[0_0_15px_rgba(6,182,212,0.35)]"
              >
                <Mail size={13} />
                <span>Contact Coordinators</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB CONTENT: 2025 HEADS */}
        {activeTab === "2025" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembersDetails.map((member, idx) => (
              <TeamCard3D key={member.name} member={{ ...member, term: "2025-2026" }} index={idx} />
            ))}
          </div>
        )}

        {/* TAB CONTENT: 2024 HEADS */}
        {activeTab === "2024" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {pastHeads2024.map((member, idx) => (
              <TeamCard3D key={member.name} member={member} index={idx} />
            ))}
          </div>
        )}

        {/* TAB CONTENT: 2023 FOUNDING HEADS */}
        {activeTab === "2023" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {pastHeads2023.map((member, idx) => (
              <TeamCard3D key={member.name} member={member} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
