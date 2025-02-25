import "./Carousel.scss";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [imgIndex, setImageIndex] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel-item">
        {images && <img src={images[imgIndex]} />}
      </div>
      {images && images.length > 1 && (
        <>
          <button
            className="left"
            onClick={() => setImageIndex((imgIndex - 1) % images.length)}
          >
            <FaAngleLeft />
          </button>
          <button
            className="right"
            onClick={() => setImageIndex((imgIndex + 1) % images.length)}
          >
            <FaAngleRight />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
