import React from "react";
import { motion } from "framer-motion";

export default function Banner(props) {
  return (
    <motion.div className="banner-image" {...props}>
      {/* <div className="banner-text">
        <h1>put image here</h1>
        <p>And I'm a Photographer</p>
      </div> */}
    </motion.div>
  );
}
