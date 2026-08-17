import { useEffect, useRef } from 'react'

export default function ProjectDetails({ project, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="project_modal_overlay" onClick={onClose} role="presentation">
      <div
        className="project_modal surface_card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project_modal_title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project_modal_close_btn" ref={closeBtnRef} onClick={onClose} aria-label="Close project details">
          ✕
        </button>

        <span className="project_modal_category">{project.category.join(' · ')}</span>
        <h2 id="project_modal_title">{project.title}</h2>
        <p style={{ color: 'var(--muted)', marginTop: 10 }}>{project.tagline}</p>
        <div className="project_modal_architecture">{project.architecture}</div>

        <div className="project_modal_section">
          <h4>Overview</h4>
          <p>{project.problem}</p>
        </div>

        <div className="project_modal_section">
          <h4>My Role</h4>
          <p>{project.role}</p>
        </div>

        <div className="project_modal_section">
          <h4>Key Features</h4>
          <ul>
            {project.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {project.challenges.length > 0 && (
          <div className="project_modal_section">
            <h4>Challenges &amp; Solutions</h4>
            {project.challenges.map((c) => (
              <div className="project_modal_challenge" key={c.challenge}>
                <p><b>Challenge:</b> {c.challenge}</p>
                <p style={{ marginTop: 6 }}><b>Solution:</b> {c.solution}</p>
              </div>
            ))}
          </div>
        )}

        <div className="project_modal_section">
          <h4>Technologies</h4>
          <div className="project_card_tech_tags flex_wrap_row">
            {project.technologies.map((t) => <span className="tech_badge" key={t}>{t}</span>)}
          </div>
        </div>

        <div className="project_modal_cta_group">
          {project.liveDemo && <a className="btn btn_primary" href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
          {project.github && <a className="btn btn_secondary" href={project.github} target="_blank" rel="noreferrer">View Code</a>}
        </div>
      </div>
    </div>
  )
}
