import React from "react";
import { motion } from "framer-motion";

export default function Card(props) {
  const { image, title, subTitle } = props;
  return (
    <a href="#">
      <motion.div
        whileHover={{
          transform: "translateY(-5px)",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)",
        }}
        className="card"
      >
        <div className="card-img-container">
          <img className="card-img" src={image} alt="Avatar" />
        </div>
        <div>
          <h3>{title || "CRA"}</h3>
          <p>{subTitle || "some description"}</p>
        </div>
      </motion.div>
    </a>
  );
}
