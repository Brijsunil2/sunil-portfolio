import "./IntroSection.scss";
import useIntersectionAnimation from "../../components/hooks/useIntersectionAnimation";
import { introData } from "../../data/introData";

const IntroSection = () => {
  const slideInRef = useIntersectionAnimation((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });

  return (
    <section
      className="intro-section wrapper-width-md initial-slide-in"
      ref={slideInRef}
    >
      <div className="intro-section-wrapper">
        <h1>
          Hi, I'm <span>{introData.name}.</span>
        </h1>
        <h5>
          {introData.qualifications.map((qualification, index) => (
            <span key={index}>
              {qualification}
              {index < introData.qualifications.length - 1 && " | "}
            </span>
          ))}
        </h5>
        <p>{introData.intro}</p>

        <div className="socials-container">
          {introData.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.target ? "_blank" : ""}
              rel="noreferrer"
            >
              <link.Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
