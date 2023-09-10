import "./ProjectsPage.scss";
import { motion } from "framer-motion";
import RedBox from "../../assets/images/red_box.png";
import GreenBox from "../../assets/images/green_box.png";
import BlueBox from "../../assets/images/blue_box.png";
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
        <div className="col-md-6">
          <h4>Portal</h4>
          <h5>Frontend / Backend</h5>
          <p>
            This project is my current on going project so far. The goal of this project is to make a website domain that hosts a few apps.
            <br /> <br />
            The homepage contains login / signup, time and weather sections. Weather data is fetched from OpenWeatherMap API. Once user is logged-in the user will have access to a users forum page where they can create user forums similar to how Reddit works.
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
        <div id="projectOne" class="carousel slide col-md-6">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={RedBox} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GreenBox} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={BlueBox} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Weather App</h4>
          <h5>Frontend</h5>
          <p>
            This web app utilizes the OpenWeatherMap API to fetch weather conditions for the current user location or a searched user location.
          </p>
          <div className="pills-list d-flex flex-wrap">
            <ButtonPills name="JavaScript" />
            <ButtonPills name="CSS" />
            <ButtonPills name="HTML" />
          </div>
        </div>
        <div id="projectOne" class="carousel slide col-md-6">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={RedBox} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GreenBox} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={BlueBox} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Portal</h4>
          <h5>Frontend</h5>
          <p>
            This project is my current on going project so far. The goal of this project is to make a website domain that hosts a few apps.
            <br /> <br />
            The homepage contains login / signup, time and weather sections. Weather data is fetched from OpenWeatherMap API. Once user is logged-in the user will have access to a users forum page where they can create user forums similar to how Reddit works.
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
        <div id="projectOne" class="carousel slide col-md-6">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={RedBox} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={GreenBox} className="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={BlueBox} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
