"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Terminal,
  Cpu,
  Shield,
  Layers,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Mail,
  HelpCircle,
} from "lucide-react";
import { BsDiscord } from "react-icons/bs";
import embrioneLogo from "@/public/embrionelogo.png";
import pesLogo from "@/public/Kodikon5/pes.png";

const tracks = [
  {
    code: "TRACK-01",
    title: "Autonomous Edge Systems & Vision",
    icon: Cpu,
    desc: "Developing low-latency computer vision pipelines, embedded AI inference, and robotic perception capable of operating under strict computational and power constraints.",
  },
  {
    code: "TRACK-02",
    title: "Applied AI Safety & Resilient Systems",
    icon: Shield,
    desc: "Building production-grade agentic workflows, model guardrails, automated threat detection, and federated learning mechanisms that prioritize data privacy.",
  },
  {
    code: "TRACK-03",
    title: "High-Throughput Distributed Infrastructure",
    icon: Layers,
    desc: "Designing resilient backend architectures, decentralized consensus layers, real-time message brokers, and developer tooling for concurrent cloud execution.",
  },
  {
    code: "TRACK-04",
    title: "Assistive Computing & Accessibility",
    icon: Users,
    desc: "Engineering adaptive interfaces, auditory/visual assistive technologies, and tools designed for individuals with neurodivergent or motor accessibility needs.",
  },
];

const faqs = [
  {
    q: "Who is eligible to participate in Kodikon 6.0?",
    a: "Participation is open to all bona fide undergraduate engineering students across accredited universities in India. Teams must consist of 2 to 4 members.",
  },
  {
    q: "Is there any registration fee?",
    a: "No. Participation in Kodikon is completely free for all teams selected through the national abstract evaluation phase.",
  },
  {
    q: "Where will the grand finale take place?",
    a: "The final 24-hour sprint is hosted offline in-person at PESU 52, PES University, Ring Road Campus, Bengaluru.",
  },
  {
    q: "What facilities are provided to hackathon participants?",
    a: "Selected participants receive dedicated team workstations, high-speed university network access, continuous catering (meals, beverages, midnight snacks), and designated quiet rest areas.",
  },
];

export default function Kodikon6Page() {
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
    <div className="min-h-screen bg-[#000514] text-slate-200">
      {/* Search Engine Event Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hackathon",
            name: "Kodikon 6.0",
            description:
              "The flagship 24-hour national undergraduate hackathon organized by The Embrione, Department of Computer Science & Engineering, PES University.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "PESU 52, PES University",
              address: {
                "@type": "PostalAddress",
                streetAddress: "100 Feet Ring Road, BSK III Stage",
                addressLocality: "Bengaluru",
                addressRegion: "Karnataka",
                postalCode: "560085",
                addressCountry: "IN",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "The Embrione",
              url: "https://embrionepes.in",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              availability: "https://schema.org/PreOrder",
            },
          }),
        }}
      />

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#000514]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span className="hidden xs:inline">Back to Home</span>
              <span className="xs:hidden">Home</span>
            </Link>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded bg-slate-900 border border-slate-800 flex items-center justify-center p-0.5">
                <Image src={embrioneLogo} alt="Embrione Logo" width={22} height={22} className="object-contain" />
              </div>
              <span className="text-xs font-semibold text-white font-mono">KODIKON 6.0</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#interest-form"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
            >
              <span>Get Notified</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
          <span className="w-2 h-2 rounded-sm bg-cyan-400" />
          <span>PES UNIVERSITY • DEPARTMENT OF CSE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Kodikon 6.0
        </h1>

        <p className="mt-4 text-lg sm:text-2xl text-cyan-400 font-mono">
          24-Hour Flagship National Hackathon
        </p>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
          The Department of Computer Science &amp; Engineering presents the sixth edition of South India&apos;s premier collegiate hackathon. Research-grounded problem statements, rigorous mentor review, and rapid prototype engineering.
        </p>

        {/* Key Event Facts */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Calendar size={14} />
              <span>DURATION</span>
            </div>
            <div className="text-sm font-semibold text-white mt-1">24 Hours Overnight</div>
            <div className="text-xs text-slate-400 mt-0.5">Continuous in-person sprint</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <MapPin size={14} />
              <span>CAMPUS VENUE</span>
            </div>
            <div className="text-sm font-semibold text-white mt-1">PESU 52, PES University</div>
            <div className="text-xs text-slate-400 mt-0.5">100 Feet Ring Road Campus, Bengaluru</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Users size={14} />
              <span>TEAM COMPOSITION</span>
            </div>
            <div className="text-sm font-semibold text-white mt-1">2 to 4 Members</div>
            <div className="text-xs text-slate-400 mt-0.5">Undergraduate engineers</div>
          </div>
        </div>
      </section>

      {/* Planned Challenge Tracks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-slate-800">
        <div className="mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase">Curriculum Alignment</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Planned Technical Tracks
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Problem statements are developed in consultation with university research faculty and industry technical mentors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <div
                key={track.code}
                className="p-6 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400">{track.code}</span>
                  <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                    <IconComponent size={16} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white">{track.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {track.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pre-Registration / Interest Form */}
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

      {/* Frequently Asked Questions */}
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
          {faqs.map((faq) => (
            <div key={faq.q} className="p-5 rounded-lg bg-slate-900/40 border border-slate-800">
              <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} The Embrione • Department of CSE, PES University. All rights reserved.</p>
        <div className="mt-2 flex items-center justify-center gap-4 font-mono text-[11px]">
          <Link href="/" className="hover:text-white transition-colors">Home Portal</Link>
          <span>•</span>
          <Link href="/kodikon-5" className="hover:text-white transition-colors">Kodikon 5.0</Link>
          <span>•</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
