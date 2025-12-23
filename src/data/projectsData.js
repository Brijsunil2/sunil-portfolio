import * as icons from "./icons";
import * as images from "./images";

export const projectsData = [
  {
    name: "TriageCare",
    type: "Frontend | Backend",
    githubRepo: "https://github.com/Brijsunil2/triage-care",
    liveLink: "https://brijsunil2.github.io/triage-care",
    text:
      "A modern hospital triage system designed to streamline the patient check-in process, enhance the efficiency of initial medical assessments, and improve overall patient care.",
    notes: [
      "Developed mobile-friendly front-end interface using React, Bootstrap, and CSS, ensuring optimal experience for all screen sizes.",
      "Implemented RESTful APIs for efficient data management for client and visit data between the client and server.",
      "Utilized a Postgres database to store and retrieve client personal and visit information.",
    ],
    images: [
      images.triageCare1Img,
      images.triageCare2Img,
      images.triageCare3Img,
      images.triageCare4Img,
      images.triageCare5Img,
    ],
    skills: [
      { iconSrc: icons.reactIcon, text: "React" },
      { iconSrc: icons.viteIcon, text: "Vitejs" },
      { iconSrc: icons.javascriptIcon, text: "JavaScript" },
      { iconSrc: icons.htmlIcon, text: "HTML" },
      { iconSrc: icons.cssIcon, text: "CSS" },
      { iconSrc: icons.bootstrapIcon, text: "Bootstrap" },
      { iconSrc: icons.bootstrapIcon, text: "React Bootstrap" },
      { iconSrc: icons.reduxIcon, text: "Redux Toolkit" },
      { iconSrc: icons.expressIcon, text: "Express.js" },
      { iconSrc: icons.nodejsIcon, text: "Node.js" },
      { iconSrc: icons.postgresIcon, text: "PostgreSQL" },
      { iconSrc: icons.neonIcon, text: "Neon" },
    ],
  },

  {
    name: "Portal",
    type: "Frontend | Backend",
    githubRepo: "https://github.com/Brijsunil2/portal-release",
    liveLink: null,
    text:
      "A versatile website for hosting various applications, currently featuring a user forum. Future plans include integrating a calendar, file storage, and improved security features. The user forum application is where users can create and share forums.",
    notes: [
      "Utilized MERN stack to develop a high-performance, manageable, and responsive user interface for real-time interaction using OO principals for React components.",
      "Integrated WebSocket for a real-time chat feature and JWT for secure user authentication.",
      "Designed and implemented RESTful APIs using MongoDB to use CRUD operations for forum sessions and user data.",
    ],
    images: [
      images.portal1Img,
      images.portal2Img,
      images.portal3Img,
      images.portal4Img,
      images.portal5Img,
      images.portal6Img,
    ],
    skills: [
      { iconSrc: icons.reactIcon, text: "React" },
      { iconSrc: icons.viteIcon, text: "Vitejs" },
      { iconSrc: icons.javascriptIcon, text: "JavaScript" },
      { iconSrc: icons.htmlIcon, text: "HTML" },
      { iconSrc: icons.cssIcon, text: "CSS" },
      { iconSrc: icons.bootstrapIcon, text: "Bootstrap" },
      { iconSrc: icons.bootstrapIcon, text: "React Bootstrap" },
      { iconSrc: icons.reduxIcon, text: "Redux Toolkit" },
      { iconSrc: icons.expressIcon, text: "Express.js" },
      { iconSrc: icons.nodejsIcon, text: "Node.js" },
      { iconSrc: icons.mongoDbIcon, text: "MongoDB" },
      { iconSrc: null, text: "Authentication" },
      { iconSrc: icons.neonIcon, text: "Neon" },
    ],
  },

  {
    name: "Quick Zip",
    type: "Frontend",
    githubRepo: "https://github.com/Brijsunil2/quick-zip",
    liveLink: null,
    text:
      "QuickZip is a user-friendly web application that allows users to upload multiple files, and download them as a single ZIP archive.",
    notes: [
      "React-based web application that allows users to upload and compress files directly in the browser.",
      "Designed a responsive UI with React, SCSS, and React Icons, emphasizing usability and accessibility.",
      "Learned about browser memory limits, file APIs, and performance optimizations in client-side applications.",
    ],
    images: [
      images.quickZip1Img,
      images.quickZip2Img,
      images.quickZip3Img,
      images.quickZip4Img,
    ],
    skills: [
      { iconSrc: icons.reactIcon, text: "React" },
      { iconSrc: icons.viteIcon, text: "Vitejs" },
      { iconSrc: icons.javascriptIcon, text: "JavaScript" },
      { iconSrc: icons.htmlIcon, text: "HTML" },
      { iconSrc: icons.cssIcon, text: "SCSS" },
    ],
  },

  {
    name: "Weather App",
    type: "Frontend",
    githubRepo: "https://github.com/Brijsunil2/weather-app",
    liveLink: null,
    text:
      "A web app using the OpenWeatherMap API to fetch weather data for user locations. Built with vanilla JavaScript and Webpack.",
    notes: [],
    images: [],
    skills: [
      { iconSrc: icons.javascriptIcon, text: "JavaScript" },
      { iconSrc: icons.htmlIcon, text: "HTML" },
      { iconSrc: icons.cssIcon, text: "CSS" },
      { iconSrc: icons.webpackIcon, text: "Webpack" },
    ],
  },
];
