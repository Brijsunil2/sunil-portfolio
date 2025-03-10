import ButtonPills from "../../components/ButtonPills/ButtonPills";
import Carousel from "../../components/Carousel/Carousel";
import ModalOpenBtn from "../../components/Modal/ModalOpenBtn";
import { HiLink } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import useIntersectionAnimation from "../../components/hooks/useIntersectionAnimation";

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
  const slideInLeftRef = useIntersectionAnimation((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-from-left");
    }
  })

  const slideInRightRef = useIntersectionAnimation((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-from-right");
    }
  })

  return (
    <article className="project-article">
      <div className="project-carousel initial" ref={slideInLeftRef}>
        {images && images.length > 0 && (
          <ModalOpenBtn>
            <Carousel imageUrls={images} />
          </ModalOpenBtn>
        )}
      </div>
      <div className="project-content-container initial" ref={slideInRightRef}>
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
