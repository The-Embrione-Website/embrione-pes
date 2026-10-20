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
import TeamCard3D from "./TeamCard3D";

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
  const isHead = member.role === "Head";
  const isViceHead = member.role === "Vice-Head";

  return (
    <article className="group relative aspect-[3/4] w-full min-w-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-colors hover:border-blue-500/50">
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
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
          <span className="text-4xl font-semibold text-zinc-600">
            {member.name?.charAt(0)?.toUpperCase() || "E"}
          </span>
        </div>
      )}

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Top badge: Role */}
      <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-start gap-2 z-10">
        <span className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-mono uppercase tracking-wider border border-zinc-800 bg-black/85 text-blue-400">
          {isFounder ? (
            <Crown size={12} className="text-blue-400" />
          ) : isMentor ? (
            <GraduationCap size={12} className="text-blue-400" />
          ) : isHead ? (
            <Sparkles size={12} className="text-blue-400" />
          ) : isViceHead ? (
            <Crown size={12} className="text-blue-400" />
          ) : null}
          <span>{member.role}</span>
        </span>
      </div>

      {/* Bottom info: Domain, Name & Social links */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-10">
        {!isMentor && (
          <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
            {member.domain}
          </p>
        )}

        <div className="flex items-end justify-between gap-2">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white leading-tight">
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
  const [hoveredMemberId, setHoveredMemberId] = useState(null);

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
      className="relative w-full overflow-hidden border-b border-zinc-800/80 bg-black px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-12"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-blue-400">03</span>
            <span className="h-px w-6 bg-blue-500/40" />
            <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">People &amp; Leadership</span>
          </div>

          <h2 className="font-curvy text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            Meet the Team.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl">
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
                className={`flex items-center gap-2 rounded-md px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#1e3a8a] text-white font-semibold shadow-md shadow-blue-950/60 border border-blue-500/40"
                    : "border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <CalendarDays size={14} />
                <span>{year} {year === "2026" ? "(Current)" : ""}</span>
              </button>
            );
          })}
        </div>

        {/* Domain Filter Pills */}
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
                className={`inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? "border border-blue-500/80 bg-blue-950/70 text-blue-300"
                    : "border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <DomainIcon size={12} className={isActive ? "text-blue-400" : "text-zinc-500"} />
                <span>{domain.name}</span>
                <span
                  className={`rounded px-1.5 py-0.5 text-xs font-mono ${
                    isActive
                      ? "bg-blue-900/60 text-blue-200"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {domain.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Unified Profiles Grid with smooth cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeYear}-${selectedDomain}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-6 pb-20 items-start px-2 sm:px-0"
          >
            {visibleMembers.map((member, index) => {
              const memberId = `${activeYear}-${member.domain}-${member.name}`;
              const isHovered = hoveredMemberId === memberId;
              const isDimmed = hoveredMemberId !== null && !isHovered;

              return (
                <TeamCard3D
                  key={memberId}
                  member={member}
                  index={index}
                  isHovered={isHovered}
                  isDimmed={isDimmed}
                  onHover={() => setHoveredMemberId(memberId)}
                  onLeave={() => setHoveredMemberId(null)}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
