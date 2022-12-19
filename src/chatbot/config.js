import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { LearningOptions } from "../components/Options";
import CloseIcon from "@mui/icons-material/Close";

import LinkList from "../components/LinkList";
import { IconButton } from "@mui/material";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn ?`, {
      widget: "learningOptions",
    }),
  ],
  customComponents: {
    // Replaces the default header
    header: (props) => (
      <div className="chatbot-header" style={{}}>
        Numeryx Chatbot
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => props.handleCloseChatbot()}
          color="inherit"
          className="chatbot-header-btn"
        >
          <CloseIcon />
        </IconButton>
      </div>
    ),
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },

    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
