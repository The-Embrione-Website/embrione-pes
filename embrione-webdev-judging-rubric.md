# The Embrione — Web Development Recruitment Challenge
## 📋 Official Judges' Evaluation Rubric & Scoring Guide
**Domain:** Web Development  
**Challenge:** Meet The Team Onboarding & Moderation System  
**Total Points:** 100 Points (+ up to 5 Bonus Points)  
**Passing / Shortlist Threshold:** 70+ Points  
**Strong Hire / Core Member Threshold:** 85+ Points  

---

## ⚡ 5-Minute Rapid Testing Protocol for Judges

Before diving into code, run this 5-minute end-to-end user journey test:

```
Step 1: Open Vercel URL
        └── Check: Does https://<firstname>-embrione-task.vercel.app load cleanly without runtime error?

Step 2: Test /register (Live Preview & WebP)
        ├── Type in Name, Domain, Bio ➔ Does the card preview update in real-time?
        ├── Open Browser DevTools (Network Tab > Img/Fetch).
        ├── Upload a .png or .jpg image.
        └── Click Submit ➔ Inspect the uploaded request payload. Is the uploaded asset a .webp blob?

Step 3: Test /admin (Login & Moderation)
        ├── Go to /admin ➔ Does it prompt for login?
        ├── Log in with admin@embrione.pes.edu / EmbrioneAdmin@2026.
        └── Locate the newly registered profile ➔ Click "Approve".

Step 4: Test /team (Directory)
        └── Go to /team ➔ Does the approved profile appear? Do pre-seeded mock profiles render?

Step 5: Inspect GitHub & Video
        ├── GitHub: Check commit count (are there 6+ progressive commits?).
        └── Video: Open Loom/Drive link. Can the candidate articulate their code in 2 minutes?
```

---

## 📊 Detailed 100-Point Scoring Breakdown

### 1. Registration Page & Real-Time Card Preview (`/register`) — [25 Points]

| Score | Criteria & Expected Behavior |
| :---: | :--- |
| **21 – 25** | **Flawless**: Real-time card preview updates synchronously as user types without latency or layout jumps. All required fields present (Name, Domain, Position, SRN, Email, Links, Branch, Semester, Bio). Clean validation and toast notification on submit. Default avatar placeholder when no image uploaded. |
| **15 – 20** | **Good**: Preview works but has minor lag, or 1-2 non-critical fields missing. Preview card handles text wrapping well. |
| **8 – 14** | **Basic**: Preview only updates on blur or button click rather than live typing. Layout breaks when entering long names/bios. |
| **0 – 7** | **Broken / Missing**: No live preview, or form submission fails completely. |

---

### 2. Client-Side WebP Conversion & Supabase Storage — [20 Points]

*How to verify:* In Chrome DevTools > Network tab, filter by `Fetch/XHR` or `Img` during form submission, or inspect the image URL generated in the Supabase bucket (`.../member-photos/...xyz.webp`).

| Score | Criteria & Expected Behavior |
| :--- | :--- |
| **17 – 20** | **True WebP Conversion**: Image file is converted to `.webp` in-browser (via Canvas API or library) before uploading to Supabase. Uploaded file MIME type is `image/webp`. Image displays properly on preview card and `/team`. Large photos (5MB+) are compressed smoothly. |
| **12 – 16** | **Partial Conversion**: File uploads to Supabase Storage and displays, but was converted server-side or uploaded with original file extension renamed. |
| **6 – 11** | **Uploaded Original**: File uploaded to Supabase Storage, but retained `.png`/`.jpg` format without conversion to WebP. |
| **0 – 5** | **Broken**: Image upload fails, uses raw local Base64 string in database, or breaks Supabase storage permissions. |

---

### 3. Admin Moderation Dashboard (`/admin`) — [25 Points]

*Universal Creds:* `admin@embrione.pes.edu` / `EmbrioneAdmin@2026`

| Score | Criteria & Expected Behavior |
| :--- | :--- |
| **21 – 25** | **Complete Moderation Suite**: Protected route requiring universal credentials. Shows pending member cards/table. Clicking **Approve** updates database status to `approved` and immediately exposes profile to `/team`. Clicking **Reject** hides it. Counters for Total, Pending, Approved update accurately. |
| **16 – 20** | **Functional**: Admin authentication works. Approve/Reject updates status in Supabase, but requires manual page refresh to see state update. |
| **10 – 15** | **Basic**: Universal credentials fail, but applicant provided working alternate credentials in README. Basic approval toggle works. |
| **0 – 9** | **Broken**: Route is unprotected, credentials do not work, or approve/reject actions fail to persist to database. |

---

### 4. Meet The Team Public Directory (`/team`) — [15 Points]

| Score | Criteria & Expected Behavior |
| :--- | :--- |
| **13 – 15** | **Polished Directory**: Exclusively renders approved profiles. Pre-seeded with 4–6 mock profiles. Interactive filters for Domain and/or Position work accurately. Sleek dark aesthetic matching Embrione palette (`#000514`). Responsive across mobile and desktop. |
| **9 – 12** | **Functional**: Shows approved profiles and mock data. Filters work, but minor mobile styling flaws (e.g., cards overflowing on small screens). |
| **5 – 8** | **Incomplete**: Displays all profiles regardless of approval status (shows pending/rejected profiles), or missing mock seed data. |
| **0 – 4** | **Broken**: Page crashes, does not fetch from Supabase, or completely unstyled. |

---

### 5. Code Quality, Git Hygiene & Video Walkthrough — [15 Points]

| Score | Criteria & Expected Behavior |
| :--- | :--- |
| **13 – 15** | **High Professionalism**: 6+ progressive commits showing logical build milestones (`feat: ...`, `fix: ...`). Clean component structure. 2-minute video walkthrough is clear, demonstrates full user flow, and candidate articulately explains their architecture. |
| **9 – 12** | **Acceptable**: 3–5 commits. Clean code. Video is provided and demonstrates the core flow, though brief. |
| **5 – 8** | **Subpar**: Only 1–2 massive commits. Video link provided but audio is missing, or video only covers a partial demo. |
| **0 – 4** | **Unsatisfactory**: Single commit dump with no explanation. Video link is private/broken or omitted. |

---

## 🌟 Optional Brownie Points (Up to +5 Bonus)

Award up to **+5 extra points** for candidates demonstrating standout developer craft:
- **+2 pts:** Slick micro-interactions (smooth card flip/3D hover tilt, subtle skeleton loaders, toast feedback).
- **+2 pts:** Robust edge case handling (detecting duplicate SRN, cleaning up blob URLs with `revokeObjectURL`, handling 15MB+ phone photos gracefully).
- **+1 pt:** Creative UI feature (search bar, export to CSV/JSON, theme accents, sound effects).

---

## 🚩 Immediate Red Flags & Penalties

- **-20 Points:** Universal admin credentials (`admin@embrione.pes.edu` / `EmbrioneAdmin@2026`) do not work AND no alternate credentials are provided in the README.
- **-15 Points:** Hardcoded mock database (not connected to Supabase).
- **Disqualification:** Plagiarized repo copied directly from a peer (identical commit timestamps, matching Supabase project IDs).
- **Disqualification:** Deployed site non-functional / 404 with no attempt to fix.

---

## 📝 Candidate Evaluation Scorecard Template

*(Copy and paste this section into your scoring notes for each applicant)*

```markdown
### Candidate Scoring Sheet

- **Candidate Name:** [Applicant Name]
- **SRN:** [e.g. PES1UG23CS000]
- **Vercel URL:** [https://...-embrione-task.vercel.app]
- **GitHub URL:** [https://github.com/.../...]
- **Evaluator Name:** [Sagar Hutagi / Core Member]

| Category | Max Points | Awarded Score | Judge Notes |
| :--- | :---: | :---: | :--- |
| 1. Registration & Live Preview (`/register`) | 25 |  |  |
| 2. WebP Conversion & Supabase Storage | 20 |  |  |
| 3. Admin Moderation Portal (`/admin`) | 25 |  |  |
| 4. Meet The Team Directory (`/team`) | 15 |  |  |
| 5. Git Hygiene, Code & Video Walkthrough | 15 |  |  |
| *Bonus Points (Standout Craft / Polish)* | +5 |  |  |
| **TOTAL SCORE** | **100** | **/ 100** |  |

#### Final Recommendation:
- [ ] **Strong Select (85–100):** Immediate recruit for Core Web Dev Team.
- [ ] **Select (70–84):** Solid recruit for Web Dev Domain.
- [ ] **Waitlist / Interview (60–69):** Has potential, conduct quick 10-min technical peer interview.
- [ ] **Reject (< 60):** Incomplete submission or broken core flows.

**Quick Summary / Key Observations:**
> [Write 1-2 sentences on their strengths, UI craft, or gaps]
```

---
*The Embrione • Department of Computer Science & Engineering • PES University*
