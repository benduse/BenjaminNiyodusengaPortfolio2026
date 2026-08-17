import { skills } from '../data/skills.js'
import Reveal from './Reveal.jsx'

export default function TechStack() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section_heading">
            <span className="eyebrow">Technical Stack</span>
            <h2>Tools I build with</h2>
            <p>The projects above are the real evidence — this is simply the toolkit behind them.</p>
          </div>
        </Reveal>
        <div className="techstack_grid">
          {skills.map((group) => (
            <Reveal key={group.category}>
              <div className="techstack_card surface_card">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
