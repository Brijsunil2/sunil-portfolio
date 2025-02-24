import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import SkillsSection from "../../sections/SkillsSection/SkillsSection";
import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
import EducationSection from "../../sections/EducationSection/EducationSection";
import CustomCursor from "../../components/CustomCursor/CustumCursor";

const HomePage = () => {
  return (
    <div className="home-page">
      <CustomCursor />
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
