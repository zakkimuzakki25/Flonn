import { useEffect, useState } from "react"
import { storage } from "../../firebase/Firebase"
import { getDownloadURL, ref } from "firebase/storage"
import { Link, useParams } from "react-router-dom"
import { Base } from "../../api/API"
import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import LoadingPic from "../../components/helper/LoadingPic"
// Status
import iconStatus from "../../assets/icon/biodiversity/status/CR.svg"
// habitat
import iconRainforest from "../../assets/icon/biodiversity/habitat/Rainforest.svg"
import iconCoral from "../../assets/icon/biodiversity/habitat/Coral.svg"
import iconDessert from "../../assets/icon/biodiversity/habitat/Dessert.svg"
import iconGrassland from "../../assets/icon/biodiversity/habitat/Grassland.svg"
import iconLentic from "../../assets/icon/biodiversity/habitat/Lentic.svg"
import iconLittoral from "../../assets/icon/biodiversity/habitat/Littoral.svg"
import iconOceanic from "../../assets/icon/biodiversity/habitat/Oceanic.svg"
import iconShrubland from "../../assets/icon/biodiversity/habitat/Shrubland.svg"
import iconTaiga from "../../assets/icon/biodiversity/habitat/Taiga.svg"
import iconTemperateRaindforest from "../../assets/icon/biodiversity/habitat/TemperateRaindforest.svg"
import iconTundra from "../../assets/icon/biodiversity/habitat/Tundra.svg"

import iconPopulasi from "../../assets/icon/biodiversity/Populasi.svg"
import iconBeratBadan from "../../assets/icon/biodiversity/BeratBadan.svg"
import iconUkuranTubuh from "../../assets/icon/biodiversity/UkuranTubuh.svg"
import iconRentangUsia from "../../assets/icon/biodiversity/RentangUsia.svg"
import iconDetail from "../../assets/icon/biodiversity/Detail.svg"
import fmap from "./fMap.png"
import TooltipRegular from "../../components/tooltips/TooltipRegular"

const BiodiversityDetail = () => {
  const [image, setImage] = useState({ url: "", isLoading: true })
  const { id } = useParams()
  const [data, setData] = useState({})

  const getData = () => {
    Base.get(`/biodiversity/${id}`)
      .then((res) => {
        const dp = res.data.data
        setData(dp)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    const fetchImage = async () => {
      if (!data.photo) return

      try {
        const photoPath = data.photo
        const imageRef = ref(storage, photoPath)

        const url = await getDownloadURL(imageRef)
        setImage({ url, isLoading: false })

      } catch (error) {
        console.error("Error getting download URL:", error)
      }
    }

    fetchImage()
  }, [data.photo])

  return (
    <div className="bg-onyx">
      <Navbar />

      <div className="flex flex-col w-full lg:mt-28">
        <div className="h-fit w-full flex flex-row px-40 py-2.5 gap-5">
          <Link to={'/biodiversitas'} className="bl text-white hover:text-cambridgeBlue">Biodiversitas</Link>
          <p className="bl text-white">&gt;</p>
          <p className="bl text-cambridgeBlue">{data.name}</p>
        </div>
        {image.isLoading ? (
          <div className="w-full h-550 justify-center items-center flex bg-default">
            <LoadingPic />
          </div>
        ) : (
          <img
            src={image.url}
            className="w-full h-550 object-cover"
          />
        )}
      </div>

      <div className="flex flex-row bg-white lg:px-40 lg:py-12 gap-20">
        {/* left bar info */}
        <div className="flex flex-col gap-7 h-fit shrink-0 bg-white shadow-s-default px-10 py-8 rounded-2xl">
          {/* 2 icon */}
          <div className="flex flex-row gap-4 justify-center">
            <TooltipRegular 
              title={data.status}
              text={data.status_description}
              object={<img src={iconStatus} className="cursor-pointer w-12 h-12"/>}
            />
            <TooltipRegular 
              title={data.habitat}
              text={data.habitat_description}
              object={<img className="w-12 h-12"
                src={
                  (() => {
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
                  })()
                }
              />}
            />
          </div>

          {/* populasi */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconPopulasi} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">populasi</p>
              <p className="text-sm bs">400 - 500 Ekor</p>
            </div>
          </div>
          {/* berat badan */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconBeratBadan} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">berat badan</p>
              <p className="text-sm bs">110 – 140 Kilogram</p>
            </div>
          </div>
          {/* ukuran tubuh */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconUkuranTubuh} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">ukuran tubuh</p>
              <p className="text-sm bs">2.1 – 2.3 Meters</p>
            </div>
          </div>
          {/* rentang usia */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconRentangUsia} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">rentang usia</p>
              <p className="text-sm bs">15 - 26 Tahun</p>
            </div>
          </div>
          {/* detail */}
          <div className="flex flex-row gap-2 items-center">
            <img src={iconDetail} />
            <div className="flex flex-col gap-0">
              <p className="bs font-semibold uppercase">detail</p>
              <Link className="text-sm bs w-28">Klik untuk melihat lebih lanjut</Link>
            </div>
          </div>
        </div>

        {/* detail */}
        <div className="flex flex-col text-onyx">
          {/* name */}
          <p style={{lineHeight: "1.2"}} className="dl">{data.name}</p>
          {/* latin name */}
          <p style={{lineHeight: "1"}} className="dmi pb-5">{data.latin_name}</p>
          {/* desc */}
          {data.description && (
            data.description.split("<>").map((item, index) => (
              <p className="bs" key={index}>{item}</p>
            ))
          )}
          {/* location */}
          <div className="flex flex-row gap-2 py-5">
            <div className="lg:w-1 bg-oldRose"></div>
            <p
              style={{ lineHeight: "1.1" }}
              className="ds uppercase"
            >lokasi</p>
          </div>
          <img src={fmap} />
        </div>
      </div>

      {/* detail */}
      <div className="flex flex-col bg-oldGreen lg:py-20 lg:px-40 gap-12">
        <div className="w-full h-fit flex flex-col bg-transparent rounded-3xl">
          <div className="ds text-onyx text-center pt-1 w-96 pb-5 bg-jasmine rounded-t-3xl shadow-default z-10">
            Karakteristik
          </div>

          <div className="relative -top-5 z-10 bg-white lg:py-12 lg:px-14 rounded-3xl flex flex-row shadow-default justify-between">{data.characteristics}</div>
        </div>

        <div className="w-full h-fit flex flex-col bg-transparent rounded-3xl">
          <div className="ds text-onyx text-center pt-1 w-96 pb-5 bg-jasmine rounded-t-3xl shadow-default z-10 self-end">
            Perilaku
          </div>

          <div className="relative -top-5 z-10 bg-white lg:py-12 lg:px-14 rounded-3xl flex flex-row shadow-default justify-between">{data.behavior}</div>
        </div>
      </div>

      {/* related content */}
      <div className="flex flex-col bg-onyx lg:px-40 lg:py-12 text-white gap-10">
        {/* related videos */}
        <div className="flex flex-col gap-3">
          <p className="ds uppercase">related videos</p>
          <div className="flex flex-row justify-between">
            <iframe 
              width="360" 
              height="220" 
              src="https://www.youtube.com/embed/FK3dav4bA4s?si=1-8uSIWD_exaG6hc" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowfullscreen/>
            <iframe 
              width="360" 
              height="220" 
              src="https://www.youtube.com/embed/dOMAT8fOr0Q?si=qOwXdyW6HvjaT_m3" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowfullscreen/>
            <iframe 
              width="360" 
              height="220" 
              src="https://www.youtube.com/embed/8OmRW4em_vA?si=MJwRqp3EYgUxKsOy" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowfullscreen/>
          </div>
        </div>
        {/* read more */}
        <div className="hidden flex-col gap-3">
          <p className="ds uppercase">read more</p>
          <div className="flex flex-col gap-1">
            <Link className="bs hover:text-cambridgeBlue">Tiger | Species | WWF (worldwildlife.org)</Link>
            <Link className="bs hover:text-cambridgeBlue">Tiger (nationalgeographic.com)</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BiodiversityDetail
