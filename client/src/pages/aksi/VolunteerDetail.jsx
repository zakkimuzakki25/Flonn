import { useEffect, useState } from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Base, BaseAPI } from "../../api/Api";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase/Firebase";
import LoadingPic from "../../components/helper/LoadingPic";
import PrimerButton from "../../components/button/PrimerButton";
import iconDate from "../../assets/icon/linimasa/Date.svg"
import iconLocation from "../../assets/icon/linimasa/Location.svg"
import PopupSucces from "../../components/popup/PopupSucces";
import PopupConfirmation from "../../components/popup/PopupConfirmation";
import FakeButton from "../../components/button/FakeButton";

const VolunteerDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate();
  const [image, setImage] = useState({ url: "", isLoading: true });
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isJoin, setIsJoin] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = window.localStorage.getItem('token')

  const [status, setStatus] = useState("tidak terdaftar");

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

  const getStatus = () => {
    BaseAPI.get(`/volunteer/user-status/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const dp = res.data.data.status;
        setStatus(dp);
        console.log("Status", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    getStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isJoin]);

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

  const handleJoin = () => {
    BaseAPI.post(`/volunteer/join/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res);
        setIsSucces(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-onyx">
      <Navbar />
      {isJoin && (
        <PopupConfirmation
          heading="Apakah kamu yakin mau BERGABUNG ke program ini?"
          nameButton="ok"
          nameButtonNo="BATAL"
          nameButtonYes="YA, BERGABUNG"
          handlerButtonNo={() => setIsJoin(false)}
          handlerButtonYes={() => {
            handleJoin();
            setIsJoin(false);
          }}
          handlerClose={() => setIsJoin(false)}
        />
      )}
      {isSucces && (
        <PopupSucces
          heading="KAMU TELAH BERHASIL BERGABUNG"
          body="Silakan cek email dalam beberapa menit untuk mendapatkan detail lebih lanjut."
          nameButton="ok"
          handlerButton={() => setIsSucces(false)}
          handlerClose={() => setIsSucces(false)}
        />
      )}
      {isError && (
        <PopupSucces
          heading="Error saat bergabung"
          body="coba kembali nanti"
          nameButton="tutup"
          handlerButton={() => setIsError(false)}
          handlerClose={() => setIsError(false)}
        />
      )}

      <main className="flex flex-col w-full lg:mt-28">
        <nav aria-label="breadcrumb" className="h-fit w-full flex flex-row px-40 py-2.5 gap-5">
          <Link to="/aksi" className="bl text-white hover:text-cambridgeBlue">
            Aksi
          </Link>
          <span className="bl text-white">&gt;</span>
          <span className="bl text-cambridgeBlue">Volunteer {data.title}</span>
        </nav>

        <section className="volunteer-image">
          {image.isLoading ? (
            <div className="w-full h-550 justify-center items-center flex bg-default">
              <LoadingPic />
            </div>
          ) : (
            <img src={image.url} className="w-full h-550 object-cover" alt="Volunteer program" />
          )}
        </section>

        <section className="flex flex-col gap-5 bg-onyx text-onyx px-40 py-14">
          <article className="flex flex-row bg-white rounded-2xl p-6 justify-between items-center">
            <div className="flex flex-col">
              <h2 className="ds">{data.title}</h2>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-row gap-2 items-center">
                  <img src={iconDate} alt="Date icon" />
                  <p className="bs">{formatDate(data.start_date)} - {formatDate(data.end_date)}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src={iconLocation} alt="Location icon" />
                  <p className="bs">{data.location}</p>
                </div>
              </div>
            </div>
            <div className="w-40">
              {status === "aktif" || status === "pending" ? (
                <FakeButton name={status.toUpperCase()} />
              ) : (
                <PrimerButton
                  name="GABUNG SEKARANG"
                  handle={token ? () => setIsJoin(true) : () => nav("/masuk")}
                />
              )}
            </div>
          </article>

          <article className="flex flex-col bg-white rounded-2xl p-6">
            <h3 className="ds">Deskripsi</h3>
            {data.description &&
              data.description.split("<>").map((item, index) => (
                <p key={index} style={{ lineHeight: "1.1" }} className="bs">
                  {item}
                </p>
              ))}
          </article>

          <article className="flex flex-col bg-white rounded-2xl p-6 gap-2">
            <h3 className="ds">Rincian Tugas</h3>
            {data.tasks &&
              data.tasks.split("<>").map((item, index) => (
                <div key={index} className="flex flex-row gap-1.5">
                  <p style={{ lineHeight: "1.2" }} className="bs">
                  {index + 1}.
                </p>
                  <div className="flex flex-col gap-1">
                    <h4 style={{ lineHeight: "1.2" }} >{item && item.split(":")[0]}</h4>
                    <p style={{ lineHeight: "1.1" }} >{item && item.split(":")[1]}</p>
                  </div>
                </div>
              ))}
          </article>

          <article className="flex flex-col bg-white rounded-2xl p-6">
            <h3 className="ds">Persyaratan</h3>
            <div className="flex flex-row">
              <div className="flex flex-col w-full gap-3">
                <div className="flex flex-col">
                  <h4 className="tlb">Kewarganegaraan</h4>
                  <p className="bs">{data.condition && data.condition.split("<>")[0]}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="tlb">Umur</h4>
                  <p className="bs">{data.condition && data.condition.split("<>")[1]}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="tlb">Pengalaman</h4>
                  <p className="bs">Berikut pengalaman yang dibutuhkan, tidak wajib, tetapi menjadi nilai tambah.</p>
                  {data.condition &&
                    data.condition.split("<>")[2].split(":").map((item, index) => (
                      <div key={index} className="flex flex-row gap-2">
                        <p className="bs">{index + 1}. </p>
                        <p className="bs">{item}</p>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col">
                  <h4 className="tlb">Tingkat Pendidikan</h4>
                  <p className="bs">{data.condition && data.condition.split("<>")[3]}</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="tlb">Bahasa</h4>
                  <p className="bs">{data.condition && data.condition.split("<>")[4]}</p>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <h4 className="tlb">Keterampilan</h4>
                  {data.condition &&
                    data.condition.split("<>")[5].split(":").map((item, index) => (
                      <div key={index} className="flex flex-row gap-2">
                        <p className="bs">{index + 1}. </p>
                        <p className="bs">{item}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerDetail;
