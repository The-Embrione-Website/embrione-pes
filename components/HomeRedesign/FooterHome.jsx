"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, ChevronUp, ExternalLink } from "lucide-react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import embrioneLogo from "@/public/embrionelogo.webp";
import pesLogo from "@/public/Kodikon5/pes.webp";

const navigation = {
  explore: [
    { name: "About Us", href: "#about" },
    { name: "Kodikon 6.0", href: "/kodikon-6" },
    { name: "Past Events", href: "#events" },
    { name: "Meet The Team", href: "#team" },
    { name: "Previous Partners", href: "#partners" },
    { name: "Contact Us", href: "#contact" },
  ],
  initiatives: [
    { name: "Kodikon 6.0 (Upcoming)", href: "/kodikon-6" },
    { name: "Kodikon 5.0 Archive", href: "#events" },
    { name: "Kodikon 4.0 Archive", href: "#events" },
    { name: "Systems & Research", href: "#about" },
    { name: "Photo Gallery", href: "#events" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Code of Conduct", href: "/terms" },
    {
      name: "PES University CSE",
      href: "https://www.pes.edu",
      external: true,
    },
  ],
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/the_embrione.pesu/",
      icon: BsInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/the-embrione/",
      icon: BsLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/The-Embrione-Website/",
      icon: BsGithub,
    },
  ],
};

const campusAddress =
  "Department of CSE, B-Block, PES University, 100 Feet Ring Road, BSK III Stage, Bengaluru — 560085";
const mapsUrl = "https://maps.app.goo.gl/K2qedNEbRbfj2J397";

export default function FooterHome({ className = "", logoClassName = "" } = {}) {
  // Keep footer navigation links aligned with smooth anchor scrolling
  const handleFooterAnchorClick = (event, href) => {
    if (!href?.startsWith("#")) return;

    // If on another route (like /kodikon-6), navigate to /#section
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      return; // allow normal Link navigation to /#section
    }

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const sectionTop = window.scrollY + target.getBoundingClientRect().top;
    const sectionPaddingTop =
      parseFloat(window.getComputedStyle(target).paddingTop) || 0;
    const navbarHeight =
      document.querySelector("header")?.getBoundingClientRect().height || 0;
    const breathingRoom = 10;
    const top =
      sectionTop + sectionPaddingTop - navbarHeight - breathingRoom;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`relative isolate overflow-hidden bg-[#000000] text-slate-400 border-t border-white/[0.08] pt-16 pb-12 ${className}`}
    >
      {/* Apple-style Subtle Specular Top Hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent pointer-events-none" />

      {/* Subtle Ambient Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-25 blur-[140px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.20) 0%, rgba(37, 99, 235, 0.10) 40%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Bento Footer Grid */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 border-b border-white/[0.06]">
          {/* Brand Identity Column (5 cols on lg) */}
          <div className="space-y-5 lg:col-span-5 pr-0 lg:pr-6">
            <div className="flex items-center gap-3">
              {/* Embrione Logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#040816]/90 border border-white/[0.08] p-2 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <Image
                  src={embrioneLogo}
                  alt="The Embrione Crest"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* PES University Logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#040816]/90 border border-white/[0.08] p-2 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <Image
                  src={pesLogo}
                  alt="PES University Crest"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className={`text-base font-semibold tracking-[-0.02em] text-white ${logoClassName}`}>
                  The Embrione
                </h3>
                <p className="text-[11px] font-medium tracking-wide text-slate-400">
                  PES University · Department of CSE
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm font-normal leading-relaxed text-slate-400">
              The premier student computing &amp; hackathon society under the
              Department of Computer Science &amp; Engineering at PES University.
              Fostering systems engineering, open innovation, and national hackathons.
            </p>

            {/* Social Pills */}
            <div className="flex items-center gap-2 pt-1">
              {navigation.socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/[0.08] transition-all duration-200"
                  >
                    <IconComponent size={14} />
                  </a>
                );
              })}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=embrione_cse%40pes.edu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email The Embrione"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-500/[0.08] transition-all duration-200"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Explore Column (2 cols on lg) */}
          <nav aria-label="Explore Navigation" className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(event) => handleFooterAnchorClick(event, item.href)}
                    className="group inline-flex items-center gap-1 text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-400"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Initiatives & Legal Column (2 cols on lg) */}
          <nav aria-label="Initiatives & Legal Navigation" className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
              Initiatives
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navigation.initiatives.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(event) => handleFooterAnchorClick(event, item.href)}
                    className="group inline-flex items-center gap-1 text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-cyan-400"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Campus Location Bento Card (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
              Headquarters
            </h4>
            <div className="rounded-2xl bg-[#040816]/90 border border-white/[0.08] p-4.5 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.6)]">
              {/* Campus Indicator Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-slate-300">
                  PESU Ring Road Campus
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400 mb-4">
                <MapPin size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                <p className="text-xs leading-relaxed text-slate-300">
                  {campusAddress}
                </p>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/10 border border-white/[0.08] hover:border-cyan-400/30 text-xs font-medium text-slate-300 hover:text-cyan-200 transition-all duration-200"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight
                  size={12}
                  className="text-slate-400 group-hover:text-cyan-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Apple style) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} The Embrione · Department of Computer Science &amp; Engineering, PES University.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <Link
              href="/privacy-policy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">·</span>
            <Link
              href="/terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-slate-700">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ChevronUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
