"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import embrioneLogo from "@/public/embrionelogo.webp";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Kodikon 6.0", href: "/kodikon-6" },
  { label: "Past Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarHome() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust only anchor-link scrolling. Scroll past the section's built-in top
  // padding so the section heading lands just below the fixed navbar.
  const handleAnchorClick = (event, href) => {
    if (!href?.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#02050e]/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Tokyo Cyberpunk Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-cyan-500/30 bg-[#060c1d] flex items-center justify-center p-1 group-hover:border-cyan-400 transition-colors shadow-[0_0_12px_rgba(6,182,212,0.15)]">
            <Image
              src={embrioneLogo}
              alt="The Embrione Crest"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm sm:text-base tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
              The Embrione
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400/80 tracking-wider uppercase font-normal">
              PES UNIVERSITY // CSE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (Clean Tokyo Cyberpunk Typography) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cyber Action Button: Kodikon 6.0 */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/kodikon-6"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:-translate-y-0.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black/60 animate-pulse" />
            <span>Kodikon 6.0</span>
            <ChevronRight size={13} />
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/kodikon-6"
            className="sm:hidden text-xs font-mono uppercase font-semibold px-3 py-1.5 rounded bg-cyan-500 text-black"
          >
            Kodi 6.0
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded text-slate-300 hover:text-white bg-[#060c1d] border border-cyan-500/30 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-5 space-y-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => {
                  handleAnchorClick(event, link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-normal text-neutral-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/kodikon-6"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium transition-colors w-full"
            >
              <span>Explore Kodikon 6.0</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
