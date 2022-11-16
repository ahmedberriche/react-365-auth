import React, { useState } from "react";
export const DrawerContext = React.createContext();

export default function DrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChatbot, setIsOpenChatbot] = useState(false);

  return (
    <DrawerContext.Provider
      value={{ isOpen, setIsOpen, isOpenChatbot, setIsOpenChatbot }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
