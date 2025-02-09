import ButtonPills from "../../components/ButtonPills/ButtonPills";
import { HiLink } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const Project = ({
  title,
  description,
  technologies,
  image,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="row m-1 project-item">
      <div className="col-lg-3">
        {image && (
          <a href={image} target="_blank" rel="noreferrer">
            <img
              src={image}
              alt={`${title} screenshot`}
              className="project-image"
            />
          </a>
        )}
      </div>
      <div className="col">
        <h4>{title}</h4>
        <h5>{liveLink ? "Frontend / Backend" : "Frontend"}</h5>
        <div className="d-flex mb-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="d-flex align-items-center me-3"
          >
            <FaGithub className="m-1" /> Github Repo
          </a>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <HiLink className="m-1" /> Visit Site
            </a>
          )}
        </div>
        <p>{description}</p>
        <div className="pills-list d-flex flex-wrap">
          {technologies.map((tech) => (
            <ButtonPills name={tech} key={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
