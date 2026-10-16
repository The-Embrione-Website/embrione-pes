
"use client";

import { useEffect, useState } from "react";

const words = [
  "CURIOUS",
  "MINDS",
  "BUILD",
  "TOGETHER",
  "IDEAS",
  "INTO",
  "IMPACT",
  "ABOUT",
  "EMBRIONE",
];

const pillars = [
  {
    number: "01",
    title: "CREATE.",
    description:
      "Turn ambitious ideas into practical projects and meaningful experiences.",
  },
  {
    number: "02",
    title: "CONNECT.",
    description:
      "Learn, collaborate, and grow alongside curious minds.",
  },
  {
    number: "03",
    title: "COMPETE.",
    description:
      "Challenge yourself and bring ideas to life through Kodikon.",
  },
];

export default function AboutPage() {
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowFinal(true), 3200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="inner-page about-cinema">
      <section className="about-cinema-screen">
        <div className="about-cinema-grid" />

        <header className="about-cinema-header">
          <span>EMBRIONE / ABOUT US</span>
          <span>WHO WE ARE — 001</span>
        </header>

        <div className="about-cinema-words" aria-hidden="true">
          {words.map((word, index) => (
            <span
              key={word}
              className={`about-flying-word about-word-${index + 1}`}
            >
              {word}
            </span>
          ))}
        </div>

        <div
          className={`about-cinema-reveal ${showFinal ? "is-visible" : ""}`}
          aria-live="polite"
        >
          <p className="about-cinema-kicker">TECHNOLOGY / COMMUNITY / FUTURE</p>
          <h1>
            WE ARE
            <br />
            <span>EMBRIONE.</span>
          </h1>
          <p className="about-cinema-subtitle">
            Curious minds. Bold ideas. A future we build together.
          </p>
          <a href="#about-story" className="about-cinema-scroll">
            DISCOVER OUR STORY <span>↓</span>
          </a>
        </div>

        <div className="about-cinema-status">
          <span className="about-cinema-dot" />
          <span>IDENTITY FILE</span>
          <span className="about-cinema-status-blue">
            / ESTABLISHED BY CURIOSITY
          </span>
        </div>

        <div className="about-cinema-bottom-line" />
      </section>

      <section className="about-cinema-story" id="about-story">
        <div className="about-cinema-section-tag">
          <span>01</span> / OUR STORY
        </div>

        <div className="about-cinema-story-grid">
          <div>
            <p className="about-cinema-overline">MORE THAN TECHNOLOGY.</p>
            <h2>
              A place for
              <br />
              <span>what comes next.</span>
            </h2>
          </div>

          <p className="about-cinema-description">
            The Embrione is the technology vertical under the Department of
            Computer Science and Engineering at PES University. We bring
            curious minds together to explore technology, build meaningful
            projects, and create experiences that inspire innovation.
            Through collaborative learning, technical initiatives, and
            Kodikon, our 24-hour national hackathon, we create spaces where
            ideas turn into action.
          </p>
        </div>
      </section>

      <section className="about-cinema-principles">
        <div className="about-cinema-section-tag">
          <span>02</span> / WHAT DRIVES US
        </div>

        <div className="about-cinema-principles-heading">
          <h2>
            THREE WORDS.
            <br />
            <span>ONE COMMUNITY.</span>
          </h2>
          <p>
            Curiosity starts the journey. Collaboration makes it matter.
            Creation makes it real.
          </p>
        </div>

        <div className="about-cinema-cards">
          {pillars.map((pillar) => (
            <article className="about-cinema-card" key={pillar.number}>
              <div className="about-cinema-card-top">
                <span>{pillar.number} / PRINCIPLE</span>
                <span>↗</span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div className="about-cinema-card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="about-cinema-kodikon">
        <div>
          <p className="about-cinema-overline">03 / OUR FLAGSHIP HACKATHON</p>
          <h2>
            IDEAS INTO
            <br />
            <span>ACTION.</span>
          </h2>
          <p>
            Kodikon brings teams together for 24 hours of building, problem
            solving, experimentation, and innovation. It's where possibilities
            become prototypes and collaboration takes centre stage.
          </p>
        </div>

        <div className="about-cinema-kodikon-mark" aria-hidden="true">
          <span>K</span>
          <i />
          <small>24 HOURS / BUILD / CREATE</small>
        </div>
      </section>

      <footer className="about-cinema-footer">
        <span>EMBRIONE / PES UNIVERSITY</span>
        <span>DRIVEN BY CURIOSITY. BUILT TO CREATE.</span>
      </footer>
    </main>
  );
}
