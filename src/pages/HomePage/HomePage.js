import "./HomePage.scss";
import { NavLink } from "react-router-dom";
import Picture from "../../assets/images/guy_on_computer.svg";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage-container d-flex flex-column align-items-center">
      <h2>Hi, I'm NAME</h2>
      <h3>I am a TITLE</h3>
      <img src={Picture} alt="picture" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sagittis id
        consectetur purus ut. Porttitor lacus luctus accumsan tortor posuere.
      </p>

      <NavLink className="contact-link" to="/contact" exact="true">
        <FaEnvelope />
        Contact Me
      </NavLink>

      <div className="socials-container">
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
