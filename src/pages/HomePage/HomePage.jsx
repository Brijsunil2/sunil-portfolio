import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
