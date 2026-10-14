# The Embrione — Web Development Domain Recruitment Challenge
**Organization:** The Embrione, Department of Computer Science & Engineering, PES University  
**Challenge Window:** 48 Hours  
**Submission Form Release:** At the 40th Hour  
**Deployment Platform:** Vercel  
**Database & Storage:** Supabase (PostgreSQL + Storage)

---

## 💡 A Quick Note from the Web Team

> Hey everyone! We know that **48 hours is a tight window and you have regular college classes, assignments, and labs going on.** Please don't feel overwhelmed or pressured into thinking you need to build a flawless, enterprise-scale platform.
>
> We crafted this task to see **how you learn on the fly, adapt to new technologies, and build under real-world constraints—even if you've never used them before.** If you haven't touched Supabase, Next.js, or image conversion yet, that's completely okay! We value curiosity, problem-solving, and honest effort over memorized syntax. Even a solid, working partial submission with good effort will be evaluated positively. Take a breath, enjoy building something cool, and have fun with it!

---

## 🤖 Zero Restrictions on AI Tools

> **Feel 100% free to use any AI tools you want**—ChatGPT, Claude, Cursor, GitHub Copilot, v0, etc.  
> In modern software development, AI is an everyday superpower. Use it to understand concepts, scaffold components, debug errors, or write SQL queries.  
> 
> **The only thing we care about:**
> 1. Your deployed site actually works.
> 2. You understand what the code is doing (so you can walk us through it briefly in your 2-minute demo video).

---

## 🎨 Architectural Flexibility & Creative Freedom

> **There is no single "correct" way to build this!**  
> You have 100% creative and architectural freedom over your approach:
> - **Frameworks**: Next.js (App Router / Pages), React + Vite, SvelteKit, Astro, or Vue.
> - **Architecture**: Full-stack Next.js with Server Actions / API routes, or a frontend communicating with a separate Express/Node backend.
> - **UI & Styling**: Tailwind CSS, Shadcn UI, Radix, Chakra, CSS Modules, Aceternity, or your own custom CSS.
> - **Creative Touches**: Feel free to add your own flair—slick card hover animations, toast notifications, keyboard shortcuts, or sound effects are all welcome and appreciated!

---

## 📞 Point of Contact for Doubts

If you have any questions regarding the instructions, rules, or submission workflow, feel free to reach out:

- **Sagar Hutagi**  
  *Web Development Head, The Embrione*  
  **Phone / WhatsApp:** `+91 9380341579`  

*(Note: Please reach out for logistical, rule, or submission clarifications. For code errors and debugging, lean on AI, Google, and official docs—that's where the learning happens!)*

---

## 1. Challenge Overview

You will build a full-stack, 3-page **"Meet The Team" Onboarding & Moderation System**:
1. **Member Registration with Live Card Preview** (`/register`)
2. **Admin Moderation Dashboard** (`/admin`)
3. **Public "Meet The Team" Directory** (`/team`)

---

## 2. Universal Admin Credentials (Mandatory)

So that our team can easily test and review your admin panel without you having to manage separate accounts, **configure your app to accept these credentials**:

- **Admin Email:** `admin@embrione.pes.edu`
- **Admin Password:** `EmbrioneAdmin@2026`

---

## 3. Required Pages & Specifications

### Page 1: Member Registration with Live Card Preview (`/register`)
A split-screen or stacked layout where the user fills out a form on one side, and an **interactive preview of their member card updates in real time** on the other side.

#### Form Fields:
- **Full Name** (Text)
- **Domain** (Select: `Web Development`, `Design`, `Logistics`, `Operations`, `Sponsorship`, `Hospitality`, `Social Media`, `Event Management`)
- **Position** (Select: `Head`, `Vice-Head`, `Core Member`, `Member`)
- **SRN** (Text, e.g., `PES1UG23CS001`)
- **Email** (Text, PES email or personal email)
- **LinkedIn URL** (Text)
- **GitHub URL** (Text)
- **Branch** (Select: `CSE`, `AIML`, `ECE`, `EEE`, `ME`, `Biotech`, etc.)
- **Semester** (Select: `1` to `8`)
- **Short Description / Bio** (Textarea, ~150-200 characters)
- **Profile Picture** (File upload)

#### Key Requirements:
- **Real-Time Preview**: As the user types their name, domain, bio, etc., the card preview updates dynamically. If no photo is selected yet, show a clean default avatar placeholder.
- **Client-Side WebP Conversion**: When an image (`.png`, `.jpg`, `.jpeg`) is selected, convert it into `.webp` format in the browser before uploading it to Supabase Storage.  
  *(Tip: You can use an HTML5 `<canvas>` via `canvas.toBlob(blob, 'image/webp')` or an npm package like `browser-image-compression`).*
- **Submission State**: Saving a profile sets `status: 'pending'`. Show a friendly toast or alert confirming submission.

---

### Page 2: Admin Moderation Dashboard (`/admin`)
- **Login Protected**: Only accessible after logging in with `admin@embrione.pes.edu` / `EmbrioneAdmin@2026`.
- **Pending List**: Shows cards/table of all members waiting with `status: 'pending'`.
- **Action Buttons**:
  - **Approve**: Changes status to `approved` (profile now shows on `/team`).
  - **Reject**: Changes status to `rejected` (profile won't show on `/team`).
  - *(Optional Bonus)* **Delete**: Removes the profile.
- **Quick Counters**: Simple cards at top showing `Total Submissions`, `Pending`, and `Approved`.

---

### Page 3: Meet The Team Directory (`/team`)
- **Public Page**: Displays **only profiles that have been approved** by the admin.
- **Use Mock Data for Seeding**: **You do NOT need to scrape or pull data from the official website!** Use clean mock/dummy data (4 to 6 sample profiles with dummy names, Unsplash/DiceBear avatars, and sample bios) pre-seeded into your database so the directory looks alive immediately.
- **Filters**: Filter cards by **Domain** (Web Dev, Design, etc.) or **Position** (Head, Core Member, etc.).
- **Visual Design**: Sleek dark aesthetic matching Embrione style. Responsive on mobile and desktop.

---

## 4. Database Setup (Supabase)

Create a free account at [supabase.com](https://supabase.com). It takes 2 minutes.

### Table Schema (`members`):
```sql
create table public.members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text not null,
  position text not null,
  srn text not null,
  email text not null,
  linkedin_url text,
  github_url text,
  branch text not null,
  semester integer not null,
  bio text,
  photo_url text not null,
  status text not null default 'pending', -- 'pending', 'approved', 'rejected'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Quick policy to allow public inserts & reading
alter table public.members enable row level security;

create policy "Allow public insert" on public.members for insert with check (true);
create policy "Allow public read" on public.members for select using (true);
create policy "Allow admin updates" on public.members for update using (true);
create policy "Allow admin deletes" on public.members for delete using (true);
```

### Storage Bucket:
- In Supabase Storage, create a public bucket named `member-photos` and set it to **Public**.

---

## 5. 🗺️ Recommended Build Order (Step-by-Step Roadmap)

If you are wondering where to start, follow this stress-free order:

```
[Phase 1: Database] (15-30 mins)
└── Create Supabase project ➔ Run the SQL schema ➔ Create 'member-photos' public bucket.

[Phase 2: Form & Live Preview] (2 hours)
└── Build /register with form inputs ➔ Connect state to a Card component so it updates as you type.

[Phase 3: WebP Conversion & Upload] (1 hour)
└── Add canvas or browser-image-compression to convert photos to .webp on file select ➔ Save to Supabase.

[Phase 4: Admin Moderation] (1-2 hours)
└── Build /admin login page ➔ Fetch pending members ➔ Add 'Approve' & 'Reject' buttons to update status.

[Phase 5: Meet The Team Page] (1-2 hours)
└── Build /team page ➔ Insert 4-6 mock profiles ➔ Filter query to only show status = 'approved'.

[Phase 6: Deployment & Video] (1 hour)
└── Push to GitHub ➔ Deploy to Vercel ➔ Record your quick 2-minute Loom/Drive video.
```

---

## 6. Helpful Tips & Edge Cases (For Brownie Points)

You don't need to stress over every single edge case, but keeping these in mind will make your app feel super polished:
- **Big Images**: Mobile phone photos can be 10MB+. In your WebP conversion, consider capping maximum width (e.g., 800px) and setting quality to `0.8` to keep files fast and light.
- **When to Upload**: Don't upload the image to Supabase while the user is just typing or previewing. Create a local preview with `URL.createObjectURL(file)`, and only upload the file to Supabase when they hit the final "Submit" button.
- **Vercel Environment Variables**: Don't forget to add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel Project Settings > Environment Variables so your live site can connect to your database.
- **Text Truncation**: Use `line-clamp` or `truncate` in CSS so long names or bios don't break your card layout.
- **Duplicate Submissions**: Add a check to let the user know if their SRN is already submitted.

---

## 7. Git Hygiene & Commits

- Try to make **regular, progressive commits** as you build (e.g. 6 to 10+ commits like `setup: project init`, `feat: register form and preview`, `feat: webp conversion`, `feat: admin approval`, `fix: responsive cards`).
- Avoid dumping all code in one single commit at the end—showing your step-by-step progress helps us understand how you work!

---

## 8. Deployment & Custom Subdomain

- Deploy on **Vercel** ([vercel.com](https://vercel.com)).
- Set your subdomain to:
  ```text
  https://<yourfirstname>-embrione-task.vercel.app
  ```
  *(If your firstname is already taken, use `https://<yourfirstname><srnlast3>-embrione-task.vercel.app`)*.

---

## 9. 48-Hour Timeline & Submission Procedure

- **Hours 0 to 40**: Build at your own pace around your classes and schedule.
- **Hour 40**: The official Google Form link will be shared.
- **Hour 48**: Submission deadline.

### What You'll Submit in the Google Form:
1. **Full Name**
2. **SRN**
3. **Live Vercel Link** (`https://yourfirstname-embrione-task.vercel.app`)
4. **GitHub Repository Link** (Public)
5. **Demo Video Link** (A short 2-minute Loom, Google Drive, or unlisted YouTube video walking through: the `/register` live preview, WebP upload in network tab, logging into `/admin` to approve a profile, and seeing it appear on `/team`).

---

## 10. ✅ Final Submission Checklist

Before submitting the Google Form, verify these items:

- [ ] **Live Vercel Site Works**: The site loads without crashing on production.
- [ ] **Custom Subdomain**: URL follows `https://<yourfirstname>-embrione-task.vercel.app`.
- [ ] **Registration & Live Preview (`/register`)**: Card preview updates in real-time as fields are filled.
- [ ] **WebP Conversion**: Uploaded pictures are stored in Supabase as `.webp` format.
- [ ] **Admin Login (`/admin`)**: Logs in with `admin@embrione.pes.edu` and `EmbrioneAdmin@2026`.
- [ ] **Approval Workflow**: Approving a profile moves it to `/team`. Rejecting keeps it hidden.
- [ ] **Meet The Team (`/team`)**: Populated with mock profiles and displays only approved entries.
- [ ] **Mobile Responsive**: Pages look clean on phone screens.
- [ ] **Public GitHub Repo**: Repo is set to Public and has progressive commits + setup README.
- [ ] **Demo Video Link Accessible**: Link permissions set to *"Anyone with the link can view"*.

---

## 11. Frequently Asked Questions (FAQ)

#### Q1: "I only know MERN (MongoDB, Express, React, Node). Can I use MongoDB instead of Supabase?"
**A:** Please try to use **Supabase**! It gives you a full Postgres database and image storage out of the box with zero backend server setup required. The Supabase JS library (`supabase.from('members').insert(...)`) is just like querying any database. It takes under 15 minutes to learn the basics, and learning new tools quickly is a great skill to demonstrate!

#### Q2: "Can I use an Express.js backend if I want to?"
**A:** Yes! You are welcome to structure your backend however you like (Next.js server actions, API routes, or a separate Express server), as long as your database is Supabase, photos are converted to WebP, and your frontend is live on Vercel.

#### Q3: "Can I use component libraries like Tailwind, Shadcn, or Lucide icons?"
**A:** Absolutely yes! Using modern UI libraries is encouraged.

#### Q4: "Do I have to scrape the official Embrione website for photos?"
**A:** **No!** Use clean mock data (dummy names, Unsplash/DiceBear photos, random bios) for your initial seed profiles.

#### Q5: "What if I can't finish 100% of the features?"
**A:** Submit whatever you have built! A well-crafted form with live preview and clean code is worth much more than giving up. We evaluate effort, code quality, and learning enthusiasm.

#### Q6: "Who can I contact if I have a question?"
**A:** For any questions about the instructions or submission process, contact:  
**Sagar Hutagi** (Web Development Head, The Embrione) at **`+91 9380341579`**.

---
*Good luck, have fun building, and we're excited to see what you create!*  
*Department of Computer Science & Engineering • The Embrione • PES University*
