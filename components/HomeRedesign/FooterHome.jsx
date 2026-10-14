"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, ChevronRight } from "lucide-react";
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
      href: "https://www.instagram.com/the.embrione/",
      icon: BsInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/the-embrione/",
      icon: BsLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/the-embrione",
      icon: BsGithub,
    },
  ],
};

export default function FooterHome() {
  return (
    <footer className="bg-[#111111] border-t border-white/10 text-neutral-400 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1">
                <Image
                  src={embrioneLogo}
                  alt="The Embrione Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-1">
                <Image
                  src={pesLogo}
                  alt="PES University"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm leading-tight">
                  The Embrione
                </h3>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-light">
                  PES University • Dept. of CSE
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-light">
              Official technical vertical under the Department of Computer Science &amp; Engineering at PES University (Ring Road Campus, Bengaluru).
            </p>

            {/* Social channels */}
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
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  >
                    <IconComponent size={13} />
                  </a>
                );
              })}
              <a
                href="mailto:embrione_cse@pes.edu"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Email Embrione"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-200 font-medium mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.explore.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Editions & Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-200 font-medium mb-3">
              Hackathons &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              {navigation.editions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10" />
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Campus Location */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-200 font-medium mb-3">
              Campus Location
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400 font-light">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-neutral-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Department of CSE, MRD Block, PES University, 100 Feet Ring Road, BSK III Stage, Bengaluru - 560085
                </span>
              </div>
              <div className="pt-1">
                <a
                  href="https://maps.app.goo.gl/yM55i9sWcceH5pPn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#0071e3] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left font-light">
          <p>
            &copy; {new Date().getFullYear()} The Embrione • Department of CSE, PES University. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-neutral-400 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
