"use client";

import React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { BsInstagram, BsWhatsapp, BsDiscord } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { socialLinks } from "@/constants";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#000514]">
      <div className="rounded-lg bg-slate-900/80 border border-slate-800 p-5 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Left Column: Direct Communication */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Contact Us
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Connect with the student organizers and faculty coordinators of The Embrione at PES University.
            </p>

            {/* Direct Contact Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href="mailto:embrione_cse@pes.edu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs transition-colors"
              >
                <Mail size={14} />
                <span>embrione_cse@pes.edu</span>
              </a>

              <a
                href="https://maps.app.goo.gl/8GEdKPEDP3bF8yrC9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-md bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-colors"
              >
                <MapPin size={14} className="text-cyan-400" />
                <span>MRD Block, PES University</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Official Social Channels */}
            <div className="mt-8 flex items-center gap-2">
              <a
                href={socialLinks[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram size={15} />
              </a>
              <a
                href={socialLinks[1]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin size={17} />
              </a>
              <a
                href={socialLinks[2]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="WhatsApp Community"
              >
                <BsWhatsapp size={15} />
              </a>
              <a
                href={socialLinks[3]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="Discord Community"
              >
                <BsDiscord size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Key Leadership Directory */}
          <div className="p-6 rounded-lg bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase">Leadership Directory</span>
              <span className="text-xs font-mono text-slate-400">Term 2025-2026</span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="p-3 rounded-md bg-slate-900 border border-slate-800">
                <div className="text-xs font-semibold text-white">Kunjal Patwari</div>
                <div className="text-[11px] text-cyan-400 font-mono">Club Head • Department of CSE</div>
                <a href="mailto:patwarikunjal@gmail.com" className="text-xs text-slate-400 hover:text-white block mt-0.5 font-mono">
                  patwarikunjal@gmail.com
                </a>
              </div>

              <div className="p-3 rounded-md bg-slate-900 border border-slate-800">
                <div className="text-xs font-semibold text-white">Preksha M</div>
                <div className="text-[11px] text-cyan-400 font-mono">Club Head • Department of CSE</div>
                <a href="mailto:preksham2004@gmail.com" className="text-xs text-slate-400 hover:text-white block mt-0.5 font-mono">
                  preksham2004@gmail.com
                </a>
              </div>

              <div className="p-3 rounded-md bg-slate-900 border border-slate-800">
                <div className="text-xs font-semibold text-white">Vishal P</div>
                <div className="text-[11px] text-cyan-400 font-mono">Web Development Head</div>
                <a href="mailto:vishal04p74@gmail.com" className="text-xs text-slate-400 hover:text-white block mt-0.5 font-mono">
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
