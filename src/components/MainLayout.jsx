import React from "react";
import { DrawerContext } from "../context/DrawerProvider";

export default function MainLayout({ children }) {
  const { isOpen } = React.useContext(DrawerContext);

  return (
    <div className={isOpen ? "main-layout" : "main-layout-full"}>
      {children}
    </div>
  );
}
