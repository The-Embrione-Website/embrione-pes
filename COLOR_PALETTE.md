# 🎨 The Embrione Design System & Color Palette

This guide defines the official color palette, semantic design tokens, and UI guidelines for **The Embrione & Kodikon Web Ecosystem**. All developers and contributors should adhere to these conventions when building new components, pages, or features to ensure cohesive, modern visual consistency across pull requests.

---

## 🧭 Visual Theme Philosophy

The Embrione design language combines **Apple-inspired dark minimalism** (for club governance, leadership, and public landing pages) with **futuristic technical cyan neon accents** (for Kodikon 24-hour national hackathon portals).

- **Backgrounds**: Deep, OLED-friendly pure blacks (`#000000`) and midnight navies (`#000514`).
- **Surfaces**: Elevated dark neutral cards (`#161617` and `#0f172a`) with subtle translucent white borders (`rgba(255, 255, 255, 0.08)`).
- **Accents**: Electric blue (`#0071e3`) for primary actions and glowing cyan (`#06b6d4` / `#22d3ee`) for technical hackathon badges and terminal highlights.
- **Typography**: Crisp white headlines (`#ffffff`) with high-legibility muted body copy (`#a1a1a6`).

---

## 🎯 Quick Palette Reference

| Token Name | Hex Code | Tailwind Class | Semantic Purpose |
|---|---|---|---|
| **Canvas Background** | `#000000` | `bg-brand-canvas` or `bg-black` | Main page background across all routes |
| **Surface Card (Apple)** | `#161617` | `bg-brand-surface` | Default surface for cards, tiles, and modals |
| **Surface Elevated** | `#1d1d1f` | `bg-brand-surface-elevated` | Hovered card state, dropdown menus, popovers |
| **Surface Navy** | `#000514` | `bg-brand-surface-navy` or `bg-[#000514]` | Sticky headers, frosted navbars, footers |
| **Surface Input** | `#020617` | `bg-brand-surface-input` or `bg-slate-950` | Input wells, textareas, select boxes |
| **Surface Hackathon** | `#0f172a` | `bg-brand-surface-card` or `bg-slate-900` | Kodikon technical track & FAQ cards |
| **Accent Blue** | `#0071e3` | `bg-brand-accent-blue` or `text-brand-accent-blue` | Primary interactive buttons, links, active pills |
| **Accent Blue Hover** | `#0077ed` | `hover:bg-brand-accent-blue-hover` | Button hover and pressed feedback |
| **Kodikon Cyan** | `#06b6d4` | `bg-brand-accent-cyan` or `text-brand-accent-cyan` | Kodikon CTAs, track numbers, timeline points |
| **Cyan Glow** | `#22d3ee` | `text-brand-accent-cyan-glow` | Terminal font highlights, status dots, badges |
| **Cyan Dark** | `#0891b2` | `bg-brand-accent-cyan-dark` | Solid secondary buttons in dark contexts |
| **Text Primary** | `#ffffff` | `text-brand-text-primary` or `text-white` | Page titles (H1, H2), hero copy, active states |
| **Text Secondary** | `#a1a1a6` | `text-brand-text-secondary` or `text-neutral-400` | Paragraphs, descriptions, secondary copy |
| **Text Muted** | `#6e6e73` | `text-brand-text-muted` or `text-neutral-500` | Timestamps, fine print, footer copyright, labels |
| **Border Subtle** | `rgba(255,255,255,0.08)` | `border-brand-border-subtle` or `border-white/10` | Default card borders, header dividers |
| **Border Hover** | `rgba(255,255,255,0.20)` | `border-brand-border-hover` or `border-white/25` | Card hover border glow and focus rings |
| **Border Divider** | `#1e293b` | `border-brand-border-divider` or `border-slate-800` | Section dividers, roadmap horizontal rules |

---

## 🧱 Component Styling Recipes

### 1. Apple-Style Feature Card
Use for team cards, past editions, and initiative spotlights:
```jsx
<div className="p-6 rounded-2xl bg-brand-surface border border-brand-border-subtle hover:border-brand-border-hover transition-all duration-300">
  <h3 className="text-lg font-semibold text-brand-text-primary">Feature Title</h3>
  <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed font-light">
    Description text providing concise background information.
  </p>
</div>
```

### 2. Kodikon Hackathon Technical Card
Use for track problem statements, roadmap milestones, and technical FAQs:
```jsx
<div className="p-6 rounded-lg bg-brand-surface-card/60 border border-brand-border-divider hover:border-slate-700 transition-colors">
  <div className="flex items-center justify-between mb-3">
    <span className="text-xs font-mono text-brand-accent-cyan-glow">TRACK-01</span>
    <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-accent-cyan">
      <Cpu size={16} />
    </div>
  </div>
  <h3 className="text-base font-bold text-white">Track Name</h3>
  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
    Track description and research problem statement.
  </p>
</div>
```

### 3. Primary Call-to-Action (CTA) Buttons
#### Blue Action (Home / Portal):
```jsx
<button className="px-5 py-2.5 rounded-full bg-brand-accent-blue hover:bg-brand-accent-blue-hover text-white text-xs sm:text-sm font-medium transition-all shadow-sm">
  Register Now
</button>
```

#### Cyan Action (Kodikon Hackathons):
```jsx
<button className="px-5 py-2.5 rounded-md bg-brand-accent-cyan-dark hover:bg-brand-accent-cyan text-white text-xs font-semibold transition-colors">
  Submit Pre-Registration
</button>
```

#### Secondary Ghost Button:
```jsx
<button className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-brand-text-primary border border-white/10 text-xs sm:text-sm font-medium transition-all">
  Learn More
</button>
```

### 4. Input Fields & Form Controls
```jsx
<div>
  <label className="block text-xs font-mono text-brand-text-secondary mb-1">
    Email Address
  </label>
  <input
    type="email"
    placeholder="student@pes.edu"
    className="w-full px-3 py-2 rounded-md bg-brand-surface-input border border-brand-border-divider text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-accent-cyan"
  />
</div>
```

### 5. Status Pill & Department Badges
```jsx
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
  <span className="w-2 h-2 rounded-sm bg-brand-accent-cyan-glow" />
  <span>PES UNIVERSITY • DEPARTMENT OF CSE</span>
</div>
```

---

## 🔤 Typography & Font Pairings

- **Headings & Badges (Display)**: Orbitron (`font-display` or `font-mono`)
  - Use for hackathon titles, edition numbers (`KODIKON 6.0`), and terminal telemetry labels.
- **Body & Interface (Sans)**: Poppins (`font-sans`)
  - Use for navigation items, cards, form inputs, button labels, and general reading copy.

---

## 📋 Contributor Do's & Don'ts

| Do ✅ | Don't ❌ |
|---|---|
| Use `bg-brand-canvas` or `bg-black` for root page wrappers. | Don't use light backgrounds (`bg-white` or `bg-gray-100`) as main page canvases. |
| Use `border-white/10` or `border-brand-border-subtle` for subtle card outlines. | Don't use harsh, opaque borders like `border-gray-500` on dark cards. |
| Use `text-brand-text-secondary` (`#a1a1a6`) for paragraphs to maintain optimal contrast. | Don't use pure white (`#ffffff`) for long paragraphs—it causes visual fatigue. |
| Keep form inputs dark using `bg-brand-surface-input` with cyan focus rings. | Don't leave input backgrounds white or with default browser outlines. |
| Keep data and constants in separate files (`tracksData.js`, `FAQData.js`). | Don't hardcode large arrays of text or data directly inside React component JSX. |
