"use client";

import React from "react";
import BlurText from "../Sponsors/BlurText";
import TitleComponent from "../HelperComponents/TitleComponent";

const Particle = ({ delay }) => (
  <div
    className="absolute w-1 h-1 bg-gradient-to-r from-[#1ec6fa] to-[#5ce1e6] rounded-full opacity-30 animate-float"
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const PartnersComponent = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => (
    <Particle key={i} delay={i * 0.25} />
  ));

  return (
    <section id="partners">
      {/* Heading similar to Sponsors */}
      <TitleComponent titleData={"Partners"} />

      <section className="relative flex items-center justify-center min-h-screen w-full px-4 sm:px-6 py-10 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0b1121] to-[#111827]">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%221%22 fill=%22rgba(255,255,255,0.05)%22/%3E%3C/svg%3E')] opacity-10"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">{particles}</div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl w-full gap-8">
          <BlurText
            text="Our Partner"
            delay={250}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-2xl md:text-3xl text-[#5ce1e6]/90 font-medium tracking-wide"
          />

          <div className="flex flex-col items-center justify-center mt-8">
            {/* Partner Logo */}
            <a
              href="https://hack2skill.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src="/Partners/h2s_white_logo.png"
                alt="Hack2Skill logo"
                className="w-40 sm:w-56 md:w-72 h-auto object-contain drop-shadow-[0_0_20px_rgba(30,198,250,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(30,198,250,0.6)]"
              />
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-[#1ec6fa]/30 to-[#5ce1e6]/30 opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </a>

            {/* Partner Name */}
            <a
              href="https://hack2skill.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#1ec6fa] to-[#5ce1e6] bg-clip-text text-transparent mt-6 drop-shadow-[0_0_8px_rgba(30,198,250,0.4)] hover:scale-105 transition-all duration-300"
            >
              Hack2Skill
            </a>

            {/* Partner Description */}
            <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed bg-gradient-to-r from-[#1ec6fa] via-[#33bbcf] to-[#5ce1e6] bg-clip-text text-transparent px-3 animate-radiant">
              We are proud to collaborate with{" "}
              <span className="font-semibold">Hack2Skill</span>, fostering
              innovation and community in the hackathon ecosystem 🚀
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PartnersComponent;
