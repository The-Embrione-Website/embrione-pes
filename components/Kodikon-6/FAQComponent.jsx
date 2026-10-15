"use client";

import React, { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import { Kodikon6FAQData } from "./FAQData";

export default function FAQComponent() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-brand-border-divider"
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-accent-cyan-glow mb-2">
          <HelpCircle size={14} aria-hidden="true" />
          <span>CLARIFICATIONS</span>
        </div>
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-brand-text-primary tracking-tight"
        >
          FAQs
        </h2>
      </div>

      <div className="space-y-3">
        {Kodikon6FAQData.map((faq, index) => {
          const isOpen = openId === faq.id;
          const panelId = `${faq.id}-panel`;
          const buttonId = `${faq.id}-button`;
          return (
            <div
              key={faq.id}
              className={`rounded-lg border bg-brand-surface-card/60 transition-colors ${
                isOpen
                  ? "border-brand-accent-cyan/50"
                  : "border-brand-border-divider hover:border-slate-700"
              }`}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-start gap-4 p-5 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span
                    aria-hidden="true"
                    className="text-xl font-bold font-mono text-brand-accent-cyan/40"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm sm:text-base font-semibold text-brand-text-primary">
                    {faq.q}
                  </span>
                  <Plus
                    size={18}
                    aria-hidden="true"
                    className={`mt-1 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen
                        ? "rotate-45 text-brand-accent-cyan"
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
                  <p className="px-5 pb-5 sm:pl-[4.25rem] text-sm text-brand-text-secondary leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
