import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import EditIcon from "../../assets/icon/Edit.svg";
import PrimerButton4 from "../../components/button/PrimerButton4";
import { BaseAPI } from "../../api/Api";
import { useContext, useEffect, useState } from "react";
import { DefaultPhotoProfile } from "../../data/DefaultData";
import FlointProgress from "../../components/progress/FlointProgress";
import { ConfirmationContext } from "../../context/ConfirmationContext";

const Profile = () => {
  const nav = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [histories, setHistories] = useState([]);

  const token = window.localStorage.getItem("token");

  const {showPopup, hidePopup} = useContext(ConfirmationContext)

  const getDataUser = () => {
    BaseAPI.get("user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(
      (res) => {
        const data = res.data.data;
        console.log("data lengkap", data);
        setFullname(data.fullname);
        setEmail(data.email);
        setPhoto(data.photo);
        setHistories(data.histories);
      },
      (err) => {
        console.log("error : ", err);
      }
    );
  };

  useEffect(() => {
    getDataUser();
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
                  src={photo ? photo : DefaultPhotoProfile}
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
                  <p className="ds">{fullname}</p>
                  <p className="bs">{email}</p>
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
            {/* circularr progress */}
            <FlointProgress value={2} max={100} level={1} title="warrior"/>
            <p className="font-extrabold bs w-full text-left">15 Floint</p>
            <p className="text-xs w-full text-left">Setiap poin membawa kamu selangkah lebih dekat ke hadiah seru! Terus kumpulkan dan jadilah juara!</p>
          </div>
        </div>

        {/* riwayat */}
        <div className="flex flex-col w-full mt-4">
          <h1 className="ds text-white py-5 px-2">Riwayat</h1>
          <div className="gap-5 flex flex-col">
            {histories ? (
              histories.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row w-full gap-10 rounded-2xl bg-white shadow-default px-7 py-6 justify-between"
                >
                  <div className="flex flex-col gap-1 items-center">
                    <div className="bg-cambridgeBlue px-4 py-2 rounded-2xl">
                      <p className="button text-white uppercase text-nowrap">
                        {item.status}
                      </p>
                    </div>
                    <p className="bs">
                      {new Date(item.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex self-center">
                    <p className="bl text-default">{item.description}</p>
                  </div>

                  <div className="bg-jasmine px-4 py-2 rounded-2xl h-fit w-fit flex text-nowrap self-center">
                    <p className="button text-onyx uppercase">
                      +{5} floint
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full items-center flex justify-center">
                <p className="text-white">Belum ada aktifitas</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
