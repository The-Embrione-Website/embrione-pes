"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#000514]">
      <h2 className="text-3xl sm:text-6xl font-bold text-white tracking-tight mb-8">
        About Us
      </h2>

      <div className="space-y-6 text-base sm:text-xl text-slate-300 leading-relaxed font-light">
        <p>
          <strong className="text-white font-medium">Embrione</strong> is the official technical vertical under the Department of Computer Science and Engineering at PES University, Bengaluru. We are a student-led collective driven by curiosity, collaboration, and the pursuit of meaningful innovation. At Embrione, we move beyond building projects: we question ideas, explore possibilities, and push the boundaries of technology itself.
        </p>

        <p>
          Through initiatives like <strong className="text-white font-medium">Kodikon</strong>, our flagship national hackathon, we create spaces for students to think deeply, experiment boldly, and bring research-inspired ideas to life. Our goal is to bridge the gap between learning and doing: fostering a culture where students don&apos;t just work with technology, but actively shape its future.
        </p>
      </div>
    </section>
  );
}
