import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index.tsx";
import { About } from "./pages/about/index.tsx";
import { MainLayout } from "./layout/mainLayout";

const basename = import.meta.env.PROD
  ? import.meta.env.VITE_APP_PUBLIC_URL
  : "/";

export const App = () => (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
