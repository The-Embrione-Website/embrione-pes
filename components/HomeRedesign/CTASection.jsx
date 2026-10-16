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
    role: "Web Development Head",
    name: "Sagar",
    email: "sagarmh6364@gmail.com",
  },
];

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#02050e] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8"
      style={{ perspective: "1400px" }}
    >
      {/* Tokyo Cyberpunk atmospheric night-sky layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(6,182,212,0.15),transparent_40%),radial-gradient(ellipse_at_85%_78%,rgba(30,64,175,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full border border-cyan-400/10 sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div
          className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#060c1d]/90 p-6 transition-transform duration-500 ease-out hover:[transform:rotateX(0.35deg)_rotateY(-0.35deg)] shadow-[0_0_35px_rgba(6,182,212,0.1)] sm:p-9 lg:p-12"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
          />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-32 w-32 border-b border-l border-cyan-400/20 [clip-path:polygon(100%_0,100%_100%,0_0)]" />

          {/* Cyber Corner Markers */}
          <span className="absolute top-2 left-3 font-mono text-[8px] text-cyan-500/40 select-none">◤ 01</span>
          <span className="absolute top-2 right-3 font-mono text-[8px] text-cyan-500/40 select-none">02 ◥</span>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />
                <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-cyan-300 font-bold">
                  GET IN TOUCH // 「交信端末」
                </span>
              </div>

              <h2
                aria-label="Let's build something meaningful."
                className="max-w-2xl text-3xl font-black leading-[1.04] tracking-tight text-white uppercase font-display sm:text-4xl lg:text-5xl"
              >
                Let&apos;s build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  something meaningful.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Connect with The Embrione for student collaborations, technical
                initiatives, hackathon partnerships, and community opportunities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=embrione_cse%40pes.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 border border-cyan-300 bg-cyan-300 px-5 py-3 text-sm font-semibold text-[#06111e] transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#091321]"
                >
                  <Mail size={15} />
                  Email The Embrione
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://maps.app.goo.gl/K2qedNEbRbfj2J397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <MapPin size={15} className="text-cyan-200" />
                  Department of CSE, BE Block
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                  Find us online
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
                        className="group inline-flex min-h-10 items-center gap-2 border border-white/10 bg-white/[0.025] px-3.5 py-2.5 text-sm text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/[0.06] hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        <IconComponent size={15} />
                        <span>{social.name}</span>
                        <MoveUpRight size={12} className="text-slate-500 transition-colors group-hover:text-cyan-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <aside className="min-w-0 border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                  Club leadership
                </p>
                
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {clubHeads.map((head) => (
                  <div
                    key={head.email}
                    className="group relative border border-white/10 bg-white/[0.025] p-4 transition duration-300 [transform-style:preserve-3d] hover:[transform:perspective(900px)_rotateX(1deg)_translateY(-4px)] hover:border-cyan-200/45 hover:bg-cyan-300/[0.035]"
                  >
                    <div className="absolute right-0 top-0 h-7 w-7 border-b border-l border-cyan-300/20 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-cyan-200">
                        {head.role}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">{head.name}</h3>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(head.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 block break-all text-xs leading-relaxed text-slate-300 underline decoration-white/15 underline-offset-4 transition-colors hover:text-cyan-100 hover:decoration-cyan-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {head.email}
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-500">
                <span className="h-px flex-1 bg-white/10" />
                <span>THE EMBRIONE TEAM</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ctaWordReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 0.45em, -18px) rotateX(-18deg);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotateX(0);
            filter: blur(0);
          }
        }

        .cta-word-reveal {
          opacity: 0;
          transform-origin: 50% 100%;
          animation: ctaWordReveal 680ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
          will-change: transform, opacity, filter;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-word-reveal {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      `}</style>
    </section>
  );
}
