import "./Navbar.scss";
import { motion } from "framer-motion";
import Logo from "../../assets/images/guy_on_computer.svg";
import { GiSkills } from "react-icons/gi";
import { FaHammer , FaProjectDiagram, FaEnvelope, FaBookOpen  } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <motion.div
          className="logo-container"
          transition={{ duration: 0.1 }}
          whileTap={{ scale: 0.7 }}
        >
          <a className="logo" href="/">
            <img src={Logo} alt="website logo" />
            <h1>
              Sunil's <br /> Portfolio
            </h1>
          </a>
        </motion.div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
          <motion.li
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="education-link" href="#education">
                <FaBookOpen />
                <h2>Education</h2>
              </a>
            </motion.li>
            <motion.li
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="skills-link" href="#skills">
                <GiSkills />
                <h2>Skills</h2>
              </a>
            </motion.li>
            <motion.li
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="projects-link" href="#projects">
                <FaProjectDiagram />
                <h2>Projects</h2>
              </a>
            </motion.li>
            <motion.li
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="experiences-link" href="#experiences">
                <FaHammer  />
                <h2>Experiences</h2>
              </a>
            </motion.li>
            <motion.li
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className="contact-link" href="#contact">
                <FaEnvelope />
                <h2>Contact</h2>
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
