"use client";
import { MapPin, ArrowUpRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TitleComponent from "./HelperComponents/TitleComponent";

export function ClientOnly({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
}

const Map = () => {
  // Original link for button
  const mapsLink =
    "https://www.google.com/maps/place/PES+Dr.MRD+Block/@12.9354236,77.5336475,18z/data=!4m6!3m5!1s0x3bae3e46c88e2fdd:0xa4cbe43136ced45f!8m2!3d12.9354236!4d77.5349342!16s%2Fg%2F11csqg5cc0?hl=en&entry=ttu";

  // Embed URL for iframe
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.183205584666!2d77.53235947481297!3d12.935423587354287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e46c88e2fdd%3A0xa4cbe43136ced45f!2sPES%20Dr.MRD%20Block!5e0!3m2!1sen!2sin!4v1739721111111!5m2!1sen!2sin";

  return (
    <section className="relative w-full py-16 px-6 md:px-8" id="location">
      <div className="max-w-7xl mx-auto">
        <TitleComponent titleData={"Event Location"} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              PES University, Dr. MRD Block
            </h3>

            <div className="mt-4 flex items-center gap-3 text-lg text-gray-400">
              <MapPin size={20} className="text-cyan-400 flex-shrink-0" />
              <span>Outer Ring Rd, Banashankari, Bengaluru, Karnataka</span>
            </div>

            <Link href={mapsLink} target="_blank" rel="noopener noreferrer">
              <button className="mt-8 flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                Get Directions
                <ArrowUpRight size={20} />
              </button>
            </Link>
          </div>

          {/* Right side - Map */}
          <div className="w-full h-80 md:h-96">
            <iframe
              src={embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl border border-gray-800"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="blue__gradient absolute top-0 right-0 h-[350px] w-[450px] z-[-1] opacity-20" />
    </section>
  );
};

export default Map;
