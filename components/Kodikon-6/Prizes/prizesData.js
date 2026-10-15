export const prizePoolSummary = {
  totalPool: "₹4,50,000+",
  poolLabel: "Total Prize Pool & Ecosystem Grants",
  telemetry: "SYS_REWARDS // VERIFIED_POOL",
  highlight: "Cash rewards, cloud compute credits, hardware vouchers, and fast-track incubation for top undergraduate innovators.",
};

export const mainPrizes = [
  {
    rank: 1,
    id: "first-place",
    title: "1st Place",
    subtitle: "Grand Champion",
    amount: "₹1,00,000",
    badge: "CHAMPION",
    image: "/Kodikon5/prizes/first.webp",
    accentGradient: "from-amber-400 via-yellow-300 to-amber-500",
    glowGradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderClass: "border-amber-400/40 hover:border-amber-400/80 group-hover:border-amber-400/70",
    badgeClass: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    haloClass: "shadow-[0_0_40px_rgba(251,191,36,0.18)]",
    description:
      "Highest cumulative score across technical implementation, architectural rigor, and problem viability.",
    perks: [
      "Direct fast-track incubation support at PESU",
      "Grand Champion Trophy & Official Citations",
      "Premium Cloud Compute & API Credits",
      "Kodikon 6.0 VIP Champion Swag Kit",
    ],
  },
  {
    rank: 2,
    id: "second-place",
    title: "2nd Place",
    subtitle: "First Runner-Up",
    amount: "₹60,000",
    badge: "RUNNER UP",
    image: "/Kodikon5/prizes/second.webp",
    accentGradient: "from-cyan-400 via-sky-300 to-cyan-500",
    glowGradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    borderClass: "border-cyan-400/40 hover:border-cyan-400/80 group-hover:border-cyan-400/70",
    badgeClass: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    haloClass: "shadow-[0_0_35px_rgba(34,211,238,0.15)]",
    description:
      "Outstanding engineering execution, rapid working prototype delivery, and robust benchmarks.",
    perks: [
      "Incubation network & accelerator advisory",
      "First Runner-Up Trophy & Certificates",
      "Pro Developer Tool Licenses & Cloud Perks",
      "Kodikon 6.0 Runner-Up Swag Kit",
    ],
  },
  {
    rank: 3,
    id: "third-place",
    title: "3rd Place",
    subtitle: "Second Runner-Up",
    amount: "₹40,000",
    badge: "SECOND RUNNER UP",
    image: "/Kodikon5/prizes/third.webp",
    accentGradient: "from-orange-400 via-amber-400 to-orange-500",
    glowGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    borderClass: "border-orange-400/40 hover:border-orange-400/80 group-hover:border-orange-400/70",
    badgeClass: "bg-orange-400/10 text-orange-300 border-orange-400/30",
    haloClass: "shadow-[0_0_30px_rgba(251,146,60,0.15)]",
    description:
      "Commendable algorithmic design, innovative feature set, and polished prototype demonstration.",
    perks: [
      "Ecosystem mentorship & technical reviews",
      "Second Runner-Up Trophy & Certificates",
      "Developer subscriptions & API credits",
      "Kodikon 6.0 Podium Swag Kit",
    ],
  },
];

export const categoryPrizes = [
  {
    id: "track-awards",
    title: "Track Category Excellence",
    subtitle: "Best Innovation Across 4 Flagship Tracks",
    amount: "₹60,000",
    breakdown: "₹15,000 × 4 Research Tracks",
    badge: "4 TRACK WINNERS",
    borderClass: "border-cyan-500/30 hover:border-cyan-400/60",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    iconName: "Layers",
    description:
      "Awarded to the top-scoring team in each of our curriculum-aligned research tracks developed with PES faculty mentors.",
    items: [
      { name: "Autonomous Edge Systems & Vision", code: "TRACK-01" },
      { name: "Distributed Infrastructure & High-Throughput Systems", code: "TRACK-02" },
      { name: "Developer Tooling, Compilers & Static Analysis", code: "TRACK-03" },
      { name: "Computational Biology & Healthcare Intelligence", code: "TRACK-04" },
    ],
    perks: [
      "Track Champion Citations & Special Mementos",
      "Dedicated Technical Domain Faculty Advisory",
      "Track-specific sponsor API credits & bounties",
    ],
  },
  {
    id: "all-girls",
    title: "All-Girls Team Excellence",
    subtitle: "Women in Technology Leadership Award",
    amount: "₹25,000",
    breakdown: "Dedicated Diversity & Leadership Grant",
    badge: "WOMEN IN TECH",
    borderClass: "border-fuchsia-500/30 hover:border-fuchsia-400/60",
    badgeClass: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
    iconName: "Sparkles",
    description:
      "Special commendation and financial grant celebrating high-impact technical contributions and leadership by female-led engineering teams.",
    items: [
      { name: "100% Female-Led / All-Women Engineering Team", code: "CRITERIA" },
      { name: "Evaluated on Technical Complexity & Novelty", code: "BENCHMARK" },
    ],
    perks: [
      "Direct Cash Grant & Special Commendation",
      "Executive mentorship with female tech leaders",
      "Exclusive curated tech hampers & licenses",
    ],
  },
];

export const finalistPerks = [
  {
    title: "₹10,00,000+ Pooled Credits",
    detail: "Compute credits from Wolfram, AWS, and Cloudflare for every qualifying finalist team.",
  },
  {
    title: "Developer Tooling Licenses",
    detail: "1Password Secrets Automation, Axure RP Pro licenses, and API access keys.",
  },
  {
    title: "Hardware Lab & Testbed Access",
    detail: "24-hour physical testbeds, microcontrollers, and edge sensor kits at PESU 52.",
  },
  {
    title: "Cyberpunk Merch & Survival Kit",
    detail: "Custom Kodikon 6.0 hoodies, NFC badges, physical sticker sheets, and meals.",
  },
];
