import { useEffect, useState } from "react"
import { storage } from "../../../firebase/Firebase"
import { getDownloadURL, ref } from "firebase/storage"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Base } from "../../../api/API"
import Navbar from "../../../components/navigation/Navbar"
import Footer from "../../../components/navigation/Footer"
import LoadingPic from "../../../components/helper/LoadingPic"
import iconPerson from "../../../assets/icon/Person.svg"
import iconShare from "../../../assets/icon/Share.svg"
import PrimerButton3 from "../../../components/button/PrimerButton3"
import PrimerButton from "../../../components/button/PrimerButton"

const DonasiDetail = () => {
  // eslint-disable-next-line no-unused-vars
  const nav = useNavigate()
  const [image, setImage] = useState({ url: "", isLoading: true })
  const { id } = useParams()
  const [data, setData] = useState({})
  const numberFormatter = new Intl.NumberFormat('id-ID');

  const getData = () => {
    Base.get(`/donation/${id}`)
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
        const photoPath = data.photo.split("<>")[0]
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
          <Link to={'/aksi'} className="bl text-white hover:text-cambridgeBlue">Aksi</Link>
          <p className="bl text-white">&gt;</p>
          <p className="bl text-cambridgeBlue">Donasi {data.title}</p>
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

      <div className="flex flex-col bg-onyx px-40 py-16 gap-7">
        {/* donation recap */}
        <div className="flex flex-col bg-white p-7 rounded-3xl">
            <p  className="ds">{data.title}</p>
            <div className="flex flex-row gap-7 text-black">
                {/* goal */}
                <div className="flex flex-col">
                    <p className="tl">Terkumpul</p>
                    <p style={{lineHeight: "1.2"}} className="tlb text-oldRose">Rp{numberFormatter.format(data.total)}</p>
                </div>
                <div className="flex flex-col">
                    <p className="tl">Goal</p>
                    <p style={{lineHeight: "1.2"}} className="tlb text-viridian">Rp{numberFormatter.format(data.target)}</p>
                </div>
            </div>
            {/* progress info */}
            <div className="flex flex-col mt-6 gap-4">
                {/* bar */}
                <div className="flex h-2.5 w-full rounded-full bg-abu">
                    <div style={{width: `${(data.total/data.target)*100}%`}} className={`h-2.5 bg-cambridgeBlue rounded-full`} />
                </div>
                {/* user count */}
                <div className="flex flex-row items-center gap-2">
                    <img src={iconPerson} />
                    <p className="bs text-black">{data.total_donors} Donasi</p>
                </div>
            </div>
            {/* action */}
            <div className="flex flex-row self-end gap-5">
                <div className="w-32">
                    <PrimerButton3 
                        name={"SHARE"}
                        icon={iconShare}
                    />
                </div>
                <div className="w-32">
                    <PrimerButton 
                        name={"DONASI"}
                        handle={() => {
                            nav(`/aksi/donasi/${id}/pembayaran?title=Donasi Korban Kebakaran Hutan di Ohio`)
                        }}
                    />
                </div>
            </div>
        </div>

        {/* description */}
        <div className="flex flex-col bg-white p-7 rounded-3xl pb-9">
            <p className="ds">KISAH BANTUAN</p>
            <p className="bs">{data.description}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DonasiDetail
