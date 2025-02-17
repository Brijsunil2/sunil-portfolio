import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const siteName = "Sunil's Portfolio";

export const introData = {
  name: "Sunil Brijlall",
  qualifications: [
    "Computer Science Graduate",
    "Aspiring Full-Stack Developer",
  ],
  intro:
    "Motivated Computer Science graduate with a solid foundation in programming and a deep passion for full-stack development. I am eager to apply my academic knowledge, practical skills, and relevant work experience to contribute effectively to innovative and challenging projects. My expertise spans HTML, CSS, JavaScript, and React, with a focus on creating responsive and user-friendly applications. Explore my portfolio to see how I bring ideas to life.",
  links: [
    {
      Icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/sunil-brijlall/",
      target: true,
    },
    {
      Icon: FaGithub,
      text: "Github",
      href: "https://github.com/Brijsunil2",
      target: true,
    },
    { Icon: FaEnvelope, text: "Contact Me", href: "#contact", target: false },
  ],
};
