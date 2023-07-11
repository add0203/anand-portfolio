import React, { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   img style

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    // height: "100%",
    // width: "100%",
    // borderRadius: "5px",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  };

  //   button clicks
  const gotoPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="right-arrow" onClick={gotoNext}>
        ▶️
      </div>
      <div className="left-arrow" onClick={gotoPrevious}>
        ◀️
      </div>
      <div className="slide" style={slideStyle}></div>
    </div>
  );
};

export default ImageSlider;
