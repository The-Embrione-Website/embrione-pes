"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export const HackathonThemePopup = ({ isOpen, onClose, themeData }) => {
  const [activeTab, setActiveTab] = useState("problem");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // disable background scroll
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!themeData) return null;
  const { details } = themeData || {};

  // Helper function to render different content types
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      if (content.length > 0 && typeof content[0] === "object" && content[0] !== null) {
        return (
          <ul className="list-disc pl-5 space-y-2 text-xs">
            {content.map((ref, index) => (
              <li key={index}>
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                  >
                    {ref.text}
                  </a>
                ) : (
                  <span>{ref.text}</span>
                )}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <ul className="list-disc pl-5 space-y-1">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="whitespace-pre-wrap">{content}</p>;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
            <motion.div
              className="relative w-full max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto hide-scrollbar 
              bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 
              backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 my-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-slate-800/90 hover:bg-slate-700 
                text-slate-400 hover:text-white transition-all shadow-lg border border-slate-700/50 group"
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Header Image */}
              <div className="relative h-40 sm:h-48 md:h-52 w-full">
                <Image
                  src={themeData.image}
                  alt={themeData.title}
                  layout="fill"
                  className="w-full h-full object-cover rounded-t-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 text-slate-300 leading-relaxed text-sm sm:text-base">
                {/* Title */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight mb-6">
                    {themeData.title}: {themeData.subtitle}
                  </h2>
                </motion.div>

                {/* Tabs */}
                <div className="flex space-x-4 mb-6 border-b border-slate-700">
                  <button
                    onClick={() => setActiveTab("problem")}
                    className={`pb-2 text-sm sm:text-base font-medium transition-all ${
                      activeTab === "problem"
                        ? "text-cyan-400 border-b-2 border-cyan-400"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Problem Statement
                  </button>
                  <button
                    onClick={() => setActiveTab("note")}
                    className={`pb-2 text-sm sm:text-base font-medium transition-all ${
                      activeTab === "note"
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Note from the Mentors
                  </button>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === "problem" && (
                    <>
                      <div className="space-y-4">
                        <h3 className="font-semibold text-indigo-400 text-lg">Problem Statement</h3>
                        <p>{details?.problemStatement}</p>
                      </div>

                      <div className="pt-4 border-t border-slate-800 space-y-6">
                        <h3 className="font-semibold text-blue-400 text-lg">About the Problem Statement</h3>
                        {details?.about?.map((section, index) => (
                          <div key={index}>
                            <h4 className="font-semibold text-slate-200 mb-2">
                              {index + 1}. {section.heading}
                            </h4>
                            {renderContent(section.content)}
                          </div>
                        ))}
                      </div>

                      {details?.applicationAreas && (
                        <div className="pt-4 border-t border-slate-800">
                          <h3 className="font-semibold text-cyan-400 mb-2">
                            Application areas of the problem
                          </h3>
                          <ul className="list-disc pl-5 space-y-1">
                            {details.applicationAreas.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}

                  {activeTab === "note" && details?.note && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-blue-300 mb-3 text-lg">{details.note.heading}</h3>
                      <p className="whitespace-pre-wrap">{details.note.content}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hide scrollbar globally for popup */}
          <style jsx global>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
};
