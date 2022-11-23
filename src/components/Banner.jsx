import React from "react";
import { motion } from "framer-motion";
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
export default function Banner(props) {
  return (
    <motion.div className="banner-container" {...props}>
      <Slider {...settings} className="custom-slides">
        {cardsDataSet.map((item, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${item?.image})` }}
              className="banner-image"
              {...props}
            ></div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
