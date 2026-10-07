# 🚀 The Embrione & Kodikon Web Portal

Official web repository for **The Embrione** — the technical vertical under the Department of Computer Science and Engineering at **PES University, Bengaluru** — and the official platform for **Kodikon**, our flagship national-level 24-hour hackathon.

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![PES University](https://img.shields.io/badge/PES_University-Bengaluru-blue?style=for-the-badge)](https://pes.edu/)

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Environment Variables](#-environment-variables)
- [Key Features & Routes](#-key-features--routes)
- [How to Update Content](#-how-to-update-content)
- [Collaboration & Git Workflow](#-collaboration--git-workflow)
- [Club Maintainers & Contact](#-club-maintainers--contact)

---

## 🌐 Overview

This application serves two main purposes:
1. **Club Hub (`/`)**: Showcases Embrione's mission, domain leads, core committee, past hackathons, learning initiatives (Cipher, Spark), announcements, and contact channels.
2. **Kodikon Hackathon Portal (`/kodikon-5`)**: The registration and information portal for Kodikon 5.0 (and archives for 4.0 and 3.0), featuring research-backed tracks, interactive theme popups, countdown clocks, event timeline, prizes, sponsors, partners, and FAQs.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 13.5](https://nextjs.org/) (Hybrid App Router + Pages API)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark neon palette (`dark-navy`, cyan glows, matrix rain keyframes)
- **Animations & Interactivity**:
  - [Framer Motion](https://www.framer.com/motion/) for fluid page entries and scroll transitions
  - [Lottie React](https://github.com/Gamote/lottie-react) for interactive vector animations
  - [use-scramble](https://use-scramble.vercel.app/) for futuristic cyberpunk terminal text effects
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
  - [Swiper](https://swiperjs.com/) for touch-friendly event photo carousels
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Forms & Notifications**: `react-hook-form`, `react-toastify`, and `axios`
- **Backend & Integrations**:
  - [Nodemailer](https://nodemailer.com/) (Gmail SMTP relay for `/api/sendMessage`)
  - [Firebase SDK](https://firebase.google.com/) (Firestore initialization)

---

## 📂 Project Architecture & Directory Structure

```text
kodi5-website/
├── app/                                # Next.js App Router
│   ├── layout.js                       # Root layout (fonts, global metadata)
│   ├── globals.css                     # Global styles, scrollbar, neon gradients
│   ├── page.js                         # Embrione Club Landing Page
│   ├── kodikon-5/                      # Kodikon 5.0 Landing Page
│   │   ├── page.js
│   │   └── layout.js
│   ├── kodikon-4/                      # Kodikon 4.0 Legacy Page
│   └── kodikon-3/                      # Kodikon 3.0 Legacy Page
│
├── components/                         # Modular React components
│   ├── Navbar.jsx                      # Club header navbar
│   ├── Hero.jsx                        # Club hero section with scramble text
│   ├── AboutUs.jsx                     # About Embrione copy
│   ├── Team.jsx                        # Domain heads & cores grid
│   ├── PastEvents.jsx                  # Kodikon 1-4, Cipher, Spark viewer
│   ├── Previous-Partners/              # Historical sponsor and partner grid
│   ├── Announcements/                  # Recruitment and hackathon notices
│   ├── ContactUs/                      # Contact form with email API trigger
│   ├── Footer/                         # PES branding, socials, contacts
│   │
│   └── Kodikon-5/                      # Kodikon 5.0 specific components
│       ├── NavbarKodikon5.jsx          # Hackathon sticky navbar
│       ├── HeroComponent.jsx           # Matrix rain effect + title sponsor
│       ├── AboutTheEvent/              # Event narrative & stats
│       ├── Countdown/                  # Dynamic registration countdown
│       ├── HackathonThemes/            # 3 research tracks + detail popups
│       ├── Timeline/                   # 5-stage interactive vertical roadmap
│       ├── Sponsors/                   # Pixcellence title sponsor showcase
│       ├── Partners/                   # Hack2Skill partner section
│       ├── Prizes/                     # First, second, third prize badges
│       ├── FAQComponent.jsx            # 14 hackathon Q&A accordions
│       ├── MapComponent.jsx            # PES Dr. MRD Block embed & directions
│       └── FAQData.js                  # FAQ content source
│
├── pages/api/                          # Next.js API Routes
│   ├── sendMessage.js                  # Contact form email delivery via Nodemailer
│   └── getTime.js                      # Server-synchronized countdown timestamp
│
├── public/                             # Public static assets
│   ├── 2025-domain-heads/              # Domain head & core photos
│   ├── Kodikon5/                       # Theme thumbnails, logos, prize images
│   ├── Kodikon4/                       # Kodikon 4.0 graphics & sponsor assets
│   ├── sponsors/                       # Sponsor logos (Tech, Food, Travel)
│   ├── Partners/                       # Hack2Skill and platform partner logos
│   └── Cipher/, Spark/, Kodikon1-2/   # Past event photo galleries
│
├── assets/                             # Lottie JSON files, vector graphics
│   ├── about-kodikon.json
│   ├── blue-orbit.json
│   ├── contact.json
│   └── PES_LogoWhite.webp
│
├── constants.js                        # Master data file (Team, Events, Socials, Announcements)
├── firebaseConfig.js                   # Firebase client configuration
├── tailwind.config.js                  # Tailwind theme, typography & keyframes
└── package.json                        # Dependencies and npm scripts
```

---

## ⚡ Getting Started & Local Setup

### 1. Prerequisites
- **Node.js**: `v18.x` or higher installed ([Download](https://nodejs.org/))
- **Package Manager**: `npm`, `yarn`, or `pnpm`
- **Git**: Installed and configured

### 2. Clone & Install
```bash
# Clone the repository
git clone https://github.com/The-Embrione-Website/embrione-website.git
cd kodi5-website

# Install dependencies
npm install
```

### 3. Setup Environment Variables
Create a local `.env.local` file:
```bash
cp .env.example .env.local
```
Add your credentials (see [Environment Variables](#-environment-variables)).

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
To view the Kodikon 5 page directly, visit [http://localhost:3000/kodikon-5](http://localhost:3000/kodikon-5).

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🔑 Environment Variables

The application supports the following environment variables in `.env.local`:

| Variable | Description | Required For |
|---|---|---|
| `APP_PASSWORD` | Google App Password for `theembrionetech@gmail.com` | Contact form submission via `/api/sendMessage` |

> [!NOTE]
> If testing the frontend without sending live emails, `APP_PASSWORD` can be omitted, but `/api/sendMessage` will fail with an authentication error on form submit.

---

## 🗺 Key Features & Routes

| Route | Description | Primary Components |
|---|---|---|
| `/` | Embrione Club official portal | `Hero`, `AboutUs`, `Team`, `PastEvents`, `Announcements`, `ContactUs`, `Footer` |
| `/kodikon-5` | Kodikon 5.0 Hackathon portal | `HeroComponent`, `AboutTheEvent`, `HackathonThemes`, `EventTimeline`, `Sponsors`, `Partners`, `Prizes`, `FAQ`, `Map` |
| `/kodikon-4` | Kodikon 4.0 Archive | `Kodikon-4/*` |
| `/kodikon-3` | Kodikon 3.0 Archive | `Kodikon-3/*` |
| `/api/sendMessage` | Contact API route | Handles contact form POST submissions and dispatches emails to `embrione_cse@pes.edu` |
| `/api/getTime` | Countdown sync API | Returns synchronized timestamp for countdown timers |

---

## ✏️ How to Update Content

### 👥 Updating Team Members
Edit `constants.js` under the `teamMembersDetails` array:
```javascript
{
  name: "Full Name",
  domain: "Web Development", // WebDev, Event Management, Sponsorship, Design, Operations, Logistics, Hospitality, Social Media, Campaigning
  role: "Head",              // "Head" or "Core"
  photoUrl: "/2025-domain-heads/YourPhoto.jpg", // Place image in public/2025-domain-heads/
  linkedinUrl: "https://www.linkedin.com/in/username/",
  srn: "PES1UG23CSxxx",
  email: "your.email@example.com",
}
```

### 🎯 Updating Hackathon Tracks & Themes
Edit `components/Kodikon-5/HackathonThemes/HackathonThemes.jsx`:
- Modify the `themes` array to adjust track titles, descriptions, application areas, and academic literature links.
- Place track banner images in `public/Kodikon5/themes-thumbnail/`.

### ❓ Updating FAQs
Edit `components/Kodikon-5/FAQData.js`:
- Add or modify questions and answers in `faqData`.

### 📅 Updating Event Timeline
Edit `components/Kodikon-5/Timeline/EventTimelineComponent.jsx`:
- Update `timelineEvents` with the new milestones, dates, descriptions, and icons.

### 📢 Updating Announcements
Edit `constants.js` under `announcements`:
- Add new announcement objects with `status: "Open"` or `"Closed"` and appropriate `formLink`.

---

## 🤝 Collaboration & Git Workflow

To keep the codebase stable and clean while collaborating:

### 1. Branching Strategy
Never push directly to `main`. Create descriptive feature branches:
```bash
git checkout -b feat/your-feature-name      # New feature (e.g. feat/kodi6-theme-cards)
git checkout -b fix/issue-description       # Bug fix (e.g. fix/navbar-mobile-overlap)
git checkout -b content/update-team         # Content updates (e.g. content/2026-cores)
```

### 2. Commit Message Standards
Use clear and conventional commit messages:
- `feat: add interactive track popup for AI theme`
- `fix: correct registration countdown timezone`
- `style: refine footer padding on mobile screens`
- `docs: update setup instructions in README`

### 3. Component & Styling Guidelines
- **Modularity**: Place reusable subcomponents inside their respective folder (e.g., `components/Kodikon-5/<Section>/`).
- **Responsive Design**: Always check changes across mobile (`sm: 640px`), tablet (`md: 768px`), and desktop (`lg: 1024px`, `xl: 1480px`).
- **Next/Image**: Always use `next/image` for images to preserve optimization and avoid layout shifts.
- **Client Components**: If using React hooks (`useState`, `useEffect`, `useRef`) or animations (`framer-motion`), ensure `"use client";` is declared at the top of the file.

### 4. Submitting a Pull Request
1. Pull the latest `main` branch: `git pull origin main`
2. Test the build locally: `npm run build && npm run lint`
3. Push your branch: `git push -u origin feat/your-feature-name`
4. Open a Pull Request on GitHub with a description of the changes made and screenshots for visual updates.

---

## 📬 Club Maintainers & Contact

- **Organization**: The Embrione — Department of Computer Science & Engineering
- **Institution**: PES University, Ring Road Campus, Banashankari, Bengaluru, Karnataka 560085
- **Official Email**: [embrione_cse@pes.edu](mailto:embrione_cse@pes.edu)
- **Tech Team**: [theembrionetech@gmail.com](mailto:theembrionetech@gmail.com)
- **Instagram**: [@the_embrione.pesu](https://www.instagram.com/the_embrione.pesu/)
- **LinkedIn**: [The Embrione](https://www.linkedin.com/company/the-embrione/about/)

---

<p align="center">Made with ♥ by <b>The Embrione WebDev Team</b></p>
