"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function InterestFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    track: "Autonomous Edge Systems & Vision",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="interest-form" className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto border-t border-slate-800">
      <div className="p-6 sm:p-8 rounded-lg bg-slate-900 border border-slate-800">
        <div className="mb-6">
          <span className="text-xs font-mono text-cyan-400 uppercase">Early Access</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            Kodikon 6.0 Notification List
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Register your interest to receive track announcements, rulebooks, and registration opening alerts.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto" />
            <h3 className="text-sm font-semibold text-white">Interest Recorded</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Thank you, {formData.name}. We will send track announcements and registration links to {formData.email} as soon as portal applications open.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">College Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@college.edu"
                  className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">College / University</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  placeholder="e.g. PES University"
                  className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Preferred Track</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="Autonomous Edge Systems & Vision">Autonomous Edge Systems &amp; Vision</option>
                  <option value="Applied AI Safety & Resilient Systems">Applied AI Safety &amp; Resilient Systems</option>
                  <option value="High-Throughput Distributed Infrastructure">High-Throughput Distributed Infrastructure</option>
                  <option value="Assistive Computing & Accessibility">Assistive Computing &amp; Accessibility</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
              >
                Submit Pre-Registration
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
