import { education, certifications } from '../data/education.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section section--tight section--muted">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Education &amp; Certifications</span>
            <h2>Background</h2>
          </div>
        </Reveal>

        <div className="edu-grid">
          <Reveal>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-school">{e.school} — {e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c.name}>
                  <div>
                    <p className="cert-name">{c.name}</p>
                    <p className="cert-meta">{c.issuer} · {c.date}</p>
                  </div>
                  {c.link && <a className="cert-link" href={c.link} target="_blank" rel="noreferrer">View credential ↗</a>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
