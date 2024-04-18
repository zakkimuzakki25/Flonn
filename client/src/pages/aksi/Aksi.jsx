// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import imageKampanye from "../../assets/images/aksi/Kampanye.jpg"
import imageVolunteer from "../../assets/images/aksi/Volunteer.jpg"
import imageDonasi from "../../assets/images/aksi/Donasi.jpg"
import "./Aksi.css";
import { Link } from "react-router-dom";

const Aksi = () => {
  return (
    <div className="bg-onyx">
      <Navbar />
      <div className="w-full h-fit lg:pt-28 banner-aksi">
        <div className="w-full h-full lg:px-40 lg:py-40 banner-2">
          <h1 style={{ lineHeight: "1.25" }} className="dl text-white lg:w-455">
            semua dimulai dari kamu. tunggu apa lagi?
          </h1>
          <p
            style={{ lineHeight: "1.2" }}
            className="headl text-white lg:w-455 lg:pb-2"
          >
            Buktikan bahwa kamu peduli kepada lingkunganmu dengan aksi nyata.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:px-40 lg:py-20 lg:gap-20">
        {/* 1 */}
        <div className="flex flex-row lg:h-100">
          <Link to={"/aksi/kampanye"} className="flex flex-col bg-oldGreen w-full lg:px-20 lg:py-16 rounded-l-3xl lg:gap-3 justify-center shadow-default">
            <div className="flex flex-col gap-3 w-fit">
              <h2
                style={{ lineHeight: "1.1" }}
                className="dl uppercase text-white"
              >
                kampanye
              </h2>
              <div className="lg:h-1.5 bg-jasmine"></div>
            </div>
            <p style={{ lineHeight: "1.2" }} className="headm text-white">
              Mulai dari zero waste lifestyle hingga konservasi biota laut,
              dapatkan informasi terbaru mengenai kampanye lingkungan yang
              sedang berjalan.
            </p>
          </Link>

          <div className="flex">
            <Link to={"/aksi/kampanye"} style={{backgroundImage: `url(${imageKampanye})`, backgroundSize: "cover"}} className="w-455 h-full bg-black rounded-tr-full overflow-hidden shadow-default">
                <div className="flex banner-2-linear w-full h-full"/>
            </Link>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-row-reverse lg:h-100">
          <Link to={"/volunteer"}  className="flex flex-col bg-viridian w-full lg:px-20 lg:py-16 rounded-r-3xl lg:gap-3 justify-center items-end shadow-default">
            <div className="flex flex-col gap-3 w-fit">
              <h2
                style={{ lineHeight: "1.1" }}
                className="dl uppercase text-white"
              >
                Volunteer
              </h2>
              <div className="lg:h-1.5 bg-jasmine"></div>
            </div>
            <p style={{ lineHeight: "1.2" }} className="headm text-white">
            Lakukan aksi nyata bersama demi masa depan yang lebih baik.
            </p>
          </Link>

          <div className="flex">
            <Link to={"/volunteer"} style={{backgroundImage: `url(${imageVolunteer})`, backgroundSize: "cover"}} className="w-455 h-full bg-black rounded-tl-full overflow-hidden shadow-default">
                <div className="flex banner-2-linear w-full h-full"/>
            </Link>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-row lg:h-100">
          <Link to={"/aksi/donasi"}  className="flex flex-col bg-cambridgeBlue w-full lg:px-20 lg:py-16 rounded-l-3xl lg:gap-3 justify-center shadow-default">
            <div className="flex flex-col gap-3 w-fit">
              <h2
                style={{ lineHeight: "1.1" }}
                className="dl uppercase text-white"
              >
                Donasi
              </h2>
              <div className="lg:h-1.5 bg-jasmine"></div>
            </div>
            <p style={{ lineHeight: "1.2" }} className="headm text-white">
            Bantuan bisa datang dari mana saja selama ada niat baik.
            </p>
          </Link>

          <div className="flex">
            <Link to={"/aksi/donasi"} style={{backgroundImage: `url(${imageDonasi})`, backgroundSize: "cover"}} className="w-455 h-full bg-black rounded-tr-full overflow-hidden shadow-default">
                <div className="flex banner-2-linear w-full h-full"/>
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Aksi;
