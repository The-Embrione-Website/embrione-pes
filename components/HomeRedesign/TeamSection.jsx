"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Code2,
  Calendar,
  SlidersHorizontal,
  Boxes,
  BadgeDollarSign,
  Palette,
  Coffee,
  Megaphone,
  Video,
  Sparkles,
  Users,
  CalendarDays,
  Linkedin,
  Github,
  GraduationCap,
} from "lucide-react";
import teamMembers from "./teamData";
import { teamMembersDetails } from "./constants.js";
import { pastHeads2024, pastHeads2023 } from "./pastHeadsData.js";

const years = ["2026", "2025", "2024", "2023"];

// Domain hierarchy ranking:
// founder -> club head -> web dev -> evm -> operations -> logs -> spons -> design -> hospi -> campaining -> smve -> mentors
function getDomainRank(domain) {
  const d = (domain || "").toLowerCase().trim();
  if (d.includes("founder")) return 0;
  if (d.includes("club head") || d.includes("leadership")) return 1;
  if (d.includes("web") || d.includes("dev")) return 2;
  if (d.includes("event") || d.includes("evm")) return 3;
  if (d.includes("operation")) return 4;
  if (d.includes("logistic") || d.includes("logs")) return 5;
  if (d.includes("sponsor") || d.includes("spons") || d.includes("market")) return 6;
  if (d.includes("design")) return 7;
  if (d.includes("hospit") || d.includes("hospi")) return 8;
  if (d.includes("campaign") || d.includes("campain")) return 9;
  if (d.includes("social") || d.includes("media") || d.includes("video") || d.includes("smve")) return 10;
  if (d.includes("mentor")) return 11;
  return 99;
}

// Role hierarchy ranking:
// founder -> head -> vice-head -> core -> mentor
function getRoleRank(role) {
  const r = (role || "").toLowerCase().trim();
  if (r.includes("founder")) return 0;
  if (r === "head" || (r.startsWith("head") && !r.includes("vice"))) return 1;
  if (r.includes("vice") || r.includes("co-head") || r.includes("associate")) return 2;
  if (r.includes("core") || r.includes("member")) return 3;
  if (r.includes("mentor")) return 4;
  return 5;
}

// Mentor priority ranking based on last year's domain & role hierarchy:
// Club Head (Kunjal, Preksha) -> Event Management Head (Dhruv) -> Operations Head (Taha) -> Logistics Head (Nishant) -> Sponsorship Head (Shashwat) -> Logistics Core (Ankith) -> External (Angad at the end)
function getMentorRank(name) {
  const n = (name || "").toLowerCase().trim();
  if (n.includes("kunjal")) return 1;
  if (n.includes("preksha")) return 2;
  if (n.includes("dhruv")) return 3;
  if (n.includes("taha")) return 4;
  if (n.includes("nishant")) return 5;
  if (n.includes("shashwat")) return 6;
  if (n.includes("ankith")) return 7;
  if (n.includes("angad")) return 99;
  return 50;
}

// Map domains to icons
function getDomainIcon(domain) {
  const rank = getDomainRank(domain);
  if (rank === 0 || rank === 1) return Crown;
  if (rank === 11) return GraduationCap;
  switch (rank) {
    case 2:
      return Code2;
    case 3:
      return Calendar;
    case 4:
      return SlidersHorizontal;
    case 5:
      return Boxes;
    case 6:
      return BadgeDollarSign;
    case 7:
      return Palette;
    case 8:
      return Coffee;
    case 9:
      return Megaphone;
    case 10:
      return Video;
    default:
      return Users;
  }
}

// Canonical domain name resolver
function canonicalizeDomain(rawDomain) {
  const d = (rawDomain || "").toLowerCase().trim();
  if (d.includes("founder")) return "Founder";
  if (d.includes("club head")) return "Club Head";
  if (d.includes("mentor")) return "Mentors";
  const rank = getDomainRank(rawDomain);
  switch (rank) {
    case 1:
      return "Club Head";
    case 2:
      return "Web Development";
    case 3:
      return "Event Management";
    case 4:
      return "Operations";
    case 5:
      return "Logistics";
    case 6:
      return "Sponsorship";
    case 7:
      return "Design";
    case 8:
      return "Hospitality";
    case 9:
      return "Campaigning";
    case 10:
      return "Social Media & Video Editing";
    case 11:
      return "Mentors";
    default:
      return rawDomain || "Other";
  }
}

// Canonical role name resolver
function canonicalizeRole(rawRole) {
  const r = (rawRole || "").toLowerCase().trim();
  if (r.includes("founder")) return "Founder";
  if (r.includes("mentor")) return "Mentor";
  const rank = getRoleRank(rawRole);
  switch (rank) {
    case 1:
      return "Head";
    case 2:
      return "Vice-Head";
    case 3:
      return "Core";
    default:
      return rawRole || "Member";
  }
}

// Normalize member across schema differences
function normalizeMember(member, year) {
  const rawLinkedIn = member.linkedin ?? member.linkedinUrl ?? "";
  const rawGithub = member.github ?? member.githubUrl ?? "";

  const validUrl = (url) => {
    if (!url || typeof url !== "string") return null;
    const trimmed = url.trim();
    if (trimmed === "" || trimmed === "www" || trimmed === "goto-linkedin") return null;
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
    if (/^[a-z0-9]+\.[a-z]{2,}/i.test(trimmed)) return `https://${trimmed}`;
    return null;
  };

  const domain = canonicalizeDomain(member.domain);
  const role = canonicalizeRole(member.role);

  const defaultTerm =
    year === "2026"
      ? "2025–2026"
      : year === "2025"
      ? "2024–2025"
      : year === "2024"
      ? "2023–2024"
      : "2022–2023";

  return {
    name: member.name,
    domain,
    role,
    photo: member.photo || member.photoUrl || null,
    linkedin: validUrl(rawLinkedIn),
    github: validUrl(rawGithub),
    featured: Boolean(member.featured) || domain === "Club Head" || domain === "Founder" || domain === "Mentors" || role === "Mentor",
    term: member.term || defaultTerm,
  };
}

function SocialLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/15 hover:text-cyan-300 hover:scale-110"
    >
      {children}
    </a>
  );
}

function MemberCard({ member }) {
  const isFounder = member.role === "Founder" || member.domain === "Founder";
  const isMentor = member.role === "Mentor" || member.domain === "Mentors";
  const isClubHead = member.domain === "Club Head" || isFounder;
  const isHead = member.role === "Head";
  const isViceHead = member.role === "Vice-Head";

  return (
    <article
      className={`group relative aspect-[3/4] w-full min-w-0 overflow-hidden rounded-2xl border bg-[#040816] shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ${
        isFounder
          ? "border-purple-400/50 hover:border-purple-300/80 hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]"
          : isMentor
          ? "border-amber-400/40 hover:border-amber-300/80 hover:shadow-[0_0_35px_rgba(245,158,11,0.22)]"
          : isClubHead
          ? "border-cyan-400/40 hover:border-cyan-300/80 hover:shadow-[0_0_35px_rgba(6,182,212,0.22)]"
          : isHead
          ? "border-white/[0.12] hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.14)]"
          : isViceHead
          ? "border-white/[0.1] hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.14)]"
          : "border-white/[0.08] hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
      }`}
    >
      {/* Photo */}
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#040816] via-[#0b1830] to-cyan-950/40">
          <span className="text-5xl font-semibold text-cyan-300/70">
            {member.name?.charAt(0)?.toUpperCase() || "E"}
          </span>
        </div>
      )}

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/15 via-transparent to-blue-950/25 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Top badge: Role */}
      <div className="absolute inset-x-0 top-0 p-3.5 flex items-center justify-start gap-2 z-10">
        {/* Role badge adhering to hierarchy: Founder -> Mentor -> Head -> Vice-Head -> Core */}
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
            isFounder
              ? "bg-purple-500/25 text-purple-200 border-purple-400/50 shadow-[0_0_12px_rgba(168,85,247,0.25)]"
              : isMentor
              ? "bg-amber-500/25 text-amber-200 border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
              : isClubHead
              ? "bg-cyan-500/25 text-cyan-200 border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
              : isHead
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
              : isViceHead
              ? "bg-sky-500/20 text-sky-200 border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.15)]"
              : "bg-black/60 text-slate-300 border-white/10"
          }`}
        >
          {isFounder ? (
            <Crown size={11} className="text-purple-300" />
          ) : isMentor ? (
            <GraduationCap size={11} className="text-amber-300" />
          ) : isHead ? (
            <Sparkles size={11} className="text-cyan-300" />
          ) : isViceHead ? (
            <Crown size={11} className="text-sky-300" />
          ) : null}
          <span>{member.role}</span>
        </span>
      </div>

      {/* Bottom info: Domain, Name & Social links */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-10">
        {!isMentor && (
          <p className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300/90 mb-1">
            {member.domain}
          </p>
        )}

        <div className="flex items-end justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
            {member.name}
          </h3>

          <div className="flex shrink-0 items-center gap-1.5">
            <SocialLink
              href={member.linkedin}
              label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={14} />
            </SocialLink>

            <SocialLink href={member.github} label={`${member.name} on GitHub`}>
              <Github size={14} />
            </SocialLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamSection() {
  const [activeYear, setActiveYear] = useState("2026");
  const [selectedDomain, setSelectedDomain] = useState("All");

  // Normalize members across cohorts
  const membersByYear = useMemo(
    () => ({
      2026: teamMembers.map((m) => normalizeMember(m, "2026")),
      2025: teamMembersDetails.map((m) => normalizeMember(m, "2025")),
      2024: pastHeads2024.map((m) => normalizeMember(m, "2024")),
      2023: pastHeads2023.map((m) => normalizeMember(m, "2023")),
    }),
    []
  );

  const currentYearMembers = membersByYear[activeYear] || [];

  // Extract unique domains for the active year and sort strictly by domain hierarchy
  const domainOptions = useMemo(() => {
    const counts = {};
    currentYearMembers.forEach((m) => {
      counts[m.domain] = (counts[m.domain] || 0) + 1;
    });

    const domains = Object.keys(counts).sort((a, b) => {
      const diff = getDomainRank(a) - getDomainRank(b);
      if (diff !== 0) return diff;
      return a.localeCompare(b);
    });

    return [
      { name: "All", count: currentYearMembers.length },
      ...domains.map((d) => ({ name: d, count: counts[d] })),
    ];
  }, [currentYearMembers]);

  // When switching year, reset filter back to "All"
  const handleYearChange = (year) => {
    setActiveYear(year);
    setSelectedDomain("All");
  };

  // Sort helper: Domain Hierarchy -> Role Hierarchy (Head -> Vice-Head -> Core) -> Mentor Priority -> Name
  const sortMembers = (list) => {
    return [...list].sort((a, b) => {
      const domainDiff = getDomainRank(a.domain) - getDomainRank(b.domain);
      if (domainDiff !== 0) return domainDiff;

      const roleDiff = getRoleRank(a.role) - getRoleRank(b.role);
      if (roleDiff !== 0) return roleDiff;

      const isMentorA = a.domain === "Mentors" || a.role === "Mentor";
      const isMentorB = b.domain === "Mentors" || b.role === "Mentor";
      if (isMentorA && isMentorB) {
        const mentorDiff = getMentorRank(a.name) - getMentorRank(b.name);
        if (mentorDiff !== 0) return mentorDiff;
      }

      return a.name.localeCompare(b.name);
    });
  };

  // Filtered members list strictly sorted by the hierarchy
  const visibleMembers = useMemo(() => {
    let list = currentYearMembers;
    if (selectedDomain !== "All") {
      list = list.filter((m) => m.domain === selectedDomain);
    }
    return sortMembers(list);
  }, [currentYearMembers, selectedDomain]);

  return (
    <section
      id="team"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-[#000000] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-600/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Users size={13} />
            <span>The Team · People Behind Embrione</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
            Meet the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              Team.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            Meet the students engineering the systems, managing the backend, and
            bringing Kodikon and Embrione initiatives to life at PES University.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {years.map((year) => {
            const isActive = activeYear === year;
            return (
              <button
                key={year}
                type="button"
                onClick={() => handleYearChange(year)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    : "border border-white/[0.08] bg-[#040816]/70 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <CalendarDays size={14} />
                <span>{year} {year === "2026" ? "(Current)" : ""}</span>
              </button>
            );
          })}
        </div>

        {/* Domain Filter Pills - Ordered strictly by Domain Hierarchy */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {domainOptions.map((domain) => {
            const isActive = selectedDomain === domain.name;
            const DomainIcon =
              domain.name === "All" ? Users : getDomainIcon(domain.name);

            return (
              <button
                key={domain.name}
                type="button"
                onClick={() => setSelectedDomain(domain.name)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border border-cyan-400/50 bg-cyan-400/15 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                    : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <DomainIcon size={12} className={isActive ? "text-cyan-300" : "text-slate-500"} />
                <span>{domain.name}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isActive
                      ? "bg-cyan-400/25 text-cyan-200"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {domain.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Unified Profiles Grid with smooth, instantaneous cross-fade transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeYear}-${selectedDomain}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {visibleMembers.map((member) => (
              <MemberCard
                key={`${activeYear}-${member.domain}-${member.name}`}
                member={member}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
