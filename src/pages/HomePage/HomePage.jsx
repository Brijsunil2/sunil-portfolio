import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import SkillsSection from "../../sections/SkillsSection/SkillsSection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
