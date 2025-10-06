"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

export const HackathonThemePopup = ({ isOpen, onClose, themeData }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!themeData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container - Centered with proper sizing */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden pointer-events-auto my-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-lg border border-slate-700/50 group"
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Theme Number Badge - Smaller and better positioned */}
              <div className="absolute top-3 left-3 z-30">
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-600 shadow-xl flex items-center justify-center border-2 border-slate-900/50"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 250 }}
                >
                  <span className="text-white text-base sm:text-lg font-bold">
                    {themeData.themeNumber}
                  </span>
                </motion.div>
              </div>

              {/* Image Section - Reduced height */}
              <div className="relative h-40 sm:h-48 md:h-52 w-full">
                <Image
                  src={themeData.thumbnail}
                  alt={themeData.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              </div>

              {/* Content Section - Optimized spacing */}
              <div className="px-5 sm:px-6 md:px-8 py-5 sm:py-6 space-y-3 sm:space-y-4">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight">
                    {themeData.title}
                  </h2>
                </motion.div>

                {/* Decorative Line */}
                <motion.div 
                  className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full shadow-sm"
                  initial={{ width: 0 }}
                  animate={{ width: "5rem" }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                ></motion.div>

                {/* Description - Scrollable if too long */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="max-h-32 sm:max-h-40 md:max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50"
                >
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {themeData.description}
                  </p>
                </motion.div>

                {/* Register Button - Compact */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <button
                    className="w-full py-3 sm:py-3.5 px-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 text-white font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all border border-blue-500/30 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Register Now
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </motion.div>
              </div>

              {/* Decorative Elements - Subtle */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};