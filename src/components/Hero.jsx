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
      <div className="container hero_inner">
        <div>
          <span className="hero_tagline_kicker">Full-Stack Software Developer</span>
          <h1 className="hero_name">
            <span className="hero_verb_cycle">{verbs[index]}</span> for the web.
            <br />
            I'm Benjamin Niyodusenga.
          </h1>
          <p className="hero_intro_statement">
            I build user-focused web applications and data-driven software by
            combining frontend engineering, backend development, and analytical
            problem solving.
          </p>
          <div className="hero_cta_group">
            <a href="#projects" className="btn btn_primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn_secondary">
              Contact Me
            </a>
          </div>
          <div className="hero_social_links">
            <a href="https://github.com/benduse" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/benjaminniyodusenga/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:benjaminiyodusenga@gmail.com">
              benjaminiyodusenga@gmail.com
            </a>
          </div>
          <div className="hero_scroll_hint">
            <span className="hero_scroll_line" />
            Scroll to explore
          </div>
        </div>

        <div className="hero_stack_panel">
          <h3>Working across the stack</h3>
          <div className="hero_stack_list flex_wrap_row">
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
          <p className="hero_stack_panel_note">
            English · Español · Français · Ikinyarwanda — I build for people
            across languages, not just across layers.
          </p>
        </div>
      </div>
    </section>
  )
}
