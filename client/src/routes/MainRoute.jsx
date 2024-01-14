import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/home/Home";
import Biodiversitas from "../pages/biodiversitas/Biodiversitas";
import Disaster from "../pages/disaster/Disaster";
import BiodiversityDetail from "../pages/biodiversitas/BiodiversityDetail";
import Aksi from "../pages/aksi/Aksi";

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
        <Route path="/aksi" element={<Aksi />} />
        <Route path="/biodiversitas/:id" element={<BiodiversityDetail />} />
      </Routes>
    </>
  );
};

export default MainRoute;
