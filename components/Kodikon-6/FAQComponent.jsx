import React from "react";
import { HelpCircle } from "lucide-react";
import { Kodikon6FAQData } from "./FAQData";

export default function FAQComponent() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-2">
          <HelpCircle size={14} />
          <span>CLARIFICATIONS</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Kodikon6FAQData.map((faq) => (
          <div key={faq.q} className="p-5 rounded-lg bg-slate-900/40 border border-slate-800">
            <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
            <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
