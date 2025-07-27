import { useEffect, useRef } from "react";
import "./FloatingCircles.scss";

const FloatingCirclesBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createCircle = () => {
      const circle = document.createElement("div");
      circle.classList.add("circle");

      const size = Math.random() * 10 + 2; // 2px to 12px
      const left = Math.random() * 100; // vw
      const duration = Math.random() * 5 + 3; // 3s to 8s

      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${left}vw`;
      circle.style.animationDuration = `${duration}s`;

      container.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, duration * 1000);
    };

    const interval = setInterval(createCircle, 100);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="floating-background" />;
};

export default FloatingCirclesBackground;
