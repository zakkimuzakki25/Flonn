// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './BiodiversityCard.css'
import { Link } from 'react-router-dom'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase/Firebase'
import LoadingPic from '../../helper/LoadingPic'

// eslint-disable-next-line react/prop-types
const BiodiversityCard = ({nama, id, namaLatin, kingdom, habitat, status, photo}) => {
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
    <Link to={`/biodiversitas/${id}`} className='bioCard flex flex-row h-52 bg-oldGreen rounded-bioCard overflow-hidden cursor-pointer shrink-0'>
        <div className="flex flex-row bg-white rounded-bioCard w-550 z-10 shadow-default">
            <div className="overflow-hidden flex-shrink-0 lg:w-72 h-full rounded-bioCard">
            {isLoading ? (
            <div className="w-full h-full justify-center items-center flex bg-white">
              <LoadingPic />
            </div>
          ) : (
            <img src={image} className='w-full h-full object-cover imghover'/>
          )}
                
            </div>

            <div className="putih flex flex-col justify-center lg:pl-7 lg:pr-7 ">
                <h1 style={{lineHeight: "1.1"}} className="tlb">{nama}</h1>
                <h2 className="bsis">{namaLatin}</h2>
                
                <div className="flex flex-wrap lg:gap-2 lg:mt-4">
                    <div className="bg-abu lg:px-3 lg:py-1 rounded-full shrink-0 bs">{kingdom}</div>
                    <div className="bg-abu lg:px-3 lg:py-1 rounded-full shrink-0 bs">{habitat}</div>
                    <div className="bg-abu lg:px-3 lg:py-1 rounded-full shrink-0 bs">{status}</div>
                </div>
            </div>
        </div>
        <div className="pelajari pr-5 ds h-full uppercase text-onyx items-center flex justify-center">
            Pelajari
        </div>
    </Link>
  )
}

export default BiodiversityCard