import { useEffect, useState } from 'react'

const verbs = ['Building', 'Construyendo', 'Construisant', 'Kubaka']

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % verbs.length), 22200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div>
          <span className="hero__kicker">Full-Stack Software Developer</span>
          <h1 className="hero__name">
            <span className="hero__cycle">{verbs[index]}</span> for the web.
            <br />
            I'm Benjamin Niyodusenga.
          </h1>
          <p className="hero__statement">
            I build user-focused web applications and data-driven software by
            combining frontend engineering, backend development, and analytical
            problem solving.
          </p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="hero__links">
            <a
              href="https://github.com/benduse"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/benjaminniyodusenga/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:benjaminiyodusenga@gmail.com">
              benjaminiyodusenga@gmail.com
            </a>
          </div>
          <div className="hero__scroll">
            <span className="hero__scroll-line" />
            Scroll to explore
          </div>
        </div>

        <div className="hero__panel">
          <h3>Working across the stack</h3>
          <div className="hero__stack-list">
            {[
              "React",
              "Node.js",
              "Python",
              "Java",
              "SQL",
              "Supabase",
              "PySpark",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p className="hero__panel-note">
            English · Español · Français · Ikinyarwanda — I build for people
            across languages, not just across layers.
          </p>
        </div>
      </div>
    </section>
  );
}
