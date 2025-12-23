import {
  FaBookOpen,
  FaLightbulb,
  FaProjectDiagram,
  FaHammer,
  FaEnvelope,
} from "./icons";

export const siteName = "Sunil's Portfolio";

export const navbarData = {
  name: "Sunil's",
  links: [
    { label: "Education", Icon: FaBookOpen, link: "#educationSection" },
    { label: "Skills", Icon: FaLightbulb, link: "#skillsSection" },
    { label: "Projects", Icon: FaProjectDiagram, link: "#projectsSection" },
    { label: "Experience", Icon: FaHammer, link: "#experienceSection" },
    { label: "Contact", Icon: FaEnvelope, link: "#contactSection" },
  ],
};
