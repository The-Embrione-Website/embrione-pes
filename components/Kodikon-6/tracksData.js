import { Camera, BrainCircuit, Network } from "lucide-react";

// Full track content carried forward from the Kodikon 5.0 HackathonThemes source.
// Keep this content separate from the visual component for easier maintenance.
export const tracksData = [
  {
    code: "TRACK-01",
    number: "01",
    title: "Computer Vision & Edge IoT",
    subtitle: "Redefining Smart Surveillance",
    icon: Camera,
    image: "/Kodikon6/Tracks/track-01-edge-vision-square.jpg",
    imageAlt: "Computer vision cameras and connected vision technology in a futuristic city",
    desc: "Design the next wave of intelligent video surveillance: smart, connected vision devices that adapt to their environment, conserve energy, safeguard privacy, and stay reliable under demanding conditions.",
    accent: "cyan",
    problemStatement: "Design the next wave of intelligent video surveillance - smart, connected vision devices that adapt to their environment, conserve energy, safeguard privacy, and stay reliable under any condition.",
    aboutSections: [
      {
        heading: "Description",
        content: "Participants are challenged to design innovative approaches for edge-based video surveillance systems and solutions that redefine how smart cameras and connected vision devices operate in the real world - particularly across diverse and demanding operating conditions such as low-light, high-motion, or variable network environments. Solutions should strike a balance between intelligence, sustainability, reliability, accessibility, and scalability, reflecting the needs of a market where designs must be cost-effective, robust, reusable, and quick to design and implement. Teams are encouraged to explore how next-generation video systems can be made more adaptive, secure, efficient, and trustworthy, through advancements in image processing, system architecture, and edge intelligence — while rethinking the trade-offs between performance, affordability, and speed of innovation."
      },
      {
        heading: "Background",
        content: "With millions of video cameras being deployed worldwide, the next phase of innovation lies in creating intelligent, affordable, and reliable surveillance solutions that work seamlessly under real-world constraints across diverse environments.\n\nCurrent systems still face critical challenges such as:\n• High energy consumption in battery-powered cameras.\n• Connectivity dropouts leading to missed critical events.\n• Privacy concerns in continuously streaming sensitive video.\n• Lack of interoperability with other IoT devices in smart homes and smart cities.\n• Poor low-light performance and limited image quality, highlighting the growing importance of advanced image processing, HDR optimization, and color night vision technologies.\n\nThese challenges are amplified in regions with variable infrastructure conditions, where factors like intermittent power, limited bandwidth, and network downtimes demand solutions that are resilient, locally adaptive, and capable of operating autonomously at the edge.\n\nModern smart cameras must therefore evolve beyond AI analytics — balancing power efficiency, privacy, image quality, interoperability, and design agility to deliver truly robust and trustworthy video systems. This challenge seeks to bridge the gap between academic research and deployable, industry-grade video surveillance products that are globally scalable yet optimized for diverse market realities."
      },
      {
        heading: "Application areas of the problem",
        items: [
          "Smart home and residential security (video doorbells, baby monitors, eldercare cameras).",
          "Smart city infrastructure (traffic monitoring, public safety, urban mobility).",
          "Community surveillance and neighborhood safety systems.",
          "Industrial safety and workplace monitoring.",
          "Environmental and infrastructure monitoring applications."
        ]
      }
    ],
    mentorNoteHeading: "Guidance for Participants",
    mentorNote: "Focus on practical computer vision solutions that remain reliable in real-world conditions. Consider image quality, low-light performance, energy use, privacy, connectivity, and the limits of edge hardware. Explain your design choices clearly and demonstrate how your solution balances accuracy, efficiency, security, and cost."
  },
  {
    code: "TRACK-02",
    number: "02",
    title: "Assistive GenAI Tools",
    subtitle: "Empowering Neurodivergent Minds",
    icon: BrainCircuit,
    image: "/Kodikon6/Tracks/track-02-assistive-genai-square.jpg",
    imageAlt: "Assistive technology interfaces designed for accessibility",
    desc: "Use generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people across education, work, and daily life.",
    accent: "cyan",
    problemStatement: "Generative AI to reduce cognitive load and improve communication, learning, and participation for neurodivergent people across education, work, and daily life.",
    aboutSections: [
      {
        heading: "Description",
        content: "Lightweight, user-controlled GenAI co-pilots that simplify information, scaffold planning, and support clear expression — without being diagnostic."
      },
      {
        heading: "Background",
        content: "Neurodivergent learners and employees often face barriers in executive function, comprehension, and social communication. These challenges create inequities in education, work, and daily living. Recent studies indicate that GenAI can meaningfully lower cognitive effort and increase inclusion, empowering individuals with tools for clearer communication, structured planning, and personalized support."
      },
      {
        heading: "Application areas of the problem",
        items: [
          "Education (K-12 & Higher Ed): study planning, lecture/meeting notes, plain-language study materials.",
          "Workplace: focus aids, meeting/thread summaries, tone assistance for emails and presentations.",
          "Communication & Daily Living: social stories, AAC (augmentative and alternative communication) sentence expansion, multilingual communication practice."
        ]
      },
      {
        heading: "Starter reference links",
        links: [
          { text: "Mittler, S. (2025). Harnessing Generative AI to Overcome Executive Dysfunction in Higher Education: A Case Study. HEAd’25", url: "https://doi.org/10.4995/head25.2025.20077" },
          { text: "Cavallaro, A., & Sica, S. L. (2023). Artificial intelligence and autism spectrum disorders: a new perspective on learning.", url: "" },
          { text: "Mitra, S. (2024). AI-Powered Adaptive Education for Disabled Learners. SSRN.", url: "https://doi.org/10.2139/ssrn.5042713" },
          { text: "Warrier, N. (2025). A Review of Artificial Intelligence-Based Educational Interventions for Students with ADHD.", url: "" },
          { text: "Horvat, S., & Horvat, T. (2025). Artificial Intelligence, Neurodiversity, and Trust: An Exploratory Overview. Scientia et Fides, 13(1), 215–232.", url: "https://doi.org/10.12775/setf.2025.011" },
          { text: "Iyer, L. S. (2023). AI-assisted models for dyslexia and dysgraphia: Revolutionizing language learning for children.", url: "" },
          { text: "Oleribe, O. O. (2025). Leveraging and Harnessing Generative Artificial Intelligence to Mitigate the Burden of Neurodevelopmental Disorders in Children. Healthcare, 13(15).", url: "https://doi.org/10.3390/healthcare13151898" },
          { text: "van Gorp, R., & Ker, G. (2024). Artificial Intelligence in Tertiary Education: Learning Revolution or Room for Improvement? Scope: Contemporary Research Topics (Work-based Learning), 6, 31–37.", url: "https://doi.org/10.34074/scop.6006005" },
          { text: "Elkot, M. A., Youssif, E., Elmahdi, O. E. H., AbdAlgane, M., & Ali, R. (2025). Generative conversational AI: Active practices for fostering students with mild intellectual disabilities to improve English communication skills. Contemporary Educational Technology, 17(1), ep549.", url: "https://doi.org/10.30935/cedtech/15688" },
          { text: "Giri, D., & Brady, E. (2023). Exploring outlooks towards generative AI-based assistive technologies for people with Autism. arXiv.", url: "https://doi.org/10.48550/arxiv.2305.09815" },
          { text: "Guspian, I., Lin, C. C., Huang, A. Y. Q., & Yang, S. J. H. (2024). Transforming Outreach Effects: The Impact of Generative AI on Inclusive Education Branding and Sustainability. Journal of Education for Sustainable Innovation, 2(2), 170–179.", url: "https://doi.org/10.56916/jesi.v2i2.995" },
          { text: "Samuel, A. T., Sreekumar, V., & Nimmi, P. (2025). Technology aiding Neurodiverse Employees: A Bibliometric Analysis. Atlantis Highlights in Economics, Business and Management, 128–150.", url: "https://doi.org/10.2991/978-94-6463-714-4_10" },
          { text: "Barua, P. D., et al. (2022). Artificial Intelligence Enabled Personalised Assistive Tools to Enhance Education of Children with Neurodevelopmental Disorders—A Review. IJERPH, 19(3), 1192.", url: "https://doi.org/10.3390/ijerph19031192" },
          { text: "Kharbat, F. F., et al. (2021). Identifying gaps in using artificial intelligence to support students with intellectual disabilities from education and health perspectives. Aslib J. Inf. Manag., 73(1), 101–128.", url: "https://doi.org/10.1108/ajim-02-2020-0054" },
          { text: "Jukiewicz, M. (2025). How generative artificial intelligence transforms teaching and influences student wellbeing in future education. Frontiers in Education, 10.", url: "https://doi.org/10.3389/feduc.2025.1594572" },
          { text: "Zhao, X., et al. (2024). A Report on the Use and Attitudes Towards Generative AI Among Disabled Students at the University of Sheffield Information School.", url: "https://doi.org/10.15131/shef.data.25669323" },
          { text: "Naseem, M., Potluri, V., & Brewer, R. N. (2025). Rethinking Productivity with GenAI: A Neurodivergent Students’ Perspective.", url: "" },
          { text: "Hutson, P. (2024). Embracing the Irreplaceable: The Role of Neurodiversity in Cultivating Human-AI Symbiosis in Education. VISIONARIUM, 2(1).", url: "https://doi.org/10.62608/2831-3550.1020" },
          { text: "Leung, H. (2024). Artificial Intelligence as Agents to Support Neurodivergent Creative and Critical Thinking Modules.", url: "" },
          { text: "Bhushan, S., et al. (2024). AI-Enhanced Dyscalculia Screening: A Survey of Methods and Applications for Children. Diagnostics, 14(13), 1441.", url: "https://doi.org/10.3390/diagnostics14131441" },
          { text: "Zdravkova, K., et al. (2022). Cutting-edge communication and learning assistive technologies for disabled children: An artificial intelligence perspective. Frontiers in Artificial Intelligence, 5.", url: "https://doi.org/10.3389/frai.2022.970430" }
        ]
      }
    ],
    mentorNoteHeading: "Note from the Mentors",
    mentorNote: "The above problem statement and references are not meant to be taken as-is or approached as a single, all-encompassing challenge. Instead, they serve as a starting point, a broad landscape of opportunities in an emerging and underexplored area where Generative AI can make a real difference. Participants are encouraged to conduct their own research, explore this domain further, and identify a focused, specific gap or challenge within this space that they are most passionate about solving. The goal is to translate this inspiration into innovative, impactful, and implementable (usable) solutions using GenAI."
  },
  {
    code: "TRACK-03",
    number: "03",
    title: "Privacy-Preserving Distributed Systems",
    subtitle: "Federated Learning",
    icon: Network,
    image: "/Kodikon6/Tracks/track-03-distributed-systems-square.jpg",
    imageAlt: "Connected distributed systems and privacy-aware infrastructure",
    desc: "Build distributed computing systems for collaborative machine learning on sensitive data without centralization, using federated learning.",
    accent: "cyan",
    problemStatement: "Build distributed computing systems that enable collaborative machine learning on sensitive data without centralizing or exposing private information, using federated learning to unlock insights while preserving privacy.",
    aboutSections: [
      {
        heading: "Description",
        content: "Create federated learning frameworks that train AI models across decentralized data sources — hospitals, financial institutions, and personal devices — where sensitive information stays local, and only model updates (not raw data) are shared to build powerful global models."
      },
      {
        heading: "Background",
        content: "Sensitive data holds immense potential for breakthroughs in healthcare, finance, and personalized services, yet privacy concerns, regulations (GDPR, HIPAA), and competitive interests keep it siloed. Traditional centralized machine learning requires pooling data, creating unacceptable risks of breaches, misuse, and trust erosion. Federated learning offers a paradigm shift: the algorithm travels to the data, learns locally, and shares only aggregated insights — enabling collaboration without compromise. This approach has proven successful in Google's keyboard predictions, cross-hospital disease research, and fraud detection systems."
      },
      {
        heading: "Application areas of the problem",
        items: [
          "Healthcare: collaborative disease prediction, drug discovery, and diagnostic models across hospitals without sharing patient records.",
          "Finance: fraud detection and risk assessment across banks without exposing customer transactions or proprietary data.",
          "Personal Devices: improving recommendations, voice recognition, and predictive text while keeping user data on-device.",
          "Enterprise: cross-organizational analytics and AI model training while maintaining competitive confidentiality and compliance."
        ]
      },
      {
        heading: "Starter reference links",
        links: [
          { text: "What is Federated Learning (IBM Research)", url: "https://research.ibm.com/blog/what-is-federated-learning" },
          { text: "Federated Learning Explained (Viso.ai)", url: "https://viso.ai/deep-learning/federated-learning/" },
          { text: "IEEE: Analysis of Federated Learning on Edge Devices", url: "https://ieeexplore.ieee.org/document/9264060" }
        ]
      }
    ],
    mentorNoteHeading: "Note from the Mentors",
    mentorNote: "As part of this challenge, teams are encouraged to design their own evaluation metric that can test how effectively their federated system learns and collaborates under distributed conditions. This metric should capture both internal progress (e.g., convergence speed, communication efficiency, exploration entropy) and external consistency — how well the system’s performance scales across diverse datasets, architectures, or domains. The goal is to create a domain-agnostic and fair evaluation framework where success is measured not by the size or quality of the data, but by the learning dynamics, adaptability, and efficiency of the system itself. Judges will look for metrics that reflect steady improvement, efficient communication, and robust convergence behavior regardless of dataset size, structure, or modality."
  }
];
