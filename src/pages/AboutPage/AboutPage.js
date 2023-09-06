import "./AboutPage.scss";
import { motion } from "framer-motion";
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
import { SiMysql } from "react-icons/si";
import CProgramming from "../../assets/images/c-programming.svg";

const AboutPage = () => {
  return (
    <motion.div
      className="aboutpage-container"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>About Me</h2>
      <p>
        I'm Sunil, a fairly recent university graduate and I am passionate about web development. Personally I am motivated to learn, improve and would be happy to use my web development skills in a professional setting. I love doing both frontend and backend tasks since I aspire to eventually become a full stack developer. 
        <br/>

      </p>

      <div className="skills-container">
        <h3>Languages</h3>
        <p>
          <BiLogoHtml5 color="#f06529" title="HTML5" />
          <BiLogoCss3 color="#264de4" title="CSS" />
          <FaSass color="#cc6699" title="Sass" />
          <BiLogoJavascript color="#f0db4f" title="JavaScript" />
          <SiMysql color="#00758F" title="SQL" />
          <BiLogoPython color="#4B8BBE" title="Python" />
          <BiLogoJava color="#5382a1" title="Java" />
          <img src={CProgramming} />
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

      <div className="education-container">
        <h2>Education</h2>
        <h4 className="">Time</h4>
        <p>
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur
        </p>
      </div>

      <h2>Experience</h2>
      <div className="experience-container">
        <p>
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical Latin literature from 45 BC, making it over 2000 years old.
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
