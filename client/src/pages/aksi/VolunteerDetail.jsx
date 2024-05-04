import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navigation/Navbar'
import Footer from '../../components/navigation/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Base } from '../../api/API'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../firebase/Firebase'
import LoadingPic from '../../components/helper/LoadingPic'

const VolunteerDetail = () => {
    // eslint-disable-next-line no-unused-vars
  const nav = useNavigate()
  const [image, setImage] = useState({ url: "", isLoading: true })
  const { id } = useParams()
  const [data, setData] = useState({})

  const getData = () => {
    Base.get(`/volunteer/${id}`)
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
        const photoPath = data.photo
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
    <div className='bg-onyx'>
        <Navbar/>

        <div className="flex flex-col w-full lg:mt-28">
        <div className="h-fit w-full flex flex-row px-40 py-2.5 gap-5">
          <Link to={'/aksi'} className="bl text-white hover:text-cambridgeBlue">Aksi</Link>
          <p className="bl text-white">&gt;</p>
          <p className="bl text-cambridgeBlue">Volunteer {data.title}</p>
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

        <Footer/>
    </div>
  )
}

export default VolunteerDetail