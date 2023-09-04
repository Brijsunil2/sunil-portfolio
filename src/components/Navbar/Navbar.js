import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../../assets/images/guy_on_computer.svg";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {

  const toggleNavbar = () => {
    document.querySelector("#navbarNav").classList.remove("show");
  };

  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <div className="logo-container ">
          <Link className="logo" to="/">
            <img src={Logo} alt="website logo" />
            <h1>Name</h1>
          </Link>
        </div>
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
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <motion.li
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                className="home-link"
                to="/"
                exact="true"
                activeclassname="active"
                onClick={toggleNavbar}
              >
                <FaHome />
                <h2>Home</h2>
              </NavLink>
            </motion.li>
            <motion.li
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                className="about-link"
                to="/about"
                exact="true"
                activeclassname="active"
                onClick={toggleNavbar}
              >
                <FaInfoCircle />
                <h2>About</h2>
              </NavLink>
            </motion.li>
            <motion.li
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                className="projects-link"
                to="/projects"
                exact="true"
                activeclassname="active"
                onClick={toggleNavbar}
              >
                <FaProjectDiagram />
                <h2>Projects</h2>
              </NavLink>
            </motion.li>
            <motion.li
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <NavLink
                className="contact-link"
                to="/contact"
                exact="true"
                activeclassname="active"
                onClick={toggleNavbar}
              >
                <FaEnvelope />
                <h2>Contact</h2>
              </NavLink>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
