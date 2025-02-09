import "./HomePage.scss";
import IntroSection from "../../sections/IntroSection/IntroSection";
import AboutSection from "../../sections/AboutSection/AboutSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
