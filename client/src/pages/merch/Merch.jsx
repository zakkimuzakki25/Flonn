import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import imageMerch from "../../assets/images/background/Merch.jpg";
import MerchCard from "../../components/card/merch/MerchCard";
import { Base, BaseAPI } from "../../api/Api";

const Merch = () => {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");
  const [floint, setFloint] = useState(0)

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

  const getDataFloint = () => {
    BaseAPI.get('user/floint-detail', {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        if (res.data.data) {
          setFloint(res.data.data.floint)
        }
      }, (err) => {
        console.log("error : ", err)
      })
  }

  useEffect(() => {
    getData();
    getDataFloint();
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
        <div className="w-full h-full lg:px-40 lg:py-44 banner-home-2 items-start flex flex-col text-left">
          <h1 style={{ lineHeight: "1.25" }} className="dl text-white lg:w-600">
            manfaatkan hobi belanjamu di sini
          </h1>
          <p
            style={{ lineHeight: "1.2" }}
            className="headl text-white lg:w-600 lg:pb-2"
          >
            Hasil profit penjualan akan didonasikan sebesar 20% untuk kegiatan
            konservasi dan restorasi akibat bencana.
          </p>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-col lg:px-40 lg:py-20">

        {/* list merch */}
        <div className="flex flex-wrap justify-between gap-y-10">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <MerchCard
                  floint={item.floint}
                  userFloint={floint}
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
