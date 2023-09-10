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
      <p className="aboutme-p">
        I'm Sunil, a fairly recent university graduate and I am passionate about
        web development. Personally I am motivated to learn, improve and would
        be happy to use my web development skills in a professional setting. I
        love doing both frontend and backend tasks since I aspire to eventually
        become a full stack developer.
        <br />
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
          <img src={CProgramming} title="C" />
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

      <h2>Education</h2>
      <div className="education-container">
        <div className="row">
          <div className="col-sm-2">
            <p className="time">2022</p>
          </div>
          <div className="col-sm-10">
            <h4>Wilfrid Laurier University</h4>
            <h5>Honours BSc Computer Science</h5>
            <p>
              My main selection of courses revolved around frontend and backend
              development. Other topics includes Object Oriented Programming,
              Data Structures, Computer Networks, Internet Computing, Algorithm
              Design and Analysis, Software Engineering, Big Data, AI,
              Databases.
            </p>
          </div>
        </div>
      </div>

      <h2>Experience</h2>
      <div className="experience-container">
        <div className="row">
          <div className="col-sm-2">
            <p className="time">Summer 2022 - Present</p>
          </div>
          <div className="col-sm-10">
            <h4>Geek Squad Agent 1</h4>
            <h5>Best Buy</h5>
            <p>
              Assist clients with tech issues they are currently having and
              offering them an appropriate solution. Other responsibilities
              include setting up and doing software fixes to laptops and
              desktops.
              <br />
              <br />
              Few of my achievements would be, being able to flex throughout the
              store, being able to run most of the precinct alone and being a
              part of Best Buy's leadership program Learn2Lead.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <p className="time">Fall 2021</p>
          </div>
          <div className="col-sm-10">
            <h4>Marker / IA for Networking Course</h4>
            <h5>Wilfrid Laurier University</h5>
            <p>
              Mark, explain, assist with issues regarding student assignments.
              <br />
              <br />
              Topics required to know are basic  networking protocols such as IP,
              TCP and UDP, Dijkstra's Shortest Path Algorithm, basic routing
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
