import Navbar from "../../../components/layout/Navbar"
import Footer from "../../../components/layout/Footer"
import { Link, useParams, useSearchParams } from "react-router-dom"
import { useState } from "react"
import DropDownMetodePembayaran from "../../../components/bar/DropDownMetodePembayaran"
import Input from "../../../components/bar/Input"

const DonasiPembayaran = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nomorPonsel, setNomorPonsel] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [nominal, setNominal] = useState("");
  const [searchParams] = useSearchParams()
  const { id } = useParams()

  const handleChange = (e) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val) || val <= 0) {
      val = "";
    }
    setNominal(val);
  };

  return (
    <div className="bg-onyx">
      <Navbar />

        {/* stack navigation */}
        <div className="h-fit w-full flex flex-row px-40 py-2.5 gap-5 lg:mt-28">
            <Link to={'/aksi'} className="bl text-white hover:text-cambridgeBlue">Aksi</Link>
            <p className="bl text-white">&gt;</p>
            <Link to={`/aksi/donasi/${id}`} className="bl text-white hover:text-cambridgeBlue">{searchParams.get('title')}</Link>
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
            <p className="bs text-gray">Nominal donasi minimal Rp10.000</p>
        </div>

        {/* opsi metode pembayaran */}
        <DropDownMetodePembayaran 
          holder={"PILIH METODE PEMBAYARAN"}
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
          <div className="flex flex-row gap-2.5 pt-4">
              <input type="checkbox" className="self-center" onChange={() => setIsCheck(!isCheck)}
                checked={isCheck}/>
              <p className="bs flex flex-row gap-1">Sembunyikan nama saya (donasi sebagai anonim)</p>
            </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default DonasiPembayaran
