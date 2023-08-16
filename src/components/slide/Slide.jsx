import React from "react";
import "./Slide.scss";
import Slider from "react-slick"; // Import from the correct library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const settings = {
    slidesToShow: slidesToShow,
    arrows: arrowsScroll, // Assuming you want to show arrows based on arrowsScroll prop
    // Add other settings as needed
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
