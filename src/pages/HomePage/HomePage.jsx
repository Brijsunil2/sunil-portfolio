import "./HomePage.scss";
import { FaArrowUp } from "react-icons/fa";
// import IntroSection from "../../sections/IntroSection/IntroSection";
// import ProjectsSection from "../../sections/ProjectsSection/ProjectsSection";
// import ContactSection from "../../sections/ContactSection/ContactSection";
// import SkillsSection from "../../sections/SkillsSection/SkillsSection";
// import ExperienceSection from "../../sections/ExperienceSection/ExperienceSection";
// import EducationSection from "../../sections/EducationSection/EducationSection";
import CustomCursor from "../../components/CustomCursor/CustumCursor";

const HomePage = () => {
  return (
    <div className="home-page">
      <CustomCursor />
      {/* <IntroSection /> */}
      {/* <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection /> */}
      <button className="scroll-top-btn scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default HomePage;
