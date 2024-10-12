// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { BaseAdmin } from "../../../api/Api";

const dataPath = [
  {
    name: "Lihat Bukti Kampanye",
    path: "/b-admin",
  },
  {
    name: "Verifikasi KTP",
    path: "/b-admin/ktp",
  },
];

const NavbarAdmin = () => {
  const [isHidden, setIsHidden] = useState(false);
  const nav = useNavigate();

  const handleOut = () => {
    window.localStorage.setItem("token-adm", "");
    nav("/");
  };

  const getData = () => {
    BaseAdmin.get(`/test`, {
      headers: { Authorization: `Bearer ${window.localStorage.getItem("token-adm")}` },
    }).catch((err) => {
      console.log("Error :", err);
      handleOut();
    });
  }
  
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (
        window.scrollY > navbar.offsetHeight &&
        lastScrollY < window.scrollY
      ) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <navbar
      className={`${
        isHidden && `-translate-y-full`
      } navbar transition-all flex flex-col w-full h-28 z-50 shadow-default fixed top-0`}
    >
      <dv className="flex flex-row w-full bg-white lg:px-40 lg:py-4">
        <div className="flex w-full justify-between">
          <Link
            to={"/b-admin"}
            className="flex items-center hover:scale-105 transition-all"
          >
            <img src={logo} alt="" className="w-20 h-20" />
            <div className="ds">FLONN</div>
          </Link>

          <div className="flex flex-row gap-6">
            <h3 className="flex ds items-center">ADMIN</h3>
            <Link
              to="/profile"
              className={`w-14 h-14 rounded-full overflow-hidden self-center`}
            >
              <img
                src={
                  "https://i.pinimg.com/originals/92/1b/d0/921bd0f37013f3b3268db5a9562c6d02.jpg"
                }
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </dv>
      <div className="bg-viridian flex flex-row">
        {dataPath.map((data, index) => (
          <Link
            to={data.path}
            key={index}
            className={`flex-1 justify-center flex text-white font-medium text-xl hover:bg-oldGreen lg:py-4 ${data.path === window.location.pathname ? "bg-oldGreen hover:cursor-default" : "bg-viridian"}`}
          >
            <h3>{data.name}</h3>
          </Link>
        ))}
        <button className="flex-1 justify-center flex text-white font-medium text-xl hover:bg-oldGreen bg-viridian lg:py-4" onClick={handleOut}>Keluar</button>
      </div>
    </navbar>
  );
};

export default NavbarAdmin;
