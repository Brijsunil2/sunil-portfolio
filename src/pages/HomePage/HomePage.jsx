import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import SkillsSection from "../../sections/SkillsSection/SkillsSection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import EducationSection from "../../sections/EducationSection/EducationSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
