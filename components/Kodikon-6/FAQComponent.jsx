
"use client";

import React, { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import { Kodikon6FAQData } from "./FAQData";

export default function FAQComponent() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) =>
    setOpenId((current) => (current === id ? null : id));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden border-t border-cyan-500/20 bg-[#02050e] px-4 py-20 text-white sm:px-6 lg:px-8"
    >
      {/* Background glow and subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="faq-background-glow absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* FAQ content */}
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-[0.25em] uppercase font-bold">CLARIFICATIONS // 「質疑応答」</span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display"
          >
            System{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Clarifications.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 font-light">
            Everything you need to know about Kodikon 6.0 guidelines, participation, and logistics.
          </p>
        </div>

        <div className="space-y-3.5">
          {Kodikon6FAQData.map((faq, index) => {
            const isOpen = openId === faq.id;
            const panelId = `${faq.id}-panel`;
            const buttonId = `${faq.id}-button`;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border bg-[#060c1d]/90 backdrop-blur-sm transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.15)] bg-[#081228]/95"
                    : "border-cyan-500/20 hover:border-cyan-400/50"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-start gap-4 rounded-lg p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-xl font-bold text-brand-accent-cyan/50"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 pt-0.5 text-sm font-semibold text-brand-text-primary sm:text-base">
                      {faq.q}
                    </span>

                    <Plus
                      size={18}
                      aria-hidden="true"
                      className={`mt-1 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen
                          ? "rotate-45 text-brand-accent-cyan-glow"
                          : "text-brand-text-secondary"
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-[4.25rem] text-sm font-light leading-relaxed text-brand-text-secondary sm:px-6 sm:pb-6 sm:pl-[4.75rem]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-brand-text-muted">
          EMBRIONE{" "}
          <span className="mx-1 text-brand-accent-cyan">/</span>
          KODIKON 6.0
        </p>
      </div>
    </section>
  );
}
