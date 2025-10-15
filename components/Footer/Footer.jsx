// "use client";
// import React from "react";
// import pesLogo from "../../assets/PES_LogoWhite.webp";
// import Image from "next/image";
// import { BsInstagram, BsDiscord, BsWhatsapp } from "react-icons/bs";
// // import { HiOutlineMail } from "react-icons/hi"; // Not in use
// import { AiFillLinkedin } from "react-icons/ai";
// import { Tilt } from "react-tilt";
// import { socialLinks } from "@/constants";
// import { motion } from "framer-motion";
// import { useScramble } from "use-scramble";

// const defaultOptions = {
//   reverse: false, // reverse the tilt direction
//   max: 35, // max tilt rotation (degrees)
//   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
//   scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
//   speed: 1000, // Speed of the enter/exit transition
//   transition: true, // Set a transition on enter/exit.
//   axis: null, // What axis should be disabled. Can be X or Y.
//   reset: true, // If the tilt effect has to be reset on exit.
//   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
// };
// const iconStyles =
//   "hover:text-blue-400 transition ease-in hover:-translate-y-1 duration-100 cursor-pointer";
// const Footer = () => {
//   const { ref, replay } = useScramble({
//     text: "Embrione",
//     range: [97, 125],
//     speed: 0.3,
//     tick: 1,
//     step: 1,
//     scramble: 2,
//     seed: 0,
//     chance: 1,
//     overdrive: false,
//     overflow: true,
//   });

//   return (
//     <div
//       className="w-screen h-[40vh] mt-9 flex md:flex-row flex-col justify-center items-center relative text-white space-y-6  "
//       // data-aos="fade-down"
//       // data-aos-duration="1000"
//     >
//       <a href="https://pes.edu/" target="_blank">
//         <Tilt defaultOptions={defaultOptions}>
//           <motion.div className="flex flex-col items-center justify-center">
//             <Image src={pesLogo} alt="PES-LOGO" height={200} width={200} />
//           </motion.div>
//         </Tilt>
//       </a>

//       <div className="flex flex-col items-center justify-center w-fit md:mx-12 lg:mx-36">
//         <div className="flex flex-row items-center justify-center space-x-5 w-fit h-fit mb-6">
//           <a href={socialLinks[0].url} target="_blank">
//             <BsInstagram size={23} className={iconStyles} />
//           </a>

//           <a href={socialLinks[1]?.url} target="_blank">
//             <AiFillLinkedin size={26} className={iconStyles} />
//           </a>
//           <a href={socialLinks[2]?.url} target="_blank">
//             <BsWhatsapp size={26} className={iconStyles} />
//           </a>
//         </div>
//         <p className="text-center w-fit">© All Rights Reserved 2025</p>
//         <p className="text-center">
//           Made with ❣️ By the{" "}
//           <span className="gradient-text-animation" ref={ref} /> WebDev Team
//         </p>
//       </div>

//       <div className=" flex-col items-center justify-center self-center m-0 md:flex hidden w-fit">
//         <p className="text-center">Kunjal Patwari: patwarikunjal@gmail.com </p>
//         <p className="text-center">Preksha M: preksham2004@gmail.com</p>
//       </div>
//       <div className="blue__gradient absolute md:top-[-300px] md:left-[-100px] h-[350px] w-[350px] md:h-[400px] md:w-[450px] z-[-60] " />
//     </div>
//   );
// };

// export default Footer;


"use client";
import React from "react";
import pesLogo from "../../assets/PES_LogoWhite.webp";
import Image from "next/image";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { socialLinks } from "@/constants";
import { useScramble } from "use-scramble";

const iconStyles =
  "text-gray-400 hover:text-white transition-transform duration-300 hover:-translate-y-1";

const Footer = () => {
  const { ref } = useScramble({
    text: "Embrione",
    speed: 0.3,
    tick: 1,
    scramble: 2,
  });

  return (
    <footer className="relative w-full bg-black bg-opacity-20 border-t border-gray-800 text-white pt-16 pb-8 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* --- Column 1: Branding --- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="https://pes.edu/" target="_blank" className="mb-4">
              <Image src={pesLogo} alt="PES University Logo" width={150} height={150} />
            </a>
            <p className="text-gray-400 max-w-xs">
              PES University's premier innovation challenge.
            </p>
          </div>

          {/* --- Column 2: Contacts --- */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center md:text-left">Contacts</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                {/* --- CHANGED --- Email is now visible */}
                <a href="mailto:patwarikunjal@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Kunjal Patwari: patwarikunjal@gmail.com
                </a>
              </li>
              <li>
                {/* --- CHANGED --- Email is now visible */}
                <a href="mailto:preksham2004@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Preksha M: preksham2004@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* --- Column 3: Socials --- */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center md:text-left">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href={socialLinks[0]?.url} target="_blank" rel="noopener noreferrer">
                <BsInstagram size={24} className={iconStyles} />
              </a>
              <a href={socialLinks[1]?.url} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={26} className={iconStyles} />
              </a>
              <a href={socialLinks[2]?.url} target="_blank" rel="noopener noreferrer">
                <BsWhatsapp size={24} className={iconStyles} />
              </a>
            </div>
          </div>
        </div>

        {/* --- Sub-Footer for copyright and credits --- */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-500">
            © 2025 PES University. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with <span className="text-red-500">♥</span> by the{" "}
            <span className="text-cyan-400" ref={ref} /> WebDev Team
          </p>
        </div>
      </div>
      
      <div className="blue__gradient absolute bottom-0 left-0 h-[250px] w-[450px] z-[-1] opacity-30" />
    </footer>
  );
};

export default Footer;