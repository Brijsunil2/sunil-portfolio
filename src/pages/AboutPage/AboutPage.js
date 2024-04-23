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
              My main selection of courses focused on web development and
              software engineering. Topics include Object-Oriented Programming,
              Data Structures, Computer Networks, Internet Computing, Algorithm
              Design and Analysis, Big Data, AI, Databases.
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
            <h4>Best Buy - Geek Squad</h4>

            <h5>Geek Squad in Home Agent </h5>
            <p>
              This role includes the same responsibilities as a geek squad
              agent, plus some extra responsibilities. Additionals include
              providing professional service to in home and business clients.
              Services include troubleshooting, installing or setting up tv's,
              computers and networks.
            </p>

            <h5>Agent Advisor </h5>
            <p>
              This role includes the same responsibilities as a geek squad
              agent, plus some extra responsibilities. Additional
              responsibilities include using computer knowledge to assist with
              computer sales and being able to run the customer service counter.
            </p>

            <h5>Geek Squad Agent 1 </h5>
            <p>
              Assist clients with tech issues they are currently having and
              offer them an appropriate solution. Other responsibilities include
              setting up and doing software fixes to laptops and desktops.
              <br />
              <br />A few of my achievements would be being able to flex
              throughout the store, being able to run most of the precinct
              alone, and being a part of Best Buy's leadership program,
              Learn2Lead.
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
              Mark, explain, and assist with issues regarding student
              assignments.
              <br />
              <br />
              Topics required to know are basic networking protocols such as IP,
              TCP and UDP, Dijkstra's Shortest Path Algorithm, and basic
              routing.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2">
            <p className="time">Summer 2017</p>
          </div>
          <div className="col-sm-10">
            <h4>Summer Camp Volunteer</h4>
            <h5>KidsAbility Centre for Child Development</h5>
            <p>
              Aided with Minecraft and Lego camps and made sure that camps were
              running smoothly.
              <br />
              <br />
              Ensure the safety of children when participating in camp events.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
