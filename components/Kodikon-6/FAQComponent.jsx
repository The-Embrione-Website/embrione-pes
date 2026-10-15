"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Kodikon6FAQData, Kodikon6FAQCategories } from "./FAQData";

const ALL = "All";

export default function FAQComponent() {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [openId, setOpenId] = useState(null);

  const visibleFAQs =
    activeCategory === ALL
      ? Kodikon6FAQData
      : Kodikon6FAQData.filter((faq) => faq.category === activeCategory);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setOpenId(null);
  };

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-brand-border-divider"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-accent-cyan-glow mb-2">
          <HelpCircle size={14} aria-hidden="true" />
          <span>CLARIFICATIONS</span>
        </div>
        <h2
          id="faq-heading"
          className="text-2xl font-bold text-brand-text-primary tracking-tight"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div
        className="flex flex-wrap gap-2 mb-6"
        role="group"
        aria-label="Filter questions by category"
      >
        {[ALL, ...Kodikon6FAQCategories].map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategory(category)}
              aria-pressed={isActive}
              className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                isActive
                  ? "bg-brand-accent-cyan-dark border-brand-accent-cyan-dark text-white"
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-brand-text-secondary hover:text-brand-text-primary"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {visibleFAQs.map((faq) => {
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
                  className="w-full flex items-start justify-between gap-4 p-5 text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <span className="flex-1">
                    <span className="block text-[11px] font-mono text-brand-accent-cyan-glow mb-1">
                      {faq.category}
                    </span>
                    <span className="block text-sm font-semibold text-brand-text-primary">
                      {faq.q}
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`mt-1 shrink-0 text-brand-text-secondary transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? "rotate-180 text-brand-accent-cyan" : ""
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
                  <p className="px-5 pb-5 text-sm text-brand-text-secondary leading-relaxed font-light">
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
