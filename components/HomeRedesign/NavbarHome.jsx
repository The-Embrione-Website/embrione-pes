"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";
import embrioneLogo from "@/public/embrionelogo.webp";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Past Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isKodikonPage = pathname.startsWith("/kodikon-6");

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ctaHref = isKodikonPage ? "#tracks" : "/kodikon-6";
  const ctaLabel = isKodikonPage ? "See Tracks" : "Kodikon 6.0";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Homepage section links work from every route.
  const getLinkHref = (href) => {
    if (href.startsWith("#") && !isHome) {
      return `/${href}`;
    }

    return href;
  };

  // Smooth-scroll for sections on the current page.
  const handleAnchorClick = (event, href) => {
    setMobileMenuOpen(false);

    if (!href?.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));

    // Allow normal browser navigation if the target isn't on this page.
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const sectionTop = window.scrollY + target.getBoundingClientRect().top;

    const navbarHeight =
      document.querySelector("header")?.getBoundingClientRect().height || 0;

    const top = sectionTop - navbarHeight - 10;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  // Shared look only. Display (hidden / inline-flex) and padding are set
  // per usage below so they can never conflict with each other.
  const ctaClass =
    "shrink-0 items-center justify-center gap-1.5 " +
    "rounded-full border border-cyan-400/30 bg-white/[0.04] " +
    "py-2 font-semibold uppercase tracking-wider " +
    "text-cyan-300 transition-all duration-200 " +
    "hover:border-cyan-300/70 hover:bg-cyan-400/10 " +
    "hover:text-white hover:-translate-y-0.5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.07] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-6xl h-[60px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-3">
        {/* Horizontal Embrione logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex shrink-0 items-center gap-1.5 group"
          aria-label="The Embrione homepage"
        >
          <div className="relative w-[60px] h-[40px] sm:w-[112px] sm:h-[52px] shrink-0 overflow-hidden">
            <Image
              src={embrioneLogo}
              alt="Embrione logo"
              fill
              sizes="112px"
              priority
              className="object-contain sm:object-cover object-center"
            />
          </div>

          <span className="max-[359px]:hidden text-white font-bold text-base sm:text-xl lg:text-2xl tracking-tight whitespace-nowrap transition-colors group-hover:text-cyan-300">
            The Embrione
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7"
        >
          {navLinks.map((link) => {
            const href = getLinkHref(link.href);

            return (
              <Link
                key={link.label}
                href={href}
                onClick={(event) => handleAnchorClick(event, href)}
                className="text-xs uppercase tracking-wider text-slate-300 hover:text-cyan-300 transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop / tablet CTA (640px and up) */}
        <Link
          href={ctaHref}
          onClick={(event) => handleAnchorClick(event, ctaHref)}
          className={`hidden sm:inline-flex px-4 text-xs ${ctaClass}`}
        >
          {ctaLabel}
          <ChevronRight size={14} />
        </Link>

        {/* Mobile controls */}
        <div className="flex lg:hidden shrink-0 items-center gap-2">
          {/* Phone-only CTA (below 640px) */}
          <Link
            href={ctaHref}
            onClick={(event) => handleAnchorClick(event, ctaHref)}
            className={`inline-flex sm:hidden px-2.5 text-[11px] ${ctaClass}`}
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 min-h-10 min-w-10 flex shrink-0 items-center justify-center rounded-lg text-slate-300 hover:text-cyan-300 bg-white/[0.04] border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden mt-3 bg-[#030712]/95 backdrop-blur-2xl border-t border-b border-white/10 px-4 sm:px-6 py-5 space-y-4 max-h-[80vh] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const href = getLinkHref(link.href);

              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(event) => handleAnchorClick(event, href)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05] px-3 py-3 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10">
            <Link
              href={ctaHref}
              onClick={(event) => handleAnchorClick(event, ctaHref)}
              className={`inline-flex w-full min-h-11 px-4 text-xs ${ctaClass}`}
            >
              {ctaLabel}
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
