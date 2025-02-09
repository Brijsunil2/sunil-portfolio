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

      <h4>Software / Web Developer</h4>
      <p>
        Motivated Computer Science graduate with a strong foundation in
        programming and a passion for software and web development. Eager to
        apply academic knowledge, skills and relevant work experience to
        effectively contribute to innovative projects. Explore my portfolio to
        see how I bring ideas to life.
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
