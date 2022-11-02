import React from "react";
import { motion } from "framer-motion";

export default function Card(props) {
  const { image, title, subTitle } = props;
  return (
    <a href="https://www.w3schools.com">
      <motion.div
        whileHover={{
          transform: "translateY(-5px)",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
        }}
        className="card"
      >
        <div className="card-img-container">
          <img
            className="card-img"
            src="assets/images/numeryx-univ.jpg"
            alt="Avatar"
          />
        </div>
        <div>
          <h3>Card 1</h3>
          <p>some description</p>
        </div>
      </motion.div>
    </a>
  );
}
