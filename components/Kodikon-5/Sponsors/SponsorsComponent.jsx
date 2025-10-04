

"use client";

import React, { use } from "react";
import BlurText from "./BlurText"; // reactbits

const SponsorPlaceholderCard = () => (
  <div className="h-56 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-md text-gray-400 text-lg md:text-xl font-medium shadow-[0_0_20px_rgba(30,198,250,0.3)] hover:shadow-[0_0_30px_rgba(30,198,250,0.6)] transition-all duration-300">
    Coming Soon
  </div>
);

const SponsorsComponent = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="flex flex-col items-center w-full h-fit gap-12 py-16 px-6 md:px-12">
      <BlurText
        text="Know Our Sponsors"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl md:text-5xl font-semibold text-center text-white"
      />

      <p className="text-center text-base md:text-lg bg-gradient-to-r from-[#1ec6fa] via-[#33bbcf] to-[#5ce1e6] bg-clip-text text-transparent animate-pulse max-w-2xl leading-relaxed">
         Stay Tuned, Sponsors Coming Soon !!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl mx-auto mt-8">
        {[1, 2, 3].map((i) => (
          <SponsorPlaceholderCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsComponent;
