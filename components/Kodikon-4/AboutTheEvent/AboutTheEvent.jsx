"use client"
import React from 'react';
import Image from 'next/image';
// import Lottie from "lottie-react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Helper Components & Assets
import TitleComponent from '../HelperComponents/TitleComponent';
import aboutAnimation from '../../../assets/about-kodikon.json';
// --- IMPORTANT: Ensure this path correctly points to your prize image ---
import prizeImage from '../../../assets/prize.png'; 

// --- Component Data ---
// Separating data makes the component cleaner and easier to update.
const aboutData = {
  title: "About The Event",
  paragraphs: [
    "Kodikon 4.0, the fourth edition of our 24-hour highly successful flagship national level hackathon, aims at developing creative solutions to real-world problems while also promoting friendly, healthy competition amongst peers. Open to all engineering undergraduates across the nation, this event ignites innovation, camaraderie, and healthy competition. 160+ participants will battle it out for the coveted prizes.",
    "As a hackathon catered towards aspiring students, Kodikon 4.0 aims to offer a platform for them to showcase their existing skills while fostering growth through collaborative learning. With comprehensive mentoring and continuous guidance from renowned experts, attendees gain valuable industry exposure, resulting in the development of vital soft skills, expanded networks, and enhanced technical acumen.",
  ],
  stats: [
    // Using more specific, enticing stats
    { name: 'Registrations', value: '1XXX+' }, 
    { name: 'Hours of Hacking', value: '24' },
    { name: 'Prize Pool', value: '₹30,000' },
    { name: 'Industry Sponsors', value: '5+' },
  ]
};

const AboutTheEvent = () => {
  return (
    // Adjusted padding for better mobile view
    <section 
      id="about" 
      className="relative py-16 sm:py-20 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      <TitleComponent titleData={aboutData.title} />

      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] max-w-[600px] max-h-[600px] blue__gradient z-[-1] opacity-50 blur-xl" />

      {/* Main Content Grid with responsive margins and gaps */}
      <div className="container mx-auto mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-5 gap-x-8 lg:gap-x-16 gap-y-12 items-center">
        
        {/* Left Column (Content) */}
        <div className="flex flex-col gap-8 lg:col-span-3">
          <div className="transform transition-transform duration-500 hover:scale-105">
            <Image
              src={prizeImage}
              alt="Build, Win, Earn Prize Money of ₹30,000"
              width={600}
              height={120}
              className="object-contain rounded-3xl shadow-2xl shadow-cyan-500/10"
            />
          </div>

          {/* Justified text on larger screens for a cleaner look, left-aligned on mobile for readability */}
          <div className="space-y-5 text-gray-300 text-left lg:text-justify text-lg md:text-xl leading-relaxed">
            {aboutData.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* Right Column (Animation) */}
        <div className="flex justify-center items-center lg:col-span-2 order-first lg:order-last">
          <Lottie
            loop={true}
            animationData={aboutAnimation}
            style={{ maxWidth: 450, width: '100%' }}
          />
        </div>
      </div>
      
      {/* Stats Section with responsive top margin */}
      <div className="container mx-auto mt-20 lg:mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {aboutData.stats.map((stat) => (
            <div 
              key={stat.name} 
              className="bg-slate-800/40 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Responsive text sizes for stats */}
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-base sm:text-lg text-gray-400 mt-2">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTheEvent;

