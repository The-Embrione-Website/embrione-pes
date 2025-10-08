"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const AboutUs = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0.0001, 1]);
  return (
    <div className="p-5 md:px-[130px] flex flex-col relative "
    id="about">
      <div
        className="blue__gradient absolute md:top-[-450px] md:right-[600px] h-[300px] w-[250px] md:h-[500px] md:w-[600px] "
        data-aos="zoom-in"
        data-aos-duration="700"
      />
      <h1
        className="text-white w-fit md:text-7xl text-5xl py-6 "
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        About Us
      </h1>
      <div>
        <p
          className="text-white text-1xl md:text-2xl text-justify  "
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          The <span className="gradient-text-animation">Embrione </span> 
          is the official technical vertical  under the Department of Computer Science and Engineering at PES University, Bangalore.We’re a student-led collective driven by curiosity, collaboration, and the pursuit of meaningful innovation.
          At Embrione, we move beyond building projects - we question ideas, explore possibilities, and push the boundaries of technology itself. Through initiatives like Kodikon, our flagship national hackathon, we create spaces for students to think deeply, experiment boldly, and bring research-inspired ideas to life.
          We aim to bridge the gap between learning and doing - fostering a culture where students don’t just work with technology, but shape its future.

        </p>
      </div>
    </div>
  );
};

export default AboutUs;
