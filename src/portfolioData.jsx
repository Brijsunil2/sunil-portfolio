import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaBookOpen,
  FaHammer,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";

import webDevCertificateImg from "./assets/images/education/web_dev_certificate.png";
import computerScienceDegreeImg from "./assets/images/education/computer_science_degree.jpg";

import portal1Img from "./assets/images/projects/portal/portal_login_page.png";
import portal2Img from "./assets/images/projects/portal/portal_signup_page.png";
import portal3Img from "./assets/images/projects/portal/portal_home_page.png";
import portal4Img from "./assets/images/projects/portal/portal_settings_page.png";
import portal5Img from "./assets/images/projects/portal/portal_forums_page.png";
import portal6Img from "./assets/images/projects/portal/portal_forum_page.png";

import triageCare1Img from "./assets/images/projects/triage_care/triage_start_page.png";
import triageCare2Img from "./assets/images/projects/triage_care/patient_info_page.png";
import triageCare3Img from "./assets/images/projects/triage_care/visit_info_page.png";
import triageCare4Img from "./assets/images/projects/triage_care/terms_and_conditions_page.png";
import triageCare5Img from "./assets/images/projects/triage_care/triage_complete_page.png";

import quickZip1Img from "./assets/images/projects/quick_zip/quick_zip_start.png";
import quickZip2Img from "./assets/images/projects/quick_zip/quick_zip_file_uploaded.png";
import quickZip3Img from "./assets/images/projects/quick_zip/quick_zip_in_progress.png"; 
import quickZip4Img from "./assets/images/projects/quick_zip/quick_zip_completed.png";

import bootstrapIcon from "./assets/icons/bootstrap.svg";
import cssIcon from "./assets/icons/css-3.svg";
import eclipseIcon from "./assets/icons/eclipse-icon.svg";
import expressIcon from "./assets/icons/express.svg";
import gitIcon from "./assets/icons/git-icon.svg";
import githubIcon from "./assets/icons/github-icon.svg";
import htmlIcon from "./assets/icons/html-5.svg";
import javaIcon from "./assets/icons/java.svg";
import javascriptIcon from "./assets/icons/javascript.svg";
import mongoDbIcon from "./assets/icons/mongodb-icon.svg";
import mySQLIcon from "./assets/icons/mysql.svg";
import nodejsIcon from "./assets/icons/nodejs-icon-alt.svg";
import postgresIcon from "./assets/icons/postgresql.svg";
import postmanIcon from "./assets/icons/postman-icon.svg";
import pythonIcon from "./assets/icons/python.svg";
import reactIcon from "./assets/icons/react.svg";
import sassIcon from "./assets/icons/sass.svg";
import vscodeIcon from "./assets/icons/visual-studio-code.svg";
import neonIcon from "./assets/icons/neon-icon.svg";
import reduxIcon from "./assets/icons/redux.svg";
import viteIcon from "./assets/icons/vitejs.svg";
import webpackIcon from "./assets/icons/webpack.svg";

const siteName = "Sunil's Portfolio";

const navbarData = {
  name: "Sunil's",
  links: [
    {
      label: "Education",
      Icon: FaBookOpen,
      link: "#educationSection",
    },
    {
      label: "Skills",
      Icon: FaLightbulb,
      link: "#skillsSection",
    },
    {
      label: "Projects",
      Icon: FaProjectDiagram,
      link: "#projectsSection",
    },
    {
      label: "Experience",
      Icon: FaHammer,
      link: "#experienceSection",
    },
    {
      label: "Contact",
      Icon: FaEnvelope,
      link: "#contactSection",
    },
  ],
};

const introData = {
  name: "Sunil Brijlall",
  qualifications: [
    "Computer Science Graduate",
    "Aspiring Full-Stack Developer",
  ],
  intro:
    "Motivated Computer Science graduate with a solid foundation in programming and a deep passion for full-stack development. With my academic knowledge, practical skills, and relevant work experience to innovative and complete on time and in budget challenging projects. My expertise spans HTML, CSS, JavaScript, and React, with a focus on creating responsive and user-friendly applications. Explore my portfolio to see how I bring ideas to life.",
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
    summary:
      "Focused on web development and software engineering, with coursework in Object-Oriented Programming, Data Structures, Computer Networks, Algorithm Design, Big Data, AI, and Databases.",
    image: computerScienceDegreeImg,
    imageAlt: "Computer Science Degree",
  },
  {
    place: "Udemy",
    subText: "Full-Stack Web Development Bootcamp",
    duration: "2024",
    summary:
      "Learn the latest technologies, including Javascript, React, Node and even Web3 development. Built fully-fledged websites and web apps and mastered front-end development with React.",
    image: webDevCertificateImg,
    imageAlt: "Udemy Full-Stack Web Development Certificate",
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
          "Similar responsibilities as a Geek Squad In-Store Agent.",
        ],
      },
      {
        jobTitle: "Geek Squad In-Store Agent",
        responsibilities: [
          "Assisted clients with technical issues by diagnosing and performing software fixes on laptops and desktops.",
          "Recognized for flexibility and leadership, participating in Best Buy's Learn2Lead program.",
          "Assisted with computer sales, using technical knowledge to guide customer decisions.",
          "Trained new team members on best practices and job-related tasks.",
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
    { iconSrc: htmlIcon, title: "HTML" },
    { iconSrc: cssIcon, title: "CSS" },
    { iconSrc: sassIcon, title: "SASS" },
    { iconSrc: javascriptIcon, title: "JavaScript" },
    { iconSrc: reactIcon, title: "React" },
    { iconSrc: viteIcon, title: "Vitejs" },
    { iconSrc: reduxIcon, title: "Redux" },
    { iconSrc: bootstrapIcon, title: "Bootstrap" },
  ],
  backend: [
    { iconSrc: javascriptIcon, title: "JavaScript" },
    { iconSrc: nodejsIcon, title: "Node.js" },
    { iconSrc: expressIcon, title: "Express.js" },
  ],
  database: [
    { iconSrc: mySQLIcon, title: "MySQL" },
    { iconSrc: mongoDbIcon, title: "MongoDB" },
    { iconSrc: postgresIcon, title: "PostgreSQL" },
  ],
  tools: [
    { iconSrc: vscodeIcon, title: "VSCode" },
    { iconSrc: eclipseIcon, title: "Eclipse" },
    { iconSrc: githubIcon, title: "GitHub" },
    { iconSrc: gitIcon, title: "Git" },
    { iconSrc: postmanIcon, title: "Postman" },
    { iconSrc: neonIcon, title: "Neon" },
  ],
  other: [
    { iconSrc: pythonIcon, title: "Python" },
    { iconSrc: javaIcon, title: "Java" },
  ],
};

const projectsData = [
  {
    name: "TriageCare",
    type: "Frontend | Backend",
    githubRepo: "https://github.com/Brijsunil2/triage-care",
    liveLink: "https://brijsunil2.github.io/triage-care",
    text: "A modern hospital triage system designed to streamline the patient check-in process, enhance the efficiency of initial medical assessments, and improve overall patient care.",
    notes: [
      "Developed mobile-friendly front-end interface using React, Bootstrap, and CSS, ensuring optimal experience for all screen sizes.",
      "Implemented RESTful APIs for efficient data management for client and visit data between the client and server.",
      "Utilized a Postgres database to store and retrieve client personal and visit information.",
    ],
    images: [
      triageCare1Img,
      triageCare2Img,
      triageCare3Img,
      triageCare4Img,
      triageCare5Img,
    ],
    skills: [
      { iconSrc: reactIcon, text: "React" },
      { iconSrc: viteIcon, text: "Vitejs" },
      { iconSrc: javascriptIcon, text: "JavaScript" },
      { iconSrc: htmlIcon, text: "HTML" },
      { iconSrc: cssIcon, text: "CSS" },
      { iconSrc: bootstrapIcon, text: "Bootstrap" },
      { iconSrc: bootstrapIcon, text: "React Bootstrap" },
      { iconSrc: reduxIcon, text: "Redux Toolkit" },
      { iconSrc: expressIcon, text: "Express.js" },
      { iconSrc: nodejsIcon, text: "Node.js" },
      { iconSrc: postgresIcon, text: "PostgreSQL" },
      { iconSrc: neonIcon, text: "Neon" },
    ],
  },
  {
    name: "Portal",
    type: "Frontend | Backend",
    githubRepo: "https://github.com/Brijsunil2/portal-release",
    liveLink: null,
    text: "A versatile website for hosting various applications, currently featuring a user forum. Future plans include integrating a calendar, file storage, and improved security features. The user forum application is where users can create and share forums.",
    notes: [
      "Utilized MERN stack to develop a high-performance, manageable, and responsive user interface for real-time interaction using OO principals for React components.",
      "Integrated WebSocket for a real-time chat feature and JWT for secure user authentication.",
      "Designed and implemented RESTful APIs using MongoDB to use CRUD operations for forum sessions and user data.",
    ],
    images: [
      portal1Img,
      portal2Img,
      portal3Img,
      portal4Img,
      portal5Img,
      portal6Img,
    ],
    skills: [
      { iconSrc: reactIcon, text: "React" },
      { iconSrc: viteIcon, text: "Vitejs" },
      { iconSrc: javascriptIcon, text: "JavaScript" },
      { iconSrc: htmlIcon, text: "HTML" },
      { iconSrc: cssIcon, text: "CSS" },
      { iconSrc: bootstrapIcon, text: "Bootstrap" },
      { iconSrc: bootstrapIcon, text: "React Bootstrap" },
      { iconSrc: reduxIcon, text: "Redux Toolkit" },
      { iconSrc: expressIcon, text: "Express.js" },
      { iconSrc: nodejsIcon, text: "Node.js" },
      { iconSrc: mongoDbIcon, text: "MongoDB" },
      { iconSrc: null, text: "Authentication" },
      { iconSrc: neonIcon, text: "Neon" },
    ],
  },
  {
    name: "Quick Zip",
    type: "Frontend",
    githubRepo: "https://github.com/Brijsunil2/quick-zip",
    liveLink: null,
    text: "QuickZip is a user-friendly web application that allows users to upload multiple files, and download them as a single ZIP archive.",
    notes: [
      "React-based web application that allows users to upload and compress files directly in the browser.",
      "Designed a responsive UI with React, SCSS, and React Icons, emphasizing usability and accessibility.",
      "Learned about browser memory limits, file APIs, and performance optimizations in client-side applications.",
    ],
    images: [
      quickZip1Img,
      quickZip2Img,
      quickZip3Img,
      quickZip4Img,
    ],
    skills: [
      { iconSrc: reactIcon, text: "React" },
      { iconSrc: viteIcon, text: "Vitejs" },
      { iconSrc: javascriptIcon, text: "JavaScript" },
      { iconSrc: htmlIcon, text: "HTML" },
      { iconSrc: cssIcon, text: "SCSS" },
    ],
  },
  {
    name: "Weather App",
    type: "Frontend",
    githubRepo: "https://github.com/Brijsunil2/weather-app",
    liveLink: null,
    text: "A web app using the OpenWeatherMap API to fetch weather data for user locations. Built with vanilla JavaScript and Webpack.",
    notes: [],
    images: [],
    skills: [
      { iconSrc: javascriptIcon, text: "JavaScript" },
      { iconSrc: htmlIcon, text: "HTML" },
      { iconSrc: cssIcon, text: "CSS" },
      { iconSrc: webpackIcon, text: "Webpack" },
    ],
  },
];

export {
  siteName,
  introData,
  educationData,
  experienceData,
  skillsData,
  projectsData,
  navbarData,
};
