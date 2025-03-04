import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import "./styles/animations.scss";
import App from "./App";

// window.addEventListener("scroll", () => {
//   var element = document.querySelector(".scroll-fade-in");
//   var position = element.getBoundingClientRect();

//   if (position.top < window.innerHeight && position.bottom >= 0) {
//     element.classList.add("active");
//   }
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
