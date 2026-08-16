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
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" ref={closeBtnRef} onClick={onClose} aria-label="Close project details">
          ✕
        </button>

        <span className="modal__eyebrow">{project.category.join(' · ')}</span>
        <h2 id="project-modal-title">{project.title}</h2>
        <p style={{ color: 'var(--muted)', marginTop: 10 }}>{project.tagline}</p>
        <div className="modal__arch">{project.architecture}</div>

        <div className="modal__block">
          <h4>Overview</h4>
          <p>{project.problem}</p>
        </div>

        <div className="modal__block">
          <h4>My Role</h4>
          <p>{project.role}</p>
        </div>

        <div className="modal__block">
          <h4>Key Features</h4>
          <ul>
            {project.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>

        {project.challenges.length > 0 && (
          <div className="modal__block">
            <h4>Challenges &amp; Solutions</h4>
            {project.challenges.map((c) => (
              <div className="modal__challenge" key={c.challenge}>
                <p><b>Challenge:</b> {c.challenge}</p>
                <p style={{ marginTop: 6 }}><b>Solution:</b> {c.solution}</p>
              </div>
            ))}
          </div>
        )}

        <div className="modal__block">
          <h4>Technologies</h4>
          <div className="project-card__tags">
            {project.technologies.map((t) => <span className="badge" key={t}>{t}</span>)}
          </div>
        </div>

        <div className="modal__ctas">
          {project.liveDemo && <a className="btn btn-primary" href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
          {project.github && <a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer">View Code</a>}
        </div>
      </div>
    </div>
  )
}
