import { education, certifications } from '../data/education.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section section--tight section--muted">
      <div className="container">
        <Reveal>
          <div className="section_heading">
            <span className="eyebrow">Education &amp; Certifications</span>
            <h2>Background</h2>
          </div>
        </Reveal>

        <div className="education_grid">
          <Reveal>
            <ul className="education_degrees_list">
              {education.map((e) => (
                <li key={e.degree} className="bordered_list_item">
                  <p className="education_degree_title">{e.degree}</p>
                  <p className="education_school_meta">{e.school} — {e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <ul className="certifications_list">
              {certifications.map((c) => (
                <li key={c.name} className="bordered_list_item">
                  <div>
                    <p className="certification_name">{c.name}</p>
                    <p className="certification_meta mono_meta">{c.issuer} · {c.date}</p>
                  </div>
                  {c.link && <a className="certification_credential_link" href={c.link} target="_blank" rel="noreferrer">View credential ↗</a>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
