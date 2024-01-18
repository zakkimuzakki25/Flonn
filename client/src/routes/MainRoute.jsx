import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/home/Home";
import Biodiversitas from "../pages/biodiversitas/Biodiversitas";
import Disaster from "../pages/disaster/Disaster";
import BiodiversityDetail from "../pages/biodiversitas/BiodiversityDetail";
import Aksi from "../pages/aksi/Aksi";
import Masuk from "../pages/auth/Masuk";
import Daftar from "../pages/auth/Daftar";
import AuthAdmin from "../pages/admin/AuthAdmin";
import { Auth } from "./Auth";
import Kampanye from "../pages/aksi/kampanye/Kampanye";
import Donasi from "../pages/aksi/donasi/Donasi";
import Protected from "./Protected";
import Merch from "../pages/merch/Merch";
import DonasiDetail from "../pages/info-detail/DonasiDetail";
import VolunteerDetail from "../pages/info-detail/VolunteerDetail";
import ZeroWasteDetail from "../pages/info-detail/ZeroWasteDetail";

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
        {/* general */}
        <Route path="/" element={<Home />} />
        <Route path="/a-admin" element={<AuthAdmin />} />
        <Route path="/monitor" element={<Disaster />} />
        <Route path="/biodiversitas" element={<Biodiversitas />} />
        <Route path="/biodiversitas/:id" element={<BiodiversityDetail />} />

        <Route path="/aksi" element={<Aksi />} />
        <Route path="/volunteer" element={<VolunteerDetail />} />

        <Route path="/merch" element={<Merch />} />

        {/* auth */}
        <Route element={<Auth />}>
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/masuk" element={<Masuk />} />
        </Route>

        {/* protected */}
        <Route element={<Protected />}>
          <Route path="/aksi/kampanye" element={<Kampanye />} />
          <Route path="/aksi/kampanye/zero-waste" element={<ZeroWasteDetail />} />
          <Route path="/aksi/donasi" element={<Donasi />} />
          <Route path="/donasi/detail" element={<DonasiDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
