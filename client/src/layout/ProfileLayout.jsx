import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import EditIcon from "../assets/icon/Edit.svg";
import PrimerButton4 from "../components/button/PrimerButton4";
import { BaseAPI } from "../api/Api";
import { useContext, useEffect, useState } from "react";
import { DefaultPhotoProfile } from "../data/DefaultData";
import FlointProgress from "../components/progress/FlointProgress";
import { ConfirmationContext } from "../context/ConfirmationContext";

// eslint-disable-next-line react/prop-types
const ProfileLayout = ({ children }) => {
  const nav = useNavigate();
  const [data, setData] = useState({});
  const [dataFloint, setDataFloint] = useState({});

  const token = window.localStorage.getItem("token");

  const { showPopup, hidePopup } = useContext(ConfirmationContext);

  const getDataFloint = () => {
    BaseAPI.get('user/floint-detail', {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        if (res.data.data) {
          setDataFloint(res.data.data)
        }
      }, (err) => {
        console.log("error : ", err)
      })
  };

  const getDataUser = () => {
    BaseAPI.get("user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(
      (res) => {
        const data = res.data.data;
        console.log("data lengkap", data);
        setData(data);
      },
      (err) => {
        console.log("error : ", err);
      }
    );
  };

  useEffect(() => {
    getDataUser();
    getDataFloint();
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center min-h-screen bg-default px-40 pt-40 pb-20">
        <div className="flex flex-row gap-7 w-full h-fit">
          {/* profile */}
          <div className="flex flex-row bg-white w-full flex-1 rounded-2xl px-10 py-5 justify-between items-center shadow-default">
            <div className="flex flex-row gap-6">
              <div className="h-56 w-56 shrink-0 rounded-full bg-black relative">
                <img
                  src={data && data.photo ? data.photo : DefaultPhotoProfile}
                  alt="foto profil"
                  className="rounded-full object-cover w-full h-full"
                />
                <Link
                  to={"/profile/edit"}
                  className="absolute bottom-4 right-4 opacity-95"
                >
                  <img src={EditIcon} />
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="flex flex-col">
                  <p className="ds">{data.fullname}</p>
                  <p className="bs">{data.email}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full justify-end">
              <div className="w-32">
                <PrimerButton4
                  name={"Keluar"}
                  handle={() => {
                    showPopup({
                      title: 'Apakah kamu yakin ingin keluar dari akun?',
                      message: null,
                      confirmText: 'KELUAR',
                      cancelText: 'BATAL',
                      onConfirm: () => {
                        window.localStorage.setItem("token", "");
                        nav("/masuk");
                        hidePopup();
                      },
                      onCancel: () => {
                        hidePopup();
                      },
                    })
                  }}
                />
              </div>
            </div>
          </div>
          {/* Floint info */}
          <div className="flex flex-col w-80 bg-white items-center rounded-2xl p-4 shadow-default text-viridian">
            <h2 className="w-full text-left bs font-bold">Perjalanan level</h2>
            <FlointProgress value={data.floint_total - dataFloint.max_floint_before} max={dataFloint.max_floint} level={data.level} tier={data.tier}/>
            <p className="font-extrabold bs w-full text-left">{data.floint_total} Total Floint <span className="text-sm font-normal ml-0.5">({data.floint} actual floint)</span></p>
            <p className="text-xs w-full text-left">Setiap poin membawa kamu selangkah lebih dekat ke hadiah seru! Terus kumpulkan dan jadilah juara!</p>
          </div>
        </div>

        {/* Area untuk `children` */}
        <div className="flex flex-col w-full mt-12">
          <div className="flex flex-row translate-y-3">
            <Link to={"/profile"} className={`ds flex justify-center items-center h-fit py-2.5 px-14 rounded-t-2xl transition-all ${window.location.pathname === "/profile" ? "bg-white text-oldGreen" : "hover:bg-white hover:bg-opacity-25 text-white"}`}>Riwayat</Link>
            <Link to={"/profile/penukaran"} className={`ds flex justify-center items-center h-fit py-2.5 px-14 rounded-t-2xl transition-all ${window.location.pathname === "/profile/penukaran" ? "bg-white text-oldGreen" : "hover:bg-white hover:bg-opacity-25 text-white"}`}>Penukaran</Link>
          </div>
          {children}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileLayout;
