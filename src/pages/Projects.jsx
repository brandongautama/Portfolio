import { projects } from "../constants";
import Section from "../components/Section";

const ProjectLink = ({ href, children }) => {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="text-sm text-link"
    >
      {children}
      {external ? " ↗" : " →"}
    </a>
  );
};

const Projects = () => (
  <Section id="projects" label="Projects">
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.name}
          className="flex flex-col rounded-xl border border-hairline bg-white p-5 transition hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-hairline">
              <img src={project.iconUrl} alt="" className={`${project.iconSize || "h-7 w-7"} object-contain`} />
            </div>
            <h3 className="font-medium text-ink">{project.name}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {project.description}
          </p>
          <p className="mt-3 font-mono text-xs text-ink-faint">
            {project.skills.join(" · ")}
          </p>
          {(project.link || project.appStoreLink) && (
            <div className="mt-auto flex gap-4 pt-4">
              {project.link && (
                <ProjectLink href={project.link}>
                  {project.link.startsWith("http") ? "Source" : "Website"}
                </ProjectLink>
              )}
              {project.appStoreLink && (
                <ProjectLink href={project.appStoreLink}>App Store</ProjectLink>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
