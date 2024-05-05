import { Link, useNavigate } from "react-router-dom"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import SettingIcon from "../../assets/icon/SettingIcon.svg"
import PrimerButton4 from "../../components/button/PrimerButton4"

const Profile = () => {
    const nav = useNavigate()

  return (
    <>
        <Navbar />

        <div className="flex flex-col items-center min-h-screen bg-viridian px-40 pt-40 pb-20">
            
            {/* profile */}
            <div className="flex flex-row bg-white w-full h-fit rounded-2xl p-12 justify-between shadow-default">
                <div className="flex flex-row gap-6 px-8">
                    <div className="h-56 w-56 rounded-full bg-black"></div>
                    <div className="flex flex-col justify-center gap-4">
                        <div className="flex flex-col">
                            <p className="ds">NAMA_USER</p>
                            <p className="bs">emailuser@gmail.com</p>
                        </div>
                        <div className="rounded-full bg-jasmine w-fit py-2 px-5">
                            <p className="button">150 flonn</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <Link to={'/profile/edit'}><img src={SettingIcon} /></Link>
                    <div className="w-32"><PrimerButton4 name={"Keluar"} handle={() => {
                        window.localStorage.setItem('token', "")
                        nav("/masuk")
                    }
                    }/></div>
                </div>
            </div>

            {/* riwayat */}
            <div className="flex flex-col w-full">

                <h1 className="ds text-white py-5 px-2">Riwayat</h1>

                <div className="flex flex-row gap-5 w-full rounded-2xl bg-white shadow-default px-7 py-6">
                    <div className="flex flex-col gap-1">
                        <div className="bg-cambridgeBlue px-4 py-2 rounded-2xl"><p className="button text-white uppercase text-nowrap">berhasil donasi</p></div>
                        <p className="bs">01  -  01  -  2024</p>
                    </div>

                    <div className="flex self-center">
                        <p className="bl text-default">Sebesar Rp. 10.000.000,00 dalam program Konservasi dan Rehabilitasi Anggrek Hitam.</p>
                    </div>

                    <div className="bg-jasmine px-4 py-2 rounded-2xl h-fit w-fit flex text-nowrap self-center">
                        <p className="button text-onyx uppercase">+100 floint</p>
                    </div>
                </div>

            </div>
        
        </div>

        <Footer />
    </>
  )
}

export default Profile