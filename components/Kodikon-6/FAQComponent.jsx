
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
      className="relative isolate overflow-hidden border-t border-brand-border-subtle bg-brand-canvas px-4 py-16 text-brand-text-primary sm:px-6 lg:px-8"
    >
      {/* Background glow and subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="faq-background-glow absolute inset-0" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* FAQ content */}
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8">
          <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs text-brand-accent-cyan-glow">
            <HelpCircle size={14} aria-hidden="true" />
            <span>CLARIFICATIONS</span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-brand-text-primary sm:text-3xl"
          >
            FAQs
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-brand-text-secondary">
            Everything you need to know about Kodikon 6.0.
          </p>
        </div>

        <div className="space-y-3">
          {Kodikon6FAQData.map((faq, index) => {
            const isOpen = openId === faq.id;
            const panelId = `${faq.id}-panel`;
            const buttonId = `${faq.id}-button`;

            return (
              <div
                key={faq.id}
                className={`rounded-lg border bg-brand-surface-card/60 backdrop-blur-sm transition-colors duration-200 ${
                  isOpen
                    ? "border-brand-accent-cyan/50"
                    : "border-brand-border-divider hover:border-brand-border-hover"
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
