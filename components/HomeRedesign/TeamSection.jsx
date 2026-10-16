
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowUpRight,
  Users,
  CalendarDays,
} from "lucide-react";

import teamMembers from "./teamData";
import { teamMembersDetails } from "./constants.js";
import { pastHeads2024 } from "./pastHeadsData.js";

const currentDomains = [
  "Club Heads",
  "Web Development",
  "Design",
  "Logistics",
  "Hospitality",
  "Social Media & Video Editing",
  "Campaigning",
  "Sponsorship",
  "Event Management",
  "Operations",
];

const years = ["2026", "2025", "2024"];

// Convert older data formats into the current team-card format.
function normalizeMember(member, year) {
  const rawLinkedIn = member.linkedin ?? member.linkedinUrl ?? "";
  const rawGithub = member.github ?? member.githubUrl ?? "";

  const validUrl = (url) =>
    typeof url === "string" && /^https?:\/\//i.test(url)
      ? url
      : null;

  return {
    name: member.name,
    domain: member.domain || "Other",
    role: member.role || "Member",
    photo: member.photo || member.photoUrl || null,
    linkedin: validUrl(rawLinkedIn),
    github: validUrl(rawGithub),
    featured: Boolean(member.featured),
    term: member.term || (year === "2025" ? "2025–2026" : "2024–2025"),
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
      onClick={(event) => event.stopPropagation()}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:h-9 sm:w-9"
    >
      {children}
    </a>
  );
}

function MemberCard({ member, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{
        duration: 0.25,
        delay: index * 0.035,
        ease: "easeOut",
      }}
      className="group relative isolate aspect-[4/5] w-full min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#040816] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-cyan-400/40"
    >
      {member.photo ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
          style={{ objectPosition: "50% 50%" }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#040816] via-[#0b1830] to-cyan-950/40">
          <span className="text-5xl font-semibold text-cyan-300/70">
            {member.name?.charAt(0)?.toUpperCase() || "E"}
          </span>
        </div>
      )}

      {/* Readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-blue-950/25 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Role */}
      <div className="absolute inset-x-0 top-0 p-3 sm:p-4">
        <span className="inline-flex max-w-full rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-md sm:text-[10px]">
          {member.role}
        </span>
      </div>

      {/* Name and social links */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-[10px]">
          {member.domain}
        </p>

        <div className="flex items-end justify-between gap-2">
          <h3 className="min-w-0 break-words text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
            {member.name}
          </h3>

          <div className="flex shrink-0 items-center gap-1.5">
            <SocialLink
              href={member.linkedin}
              label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={15} />
            </SocialLink>

            <SocialLink
              href={member.github}
              label={`${member.name} on GitHub`}
            >
              <Github size={15} />
            </SocialLink>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const [activeYear, setActiveYear] = useState("2026");
  const [activeDomain, setActiveDomain] = useState("Club Heads");

  // Normalize the three years to one shared format.
  const membersByYear = useMemo(
    () => ({
      "2026": teamMembers.map((member) =>
        normalizeMember(member, "2026")
      ),
      "2025": teamMembersDetails.map((member) =>
        normalizeMember(member, "2025")
      ),
      "2024": pastHeads2024.map((member) =>
        normalizeMember(member, "2024")
      ),
    }),
    []
  );

  // Keep the current-year domains; derive historical domains from their data.
  const domainOptions = useMemo(() => {
    if (activeYear === "2026") {
      return currentDomains;
    }

    const uniqueDomains = [
      ...new Set(
        membersByYear[activeYear]
          .map((member) => member.domain)
          .filter(Boolean)
      ),
    ];

    // Show club leadership first when it exists in the historical data.
    return uniqueDomains.sort((a, b) => {
      const aIsClub = /club head/i.test(a);
      const bIsClub = /club head/i.test(b);
      return Number(bIsClub) - Number(aIsClub);
    });
  }, [activeYear, membersByYear]);

  // Reset the selected domain when switching years.
  useEffect(() => {
    setActiveDomain(
      activeYear === "2026"
        ? "Club Heads"
        : domainOptions[0] || ""
    );
  }, [activeYear, domainOptions]);

  // Automatically switch domains every 10 seconds.
  useEffect(() => {
    if (domainOptions.length < 2) return;

    const interval = setInterval(() => {
      setActiveDomain((currentDomain) => {
        const currentIndex = domainOptions.indexOf(currentDomain);
        return domainOptions[
          (currentIndex + 1 + domainOptions.length) %
            domainOptions.length
        ];
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [domainOptions]);

  // Filter the active year's members and put heads before core members.
  const visibleMembers = useMemo(() => {
    const members = membersByYear[activeYear] || [];

    const filtered =
      activeYear === "2026" && activeDomain === "Club Heads"
        ? members.filter((member) => member.featured)
        : members.filter((member) => member.domain === activeDomain);

    const isHeadOrLead = (member) =>
      member.featured ||
      /\b(head|lead)\b/i.test(member.role || "");

    return [...filtered].sort(
      (a, b) => Number(isHeadOrLead(b)) - Number(isHeadOrLead(a))
    );
  }, [activeYear, activeDomain, membersByYear]);

  return (
    <section
      id="team"
      className="relative w-full overflow-hidden border-t border-white/[0.06] bg-black px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-10 h-64 w-64 rounded-full bg-cyan-500/[0.07] blur-[110px] sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-600/[0.05] blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section heading */}
        <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <Users size={12} />
            The people behind the work
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
              team.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Meet the people building, designing, and bringing Embrione
            initiatives to life.
          </p>
        </div>

        {/* Year selector */}
        <div
          className="mb-7 flex w-full max-w-full items-center gap-1.5 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#040816]/90 p-1.5 sm:mb-9 sm:inline-flex sm:w-auto"
          aria-label="Select team year"
        >
          {years.map((year) => {
            const isActive = activeYear === year;

            return (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                aria-pressed={isActive}
                className={`flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-6 ${
                  isActive
                    ? "bg-cyan-400 text-black shadow-[0_0_18px_rgba(6,182,212,0.18)]"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <CalendarDays size={14} />
                {year}
              </button>
            );
          })}
        </div>

        {/* Domain selector + member grid */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-5 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-6">
          {/* Left sidebar on desktop; horizontal chips on mobile */}
          <aside className="min-w-0 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/[0.08] bg-[#040816]/90 p-3 backdrop-blur-xl sm:p-4 lg:p-3">
              <div className="px-1 pb-3 pt-1 sm:px-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Explore domains
                </p>
              </div>

              <nav
                aria-label={`${activeYear} team domains`}
                className="flex gap-2 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin] [scrollbar-color:#164e63_transparent] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:pb-0"
              >
                {domainOptions.map((domain) => {
                  const isActive = activeDomain === domain;

                  return (
                    <button
                      key={domain}
                      type="button"
                      onMouseEnter={() => setActiveDomain(domain)}
                      onFocus={() => setActiveDomain(domain)}
                      onClick={() => setActiveDomain(domain)}
                      aria-pressed={isActive}
                      className={`flex min-h-10 shrink-0 items-center justify-between gap-3 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition-colors duration-200 lg:w-full ${
                        isActive
                          ? "border-cyan-300/25 bg-cyan-400/[0.09] text-cyan-200"
                          : "border-transparent bg-transparent text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <span className="whitespace-nowrap lg:whitespace-normal">
                        {domain}
                      </span>

                      <ArrowUpRight
                        size={14}
                        className={`shrink-0 ${
                          isActive
                            ? "text-cyan-300"
                            : "text-slate-500 opacity-60"
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Member cards */}
          <div className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                  {activeYear} Team
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {activeDomain}
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[10px] text-slate-400">
                {visibleMembers.length}{" "}
                {visibleMembers.length === 1 ? "member" : "members"}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeYear}-${activeDomain}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3"
              >
                {visibleMembers.length > 0 ? (
                  visibleMembers.map((member, index) => (
                    <MemberCard
                      key={`${activeYear}-${member.name}`}
                      member={member}
                      index={index}
                    />
                  ))
                ) : (
                  <div className="flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#040816]/70 p-6 text-center sm:col-span-2 xl:col-span-3">
                    <Users
                      className="mb-3 text-cyan-400/70"
                      size={24}
                    />

                    <p className="text-sm text-slate-300">
                      No profiles available for this domain yet.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Try another domain or year.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
