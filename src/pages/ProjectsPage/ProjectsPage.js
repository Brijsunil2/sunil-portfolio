import "./ProjectsPage.scss";
import { motion } from "framer-motion";
import RedBox from "../../assets/images/red_box.png";
import GreenBox from "../../assets/images/green_box.png";
import BlueBox from "../../assets/images/blue_box.png";
import WeatherApp1 from "../../assets/images/Weather_App_1.png";
import WeatherApp2 from "../../assets/images/Weather_App_2.png";
import ButtonPills from "../../components/ButtonPills/ButtonPills";
import { useState } from "react";

const ProjectsPage = () => {
  const [modalImage, setModalImage] = useState();

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
        <div id="projectOne" className="carousel slide col-md-6">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="0"
              className="active"
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
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img src={RedBox} className="d-block w-100" alt="..." />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img src={GreenBox} className="d-block w-100" alt="..." />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img src={BlueBox} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectOne"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Weather App</h4>
          <h5>Frontend</h5>
          <p>
            This web app utilizes the OpenWeatherMap API to fetch weather
            conditions for the current user location or a searched user
            location.
          </p>
          <div className="pills-list d-flex flex-wrap">
            <ButtonPills name="JavaScript" />
            <ButtonPills name="CSS" />
            <ButtonPills name="HTML" />
          </div>
        </div>
        <div id="projectTwo" className="carousel slide col-md-6">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectTwo"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#projectTwo"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={WeatherApp1}
                className="d-block w-100"
                alt="Weather app homepage one"
                onClick={() => setModalImage(WeatherApp1)}
              />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={WeatherApp2}
                className="d-block w-100"
                alt="Weather app homepage two"
                onClick={() => setModalImage(WeatherApp2)}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectTwo"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectTwo"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Portal</h4>
          <h5>Frontend</h5>
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
        <div id="projectThree" className="carousel slide col-md-6">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#projectThree"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#projectThree"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#projectThree"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img src={RedBox} className="d-block w-100" alt="..." />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img src={GreenBox} className="d-block w-100" alt="..." />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img src={BlueBox} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectThree"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectThree"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <img
                src={modalImage}
                className="d-block w-100"
                alt="Enlarged Image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
