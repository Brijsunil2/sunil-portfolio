import "./EducationSection.scss";
import { educationData } from "../../data/educationData";
import useIntersectionAnimation from "../../components/hooks/useIntersectionAnimation";
import ModalOpenBtn from "../../components/Modal/ModalOpenBtn";

const EducationSection = () => {
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
    <section
      id="educationSection"
      className="education-section wrapper-width-xl section-bottom-margin"
    >
      <hr />
      <h2>Education</h2>
      {educationData.map((education, index) => (
        <article key={index} className="education-article">
          <div className="education-img-container initial" ref={slideInLeftRef}>
            {education.image && (
              <ModalOpenBtn>
                <div className="education-img-container">
                  <img
                    className="education-img"
                    src={education.image}
                    alt={education.imageAlt}
                    loading="lazy"
                  />
                </div>
              </ModalOpenBtn>
            )}
          </div>
          <div className="education-text-container initial" ref={slideInRightRef}>
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
