import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section section--muted">
      <div className="container about">
        <Reveal>
          <div className="about_content">
            <span className="eyebrow">About Me</span>
            <p>
              I'm a software developer with a background that spans science,
              business, and data. That mix taught me to think analytically,
              understand complex systems, and build solutions with both people
              and business needs in mind — not just the technical ones.
            </p>
            <p>
              I build with React, JavaScript, Node.js, Python, SQL, and REST
              APIs. I've shipped full-stack web applications, data pipelines,
              and interactive dashboards through hands-on training at CodePath
              and Revature, and I'm focused on growing into a full-stack role
              where I can keep doing that at scale.
            </p>
            <p className="about_personal_note">
              Outside of code I'm a language enthusiast — I speak English,
              French, Spanish, Kinyarwanda, and Russian. I'm coachable, curious,
              and at my best as part of a team working on something that matters.
            </p>
            <a href="#blog" className="about_story_link">
              Read my story →
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="about_quick_facts">
            <h3>Quick facts</h3>
            <ul>
              <li><span>Based in</span><span>Phoenix, AZ</span></li>
              <li><span>Focus</span><span>Full-Stack Development</span></li>
              <li><span>Languages spoken</span><span>EN · FR · ES · RW · RU</span></li>
              <li><span>Education</span><span>B.S. Integrated Science</span></li>
              <li><span>Currently</span><span>CodePath WEB102 grad</span></li>
              <li><span>Open to</span><span>Full-time roles</span></li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
