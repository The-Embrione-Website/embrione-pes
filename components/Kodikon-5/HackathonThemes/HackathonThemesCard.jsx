"use client";
import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

export const HackathonThemesCard = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  const cardControls = useAnimation();

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      variants={{
        normal: { scale: 1 },
        up: { scale: 1.02 }
      }}
      onMouseMove={onMouseMove}
      className="overflow-visible h-full relative duration-700 rounded-2xl group"
      animate={cardControls}
      onMouseEnter={() => cardControls.start("up")}
      onMouseLeave={() => cardControls.start("normal")}
      initial="normal"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-700/50 hover:border-slate-500/70 transition-all h-full">
        <div className="pointer-events-none">
          <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-slate-100/10 transition duration-1000 group-hover:opacity-50"
            style={style}
          />
          <motion.div
            className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
            style={style}
          />
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export const Article = ({ title, thumbnail, themeNumber, description, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onOpenModal({ title, thumbnail, themeNumber, description });
  };

  return (
    <div 
      className="relative cursor-pointer h-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group hover:scale-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Theme Number Badge - Enhanced positioning and z-index */}
      <div className="absolute -top-3 -left-4 z-50">
        <div className="relative">
          <motion.div 
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-800 shadow-2xl flex items-center justify-center border-[3px] border-slate-900"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-white text-2xl font-bold drop-shadow-lg">{themeNumber}</span>
          </motion.div>
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>
        </div>
      </div>

      {/* Main Card Container - Improved spacing */}
      <div className="relative pt-8 px-6 pb-4 h-full flex flex-col bg-slate-900/30 backdrop-blur-sm">
        
        {/* Image Container - Better proportions */}
        <div className="relative h-48 w-full mb-5">
          <div className="relative h-full w-full rounded-xl overflow-hidden ring-2 ring-slate-700/40 shadow-xl group-hover:ring-slate-600/60 transition-all duration-300">
            <Image
              src={thumbnail}
              alt={title}
              width={400}
              height={200}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[2.02]"
            />
            
            {/* Dark overlay on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t blue-100 from-black via-black/85 to-black/50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:from-blue-500 hover:to-indigo-600 border border-blue-400/30"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Know More
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Title Section - Better vertical alignment */}
        <div className="flex-1 flex items-start justify-center px-2 pb-3">
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 text-center tracking-wide leading-snug">
            {title}
          </h3>
        </div>

        {/* Decorative line - More prominent */}
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-blue-500/50"></div>
      </div>
    </div>
  );
};