import "./ProjectsPage.scss";
import { motion } from "framer-motion";
import ButtonPills from "../../components/ButtonPills/ButtonPills";

const ProjectsPage = () => {

  return (
    <motion.div
      className="projectspage-container"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Projects</h2>

      <div className="row">
        <div>
          <a
            href="https://github.com/Brijsunil2/portal"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Portal</h4>
          </a>
          <h5>Frontend / Backend</h5>
          <p>
            This project is my current on going project so far. The goal of this
            project is to make a website domain that hosts a few apps.
            <br /> <br />
            The homepage contains login / signup, time and weather sections.
            Weather data is fetched from OpenWeatherMap API. Once user is
            logged-in the user will have access to a users forum page where they
            can create user forums similar to how Reddit works.
          </p>
          <div className="pills-list d-flex flex-wrap">
            <ButtonPills name="React" />
            <ButtonPills name="MongoDB" />
            <ButtonPills name="JavaScript" />
            <ButtonPills name="CSS" />
            <ButtonPills name="HTML" />
            <ButtonPills name="Bootstrap" />
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <a
            href="https://github.com/Brijsunil2/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Weather App</h4>
          </a>
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
    </motion.div>
  );
};

export default ProjectsPage;
