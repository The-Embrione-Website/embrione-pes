export const prizePoolSummary = {
  totalPool: "₹1,00,000",
  poolLabel: "Total Cash Bounty Pool + Goodies",
  telemetry: "SYS_REWARDS // VERIFIED_ESCROW",
  highlight: "₹1 Lakh direct cash pool for the top 3 winners, plus exclusive developer goodies & swag kits for all top 10 finalists.",
};

export const mainPrizes = [
  {
    rank: 1,
    id: "first-place",
    title: "1st Place",
    subtitle: "Grand Champion",
    kanji: "優勝",
    amount: "₹50,000",
    badge: "GRAND CHAMPION",
    accentGradient: "from-amber-400 via-yellow-300 to-amber-500",
    glowGradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderClass: "border-amber-400/50 hover:border-amber-300",
    badgeClass: "bg-amber-400/15 text-amber-300 border-amber-400/50",
    haloClass: "shadow-[0_0_50px_rgba(245,158,11,0.25)]",
    stepHeight: "h-32 sm:h-40",
    stepLabel: "PODIUM_01 // APEX",
    description:
      "Awarded to the grand champions for technical excellence, architectural rigor, and working prototype execution.",
    perks: [
      "₹50,000 Direct Cash Prize",
      "Grand Champion Trophy & Official Citations",
      "Exclusive Top 10 Swag & Goodies Hamper",
      "Direct fast-track incubation & mentorship at PESU",
    ],
  },
  {
    rank: 2,
    id: "second-place",
    title: "2nd Place",
    subtitle: "First Runner-Up",
    kanji: "準優勝",
    amount: "₹30,000",
    badge: "FIRST RUNNER-UP",
    accentGradient: "from-cyan-400 via-sky-300 to-cyan-500",
    glowGradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    borderClass: "border-cyan-400/50 hover:border-cyan-300",
    badgeClass: "bg-cyan-400/15 text-cyan-300 border-cyan-400/50",
    haloClass: "shadow-[0_0_40px_rgba(6,182,212,0.2)]",
    stepHeight: "h-24 sm:h-28",
    stepLabel: "PODIUM_02 // RUNNER_UP",
    description:
      "Recognizing outstanding engineering execution, robust benchmarks, and high-impact problem solving.",
    perks: [
      "₹30,000 Direct Cash Prize",
      "First Runner-Up Trophy & Citations",
      "Exclusive Top 10 Swag & Goodies Hamper",
      "Incubation network & accelerator advisory",
    ],
  },
  {
    rank: 3,
    id: "third-place",
    title: "3rd Place",
    subtitle: "Second Runner-Up",
    kanji: "第三位",
    amount: "₹20,000",
    badge: "SECOND RUNNER-UP",
    accentGradient: "from-orange-400 via-amber-400 to-orange-500",
    glowGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    borderClass: "border-orange-500/50 hover:border-orange-400",
    badgeClass: "bg-orange-500/15 text-orange-300 border-orange-400/50",
    haloClass: "shadow-[0_0_40px_rgba(249,115,22,0.2)]",
    stepHeight: "h-16 sm:h-20",
    stepLabel: "PODIUM_03 // TIER_3",
    description:
      "Commendable algorithmic design, innovative feature set, and polished prototype demonstration.",
    perks: [
      "₹20,000 Direct Cash Prize",
      "Second Runner-Up Trophy & Citations",
      "Exclusive Top 10 Swag & Goodies Hamper",
      "Developer subscriptions & ecosystem perks",
    ],
  },
];

export const top10Goodies = {
  badge: "// ALL TOP 10 TEAMS // 「上位十組」",
  title: "Goodies & Swag Kit For Top 10 Teams",
  subtitle:
    "Every team ranking in the Top 10 (including 1st, 2nd, and 3rd place winners) is awarded exclusive Kodikon 6.0 merchandise, partner perks, and honors.",
  perks: [
    {
      title: "Exclusive Kodikon 6.0 Merchandise",
      desc: "Limited-edition Tokyo Cyberpunk hoodies/tees, stickers, and NFC badges.",
    },
    {
      title: "Curated Sponsor Goodies & Perks",
      desc: "Developer cloud credits, premium tooling subscriptions, and sponsor gifts.",
    },
    {
      title: "Official Merit Citations",
      desc: "Recognized certificates endorsed by The Embrione & Dept. of CSE, PES University.",
    },
    {
      title: "Fast-Track Mentorship & Incubation",
      desc: "Direct access to PESU innovation mentors, faculty testbeds, and peer network.",
    },
  ],
};
