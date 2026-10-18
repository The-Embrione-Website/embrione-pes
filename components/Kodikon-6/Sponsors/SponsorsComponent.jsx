"use client";

import Image from "next/image";
import {
  sponsorsHeader,
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
            Platform &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Industry Partners
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {sponsorsHeader.description}
          </p>
        </header>

        {/* Platform Partners Heading */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 shrink-0 bg-cyan-400" />
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
            Platform &amp; Infrastructure Partner
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
            Built through community collaboration and technology support.
          </p>
        </div>
      </div>
    </section>
  );
}
