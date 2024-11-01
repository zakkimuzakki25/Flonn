// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import "./Aksi.css";
import NextArrow from "../../assets/icon/NextArrow.svg";
import PrevArrow from "../../assets/icon/PrevArrow.svg";
import PrimerButton3 from "../../components/button/PrimerButton3";
import DonationCard from "../../components/card/disaster/DonationCard";
import VolunteerCard from "../../components/card/disaster/VolunteerCard";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../context/LoadingContext";
import { Base } from "../../api/Api";

const Aksi = () => {
  const [dataDonasi, setDataDonasi] = useState([]);
  const [dataCampaign, setDataCampaign] = useState([]);
  const [dataVolunteer, setDataVolunteer] = useState([]);
  const [indexBanner, setIndexBanner] = useState(0);
  const [itemBanner, setItemBanner] = useState(dataCampaign[indexBanner]);
  const token = window.localStorage.getItem("token");

  const nav = useNavigate();

  const {setIsLoading} = useContext(LoadingContext);

  const handleNext = () => {
    setIndexBanner((prev) => (prev + 1) % dataCampaign.length);
  };

  const handlePrev = () => {
    setIndexBanner((prev) => (prev - 1 + dataCampaign.length) % 3);
  };

  useEffect(() => {
    setItemBanner(dataCampaign[indexBanner]);
  }, [indexBanner, dataCampaign]);

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await Base.get(`/donation/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dp = res.data.data;
      if (dp != null) {
        setDataDonasi(dp);
      } else {
        setDataDonasi([]);
      }
      console.log("open donation = ", dp);
    } catch (err) {
      console.error("Error :", err);
    }
    try {
      const res = await Base.get(`/campaign/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dp = res.data.data;
      if (dp != null) {
        setDataCampaign(dp);
      } else {
        setDataCampaign([]);
      }
      console.log("open campaign = ", dp);
    } catch (err) {
      console.error("Error :", err);
    }
    try {
      const res = await Base.get(`/volunteer/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dp = res.data.data;
      if (dp != null) {
        setDataVolunteer(dp);
      } else {
        setDataVolunteer([]);
      }
      console.log("open volunteer = ", dp);
    } catch (err) {
      console.error("Error :", err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-white">
      <Navbar />
      {/* banner */}
      <div
        style={{
          backgroundImage: `${itemBanner && `url(${itemBanner.photo})`}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-fit pt-20 sm:pt-28"
      >
        <div className="w-full h-full px-0 py-0 sm:px-14 sm:py-24 gap-14 banner-home-2 flex flex-row items-center">
          {/* left button */}
          <button className="h-fit" onClick={handlePrev}>
            <img src={PrevArrow} />
          </button>

          {/* content */}
          <div className="flex flex-col w-full">
            <div className="h-80 sm:h-96 gap-5 flex flex-col justify-center">
              {itemBanner && (
                <>
                  <div className="w-full sm:w-700">
                    <h2
                      style={{ lineHeight: "1.2" }}
                      className="dl text-white w-full sm:w-455"
                    >
                      {itemBanner && itemBanner.title}
                    </h2>
                    <p style={{ lineHeight: "1.3" }} className="bl text-white">
                      {itemBanner && itemBanner.highlight}
                    </p>
                  </div>
                  <div className="w-80">
                    {itemBanner && (
                      <PrimerButton3
                        name={"Mulai Beraksi"}
                        handle={() => {
                          nav(`/aksi/kampanye/${itemBanner.ID}`);
                        }}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-row gap-3 pt-16">
              {dataCampaign &&
                dataCampaign.map((_, index) => (
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
      <div id="donasi" className="flex flex-col bg-white px-40 py-14 gap-10">
        {/* label */}
        <div className="flex flex-row gap-6">
          <div className="lg:w-1.5 bg-viridian"></div>
          <p style={{ lineHeight: "1.1" }} className="dl uppercase text-onyx">
            donasi
          </p>
        </div>
        {/* list */}
        <div className="flex flex-row gap-5 overflow-auto p-3">
          {dataDonasi && (
            dataDonasi.map((item, index) => {
              return (
                <div key={index} className="lg:mb-10">
                  <DonationCard
                    key={index}
                    id={item.ID}
                    deskripsi={item.description}
                    photo={item.photo}
                    title={item.title}
                    date={item.date}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* volunteer */}
      {(
        <div id="volunteer-sec" className="flex flex-col px-40 py-14 gap-10 bg-onyx">
          {/* label */}
          <div className="flex flex-row gap-6">
            <div className="lg:w-1.5 bg-viridian"></div>
            <p
              style={{ lineHeight: "1.1" }}
              className="dl uppercase text-white"
            >
              volunteer
            </p>
          </div>
          {/* list */}
          <div className="flex flex-col p-3 gap-7">
            {dataVolunteer.map((item) => {
              return (
                <VolunteerCard
                  id={item.ID}
                  photo={item.photo}
                  judul={item.title}
                  subjudul={item.subtitle}
                  tanggal={item.start_date}
                  deskripsi={item.description}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Aksi;
