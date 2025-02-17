import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import webDevCertificate from "./assets/images/web_dev_certificate.png";

import bootstrapIcon from "./assets/icons/bootstrap.svg";
import cssIcon from "./assets/icons/css-3.svg";
import eclipseIcon from "./assets/icons/eclipse-icon.svg"
import expressIcon from "./assets/icons/express.svg"
import gitIcon from "./assets/icons/git-icon.svg"
import githubIcon from "./assets/icons/github-icon.svg"
import htmlIcon from "./assets/icons/html-5.svg"
import javaIcon from "./assets/icons/java.svg"
import javascriptIcon from "./assets/icons/javascript.svg"
import mongoDbIcon from "./assets/icons/mongodb-icon.svg"
import mySQLIcon from "./assets/icons/mysql.svg"
import nodejsIcon from "./assets/icons/nodejs-icon-alt.svg"
import postgresIcon from "./assets/icons/postgresql.svg"
import postmanIcon from "./assets/icons/postman-icon.svg"
import pythonIcon from "./assets/icons/python.svg"
import reactIcon from "./assets/icons/react.svg"
import sassIcon from "./assets/icons/sass.svg"
import vscodeIcon from "./assets/icons/visual-studio-code.svg"

const siteName = "Sunil's Portfolio";

const introData = {
  name: "Sunil Brijlall",
  qualifications: [
    "Computer Science Graduate",
    "Aspiring Full-Stack Developer",
  ],
  intro:
    "Motivated Computer Science graduate with a solid foundation in programming and a deep passion for full-stack development. I am eager to apply my academic knowledge, practical skills, and relevant work experience to contribute effectively to innovative and challenging projects. My expertise spans HTML, CSS, JavaScript, and React, with a focus on creating responsive and user-friendly applications. Explore my portfolio to see how I bring ideas to life.",
  links: [
    {
      Icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/sunil-brijlall/",
      target: true,
    },
    {
      Icon: FaGithub,
      text: "Github",
      href: "https://github.com/Brijsunil2",
      target: true,
    },
    { Icon: FaEnvelope, text: "Contact Me", href: "#contact", target: false },
  ],
};

const educationData = [
  {
    place: "Wilfrid Laurier University",
    subText: "Honours BSc Computer Science",
    duration: "2022",
    text: "Focused on web development and software engineering, with coursework in Object-Oriented Programming, Data Structures, Computer Networks, Algorithm Design, Big Data, AI, and Databases.",
    image: "",
  },
  {
    place: "Udemy",
    subText: "Full-Stack Web Development Bootcamp",
    duration: "2024",
    text: "Learn the latest technologies, including Javascript, React, Node and even Web3 development. Built fully-fledged websites and web apps and mastered frontend development with React.",
    image: webDevCertificate,
  },
];

const experienceData = [
  {
    company: "Best Buy - Geek Squad",
    duration: "Summer 2022 - Present",
    positions: [
      {
        jobTitle: "Geek Squad In-Home Agent",
        responsibilities: [
          "Provided on-site technical support for a variety of devices, including computers, mobile devices, and smart home systems.",
          "Diagnosed hardware and software issues, ensuring quick resolution to minimize downtime.",
          "Communicated technical information to non-technical clients.",
          "Similar responsiblities as a Geek Sqaud In-Store Agent",
        ],
      },
      {
        jobTitle: "Geek Squad In-Store Agent",
        responsibilities: [
          "Assisted clients with technical issues by diagnosing and performing software fixes on laptops and desktops.",
          "Recognized for flexibility and leadership, participating in Best Buy's Learn2Lead program.",
          "Assisted with computer sales, using technical knowledge to guide customer decisions.",
          "Trained new team members on best practices and job related tasks.",
        ],
      },
    ],
  },
  {
    company: "Wilfrid Laurier University",
    duration: "Fall 2021",
    positions: [
      {
        jobTitle: "Marker / IA for Networking Course",
        responsibilities: [
          "Marked assignments and provided assistance and feedback on topics like IP, TCP, UDP protocols, Dijkstra's Algorithm, and basic routing.",
          "Identified topics students struggled with and reported them to the professor.",
        ],
      },
    ],
  },
  {
    company: "KidsAbility Centre for Child Development",
    duration: "Summer 2017",
    positions: [
      {
        jobTitle: "Summer Camp Volunteer",
        responsibilities: [
          "Aided with Minecraft and Lego camps, ensuring smooth operation and child safety during events.",
        ],
      },
    ],
  },
];

const skillsData = {
  frontend: [
    {Icon: htmlIcon, title: "HTML"},
    {Icon: cssIcon, title: "CSS"},
    {Icon: sassIcon, title: "SASS"},
    {Icon: javascriptIcon, title: "JavaScript"},
    {Icon: reactIcon, title: "React"},
    {Icon: bootstrapIcon, title: "Bootstrap"},
  ],
  backend: [
    {Icon: javascriptIcon, title: "JavaScript"},
    {Icon: nodejsIcon, title: "Node.js"},
    {Icon: expressIcon, title: "Express.js"},
  ],
  database: [
    {Icon: mySQLIcon, title: "MySQL"},
    {Icon: mongoDbIcon, title: "MongoDB"},
    {Icon: postgresIcon, title: "PostgreSQL"},
  ],
  tools: [
    {Icon: vscodeIcon, title: "VSCode"},
    {Icon: eclipseIcon, title: "Eclipse"},
    {Icon: githubIcon, title: "GitHub"},
    {Icon: gitIcon, title: "Git"},
    {Icon: postmanIcon, title: "Postman"},
  ],
  bonus: [
    {Icon: pythonIcon, title: "Python"},
    {Icon: javaIcon, title: "Java"},
  ]
}

export { siteName, introData, educationData, experienceData };
