import "./EducationSection.scss";

import { useState } from "react";
import { educationData } from "../../portfolioData";
import Modal from "../../components/Modal/Modal";
import ModalOverlay from "../../components/Modal/ModalOverlay";

const EducationSection = () => {
  const [modalData, setModalData] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  return (
    <section
      id="educationSection"
      className="education-section wrapper-width-xl section-bottom-margin"
    >
      <hr />
      <h2>Education</h2>
      {educationData.map((education, index) => (
        <article key={index} className="education-article">
          <div className="image-wrapper">
            {education.image && (
              <>
                <ModalOverlay
                  togglerFunc={() => {
                    setModalData(education);
                    setModalActive(true);
                  }}
                >
                  <img src={education.image} alt={education.imageAlt} />
                </ModalOverlay>
              </>
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
      <Modal active={modalActive} onClose={() => setModalActive(false)}>
        <div className="image-wrapper">
          {modalData && <img src={modalData.image} alt={modalData.imageAlt} />}
        </div>
      </Modal>
    </section>
  );
};

export default EducationSection;
