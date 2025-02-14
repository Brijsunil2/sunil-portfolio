import "./IntroSection.scss";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const IntroSection = () => {
  return (
    <motion.section
      className="intro-section d-flex flex-column"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>
        Hi, I'm <span>Sunil Brijlall</span>
      </h2>
      <hr/>
      <h4>Computer Science Graduate | Full-Stack Developer</h4>
      <p>
        Motivated Computer Science graduate with a solid foundation in
        programming and a deep passion for full-stack development. I am eager to
        apply my academic knowledge, practical skills, and relevant work
        experience to contribute effectively to innovative and challenging
        projects. My expertise spans HTML, CSS, JavaScript, and React, with a
        focus on creating responsive and user-friendly applications. Explore my
        portfolio to see how I bring ideas to life.
      </p>

      <div className="socials-container">
        <motion.div
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.linkedin.com/in/sunil-brijlall/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </motion.div>
        <motion.div
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://github.com/Brijsunil2"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>Github</span>
          </a>
        </motion.div>
        <motion.div
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a className="contact-link" href="#contact" exact="true">
            <FaEnvelope />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
      <hr/>
    </motion.section>
  );
};

export default IntroSection;
