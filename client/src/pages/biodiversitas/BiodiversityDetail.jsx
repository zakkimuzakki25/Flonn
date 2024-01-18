import { useEffect, useState } from "react";
import { storage } from "../../firebase/Firebase";
import { getDownloadURL, ref } from "firebase/storage";
import { useParams } from "react-router-dom";
import { Base } from "../../api/Api";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import LoadingPic from "../../components/helper/LoadingPic";

const BiodiversityDetail = () => {
  const [images, setImages] = useState([
    { url: "", isLoading: true },
    { url: "", isLoading: true },
    { url: "", isLoading: true },
  ]);
  const { id } = useParams();
  const [data, setData] = useState({});

  const getData = () => {
    Base.get(`/biodiversity/${id}`)
      .then((res) => {
        const dp = res.data.data;
        setData(dp);
        // console.log(res)
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
    const fetchImages = async () => {
      try {
        const imagePromises = Array.from({ length: 3 }, async (_, index) => {
          const imageRef = ref(
            storage,
            `biodiversity/${data.name + (index + 1)}.jpg`
          );
          try {
            const url = await getDownloadURL(imageRef);
            setImages((prevImages) => {
              const updatedImages = [...prevImages];
              updatedImages[index] = { url, isLoading: false };
              return updatedImages;
            });
          } catch (error) {
            console.error("Error getting download URL:", error);
          }
        });

        await Promise.all(imagePromises);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [data.name]);

  return (
    <div className="bg-onyx">
      <Navbar />

      <div className="flex flex-row w-full justify-center items-center lg:mt-28 lg:py-24 lg:gap-5">
        <div className="w-72 h-347 overflow-hidden rounded-3xl">
          {images[0].isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-default">
              <LoadingPic />
            </div>
          ) : (
            <img
              src={images[0].url}
              className="w-full h-full object-cover imghover"
            />
          )}
        </div>
        <div className="w-550 h-347 overflow-hidden rounded-3xl">
          {images[1].isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-default">
              <LoadingPic />
            </div>
          ) : (
            <img
              src={images[1].url}
              className="w-full h-full object-cover imghover"
            />
          )}
        </div>
        <div className="w-72 h-347 overflow-hidden rounded-3xl">
          {images[2].isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-default">
              <LoadingPic />
            </div>
          ) : (
            <img
              src={images[2].url}
              className="w-full h-full object-cover imghover"
            />
          )}
        </div>
      </div>

      <div className="bg-white lg:px-40 lg:py-10">
        <h1 style={{ lineHeight: "1.0" }} className="dl text-onyx">
          {data.name}
        </h1>
        <h2 className="dmi text-onyx lg:mb-2">{data.latin_name}</h2>
        <p className="bl text-onyx">{data.description}</p>
      </div>

      <div className="flex flex-col lg:px-96 lg:py-14 lg:gap-5">
        <div className="flex flex-row lg:gap-16 justify-center items-center">
          <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
            {data.kingdom}
          </div>
          <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
            Kingdom
          </div>
        </div>
        {data.kingdom === "Plantae" ? (
          <div className="flex flex-row lg:gap-16 justify-center items-center">
            <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
              {data.diovisio}
            </div>
            <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
              Diovisio
            </div>
          </div>
        ) : (
          <div className="flex flex-row lg:gap-16 justify-center items-center">
            <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
              {data.phylum}
            </div>
            <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
              Phylum
            </div>
          </div>
        )}
        <div className="flex flex-row lg:gap-16 justify-center items-center">
          <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
            {data.classis}
          </div>
          <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
            Classis
          </div>
        </div>
        <div className="flex flex-row lg:gap-16 justify-center items-center">
          <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
            {data.ordo}
          </div>
          <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
            Ordo
          </div>
        </div>
        <div className="flex flex-row lg:gap-16 justify-center items-center">
          <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
            {data.familia}
          </div>
          <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
            Familia
          </div>
        </div>
        <div className="flex flex-row lg:gap-16 justify-center items-center">
          <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
            {data.genus}
          </div>
          <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
            Genus
          </div>
        </div>
        <div className="flex flex-row lg:gap-16 justify-center items-center">
          <div className="ds text-white bg-viridian rounded-3xl justify-center items-center flex lg:w-550 lg:h-20">
            {data.species}
          </div>
          <div className="ds text-peachYellow h-full self-center lg:w-28 text-left">
            Species
          </div>
        </div>
      </div>

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
      <Footer />
    </div>
  );
};

export default BiodiversityDetail;
