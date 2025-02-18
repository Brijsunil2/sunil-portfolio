import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import SkillsSection from "../../sections/SkillsSection/SkillsSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
