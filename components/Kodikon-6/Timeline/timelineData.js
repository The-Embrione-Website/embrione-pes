// Provisional program. Dates are corroborated by the existing Kodikon 6 FAQ
// and hero. Day offsets are local event days, not UTC dates.
export const KODIKON_DATES = ["2026-10-31", "2026-11-01"];
export const SCHEDULE_STATUS = "Provisional schedule · Subject to change";

const slot = (id, title, dayOffset, start, end, endDayOffset = dayOffset) => ({
  id, title, kind: "interval", dayOffset, endDayOffset,
  startMinute: start, endMinute: end,
});

export const kodikon6TimelineEvents = [
  slot("registration-reporting", "Registration and Reporting", 0, 480, 540),
  slot("inauguration", "Inauguration Ceremony", 0, 540, 600),
  slot("transition", "Transition Time", 0, 600, 615),
  slot("coding-first", "First Coding Session", 0, 615, 735),
  slot("lunch-day-one", "Lunch", 0, 735, 780),
  slot("review-first", "First Code Review", 0, 780, 870),
  slot("coding-second", "Second Coding Session", 0, 870, 1020),
  slot("snacks", "Snacks", 0, 1020, 1050),
  slot("game-one", "Game 1", 0, 1050, 1110),
  slot("coding-third", "Third Coding Session", 0, 1110, 1200),
  slot("dinner", "Dinner", 0, 1200, 1260),
  slot("review-second", "Second Code Review", 0, 1275, 1410),
  slot("give-snacks", "Give Snacks", 0, 1425, 15, 1),
  slot("game-two", "Game 2", 1, 15, 75),
  slot("coding-fifth", "Fifth Coding Session", 1, 90, 390),
  slot("breakfast", "Breakfast", 1, 480, 540),
  slot("review-final", "Final Code Review", 1, 540, 720),
  slot("presentations-first", "Top 10 Presentations (First Block)", 1, 750, 810),
  slot("lunch-day-two", "Lunch", 1, 810, 870),
  slot("presentations-second", "Top 10 Presentations (Second Block)", 1, 870, 960),
  slot("closing", "Closing Ceremony", 1, 960, 1020),
  {
    id: "wrap-up", title: "Wrap-Up (by 6:00 PM)", kind: "deadline",
    dayOffset: 1, endDayOffset: 1, startMinute: null, endMinute: 1080,
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
