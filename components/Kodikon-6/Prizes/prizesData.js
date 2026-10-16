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
    accentGradient: "from-cyan-300 via-sky-200 to-blue-400",
    glowGradient: "from-cyan-500/25 via-sky-500/15 to-transparent",
    borderClass: "border-cyan-400/60 hover:border-cyan-300",
    badgeClass: "bg-cyan-950/80 text-cyan-300 border-cyan-400/60",
    haloClass: "shadow-[0_0_50px_rgba(6,182,212,0.3)]",
    stepHeight: "h-28 sm:h-36",
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
    accentGradient: "from-sky-300 via-cyan-200 to-blue-400",
    glowGradient: "from-sky-500/20 via-cyan-500/10 to-transparent",
    borderClass: "border-cyan-500/40 hover:border-cyan-300",
    badgeClass: "bg-cyan-950/60 text-sky-300 border-cyan-500/40",
    haloClass: "shadow-[0_0_35px_rgba(6,182,212,0.2)]",
    stepHeight: "h-20 sm:h-28",
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
    accentGradient: "from-cyan-400 via-slate-200 to-sky-300",
    glowGradient: "from-cyan-500/15 via-blue-500/10 to-transparent",
    borderClass: "border-cyan-500/30 hover:border-cyan-400",
    badgeClass: "bg-cyan-950/40 text-cyan-200 border-cyan-500/30",
    haloClass: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    stepHeight: "h-14 sm:h-20",
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
