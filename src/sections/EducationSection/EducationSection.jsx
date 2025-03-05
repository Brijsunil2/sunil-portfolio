import "./EducationSection.scss";

import { educationData } from "../../portfolioData";

const EducationSection = () => {

  return (
    <section
      id="educationSection"
      className="education-section wrapper-width-xl section-bottom-margin"
    >
      <hr />
      <h2>Education</h2>
      {educationData.map((education, index) => (
        <article key={index} className="education-article">
          <div className="education-img-container">
            {education.image && (
              <img className="education-img" src={education.image} alt={education.imageAlt} loading="lazy"/>
            )}
          </div>
          <div>
            <h3>{education.place}</h3>
            <h4>{education.subText}</h4>
            <small className="duration-label">{education.duration}</small>
            <p className="summary">{education.summary}</p>
          </div>
        </article>
      ))}
      <hr />
    </section>
  );
};

export default EducationSection;
