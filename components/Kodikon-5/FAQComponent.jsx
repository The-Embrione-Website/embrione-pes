// "use client";
// import faqData from "./FAQData";
// import React, { useState } from "react";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import TitleComponent from "./HelperComponents/TitleComponent";

// const FAQ = () => {
//   // Your initial state logic is perfect, no changes needed here.
//   const initialOpenState = {};
//   faqData.forEach((ele) => {
//     initialOpenState[ele.id] = false;
//   });

//   const [isOpen, setIsOpen] = useState(initialOpenState);

//   // Your toggle function is also perfect for an accordion style.
//   const toggleOpen = (id) => {
//     setIsOpen((prevState) => {
//       const updatedState = {};
//       for (const key in prevState) {
//         // This ensures only one item is open at a time.
//         updatedState[key] = key === id ? !prevState[key] : false;
//       }
//       return updatedState;
//     });
//   };

//   return (
//     <div className="flex flex-col w-full h-fit gap-6" id="faq">
//       <TitleComponent titleData={"FAQ"} />
//       <div className="flex flex-col gap-3 divide-y-2 divide-dashed px-2 pt-5 md:px-0 text-white">
//         {faqData.map((ele, index) => {
//           return (
//             <div key={index} className="pt-3">
//               {/* Question part remains the same */}
//               <div
//                 className="flex w-[100%] justify-between items-center text-xl md:text-2xl px-10 cursor-pointer"
//                 onClick={() => toggleOpen(ele.id)}
//               >
//                 <span className="w-[80%]">~$ {ele.question}</span>
//                 {/* We can add a transition to the icon rotation as a bonus */}
//                 <span className="transition-transform duration-300">
//                   {isOpen[ele.id] ? <AiOutlineMinus /> : <AiOutlinePlus />}
//                 </span>
//               </div>

//               {/* --- ANIMATED ANSWER SECTION --- */}
//               {/* We no longer use && to render. Instead, we use conditional classes. */}
//               <div
//                 className={`
//                   overflow-hidden transition-all duration-500 ease-in-out
//                   ${
//                     isOpen[ele.id]
//                       ? "max-h-96 opacity-100 my-4"
//                       : "max-h-0 opacity-0 my-0"
//                   }
//                 `}
//               >
//                 <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex w-[100%] items-center md:text-xl px-12 p-3 text-justify">
//                   {/* <span className="pr-2">{">>"}</span> */}
//                   {ele.answer}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

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