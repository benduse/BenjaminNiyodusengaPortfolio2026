import { useMemo, useState } from 'react'
import { projects, filters } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectDetails from './ProjectDetails.jsx'
import Reveal from './Reveal.jsx'

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((p) => p.category.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Featured Projects</span>
            <h2>What I've built</h2>
            <p>A selection of applications and technical projects I've built while developing my full-stack engineering skills.</p>
          </div>
        </Reveal>

        <div className="filter-bar" role="group" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-chip ${activeFilter === f ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((p) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
