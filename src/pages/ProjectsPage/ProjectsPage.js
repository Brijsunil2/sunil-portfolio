import "./ProjectsPage.scss";
import { motion } from "framer-motion";
import ButtonPills from "../../components/ButtonPills/ButtonPills";
import { HiLink } from "react-icons/hi2";
import weatherImg from "../../assets/images/weather-app.png";
import portalDemoLoginImg from "../../assets/images/portal-demo-login.png";

const ProjectsPage = () => {
  return (
    <motion.div
      className="projectspage-container"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Projects</h2>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-2">
          <img src={portalDemoLoginImg} alt="Portal demo login page" />
          </div>
          <div className="col">
            <h4>Portal-Demo</h4>
            <h5>Frontend / Backend</h5>
          </div>
        </div>
        <div className="row m-1">
          <div className="col-2">
            <a
              href="https://github.com/Brijsunil2/portal"
              target="_blank"
              rel="noreferrer"
              className="d-flex"
            >
              <HiLink className="m-1" /> Github Repo
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
            <p>
              A website used to act as a template user authentication site. The
              user is able to create an account, login and view a varity of web
              based applications. Since this is the demo verson the sites are
              just place holders. The focus here was user authentication.
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
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="row m-1">
          <div className="col-2">
            <img src={weatherImg} alt="Weather app homepage" />
          </div>
          <div className="col">
            <h4>Weather App</h4>
            <h5>Frontend</h5>
          </div>
        </div>
        <div className="row m-1">
          <div className="col-2">
            <a
              href="https://github.com/Brijsunil2/weather-app"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center"
            >
              <HiLink className="m-1" /> Github Repo
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
    </motion.div>
  );
};

export default ProjectsPage;
