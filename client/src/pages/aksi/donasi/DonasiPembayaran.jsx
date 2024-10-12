/* eslint-disable no-unused-vars */
import Navbar from "../../../components/navigation/Navbar"
import Footer from "../../../components/navigation/Footer"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import DropDownMetodePembayaran from "../../../components/bar/DropDownMetodePembayaran"
import Input from "../../../components/bar/Input"
import PrimerButton from "../../../components/button/PrimerButton"
import { Base, BaseAPI } from "../../../api/Api"
import FakeButton from "../../../components/button/FakeButton"

const DonasiPembayaran = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nomorPonsel, setNomorPonsel] = useState("");
  const [email, setEmail] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [nominal, setNominal] = useState("");
  const { id } = useParams()
  const [data, setData] = useState({})
  const token = window.localStorage.getItem('token')

  const nav = useNavigate()

  const handleChange = (e) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val) || val <= 0) {
      val = "";
    }
    setNominal(val);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (!nominal || !metodePembayaran) {
      alert("Isi semua field");
      return;
    }

    console.log(id);
    console.log(nominal);
    console.log(metodePembayaran.nama);

    BaseAPI.post("/donation/add", {
      open_donation_id: Number(id),
      amount: Number(nominal),
      payment_method: metodePembayaran.nama,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const id = res.data.data.ID;
        if (id) {
          nav(`/pembayaran/${id}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    Base.get(`/donation/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const dp = res.data.data;
        setData(dp);
        console.log("data", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="bg-onyx">
      <Navbar />

        {/* stack navigation */}
        <div className="h-fit w-full flex flex-row px-40 py-2.5 gap-5 lg:mt-28">
            <Link to={'/aksi'} className="bl text-white hover:text-cambridgeBlue">Aksi</Link>
            <p className="bl text-white">&gt;</p>
            <Link to={`/aksi/donasi/${id}`} className="bl text-white hover:text-cambridgeBlue">{data.title}</Link>
            <p className="bl text-white">&gt;</p>
            <p className="bl text-cambridgeBlue">Metode Pembayaran</p>
        </div>

      <div className="flex flex-col px-40 py-7 gap-7">
        {/* nominal input */}
        <div className="flex flex-col bg-white rounded-3xl px-12 py-10 gap-2">
            <p className="ds text-onyx uppercase">Isi Nominal Donasi</p>
            <div className="flex flex-row bg-abu w-full rounded-2xl py-2 px-4 items-center">
                <p className="ds w-fit">RP</p>
                <input
                    type="number"
                    className="w-full text-onyx placeholder:text-gray py-1 bg-abu outline-none text-right ds"
                    value={nominal}
                    onChange={handleChange}
                    placeholder="0"
                />
            </div>
            <p className="bs text-gray">Silahkan donasi seikhlasnya</p>
        </div>

        {/* opsi metode pembayaran */}
        <DropDownMetodePembayaran 
          holder={"PILIH METODE PEMBAYARAN"}
          handleChange={setMetodePembayaran}
        />

        {/* form data */}
        <form className="flex flex-col bg-white rounded-3xl px-12 py-10 gap-2">
          <p className="ds text-onyx"><span className="text-viridian">MASUK</span> atau lengkapi data di bawah ini</p>
          <div className="flex flex-col gap-0">
            <Input
              type="text"
              id="namalengkap"
              holder="Nama Lengkap"
              handleChange={(e) => setNamaLengkap(e.target.value)}
            />
            <Input
              type="number"
              id="nomorponsel"
              holder="Nomor Ponsel"
              handleChange={(e) => setNomorPonsel(e.target.value)}
            />
            <Input
              type="email"
              id="email"
              holder="Email"
              handleChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div className="flex flex-row gap-2.5 pt-4">
              <input type="checkbox" className="self-center" onChange={() => setIsCheck(!isCheck)} checked={isCheck}/>
              <p className="bs flex flex-row gap-1">Sembunyikan nama saya (donasi sebagai anonim)</p>
            </div>
            <div className="w-40">
              { nominal && metodePembayaran && ((email && namaLengkap && nomorPonsel) || isCheck) ? (
                <PrimerButton name="DONASI" handle={submitHandle} />
              ) : (
                <FakeButton name={"DONASI"} />
              )}
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default DonasiPembayaran
