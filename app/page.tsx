
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-backdrop" />
      <section className="home-hero">
        <div className="hero-meta">
          <span>◉ TECHNOLOGY / COMMUNITY / FUTURE</span>
          <span>BENGALURU · INDIA</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">PES UNIVERSITY // DEPARTMENT OF CSE</p>
          <h1 className="hero-title">The <span>Embrione</span></h1>
          <p className="hero-subtitle">WE BUILD WHAT COMES <span>NEXT_</span></p>
          <p className="hero-description">
            The tech vertical under the Department of Computer Science and
            Engineering at PES University. A community of builders, innovators,
            and problem-solvers shaping tomorrow.
          </p>
          <div className="hero-actions">
            <Link href="/events" className="button-primary">EXPLORE KODIKON ↗</Link>
            <Link href="/about" className="button-ghost">DISCOVER EMBRIONE →</Link>
          </div>
        </div>

        <div className="hero-side-label">革新 · INNOVATE WITHOUT LIMITS</div>
        <div className="hero-bottom">
          <span>[01] TECHNOLOGY</span>
          <span>[02] COMMUNITY</span>
          <span>[03] KODIKON · 24H HACKATHON</span>
          <span className="scroll-hint">SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="home-intro">
        <p className="eyebrow">BEYOND THE ORDINARY / 001</p>
        <h2>Ideas become <span>impact.</span></h2>
        <p>
          From building communities to creating high-intensity hackathon
          experiences, Embrione brings technology and people together.
        </p>
        <Link href="/about" className="text-link">GET TO KNOW US ↗</Link>
      </section>
    </div>
  );
}
