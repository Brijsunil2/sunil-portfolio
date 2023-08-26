import "./HomePage.scss";
import { NavLink } from "react-router-dom";
import Picture from "../../assets/images/dark_gray_box.png";
import { FaEnvelope } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage-container d-flex flex-column align-items-center justify-content-center">
      <h2>
        Hi, I'm NAME
      </h2>
      <h3>I am a TITLE</h3>
      <img src={Picture} alt="picture" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
        id consectetur purus ut. Porttitor lacus luctus accumsan tortor
        posuere.
      </p>

      <NavLink
        className="contact-link"
        to="/contact"
        exact="true"
      >
        <FaEnvelope />
        Contact Me
      </NavLink>
    </div>
  );
};

export default HomePage;
