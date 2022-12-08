import { CircularProgress, CssBaseline } from "@mui/material";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ChatBotProvider from "./context/ChatBotProvider";
import DrawerProvider from "./context/DrawerProvider";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <DrawerProvider>
      <ChatBotProvider>
        <CssBaseline />
        <BrowserRouter>
          <Suspense
            fallback={
              <div
                style={{
                  height: "100vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            }
          >
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
