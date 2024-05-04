import DropDown from "../../components/bar/Dropdown"
import InputProfile from "../../components/bar/InputProfile"
import PrimerButton from "../../components/button/PrimerButton"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"

const ProfileEdit = () => {
    return (
        <>
            <Navbar />
    
            <div className="flex flex-col items-center min-h-screen bg-viridian px-40 pt-40 pb-20 gap-12    ">
                
                {/* profile */}
                <div className="flex flex-row bg-white w-full h-fit rounded-2xl p-12 shadow-default">
                    {/* photo */}
                    <div className="flex flex-col gap-6 px-8 items-center">
                        <div className="h-56 w-56 rounded-full bg-black">

                        </div>
                        
                        <div className="w-36">
                            <PrimerButton name={"GANTI FOTO"}/>
                        </div>
                    </div>

                    {/* profile info */}
                    <div className="flex flex-col w-full gap-5">
                        <InputProfile textLabel={"Nama Pengguna"} holder={"username pengguna"}/>
                        <InputProfile textLabel={"Email"} type="email" holder={"email pengguna"}/>
                        <InputProfile textLabel={"Password"} type="password" holder={"Harus merupakan kombinasi dari minimal 8 huruf, angka, dan simbol."}/>
                        <InputProfile textLabel={"Konfirmasi Password"} type="password" holder={"Harus merupakan kombinasi dari minimal 8 huruf, angka, dan simbol."}/>
                        <div className="w-64 self-end">
                            <PrimerButton name={"PERBARUI PASSWORD"}/>
                        </div>
                    </div>
                </div>

                {/* nama */}
                <div className="flex flex-row bg-white w-full h-fit rounded-2xl py-10 px-28 shadow-default gap-5">
                    {/* left */}
                    <div className="flex flex-col gap-5 w-full">
                        <InputProfile textLabel={"Nama Depan"} holder={"Maritza"}/>
                        <div className="flex flex-col gap-2">
                            <p className="blb text-default">Tanggal Lahir</p>
                            <div className="flex flex-row gap-3 h-fit w-full">
                                <div className="w-20">
                                    <DropDown holder={"DD"} optionAll={false}/>
                                </div>
                                <div className="w-20">
                                    <DropDown holder={"MM"} optionAll={false}/>
                                </div>
                                <div className="w-40">
                                    <DropDown holder={"YYYY"} optionAll={false}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="flex flex-col gap-5 w-full">
                        <InputProfile textLabel={"Nama Belakang"} holder={"Aliyya"}/>
                        <div className="w-full">
                            <DropDown textLabel={"Gender"} holder={"Perempuan"} optionAll={false}/>
                        </div>
                    </div>
                </div>

                {/* alamat */}
                <div className="flex flex-row bg-white w-full h-fit rounded-2xl py-10 px-28 shadow-default gap-5">
                    <div className="w-full">
                        <InputProfile textLabel={"Alamat Rumah"} holder={"Wisma Permai, Jl. Jatisari Permai Gg 7 K9, Waru, Sidoarjo "}/>
                    </div>
                </div>
    
            </div>
    
            <Footer />
        </>
      )
}

export default ProfileEdit