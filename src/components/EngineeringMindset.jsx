import { mindset } from '../data/skills.js'
import Reveal from './Reveal.jsx'

export default function EngineeringMindset() {
  return (
    <section className="section section--tight section--muted">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">How I Build</span>
            <h2>Principles, not slogans</h2>
          </div>
        </Reveal>
        <div className="mindset-grid">
          {mindset.map((m) => (
            <Reveal key={m.title}>
              <div className="mindset-card">
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
