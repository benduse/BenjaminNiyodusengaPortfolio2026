export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project_card surface_card">
      <button className="project_card_preview" onClick={() => onOpen(project)} aria-label={`View details for ${project.title}`}>
        <span>{project.title}</span>
      </button>
      <div className="project_card_body">
        <h3 className="project_card_title">{project.title}</h3>
        <p className="project_card_tagline">{project.tagline}</p>
        <div className="project_card_tech_tags flex_wrap_row">
          {project.technologies.slice(0, 5).map((t) => (
            <span className="tech_badge" key={t}>{t}</span>
          ))}
        </div>
        <div className="project_card_footer">
          <button className="project_card_details_btn" onClick={() => onOpen(project)}>
            View case study →
          </button>
          <div className="project_card_external_links">
            {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">View Code</a>}
          </div>
        </div>
      </div>
    </article>
  )
}
