# Kodikon 6.0 — Codex Working Instructions

## Ownership and collaboration
- Work in the existing Next.js/React JavaScript/JSX + Tailwind conventions; inspect real project files before editing.
- For any substantial timeline/dragon implementation, first produce a concrete plan and **wait for explicit user approval** before editing.
- Do not install dependencies or change build configuration without asking.
- Respect existing uncommitted changes; do not overwrite unrelated work.
- The user owns **all** staging, Git commits, branches, and GitHub pushes.

## Absolute Git safety rule
- **Never run `git add`, `git commit`, `git push`, `git stash`, `git switch`, `git checkout`, `git reset`, `git clean`, `git rebase`, branch deletion/creation, or remote modification.** Never amend, force-push, or otherwise manipulate Git history/staging.
- Allowed Git commands are read-only inspections: `git status`, `git diff`, `git log`, and similarly non-mutating queries.
- After implementation, report the changed files and read-only diff/status only. Leave all commit/push work to the user, even if the user has not yet done it.

## Task scope and actual files to inspect
- Scope this work to the Kodikon 6.0 event timeline, its Japanese pagoda, and the dragon animation, including directly necessary shared data/logic/styling.
- From the supplied archive, relevant files are:
  - `app/kodikon-6/page.js` (page composition; preserve unrelated sections).
  - `components/Kodikon-6/Timeline/EventTimeline.jsx` (wrapper).
  - `components/Kodikon-6/Timeline/EventTimelineComponent.jsx` (current five-stage roadmap, hardcoded layout, scroll logic, and separate day schedule).
  - `components/Kodikon-6/Timeline/SingleJapaneseTower.jsx` (existing hand-detailed cyan pagoda SVG).
  - `components/Kodikon-6/Timeline/timelineData.js` (five milestone entries plus a separate, outdated schedule).
- Verify files against the actual checked-out repository. Preserve other Kodikon editions, site header/footer, tracks, prize/partner pages and navigation.
- The prior instruction to preserve the old separate schedule is **superseded**: the new 22-entry provisional schedule must replace the old five roadmap cards, and any remaining schedule UI must use the same canonical event data and times. Do not leave contradictory duplicates.
- Do not edit this `AGENTS.md` unless the user explicitly approves.

## Canonical schedule rules
- Implement all **22** entries supplied in the task prompt, in the exact order given, as the primary tower timeline; make events data-driven, not hardcoded in JSX.
- Day 1: registration/reporting 8–9 AM; inauguration 9–10; transition 10–10:15; first coding 10:15–12:15 PM; lunch 12:15–1; first review 1–2:30; second coding 2:30–5; snacks 5–5:30; Game 1 5:30–6:30; third coding 6:30–8; dinner 8–9; second review 9:15–11:30 PM.
- Crossing midnight: "Give Snacks" 11:45 PM–12:15 AM (spans Day 1 to Day 2).
- Day 2: Game 2 12:15–1:15 AM; **Fifth** Coding Session 1:30–6:30 AM; breakfast 8–9; final review 9 AM–12 PM; Top 10 presentations block 1 12:30–1:30; lunch 1:30–2:30; Top 10 presentations block 2 2:30–4; closing ceremony 4–5 PM; wrap-up **by 6 PM**, with no specified start.
- Do not silently rename "Fifth" to "Fourth", invent a missing coding session, merge the two Top 10 blocks, invent a start time for wrap-up, or fill unassigned gaps.
- The schedule is **provisional**. Use stable IDs, normalized start/end datetimes or explicit day-offset fields, reliable midnight handling and readable time labels; avoid invented substantive descriptions.
- Day 1 = Oct 31, 2026 / Day 2 = Nov 1, 2026 only when the current source confirms those event dates. Do not present unsupported dates or weekday labels as certain.
- All 22 events must remain accessible on desktop and mobile.

## Dragon design — cyan outlines with orange accents
- Build an unmistakably Japanese **ryū**, not a winged Western dragon, floating line, icon, snake or emoji. Detailed head, long snout, horns, eyebrows, eyes, long flowing whiskers, mane, sinuous body, selective scales, elegant small claws.
- Primarily luminous outlined cyan `#22D3EE` and electric blue `#06B6D4`, with selective amber-orange `#F59E0B` eyes/horn/scale/energy accents. Keep most details cyan/blue with restrained orange, negative space, thin refined strokes and subtle glows.
- Match the existing near-black background and intricate cyan line-art tower while maintaining strong visual separation between dragon and architecture.
- Preserve the recognizable pagoda art, extending its timeline/spine coherently for 22+ milestones; do not distort the five-story SVG by simply stretching it or blindly building a physically absurd 22-story tower.

## Entrance, motion, reversal and event poses
- **Never start the dragon above or flying across the spire.** Initial scroll-rest state: **only its head, whiskers and horns** peek in from one side of the pagoda scene. Its neck/body/tail remain concealed in an intentional entry mask/zone.
- Down-scroll: the head follows an elegant side-entry swoop; body reveals progressively and coils physically around the tower. Represent some body passes **in front of** the tower and others **behind** it through proper grouping/masks/layering.
- Up-scroll: replay this journey **precisely in reverse**, including unwinding coils, retracting body reveal, reversing the head swoop, and returning to the identical head-only side entrance. No one-shot forward-only animations, unexpected restarts, teleportation, or head/body separation.
- All poses must depend deterministically on scroll/selected step; support reversed scrolling, large jumps, arbitrary initial scroll offsets, resizing and browser navigation.
- Each event has one canonical exact settled pose: head snout/eyes point at the REAL card anchor, clearly facing the correct left/right side. Include a separate intentional entrance pose before the first event.
- Intermediate orientations are permitted **during motion**, but the dragon must **never remain idle mid-spin**. On scroll idle, choose a stable event using nearest-step selection/hysteresis and finish easing to that exact canonical pose. Do not force global scroll snapping or hijack native scrolling.
- Keep card highlight synchronized with the settled/head-targeted event. Brighter cyan border/glow with subtle amber accents; inactive cards readable. Active connector must not pass through the dragon head.
- Use a scalable shared event/geometry system; no `activeFloor` maximum of 4, independent five-item floor geometry array, or scattered fixed card positions.

## Performance, accessibility and verification
- Prefer native SVG and existing animation dependencies; ask before adding new packages or heavyweight WebGL/3D.
- Keep SVG head/body/tail artwork distinct from pose/scroll logic and centralized tunables. Use measured card anchors or consistent normalized coordinates so geometry survives changes in layout, font sizes, zoom and page length.
- Avoid costly per-pixel React rerenders; use efficient scroll observation / animation frames and proper cleanup.
- The dragon is decorative (`aria-hidden`, pointer-events none); retain semantic readable schedule data and keyboard/touch access.
- Honor `prefers-reduced-motion` with clear stationary event poses / minimal motion; responsive/mobile timelines must show all events legibly even if dragon motion is simplified.
- Verify real build/lint scripts from the repository; never fabricate tests or browser visual checks. Check head-only start, side swoop, coils and front/back layers, all 22 card targets, midnight, reverse to origin, scroll pauses, fast scrolling, resize/zoom, mobile, reduced motion, and no conflicting duplicate schedule.
- Final handoff: file-by-file changes, what was tested and results, limitations, adjustment knobs, and **read-only** Git diff/status. Never commit or push.
