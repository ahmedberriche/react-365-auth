import React, { useState } from "react";
export const ChatBotContext = React.createContext();

export default function ChatBotProvider({ children }) {
  const [isOpenChatbot, setIsOpenChatbot] = useState(false);

  return (
    <ChatBotContext.Provider value={{ isOpenChatbot, setIsOpenChatbot }}>
      {children}
    </ChatBotContext.Provider>
  );
}
