"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

export const HackathonThemePopup = ({ isOpen, onClose, themeData }) => {
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

  const details = themeData.details;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
            <motion.div
              className="relative w-full max-w-4xl lg:max-w-5xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 my-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-lg border border-slate-700/50 group"
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>

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

              <div className="px-5 sm:px-6 md:px-8 py-5 sm:py-6 space-y-3 sm:space-y-4">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight">
                    {themeData.title}
                  </h2>
                </motion.div>

                <motion.div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-full shadow-sm" initial={{ width: 0 }} animate={{ width: "5rem" }} transition={{ delay: 0.2, duration: 0.4 }}></motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <div className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-6">
                    <div>
                      <h3 className="font-semibold text-indigo-400 mb-2">Problem statement (in a line)</h3>
                      <p>{details.problemStatement}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">Detailed description</h3>
                      <p className="font-medium text-slate-400">Description</p>
                      <p>{details.detailedDescription}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Background of the problem/ Why is it worth solving?</h3>
                      <p>{details.background}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">Application areas of the problem</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {details.applicationAreas.map((item, index) => <li key={index}>{item}</li>)}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-emerald-400 mb-2">Datasets/ Starter reference links that participants can use (Optional)</h3>
                      <ul className="list-disc pl-5 space-y-2 text-xs">
                        {details.references.map((ref, index) => (
                          <li key={index}>
                            {ref.url ? (
                              <a
                                href={ref.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-200"
                              >
                                {ref.text}
                              </a>
                            ) : (
                              <span>{ref.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* The entire 'mentorNotes' div has been removed from here */}

                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};