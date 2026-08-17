import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section section--muted">
      <div className="container about">
        <Reveal>
          <div className="about_content">
            <span className="eyebrow">About Me</span>
            <p>
              I'm a software developer who discovered my passion for technology through a unique
              journey combining science, business, data, and problem-solving.
            </p>
            <p>
              With experience in React, JavaScript, Node.js, Python, SQL, REST APIs, and data
              engineering, I enjoy turning ideas and real-world problems into useful applications.
            </p>
            <p>
              My background in Integrated Science and Logistics &amp; Operations taught me to think
              analytically, understand complex systems, and build solutions with both people and
              business needs in mind.
            </p>
            <p>
              Through hands-on projects and training, including Revature and CodePath, I've built
              interactive web applications, dashboards, APIs, and data-driven solutions while
              continuously strengthening my full-stack skills.
            </p>
            <p>
              Today, I'm focused on growing as a full-stack software developer, combining
              creativity, engineering, and data to build scalable applications that solve
              meaningful problems.
            </p>
            <p className="about_personal_note">
              Outside of code, I'm a lifelong learner and language enthusiast — I speak English,
              French, Spanish, Kinyarwanda, and Russian, and I'm coachable, curious, and glad to contribute
              as part of a team.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="about_quick_facts">
            <h3>Quick facts</h3>
            <ul>
              <li><span>Based in</span><span>Phoenix, AZ</span></li>
              <li><span>Focus</span><span>Full-Stack Development</span></li>
              <li><span>Languages spoken</span><span>EN · FR · ES · RW . RU</span></li>
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
