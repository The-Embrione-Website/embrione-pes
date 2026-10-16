"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ZoomIn,
  X,
  ChevronRight,
  ChevronLeft,
  Award,
  Users,
  Clock,
  Sparkles,
  Camera,
  Layers,
} from "lucide-react";

const pastEditionsData = [
  {
    id: "kodikon-5",
    eventName: "Kodikon 5.0",
    editionNumber: "05",
    year: "2024",
    season: "Autumn 2024",
    tagline: "Research-Driven Engineering & Edge Intelligence",
    description:
      "The fifth edition brought a groundbreaking research-first dimension to undergraduate hackathons at PES University. Grounded in advanced engineering tracks: Edge Computer Vision with Pixcellence Technologies, Assistive GenAI, and Federated Learning Systems. Guided by experienced mentors and Department of CSE professors, teams transformed theoretical models into functional, production-ready systems.",
    heroImage: "/Kodikon5/bg1.webp",
    gallery: [
      {
        src: "/Kodikon5/bg1.webp",
        caption: "Main Hackathon Floor & Keynote Assembly",
      },
      {
        src: "/Kodikon5/themes-thumbnail/computer-vision.webp",
        caption: "Edge Computer Vision & Real-Time Analytics Track",
      },
      {
        src: "/Kodikon5/themes-thumbnail/genai.webp",
        caption: "Assistive Generative AI & Accessibility Track",
      },
      {
        src: "/Kodikon5/themes-thumbnail/distributed-systems.webp",
        caption: "Federated Systems & High-Throughput Infrastructure",
      },
      {
        src: "/Kodikon5/kodikon5_logo.webp",
        caption: "Official Kodikon 5.0 Visual Crest",
      },
      {
        src: "/Kodikon5/kodikon5_title_sponsor.webp",
        caption: "Industry Research & Title Partnership",
      },
    ],
    stats: [
      { label: "Prize & Grants", value: "₹2,50,000+", icon: Award },
      { label: "Finalist Cohort", value: "40+ Teams", icon: Users },
      { label: "Sprint Duration", value: "24 Hours", icon: Clock },
      { label: "Curriculum Link", value: "Dept of CSE", icon: Layers },
    ],
    highlights: [
      "Edge Computer Vision",
      "Assistive GenAI",
      "Federated Systems",
      "Pixcellence Partnership",
    ],
  },
  {
    id: "kodikon-4",
    eventName: "Kodikon 4.0",
    editionNumber: "04",
    year: "2024",
    season: "Spring 2024",
    tagline: "322 Teams · Real-World Engineering at Scale",
    description:
      "A high-velocity national sprint with 322 teams registering from top universities across India and 40 finalist teams battling it out overnight at PES University. Powered by SentinelOne as Title Partner, participants tackled developer tools, smart city infrastructure, assistive technologies, and Web3 systems under direct mentorship from industry architects.",
    heroImage: "/Kodikon4/Kodikon4.webp",
    gallery: [
      {
        src: "/Kodikon4/Kodikon4.webp",
        caption: "Kodikon 4.0 Keynote Opening & Arena Stage",
      },
      {
        src: "/Kodikon4/SentinelOne.webp",
        caption: "SentinelOne Title Sponsor Keynote",
      },
      {
        src: "/Kodikon4/prize.webp",
        caption: "Podium Trophy & Winner Commendations",
      },
      {
        src: "/Kodikon4/13.webp",
        caption: "Overnight Intensive Hacking Sprint",
      },
      {
        src: "/Kodikon4/14.webp",
        caption: "1-on-1 Architecture & Code Reviews",
      },
      {
        src: "/Kodikon4/15.webp",
        caption: "Finalist Pitch & Demonstration Round",
      },
    ],
    stats: [
      { label: "Registered Teams", value: "322 Teams", icon: Users },
      { label: "Finalist Teams", value: "40 Selected", icon: Award },
      { label: "Title Partner", value: "SentinelOne", icon: Sparkles },
      { label: "Duration", value: "24h Offline", icon: Clock },
    ],
    highlights: [
      "Developer Tools",
      "Assistive Tech & Accessibility",
      "AR/VR & Blockchain",
      "Smart Cities",
    ],
  },
  {
    id: "kodikon-3",
    eventName: "Kodikon 3.0",
    editionNumber: "03",
    year: "2023",
    season: "November 2023",
    tagline: "1,200+ Registrations · Over ₹4 Lakhs Awarded",
    description:
      "The third edition accelerated the series onto the national stage. Attracting over 1,200 applicants and featuring 170+ elite hackers selected through a rigorous problem-solving qualifier. Over ₹4,00,000 in cash prizes, cloud credits, and hardware bounties were awarded over an unforgettable 24-hour marathon.",
    heroImage: "/Kodikon3/13.webp",
    gallery: [
      {
        src: "/Kodikon3/13.webp",
        caption: "Main Hackathon Floor & Collaboration Hub",
      },
      {
        src: "/Kodikon3/14.webp",
        caption: "Midnight Architecture Debugging",
      },
      {
        src: "/Kodikon3/15.webp",
        caption: "Jury Evaluation & Systems Testing",
      },
      {
        src: "/Kodikon3/copyofcopy.webp",
        caption: "Official Kodikon 3.0 Identity Showcase",
      },
    ],
    stats: [
      { label: "Registrations", value: "1,200+", icon: Users },
      { label: "Active Hackers", value: "170+ Elite", icon: Award },
      { label: "Prize & Swag Pool", value: "₹4,00,000+", icon: Sparkles },
      { label: "Scope", value: "National Scale", icon: Layers },
    ],
    highlights: [
      "National Expansion",
      "Multi-Stage Selection",
      "Cloud Credits Bounties",
      "Industry Review Panels",
    ],
  },
  {
    id: "kodikon-2",
    eventName: "Kodikon 2.0",
    editionNumber: "02",
    year: "2023",
    season: "Early 2023",
    tagline: "160+ Undergraduate Builders · Intensive Mentorship",
    description:
      "Designed to challenge sophomore engineers from the 2021-2025 batch to build production prototypes for real-world scenarios. With 160+ active participants, the event combined high-intensity peer-to-peer building with round-the-clock guidance from PES University CSE faculty.",
    heroImage: "/Kodikon2/image8.webp",
    gallery: [
      {
        src: "/Kodikon2/image8.webp",
        caption: "Deep Work Sprint on Main Engineering Floor",
      },
      {
        src: "/Kodikon2/image4.webp",
        caption: "Faculty Mentorship & Systems Ideation",
      },
      {
        src: "/Kodikon2/image5.webp",
        caption: "Team Collaborative Wireframing",
      },
      {
        src: "/Kodikon2/image6.webp",
        caption: "Prototyping & Live Implementation",
      },
      {
        src: "/Kodikon2/image9.webp",
        caption: "Prototype Architecture Presentations",
      },
      {
        src: "/Kodikon2/image10.webp",
        caption: "Faculty & Expert Jury Evaluation",
      },
    ],
    stats: [
      { label: "Selected Builders", value: "160+ Hackers", icon: Users },
      { label: "Mentorship", value: "CSE Professors", icon: Layers },
      { label: "Duration", value: "24h Overnight", icon: Clock },
      { label: "Cohort Focus", value: "Sophomore Core", icon: Award },
    ],
    highlights: [
      "Peer-to-Peer Engineering",
      "Faculty Roundtables",
      "Live Prototype Demos",
      "Department Support",
    ],
  },
  {
    id: "kodikon-1",
    eventName: "Kodikon 1.0",
    editionNumber: "01",
    year: "2022",
    season: "September 2022",
    tagline: "The Genesis · 800+ Applicants · The First 24H Sprint",
    description:
      "The inaugural edition that started it all. Conducted on September 10th and 11th, 2022, Kodikon 1.0 established the blueprint for student-led 24-hour hackathons at PES University with 800+ applicants, 160 vetted participants, and over ₹2.5L in cash and prizes.",
    heroImage: "/Kodikon1/image1.webp",
    gallery: [
      {
        src: "/Kodikon1/image1.webp",
        caption: "Inaugural Opening Ceremony & Flag-off",
      },
      {
        src: "/Kodikon1/image2.webp",
        caption: "First Edition Hackers Assembled at PESU",
      },
      {
        src: "/Kodikon1/image6.webp",
        caption: "Midnight Hacking & Collaborative Problem Solving",
      },
      {
        src: "/Kodikon1/image8.webp",
        caption: "Winner Commendations & Prize Distribution",
      },
      {
        src: "/Kodikon1/image3.webp",
        caption: "Team Architecture Brainstorming",
      },
      {
        src: "/Kodikon1/image7.webp",
        caption: "Project Demos & Final Jury Reviews",
      },
    ],
    stats: [
      { label: "Applicants", value: "800+ Students", icon: Users },
      { label: "Selected Finalists", value: "160 Hackers", icon: Award },
      { label: "Inaugural Pool", value: "₹2,50,000+", icon: Sparkles },
      { label: "Milestone", value: "Inaugural 24h", icon: Clock },
    ],
    highlights: [
      "Inaugural 24h Hackathon",
      "Competitive Screening",
      "Overnight Lab Access",
      "Foundational Legacy",
    ],
  },
  {
    id: "initiatives",
    eventName: "Special Initiatives",
    editionNumber: "Labs",
    year: "Annual",
    season: "Year-Round",
    tagline: "Cipher & Spark · Competitive Algorithms & Systems Labs",
    description:
      "Beyond Kodikon, The Embrione conducts specialized technical programs: Cipher, a competitive programming tournament on HackerRank with 350+ contestants, and Spark, a multi-week blended learning accelerator introducing students to Machine Learning, Blockchain, Computer Vision, and high-performance algorithms.",
    heroImage: "/Cipher/image1.webp",
    gallery: [
      {
        src: "/Cipher/image1.webp",
        caption: "Cipher Competitive Coding Challenge on HackerRank",
      },
      {
        src: "/Spark/image1.webp",
        caption: "Spark Disruptive Technologies Accelerator",
      },
      {
        src: "/Cipher/image2.webp",
        caption: "Algorithm & Data Structures Problem Solving",
      },
      {
        src: "/Spark/image2.webp",
        caption: "Hands-on Machine Learning & Systems Labs",
      },
    ],
    stats: [
      { label: "Engineers Trained", value: "650+ Builders", icon: Users },
      { label: "Platforms", value: "HackerRank & PESU", icon: Layers },
      { label: "Tech Stacks", value: "DSA, ML & Web3", icon: Sparkles },
      { label: "Format", value: "Bootcamp Labs", icon: Clock },
    ],
    highlights: [
      "Competitive Programming",
      "Machine Learning Labs",
      "Web3 & Blockchain",
      "Research Bootcamps",
    ],
  },
];

export default function KodikonSpotlight() {
  const [selectedEditionId, setSelectedEditionId] = useState("kodikon-5");
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxState, setLightboxState] = useState(null); // { editionId, photoIndex }

  const currentEdition =
    pastEditionsData.find((e) => e.id === selectedEditionId) ||
    pastEditionsData[0];

  // Reset active photo index when switching editions
  useEffect(() => {
    setActivePhotoIndex(0);
  }, [selectedEditionId]);

  // Handle keyboard navigation in Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState) return;
      if (e.key === "Escape") setLightboxState(null);
      if (e.key === "ArrowRight") {
        setLightboxState((prev) => {
          if (!prev) return null;
          const edition = pastEditionsData.find((x) => x.id === prev.editionId);
          const total = edition?.gallery?.length || 1;
          return {
            ...prev,
            photoIndex: (prev.photoIndex + 1) % total,
          };
        });
      }
      if (e.key === "ArrowLeft") {
        setLightboxState((prev) => {
          if (!prev) return null;
          const edition = pastEditionsData.find((x) => x.id === prev.editionId);
          const total = edition?.gallery?.length || 1;
          return {
            ...prev,
            photoIndex: (prev.photoIndex - 1 + total) % total,
          };
        });
      }
    };

    if (lightboxState) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxState]);

  const activePhoto =
    currentEdition.gallery[activePhotoIndex] || currentEdition.gallery[0];

  const lightboxEdition = lightboxState
    ? pastEditionsData.find((x) => x.id === lightboxState.editionId)
    : null;
  const lightboxPhoto = lightboxEdition
    ? lightboxEdition.gallery[lightboxState.photoIndex]
    : null;

  return (
    <section
      id="events"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#000000] text-white overflow-hidden border-t border-white/[0.06]"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-400 text-xs uppercase tracking-widest font-semibold mb-5 backdrop-blur-md">
            <Calendar size={13} />
            <span>Event Archive · Historical Milestones</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[-0.035em] text-white leading-[1.05]">
            Evolution of a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-500">
              Flagship.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From inaugural departmental sprints to premier 24-hour national hackathons. Explore five generations of engineering milestones and builder community at PES University.
          </p>
        </div>

        {/* Apple Legacy Bento Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#040816]/90 border border-white/[0.07] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Flagship Sprints
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                5 Editions
              </span>
            </div>
            <span className="text-xs text-cyan-400 font-light mt-1 block">
              2022 — Present
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#040816]/90 border border-white/[0.07] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Hackers Convened
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                2,500+
              </span>
            </div>
            <span className="text-xs text-cyan-400 font-light mt-1 block">
              Pan-India Undergrads
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#040816]/90 border border-white/[0.07] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Prizes &amp; Grants
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                ₹10,00,000+
              </span>
            </div>
            <span className="text-xs text-cyan-400 font-light mt-1 block">
              Cash &amp; Bounties Awarded
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#040816]/90 border border-white/[0.07] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Sprint Format
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                24 Hours
              </span>
            </div>
            <span className="text-xs text-cyan-400 font-light mt-1 block">
              Overnight Offline at PESU
            </span>
          </div>
        </div>

        {/* Apple Capsule Timeline Switcher */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-10 overflow-x-auto max-w-full scrollbar-none">
          {pastEditionsData.map((edition) => {
            const isSelected = selectedEditionId === edition.id;
            return (
              <button
                key={edition.id}
                onClick={() => setSelectedEditionId(edition.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{edition.eventName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-black/20 text-black font-bold"
                      : "bg-white/[0.08] text-slate-400"
                  }`}
                >
                  {edition.editionNumber === "Labs" ? "Labs" : `'${edition.year.slice(2)}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Keynote Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEdition.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl bg-[#040816]/90 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Pane: Cinematic Viewfinder & Interactive Filmstrip (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                {/* Main Viewfinder Frame */}
                <div className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePhoto.src}
                      src={activePhoto.src}
                      alt={activePhoto.caption}
                      initial={{ opacity: 0.4, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/[0.1] backdrop-blur-md text-[11px] font-medium text-slate-200">
                      <Camera size={12} className="text-cyan-400" />
                      <span>
                        {currentEdition.eventName} · {currentEdition.season}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setLightboxState({
                          editionId: currentEdition.id,
                          photoIndex: activePhotoIndex,
                        })
                      }
                      className="p-2 rounded-full bg-black/70 hover:bg-cyan-500 text-white hover:text-black border border-white/[0.1] hover:border-cyan-400 backdrop-blur-md transition-all duration-200 cursor-pointer"
                      aria-label="Enlarge photo"
                    >
                      <ZoomIn size={15} />
                    </button>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3.5 inset-x-3.5">
                    <div className="p-3 rounded-xl bg-black/75 border border-white/[0.08] backdrop-blur-md">
                      <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                        {activePhoto.caption}
                      </p>
                      <p className="text-[10px] text-slate-400 font-light mt-0.5">
                        Photo {activePhotoIndex + 1} of {currentEdition.gallery.length} · PES University Campus
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Thumbnail Filmstrip */}
                <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                  {currentEdition.gallery.map((photo, idx) => {
                    const isActive = idx === activePhotoIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActivePhotoIndex(idx)}
                        className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-[1.03]"
                            : "border-white/[0.08] hover:border-white/[0.2] opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`Select photo ${idx + 1}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Pane: Narrative & Curated Specs Bento (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                    <span>
                      Edition {currentEdition.editionNumber} · {currentEdition.year}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {currentEdition.eventName}
                  </h3>
                  <p className="text-sm font-medium text-cyan-300/90 mt-1">
                    {currentEdition.tagline}
                  </p>
                  <p className="mt-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {currentEdition.description}
                  </p>
                </div>

                {/* Curated Specs Bento Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {currentEdition.stats.map((stat, i) => {
                    const IconComp = stat.icon;
                    return (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-black/60 border border-white/[0.06] hover:border-white/[0.1] transition-colors"
                      >
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                          <IconComp size={13} className="text-cyan-400" />
                          <span>{stat.label}</span>
                        </div>
                        <span className="text-white font-semibold text-sm">
                          {stat.value}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Key Research / Engineering Themes */}
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                    Focus Areas &amp; Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentEdition.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-light text-slate-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Moments Masonry Archive */}
            <div className="mt-12 pt-10 border-t border-white/[0.07]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {currentEdition.eventName} Moments Gallery
                  </h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">
                    Click any snapshot to launch the fullscreen keynote lightbox.
                  </p>
                </div>
                <span className="text-xs text-cyan-400 font-mono">
                  {currentEdition.gallery.length} Snapshots
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {currentEdition.gallery.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      setLightboxState({
                        editionId: currentEdition.id,
                        photoIndex: idx,
                      })
                    }
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.08] hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-left cursor-pointer shadow-lg"
                    aria-label={`Enlarge photo ${idx + 1}`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay with caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-between">
                      <div className="self-end p-1.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                        <ZoomIn size={14} />
                      </div>
                      <p className="text-[11px] text-slate-200 font-medium line-clamp-2 leading-snug">
                        {photo.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Apple Keynote Fullscreen Lightbox Modal */}
      {lightboxState && lightboxPhoto && lightboxEdition && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery preview"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxState(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Navigation & Close */}
            <div className="w-full flex items-center justify-between pb-4 text-white">
              <div>
                <span className="text-sm font-semibold tracking-wide">
                  {lightboxEdition.eventName} · {lightboxEdition.season}
                </span>
                <p className="text-xs text-slate-400">
                  Photo {lightboxState.photoIndex + 1} of{" "}
                  {lightboxEdition.gallery.length}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxState((prev) => ({
                      ...prev,
                      photoIndex:
                        (prev.photoIndex - 1 + lightboxEdition.gallery.length) %
                        lightboxEdition.gallery.length,
                    }))
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxState((prev) => ({
                      ...prev,
                      photoIndex:
                        (prev.photoIndex + 1) % lightboxEdition.gallery.length,
                    }))
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxState(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-2"
                  aria-label="Close photo preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* High-res Image Preview */}
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/80">
              <img
                src={lightboxPhoto.src}
                alt={lightboxPhoto.caption}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Caption Underneath */}
            <div className="w-full pt-3 text-center">
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                {lightboxPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
