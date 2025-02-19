import "./ExperienceSection.scss";
import { experienceData } from "../../portfolioData";

const ExperienceSection = () => {
  return (
    <section id="experiences" className="experiences-section">
      <h2>Experience</h2>
      {experienceData.map((experience, i) => (
        <article key={i} className="experience-wrapper">
          <h3>{experience.company}</h3>
          <p className="duration-label">{experience.duration}</p>
          {
            experience.positions.map((position, j) => (
              <div key={j}>
                <h4>{position.jobTitle}</h4>
                <ul>
                {
                  position.responsibilities.map((responsibility, k) => (
                    <li key={k}>{responsibility}</li>
                  ))
                }
                </ul>
              </div>
            ))
          }
        </article>
      ))}
    </section>
  );
};

export default ExperienceSection;
