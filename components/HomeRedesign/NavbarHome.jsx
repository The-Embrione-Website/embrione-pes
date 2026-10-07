"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import embrioneLogo from "@/public/embrionelogo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Kodikon 6.0", href: "/kodikon-6" },
  { label: "Kodikon 5.0", href: "/kodikon-5" },
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[#000514]/90 backdrop-blur-md border-b border-slate-800 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logos */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center p-1">
            <Image
              src={embrioneLogo}
              alt="The Embrione Crest"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold tracking-tight text-base sm:text-lg leading-tight">
              The Embrione
            </span>
            <span className="hidden xs:block text-[10px] sm:text-[11px] text-slate-400 font-mono tracking-wider">
              PES UNIVERSITY • DEPT. OF CSE
            </span>
            <span className="xs:hidden text-[10px] text-slate-400 font-mono tracking-wider">
              PES UNIVERSITY CSE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-md transition-colors hover:bg-slate-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons: Kodikon 5.0 and Kodikon 6.0 (visible on sm+) */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/kodikon-5"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <span>Kodikon 5.0</span>
          </Link>
          <Link
            href="/kodikon-6"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 border border-cyan-500/40 transition-colors"
          >
            <span>Kodikon 6.0</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button (visible on < 1024px) */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/kodikon-6"
            className="sm:hidden text-xs font-semibold px-2.5 py-1.5 rounded-md bg-cyan-600 text-white"
          >
            Kodi 6.0
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer (visible < 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000514]/98 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-6 py-4 space-y-3 max-h-[82vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2.5 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <Link
              href="/kodikon-5"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1 min-h-[44px] py-2 rounded-md bg-slate-900 border border-slate-800 text-white text-xs font-medium"
            >
              <span>Kodikon 5.0</span>
            </Link>
            <Link
              href="/kodikon-6"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 min-h-[44px] py-2 rounded-md bg-cyan-600 text-white text-xs font-semibold"
            >
              <span>Kodikon 6.0</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
