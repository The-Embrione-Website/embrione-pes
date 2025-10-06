"use client";
import React, { useEffect, useState, useRef } from "react";
import { HackathonThemesCard, Article } from "./HackathonThemesCard";
import { HackathonThemePopup } from "./HackathonThemePopup";
import TitleComponent from "../HelperComponents/TitleComponent";
import { motion, useAnimation, useInView } from "framer-motion";

// Data with the correct structure
const themes = [
  {
    title: "GenAI",
    image: "/Kodikon5/themes-thumbnail/ai.jpg",
    cardDescription:
      "Lightweight, user-controlled GenAI co-pilots that simplify information, scaffold planning, and support clear expression.",
    details: {
      problemStatement:
        "Generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people across education, work, and daily life.",
      detailedDescription:
        "Lightweight, user-controlled GenAI co-pilots that simplify information, scaffold planning, and support clear expression- without being diagnostic.",
      background:
        "Neurodivergent learners and employees often face barriers in executive function, comprehension, and social communication. These challenges create inequities in education, work, and daily living. Recent studies indicate that GenAI can meaningfully lower cognitive effort and increase inclusion, empowering individuals with tools for clearer communication, structured planning, and personalized support.",
      applicationAreas: [
        "Education (K-12 & Higher Ed): study planning, lecture/meeting notes, plain-language study materials.",
        "Workplace: focus aids, meeting/thread summaries, tone assistance for emails and presentations.",
        "Communication & Daily Living: social stories, AAC (augmentative and alternative communication) sentence expansion, multilingual communication practice.",
      ],
      references: [
        { text: "Mittler, S. (2025). Harnessing Generative AI to Overcome Executive Dysfunction in Higher Education: A Case Study. HEAd’25. DOI:10.4995/head25.2025.20077", url: "https://doi.org/10.4995/head25.2025.20077" },
        { text: "Cavallaro, A., & Sica, S. L. (2023). Artificial intelligence and autism spectrum disorders: a new perspective on learning.", url: null },
        { text: "Mitra, S. (2024). AI-Powered Adaptive Education for Disabled Learners. SSRN. DOI:10.2139/ssrn.5042713", url: "https://doi.org/10.2139/ssrn.5042713" },
        { text: "Warrier, N. (2025). A Review of Artificial Intelligence-Based Educational Interventions for Students with ADHD.", url: null },
        { text: "Horvat, S., & Horvat, T. (2025). Artificial Intelligence, Neurodiversity, and Trust: An Exploratory Overview. Scientia et Fides, 13(1), 215–232. DOI:10.12775/setf.2025.011", url: "https://doi.org/10.12775/setf.2025.011" },
        { text: "Iyer, L. S. (2023). AI-assisted models for dyslexia and dysgraphia: Revolutionizing language learning for children.", url: null },
        { text: "Oleribe, O. O. (2025). Leveraging and Harnessing Generative Artificial Intelligence to Mitigate the Burden of Neurodevelopmental Disorders in Children. Healthcare, 13(15). DOI:10.3390/healthcare13151898", url: "https://doi.org/10.3390/healthcare13151898" },
        { text: "van Gorp, R., & Ker, G. (2024). Artificial Intelligence in Tertiary Education: Learning Revolution or Room for Improvement? Scope: Contemporary Research Topics (Work-based Learning), 6, 31–37. DOI:10.34074/scop.6006005", url: "https://doi.org/10.34074/scop.6006005" },
        { text: "Elkot, M. A., Youssif, E., Elmahdi, O. E. H., AbdAlgane, M., & Ali, R. (2025). Generative conversational AI: Active practices for fostering students with mild intellectual disabilities to improve English communication skills. Contemporary Educational Technology, 17(1), ep549. DOI:10.30935/cedtech/15688", url: "https://doi.org/10.30935/cedtech/15688" },
        { text: "Giri, D., & Brady, E. (2023). Exploring outlooks towards generative AI-based assistive technologies for people with Autism. arXiv. DOI:10.48550/arxiv.2305.09815", url: "https://doi.org/10.48550/arxiv.2305.09815" },
        { text: "Guspian, I., Lin, C. C., Huang, A. Y. Q., & Yang, S. J. H. (2024). Transforming Outreach Effects: The Impact of Generative AI on Inclusive Education Branding and Sustainability. Journal of Education for Sustainable Innovation, 2(2), 170–179. DOI:10.56916/jesi.v2i2.995", url: "https://doi.org/10.56916/jesi.v2i2.995" },
        { text: "Samuel, A. T., Sreekumar, V., & Nimmi, P. M. (2025). Technology aiding Neurodiverse Employees: A Bibliometric Analysis. Atlantis Highlights in Economics, Business and Management, 128–150. DOI:10.2991/978-94-6463-714-4_10", url: "https://doi.org/10.2991/978-94-6463-714-4_10" },
        { text: "Barua, P. D., et al. (2022). Artificial Intelligence Enabled Personalised Assistive Tools to Enhance Education of Children with Neurodevelopmental Disorders—A Review. IJERPH, 19(3), 1192. DOI:10.3390/ijerph19031192", url: "https://doi.org/10.3390/ijerph19031192" },
        { text: "Kharbat, F. F., et al. (2021). Identifying gaps in using artificial intelligence to support students with intellectual disabilities from education and health perspectives. Aslib J. Inf. Manag., 73(1), 101–128. DOI:10.1108/ajim-02-2020-0054", url: "https://doi.org/10.1108/ajim-02-2020-0054" },
        { text: "Jukiewicz, M. (2025). How generative artificial intelligence transforms teaching and influences student wellbeing in future education. Frontiers in Education, 10. DOI:10.3389/feduc.2025.1594572", url: "https://doi.org/10.3389/feduc.2025.1594572" },
        { text: "Zhao, X., et al. (2024). A Report on the Use and Attitudes Towards Generative AI Among Disabled Students at the University of Sheffield Information School. DOI:10.15131/shef.data.25669323", url: "https://doi.org/10.15131/shef.data.25669323" },
        { text: "Naseem, M., Potluri, V., & Brewer, R. N. (2025). Rethinking Productivity with GenAI: A Neurodivergent Students’ Perspective.", url: null },
        { text: "Hutson, P. (2024). Embracing the Irreplaceable: The Role of Neurodiversity in Cultivating Human-AI Symbiosis in Education. VISIONARIUM, 2(1). DOI:10.62608/2831-3550.1020", url: "https://doi.org/10.62608/2831-3550.1020" },
        { text: "Leung, H. (2024). Artificial Intelligence as Agents to Support Neurodivergent Creative and Critical Thinking Modules.", url: null },
        { text: "Bhushan, S., et al. (2024). AI-Enhanced Dyscalculia Screening: A Survey of Methods and Applications for Children. Diagnostics, 14(13), 1441. DOI:10.3390/diagnostics14131441", url: "https://doi.org/10.3390/diagnostics14131441" },
        { text: "Zdravkova, K., et al. (2022). Cutting-edge communication and learning assistive technologies for disabled children: An artificial intelligence perspective. Frontiers in Artificial Intelligence, 5. DOI:10.3389/frai.2022.970430", url: "https://doi.org/10.3389/frai.2022.970430" },
      ],
      mentorNotes: {
        // expectations: {
        //   note: "Note: This is for the organizing team and mentors’ reference only to understand what different parts of the pipeline the teams can possibly deliver at the end of the 24 hours hackathon",
        // },
        research: {
          note: "Note: This will be the headers in the slide deck that the participating teams submit (for the selection of the top 40 teams that will participate on the actual days of the hackathon)",
          points: [
            "Interpretation of the Problem: Their own articulation of what the problem means, and the key challenges they identify.",
            "Background Research: Awareness of related work, state-of-the-art techniques, or gaps in existing approaches.",
            "Articulation of Approach: A structured outline of their proposed solution — methods, data sources, tech stack, or novel angle.",
            "Feasibility & Innovation: Why their approach is realistic for 24 hours, and what makes it unique/impactful.",
          ],
        },
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
      thumbnail: themeData.image,
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
      <div className="flex flex-col w-full h-fit gap-8 py-8">
        <TitleComponent titleData="Hackathon Themes" id="theme" />

        <motion.div
          ref={themeGrid}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
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
                  // --- THIS LINE IS NOW CORRECTED ---
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