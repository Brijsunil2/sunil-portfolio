import { motion } from "framer-motion";
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
import { TbSql } from "react-icons/tb";
import { SiMysql, SiPostgresql } from "react-icons/si";
import { DiEclipse } from "react-icons/di";
import CProgramming from "../../assets/images/c-programming.svg";

const AboutSection = () => {
  const ExperienceItem = ({ time, title, company, roles }) => (
    <div className="experience-item">
      <div className="row">
        <div className="col-sm-2">
          <p className="time">{time}</p>
        </div>
        <div className="col-sm-10">
          <h4>{title}</h4>
          {company && <h5>{company}</h5>}
          {roles.map((role, index) => (
            <div key={index}>
              <h5>{role.role}</h5>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <motion.section
      className="about-section"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="skills-container">
        <h3>Skills</h3>
        <div className="skills-section">
          <h4>Languages</h4>
          <div className="icon-list">
            <BiLogoHtml5 color="#f06529" title="HTML5" />
            <BiLogoCss3 color="#264de4" title="CSS" />
            <FaSass color="#cc6699" title="Sass" />
            <BiLogoJavascript color="#f0db4f" title="JavaScript" />
            <TbSql color="#00758F" title="SQL" />
            <BiLogoPython color="#4B8BBE" title="Python" />
            <BiLogoJava color="#5382a1" title="Java" />
            <img src={CProgramming} alt="C Programming" title="C" />
          </div>
        </div>
        <div className="skills-section">
          <h4>Frameworks</h4>
          <div className="icon-list">
            <BiLogoReact color="#61DBFB" title="React" />
            <FaBootstrap color="#712cf9" title="Bootstrap" />
          </div>
        </div>
        <div className="skills-section">
          <h4>Database Management Systems</h4>
          <div className="icon-list">
            <SiMysql color="#00758F" title="MySQL" />
            <BiLogoMongodb color="#4DB33D" title="MongoDB" />
            <SiPostgresql color="#336791" title="PostgreSQL" />
          </div>
        </div>
        <div className="skills-section">
          <h4>Tools</h4>
          <div className="icon-list">
            <BiLogoVisualStudio color="#0078d7" title="VSCode" />
            <DiEclipse color="#2C2255" title="Eclipse" />
            <FaGithub color="#171515" title="GitHub" />
            <FaGitAlt color="#F1502F" title="Git" />
          </div>
        </div>
      </section>

      <section className="education-container">
        <h2>Education</h2>
        <div className="education-item">
          <div className="row">
            <div className="col-sm-2">
              <p className="time">2022</p>
            </div>
            <div className="col-sm-10">
              <h4>Wilfrid Laurier University</h4>
              <h5>Honours BSc Computer Science</h5>
              <p>
                Focused on web development and software engineering, with
                coursework in Object-Oriented Programming, Data Structures,
                Computer Networks, Algorithm Design, Big Data, AI, and
                Databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-container">
        <h2>Experience</h2>
        <ExperienceItem
          time="Summer 2022 - Present"
          title="Best Buy - Geek Squad"
          roles={[
            {
              role: "Geek Squad In-Home Agent",
              description:
                "Provided professional service to in-home and business clients. Services included troubleshooting, installing, or setting up TVs, computers, and networks.",
            },
            {
              role: "Agent Advisor",
              description:
                "Assisted with computer sales and managed the customer service counter, leveraging deep technical knowledge.",
            },
            {
              role: "Geek Squad Agent 1",
              description:
                "Assisted clients with tech issues and performed software fixes on laptops and desktops. Recognized for flexibility and leadership, participating in Best Buy's Learn2Lead program.",
            },
          ]}
        />

        <ExperienceItem
          time="Fall 2021"
          title="Marker / IA for Networking Course"
          company="Wilfrid Laurier University"
          roles={[
            {
              role: "Marker / IA",
              description:
                "Marked assignments and provided assistance on topics like IP, TCP, UDP protocols, Dijkstra's Algorithm, and basic routing.",
            },
          ]}
        />

        <ExperienceItem
          time="Summer 2017"
          title="Summer Camp Volunteer"
          company="KidsAbility Centre for Child Development"
          roles={[
            {
              role: "Volunteer",
              description:
                "Aided with Minecraft and Lego camps, ensuring smooth operation and child safety during events.",
            },
          ]}
        />
      </section>
    </motion.section>
  );
};

export default AboutSection;
