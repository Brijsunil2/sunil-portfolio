import ButtonPills from "../../components/ButtonPills/ButtonPills";
import { HiLink } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const Project = ({
  name,
  type,
  githubRepo,
  liveLink,
  text,
  notes,
  images,
  skills,
}) => {
  return (
    <article className="project-article">
      <div className="image-wrapper"></div>
      <div>
        <h3>
          {name}
          {githubRepo && (
            <a
              className="project-repo"
              href={githubRepo}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          )}
        </h3>
        <small>{type}</small>

        {liveLink && (
          <a className="project-livelink" href={liveLink}>
            <HiLink /> Live Link
          </a>
        )}
        <p>{text}</p>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <div className="skill-pills">
          {skills.map((skill, index) => (
            <ButtonPills key={index} img={skill.iconSrc} name={skill.text} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
