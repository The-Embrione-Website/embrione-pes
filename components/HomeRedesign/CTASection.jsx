"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { BsInstagram, BsWhatsapp, BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { socialLinks } from "@/constants";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-black text-white">
      <div className="rounded-3xl bg-[#161617] border border-white/10 p-8 sm:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Direct Communication */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-2 font-medium">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
              Connect with <br />
              <span className="text-neutral-400">The Embrione.</span>
            </h2>

            <p className="mt-4 text-base text-neutral-300 leading-relaxed font-light max-w-md">
              Connect with the student organizers and faculty coordinators at PES University. We are open to hackathon partnerships, mentor inquiries, and student collaborations.
            </p>

            {/* Apple-style Pill Actions */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="mailto:embrione_cse@pes.edu"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-xs transition-colors shadow-sm"
              >
                <Mail size={14} />
                <span>embrione_cse@pes.edu</span>
              </a>

              <a
                href="https://maps.app.goo.gl/8GEdKPEDP3bF8yrC9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
              >
                <MapPin size={14} />
                <span>MRD Block, PES University</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Social channels */}
            <div className="mt-8 flex items-center gap-2.5">
              <a
                href={socialLinks[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram size={14} />
              </a>
              <a
                href={socialLinks[1]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin size={16} />
              </a>
              <a
                href={socialLinks[2]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="WhatsApp Community"
              >
                <BsWhatsapp size={14} />
              </a>
              <a
                href={socialLinks[3]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Discord Community"
              >
                <BsDiscord size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Key Leadership Directory */}
          <div className="p-6 sm:p-8 rounded-2xl bg-black/50 border border-white/10">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Leadership Directory</span>
              <span className="text-xs text-neutral-500 font-light">Term 2025-2026</span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="text-sm font-medium text-white">Kunjal Patwari</div>
                <div className="text-xs text-neutral-400">Club Head • Department of CSE</div>
                <a href="mailto:patwarikunjal@gmail.com" className="text-xs text-neutral-500 hover:text-neutral-300 block mt-1">
                  patwarikunjal@gmail.com
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="text-sm font-medium text-white">Preksha M</div>
                <div className="text-xs text-neutral-400">Club Head • Department of CSE</div>
                <a href="mailto:preksham2004@gmail.com" className="text-xs text-neutral-500 hover:text-neutral-300 block mt-1">
                  preksham2004@gmail.com
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="text-sm font-medium text-white">Vishal P</div>
                <div className="text-xs text-neutral-400">Web Development Head</div>
                <a href="mailto:vishal04p74@gmail.com" className="text-xs text-neutral-500 hover:text-neutral-300 block mt-1">
                  vishal04p74@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
