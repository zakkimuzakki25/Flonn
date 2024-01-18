// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import BiodiversityCard from "../../components/card/biodiversity/BiodiversityCard";
import "./Biodiversitas.css";
import { Base } from "../../api/Api";
import FilterBiodiversity from "../../components/filter/FilterBiodiversity";

const Biodiversitas = () => {
  const [data, setData] = useState([]);

  const filterHandle = (nama, kingdom, habitat, status) => {
    Base.get(`biodiversity/filter?name=${nama}&kingdom=${kingdom}&habitat=${habitat}&status=${status}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        // window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="banner-bio flex w-full   lg:px-24 lg:pt-64 bg-black justify-center">
        <div className="text-white lg:w-105 relative lg:-right-60">
          <h1 style={{ lineHeight: "1.2" }} className="dl uppercase">
            The more you know, the more you don&apos;t know
          </h1>
          <p className="tl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vulputate vehicula fermentum. Proin commodo ultricies mauris, at
            placerat velit viverra ac.
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-default">
        {/* filter */}
        <FilterBiodiversity handleChange={filterHandle} />

        {/* bio list */}
        <div className="flex flex-col lg:gap-14 lg:px-40 relative -top-14">
          {data.map((bio) => (
            <BiodiversityCard
              id={bio.id}
              key={bio.id}
              nama={bio.name}
              namaLatin={bio.latin_name}
              deskripsi={bio.description}
              kingdom={bio.kingdom}
              habitat={bio.habitat}
              status={bio.status}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Biodiversitas;
