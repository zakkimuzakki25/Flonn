// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import Map from "../../components/map/Map";
import { Base } from "../../api/API";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import KorbanCard from "../../components/card/disaster/KorbanCard";
import RingkasanCard from "../../components/card/disaster/RingksanCard";
import LinimasaCard from "../../components/card/disaster/LinimasaCard";

const Disaster = () => {
  const [data, setData] = useState([]);
  // const token = window.localStorage.getItem("token");

  const filterHandle = async (selectedYear, selectedMonth) => {
    try {
      // console.log(selectedMonth);
      // console.log(selectedYear);
      const res = await Base.get(
        `/disaster/filter?month=${selectedMonth}&year=${selectedYear}`
      );
      const dp = res.data.data;
      if (dp != null) {
        setData(dp);
      } else {
        setData([]);
      }
      console.log("Data Bencana = ");
      // console.log(dp);
    } catch (err) {
      console.error("Error in filterHandle:", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Base.get("/disaster/all");
        const dp = res.data.data;
        if (dp != null) {
          setData(dp);
        } else {
          setData([]);
        }
        console.log("Data Bencana = ");
        // console.log(dp);
      } catch (err) {
        console.error("Error in filterHandle:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-w-full">
      <Navbar />

      <div className="flex flex-col gap-12 lg:px-40 lg:py-44 bg-disasterMap">
        <div className="flex items-center justify-center w-full h-80 rounded-3xl overflow-hidden">
          {/* <Map
            apikey={import.meta.env.VITE_HERE_MAPS_KEY}
            data={data}
            filterHandle={filterHandle}
          /> */}
        </div>

        <div className="flex flex-row gap-12 lg:h-105">
          <div className="left">
            <LinimasaCard data={data} />
          </div>

          <div className="flex flex-col w-full gap-7">
            <RingkasanCard data={data} />
            <KorbanCard data={data} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disaster;
