// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import "./Home.css";
import PrimerButton3 from "../../components/button/PrimerButton3";
import NextArrow from "../../assets/icon/NextArrow.svg";
import PrevArrow from "../../assets/icon/PrevArrow.svg";
import welcomeImg from "../../assets/images/home/Welcome.png";
import merchImg from "../../assets/images/home/Merchandise.png";
import monitorImg from "../../assets/images/home/Monitor.jpg";
import biodiversitasImg from "../../assets/images/home/Biodiversitas.jpg";
import { DataBannerHome } from "../../data/DataBannerHome";

const Home = () => {
  const [indexBanner, setIndexBanner] = useState(0);
  const [itemBanner, setItemBanner] = useState(DataBannerHome[indexBanner]);
  const nav = useNavigate();

  const handleNext = () => {
    setIndexBanner((prev) => (prev + 1) % DataBannerHome.length);
  };

  const handlePrev = () => {
    setIndexBanner(
      (prev) => (prev - 1 + DataBannerHome.length) % DataBannerHome.length
    );
  };

  useEffect(() => {
    setItemBanner(DataBannerHome[indexBanner]);
  }, [indexBanner]);

  return (
    <div>
      <Navbar />
      {/* banner */}
      <div
        style={{
          backgroundImage: `url(${itemBanner.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-fit pt-20 sm:pt-28"
      >
        <div className="w-full h-full px-1 py-7 lg:px-14 lg:py-24 sm:gap-14 banner-home-2 flex flex-row items-center">
          {/* left button */}
          <button className="h-fit" onClick={handlePrev}>
            <img src={PrevArrow} />
          </button>

          {/* content */}
          <div className="flex flex-col w-full">
            <div className="h-fit sm:h-96 gap-5 flex flex-col justify-center">
              <div className="w-fit sm:w-700">
                <h2
                  style={{ lineHeight: "1.2" }}
                  className="dl text-white w-fit lg:w-455"
                >
                  {itemBanner.name}
                </h2>
                <p style={{ lineHeight: "1.3" }} className="bl text-white">
                  {itemBanner.description}
                </p>
              </div>
              <div className="sm:w-80">
                <PrimerButton3
                  name={itemBanner.button}
                  handle={() => {
                    nav(itemBanner.path);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 pt-7 sm:pt-16">
              {DataBannerHome.map((_, index) => (
                <div
                  className={`w-14 sm:w-20 h-1 rounded-sm ${
                    index == indexBanner ? "bg-white" : "bg-gray"
                  }`}
                  key={index}
                ></div>
              ))}
            </div>
          </div>

          {/* next button */}
          <button className="h-fit" onClick={handleNext}>
            <img src={NextArrow} />
          </button>
        </div>
      </div>

      {/* welcome */}
      <section className="w-full h-fit px-7 py-7 sm:px-40 sm:py-24 flex flex-col sm:flex-row justify-center items-center gap-10">
        <img src={welcomeImg} className="h-48 sm:h-fit sm:w-fit" />
        <div className="flex flex-col">
          <h1 style={{ lineHeight: "1.2" }} className="dl text-onyx">
            SELAMAT DATANG DI
          </h1>
          <h1 style={{ lineHeight: "1.2" }} className="dl text-oldGreen">
            FLONN
          </h1>
          <p className="bl text-onyx">
            Tempat asik buat kamu yang pengen bantu bumi kita. Bersama-sama,
            kita bisa responsif terhadap bencana alam, bantu konservasi
            keanekaragaman hayati, dan sumbang sumber daya untuk perubahan masa
            depan yang lebih baik. Dapatkan informasi, ambil bagian, dan beraksi
            untuk hari esok yang lebih hijau. Di FLONN, setiap kontribusi yang
            kamu lakukan hari ini menanam benih harapan untuk generasi
            mendatang.
          </p>
        </div>
      </section>

      {/* info */}
      <section className="relative flex flex-col w-full h-fit sm:h-600 bg-white items-center">
        <div className="w-full bg-white h-full"></div>

        <div className="w-full bg-oldGreen rounded-t-50 sm:h-455 shrink-0 mt-24 sm:mt-48 justify-center items-center flex px-5 sm:px-5">
          <div className="w-fit h-fit flex flex-col sm:flex-row gap-16 sm:gap-24 -translate-y-24 sm:-translate-y-28">
            {/* bencana */}
            <div className="flex flex-col w-fit sm:w-300 gap-5 items-center text-center">
              <img
                src={monitorImg}
                className="rounded-full w-48 h-48 sm:w-300 sm:h-300 object-cover"
              />
              <div className="flex flex-col gap-2">
                <h4 style={{ lineHeight: "1.2" }} className="ds text-white">
                  pastikan keamanan dengan monitor bencana
                </h4>
                <p style={{ lineHeight: "1.2" }} className="bs text-white">
                  Cek rutin bencana alam yang terjadi di sekitarmu untuk
                  mencegah hal-hal yang tidak diinginkan.
                </p>
              </div>
              <Link
                to={"/monitor"}
                className="button text-onyx bg-jasmine py-2 px-4 shadow-s-default uppercase w-fit rounded-2xl"
              >
                cek
              </Link>
            </div>
            {/* biodiversitas */}
            <div className="flex flex-col sm:w-300 gap-5 items-center text-center">
              <img
                src={biodiversitasImg}
                className="rounded-full w-48 h-48 sm:w-300 sm:h-300 object-cover"
              />
              <div className="flex flex-col gap-2">
                <h4 style={{ lineHeight: "1.2" }} className="ds text-white">
                  pelajari keragaman hayati di daerahmu!
                </h4>
                <p style={{ lineHeight: "1.2" }} className="bs text-white">
                  Arsip biodiversitas yang lengkap untuk membantumu mempelajari
                  keragaman hayati di daerahmu.
                </p>
              </div>
              <Link
                to={"/biodiversitas"}
                className="button text-onyx bg-jasmine py-2 px-4 shadow-s-default uppercase w-fit rounded-2xl"
              >
                pelajari
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* merch */}
      <section className="w-full h-full px-5 py-10 sm:px-14 sm:py-24 bg-onyx banner-home-2 flex flex-col-reverse sm:flex-row gap-7 items-center justify-center">
        <div className="flex flex-col sm:w-1/2 gap-5">
          <div className="flex flex-row gap-3">
            <div className="sm:w-1.5 bg-oldRose"></div>
            <h5
              style={{ lineHeight: "1.1" }}
              className="dl uppercase text-white text-center sm:text-left"
            >
              tertarik dengan merchandise?
            </h5>
          </div>
          <p
            style={{ lineHeight: "1.2" }}
            className="bl text-white text-center sm:text-left"
          >
            Intip koleksi FLONN yang keren dan sayang banget buat dilewatin!
            Semua item dari pakaian yang nyaman, aksesoris gaul, sampai
            kerajinan tangan yang autentik, semuanya dibuat dengan cinta untuk
            alam. Pilih favoritmu dan tunjukkan peduli kamu buat bumi kita. Ayo,
            wujudkan perubahan dengan gaya yang beda dan bakti yang nyata!
          </p>
          <Link
            to={"/toko"}
            className="button flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase px-3 py-1 lg:py-2 lg:px-4 text-onyx self-center sm:self-end"
          >
            INTIP MERCHANDISE SEKARANG
          </Link>
        </div>
        <img src={merchImg} className="h-40 sm:w-fit sm:h-fit object-cover" />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
