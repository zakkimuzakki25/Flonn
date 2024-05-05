import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Base } from "../../api/API";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase/Firebase";
import LoadingPic from "../../components/helper/LoadingPic";
import negIll from "../../assets/illustration/campaign/Negative.png"
import stepsIll from "../../assets/illustration/campaign/Steps.png"
import BusinessPersonIll from "../../assets/illustration/campaign/BusinessPerson.png"
import PrimerButton3 from "../../components/button/PrimerButton3";
import FakeButton from "../../components/button/FakeButton";

const KampanyeDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate();
  const [image, setImage] = useState({ url: "", isLoading: true });
  const { id } = useParams();
  const [data, setData] = useState({});
//   dummy
  const [isCampaign, setIsCampaign] = useState(false);

  const getData = () => {
    Base.get(`/campaign/${id}`)
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

      <div className="flex flex-col w-full lg:mt-28">
        <div className="h-fit w-full flex flex-row px-40 py-2.5 gap-5">
          <Link to={"/aksi"} className="bl text-white hover:text-cambridgeBlue">
            Aksi
          </Link>
          <p className="bl text-white">&gt;</p>
          <p className="bl text-cambridgeBlue">Volunteer {data.title}</p>
        </div>
        {image.isLoading ? (
          <div className="w-full h-550 justify-center items-center flex bg-default">
            <LoadingPic />
          </div>
        ) : (
          <img src={image.url} className="w-full h-550 object-cover" />
        )}
      </div>

      {/* Tentang */}
      <div className="flex py-12 px-40 bg-onyx">
        <div className="flex flex-col bg-white rounded-3xl p-6">
            <p className="ds">Tentang &quot;{data.title}&quot;</p>
            <p className="bs">{data.description}</p>
        </div>
      </div>

      {/* Keterangan */}
      <div className={`py-16 px-40 ${data.is_positive ? "bg-oldGreen" : "bg-oldRose"} flex flex-row gap-10`}>
        <img src={negIll}/>
        <div className="flex flex-col text-white gap-5">
            <div className="flex flex-row gap-2.5">
                <div className="w-2 h-full bg-jasmine"/>
                <p className="ds">{data.keterangan && data.keterangan.split("##")[0]}</p>
            </div>
            {data.keterangan && data.keterangan.split("##")[1].split("<>").map((item, index) => (
                <p key={index} className="bs">{item}</p>
            ))}
        </div>
      </div>

      {/* Steps */}
      <div className="py-16 px-40 bg-onyx flex flex-row gap-20">
        <div className="flex flex-col text-white gap-2 w-full">
            <div className="flex flex-col w-fit">
                <p className="ds">apa yang bisa kita lakukan?</p>
                <div className="h-1 w-full bg-oldGreen"/>
            </div>
            {data.steps && data.steps.split("<>").map((item, index) => (
                <div key={index} className="flex flex-row gap-3 items-center">
                    <p className="ds">{index+1}</p>
                    <p className="bs"> {item}</p>
                </div>
            ))}
        </div>
        <img src={stepsIll} className="object-cover w-72 h-fit"/>
      </div>

      {/* bar down */}
      <div className="py-16 px-40 bg-onyx flex flex-row gap-20">
        <div className="flex flex-row bg-viridian text-white gap-8 w-full p-14 rounded-2xl">
            <img src={BusinessPersonIll} className="object-cover w-fit h-64"/>
            <div className="flex flex-col px-10">
                <p style={{lineHeight: "1.3"}} className="dl">30 orang sudah mendukung kampanye ini.</p>
                <p className="tl">Sekarang waktunya giliranmu. Berani mengambil langkah?</p>
                <div className="w-40 pt-7">
                    {!isCampaign ? (
                        <PrimerButton3 name={"Done Bang"} handle={() => setIsCampaign(true)} />
                    ) : (
                        <FakeButton name={"Mantap"}/>
                    )}
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KampanyeDetail;
