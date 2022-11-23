import { CircularProgress, CssBaseline } from "@mui/material";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DrawerProvider from "./context/DrawerProvider";
import Home from "./pages/Home";
import { Suspense } from "react";

function App() {
  return (
    <DrawerProvider>
      <CssBaseline />
      <BrowserRouter>
        <Suspense fallback={<div>...is loading</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DrawerProvider>
  );
}

export default App;
