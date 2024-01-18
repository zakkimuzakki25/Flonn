import { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import imageMerch from "../../assets/images/background/Merch.jpg";
import MerchCard from "../../components/card/merch/MerchCard";
import { Base } from "../../api/Api";

const Merch = () => {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  const getData = async () => {
    try {
      const res = await Base.get(`/merch`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dp = res.data.data;
      if (dp != null) {
        setData(dp);
      } else {
        setData([]);
      }
      // console.log("merch = ", dp);
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
      <div
        style={{
          backgroundImage: `url(${imageMerch})`,
          backgroundSize: "cover",
        }}
        className="w-full h-fit lg:pt-28"
      >
        <div className="w-full h-full lg:px-40 lg:py-40 banner-2 items-end flex flex-col text-right">
          <h1 style={{ lineHeight: "1.25" }} className="dl text-white lg:w-455">
            manfaatkan hobi belanjamu di sini
          </h1>
          <p
            style={{ lineHeight: "1.2" }}
            className="headl text-white lg:w-455 lg:pb-2"
          >
            Hasil profit penjualan akan didonasikan sebesar 20% untuk kegiatan
            konservasi dan restorasi akibat bencana.
          </p>
        </div>
      </div>

      {/* filter */}
      <div className="flex flex-col lg:px-40 lg:py-20">
        <div className="flex flex-col w-full gap-0 lg:mb-20">
          <h2 style={{ lineHeight: "1.3" }} className="dl text-white uppercase">
            bantuan datang dari mana saja,
          </h2>
          <h2 style={{ lineHeight: "1.3" }} className="dl text-white uppercase">
            mulai dari hal kecil
          </h2>
        </div>

        {/* list merch */}
        <div className="flex flex-wrap justify-between">
          {data.map((item, index) => {
            return (
              <div key={index} className="lg:mb-20">
                <MerchCard
                  floint={item.floint}
                  id={item.ID}
                  price={item.price}
                  rate={item.rate}
                  title={item.title}
                  photo={item.photo}
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

export default Merch;
