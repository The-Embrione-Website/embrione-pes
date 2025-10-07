"use client"
import React from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Helper Components & Assets
import TitleComponent from '../HelperComponents/TitleComponent';
import aboutAnimation from '../../../assets/about-kodikon.json';
import prizeImage from '../../../assets/prize.png'; 

// --- Component Data ---
const aboutData = {
  title: "About The Event",
  paragraphs: [
    "Kodikon 5.0, the fifth edition of our 24-hour national-level flagship hackathon, continues to inspire innovation and collaboration among engineering undergraduates across the nation. After an overwhelming 322+ team registrations last year, this edition brings a new dimension — a research driven edge. Each problem statement is grounded in emerging research themes, encouraging participants to explore academic insights and develop solutions that blend creativity with real-world relevance.",

    "Guided by experienced mentors from both industry and academia, participants gain valuable exposure to practical and research oriented problem solving. Kodikon 5.0 aims to go beyond coding — fostering innovation, critical thinking, and teamwork, while helping students transform ideas into impactful, research backed solutions."
  ],

  stats: [
    { name: 'Registrations', value: '322+ Team' }, 
    { name: 'Hours of Hacking', value: '24' },
    { name: 'Prize Pool', value: '₹ 1 Lakh +' },
    { name: 'Pixcellence', value: 'Internship opportunities for top hackers by title sponsor' },
  ]
};

const AboutTheEvent = () => {
  return (
    <section 
      id="about" 
      className="relative py-16 sm:py-20 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
<div className="flex justify-center items-center ">
  <TitleComponent titleData={aboutData.title} />
</div>



      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] max-w-[600px] max-h-[600px] blue__gradient z-[-1] opacity-50 blur-xl" />

      {/* Main Content */}
      <div className="container mx-auto mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-5 gap-x-8 lg:gap-x-16 gap-y-12 items-center">
        
        {/* Left Column (Text Content) */}
        <div className="flex flex-col gap-8 lg:col-span-3">
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
      
      {/* --- Stats Section --- */}
      <div className="container mx-auto mt-20 lg:mt-12 space-y-6">

        {/* Top Row - 3 Equal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
          {aboutData.stats.slice(0, 3).map((stat) => (
           <div
            key={stat.name}
            className="flex flex-col items-center justify-center bg-slate-800/40 p-6 rounded-2xl 
                      backdrop-blur-sm border border-slate-700/60 text-center
                      transition-all duration-300 hover:scale-105 hover:bg-slate-700/50 
                      hover:shadow-lg hover:shadow-cyan-500/20"
          >

              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-base sm:text-lg text-gray-400 mt-2">{stat.name}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - Single Large Card */}
        <div className="flex justify-center">
          {aboutData.stats.slice(3, 4).map((stat) => (
            <div
              key={stat.name}
              className="bg-slate-800/40 w-full sm:w-3/4 md:w-2/3 p-8 rounded-2xl backdrop-blur-sm 
                         border border-slate-700/60 text-center transition-all duration-300 
                         hover:scale-105 hover:bg-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">{stat.name}</p>
              <p className="text-base sm:text-lg text-gray-300 mt-3">{stat.value}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTheEvent;
