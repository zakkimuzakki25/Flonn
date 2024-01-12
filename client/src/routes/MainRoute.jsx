import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/home/Home";
import Biodiversitas from "../pages/biodiversitas/Biodiversitas";
import Disaster from "../pages/disaster/Disaster";

function AutoScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const MainRoute = () => {
  return (
    <>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Disaster />} />
        <Route path="/biodiversitas" element={<Biodiversitas />} />
      </Routes>
    </>
  );
};

export default MainRoute;
