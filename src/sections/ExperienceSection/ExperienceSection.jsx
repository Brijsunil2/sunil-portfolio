import "./ExperienceSection.scss";
import { experienceData } from "../../portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experiences" className="experiences-section">
      <h2>Experience</h2>
      {experienceData.map((experience) => (
        <article className="experience-wrapper">
          <h3>{experience.company}</h3>
          <p className="duration-label">{experience.duration}</p>
          {
            experience.positions.map((position) => (
              <>
                <h4>{position.jobTitle}</h4>
                <ul>
                {
                  position.responsibilities.map((responsibility) => (
                    <li>{responsibility}</li>
                  ))
                }
                </ul>
              </>
            ))
          }
        </article>
      ))}
    </section>
  );
};

export default ExperienceSection;
