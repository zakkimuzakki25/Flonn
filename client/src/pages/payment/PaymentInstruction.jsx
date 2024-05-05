import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/navigation/Navbar"
import Footer from "../../components/navigation/Footer"
import iconTime from "../../assets/icon/Time.svg"
import { DataMetodePembayaran } from "../../data/DataMetodePembayaran"
import PrimerButton from "../../components/button/PrimerButton"
import PopupConfirmation from "../../components/popup/PopupConfirmation"
import { useEffect, useState } from "react"
import PopupSucces from "../../components/popup/PopupSucces"
import { BaseAPI } from "../../api/API"

const PaymentInstruction = () => {
    const [data, setData] = useState({})
    const token = window.localStorage.getItem('token')
    const [isDone, setIsDone] = useState(false)
    const [isLeft, setIsLeft] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [pathLeft, setPathLeft] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        setPathLeft(path)
        setIsLeft(true)
      }
    
      const confirmLeave = () => {
        navigate(pathLeft)
      }

    const getSelectedMethod = (e) => {
        for (let i = 0; i < DataMetodePembayaran.length; i++) {
            if (DataMetodePembayaran[i].nama == e) {
                return DataMetodePembayaran[i]
            }
        }
        return null
    }

    const getData = () => {
        BaseAPI.get(`/payment/${id}`, {
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
      {isLeft && <PopupConfirmation heading={"Apakah kamu yakin Ingin MEMBATALKAN pembayaran?"} nameButton={"ok"} nameButtonNo={"TIDAK"} nameButtonYes={"IYA"} handlerButtonNo={() => setIsLeft(false)} handlerButtonYes={confirmLeave} handlerClose={() => setIsDone(false)}/>}
      {isDone && <PopupSucces heading={"Pembayaran bErhasil"} body={"Terima kasih, sobat Flonn! Donasimu sebesar Rp10.000 sudah kami terima dan akan disalurkan."} nameButton={"KEMBALI KE HALAMAN DONASI"} handlerButton={() => {
        setIsDone(false)
        navigate(`/aksi/donasi/${data.open_donation_id}`)
      }} handlerClose={() => setIsDone(false)}/>}

        {/* stack navigation */}
        <div className="h-fit w-full flex flex-row px-40 py-2.5 gap-5 lg:mt-28">
            <button onClick={() => handleNavigate("/aksi")} className="bl text-white hover:text-cambridgeBlue">Aksi</button>
            <p className="bl text-white">&gt;</p>
            <button onClick={() => handleNavigate(`/aksi/donasi/${data.open_donation_id}`)} className="bl text-white hover:text-cambridgeBlue">Donasi  korban kebakaran hutan di Ohio</button>
            <p className="bl text-white">&gt;</p>
            <button onClick={() => handleNavigate(`/aksi/donasi/${data.open_donation_id}/pembayaran`)} className="bl text-white hover:text-cambridgeBlue">Metode Pembayaran</button>
            <p className="bl text-white">&gt;</p>
            <p className="bl text-cambridgeBlue">Instruksi Pembayaran</p>
        </div>

        <div className="flex bg-onyx px-40 py-14 text-onyx">
            <div className="flex w-full flex-col bg-viridian rounded-3xl">
                {/* batas waktu */}
                <div className="flex flex-row justify-between px-8 py-10 text-white">
                    <div className="flex flex-col">
                        <p className="bl">Batas waktu pembayaran</p>
                        <p className="ds">Rabu, 24 April 2024 16:04 WIB</p>
                    </div>
                    <div className="flex flex-row gap-5 items-center">
                        <img src={iconTime}/>
                        <p className="ds">01:59:29</p>
                    </div>
                </div>
                {/* kode */}
                <div className="flex flex-col bg-white rounded-3xl px-9 py-10 gap-5">
                    {/* method payment */}
                    <div className="flex flex-row justify-between">
                        <p className="ds">{getSelectedMethod("Mandiri Virtual Account").nama}</p>
                        <img src={getSelectedMethod("Mandiri Virtual Account").logo}/>
                    </div>
                    {/* kode pembayaran */}
                    <div className="flex flex-row justify-between bg-abu px-4 items-center py-5 rounded-2xl">
                        <p style={{lineHeight: "1"}} className="ds">xxxxxxxxxxxxxxxx</p>
                        <div className="flex flex-row items-center gap-3">
                            {isCopied && <p>tersalin!</p>}
                            <PrimerButton widthType="fit" name={"SALIN"} handle={() => {
                                navigator.clipboard.writeText("xxxxxxxxxxxxxxxx")
                                setIsCopied(true)
                            }}/>
                        </div>
                    </div>
                    {/* line */}
                    <div className="h-0.5 w-full bg-abu"></div>
                    {/* total donasi */}
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between py-3">
                            <p className="bl">Total Pembayaran</p>
                            <p className="ds">Rp10.000</p>
                        </div>
                        <div className="flex flex-row self-end w-72 mt-2"><PrimerButton name={"CEK STATUS PEMBAYARAN"} handle={() => setIsDone(true)}/></div>
                    </div>
                    {/* line */}
                    <div className="h-0.5 w-full bg-abu"></div>
                    {/* Panduan pembayaran */}
                    {getSelectedMethod("Mandiri Virtual Account").instructions && getSelectedMethod("Mandiri Virtual Account").instructions.split("<>").map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col">
                                <p className="tlb">{item.split("##")[0]}</p>
                                {item.split("##")[1].split(":").map((item2, index2) => {
                                    return (
                                        <div key={index2} className="flex flex-row gap-2">
                                            <p className="bs">{index2+1}. </p>
                                            <p className="bs">{item2}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default PaymentInstruction
