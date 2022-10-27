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
        <img
          className="card-img"
          src="assets/images/numeryx-univ.jpg"
          alt="Avatar"
        />
        <h3>Card 1</h3>

        <p>some description</p>
      </motion.div>
    </a>
  );
}
