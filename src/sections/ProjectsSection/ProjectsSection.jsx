import "./ProjectsSection.scss";
import { projectsData } from "../../portfolioData";
import Project from "./Project";

const ProjectsSection = () => {

  return (
    <section
      className="projects-section section-bottom-margin wrapper-width-xl"
    >
      <hr />
      <h2>Projects</h2>
      <article className="projects-article">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            type={project.type}
            githubRepo={project.githubRepo}
            liveLink={project.liveLink}
            text={project.text}
            notes={project.notes}
            images={project.images}
            skills={project.skills}
          />
        ))}
      </article>
      <hr />
    </section>
  );
};

export default ProjectsSection;
