import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = (props) => {
  const data = props.data;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="hero-slider__item">
            <Link to={item.path}>
              <img src={item.img} alt="" />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
