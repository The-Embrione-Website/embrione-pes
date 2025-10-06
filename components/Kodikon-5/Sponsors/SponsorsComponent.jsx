"use client";

import React from "react";
import pixellenceLogo from "../../../assets/pixellence-logo.png"; 
import BlurText from "./BlurText"; 

const Particle = ({ delay, color }) => (
  <div
    className="absolute w-1 h-1 bg-gradient-to-r from-[#1ec6fa] to-[#5ce1e6] rounded-full opacity-20 animate-float"
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const SponsorsComponent = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const particles = Array.from({ length: 30 }).map((_, i) => (
    <Particle key={i} delay={i * 0.15} color="#1ec6fa" />
  ));

  return (
    <div className="relative flex flex-col items-center w-full h-fit gap-12 py-16 px-4 sm:px-6 md:px-12 min-h-screen bg-gradient-to-br from-black via-[#0a0b1a]/30 to-[#1a1b3a]/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%221%22 fill=%22rgba(255,255,255,0.05)%22/%3E%3Ccircle cx=%2280%22 cy=%2230%22 r=%221%22 fill=%22rgba(255,255,255,0.03)%22/%3E%3Ccircle cx=%2250%22 cy=%2270%22 r=%221%22 fill=%22rgba(255,255,255,0.04)%22/%3E%3C/svg%3E')] bg-repeat bg-[length:500px_500px] opacity-10"></div>

      <BlurText
        text="Our Esteemed Sponsor"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white drop-shadow-[0_0_10px_rgba(30,198,250,0.4)] z-10 relative"
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        <a
          href="https://pixcellencetech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mb-6 animate-bob-slow inline-block z-10"
        >
          <div>
            <img
              src={typeof pixellenceLogo === "string" ? pixellenceLogo : pixellenceLogo.src || "/assets/pixellence-logo.png"}
              alt="Pixellence logo"
              className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_15px_rgba(30,198,250,0.3)] cursor-pointer"
              onError={(e) => {
                e.target.src = "/assets/pixellence-logo.png"; // Fallback
                console.error("Image load failed, using fallback");
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1ec6fa]/20 to-[#5ce1e6]/20 opacity-20 blur-md pointer-events-none"></div>
          </div>
        </a>

        <h3>
          <a
            href="https://pixcellencetech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center bg-gradient-to-r from-[#1ec6fa] to-[#5ce1e6] bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(30,198,250,0.3)] inline-block"
          >
            Pixellence
          </a>
        </h3>

        <div
          className="absolute inset-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2"
          style={{ left: "50%", top: "50%" }}
        >
          {particles}
        </div>
      </div>

      <p className="text-center text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#1ec6fa] via-[#33bbcf] to-[#5ce1e6] bg-clip-text text-transparent max-w-3xl leading-relaxed px-4 z-10 relative animate-radiant">
        We are thrilled to partner with Pixellence, a visionary leader in innovation and creativity, bringing brilliance to our event!
      </p>
    </div>
  );
};

export default SponsorsComponent;