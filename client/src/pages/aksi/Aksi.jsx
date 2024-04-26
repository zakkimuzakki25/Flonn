// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import imageKampanye from "../../assets/images/aksi/Kampanye.jpg"
import imageVolunteer from "../../assets/images/aksi/Volunteer.jpg"
import imageDonasi from "../../assets/images/aksi/Donasi.jpg"
import "./Aksi.css";
import { Link } from "react-router-dom";
import { BaseAPI } from "../../api/API";
import { DataBannerAksi } from "../../data/DataBannerAksi";
import NextArrow from "../../assets/icon/NextArrow.svg";
import PrevArrow from "../../assets/icon/PrevArrow.svg";
import PrimerButton3 from "../../components/button/PrimerButton3";
import DonationCard from "../../components/card/disaster/DonationCard";
import VolunteerCard from "../../components/card/disaster/VolunteerCard";


const Aksi = () => {
  const [indexBanner, setIndexBanner] = useState(0);
  const [itemBanner, setItemBanner] = useState(DataBannerAksi[indexBanner]);
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  const handleNext = () => {
    setIndexBanner((prev) => (prev + 1) % DataBannerAksi.length);
  };

  const handlePrev = () => {
    setIndexBanner(
      (prev) => (prev - 1 + DataBannerAksi.length) % DataBannerAksi.length
    );
  };

  useEffect(() => {
    setItemBanner(DataBannerAksi[indexBanner]);
  }, [indexBanner]);

  const getData = async () => {
    try {
      const res = await BaseAPI.get(
        `/od/all`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const dp = res.data.data;
      if (dp != null) {
        setData(dp);
      } else {
        setData([]);
      }
      console.log("open donation = ", dp);
    } catch (err) {
      console.error("Error :", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-onyx">
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
                <PrimerButton3 name={itemBanner.button} />
              </div>
            </div>
            <div className="flex flex-row gap-3 pt-16">
              {DataBannerAksi.map((_, index) => (
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

      {/* donasi */}
      <div className="flex flex-col bg-white px-40 py-14 gap-10">
        {/* label */}
        <div className="flex flex-row gap-6">
          <div className="lg:w-1.5 bg-viridian"></div>
          <p
            style={{ lineHeight: "1.1" }}
            className="dl uppercase text-onyx"
          >donasi</p>
        </div>
        {/* list */}
        <div className="flex flex-row gap-5 overflow-auto p-3">
          {data.map((item, index) => {
            return (
              <div key={index} className="lg:mb-10">
                <DonationCard
                  key={index}
                  id={item.ID}
                  deskripsi={item.description}
                  photo={item.photo}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* volunteer */}
      <div className="flex flex-col bg-onyx px-40 py-14 gap-10">
        {/* label */}
        <div className="flex flex-row gap-6">
          <div className="lg:w-1.5 bg-viridian"></div>
          <p
            style={{ lineHeight: "1.1" }}
            className="dl uppercase text-white"
          >volunteer</p>
        </div>
        {/* list */}
        <div className="flex flex-col p-3 gap-7">
          <VolunteerCard 
            photo={"https://akcdn.detik.net.id/community/media/visual/2024/04/19/begini-kondisi-toko-bingkai-mampang-usai-kebakaran-3_43.jpeg?w=700&q=90"}
            judul={"GARDA DEPAN BANTUAN"}
            subjudul={"Relawan Erupsi Gunung Semeru"}
            tanggal={"1 April 2024"}
            deskripsi={"Jadilah yang pertama di sana untuk memberi bantuan saat dibutuhkan. Bersama tim Flonteer, kita bisa menjadi andalan bagi mereka yang terdampak erupsi. Mari bergabung dan bawa kembali normalitas ke kehidupan mereka."}
          />
          <VolunteerCard 
            photo={"https://akcdn.detik.net.id/community/media/visual/2024/04/19/begini-kondisi-toko-bingkai-mampang-usai-kebakaran-3_43.jpeg?w=700&q=90"}
            judul={"GARDA DEPAN BANTUAN"}
            subjudul={"Relawan Erupsi Gunung Semeru"}
            tanggal={"1 April 2024"}
            deskripsi={"Jadilah yang pertama di sana untuk memberi bantuan saat dibutuhkan. Bersama tim Flonteer, kita bisa menjadi andalan bagi mereka yang terdampak erupsi. Mari bergabung dan bawa kembali normalitas ke kehidupan mereka."}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aksi;
