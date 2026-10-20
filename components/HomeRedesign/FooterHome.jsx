
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";

const exploreLinks = [
  { label: "About Us", href: "#about" },
  { label: "Kodikon 6.0", href: "/kodikon-6" },
  { label: "Past Events", href: "#events" },
  { label: "Meet The Team", href: "#team" },
  { label: "Previous Partners", href: "#partners" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:embrione@pes.edu",
    icon: Mail,
  },
];

export default function FooterSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Match the homepage section routing used by NavbarHome.
  const getLinkHref = (href) => {
    if (href.startsWith("#") && !isHome) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/[0.08] bg-black px-4 text-white sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] max-w-full -translate-x-1/2 bg-cyan-500/[0.04] blur-[130px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl py-12 sm:py-14">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.65fr_1fr] lg:gap-14">
          {/* Brand column */}
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-5">
              {/* PES University logo */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <Image
                  src="/PES-logos/without-bg-pesu.png"
                  alt="PES University"
                  width={128}
                  height={128}
                  sizes="64px"
                  className="h-full w-full scale-[1.8] object-contain"
                />
              </div>

              {/* Embrione logo and name */}
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  <Image
                    src="/embrionelogo.webp"
                    alt="The Embrione"
                    width={112}
                    height={112}
                    sizes="56px"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
                    The Embrione
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Innovation. Engineering. Community.
                  </p>
                </div>
              </div>
            </div>

            <p className="max-w-md text-sm font-light leading-6 text-slate-300">
              The premier student computing and hackathon society under the
              Department of Computer Science and Engineering at PES University.
              Fostering systems engineering, open innovation, and national
              hackathons.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.035] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <nav aria-label="Explore Embrione" className="min-w-0">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h4>

            <ul className="space-y-3">
              {exploreLinks.map((item) => {
                const href = getLinkHref(item.href);

                return (
                  <li key={item.label}>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-cyan-300"
                    >
                      {item.label}

                      {item.label === "Kodikon 6.0" && (
                        <span className="ml-1 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                          ONGOING
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Campus column */}
          <div className="min-w-0">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Campus
            </h4>

            <p className="text-sm font-semibold leading-6 text-slate-200">
              PES University (RR Campus)
            </p>

            <p className="text-sm leading-6 text-slate-400">
              Department of Computer Science and Engineering
            </p>

            <div className="mt-4 flex items-start gap-2">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-cyan-400"
              />

              <p className="text-sm leading-5 text-slate-400">
                PES University, 100 Feet Ring Road, BSK III Stage, Bengaluru –
                560085
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=PES+University+Ring+Road+Campus+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-200"
            >
              Open in Google Maps
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:mt-12 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            © {new Date().getFullYear()} The Embrione · Department of Computer
            Science and Engineering, PES University.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-400">
            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-300"
            >
              Terms of Use
            </Link>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="inline-flex items-center gap-1 transition hover:text-cyan-300"
            >
              Back to Top
              <ChevronUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
