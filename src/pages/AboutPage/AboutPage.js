import "./AboutPage.scss";
import { motion } from "framer-motion";
import TempImage from "../../assets/images/blue_box.png";
import { DiEclipse } from "react-icons/di";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoPython,
  BiLogoJava,
  BiLogoVisualStudio,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { FaSass, FaGithub, FaBootstrap, FaGitAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <motion.div
      className="aboutpage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>
      <p>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
      </p>

      <div className="skills-container">
        <h3>Languages</h3>
        <p>
          <BiLogoHtml5 color="#f06529" title="HTML5" />
          <BiLogoCss3 color="#264de4" title="CSS" />
          <FaSass color="#cc6699" title="Sass" />
          <BiLogoJavascript color="#f0db4f" title="JavaScript" />
          <BiLogoPython color="#4B8BBE" title="Python" />
          <BiLogoJava color="#5382a1" title="Java" />
        </p>
        <h3>Frameworks</h3>
        <p>
          <BiLogoReact color="#61DBFB" title="React" />
          <BiLogoMongodb color="#4DB33D" title="MongoDB" />
          <FaBootstrap color="#712cf9" title="Bootstrap" />
        </p>
        <h3>Tools</h3>
        <p>
          <BiLogoVisualStudio color="#0078d7" title="VsCode" />
          <DiEclipse color="#341d19" title="Eclipse" />
          <FaGithub color="#171515" title="Github" />
          <FaGitAlt color="#F1502F" title="Git" />
        </p>
      </div>

      <div className="card mb-3 education-card">
        <div className="row g-0">
          <div className="col-md-4 card-img-container">
            <img src={TempImage} alt="temp image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Education</h3>
              <p className="card-text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3 experience-card">
        <div className="row g-0">
          <div className="col-md-4 card-img-container">
            <img src={TempImage} alt="temp image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Experience</h3>
              <p className="card-text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classical Latin literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
