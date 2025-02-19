import "./EducationSection.scss";

import { educationData } from "../../portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="education-section section-wrapper">
      <h2>Education</h2>
      {educationData.map((education, index) => (
        <article key={index} className="education">
          <h3>{education.place}</h3>
          <h4>{education.subText}</h4>
          <p className="duration-label">{education.duration}</p>
          {education.image && (
            <img src={education.image} alt={education.imageAlt} />
          )}
          <p className="summary">{education.summary}</p>
        </article>
      ))}
    </section>
  );
};

export default EducationSection;
