import "./HomePage.scss";
import Picture from "../../assets/images/dark_gray_box.png";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="col">
        <img src={Picture} alt="picture" />
      </div>
      <div className="col">
        <div>
          <h2>
            Hi, <br /> I'm NAME
          </h2>
          <h3>I am a TITLE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis
            id consectetur purus ut. Porttitor lacus luctus accumsan tortor
            posuere. Nunc faucibus a pellentesque sit amet porttitor eget dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
