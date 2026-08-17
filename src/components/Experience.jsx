import { experience } from '../data/experience.js'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <div className="section_heading">
            <span className="eyebrow">Experience</span>
            <h2>Where I've trained and built</h2>
          </div>
        </Reveal>

        <div className="experience_timeline">
          {experience.map((e) => {
            const related = projects.find((p) => p.id === e.relatedProjectId)
            return (
              <Reveal key={e.org} as="div" className="experience_item">
                <div>
                  <p className="experience_item_period mono_meta">{e.period}</p>
                  <p className="experience_item_role">{e.role}</p>
                </div>
                <div>
                  <h3 className="experience_item_org">{e.org}</h3>
                  <p className="experience_item_summary">{e.summary}</p>
                  <div className="experience_item_tags flex_wrap_row">
                    {e.highlights.map((h) => <span className="tech_badge" key={h}>{h}</span>)}
                  </div>
                  {related && (
                    <a className="experience_item_project_link" href="#projects">
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
