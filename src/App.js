import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ChatBotProvider from "./context/ChatBotProvider";
import DrawerProvider from "./context/DrawerProvider";
import Home from "./pages/Home";

function App() {
  return (
    <DrawerProvider>
      <ChatBotProvider>
        <CssBaseline />
        <BrowserRouter>
          <Suspense fallback={<div>...is loading</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ChatBotProvider>
    </DrawerProvider>
  );
}

export default App;
