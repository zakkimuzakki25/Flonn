// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './BiodiversityCard.css'
import { Link } from 'react-router-dom'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase/Firebase'
import LoadingPic from '../../helper/LoadingPic'

// eslint-disable-next-line react/prop-types
const BiodiversityCard = ({nama, deskripsi, id, namaLatin, kingdom, habitat, status, photo}) => {
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        const spaceRef = ref(storage, photo.split("<>")[1]);

        getDownloadURL(spaceRef)
            .then((url) => {
                setImage(url);
                setIsLoading(false)
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
                setIsLoading(false)
            });

    }, [])
  return (
    <Link to={`/biodiversitas/${id}`} className='bioCard flex flex-row h-300 bg-oldGreen rounded-bioCard overflow-hidden cursor-pointer'>
        <div className="flex flex-row bg-white rounded-bioCard w-full z-10 shadow-default">
            <div className="overflow-hidden flex-shrink-0 lg:w-455 h-full rounded-bioCard">
            {isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-white">
              <LoadingPic />
            </div>
          ) : (
            <img src={image} className='w-full h-full object-cover imghover'/>
          )}
                
            </div>

            <div className="putih flex flex-col w-600 justify-center lg:pl-12 lg:pr-12 ">
                <h1 style={{lineHeight: "1.1"}} className="ds">{nama}</h1>
                <h2 className="tli">{namaLatin}</h2>
                <p style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", whiteSpace: "normal", WebkitLineClamp: 3, textOverflow: "ellipsis" }} className=" bl overflow-hidden lg:h-75 lg:mt-2">
                {deskripsi}
                </p>
                
                <div className="flex flex-row lg:gap-8 lg:mt-4">
                    <div className="bg-jasmine lg:px-5 lg:py-2 rounded-full">{kingdom}</div>
                    <div className="bg-jasmine lg:px-5 lg:py-2 rounded-full">{habitat}</div>
                    <div className="bg-jasmine lg:px-5 lg:py-2 rounded-full">{status}</div>
                </div>
            </div>
        </div>
        <div className="pelajari pr-5 h-full uppercase ds text-onyx items-center flex justify-center">
            Pelajari
        </div>
    </Link>
  )
}

export default BiodiversityCard