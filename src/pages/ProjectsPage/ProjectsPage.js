import "./ProjectsPage.scss";
import { motion } from "framer-motion";
import ButtonPills from "../../components/ButtonPills/ButtonPills";
import { HiLink } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import weatherImg from "../../assets/images/weather-app.png";
import portalDemoLoginImg from "../../assets/images/portal-demo-login.png";
import portalHome from "../../assets/images/portal-home.png";
import forumsScreen from "../../assets/images/forums-screen.png";

const ProjectsPage = () => {
  return (
    <motion.div
      className="projectspage-container"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h5 className="m-3 d-flex justify-content-center align-items-center text-center">
        <CiWarning color="yellow" /> Links to websites in production may take a
        while to load <CiWarning color="yellow" />
      </h5>

      <h2>Current Project</h2>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-lg-3">
            <img src={portalHome} alt="Portal demo login page" />
            <a
              href="https://github.com/Brijsunil2/portal-release"
              target="_blank"
              rel="noreferrer"
              className="d-flex"
            >
              <FaGithub className="m-1" /> Github Repo
            </a>
            <a
              href="https://portal-64si.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex"
            >
              <HiLink className="m-1" /> Visit Site
            </a>
          </div>
          <div className="col">
            <h4>Portal</h4>
            <h5>Frontend / Backend</h5>
            <p>
              This web application uses the portal demo in order to host various
              applications on the site. Currently the only application that is
              being hosted on portal is the user forum applcation which is one
              of my projects. I plan on using this application as a host site
              for future applications to have all my future projects use the
              authentication provided from portal. Future plans will be
              implementing and integrating a calendar and file storage apps.
              Also future plans on adding better security and authentication.
            </p>
            <div className="pills-list d-flex flex-wrap">
              <ButtonPills name="React" />
              <ButtonPills name="Vite" />
              <ButtonPills name="MongoDB" />
              <ButtonPills name="JavaScript" />
              <ButtonPills name="CSS" />
              <ButtonPills name="HTML" />
              <ButtonPills name="Bootstrap" />
              <ButtonPills name="React Bootstrap" />
              <ButtonPills name="Redux Toolkit" />
              <ButtonPills name="Express.js" />
              <ButtonPills name="Authentication" />
            </div>
          </div>
        </div>
      </div>

      <h2>Projects</h2>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-lg-3">
            <img src={forumsScreen} alt="Demo forums page" />
            <a
              href="https://github.com/Brijsunil2/forums"
              target="_blank"
              rel="noreferrer"
              className="d-flex"
            >
              <FaGithub className="m-1" /> Github Repo
            </a>
          </div>
          <div className="col">
            <h4>Forums-Demo</h4>
            <h5>Frontend / Backend</h5>
            <p>
              This is a users forum web application where users have the ability
              to create and send posts through user forums. The user is able to
              create forums and share links of the forum to users. Since this is
              a demo verson their is no user authentication. Please view the
              current project section as it is integrated into the portal web
              application.
            </p>
            <div className="pills-list d-flex flex-wrap">
              <ButtonPills name="React" />
              <ButtonPills name="Vite" />
              <ButtonPills name="MongoDB" />
              <ButtonPills name="JavaScript" />
              <ButtonPills name="CSS" />
              <ButtonPills name="HTML" />
              <ButtonPills name="Bootstrap" />
              <ButtonPills name="React Bootstrap" />
              <ButtonPills name="Redux Toolkit" />
              <ButtonPills name="Express.js" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-lg-3">
            <img src={portalDemoLoginImg} alt="Portal demo login page" />
            <a
              href="https://github.com/Brijsunil2/portal"
              target="_blank"
              rel="noreferrer"
              className="d-flex"
            >
              <FaGithub className="m-1" /> Github Repo
            </a>
            <a
              href="https://portal-demo.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex"
            >
              <HiLink className="m-1" /> Visit Site
            </a>
          </div>
          <div className="col">
            <h4>Portal-Demo</h4>
            <h5>Frontend / Backend</h5>
            <p>
              A website used to act as a template user authentication site. The
              user is able to create an account, login and view a varity of web
              based applications. Since this is the demo verson the sites are
              just place holders. The focus here was user authentication. Please
              see current project for fully integrated version.
            </p>
            <div className="pills-list d-flex flex-wrap">
              <ButtonPills name="React" />
              <ButtonPills name="Vite" />
              <ButtonPills name="MongoDB" />
              <ButtonPills name="JavaScript" />
              <ButtonPills name="CSS" />
              <ButtonPills name="HTML" />
              <ButtonPills name="Bootstrap" />
              <ButtonPills name="React Bootstrap" />
              <ButtonPills name="Redux Toolkit" />
              <ButtonPills name="Express.js" />
              <ButtonPills name="Authentication" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-lg-3">
            <img src={weatherImg} alt="Weather app homepage" />
            <a
              href="https://github.com/Brijsunil2/weather-app"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <FaGithub className="m-1" /> Github Repo
            </a>
            <a
              href="https://weather-app-ffud.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <HiLink className="m-1" /> Visit Site
            </a>
          </div>
          <div className="col">
            <h4>Weather App</h4>
            <h5>Frontend</h5>
            <p>
              This web app utilizes the OpenWeatherMap API to fetch weather
              conditions for the current user location or a searched user
              location. Used Webpack as the bundler and vanilla JavaScript.
            </p>
            <div className="pills-list d-flex flex-wrap">
              <ButtonPills name="JavaScript" />
              <ButtonPills name="CSS" />
              <ButtonPills name="HTML" />
              <ButtonPills name="Webpack" />
            </div>
          </div>
        </div>
      </div>

      <h2>Other Projects</h2>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-lg-2">
            <a
              href="https://github.com/Brijsunil2/counter-app"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <FaGithub className="m-1" /> Github Repo
            </a>
          </div>
          <div className="col">
            <h4>Counter App</h4>
            <h5>Frontend / Fake Backend</h5>
            <p>
              Simple counter app used to make a list of items along with a
              counter for each item. Basically like a grocery list or a list of
              anything the user wants. Motivation for creating this project was
              to understand the basics of React and Bootstrap. Also the idea
              came from a friend who just wanted a simple counter to count
              items.
            </p>
            <div className="pills-list d-flex flex-wrap">
              <ButtonPills name="React" />
              <ButtonPills name="CSS" />
              <ButtonPills name="HTML" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-lg-2">
            <a
              href="https://github.com/Brijsunil2/UDP-File-Transfer"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <FaGithub className="m-1" /> Github Repo
            </a>
          </div>
          <div className="col">
            <h4>UDP File Transfer</h4>
            <h5>Frontend</h5>
            <p>
              A simple file transfer project using java that allows the user to
              transfer files between users. Files transfered could be text,
              images, audio and small videos.
            </p>
            <div className="pills-list d-flex flex-wrap">
              <ButtonPills name="Java" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
