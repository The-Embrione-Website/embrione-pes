import {
  Monitor,
  Calendar,
  Star,
  Rocket,
  Trophy,
} from "lucide-react";

// Provisional program. Dates are corroborated by the existing Kodikon 6 FAQ
// and hero. Day offsets are local event days, not UTC dates.
export const KODIKON_DATES = ["2026-10-31", "2026-11-01"];
export const SCHEDULE_STATUS = "Provisional schedule · Subject to change";

/**
 * 5-Stage High-Level Milestone Phases for Kodikon 6.0 Roadmap
 * Aligns with the 5-story Pagoda Tower architecture on desktop and mobile rail
 */
export const kodikon6Milestones = [
  {
    id: 1,
    tierIndex: 0,
    kanjiNum: "壱",
    kanjiSeal: "開",
    phaseTag: "PHASE 01 · 始動",
    phaseName: "Genesis · Inception",
    japaneseSubtitle: "エントリー開始 · 龍の目覚め",
    title: "Registrations Begin",
    date: "19th October 2026",
    description:
      "Registrations for Kodikon 6.0 officially open on 19th October 2026 on Hack2Skill. Assemble your squad of 4 members and submit your proposal across our four frontier tracks!",
    icon: Monitor,
    accentColor: "cyan",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: 2,
    tierIndex: 1,
    kanjiNum: "弐",
    kanjiSeal: "限",
    phaseTag: "PHASE 02 · 締切",
    phaseName: "The Gate · Submission Deadline",
    japaneseSubtitle: "登録及び企画書提出締切",
    title: "Registrations and Submissions Close",
    date: "23rd October 2026",
    description:
      "The registration and idea submission window officially closes on 23rd October 2026. Make sure to finalize your team members and submit your proposal before the deadline!",
    icon: Calendar,
    accentColor: "purple",
    glowColor: "rgba(168, 85, 247, 0.4)",
  },
  {
    id: 3,
    tierIndex: 2,
    kanjiNum: "参",
    kanjiSeal: "選",
    phaseTag: "PHASE 03 · 選抜",
    phaseName: "The Crucible · Top 35 Roster",
    japaneseSubtitle: "上位三十五隊発表 · 精鋭選抜",
    title: "Top 35 Announcement",
    date: "26th October 2026",
    description:
      "The top 35 shortlisted teams will be announced on 26th October 2026. These shortlisted teams will advance to compete in the in-person 24-hour sprint at PESU 52, PES University!",
    icon: Star,
    accentColor: "amber",
    glowColor: "rgba(245, 158, 11, 0.4)",
  },
  {
    id: 4,
    tierIndex: 3,
    kanjiNum: "四",
    kanjiSeal: "創",
    phaseTag: "PHASE 04 · 開幕",
    phaseName: "The Arena · 24-Hour Forge",
    japaneseSubtitle: "二十四時間本戦ハッカソン開幕",
    title: "Hackathon Begins (Day 1)",
    date: "31st October 2026",
    description:
      "The 24-hour offline hackathon kicks off at PESU 52! Reporting, inauguration ceremony, coding sprint commencement, and continuous mentor evaluations across Day 1.",
    icon: Rocket,
    accentColor: "cyan",
    glowColor: "rgba(34, 211, 238, 0.45)",
  },
  {
    id: 5,
    tierIndex: 4,
    kanjiNum: "伍",
    kanjiSeal: "栄",
    phaseTag: "PHASE 05 · 決戦",
    phaseName: "The Summit · Victory Presentations",
    japaneseSubtitle: "最終審査 · 栄光の表彰式",
    title: "Grand Finale & Closing (Day 2)",
    date: "1st November 2026",
    description:
      "Overnight coding sprint concludes with final code review, Top 10 finalist stage presentations to distinguished judges, and the grand closing & prize distribution ceremony!",
    icon: Trophy,
    accentColor: "gold",
    glowColor: "rgba(251, 191, 36, 0.5)",
  },
];

const slot = (id, title, dayOffset, start, end, endDayOffset = dayOffset) => ({
  id,
  title,
  kind: "interval",
  dayOffset,
  endDayOffset,
  startMinute: start,
  endMinute: end,
});

export const kodikon6TimelineEvents = [
  slot("registration-reporting", "Registration & Reporting", 0, 480, 540),
  slot("inauguration", "Inauguration Ceremony", 0, 540, 600),
  slot("transition", "Transition & Setup", 0, 600, 615),
  slot("coding-first", "Coding Session 1", 0, 615, 735),
  slot("lunch-day-one", "Lunch Break", 0, 735, 780),
  slot("review-first", "Code Review 1", 0, 780, 870),
  slot("coding-second", "Coding Session 2", 0, 870, 1020),
  slot("snacks", "Evening Snacks", 0, 1020, 1050),
  slot("game-one", "Game 1", 0, 1050, 1110),
  slot("coding-third", "Coding Session 3", 0, 1110, 1200),
  slot("dinner", "Dinner Break", 0, 1200, 1260),
  slot("review-second", "Code Review 2", 0, 1275, 1410),
  slot("give-snacks", "Midnight Snacks", 0, 1425, 15, 1),
  slot("game-two", "Game 2", 1, 15, 75),
  slot("coding-fifth", "Overnight Coding Session", 1, 90, 390),
  slot("breakfast", "Breakfast", 1, 480, 540),
  slot("review-final", "Final Code Review", 1, 540, 720),
  slot("presentations-first", "Top 10 Presentations (Part 1)", 1, 750, 810),
  slot("lunch-day-two", "Lunch Break", 1, 810, 870),
  slot("presentations-second", "Top 10 Presentations (Part 2)", 1, 870, 960),
  slot("closing", "Closing Ceremony & Awards", 1, 960, 1020),
  {
    id: "wrap-up",
    title: "Wrap-Up",
    kind: "deadline",
    dayOffset: 1,
    endDayOffset: 1,
    startMinute: null,
    endMinute: 1080,
  },
];

export function formatMinute(minute) {
  const hours = Math.floor(minute / 60);
  return `${hours % 12 || 12}:${String(minute % 60).padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
}

export function eventTimeLabel(event) {
  if (event.kind === "deadline") return `By ${formatMinute(event.endMinute)}`;
  return `${formatMinute(event.startMinute)}–${formatMinute(event.endMinute)}`;
}

export function eventDayLabel(event) {
  if (event.dayOffset !== event.endDayOffset) return "Day 1 → Day 2 · Oct 31–Nov 1";
  return event.dayOffset === 0 ? "Day 1 · Oct 31" : "Day 2 · Nov 1";
}

export function eventDateTime(dayOffset, minute) {
  return `${KODIKON_DATES[dayOffset]}T${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}:00+05:30`;
}

// A deadline has no start. Its deadline provides the chronological sort key.
export function eventSortMinute(event) {
  return event.dayOffset * 1440 + (event.startMinute ?? event.endMinute);
}
