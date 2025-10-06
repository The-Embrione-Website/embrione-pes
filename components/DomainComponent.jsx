"use client";
import React, { useEffect } from "react";
/*import Image from "next/image";
import { slideIn, fadeIn, zoomIn } from "@/utils/framermotion";
import { planetVariants } from "@/utils/framermotion";
import { AiFillLinkedin } from "react-icons/ai";
import { Tilt } from "react-tilt";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";*/

import {motion} from "framer-motion";

const PLACEHOLDER_PHOTO_URL = "https://placehold.co/110x110/334155/ffffff?text=Head";
const LinkedInIcon = ({ size = 25 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor" // Use currentColor to inherit text color
        stroke="none"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.541-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.771 7 2.476v6.759z"/>
    </svg>
);

/*const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};*/

const customStyles = `
/* Keyframes for the diagonal sweep animation (Bottom-Left to Top-Right) */
@keyframes sweep {
  /* 0% Start: Off-screen bottom-left, invisible */
  0% {
    /* Line angle -45deg. translate starts sweep off-screen to the bottom-left */
    transform: rotate(-45deg) translateX(-100%);
    opacity: 0;
  }
  /* 5% Start of visibility (quick fade-in for the flash duration) */
  5% {
    opacity: 1; 
  }
  /* 95% End of visibility (holds position near top-right) */
  95% {
    opacity: 1;
  }
  /* 100% End: Off-screen top-right, invisible (clears completely) */
  100% {
    transform: rotate(-45deg) translateX(150%);
    opacity: 0;
  }
}

.flash-overlay {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  border-radius: 0.375rem;
  z-index: 10;
}

.flash-sweep {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%; 
  height: 200%; 
  
  /* Initial position is set by the 0% keyframe for smooth start */
  transform: rotate(-45deg) translateX(-100%);
  transform-origin: top left;
  
  /* Brighter, THIN line appearance using a tight gradient (49%-51%) */
  background: linear-gradient(
    90deg, 
    rgba(0, 255, 255, 0) 0%, /* Electric Cyan */
    rgba(0, 255, 255, 0.95) 49%, /* Thinner core */
    rgba(0, 255, 255, 0.95) 51%,
    rgba(0, 255, 255, 0) 100%
  );
  
  /* Default state must be hidden */
  opacity: 0; 
}

/* Hover effects */
.group:hover .flash-sweep {
  /* Run the animation once */
  animation: sweep 0.7s ease-out forwards; 
}
`;

/*
const iconStyles =
  "hover:text-blue-400 transition ease-in hover:-translate-y-1 duration-100 cursor-pointer mx-2 mt-2";*/
const iconStyles =
  "hover:text-[#00ffff] transition ease-in hover:-translate-y-1 duration-100 cursor-pointer flex-shrink-0";

/*
const DomainComponent = ({ index, domainName, headsAndPhotos }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0.01, 1]);

  return (
    <Tilt options={defaultOptions}>
      <motion.div
         data-aos="zoom-in-right"
         data-aos-duration="500"
         data-aos-delay={((index % 3) + 1) * 200}
        className={`h-fit w-[250px] md:h-[350px] md:w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200 m-4  px-5  flex flex-col items-center justify-center relative`}
      >
        <h2 className=" mt-4 py-5  text-2xl md:text-4xl text-center">
          {domainName}
        </h2>

        {headsAndPhotos?.map(
          ({ domainHead, domainHeadPhoto, linkedInURL }, index) => (
            <div className="flex flex-row justify-center items-center space-x-3 mb-5" key={index}>
              <Image
                src={domainHeadPhoto}
                alt=""
                height={70}
                width={100}
                className="h-[110px] w-[110px] object-cover rounded-full"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-center text-[1.2rem]">{domainHead}</h3>
                <a href={linkedInURL} target="_parent" className={iconStyles}>
                  <AiFillLinkedin size={25} />
                </a>
              </div>
            </div>
          )
        )}
      </motion.div>
    </Tilt>
  );
};*/
const DomainComponent = ({ 
    index = 0, 
    domainName = "Domain Name", 
    domainHead = "Unknown Member", 
    linkedInURL = "#", 
    domainHeadPhoto,
    isDomainHead = false // <-- PROP ACCEPTED
}) => {

    // Helper for formatting the member name (Title Case)
    const formatName = (name) => {
        if (!name) return "";
        const parts = name.toLowerCase().split(' ');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };

    // Helper for formatting the DOMAIN NAME (Title Case)
    const formatDomainName = (name) => {
        if (!name) return "";
        const parts = name.toLowerCase().split(' ');
        return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    };
    
    // Determine the role label based on the new prop
    const roleLabel = isDomainHead ? "Domain Head" : "Core Member";


    const initialAnimation = { opacity: 0, x: -50 };
    // Animation delay uses the overall index from the flattened list for staggered entry
    const animateAnimation = { opacity: 1, x: 0, transition: { duration: 0.5, delay: (index % 6) * 0.1 } }; 

  return (
    <>
        {/* Custom CSS for the sweep animation */}
        <style>{customStyles}</style>

        <motion.div
            initial={initialAnimation}
            animate={animateAnimation}
            // 1. Floating Effect, Shadow, and GRADIENT BACKGROUND 
            whileHover={{ 
                scale: 1.05, 
                translateY: -8, // Makes it look like it's lifting
                // COMBINED SHADOW: Dark Lift Shadow + CYBERCORE CYAN GLOW
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 255, 255, 0.6)", 
                // Dark Blue (#14213B) to Mid Blue (#4C72B8) gradient (Unchanged)
                background: "linear-gradient(135deg, rgba(20, 33, 59, 0.5) 0%, rgba(76, 114, 184, 0.5) 100%)" 
            }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            
            // Fixed height h-[400px] required for the 15/65/20 split to work
            className={`group h-[400px] w-[250px] md:w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200 m-4 relative overflow-hidden flex flex-col`}
        >
            {/* 2. Diagonal Flashing Animation Element (Full overlay) 
                It MUST be the first element inside the motion.div to cover everything. 
            */}
            <div className="flash-overlay">
                <div className="flash-sweep"></div>
            </div>
            
            {/* Content Container (Z-index ensures content is above the flash) */}
            <div className="relative z-20 w-full h-full flex flex-col">
                
                {/* 1. TOP SECTION (15%): DOMAIN HEAD */}
                <div className="h-[15%] w-full flex flex-col items-center justify-center px-4">
                    
                    {/* Domain Name: Modern font, no tracking */}
                    <span className="text-xl md:text-2xl text-[#00ffff] font-extrabold font-sans text-center leading-tight">
                        {formatDomainName(domainName)}
                    </span>
                </div>
                

                {/* 2. MIDDLE SECTION (65%): HEAD PICTURE */}
                <div 
                    className="h-[65%] w-full bg-cover bg-center relative" 
                    style={{ 
                        // Note: If running this outside an environment with the images, these URLs will fail.
                        // The PLACEHOLDER_PHOTO_URL fallback is not used here because the data contains paths.
                        backgroundImage: `url(${domainHeadPhoto || PLACEHOLDER_PHOTO_URL})`
                    }}
                >
                    {/* Image section */}
                </div>


                {/* 3. BOTTOM SECTION (20%): MEMBER NAME & LINKEDIN */}
                <div className="h-[20%] w-full flex items-center justify-between px-5 py-3 bg-black/15">
                    <div className="flex flex-col items-start justify-center overflow-hidden">
                        {/* Subtly mention Role (Dynamic based on isDomainHead) */}
                        <span className="text-xs text-[#00ffff] opacity-60 uppercase tracking-widest leading-none mb-1">
                            {roleLabel} 
                        </span>
                        {/* Member Name */}
                        <span className="text-2xl text-white font-normal tracking-wide leading-tight">
                            {formatName(domainHead)}
                        </span>
                    </div>
                    
                    {/* LINKEDIN BUTTON */}
                    <a 
                        href={linkedInURL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={iconStyles}
                    >
                        <LinkedInIcon size={30} /> 
                    </a>
                </div>

            </div>
        </motion.div>
    </>
  );
};


export default DomainComponent;
