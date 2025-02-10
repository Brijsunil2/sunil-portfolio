import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
