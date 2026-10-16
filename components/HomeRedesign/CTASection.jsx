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
      className="relative isolate overflow-hidden bg-[#02050e] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 border-t border-white/5"
    >
      {/* Subtle Ambient Night Sky Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(6,182,212,0.1),transparent_40%),radial-gradient(ellipse_at_85%_78%,rgba(37,99,235,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#060c1d]/90 p-6 sm:p-9 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12">
            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold">
                <MessageSquare size={12} />
                <span>Get In Touch · Connect With Us</span>
              </div>

              <h2
                aria-label="Let's build something meaningful."
                className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Let&apos;s build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
                  something meaningful.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                Connect with The Embrione for student collaborations, technical
                initiatives, hackathon sponsorships, and community opportunities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=embrione_cse%40pes.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-400 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <Mail size={15} />
                  <span>Email The Society</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://maps.app.goo.gl/K2qedNEbRbfj2J397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
                >
                  <MapPin size={15} className="text-cyan-400" />
                  <span>Department of CSE, BE Block</span>
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="mb-3 text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Connect on Social Platforms
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
                        className="group inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200"
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

            <aside className="min-w-0 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Club Leadership Directory
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {clubHeads.map((head) => (
                  <div
                    key={head.email}
                    className="group rounded-xl border border-white/10 bg-black/40 p-4 transition duration-300 hover:border-cyan-400/40 hover:bg-black/60"
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-medium text-cyan-400">
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

              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500 font-medium">
                <span className="h-px flex-1 bg-white/10" />
                <span>The Embrione · PES University</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
