import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/home/index.tsx";
import { About } from "./pages/about/index.tsx";
import { MainLayout } from "./layout/mainLayout";

const APP_NAME = "information";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={`/${APP_NAME}`}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
