import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "../pages/home/Home";
import Disaster from "../pages/disaster/Disaster";
import BiodiversityDetail from "../pages/biodiversitas/BiodiversityDetail";
import Aksi from "../pages/aksi/Aksi";
import Masuk from "../pages/auth/Masuk";
import Daftar from "../pages/auth/Daftar";
import AuthAdmin from "../pages/admin/AuthAdmin";
import { Auth } from "./Auth";
import Kampanye from "../pages/aksi/kampanye/Kampanye";
import Protected from "./Protected";
import Merch from "../pages/merch/Merch";
import ZeroWasteDetail from "../pages/info-detail/ZeroWasteDetail";
import Profile from "../pages/profile/Profile";
import ProfileEdit from "../pages/profile/ProfileEdit";
import DonasiDetail from "../pages/aksi/donasi/DonasiDetail";
import Biodiversitas from "../pages/biodiversitas/Biodiversitas";
import DonasiPembayaran from "../pages/aksi/donasi/DonasiPembayaran";
import VolunteerDetail from "../pages/aksi/VolunteerDetail";
import KampanyeDetail from "../pages/aksi/KampanyeDetail";
import PaymentInstruction from "../pages/payment/PaymentInstruction";

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
        <Route path="/aksi/volunteer/:id" element={<VolunteerDetail />} />
        <Route path="/aksi/kampanye/:id" element={<KampanyeDetail />} />
        <Route path="/aksi/donasi/:id" element={<DonasiDetail />} />

        <Route path="/toko" element={<Merch />} />

        {/* auth */}
        <Route element={<Auth />}>
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/masuk" element={<Masuk />} />
        </Route>

        {/* protected */}
        <Route element={<Protected />}>
          <Route path="/aksi/kampanye" element={<Kampanye />} />
          <Route
            path="/aksi/kampanye/zero-waste"
            element={<ZeroWasteDetail />}
          />
          <Route
            path="/aksi/donasi/:id/pembayaran"
            element={<DonasiPembayaran />}
          />
          <Route
            path="/pembayaran/:id"
            element={<PaymentInstruction />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
