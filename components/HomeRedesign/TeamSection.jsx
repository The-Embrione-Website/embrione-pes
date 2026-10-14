"use client";

import React, { useState } from "react";
import { Users, Mail, ArrowRight } from "lucide-react";
import TeamCard3D from "./TeamCard3D";
import { teamMembersDetails } from "@/constants";

const pastHeads2024 = [
  {
    name: "Gagan H R",
    domain: "Club Head & Mentor",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Gagan H R.webp",
    linkedinUrl: "https://www.linkedin.com/in/gaganhr",
  },
  {
    name: "Anvesha Nayak",
    domain: "Club Head",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/IMG-20230809-WA0016.webp",
    linkedinUrl: "https://www.linkedin.com/in/anveshanayak",
  },
  {
    name: "Ankith Khaitan",
    domain: "Sponsorship",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Ankith Khaitan_.webp",
    linkedinUrl: "https://www.linkedin.com/in/ankith-khaitan",
  },
  {
    name: "Arushi Katta",
    domain: "Event Management",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Arushi Katta.webp",
    linkedinUrl: "https://www.linkedin.com/in/arushi-katta",
  },
  {
    name: "Deeksha Kashyap",
    domain: "Logistics",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Deeksha Kashyap.webp",
    linkedinUrl: "https://www.linkedin.com/in/deeksha-kashyap",
  },
  {
    name: "Kanika",
    domain: "Design",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Kanika.webp",
    linkedinUrl: "",
  },
  {
    name: "Lakshay Bhutani",
    domain: "Web Development",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Lakshay Bhutani_.webp",
    linkedinUrl: "https://www.linkedin.com/in/lakshaybhutani",
  },
  {
    name: "Manya Gaonkar",
    domain: "Operations",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Manya Gaonkar.webp",
    linkedinUrl: "",
  },
  {
    name: "Mayank Sharma",
    domain: "Web Development",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Mayank Sharma.webp",
    linkedinUrl: "",
  },
  {
    name: "Rahul Baradol",
    domain: "Logistics",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Rahul Baradol.webp",
    linkedinUrl: "",
  },
  {
    name: "Rhea Gangamma",
    domain: "Hospitality",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Rhea Gangamma.webp",
    linkedinUrl: "",
  },
  {
    name: "Sadhana A T",
    domain: "Operations",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/sadhanaAT.webp",
    linkedinUrl: "",
  },
  {
    name: "Shailja Shaktawat",
    domain: "Design",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Shailja Shaktawat.webp",
    linkedinUrl: "",
  },
  {
    name: "Sravanthi N",
    domain: "Social Media",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Sravanthi N.webp",
    linkedinUrl: "",
  },
  {
    name: "Tanusha Raina",
    domain: "Hospitality",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Tanusha Raina_.webp",
    linkedinUrl: "",
  },
];

const pastHeads2023 = [
  {
    name: "Vijit",
    domain: "Club Founder & Head",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/vijit.webp",
    linkedinUrl: "",
  },
  {
    name: "Swikrit Laxmishekhar",
    domain: "Marketing and Sponsorship",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/swikrit.webp",
    linkedinUrl: "https://www.linkedin.com/in/swikrit-laxmishekhar-546878225/",
  },
  {
    name: "Naresh Srinivas",
    domain: "Logistics",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/naresh.webp",
    linkedinUrl: "https://www.linkedin.com/in/naresh-srinivas-28a608215/",
  },
  {
    name: "Harsh Verma",
    domain: "Operations",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/harsh.webp",
    linkedinUrl: "https://www.linkedin.com/in/harsh-verma-857b801b9/",
  },
  {
    name: "Punarv Dinakar",
    domain: "Event Management",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/punarv.webp",
    linkedinUrl: "",
  },
  {
    name: "Rhea Sudheer",
    domain: "Hospitality",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/rhea.webp",
    linkedinUrl: "https://www.linkedin.com/in/rhea-sudheer/",
  },
  {
    name: "Yogitha H K",
    domain: "Design",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/yogitha.webp",
    linkedinUrl: "https://www.linkedin.com/in/yogitha-h-k-63bb74222/",
  },
  {
    name: "Chaitra Upadhya",
    domain: "Logistics",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/chaitra.webp",
    linkedinUrl: "https://www.linkedin.com/in/chaitra-upadhya-922426211/",
  },
  {
    name: "Vishal",
    domain: "Web Development",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/vishal.webp",
    linkedinUrl: "",
  },
];

const upcoming2026Roles = [
  { role: "Club Heads", desc: "Leading general club strategy, university liaison, and department coordination." },
  { role: "Technical & WebDev", desc: "Maintaining club portals, Kodikon event systems, and infrastructure." },
  { role: "Event Management", desc: "Managing run-of-show, round logistics, and 24-hour hackathon execution." },
  { role: "Sponsorship & Outreach", desc: "Securing industry partners, prize sponsors, and platform credits." },
  { role: "Design & Media", desc: "Brand design, visual identities, UI assets, and coverage." },
  { role: "Logistics & Hospitality", desc: "Campus venue arrangement, refreshments, hardware supplies, and safety." },
];

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
