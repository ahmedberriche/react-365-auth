import React from "react";
import Slider from "react-slick";
import { cardsDataSet } from "../utils";

const settings = {
  dots: true,
  infinite: true,
  initialSlide: 0,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dotsClass: "button__dots",
};
export default function Banner() {
  return (
    <div className="banner-container reveal">
      <Slider {...settings} className="custom-slides">
        {cardsDataSet.map((item, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${item?.image})` }}
              className="banner-image"
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
