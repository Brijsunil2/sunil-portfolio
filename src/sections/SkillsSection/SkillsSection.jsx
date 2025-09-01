import "./SkillsSection.scss";
import { firstLetterUpper } from "../../utils/utils";
import useIntersectionAnimation from "../../components/hooks/useIntersectionAnimation";
import { skillsData } from "../../portfolioData";

const SkillsSection = () => {
  const slideInRef = useIntersectionAnimation((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("skill-slide-in");
    }
  });

  return (
    <section
      id="skillsSection"
      className="skills-section wrapper-width-xl section-bottom-margin"
    >
      <hr />
      <h2>Skills</h2>
      {Object.keys(skillsData).map((key) => (
        <article key={key} className={`skill-subsection skill-${key}`}>
          <h3>{firstLetterUpper(key)}</h3>
          <div className="skills-wrapper">
            {skillsData[key].map((skill, index) => (
              <div
                key={index}
                className="skill"
                ref={slideInRef}
                style={{
                  "--delay": `${index * 50}ms`,
                }}
              >
                {skill.iconSrc && (
                  <div className="image-wrapper">
                    <img src={skill.iconSrc} alt={skill.title} />
                  </div>
                )}
                <p className="skills-title">{skill.title}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
      <hr />
    </section>
  );
};

export default SkillsSection;
