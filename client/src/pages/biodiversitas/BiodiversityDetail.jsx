import { useEffect, useState } from "react";
import { storage } from "../../firebase/Firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { Link, useParams } from "react-router-dom";
import { Base } from "../../api/Api";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import LoadingPic from "../../components/helper/LoadingPic";
// Status
import iconStatus from "../../assets/icon/biodiversity/status/CR.svg";
// habitat
import iconRainforest from "../../assets/icon/biodiversity/habitat/Rainforest.svg";
import iconCoral from "../../assets/icon/biodiversity/habitat/Coral.svg";
import iconDessert from "../../assets/icon/biodiversity/habitat/Dessert.svg";
import iconGrassland from "../../assets/icon/biodiversity/habitat/Grassland.svg";
import iconLentic from "../../assets/icon/biodiversity/habitat/Lentic.svg";
import iconLittoral from "../../assets/icon/biodiversity/habitat/Littoral.svg";
import iconOceanic from "../../assets/icon/biodiversity/habitat/Oceanic.svg";
import iconShrubland from "../../assets/icon/biodiversity/habitat/Shrubland.svg";
import iconTaiga from "../../assets/icon/biodiversity/habitat/Taiga.svg";
import iconTemperateRaindforest from "../../assets/icon/biodiversity/habitat/TemperateRaindforest.svg";
import iconTundra from "../../assets/icon/biodiversity/habitat/Tundra.svg";

import iconPopulasi from "../../assets/icon/biodiversity/Populasi.svg";
import iconBeratBadan from "../../assets/icon/biodiversity/BeratBadan.svg";
import iconUkuranTubuh from "../../assets/icon/biodiversity/UkuranTubuh.svg";
import iconRentangUsia from "../../assets/icon/biodiversity/RentangUsia.svg";
import iconDetail from "../../assets/icon/biodiversity/Detail.svg";

import logoIUCN from "../../assets/logo/IUCN.png";
import TooltipRegular from "../../components/tooltips/TooltipRegular";
import MapView from "../../components/map/MapView";

const BiodiversityDetail = () => {
  const [image, setImage] = useState({ url: "", isLoading: true });
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = () => {
    Base.get(`/biodiversity/${id}`)
      .then((res) => {
        const dp = res.data.data;
        setData(dp);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    const fetchImage = async () => {
      if (!data.photo) return;

      try {
        const photoPath = data.photo;
        const imageRef = ref(storage, photoPath);

        const url = await getDownloadURL(imageRef);
        setImage({ url, isLoading: false });
      } catch (error) {
        console.error("Error getting download URL:", error);
      }
    };

    fetchImage();
  }, [data.photo]);

  return (
    <div className="bg-onyx">
      <Navbar />

      <section className="flex flex-col w-full lg:mt-28">
        <nav className="h-fit w-full flex flex-row px-40 py-2.5 gap-5">
          <Link
            to={"/biodiversitas"}
            className="bl text-white hover:text-cambridgeBlue"
          >
            Biodiversitas
          </Link>
          <p className="bl text-white">&gt;</p>
          <p className="bl text-cambridgeBlue">{data.name}</p>
        </nav>
        {image.isLoading ? (
          <div className="w-full h-550 justify-center items-center flex bg-default">
            <LoadingPic />
          </div>
        ) : (
          <img src={image.url} className="w-full h-550 object-cover" alt={"banner biodiversitas " + data.name}/>
        )}
      </section>

      <article className="flex flex-row bg-white lg:px-40 lg:py-12 gap-20">
        {/* left bar info */}
        <aside className="flex flex-col gap-7 h-fit shrink-0 bg-white shadow-s-default px-10 py-8 rounded-2xl">
          {/* 2 icon */}
          <div className="flex flex-row gap-4 justify-center">
            <TooltipRegular
              title={data.status_id}
              text={data.status_description}
              object={
                <img src={iconStatus} className="cursor-pointer w-12 h-12" />
              }
            />
            <TooltipRegular
              title={data.habitat}
              text={data.habitat_description}
              object={
                <img
                  className="w-12 h-12"
                  src={(() => {
                    switch (data.habitat) {
                      case "Hutan Hujan":
                        return iconRainforest;
                      case "Coral":
                        return iconCoral;
                      case "Gurun":
                        return iconDessert;
                      case "Padang Rumput":
                        return iconGrassland;
                      case "Perairan Lentik":
                        return iconLentic;
                      case "Zona Litoral":
                        return iconLittoral;
                      case "Oceanic":
                        return iconOceanic;
                      case "Semak Belukar":
                        return iconShrubland;
                      case "Taiga":
                        return iconTaiga;
                      case "Hutan Beriklim Sedang":
                        return iconTemperateRaindforest;
                      case "Tundra":
                        return iconTundra;
                      default:
                        return null;
                    }
                  })()}
                />
              }
            />
          </div>

          {/* populasi */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconPopulasi} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">populasi</p>
              <p className="text-sm bs">{data.populasi}</p>
            </div>
          </div>
          {/* berat badan */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconBeratBadan} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">berat badan</p>
              <p className="text-sm bs">{data.berat_badan} Kilogram</p>
            </div>
          </div>
          {/* ukuran tubuh */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconUkuranTubuh} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">ukuran tubuh</p>
              <p className="text-sm bs">{data.ukuran_tubuh} Meters</p>
            </div>
          </div>
          {/* rentang usia */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconRentangUsia} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">rentang usia</p>
              <p className="text-sm bs">{data.rentang_usia} Tahun</p>
            </div>
          </div>
          {/* detail */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconDetail} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">detail</p>
              <Link className="text-sm bs w-28 hover:text-oldGreen">
                Klik untuk melihat lebih lanjut
              </Link>
            </div>
          </div>
        </aside>

        {/* detail */}
        <section className="flex flex-col text-onyx">
          {/* name */}
          <h1 style={{ lineHeight: "1.2" }} className="dl">
            {data.name}
          </h1>
          {/* latin name */}
          <h2 style={{ lineHeight: "1" }} className="dmi pb-5">
            {data.latin_name}
          </h2>
          {/* desc */}
          {data.description &&
            data.description.split("<>").map((item, index) => (
              <p className="bs" key={index}>
                {item}
              </p>
            ))}
          {/* location */}
          <div className="flex flex-row gap-2 py-5">
            <div className="lg:w-1 bg-oldRose"></div>
            <h3 style={{ lineHeight: "1.1" }} className="ds uppercase">
              lokasi
            </h3>
          </div>
          <div className="w-full h-300 flex items-center justify-center">
            <MapView
              apikey={import.meta.env.VITE_MAPS_KEY}
              centerLat={data.latitude}
              centerLong={data.longitude}
              zoomLevel={6}
            />
          </div>
        </section>
      </article>

      {/* karakteristik */}
      <section className="flex flex-col bg-oldGreen lg:pt-14 overflow-x-hidden">
        <h2 className="dl w-full justify-center flex items-center text-white text-center">
          Karakteristik
        </h2>
        <div className="w-full h-fit flex flex-col py-5">
          <div className="flex justify-center items-center">
            {/* item 1 */}
            {data.characteristics && data.characteristics.split("<>")[0] && (
              <div className="flex flex-row gap-3 translate-y-10">
                {/* nomor */}
                <div className="w-10 h-10 rounded-full bg-cambridgeBlue text-white headl flex shrink-0 justify-center items-center">
                  1
                </div>
                {/* teks */}
                <div className="flex flex-col text-white gap-2">
                  <h3
                    style={{ lineHeight: "1" }}
                    className="text-3xl font-semibold"
                  >
                    {data.characteristics.split("<>")[0].split(":")[0]}
                  </h3>
                  <p className="text-lg w-455">
                    {data.characteristics.split("<>")[0].split(":")[1]}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex px-20 justify-center items-center">
            {/* left */}
            <div className="flex flex-col flex-1 py-20 justify-center gap-16">
              {/* item 2 */}
              {data.characteristics && data.characteristics.split("<>")[1] && (
                <div className="flex flex-row gap-3 translate-x-10">
                  {/* nomor */}
                  <div className="w-10 h-10 rounded-full bg-cambridgeBlue text-white headl flex shrink-0 justify-center items-center">
                    2
                  </div>
                  {/* teks */}
                  <div className="flex flex-col text-white gap-2">
                    <h3
                      style={{ lineHeight: "1" }}
                      className="text-3xl font-semibold"
                    >
                      {data.characteristics.split("<>")[1].split(":")[0]}
                    </h3>
                    <p className="text-lg">
                      {data.characteristics.split("<>")[1].split(":")[1]}
                    </p>
                  </div>
                </div>
              )}
              {/* item 4 */}
              {data.characteristics && data.characteristics.split("<>")[3] && (
                <div className="flex flex-row gap-3">
                  {/* nomor */}
                  <div className="w-10 h-10 rounded-full bg-cambridgeBlue text-white headl flex shrink-0 justify-center items-center">
                    4
                  </div>
                  {/* teks */}
                  <div className="flex flex-col text-white gap-2">
                    <h3
                      style={{ lineHeight: "1" }}
                      className="text-3xl font-semibold"
                    >
                      {data.characteristics.split("<>")[3].split(":")[0]}
                    </h3>
                    <p className="text-lg">
                      {data.characteristics.split("<>")[3].split(":")[1]}
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* gambar */}
            <img className="flex shrink-0 m-5 w-455" src={data.characteristics_photo} />
            {/* right */}
            <div className="flex flex-col flex-1 py-20 justify-center gap-16">
              {/* item 3 */}
              {data.characteristics && data.characteristics.split("<>")[2] && (
                <div className="flex flex-row gap-3 -translate-x-10">
                  {/* nomor */}
                  <div className="w-10 h-10 rounded-full bg-cambridgeBlue text-white headl flex shrink-0 justify-center items-center">
                    3
                  </div>
                  {/* teks */}
                  <div className="flex flex-col text-white gap-2">
                    <h3
                      style={{ lineHeight: "1" }}
                      className="text-3xl font-semibold"
                    >
                      {data.characteristics.split("<>")[2].split(":")[0]}
                    </h3>
                    <p className="text-lg">
                      {data.characteristics.split("<>")[2].split(":")[1]}
                    </p>
                  </div>
                </div>
              )}
              {/* item 5 */}
              {data.characteristics && data.characteristics.split("<>")[4] && (
                <div className="flex flex-row gap-3">
                  {/* nomor */}
                  <div className="w-10 h-10 rounded-full bg-cambridgeBlue text-white headl flex shrink-0 justify-center items-center">
                    5
                  </div>
                  {/* teks */}
                  <div className="flex flex-col text-white gap-2">
                    <h3
                      style={{ lineHeight: "1" }}
                      className="text-3xl font-semibold"
                    >
                      {data.characteristics.split("<>")[4].split(":")[0]}
                    </h3>
                    <p className="text-lg">
                      {data.characteristics.split("<>")[4].split(":")[1]}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* item 6 */}
            {data.characteristics && data.characteristics.split("<>")[5] && (
              <div className="flex flex-row gap-3 -translate-y-10">
                {/* nomor */}
                <div className="w-10 h-10 rounded-full bg-cambridgeBlue text-white headl flex shrink-0 justify-center items-center">
                  6
                </div>
                {/* teks */}
                <div className="flex flex-col text-white gap-2">
                  <h3
                    style={{ lineHeight: "1" }}
                    className="text-3xl font-semibold"
                  >
                    {data.characteristics.split("<>")[5].split(":")[0]}
                  </h3>
                  <p className="text-lg w-455">
                    {data.characteristics.split("<>")[5].split(":")[1]}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* status */}
      <section className="flex flex-col bg-white lg:py-20 gap-16">
        {/* top */}
        <div className="flex flex-row">
          <div className="flex flex-1 flex-col h-auto">
            <div className="flex flex-col px-24">
            <h2 style={{lineHeight: "1"}} className="dl text-oldGreen mb-2.5">
              Status
            </h2>
            <div className="flex flex-row gap-2.5">
              <img src={logoIUCN} alt="iucn logo" className="w-10 h-10"/>
              <p className="text-3xl font-semibold text-oldGreen">{data.status && data.status.split("<>")[0]}</p>
            </div>
            <p>{data.status && data.status.split("<>")[1]}</p>
            </div>
            <div className="w-full h-455 overflow-hidden mt-auto translate-x-24">
              <img className="w-full h-full object-cover" src={data.status_photos && data.status_photos.split("<>")[1]} />
            </div>
          </div>
          <div className="flex flex-col">
            <img src={data.status_photos && data.status_photos.split("<>")[0]} className="w-700 h-600 object-cover"/>
            <div className="flex flex-row gap-5 ml-32">
              <img src={data.status_photos && data.status_photos.split("<>")[2]} className="w-48 h-48 object-cover"/>
              <img src={data.status_photos && data.status_photos.split("<>")[3]} className="w-48 h-48 object-cover"/>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="px-24 flex-wrap flex gap-y-4">
          {data.status && data.status.split("<>")[2].split(":").map((item, index) => {
            return (
              <div key={index} className="flex flex-row w-1/2 h-fit gap-2">
                <div className="w-1 bg-jasmine"/>
                <p className="text-base font-medium">{item}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* related content */}
      <div className="flex flex-col bg-onyx lg:px-40 lg:py-12 text-white gap-10">
        {/* related videos */}
        <div className="flex flex-col gap-3">
          <h2 className="ds uppercase">related videos</h2>
          <div className="flex flex-row justify-between">
            <iframe
              width="360"
              height="220"
              src="https://www.youtube.com/embed/FK3dav4bA4s?si=1-8uSIWD_exaG6hc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
            <iframe
              width="360"
              height="220"
              src="https://www.youtube.com/embed/dOMAT8fOr0Q?si=qOwXdyW6HvjaT_m3"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
            <iframe
              width="360"
              height="220"
              src="https://www.youtube.com/embed/8OmRW4em_vA?si=MJwRqp3EYgUxKsOy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
        {/* read more */}
        <div className="hidden flex-col gap-3">
          <p className="ds uppercase">read more</p>
          <div className="flex flex-col gap-1">
            <Link className="bs hover:text-cambridgeBlue">
              Tiger | Species | WWF (worldwildlife.org)
            </Link>
            <Link className="bs hover:text-cambridgeBlue">
              Tiger (nationalgeographic.com)
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BiodiversityDetail;
