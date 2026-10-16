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
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.07] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center p-1.5 group-hover:border-cyan-400/50 transition-colors shadow-sm">
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
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
              Department of CSE · PES University
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Kodikon 6.0 Pill Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/kodikon-6"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-xs font-semibold uppercase tracking-wider text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-black/70 animate-pulse" />
            <span>Kodikon 6.0</span>
            <ChevronRight size={13} />
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/kodikon-6"
            className="sm:hidden text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-500 text-black uppercase tracking-wider"
          >
            Kodikon 6.0
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-5 space-y-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(event) => {
                  handleAnchorClick(event, link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/kodikon-6"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 min-h-[44px] py-2.5 px-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-semibold uppercase tracking-wider transition-colors w-full"
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
