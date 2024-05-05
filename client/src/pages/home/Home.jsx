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
  const nav = useNavigate()

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
      <div style={{
        backgroundImage: `url(${itemBanner.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} className="w-full h-fit lg:pt-28">
        <div className="w-full h-full lg:px-14 lg:py-24 gap-14 banner-home-2 flex flex-row items-center">
          {/* left button */}
          <button className="h-fit" onClick={handlePrev}>
            <img src={PrevArrow} />
          </button>

          {/* content */}
          <div className="flex flex-col w-full">
            <div className="h-96 gap-5 flex flex-col justify-center">
              <div className="w-700">
                <p
                  style={{ lineHeight: "1.2" }}
                  className="dl text-white lg:w-455"
                >
                  {itemBanner.name}
                </p>
                <p style={{ lineHeight: "1.3" }} className="bl text-white">
                  {itemBanner.description}
                </p>
              </div>
              <div className="w-80">
                <PrimerButton3 name={itemBanner.button} handle={() => {
                  nav(itemBanner.path)
                }}/>
              </div>
            </div>
            <div className="flex flex-row gap-3 pt-16">
              {DataBannerHome.map((_, index) => (
                <div
                  className={`w-20 h-1 rounded-sm ${
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
      <div className="w-full h-fit lg:px-40 lg:py-24 flex flex-row justify-center items-center gap-10">
        <img src={welcomeImg} className="h-fit w-fit" />
        <div className="flex flex-col">
          <p style={{ lineHeight: "1.2" }} className="dl text-onyx">
            SELAMAT DATANG DI
          </p>
          <p style={{ lineHeight: "1.2" }} className="dl text-oldGreen">
            FLONN
          </p>
          <p className="bl text-onyx">
            Tempat asik buat kamu yang pengen bantu bumi kita. Bersama-sama, kita bisa responsif terhadap bencana alam, bantu konservasi keanekaragaman hayati, dan sumbang sumber daya untuk perubahan masa depan yang lebih baik. Dapatkan informasi, ambil bagian, dan beraksi untuk hari esok yang lebih hijau. Di FLONN, setiap kontribusi yang kamu lakukan hari ini menanam benih harapan untuk generasi mendatang.
          </p>
        </div>
      </div>

      {/* info */}
      <div className="relative flex flex-col w-full h-600 bg-white items-center">
        <div className="w-full bg-white h-full"></div>

        <div className="absolute w-fit h-fit flex flex-row gap-24">
          {/* bencana */}
          <div className="flex flex-col w-300 gap-5 items-center text-center">
            <img
              src={monitorImg}
              className="rounded-full w-300 h-300 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p style={{ lineHeight: "1.2" }} className="ds text-white">
                pastikan keamanan dengan monitor bencana
              </p>
              <p style={{ lineHeight: "1.2" }} className="bs text-white">
                Cek rutin bencana alam yang terjadi di sekitarmu untuk mencegah hal-hal yang tidak diinginkan.
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
          <div className="flex flex-col w-300 gap-5 items-center text-center">
            <img
              src={biodiversitasImg}
              className="rounded-full w-300 h-300 object-cover"
            />
            <div className="flex flex-col gap-2">
              <p style={{ lineHeight: "1.2" }} className="ds text-white">
                pelajari keragaman hayati di daerahmu!
              </p>
              <p style={{ lineHeight: "1.2" }} className="bs text-white">
                Arsip biodiversitas yang lengkap untuk membantumu mempelajari keragaman hayati di daerahmu.
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

        <div className="w-full bg-oldGreen rounded-t-50 h-455 shrink-0"></div>
      </div>

      {/* merch */}
      <div className="w-full h-full lg:px-14 lg:py-24 bg-onyx banner-home-2 flex flex-row gap-7 items-center justify-center">
        <div className="flex flex-col w-1/2 gap-5">
          <div className="flex flex-row gap-3">
            <div className="lg:w-1.5 bg-oldRose"></div>
            <p
              style={{ lineHeight: "1.1" }}
              className="dl uppercase text-white"
            >
              tertarik dengan merchandise? 
            </p>
          </div>
          <p style={{ lineHeight: "1.2" }} className="bl text-white">
            Intip koleksi FLONN yang keren dan sayang banget buat dilewatin! Semua item dari pakaian yang nyaman, aksesoris gaul, sampai kerajinan tangan yang autentik, semuanya dibuat dengan cinta untuk alam. Pilih favoritmu dan tunjukkan peduli kamu buat bumi kita. Ayo, wujudkan perubahan dengan gaya yang beda dan bakti yang nyata! 
          </p>
          <Link
            to={"/toko"}
            className="button flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-onyx self-end"
          >
            INTIP MERCHANDISE SEKARANG
          </Link>
        </div>
        <img src={merchImg} className="w-fit h-fit object-cover" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
