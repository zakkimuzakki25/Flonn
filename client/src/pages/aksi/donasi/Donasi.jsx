// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navigation/Navbar";
import Footer from "../../../components/navigation/Footer";
import { BaseAPI } from "../../../api/API";
import DonationCard from "../../../components/card/disaster/DonationCard";
import "./Donasi.css";
import { Link } from "react-router-dom";

const Donasi = () => {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

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
      // console.log("open donation = ", dp);
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

      <div className="w-full h-fit lg:pt-28 banner-donasi">
        <div className="w-full h-full lg:px-40 lg:py-40 banner-2">
          <h1 style={{ lineHeight: "1.25" }} className="dl text-white lg:w-455">
            salurkan aksi dengan cepat dan mudah
          </h1>
          <p
            style={{ lineHeight: "1.2" }}
            className="headl text-white lg:w-455 lg:pb-2"
          >
            Kami pastikan segala bentuk bantuan akan tersalurkan dengan baik dan
            tepat sasaran.
          </p>
          <Link
            to={"/donasi/detail"}
            className="link-home ds flex flex-row gap-2 bg-jasmine w-fit rounded-2xl uppercase lg:py-2 lg:px-4 text-onyx lg:mt-5"
          >
            Selengkapnya
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:px-40 lg:py-20">
        <div className="flex flex-col w-full gap-0 lg:mb-20">
          <h2 style={{lineHeight: "1.3"}} className="dl text-white uppercase">
            bantuan datang dari mana saja,
          </h2>
          <h2 style={{lineHeight: "1.3"}} className="dl text-white uppercase">
            mulai dari hal kecil 
          </h2>
        </div>

        {/* list donasi bencana */}
        <div className="flex flex-wrap justify-between">
          {data.map((item, index) => {
            return (
              <div key={index} className="lg:mb-20">
                <DonationCard
                  key={index}
                  id={item.id}
                  deskripsi={item.description}
                  photo={item.photo}
                  title={item.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donasi;
