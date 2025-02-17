import "./IntroSection.scss";
import { motion } from "framer-motion";
import { introData } from "../../portfolioData";

const IntroSection = () => {
  return (
    <section className="intro-section d-flex flex-column">
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
          <motion.div
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={index}
          >
            <a href={link.href} target={link.target ? "_blank" : ""}>
              <link.Icon />
              <span>{link.text}</span>
            </a>
          </motion.div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default IntroSection;
