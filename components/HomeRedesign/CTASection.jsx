"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight, MoveUpRight } from "lucide-react";
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
    role: "Tech Head",
    name: "Sagar",
    email: "sagarmh6364@gmail.com",
  },
];

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative bg-black px-4 py-20 sm:py-28 lg:px-12 border-b border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-16">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-mono font-semibold tracking-widest text-blue-400">05</span>
                <span className="h-px w-6 bg-blue-500/40" />
                <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">Contact &amp; Collaborations</span>
              </div>

              <h2
                aria-label="Let's build something meaningful."
                className="font-curvy max-w-2xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight text-white"
              >
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-4 max-w-xl text-base text-zinc-400 font-normal leading-relaxed">
                Connect with The Embrione for student collaborations, technical initiatives, hackathon sponsorships, and community partnerships.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=embrione_cse%40pes.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1e3a8a] hover:bg-[#1d4ed8] border border-blue-500/40 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/60 transition-colors"
                >
                  <Mail size={15} />
                  <span>Email The Society</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://maps.app.goo.gl/K2qedNEbRbfj2J397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 hover:border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  <MapPin size={15} className="text-blue-400" />
                  <span>PES University</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="mt-12 border-t border-zinc-800 pt-6">
                <p className="mb-4 text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Official Channels
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-black/60 px-3 py-2 text-xs font-mono text-zinc-300 transition-colors hover:border-blue-500/50 hover:text-white"
                      >
                        <IconComponent size={14} />
                        <span>{social.name}</span>
                        <MoveUpRight size={11} className="text-zinc-500" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="min-w-0 border-t border-zinc-800 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="mb-4">
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                  Club Leadership Directory
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {clubHeads.map((head) => (
                  <div
                    key={head.email}
                    className="rounded-lg border border-zinc-800 bg-black/60 p-4 transition-colors hover:border-blue-500/50"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                        {head.role}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">{head.name}</h3>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(head.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block break-all text-xs font-mono text-zinc-400 transition-colors hover:text-blue-400"
                    >
                      {head.email}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-zinc-500">
                <span className="h-px flex-1 bg-zinc-800" />
                <span>The Embrione · PES University</span>
                <span className="h-px flex-1 bg-zinc-800" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
