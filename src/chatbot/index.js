import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
export default function ChatBot() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="chatbot">
      <motion.div
        animate={isVisible ? "open" : "closed"}
        variants={variants}
        className={isVisible ? "chatbot-container" : "d-none"}
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="chatbot-btn"
        onClick={() => setIsVisible(!isVisible)}
      >
        <img
          style={{ width: "50px" }}
          src="assets/images/chatbot-avatar.png"
          alt="avatar"
        />
      </motion.div>
    </div>
  );
}
