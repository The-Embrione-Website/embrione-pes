
"use client";

import Image from "next/image";
import {
  sponsorsHeader,
  titleSponsor,
  platformPartners,
} from "./sponsorsData";

export default function SponsorsComponent() {
  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden bg-[#000514] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] max-w-full -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-cyan-300" />
            <span className="break-words font-mono text-[10px] tracking-[0.15em] text-cyan-200 sm:text-xs sm:tracking-[0.2em]">
              {sponsorsHeader.telemetry}
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Sponsors &{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Industry Partners
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {sponsorsHeader.description}
          </p>
        </header>

        {/* Title Sponsor heading */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 shrink-0 bg-cyan-400" />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
            {titleSponsor.tier}
          </p>
        </div>

        {/* Featured Title Sponsor */}
        <article className="group relative mb-14 w-full overflow-hidden rounded-3xl border border-cyan-400/30 bg-[#050d20] shadow-[0_0_60px_rgba(6,182,212,0.07)] transition duration-500 hover:border-cyan-300/60 sm:mb-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr]">
            {/* Logo */}
            <div className="relative flex min-h-[260px] flex-col items-center justify-center border-b border-white/10 p-6 sm:min-h-[320px] sm:p-10 lg:border-b-0 lg:border-r">
              <span className="absolute left-5 top-5 max-w-[80%] break-words font-mono text-[9px] tracking-[0.12em] text-cyan-300/70 sm:text-[10px] sm:tracking-[0.18em]">
                {titleSponsor.tierBadge}
              </span>

              <div className="relative mt-6 flex h-36 w-full max-w-[280px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 group-hover:border-cyan-300/30 group-hover:bg-white/[0.05] sm:h-44">
                <Image
                  src={titleSponsor.logo}
                  alt={`${titleSponsor.name} logo`}
                  width={400}
                  height={200}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-6 text-center text-xs uppercase tracking-[0.15em] text-slate-500">
                Official Title Sponsor · Kodikon 6.0
              </p>

              <a
                href={titleSponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              >
                Visit Website
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Sponsor details */}
            <div className="relative min-w-0 p-6 sm:p-9 lg:p-10">
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                <span className="break-words font-mono text-[9px] tracking-[0.1em] text-amber-200 sm:text-[10px] sm:tracking-[0.15em]">
                  {titleSponsor.tierBadge}
                </span>
              </div>

              <h3 className="break-words text-3xl font-black tracking-tight sm:text-4xl">
                {titleSponsor.name}
              </h3>

              <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-cyan-200 sm:text-lg">
                {titleSponsor.tagline}
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                {titleSponsor.description}
              </p>

              {/* Highlights */}
              {Array.isArray(titleSponsor.highlights) &&
                titleSponsor.highlights.length > 0 && (
                  <div className="mt-7 space-y-3">
                    {titleSponsor.highlights.map((highlight, index) => (
                      <div
                        key={`${index}-${highlight}`}
                        className="flex items-start gap-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-cyan-400/25 bg-cyan-400/10 font-mono text-xs text-cyan-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-6 text-slate-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

              {/* Stats */}
              {Array.isArray(titleSponsor.stats) &&
                titleSponsor.stats.length > 0 && (
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {titleSponsor.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="min-w-0 rounded-xl border border-white/10 bg-black/20 p-4"
                      >
                        <p className="font-mono text-[9px] tracking-[0.15em] text-slate-500">
                          {stat.label}
                        </p>
                        <p className="mt-2 break-words text-sm font-semibold leading-5 text-white">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </article>

        {/* Software Support Partners */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 shrink-0 bg-cyan-400" />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
            Platform & Software Support
          </p>
        </div>

        {/* Every partner occupies the full available width */}
        <div className="flex w-full flex-col gap-5">
          {Array.isArray(platformPartners) &&
            platformPartners.map((partner) => (
              <article
                key={partner.id}
                className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070e20] transition duration-300 hover:border-cyan-400/40 hover:bg-[#091329]"
              >
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-cyan-500/[0.06] blur-[80px] transition group-hover:bg-cyan-500/10" />

                <div className="relative grid w-full grid-cols-1 items-center gap-6 p-5 sm:p-7 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[220px_minmax(0,1fr)_auto]">
                  {/* Partner logo */}
                  <div className="flex min-h-[120px] w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-6 md:min-h-[150px]">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={320}
                      height={140}
                      className="h-20 w-full object-contain sm:h-24"
                    />
                  </div>

                  {/* Partner details */}
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 font-mono text-[10px] tracking-wider text-cyan-200">
                        {partner.role}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] tracking-wider text-slate-400">
                        {partner.badge}
                      </span>
                    </div>

                    <h3 className="break-words text-2xl font-bold text-white transition group-hover:text-cyan-200 sm:text-3xl">
                      {partner.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-cyan-200 sm:text-base">
                      {partner.tagline}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {partner.description}
                    </p>

                    {partner.perks && (
                      <div className="mt-4 flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-cyan-300"
                        >
                          ◆
                        </span>

                        <p className="text-xs leading-5 text-slate-300 sm:text-sm">
                          {partner.perks}
                        </p>
                      </div>
                    )}

                    {/* Website link on smaller screens */}
                    <div className="mt-5 lg:hidden">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                      >
                        Visit Website
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Website link on large screens */}
                  <div className="hidden lg:block">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${partner.name} website`}
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/10"
                    >
                      Visit Website
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <span aria-hidden="true" className="text-lg text-cyan-300/70">
            ◆
          </span>
          <p className="text-xs leading-5 text-slate-500">
            Built through industry collaboration and technology support.
          </p>
        </div>
      </div>
    </section>
  );
}
