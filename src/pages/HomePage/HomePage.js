import "./HomePage.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Picture from "../../assets/images/guy_on_computer.svg";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => {
  return (
    <motion.div
      className="homepage-container d-flex flex-column align-items-center"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>
        Hi, I'm <span>Sunil Brijlall</span>
      </h2>
      <h3>Welcome to my portfolio!</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 500 500"
        width="300px"
        height="300px"
        id="blobSvg"
      >
        <path id="blob" fill="#93B1A6">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
          />
        </path>
        <image
          width="300px"
          height="300px"
          href={Picture}
          alt="picture"
          x="100"
          y="100"
        />
      </svg>
      <h4>Software / Web Developer</h4>
      <p>
        Motivated Computer Science graduate with a strong foundation in
        programming and a passion for software and web development. Eager to
        apply academic knowledge, skills and relevant work experience to
        effectively contribute to innovative projects. Explore my portfolio to see how I bring ideas to life.
      </p>

      <motion.div
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink className="contact-link" to="/contact" exact="true">
          <FaEnvelope />
          Contact Me
        </NavLink>
      </motion.div>

      <div className="socials-container">
        <motion.div
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.linkedin.com/in/sunil-brijlall/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </motion.div>
        <motion.div
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://github.com/Brijsunil2"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
