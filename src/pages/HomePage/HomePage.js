import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default HomePage;
