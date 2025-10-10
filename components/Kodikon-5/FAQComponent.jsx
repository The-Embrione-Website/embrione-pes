"use client";
import faqData from "./FAQData";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import TitleComponent from "./HelperComponents/TitleComponent";

const FAQ = () => {
  // Your initial state logic is perfect, no changes needed here.
  const initialOpenState = {};
  faqData.forEach((ele) => {
    initialOpenState[ele.id] = false;
  });

  const [isOpen, setIsOpen] = useState(initialOpenState);

  // Your toggle function is also perfect for an accordion style.
  const toggleOpen = (id) => {
    setIsOpen((prevState) => {
      const updatedState = {};
      for (const key in prevState) {
        // This ensures only one item is open at a time.
        updatedState[key] = key === id ? !prevState[key] : false;
      }
      return updatedState;
    });
  };

  return (
    <div className="flex flex-col w-full h-fit gap-6" id="faq">
      <TitleComponent titleData={"FAQ"} />
      <div className="flex flex-col gap-3 divide-y-2 divide-dashed px-2 pt-5 md:px-0 text-white">
        {faqData.map((ele, index) => {
          return (
            <div key={index} className="pt-3">
              {/* Question part remains the same */}
              <div
                className="flex w-[100%] justify-between items-center text-xl md:text-2xl px-10 cursor-pointer"
                onClick={() => toggleOpen(ele.id)}
              >
                <span className="w-[80%]">~$ {ele.question}</span>
                {/* We can add a transition to the icon rotation as a bonus */}
                <span className="transition-transform duration-300">
                  {isOpen[ele.id] ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>

              {/* --- ANIMATED ANSWER SECTION --- */}
              {/* We no longer use && to render. Instead, we use conditional classes. */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    isOpen[ele.id]
                      ? "max-h-96 opacity-100 my-4"
                      : "max-h-0 opacity-0 my-0"
                  }
                `}
              >
                <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex w-[100%] items-center md:text-xl px-12 p-3 text-justify">
                  {/* <span className="pr-2">{">>"}</span> */}
                  {ele.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;