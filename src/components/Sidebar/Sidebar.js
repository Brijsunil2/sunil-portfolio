import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import Logo from "../../assets/images/blue_box.png";
import {
  FaHome,
  FaInfoCircle,
  FaUserAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

/*
Home
About 
Resume
Projects
Contact
*/

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <Link className="logo" to="/">
          <img src={Logo} alt="website logo" />
          <h1>Name</h1>
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              className="home-link"
              to="/"
              exact="true"
              activeclassname="active"
            >
              <FaHome />
              <h2>Home</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="about-link"
              to="/about"
              exact="true"
              activeclassname="active"
            >
              <FaInfoCircle />
              <h2>About</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="resume-link"
              to="/resume"
              exact="true"
              activeclassname="active"
            >
              <FaUserAlt />
              <h2>Resume</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects-link"
              to="/projects"
              exact="true"
              activeclassname="active"
            >
              <FaProjectDiagram />
              <h2>Projects</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="contact-link"
              to="/contact"
              exact="true"
              activeclassname="active"
            >
              <FaEnvelope />
              <h2>Contact</h2>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="socials-container">
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaGithub /></a>
      </div>
    </div>
  );
};

export default Sidebar;
