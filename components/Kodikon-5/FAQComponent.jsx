"use client";
import faqData from "./FAQData";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import TitleComponent from "./HelperComponents/TitleComponent";

const FAQ = () => {
  const initialOpenState = faqData.reduce((acc, ele) => {
    acc[ele.id] = false;
    return acc;
  }, {});
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const toggleOpen = (id) => {
    setIsOpen((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach(key => {
        newState[key] = key === id ? !prevState[key] : false;
      });
      return newState;
    });
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto h-fit gap-8 p-4" id="faq">
      <TitleComponent titleData={"FAQ"} />

      {/* --- NEW --- Using a gap between each self-contained FAQ item */}
      <div className="flex flex-col gap-4">
        {faqData.map((ele, index) => (
          <div
            key={ele.id}
            className={`
              bg-gray-800/40 border border-gray-700/60 rounded-xl 
              transition-all duration-300 ease-out
              ${/* --- NEW --- Active state indicator and background */''}
              ${isOpen[ele.id] ? "border-cyan-400/50 bg-cyan-900/20" : "border-transparent"}
            `}
          >
            {/* Question Trigger */}
            <div
              className="flex w-full items-start gap-4 p-6 cursor-pointer"
              onClick={() => toggleOpen(ele.id)}
            >
              {/* --- NEW --- Styled question numbering */}
              <div className="text-2xl font-bold text-cyan-400/40">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-gray-100">
                  {ele.question}
                </h3>
              </div>
              
              <span className="text-xl text-gray-400 mt-1">
                <AiOutlinePlus
                  className={`
                    transition-transform duration-300 ease-out
                    ${isOpen[ele.id] ? "rotate-45 text-cyan-400" : "rotate-0"}
                  `}
                />
              </span>
            </div>

            {/* Animated Answer Panel */}
            <div
              className={`
                grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out
                ${isOpen[ele.id] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
            >
              <div className="overflow-hidden">
                <div className="text-gray-300 leading-relaxed px-6 pb-6 pl-16">
                  {ele.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;