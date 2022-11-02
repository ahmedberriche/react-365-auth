import { CssBaseline } from "@mui/material";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import DrawerProvider from "./context/DrawerProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <DrawerProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DrawerProvider>
  );
}

export default App;
