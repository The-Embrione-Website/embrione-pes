'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/framermotion";
import { teamMembersDetails } from "@/constants";

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.01 }}
      className="p-5 md:p-[110px] flex flex-col items-center"
    >
      <h1
        className="text-white text-center md:text-7xl text-5xl py-6 mb-12 font-bold tracking-wide"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        Meet The Team
      </h1>

      {/* Grid for team cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 gap-x-8 place-items-center w-full">
        {teamMembersDetails.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 30px rgba(0, 102, 255, 0.5)",
              rotateY: 2,
            }}
            className="bg-gradient-to-br from-[#0a0f1f] to-[#0c2a66] rounded-2xl shadow-lg overflow-hidden text-white w-full max-w-[300px] h-[420px] flex flex-col justify-between hover:shadow-blue-600/30 transition-all duration-300"
          >
            {/* Image section */}
            <div className="w-full h-[260px] overflow-hidden">
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info overlay */}
            <div className="flex flex-col items-center justify-end bg-black/40 backdrop-blur-md p-5 text-center flex-grow">
              <h2 className="text-2xl font-semibold mb-1">{member.name}</h2>
              <h3 className="text-blue-300 text-sm font-medium mb-3">
                {member.domain} — {member.role}
              </h3>

             {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-blue-500/10 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-blue-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.024-3.037-1.85-3.037-1.853 0-2.137 1.447-2.137 2.942v5.664H9.348V9h3.41v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.27 2.373 4.27 5.459v6.282zM5.337 7.433a1.973 1.973 0 1 1 0-3.946 1.973 1.973 0 0 1 0 3.946zM6.937 20.452H3.738V9h3.199v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}


            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
