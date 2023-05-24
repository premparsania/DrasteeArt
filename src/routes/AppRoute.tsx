import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  CardView,
  Dashboard,
  Border,
  Columm,
  CornerDesign,
  Gilta,
  HandDesign,
} from "../pages";
import { Header } from "../components";

function AppRoute() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="mt-[60px]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Border" element={<Border />} />
          <Route path="Columm" element={<Columm />} />
          <Route path="CornerDesign" element={<CornerDesign />} />
          <Route path="Gilta" element={<Gilta />} />
          <Route path="HandDesign" element={<HandDesign />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoute;
