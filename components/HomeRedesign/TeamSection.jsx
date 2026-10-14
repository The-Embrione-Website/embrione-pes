"use client";

import React, { useState } from "react";
import { Users, Mail, ArrowRight } from "lucide-react";
import TeamCard3D from "./TeamCard3D";
import { teamMembersDetails } from "@/constants";
import { pastHeads2024, pastHeads2023, upcoming2026Roles } from "./pastHeadsData";


export default function TeamSection() {
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <section id="team" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-black text-white">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-400 block mb-3">
          Student Leadership
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
          Meet The Team.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
          The undergraduate students leading domain operations, technical development, logistics, and partnerships across academic terms.
        </p>
      </div>

      {/* Apple-style Segmented Control Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab("2025")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === "2025"
              ? "bg-white text-black shadow-sm"
              : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
          }`}
        >
          2025 Domain Heads &amp; Core
        </button>

        <button
          onClick={() => setActiveTab("2024")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === "2024"
              ? "bg-white text-black shadow-sm"
              : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
          }`}
        >
          2024 Domain Heads
        </button>

        <button
          onClick={() => setActiveTab("2023")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === "2023"
              ? "bg-white text-black shadow-sm"
              : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
          }`}
        >
          2023 Founding Heads
        </button>

        <button
          onClick={() => setActiveTab("2026")}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === "2026"
              ? "bg-white text-black shadow-sm"
              : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
          }`}
        >
          2026 Incoming Board
        </button>
      </div>

      {/* TAB CONTENT: 2026 INCOMING HEADS */}
      {activeTab === "2026" && (
        <div className="p-8 sm:p-12 rounded-3xl bg-[#161617] border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-1">
                Incoming Term
              </span>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                2026 - 2027 Executive Committee
              </h3>
            </div>
            <div className="text-xs px-3.5 py-1.5 rounded-full bg-white/5 text-neutral-300 border border-white/10 w-fit">
              Handover &amp; Selection in Progress
            </div>
          </div>

          <p className="mt-6 text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
            Domain leadership applications and transition for the 2026-2027 academic term are coordinated under Department of CSE faculty mentorship. The new executive board will drive Kodikon 6.0 and annual technical initiatives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {upcoming2026Roles.map((role) => (
              <div
                key={role.role}
                className="p-5 rounded-2xl bg-black/40 border border-white/10"
              >
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">Domain Track</span>
                <h4 className="text-sm font-medium text-white">{role.role}</h4>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed font-light">{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-400 font-light">
              Interested in domain leadership or core contributions for 2026?
            </span>
            <a
              href="mailto:embrione_cse@pes.edu"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium transition-colors"
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
          {teamMembersDetails.map((member) => (
            <TeamCard3D key={member.name} member={{ ...member, term: "2025-2026" }} />
          ))}
        </div>
      )}

      {/* TAB CONTENT: 2024 HEADS */}
      {activeTab === "2024" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {pastHeads2024.map((member) => (
            <TeamCard3D key={member.name} member={member} />
          ))}
        </div>
      )}

      {/* TAB CONTENT: 2023 FOUNDING HEADS */}
      {activeTab === "2023" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {pastHeads2023.map((member) => (
            <TeamCard3D key={member.name} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}
