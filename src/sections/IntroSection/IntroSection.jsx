import "./IntroSection.scss";
import { introData } from "../../portfolioData";

const IntroSection = () => {
  return (
    <section className="intro-section section-wrapper">
      <h2>
        Hi, I'm <span>{introData.name}</span>
      </h2>
      <hr />
      <h4>
        {introData.qualifications.map((qualification, index) => (
          <span key={index}>
            {qualification}
            {index < introData.qualifications.length - 1 && " | "}
          </span>
        ))}
      </h4>
      <p>{introData.intro}</p>

      <div className="socials-container">
        {introData.links.map((link, index) => (
          <div
            key={index}
          >
            <a href={link.href} target={link.target ? "_blank" : ""}>
              <link.Icon />
              <span>{link.text}</span>
            </a>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default IntroSection;
