import { motion } from "framer-motion";
import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { DrawerContext } from "../context/DrawerProvider";
import ActionProvider from "./ActionProvider";
import config from "./config";
import MessageParser from "./MessageParser";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
export default function ChatBot() {
  const { setIsOpenChatbot, isOpenChatbot } = React.useContext(DrawerContext);
  return (
    <div className="chatbot">
      <motion.div
        animate={isOpenChatbot ? "open" : "closed"}
        variants={variants}
        className={isOpenChatbot ? "chatbot-container" : "d-none"}
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          setIsOpenChatbot={setIsOpenChatbot}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="chatbot-btn"
        onClick={() => setIsOpenChatbot((old) => !old)}
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
