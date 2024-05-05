import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Base } from "../../api/API";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase/Firebase";
import LoadingPic from "../../components/helper/LoadingPic";
import PrimerButton from "../../components/button/PrimerButton";
import iconDate from "../../assets/icon/linimasa/Date.svg"
import iconLocation from "../../assets/icon/linimasa/Location.svg"
import PopupSucces from "../../components/popup/PopupSucces";
import PopupConfirmation from "../../components/popup/PopupConfirmation";

const VolunteerDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate();
  const [image, setImage] = useState({ url: "", isLoading: true });
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isJoin, setIsJoin] = useState(false);
  const [isSucces, setIsSucces] = useState(false);

  const getData = () => {
    Base.get(`/volunteer/${id}`)
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

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  };

  return (
    <div className="bg-onyx">
      <Navbar />
      {isJoin && <PopupConfirmation heading={"Apakah kamu yakin mau BERGABUNG ke program ini?"} nameButton={"ok"} nameButtonNo={"BATAL"} nameButtonYes={"YA, BERGABUNG"} handlerButtonNo={() => setIsJoin(false)} handlerButtonYes={() => {
        setIsJoin(false)
        setIsSucces(true)
      }} handlerClose={() => setIsJoin(false)}/>}
      {isSucces && <PopupSucces heading={"KAMU TELAH BERHASIL BERGABUNG"} body={"Silakan cek email dalam beberapa menit untuk mendapatkan detail lebih lanjut."} nameButton={"ok"} handlerButton={() => setIsSucces(false)} handlerClose={() => setIsSucces(false)}/>}

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

      {/* body */}
      <div className="flex flex-col gap-5 bg-onyx text-onyx px-40 py-14">
        {/* gabung */}
        <div className="flex flex-row bg-white rounded-2xl p-6 justify-between items-center">
          <div className="flex flex-col">
            <p className="ds">{data.title}</p>
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-row gap-2 items-center">
                <img src={iconDate}/>
                <p className="bs">{formatDate(data.start_date)} - {formatDate(data.end_date)}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <img src={iconLocation}/>
                <p className="bs">{data.location}</p>
              </div>
            </div>
          </div>
          <div className="w-40">
            <PrimerButton name={"GABUNG SEKARANG"} handle={() => setIsJoin(true)}/>
          </div>
        </div>

        {/* deskripsi */}
        <div className="flex flex-col bg-white rounded-2xl p-6">
          <p className="ds">Deskripsi</p>
          {data.description && data.description.split("<>").map((item, index) => (
            <p style={{lineHeight: "1.1"}} key={index} className="bs">{item}</p>
          ))}
        </div>

        {/* rincian tugas */}
        <div className="flex flex-col bg-white rounded-2xl p-6">
          <p className="ds">Rincian Tugas</p>
          {data.tasks && data.tasks.split("<>").map((item, index) => (
            <p style={{lineHeight: "1.2"}} key={index} className="bs">{index+1}. {item}</p>
          ))}
        </div>

        {/* persyaratan */}
        <div className="flex flex-col bg-white rounded-2xl p-6">
          <p className="ds">Persyaratan</p>
          <div className="flex flex-row">
            <div className="flex flex-col w-full gap-3">
              <div className="flex flex-col">
                <p className="tlb">Kewarganegaraan</p>
                <p className="bs">{data.condition && data.condition.split("<>")[0]}</p>
              </div>
              <div className="flex flex-col">
                <p className="tlb">Umur</p>
                <p className="bs">{data.condition && data.condition.split("<>")[1]}</p>
              </div>
              <div className="flex flex-col">
                <p className="tlb">Pengalaman</p>
                <p className="bs">Berikut pengalaman yang dibutuhkan, tidak wajib, tetapi menjadi nilai tambah.</p>
                {data.condition && data.condition.split("<>")[2].split(":").map((item, index) =>
                    <div key={index} className="flex flex-row gap-2">
                      <p className="bs">{index+1}. </p>
                      <p className="bs">{item}</p>
                    </div>
                )} 
              </div>
              <div className="flex flex-col">
                <p className="tlb">Tingkat Pendidikan</p>
                <p className="bs">{data.condition && data.condition.split("<>")[3]}</p>
              </div>
              <div className="flex flex-col">
                <p className="tlb">Bahasa</p>
                <p className="bs">{data.condition && data.condition.split("<>")[4]}</p>
              </div>
            </div>
            <div className="flex flex-col w-full">
            <div className="flex flex-col">
                <p className="tlb">Keterampilan</p>
                {data.condition && data.condition.split("<>")[5].split(":").map((item, index) =>
                    <div key={index} className="flex flex-row gap-2">
                      <p className="bs">{index+1}. </p>
                      <p className="bs">{item}</p>
                    </div>
                )} 
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default VolunteerDetail;
