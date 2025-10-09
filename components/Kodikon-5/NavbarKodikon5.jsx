"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { whitepeslogo, whitelogo } from "@/public/Kodikon3";
import pes from "@/public/Kodikon5/pes.png";
import cse from "@/public/Kodikon5/cse.png";
import Image from "next/image";

const NavbarKodikon5 = () => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 w-full z-50 backdrop-blur duration-200 border-b-2 ${
          isIntersecting
            ? "bg-zinc-900/0 border-zinc-900"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
        ref={ref}
      >
        <div className="justify-between mx-auto my-2 lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:py-5 md:block">
              <div className="flex flex-row">
                <a href="/" className="flex items-center h-10">
                  <Image src={pes} className="w-[100px]" alt="" />
                </a>
                <a href="/" className="flex items-center h-10">
                  <Image src={cse} className="w-[100px]" alt="" />
                </a>
                <a href="/" className="flex items-center h-10 ">
                  <Image src={whitelogo} className="w-[100px]" alt="" />
                </a>
              </div>

              {/* --- Mobile Menu --- */}
              <div className="md:hidden flex flex-row items-center justify-center w-fit space-x-5">
                <Link
                  href="https://vision.hack2skill.com/event/kodikon5/registration"
                  target="_blank"
                >
                  <button className="text-white border border-white p-2 rounded-lg bg-opacity-25 h-fit w-fit text-sm md:text-xl">
                    Register!
                  </button>
                </Link>
                <button
                  className={`p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 transition ease-in-out duration-100 ${
                    navbar && "animate-bounce"
                  } ${!navbar && "animate-pulse"}`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* --- Desktop Menu --- */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-3 lg:space-x-6 md:space-y-0">
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#about" onClick={() => setNavbar(false)}>
                    About
                  </Link>
                </li>
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#tracks" onClick={() => setNavbar(false)}>
                    Tracks
                  </Link>
                </li>
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#timeline" onClick={() => setNavbar(false)}>
                    Timeline
                  </Link>
                </li>
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#sponsor" onClick={() => setNavbar(false)}>
                    Sponsors
                  </Link>
                </li>
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#partners" onClick={() => setNavbar(false)}>
                    Partners
                  </Link>
                </li>
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#faq" onClick={() => setNavbar(false)}>
                    FAQ
                  </Link>
                </li>
                <li className="text-white text-xs lg:text-[16px]">
                  <Link href="#contact" onClick={() => setNavbar(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarKodikon5;
