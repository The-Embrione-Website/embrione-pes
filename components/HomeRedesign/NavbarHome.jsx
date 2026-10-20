"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";
import embrioneLogo from "@/public/embrionelogo.webp";

const homeNavLinks = [
  { label: "About", href: "#about" },
  { label: "Past Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const kodikonNavLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Partners", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function NavbarHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isKodikonPage = pathname.startsWith("/kodikon-6");

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentNavLinks = isKodikonPage ? kodikonNavLinks : homeNavLinks;
  const ctaHref = isKodikonPage ? "https://hack2skill.com/event/kodikon6/" : "/kodikon-6";
  const ctaLabel = isKodikonPage ? "Register Now" : "Kodikon 6.0";
  const isCtaExternal = isKodikonPage;

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

  // Homepage and Kodikon section links work from every route.
  const getLinkHref = (href) => {
    if (isKodikonPage) {
      return href;
    }

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

    // Measure only the fixed top navigation bar, excluding any open mobile dropdown drawer
    const topBar = document.querySelector("header > div");
    const navbarHeight = topBar
      ? topBar.getBoundingClientRect().height
      : (window.innerWidth >= 640 ? 80 : 64);

    const sectionTop = window.scrollY + target.getBoundingClientRect().top;
    const top = sectionTop - navbarHeight - 12;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  const ctaClass =
    "inline-flex shrink-0 items-center justify-center gap-1.5 " +
    "rounded-md border border-blue-500/40 bg-[#1e3a8a] " +
    "font-mono font-semibold text-xs uppercase tracking-wider whitespace-nowrap " +
    "text-white shadow-lg shadow-blue-950/60 transition-colors " +
    "hover:bg-[#1d4ed8] hover:border-blue-400";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-black/95 border-b border-zinc-800 py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Horizontal Embrione logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-2 group"
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

          <span className="max-[340px]:hidden text-white font-semibold text-sm sm:text-base lg:text-xl tracking-tight whitespace-nowrap transition-colors group-hover:text-blue-400">
            The Embrione
          </span>
        </Link>

        {/* Center: Desktop navigation (1024px and up) */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {currentNavLinks.map((link) => {
            const href = getLinkHref(link.href);

            return (
              <Link
                key={link.label}
                href={href}
                onClick={(event) => handleAnchorClick(event, href)}
                className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-blue-400 transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Unified CTA + Hamburger Group (Always stays together on the right) */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={ctaHref}
            target={isCtaExternal ? "_blank" : undefined}
            rel={isCtaExternal ? "noopener noreferrer" : undefined}
            onClick={(event) => {
              if (!isCtaExternal) handleAnchorClick(event, ctaHref);
            }}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs ${ctaClass}`}
          >
            <span>{ctaLabel}</span>
            <ChevronRight size={14} className="hidden xs:inline-block sm:inline-block" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 h-9 w-9 sm:h-10 sm:w-10 flex shrink-0 items-center justify-center rounded-md text-zinc-300 hover:text-blue-400 bg-zinc-950 border border-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
          className="lg:hidden mt-3 bg-zinc-950 border-t border-b border-zinc-800 px-4 sm:px-6 py-4 space-y-3 max-h-[calc(100dvh-75px)] overflow-y-auto"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {currentNavLinks.map((link) => {
              const href = getLinkHref(link.href);

              return (
                <Link
                  key={link.label}
                  href={href}
                  onClick={(event) => handleAnchorClick(event, href)}
                  className="text-sm font-medium text-zinc-300 hover:text-blue-400 hover:bg-zinc-900 px-3 py-2.5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2.5 border-t border-zinc-800">
            <Link
              href={ctaHref}
              target={isCtaExternal ? "_blank" : undefined}
              rel={isCtaExternal ? "noopener noreferrer" : undefined}
              onClick={(event) => {
                if (!isCtaExternal) handleAnchorClick(event, ctaHref);
              }}
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