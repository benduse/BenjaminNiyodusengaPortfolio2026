import { experience } from '../data/experience.js'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2>Where I've trained and built</h2>
          </div>
        </Reveal>

        <div className="timeline">
          {experience.map((e) => {
            const related = projects.find((p) => p.id === e.relatedProjectId)
            return (
              <Reveal key={e.org} as="div" className="timeline-item">
                <div>
                  <p className="timeline-item__period">{e.period}</p>
                  <p className="timeline-item__role">{e.role}</p>
                </div>
                <div>
                  <h3 className="timeline-item__org">{e.org}</h3>
                  <p className="timeline-item__summary">{e.summary}</p>
                  <div className="timeline-item__tags">
                    {e.highlights.map((h) => <span className="badge" key={h}>{h}</span>)}
                  </div>
                  {related && (
                    <a className="timeline-item__link" href="#projects">
                      See related project: {related.title} →
                    </a>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
