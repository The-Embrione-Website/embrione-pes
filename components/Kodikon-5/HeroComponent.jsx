'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Event visuals
import TitleSponsorLogo from '/public/Kodikon5/kodikon5_title_sponsor.png'
import Kodikon5Logo from '/public/Kodikon5/kodikon5_logo_copy.png'

// --- "Matrix" style background component with randomized speeds ---
const MatrixBackground = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const generateColumns = () => {
      const newColumns = [];
      const numCols = Math.floor(window.innerWidth / 20);
      for (let i = 0; i < numCols; i++) {
        const binaryString = Array.from({ length: 40 }, () => Math.round(Math.random())).join('');
        newColumns.push({
          id: i,
          content: binaryString,
          animationDuration: `${Math.random() * 30 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        });
      }
      setColumns(newColumns);
    };

    generateColumns();
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-70">
      <div className="absolute inset-0 flex justify-between">
        {columns.map(col => (
          <div
            key={col.id}
            className="text-mid-blue text-lg leading-tight [word-break:break-all] animate-matrix-rain"
            style={{
              animationDuration: col.animationDuration,
              animationDelay: col.animationDelay,
            }}
          >
            {col.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroComponent = () => {
  return (
    // --- CHANGE: Height is now calculated to fit perfectly below your 112px navbar ---
    <div className='relative h-[calc(100vh-112px)] w-screen flex flex-col items-center justify-center overflow-hidden bg-dark-navy'>
      <MatrixBackground />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-navy/10 via-dark-navy/50 to-dark-navy" />

      <div className='z-20 flex flex-col items-center gap-4 text-center' data-aos="fade-up" data-aos-duration="1200">
        <div>
          <Image
            src={TitleSponsorLogo}
            alt="Title Sponsor Logo"
            width={300}
            height={150}
            className="h-auto w-48 md:w-64"
          />
        </div>

        <div>
          <Image
            src={Kodikon5Logo}
            alt="Kodikon 5.0 Logo"
            className='h-[12vh] sm:h-[18vh] md:h-[22vh] lg:h-[25vh] w-auto sm:max-w-xs md:max-w-2xl lg:max-w-3xl p-2 drop-shadow-[0_0_20px_rgba(76,114,184,0.6)]'
            priority
          />
        </div>

        {/* <p className="font-sans text-lg md:text-2xl font-light text-aabcdd-lightest max-w-3xl mt-2">
          The ultimate coding marathon returns. Build, innovate, and compete with the best minds in tech.
        </p> */}
      </div>

      <div className="absolute bottom-8 z-30">
        <a href="#about" aria-label="Scroll down">
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-aabcdd-lightest rounded-full flex justify-center items-start p-1">
            <motion.div
              className="w-1 h-2 md:w-1.5 md:h-3 bg-aabcdd-lightest rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default HeroComponent;