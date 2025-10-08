"use client";
import React, { useEffect, useState, useRef } from "react";
import { HackathonThemesCard, Article } from "./HackathonThemesCard";
import { HackathonThemePopup } from "./HackathonThemePopup";
import TitleComponent from "../HelperComponents/TitleComponent";
import { motion, useAnimation, useInView } from "framer-motion";

const themes = [
  // --- TRACK 1: Computer Vision & Edge IoT ---
  {
    title: "Computer Vision & Edge IoT",
    subtitle: "Redefining Smart Surveillance",
    image: "/Kodikon5/themes-thumbnail/computer-vision.jpg",
    cardDescription:
      "Design intelligent, adaptive, and reliable vision devices that conserve energy and safeguard privacy under any condition.",
    details: {
      problemStatement:
        "Design the next wave of intelligent video surveillance — smart, connected vision devices that adapt to their environment, conserve energy, safeguard privacy, and stay reliable under any condition.",
      about: [
        {
          heading: "Description",
          content:
            "Participants are challenged to design innovative approaches for edge-based video surveillance systems and solutions that redefine how smart cameras and connected vision devices operate in the real world — particularly across diverse and demanding operating conditions such as low-light, high-motion, or variable network environments. Solutions should strike a balance between intelligence, sustainability, reliability, accessibility, and scalability, reflecting the needs of a market where designs must be cost-effective, robust, reusable, and quick to design and implement.",
        },
        {
          heading: "Background",
          content:
            "With millions of video cameras being deployed worldwide, the next phase of innovation lies in creating intelligent, affordable, and reliable surveillance solutions that work seamlessly under real-world constraints across diverse environments. Current systems still face critical challenges such as high energy consumption, connectivity dropouts, privacy concerns, and limited image quality. This challenge seeks to bridge the gap between academic research and deployable, industry-grade video surveillance products that are globally scalable yet optimized for diverse market realities.",
        },
        {
          heading: "Application areas of the problem",
          content: [
            "Smart home and residential security (video doorbells, baby monitors, eldercare cameras).",
            "Smart city infrastructure (traffic monitoring, public safety, urban mobility).",
            "Industrial safety and workplace monitoring.",
            "Environmental and infrastructure monitoring applications.",
          ],
        },
      ],
      note: {
        heading: "Note from Pixcellence",
        content: `Dear Participants,
Welcome to Kodikon 5.0 - Powered by Pixcellence Technologies.
We're thrilled to invite you to take part in this year's challenge, where innovation meets impact.

At Pixcellence Technologies, we design and engineer end-to-end video surveillance and connected vision solutions, from concept and hardware design to firmware, software, and AI-driven intelligence.

This year's Pixcellence Sponsor Track in Computer Vision & IoT invites you to reimagine the future of smart, connected vision systems and solutions — platforms that can see, understand, and adapt to the world around them.

You're welcome to demonstrate your ideas through working prototypes, hardware demos, or simulations. Software-only implementations are equally valid and will be evaluated on innovation, clarity, and feasibility.

We encourage you to explore themes such as:
1. Image processing and enhancement
2. Energy optimization and reliability
3. Privacy and security
4. Interoperability and scalability
5. Cost-effective design

We look forward to seeing your ideas come alive during Kodikon 5.0.

Warm regards,
Team Pixcellence Technologies`,
      },
    },
  },

  // --- TRACK 2: Assistive GenAI Tools ---
  {
    title: "Assistive GenAI Tools",
    subtitle: "Empowering Neurodivergent Minds",
    image: "/Kodikon5/themes-thumbnail/gen-ai.jpg",
    cardDescription:
      "Use Generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people.",
    details: {
      problemStatement:
        "Generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people across education, work, and daily life.",
      about: [
        {
          heading: "Description",
          content:
            "Lightweight, user-controlled GenAI co-pilots that simplify information, scaffold planning, and support clear expression — without being diagnostic.",
        },
        {
          heading: "Background",
          content:
            "Neurodivergent learners and employees often face barriers in executive function, comprehension, and social communication. Generative AI can meaningfully lower cognitive effort and increase inclusion, empowering individuals with tools for clearer communication, structured planning, and personalized support.",
        },
        {
          heading: "Application areas of the problem",
          content: [
            "Education: study planning, lecture/meeting notes, plain-language study materials.",
            "Workplace: focus aids, meeting summaries, tone assistance for emails and presentations.",
            "Communication & Daily Living: social stories, AAC (augmentative and alternative communication) sentence expansion, multilingual communication practice.",
          ],
        },
        {
          heading: "Starter reference links",
          content: [
            {
              text: "Harnessing Generative AI to Overcome Executive Dysfunction in Higher Education (HEAd'25)",
              url: "https://doi.org/10.4995/head25.2025.20077",
            },
            {
              text: "AI-Powered Adaptive Education for Disabled Learners (SSRN)",
              url: "https://doi.org/10.2139/ssrn.5042713",
            },
            {
              text: "Artificial Intelligence, Neurodiversity, and Trust: An Exploratory Overview",
              url: "https://doi.org/10.12775/setf.2025.011",
            },
          ],
        },
      ],
      note: {
        heading: "Note from the Mentors",
        content:
          "The above problem statement and references are not meant to be taken as-is or approached as a single, all-encompassing challenge. Instead, they serve as a starting point — participants are encouraged to identify a focused challenge they are most passionate about solving using GenAI.",
      },
    },
  },

  // --- TRACK 3: Privacy-Preserving Distributed Systems ---
  {
    title: "Privacy-Preserving Distributed Systems",
    subtitle: "Federated Learning",
    image: "/Kodikon5/themes-thumbnail/distributed-systems.jpg",
    cardDescription:
      "Build distributed computing systems for collaborative machine learning on sensitive data without centralization, using federated learning.",
    details: {
      problemStatement:
        "Build distributed computing systems that enable collaborative machine learning on sensitive data without centralizing or exposing private information, using federated learning to unlock insights while preserving privacy.",
      about: [
        {
          heading: "Description",
          content:
            "Create federated learning frameworks that train AI models across decentralized data sources — hospitals, financial institutions, personal devices — where sensitive information stays local, and only model updates are shared to build global models.",
        },
        {
          heading: "Background",
          content:
            "Sensitive data holds immense potential for breakthroughs in healthcare, finance, and personalized services, yet privacy concerns and regulations keep it siloed. Federated learning allows collaboration without compromising data privacy.",
        },
        {
          heading: "Application areas of the problem",
          content: [
            "Healthcare: disease prediction and diagnostics across hospitals without sharing patient records.",
            "Finance: fraud detection and risk assessment across banks without exposing customer data.",
            "Personal Devices: improving recommendations and predictive text while keeping user data on-device.",
            "Enterprise: cross-organizational analytics while maintaining confidentiality and compliance.",
          ],
        },
        {
          heading: "Starter reference links",
          content: [
            {
              text: "What is Federated Learning (IBM Research)",
              url: "https://research.ibm.com/blog/what-is-federated-learning",
            },
            {
              text: "Federated Learning Explained (Viso.ai)",
              url: "https://viso.ai/deep-learning/federated-learning/",
            },
            {
              text: "IEEE: Analysis of Federated Learning on Edge Devices",
              url: "https://ieeexplore.ieee.org/document/9264060",
            },
          ],
        },
      ],
      note: {
        heading: "Note from the Mentors",
        content:
          "Teams are encouraged to design their own evaluation metric that tests how effectively their federated system learns and collaborates. Judges will look for metrics that reflect steady improvement, efficient communication, and robust convergence.",
      },
    },
  },
];

const HackathonThemes = () => {
  const themeGrid = useRef(null);
  const isInView = useInView(themeGrid, { once: true });
  const controls = useAnimation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const handleOpenModal = (themeData, index) => {
    const themeForPopup = {
      ...themeData,
      themeNumber: `${index + 1}`,
    };
    setSelectedTheme(themeForPopup);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTheme(null);
  };

  return (
    <>
      <div className="flex justify-center flex-col w-full h-fit gap-8 py-8">
        <div className="flex justify-center items-center text-center">
          <TitleComponent titleData="Hackathon Tracks" id="theme" />
        </div>

        <motion.div
          ref={themeGrid}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {themes.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <HackathonThemesCard>
                <Article
                  title={item.title}
                  thumbnail={item.image}
                  themeNumber={`${index + 1}`}
                  description={item.cardDescription}
                  onOpenModal={() => handleOpenModal(item, index)}
                />
              </HackathonThemesCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <HackathonThemePopup
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        themeData={selectedTheme}
      />
    </>
  );
};

export default HackathonThemes;
