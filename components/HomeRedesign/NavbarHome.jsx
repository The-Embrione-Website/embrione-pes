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
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu automatically when resizing up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const ctaClass =
    "inline-flex shrink-0 items-center justify-center gap-1.5 " +
    "rounded-full border border-cyan-400/30 bg-white/[0.04] " +
    "font-semibold uppercase tracking-wider whitespace-nowrap " +
    "text-cyan-300 transition-all duration-200 " +
    "hover:border-cyan-300/70 hover:bg-cyan-400/10 " +
    "hover:text-white hover:-translate-y-0.5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/[0.07] py-3 sm:py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Horizontal Embrione logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2 group"
          aria-label="The Embrione homepage"
        >
          <div className="relative w-[52px] h-[36px] sm:w-[96px] sm:h-[46px] lg:w-[112px] lg:h-[52px] shrink-0 overflow-hidden">
            <Image
              src={embrioneLogo}
              alt="Embrione logo"
              fill
              sizes="(max-width: 640px) 52px, (max-width: 1024px) 96px, 112px"
              priority
              className="object-contain sm:object-cover object-center"
            />
          </div>

          <span className="max-[340px]:hidden text-white font-bold text-sm sm:text-lg lg:text-2xl tracking-tight whitespace-nowrap transition-colors group-hover:text-cyan-300">
            The Embrione
          </span>
        </Link>

        {/* Center: Desktop navigation (1024px and up) */}
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

        {/* Right: Unified CTA + Hamburger Group (Always stays together on the right) */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <Link
            href={ctaHref}
            onClick={(event) => handleAnchorClick(event, ctaHref)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs ${ctaClass}`}
          >
            <span>{ctaLabel}</span>
            <ChevronRight size={14} className="hidden xs:inline-block sm:inline-block" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 h-9 w-9 sm:h-10 sm:w-10 flex shrink-0 items-center justify-center rounded-lg text-slate-300 hover:text-cyan-300 bg-white/[0.04] border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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

      {/* Mobile & Tablet navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden mt-3 bg-[#030712]/95 backdrop-blur-2xl border-t border-b border-white/10 px-4 sm:px-6 py-4 space-y-3 max-h-[calc(100dvh-75px)] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const href = getLinkHref(link.href);

              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(event) => handleAnchorClick(event, href)}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05] px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2.5 border-t border-white/10">
            <Link
              href={ctaHref}
              onClick={(event) => handleAnchorClick(event, ctaHref)}
              className={`w-full min-h-10 px-4 py-2.5 text-xs ${ctaClass}`}
            >
              <span>{ctaLabel}</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}