import "./SkillsSection.scss";
import { firstLetterUpper } from "../../utils/utils";

import { skillsData } from "../../portfolioData";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      {Object.keys(skillsData).map((key) => (
        <article key={key} className={`skill-subsection skill-${key}`}>
          <h3>{firstLetterUpper(key)}</h3>
          <div className="skills-wrapper">
            {skillsData[key].map((skill, index) => (
              <div key={index} className="skill">
                {skill.iconSrc && <img src={skill.iconSrc} alt={skill.title} />}
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default SkillsSection;
