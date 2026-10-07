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
    photoUrl: "/current-domain-heads/Gagan H R.jpg",
    linkedinUrl: "https://www.linkedin.com/in/gaganhr",
  },
  {
    name: "Anvesha Nayak",
    domain: "Club Head",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/IMG-20230809-WA0016.jpg",
    linkedinUrl: "https://www.linkedin.com/in/anveshanayak",
  },
  {
    name: "Ankith Khaitan",
    domain: "Sponsorship",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Ankith Khaitan_.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ankith-khaitan",
  },
  {
    name: "Arushi Katta",
    domain: "Event Management",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Arushi Katta.jpg",
    linkedinUrl: "https://www.linkedin.com/in/arushi-katta",
  },
  {
    name: "Deeksha Kashyap",
    domain: "Logistics",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Deeksha Kashyap.jpg",
    linkedinUrl: "https://www.linkedin.com/in/deeksha-kashyap",
  },
  {
    name: "Kanika",
    domain: "Design",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Kanika.jpg",
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
    photoUrl: "/current-domain-heads/Manya Gaonkar.jpeg",
    linkedinUrl: "",
  },
  {
    name: "Mayank Sharma",
    domain: "Web Development",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Mayank Sharma.jpg",
    linkedinUrl: "",
  },
  {
    name: "Rahul Baradol",
    domain: "Logistics",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Rahul Baradol.jpg",
    linkedinUrl: "",
  },
  {
    name: "Rhea Gangamma",
    domain: "Hospitality",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Rhea Gangamma.png",
    linkedinUrl: "",
  },
  {
    name: "Sadhana A T",
    domain: "Operations",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/sadhanaAT.jpg",
    linkedinUrl: "",
  },
  {
    name: "Shailja Shaktawat",
    domain: "Design",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Shailja Shaktawat.jpeg",
    linkedinUrl: "",
  },
  {
    name: "Sravanthi N",
    domain: "Social Media",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Sravanthi N.jpg",
    linkedinUrl: "",
  },
  {
    name: "Tanusha Raina",
    domain: "Hospitality",
    role: "Head",
    term: "2024-2025",
    photoUrl: "/current-domain-heads/Tanusha Raina_.jpg",
    linkedinUrl: "",
  },
];

const pastHeads2023 = [
  {
    name: "Vijit",
    domain: "Club Founder & Head",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/vijit.jpg",
    linkedinUrl: "",
  },
  {
    name: "Swikrit Laxmishekhar",
    domain: "Marketing and Sponsorship",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/swikrit.jpg",
    linkedinUrl: "https://www.linkedin.com/in/swikrit-laxmishekhar-546878225/",
  },
  {
    name: "Naresh Srinivas",
    domain: "Logistics",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/naresh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/naresh-srinivas-28a608215/",
  },
  {
    name: "Harsh Verma",
    domain: "Operations",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/harsh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harsh-verma-857b801b9/",
  },
  {
    name: "Punarv Dinakar",
    domain: "Event Management",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/punarv.jpeg",
    linkedinUrl: "",
  },
  {
    name: "Rhea Sudheer",
    domain: "Hospitality",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/rhea.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rhea-sudheer/",
  },
  {
    name: "Yogitha H K",
    domain: "Design",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/yogitha.jpg",
    linkedinUrl: "https://www.linkedin.com/in/yogitha-h-k-63bb74222/",
  },
  {
    name: "Chaitra Upadhya",
    domain: "Logistics",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/chaitra.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/chaitra-upadhya-922426211/",
  },
  {
    name: "Vishal",
    domain: "Web Development",
    role: "Head",
    term: "2023-2024",
    photoUrl: "/domiainHeadPhotos/vishal.jpeg",
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
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#000514]">
      {/* Section Header */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
          <Users size={14} />
          <span>DEPARTMENT LEADERSHIP</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
          Meet The Team
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          The undergraduate students leading domain operations, technical development, logistics, and partnerships across academic terms.
        </p>
      </div>

      {/* Term / Batch Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
        <button
          onClick={() => setActiveTab("2026")}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs font-mono transition-colors border ${
            activeTab === "2026"
              ? "bg-cyan-600 border-cyan-500 text-white font-semibold"
              : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          2026 Heads (Incoming)
        </button>

        <button
          onClick={() => setActiveTab("2025")}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs font-mono transition-colors border ${
            activeTab === "2025"
              ? "bg-cyan-600 border-cyan-500 text-white font-semibold"
              : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          2025 Domain Heads &amp; Core
        </button>

        <button
          onClick={() => setActiveTab("2024")}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs font-mono transition-colors border ${
            activeTab === "2024"
              ? "bg-cyan-600 border-cyan-500 text-white font-semibold"
              : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          2024 Domain Heads
        </button>

        <button
          onClick={() => setActiveTab("2023")}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-[11px] sm:text-xs font-mono transition-colors border ${
            activeTab === "2023"
              ? "bg-cyan-600 border-cyan-500 text-white font-semibold"
              : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800"
          }`}
        >
          2023 Founding Heads
        </button>
      </div>

      {/* TAB CONTENT: 2026 INCOMING HEADS */}
      {activeTab === "2026" && (
        <div className="space-y-6">
          <div className="p-4 sm:p-6 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">Incoming Term</span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  2026 - 2027 Executive Committee
                </h3>
              </div>
              <div className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700 w-fit">
                Handover &amp; Selection in Progress
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Domain leadership applications and transition for the 2026-2027 academic term are coordinated under Department of CSE faculty mentorship. The new executive board will drive Kodikon 6.0 and annual technical initiatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-6">
              {upcoming2026Roles.map((role) => (
                <div
                  key={role.role}
                  className="p-4 rounded-md bg-slate-950 border border-slate-800"
                >
                  <div className="text-xs font-mono text-cyan-400">Position Track</div>
                  <h4 className="text-sm font-semibold text-white mt-0.5">{role.role}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                Interested in domain leadership or core contributions for 2026?
              </span>
              <a
                href="mailto:embrione_cse@pes.edu"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
              >
                <Mail size={13} />
                <span>Contact Department Coordinators</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 2025 HEADS */}
      {activeTab === "2025" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {teamMembersDetails.map((member) => (
            <TeamCard3D key={member.name} member={{ ...member, term: "2025-2026" }} />
          ))}
        </div>
      )}

      {/* TAB CONTENT: 2024 HEADS */}
      {activeTab === "2024" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {pastHeads2024.map((member) => (
            <TeamCard3D key={member.name} member={member} />
          ))}
        </div>
      )}

      {/* TAB CONTENT: 2023 FOUNDING HEADS */}
      {activeTab === "2023" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {pastHeads2023.map((member) => (
            <TeamCard3D key={member.name} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}
