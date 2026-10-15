"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
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
  editions: [
    { name: "Kodikon 6.0 (Upcoming)", href: "/kodikon-6" },
    { name: "Past Editions & Gallery", href: "#events" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
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
  "Department of CSE, BE Block, PES University, 100 Feet Ring Road, BSK III Stage - 560085";
const mapsUrl = "https://maps.app.goo.gl/K2qedNEbRbfj2J397";

export default function FooterHome() {
  return (
    <footer
      className="relative isolate overflow-hidden border-t border-cyan-100/10 bg-[#030814] pt-8 text-slate-400 sm:pt-10"
      style={{ perspective: "1200px" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(6,182,212,0.10),transparent_32%),radial-gradient(ellipse_at_95%_55%,rgba(30,64,175,0.12),transparent_38%)]" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-cyan-200/[0.08]" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-cyan-200/[0.08]" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 border-b border-white/10 pb-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:pb-7">
          {/* Identity */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-cyan-200/20 bg-white/[0.035] p-1 transition duration-300 hover:-translate-y-1 hover:rotate-[-3deg] hover:border-cyan-200/50">
                <Image
                  src={embrioneLogo}
                  alt="The Embrione Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.035] p-1">
                <Image
                  src={pesLogo}
                  alt="PES University"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-tight text-white">
                  The Embrione
                </h3>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.15em] text-slate-500">
                  PES University · Department of CSE
                </p>
              </div>
            </div>

            <p className="max-w-sm text-xs font-light leading-relaxed text-slate-400 sm:text-sm">
              The technical club under the Department of Computer Science &amp;
              Engineering at PES University.
            </p>

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
                    className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.025] text-slate-400 transition duration-300 hover:-translate-y-1 hover:rotate-[-2deg] hover:border-cyan-200/50 hover:bg-cyan-200/[0.06] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
                className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.025] text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Mail size={14} />
              </a>
            </div>

            
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h4 className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-100">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={11} className="text-cyan-300/0 transition-colors group-hover:text-cyan-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hackathons and legal */}
          <nav aria-label="Hackathons and legal">
            <h4 className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-100">
              Hackathons &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.editions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={11} className="text-cyan-300/0 transition-colors group-hover:text-cyan-200" />
                  </Link>
                </li>
              ))}
              <li className="!my-3 border-t border-white/10" />
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 transition-colors hover:text-cyan-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Location */}
          <div className="min-w-0">
            <h4 className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-100">
              Campus Location
            </h4>
            <div className="group border border-white/10 bg-white/[0.025] p-3 transition duration-300 [transform-style:preserve-3d] hover:[transform:perspective(900px)_rotateX(1deg)_translateY(-4px)] hover:border-cyan-200/35 hover:bg-cyan-200/[0.035]">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-200" />
                <p className="text-xs leading-relaxed text-slate-300">{campusAddress}</p>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-cyan-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Open in Google Maps
                <ArrowUpRight size={12} />
              </a>
              <div aria-hidden="true" className="mt-3 h-px w-full bg-gradient-to-r from-cyan-300/50 to-transparent" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-4 text-center text-[11px] font-light text-slate-500 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} The Embrione · Department of CSE,
            PES University. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-cyan-100">
              Privacy Policy
            </Link>
            <span className="text-cyan-300/50">/</span>
            <Link href="/terms" className="transition-colors hover:text-cyan-100">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
