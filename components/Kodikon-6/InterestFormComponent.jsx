
"use client";

import React, { useState } from "react";
import { CheckCircle, ArrowUpRight } from "lucide-react";

const TRACK_OPTIONS = [
  "Autonomous Edge Systems & Vision",
  "Applied AI Safety & Resilient Systems",
  "High-Throughput Distributed Infrastructure",
  "Assistive Computing & Accessibility",
];

const inputClasses =
  "w-full min-w-0 rounded-md border border-brand-border-divider bg-brand-surface-input px-3 py-3 text-sm text-brand-text-primary placeholder:text-brand-text-muted outline-none transition-colors focus:border-brand-accent-cyan focus:ring-1 focus:ring-brand-accent-cyan/30";

const labelClasses =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-brand-text-secondary sm:text-xs";

export default function InterestFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    track: TRACK_OPTIONS[0],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) return;

    setSubmitted(true);
  };

  return (
    <section
      id="interest-form"
      className="relative isolate overflow-hidden border-t border-brand-border-subtle bg-brand-surface-navy/90 px-4 py-12 text-brand-text-primary sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Blue-only background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="interest-form-blue-glow absolute inset-0" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

  
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-xl border border-brand-border-subtle bg-brand-surface-navy/90 shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="border-b border-brand-border-subtle p-5 sm:p-7">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-cyan-glow shadow-[0_0_10px_var(--color-brand-accent-cyan-glow)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-accent-cyan-glow sm:text-xs">
                Early Access / 06
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-brand-text-primary sm:text-2xl md:text-3xl">
              Kodikon 6.0{" "}
              <span className="text-brand-accent-cyan">
                Notification List
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-text-secondary sm:leading-7">
              Get track announcements, event guidelines, and registration
              opening alerts delivered to your inbox.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.12em] text-brand-text-muted sm:text-[10px]">
              <span>01 / Your details</span>
              <span>02 / Track preference</span>
              <span>03 / Stay informed</span>
            </div>
          </div>

          {/* Form */}
          <div className="p-5 sm:p-7">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-lg border border-brand-accent-cyan/30 bg-brand-accent-cyan/5 p-5 text-center sm:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-accent-cyan/30 bg-brand-accent-cyan/10">
                  <CheckCircle
                    className="h-6 w-6 text-brand-accent-cyan-glow"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-accent-cyan-glow">
                  Form completed
                </p>

                <h3 className="mt-2 text-lg font-bold text-brand-text-primary sm:text-xl">
                  Thanks, {formData.name.trim()}.
                </h3>

                <p className="mx-auto mt-3 max-w-md break-words text-sm leading-6 text-brand-text-secondary">
                  Your selected track is{" "}
                  <span className="text-brand-text-primary">
                    {formData.track}
                  </span>
                  .
                </p>

                <p className="mt-3 break-all font-mono text-xs text-brand-accent-cyan-glow">
                  {formData.email}
                </p>

                <p className="mt-4 text-xs leading-5 text-brand-text-muted">
                  This is a local confirmation only. Your details have not
                  been sent or saved to a server.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-md border border-brand-border-hover px-4 py-2.5 text-xs font-semibold text-brand-text-primary transition-colors hover:text-brand-accent-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan"
                >
                  Edit details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                  <div className="min-w-0">
                    <label htmlFor="interest-name" className={labelClasses}>
                      Full Name{" "}
                      <span className="text-brand-accent-cyan-glow">*</span>
                    </label>

                    <input
                      id="interest-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="interest-email" className={labelClasses}>
                      College Email{" "}
                      <span className="text-brand-accent-cyan-glow">*</span>
                    </label>

                    <input
                      id="interest-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@college.edu"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
                  <div className="min-w-0">
                    <label htmlFor="interest-college" className={labelClasses}>
                      College / University
                    </label>

                    <input
                      id="interest-college"
                      name="college"
                      type="text"
                      autoComplete="organization"
                      maxLength={150}
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. PES University"
                      className={inputClasses}
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="interest-track" className={labelClasses}>
                      Preferred Track
                    </label>

                    <select
                      id="interest-track"
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className={`${inputClasses} cursor-pointer`}
                    >
                      {TRACK_OPTIONS.map((track) => (
                        <option
                          key={track}
                          value={track}
                          className="bg-brand-surface-card text-brand-text-primary"
                        >
                          {track}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="border-t border-brand-border-subtle pt-5">
                  <button
                    type="submit"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-accent-cyan-dark px-5 py-3 text-sm font-semibold text-brand-text-primary transition-colors hover:bg-brand-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface-card sm:w-auto sm:min-w-56"
                  >
                    Submit Pre-Registration

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <p className="mt-3 text-[11px] leading-5 text-brand-text-muted">
                    Fields marked with{" "}
                    <span className="text-brand-accent-cyan-glow">*</span> are
                    required.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-brand-text-muted">
          EMBRIONE{" "}
          <span className="mx-1 text-brand-accent-cyan">/</span> KODIKON 6.0
        </p>
      </div>
    </section>
  );
}
