import "./Carousel.scss";
import { useState, useEffect, useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaExpand } from "react-icons/fa";

const Carousel = ({
  images,
  togglerFunc = null,
  togglerIcon = <FaExpand />,
}) => {
  const [imgIndex, setImageIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState("100%");
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      setImageHeight(imgRef.current.clientHeight);
    }
  }, [images]);

  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        setImageHeight(imgRef.current.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carousel" style={{ maxHeight: imageHeight }}>
      <div className="carousel-item" style={{ maxHeight: imageHeight }}>
        {images && <img src={images[imgIndex]} ref={imgRef} />}
      </div>
      {togglerFunc && (
        <button className="toggler" onClick={togglerFunc}>
          {togglerIcon}
        </button>
      )}

      {images && images.length > 1 && (
        <>
          <button
            className="left"
            onClick={() => setImageIndex((imgIndex - 1 + images.length) % images.length)}
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