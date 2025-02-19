import "./ProjectsSection.scss";
import weatherImg from "../../assets/images/weather-app.png";
import portalHome from "../../assets/images/portal-home.png";
import triageStartPage from "../../assets/images/triage_start_page.png";
import Project from "./Project";

const ProjectsSection = () => {
  return (
    <section
      className="projects-section">

      <h2 className="section-title">Featured Projects</h2>

      <div className="project-list my-4">
        <Project
          title="TriageCare"
          description="A modern hospital triage system designed to streamline the patient check-in process, enhance the efficiency of initial medical assessments, and improve overall patient care."
          technologies={[
            "React",
            "Vite",
            "PostgreSQL",
            "JavaScript",
            "CSS",
            "HTML",
            "Bootstrap",
            "React Bootstrap",
            "Redux Toolkit",
            "SQL",
            "Express.js",
            "Node.js",
          ]}
          image={triageStartPage}
          githubLink="https://github.com/Brijsunil2/triage-care"
        />

        <Project
          title="Portal"
          description="A versatile website for hosting various applications, currently featuring a user forum. Future plans include integrating a calendar, file storage, and improved security features. The user forum application is where users can create and share forums."
          technologies={[
            "React",
            "Vite",
            "MongoDB",
            "JavaScript",
            "CSS",
            "HTML",
            "Bootstrap",
            "React Bootstrap",
            "Redux Toolkit",
            "Express.js",
            "Node.js",
            "Authentication",
          ]}
          image={portalHome}
          githubLink="https://github.com/Brijsunil2/portal-release"
        />

        <Project
          title="Weather App"
          description="A web app using the OpenWeatherMap API to fetch weather data for user locations. Built with vanilla JavaScript and Webpack."
          technologies={["JavaScript", "CSS", "HTML", "Webpack"]}
          image={weatherImg}
          githubLink="https://github.com/Brijsunil2/weather-app"
        />
      </div>

      <h2 className="section-title">Other Projects</h2>

      <div className="project-list my-4">
        <Project
          title="Counter App"
          description="A simple counter app for managing lists with item counts. Developed to understand React and Bootstrap basics."
          technologies={["React", "CSS", "HTML"]}
          githubLink="https://github.com/Brijsunil2/counter-app"
        />

        <Project
          title="UDP File Transfer"
          description="A Java application for transferring files between users, supporting text, images, audio, and small videos."
          technologies={["Java"]}
          githubLink="https://github.com/Brijsunil2/UDP-File-Transfer"
        />

        <Project
          title="FoodBox"
          description="An Android app developed as a team project, allowing users to create and search for food recipes using a relational database."
          technologies={["Java", "Android Studio", "SQLite"]}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
