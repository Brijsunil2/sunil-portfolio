import "./ProjectsPage.scss";
import { motion } from "framer-motion";
import WeatherApp1 from "../../assets/images/Weather_App_1.png";
import WeatherApp2 from "../../assets/images/Weather_App_2.png";
import PortalImg1 from "../../assets/images/Portal_Img_1.png";
import PortalImg2 from "../../assets/images/Portal_Img_2.png";
import PortalImg3 from "../../assets/images/Portal_Img_3.png";
import PortalImg4 from "../../assets/images/Portal_Img_4.png";
import PortalImg5 from "../../assets/images/Portal_Img_5.png";
import CounterImg1 from "../../assets/images/Counter_App_1.png";
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
          <a
            href="https://github.com/Brijsunil2/portal"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Portal</h4>
          </ a>
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
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#projectOne"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={PortalImg1}
                className="d-block"
                onClick={() => setModalImage(PortalImg1)}
                alt="Homepage before login"
              />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={PortalImg2}
                className="d-block"
                onClick={() => setModalImage(PortalImg2)}
                alt="Signup section"
              />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={PortalImg3}
                className="d-block"
                onClick={() => setModalImage(PortalImg3)}
                alt="Homepage after login"
              />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={PortalImg4}
                className="d-block"
                onClick={() => setModalImage(PortalImg4)}
                alt="Forums page"
              />
            </div>
            <div
              className="carousel-item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={PortalImg5}
                className="d-block"
                onClick={() => setModalImage(PortalImg5)}
                alt="A forum page"
              />
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
                className="d-block"
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
                className="d-block"
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
          <a
            href="https://github.com/Brijsunil2/counter-app"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Counter App</h4>
          </a>
          <h5>Frontend / Fake Backend</h5>
          <p>
            This was one of my first react apps created. Instead of a generic
            todolist, I added a twist to the app and made it more like a grocery
            list with counters for each item.
          </p>
          <div className="pills-list d-flex flex-wrap">
            <ButtonPills name="React" />
            <ButtonPills name="Json-Server" />
            <ButtonPills name="JavaScript" />
            <ButtonPills name="CSS" />
            <ButtonPills name="HTML" />
            <ButtonPills name="Bootstrap" />
          </div>
        </div>
        <div id="projectThree" className="carousel slide col-md-6">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            >
              <img
                src={CounterImg1}
                className="d-block w-100"
                onClick={() => setModalImage(CounterImg1)}
                alt="Homepage for counter app"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="imageModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <img
                src={modalImage}
                className="d-block"
                alt="Enlarged"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
