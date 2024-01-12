// eslint-disable-next-line no-unused-vars
import React from 'react'
import './BiodiversityCard.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const BiodiversityCard = ({nama, deskripsi, gambar, id, namaLatin, kingdom, habitat, status}) => {
  return (
    <Link to={`/biodiversitas/${id}`} className='bioCard flex flex-row h-300 bg-oldGreen rounded-bioCard overflow-hidden cursor-pointer'>
        <div className="flex flex-row bg-white rounded-bioCard w-full z-10 shadow-default">
            <div className="overflow-hidden flex-shrink-0 lg:w-455 h-full rounded-bioCard">
                <img src={gambar} className='w-full h-full object-cover'/>
            </div>

            <div className="putih flex flex-col w-600 justify-center lg:pl-12 lg:pr-12 ">
                <h1 style={{lineHeight: "1.1"}} className="ds">{nama}</h1>
                <h2 className="tli">{namaLatin}</h2>
                <div className="desc overflow-hidden overflow-ellipsis lg:h-20 lg:mt-2">
                    <p className="bl">{deskripsi}</p>
                </div>
                
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