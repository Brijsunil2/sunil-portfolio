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
    <div className="project-item">
      <div className="images">

      </div>
      <h3>{name}</h3>
      <small>{type}</small>
      {githubRepo && (
        <a className="project-repo" href={githubRepo}>
          <FaGithub /> Project Repository
        </a>
      )}
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
  );
};

export default Project;
