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
      `Design the next wave of intelligent video surveillance - smart, connected vision devices that
adapt to their environment, conserve energy, safeguard privacy, and stay reliable under any
condition`,
    details: {
      problemStatement:
        `Design the next wave of intelligent video surveillance - smart, connected vision devices that
adapt to their environment, conserve energy, safeguard privacy, and stay reliable under any
condition`,
      about: [
        {
          heading: "Description",
          content:
          "Participants are challenged to design innovative approaches for edge-based video surveillance systems and solutions that redefine how smart cameras and connected vision devices operate in the real world - particularly across diverse and demanding operating conditions such as low-light, high-motion, or variable network environments. Solutions should strike a balance between intelligence, sustainability, reliability, accessibility, and scalability, reflecting the needs of a market where designs must be cost-effective, robust, reusable, and quick to design and implement. Teams are encouraged to explore how next-generation video systems can be made more adaptive, secure, efficient, and trustworthy, through advancements in image processing, system architecture, and edge intelligence — while rethinking the trade-offs between performance, affordability, and speed of innovation." ,   
        },
        {
          heading: "Background",
          content:
            `With millions of video cameras being deployed worldwide, the next phase of innovation lies in creating intelligent, affordable, and reliable surveillance solutions that work seamlessly under real-world constraints across diverse environments.

Current systems still face critical challenges such as:
  ● High energy consumption in battery-powered cameras.
  ● Connectivity dropouts leading to missed critical events.
  ● Privacy concerns in continuously streaming sensitive video.
  ● Lack of interoperability with other IoT devices in smart homes and smart cities.
  ● Poor low-light performance and limited image quality, highlighting the growing importance of advanced image processing, HDR optimization, and color night vision technologies.

These challenges are amplified in regions with variable infrastructure conditions, where factors like intermittent power, limited bandwidth, and network downtimes demand solutions that are resilient, locally adaptive, and capable of operating autonomously at the edge.

Modern smart cameras must therefore evolve beyond AI analytics — balancing power efficiency, privacy, image quality, interoperability, and design agility to deliver truly robust and trustworthy video systems. This challenge seeks to bridge the gap between academic research and deployable, industry-grade video surveillance products that are globally scalable yet optimized for diverse market realities.
`
        },
        {
          heading: "Application areas of the problem",
          content: [
            "Smart home and residential security (video doorbells, baby monitors, eldercare cameras).",
            "Smart city infrastructure (traffic monitoring, public safety, urban mobility).",
            "Community surveillance and neighborhood safety systems.",
            "Industrial safety and workplace monitoring.",
            "Environmental and infrastructure monitoring applications.",
          ],
        },
      ],
      note: {
        heading: "Note from Pixcellence",
        content: 
        `Dear Participants,

Welcome to Kodikon 5.0 – Powered by Pixcellence Technologies. We’re thrilled to invite you to take part in this year’s challenge, where innovation meets impact.

At Pixcellence Technologies, we design and engineer end-to-end video surveillance and connected vision solutions, from concept and hardware design to firmware, software, and AI-driven intelligence. Our expertise spans optics, image processing, embedded systems, and intelligent video analytics, enabling us to create products that are reliable, power-efficient, and perceptually brilliant. With a design ecosystem rooted in India and collaborations across the U.S. and global markets, Pixcellence has contributed to over 60 patents and helped bring millions of smart video products to homes and businesses worldwide. We have been at the forefront of innovations such as color night vision, power-optimized edge architectures, and advanced image quality tuning, shaping the future of smart, connected vision. This year’s Pixcellence Sponsor Track in Computer Vision & IoT at Kodikon 5.0 invites you to: Reimagine the future of smart, connected vision systems and solutions, platforms that can see, understand, and adapt to the world around them. We encourage you to explore problems and ideas that matter in real-world scenarios: How can smart vision systems work reliably in low-light or variable network conditions? How can they be energy-efficient, privacy-conscious, and quick to design and deploy? How can advances in image processing and edge intelligence make them more useful, sustainable, and accessible? You’re welcome to demonstrate your ideas through working prototypes, hardware demos, or simulations. While specialized hardware is not essential, teams that bring their concepts to life on real hardware platforms are encouraged - software-only, computer-based implementations are equally valid and will be evaluated on innovation, clarity, and feasibility. We encourage you to explore themes such as:
  
  1. Image processing and enhancement: improving visibility and color accuracy in low-light or high-dynamic-range conditions.
  2. Energy optimization and reliability: designing power-efficient or resilient architectures that perform under limited connectivity or intermittent power.
  3. Privacy and security: developing solutions that process video locally at the edge while protecting user data.
  4. Interoperability and scalability: enabling communication between multiple vision systems or integrating with IoT ecosystems for smarter automation.
  5. Cost-effective design: balancing intelligence, efficiency, and performance while ensuring the system remains affordable and quick to design and implement.

These are illustrative directions, not limitations, participants are free to propose creative, unconventional approaches that advance the future of computer vision and connected video solutions.

Our mentors will be available to engage with select teams during the hackathon, helping you refine your ideas and think like real-world product engineers. Remember, the best solutions balance creativity, practicality, and clarity of design.

We look forward to seeing your ideas, your passion, and your ingenuity come alive during Kodikon 5.0. Let’s build the next generation of vision together.

Warm regards,
Team Pixcellence Technologies
Title Sponsor, Kodikon 5.0`,
      },
    },
  },

  // --- TRACK 2: Assistive GenAI Tools ---
  {
    title: "Assistive GenAI Tools",
    subtitle: "Empowering Neurodivergent Minds",
    image: "/Kodikon5/themes-thumbnail/gen-ai.jpg",
    cardDescription:
      "Generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people across education, work, and daily life.",
    details: {
      problemStatement:
        "Generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people across education, work, and daily life.",
      about: [
        {
          heading: "Description",
          content:
            "Lightweight, user-controlled GenAI co-pilots that simplify information, scaffold planning, and support clear expression- without being diagnostic."
        },
        {
          heading: "Background",
          content:
            "Neurodivergent learners and employees often face barriers in executive function, comprehension, and social communication. These challenges create inequities in education, work, and daily living. Recent studies indicate that GenAI can meaningfully lower cognitive effort and increase inclusion, empowering individuals with tools for clearer communication, structured planning, and personalized support.",
        },
        {
          heading: "Application areas of the problem",
          content: [
            "Education (K-12 & Higher Ed): study planning, lecture/meeting notes,plain-language study materials.",
            "Workplace: focus aids, meeting/thread summaries, tone assistance for emails and presentations.",
            "Communication & Daily Living: social stories, AAC (augmentative and alternative communication) sentence expansion, multilingual communication practice.",
          ],
        },
        {
          heading: "Starter reference links",
          content: [
  {
    "text": "Mittler, S. (2025). Harnessing Generative AI to Overcome Executive Dysfunction in Higher Education: A Case Study. HEAd’25",
    "url": "https://doi.org/10.4995/head25.2025.20077"
  },
  {
    "text": "Cavallaro, A., & Sica, S. L. (2023). Artificial intelligence and autism spectrum disorders: a new perspective on learning.",
    "url": ""
  },
  {
    "text": "Mitra, S. (2024). AI-Powered Adaptive Education for Disabled Learners. SSRN.",
    "url": "https://doi.org/10.2139/ssrn.5042713"
  },
  {
    "text": "Warrier, N. (2025). A Review of Artificial Intelligence-Based Educational Interventions for Students with ADHD.",
    "url": ""
  },
  {
    "text": "Horvat, S., & Horvat, T. (2025). Artificial Intelligence, Neurodiversity, and Trust: An Exploratory Overview. Scientia et Fides, 13(1), 215–232.",
    "url": "https://doi.org/10.12775/setf.2025.011"
  },
  {
    "text": "Iyer, L. S. (2023). AI-assisted models for dyslexia and dysgraphia: Revolutionizing language learning for children.",
    "url": ""
  },
  {
    "text": "Oleribe, O. O. (2025). Leveraging and Harnessing Generative Artificial Intelligence to Mitigate the Burden of Neurodevelopmental Disorders in Children. Healthcare, 13(15).",
    "url": "https://doi.org/10.3390/healthcare13151898"
  },
  {
    "text": "van Gorp, R., & Ker, G. (2024). Artificial Intelligence in Tertiary Education: Learning Revolution or Room for Improvement? Scope: Contemporary Research Topics (Work-based Learning), 6, 31–37.",
    "url": "https://doi.org/10.34074/scop.6006005"
  },
  {
    "text": "Elkot, M. A., Youssif, E., Elmahdi, O. E. H., AbdAlgane, M., & Ali, R. (2025). Generative conversational AI: Active practices for fostering students with mild intellectual disabilities to improve English communication skills. Contemporary Educational Technology, 17(1), ep549.",
    "url": "https://doi.org/10.30935/cedtech/15688"
  },
  {
    "text": "Giri, D., & Brady, E. (2023). Exploring outlooks towards generative AI-based assistive technologies for people with Autism. arXiv.",
    "url": "https://doi.org/10.48550/arxiv.2305.09815"
  },
  {
    "text": "Guspian, I., Lin, C. C., Huang, A. Y. Q., & Yang, S. J. H. (2024). Transforming Outreach Effects: The Impact of Generative AI on Inclusive Education Branding and Sustainability. Journal of Education for Sustainable Innovation, 2(2), 170–179.",
    "url": "https://doi.org/10.56916/jesi.v2i2.995"
  },
  {
    "text": "Samuel, A. T., Sreekumar, V., & Nimmi, P. M. (2025). Technology aiding Neurodiverse Employees: A Bibliometric Analysis. Atlantis Highlights in Economics, Business and Management, 128–150.",
    "url": "https://doi.org/10.2991/978-94-6463-714-4_10"
  },
  {
    "text": "Barua, P. D., et al. (2022). Artificial Intelligence Enabled Personalised Assistive Tools to Enhance Education of Children with Neurodevelopmental Disorders—A Review. IJERPH, 19(3), 1192.",
    "url": "https://doi.org/10.3390/ijerph19031192"
  },
  {
    "text": "Kharbat, F. F., et al. (2021). Identifying gaps in using artificial intelligence to support students with intellectual disabilities from education and health perspectives. Aslib J. Inf. Manag., 73(1), 101–128.",
    "url": "https://doi.org/10.1108/ajim-02-2020-0054"
  },
  {
    "text": "Jukiewicz, M. (2025). How generative artificial intelligence transforms teaching and influences student wellbeing in future education. Frontiers in Education, 10.",
    "url": "https://doi.org/10.3389/feduc.2025.1594572"
  },
  {
    "text": "Zhao, X., et al. (2024). A Report on the Use and Attitudes Towards Generative AI Among Disabled Students at the University of Sheffield Information School.",
    "url": "https://doi.org/10.15131/shef.data.25669323"
  },
  {
    "text": "Naseem, M., Potluri, V., & Brewer, R. N. (2025). Rethinking Productivity with GenAI: A Neurodivergent Students’ Perspective.",
    "url": ""
  },
  {
    "text": "Hutson, P. (2024). Embracing the Irreplaceable: The Role of Neurodiversity in Cultivating Human-AI Symbiosis in Education. VISIONARIUM, 2(1).",
    "url": "https://doi.org/10.62608/2831-3550.1020"
  },
  {
    "text": "Leung, H. (2024). Artificial Intelligence as Agents to Support Neurodivergent Creative and Critical Thinking Modules.",
    "url": ""
  },
  {
    "text": "Bhushan, S., et al. (2024). AI-Enhanced Dyscalculia Screening: A Survey of Methods and Applications for Children. Diagnostics, 14(13), 1441.",
    "url": "https://doi.org/10.3390/diagnostics14131441"
  },
  {
    "text": "Zdravkova, K., et al. (2022). Cutting-edge communication and learning assistive technologies for disabled children: An artificial intelligence perspective. Frontiers in Artificial Intelligence, 5.",
    "url": "https://doi.org/10.3389/frai.2022.970430"
  }
],

        },
      ],
      note: {
        heading: "Note from the Mentors",
        content:
          "The above problem statement and references are not meant to be taken as-is or approached as a single, all-encompassing challenge. Instead, they serve as a starting point, a broad landscape of opportunities in an emerging and underexplored area where Generative AI can make a real difference. Participants are encouraged to conduct their own research, explore this domain further, and identify a focused, specific gap or challenge within this space that they are most passionate about solving. The goal is to translate this inspiration into innovative, impactful, and implementable(usable) solutions using GenAI."
      },
    },
  },

  // --- TRACK 3: Privacy-Preserving Distributed Systems ---
  {
    title: "Privacy-Preserving Distributed Systems",
    subtitle: "Federated Learning",
    image: "/Kodikon5/themes-thumbnail/distributed-systems.png",
    cardDescription:
      "Build distributed computing systems for collaborative machine learning on sensitive data without centralization, using federated learning.",
    details: {
      problemStatement:
        `Build distributed computing systems that enable collaborative machine learning on sensitive
data without centralizing or exposing private information, using federated learning to unlock
insights while preserving privacy.
`,
      about: [
        {
          heading: "Description",
          content:
            `Create federated learning frameworks that train AI models across decentralized data
sources- hospitals, financial institutions, personal devices- where sensitive information
stays local, and only model updates (not raw data) are shared to build powerful global
models.`,

        },
        {
          heading: "Background",
          content:
            `Sensitive data holds immense potential for breakthroughs in healthcare, finance, and
personalized services, yet privacy concerns, regulations (GDPR, HIPAA), and
competitive interests keep it siloed. Traditional centralized machine learning requires
pooling data, creating unacceptable risks of breaches, misuse, and trust erosion.
Federated learning offers a paradigm shift: the algorithm travels to the data, learns
locally, and shares only aggregated insights- enabling collaboration without compromise.
This approach has proven successful in Google's keyboard predictions, cross-hospital
disease research, and fraud detection systems.
`
        },
        {
          heading: "Application areas of the problem",
          content: [
            "Healthcare: collaborative disease prediction, drug discovery, and diagnostic models across hospitals without sharing patient records",
            "Finance: fraud detection and risk assessment across banks without exposing customer transactions or proprietary data",
            "Personal Devices: improving recommendations, voice recognition, and predictive text while keeping user data on-device",
            "Enterprise: Cross-organizational analytics and AI model training while maintaining competitive confidentiality and compliance.",
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
          `As part of this challenge, teams are encouraged to design their own evaluation metric that
can test how effectively their federated system learns and collaborates under distributed
conditions. This metric should capture both internal progress (e.g., convergence speed,
communication efficiency, exploration entropy) and external consistency- how well the
system’s performance scales across diverse datasets, architectures, or domains.
The goal is to create a domain-agnostic and fair evaluation framework where success is
measured not by the size or quality of the data, but by the learning dynamics, adaptability,
and efficiency of the system itself. Judges will look for metrics that reflect steady improvement,
efficient communication, and robust convergence behavior regardless of dataset size, structure,
or modality`
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
