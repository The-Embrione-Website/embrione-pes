"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight, MoveUpRight, MessageSquare } from "lucide-react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/the_embrione.pesu/",
    icon: BsInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/the-embrione/",
    icon: AiFillLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/The-Embrione-Website/",
    icon: BsGithub,
  },
];

const clubHeads = [
  { role: "Club Head", name: "Trisha", email: "trishavp25@gmail.com" },
  { role: "Club Head", name: "Chinmay", email: "chinmaygrandhi2006@gmail.com" },
  {
    role: "Web Development Head",
    name: "Sagar",
    email: "sagarmh6364@gmail.com",
  },
];

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#000000] px-4 py-24 sm:py-32 lg:px-8 border-t border-white/[0.06]"
    >
      {/* Subtle Night Sky Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(6,182,212,0.08),transparent_40%),radial-gradient(ellipse_at_80%_80%,rgba(37,99,235,0.1),transparent_45%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-[#040816]/90 p-8 sm:p-12 lg:p-14 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
        >
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-14">
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold backdrop-blur-md">
                <MessageSquare size={12} />
                <span>Get In Touch · Society Network</span>
              </div>

              <h2
                aria-label="Let's build something meaningful."
                className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-0.03em] text-white"
              >
                Let&apos;s build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
                  something meaningful.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-light">
                Connect with The Embrione for student collaborations, technical initiatives, hackathon sponsorships, and community partnerships.
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=embrione_cse%40pes.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                >
                  <Mail size={15} />
                  <span>Email The Society</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://maps.app.goo.gl/K2qedNEbRbfj2J397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] px-7 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MapPin size={15} className="text-cyan-400" />
                  <span>PES University, BE Block</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="mt-12 border-t border-white/[0.08] pt-7">
                <p className="mb-3.5 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Official Channels
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                      >
                        <IconComponent size={14} />
                        <span>{social.name}</span>
                        <MoveUpRight size={11} className="text-slate-500 transition-colors group-hover:text-cyan-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="min-w-0 border-t border-white/[0.08] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="mb-5">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Club Leadership Directory
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 lg:grid-cols-1">
                {clubHeads.map((head) => (
                  <div
                    key={head.email}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.04] p-5 transition-all duration-300 hover:border-cyan-400/30"
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400">
                        {head.role}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">{head.name}</h3>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(head.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 block break-all text-xs leading-relaxed text-slate-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-300"
                    >
                      {head.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500 font-medium">
                <span className="h-px flex-1 bg-white/[0.08]" />
                <span>The Embrione · PES University</span>
                <span className="h-px flex-1 bg-white/[0.08]" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
