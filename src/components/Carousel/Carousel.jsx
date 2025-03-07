import "./Carousel.scss";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";

const Carousel = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((imageIndex - 1 + imageUrls.length) % imageUrls.length);
  };
  const showNextImage = () => {
    setImageIndex((imageIndex + 1) % imageUrls.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-img-container">
        {imageUrls.map((url) => (
          <div className="carousel-img-wrapper" key={url}>
            <img
              className="carousel-img"
              src={url}
              loading="lazy"
              alt="carousel"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-btn"
        style={{ left: 0 }}
        onClick={showPrevImage}
      >
        <FaAngleLeft />
      </button>
      <button
        className="carousel-btn"
        style={{ right: 0 }}
        onClick={showNextImage}
      >
        <FaAngleRight />
      </button>
      <div className="carousel-dots">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="carousel-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <GoDotFill /> : <GoDot />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
