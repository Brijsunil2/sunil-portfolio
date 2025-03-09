import "./ExperienceSection.scss";
import useSectionAnimation from "../../components/hooks/useSectionAnimation";
import { experienceData } from "../../portfolioData";

const ExperienceSection = () => {
  const slideInRef = useSectionAnimation((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });

  return (
    <section
      id="experiences"
      className="experiences-section section-bottom-margin wrapper-width-xl initial-slide-in"
      ref={slideInRef}
    >
      <hr />
      <h2>Experience</h2>
      {experienceData.map((experience, i) => (
        <article key={i} className="experience-wrapper">
          <h3>{experience.company}</h3>
          <small className="duration-label">{experience.duration}</small>
          {experience.positions.map((position, j) => (
            <div key={j}>
              <h4>{position.jobTitle}</h4>
              <ul>
                {position.responsibilities.map((responsibility, k) => (
                  <li key={k}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      ))}
      <hr />
    </section>
  );
};

export default ExperienceSection;
