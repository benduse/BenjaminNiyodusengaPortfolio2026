export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <button className="project-card__preview" onClick={() => onOpen(project)} aria-label={`View details for ${project.title}`}>
        <span>{project.title}</span>
      </button>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <div className="project-card__tags">
          {project.technologies.slice(0, 5).map((t) => (
            <span className="badge" key={t}>{t}</span>
          ))}
        </div>
        <div className="project-card__footer">
          <button className="project-card__more" onClick={() => onOpen(project)}>
            View case study →
          </button>
          <div className="project-card__links">
            {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">View Code</a>}
          </div>
        </div>
      </div>
    </article>
  )
}
