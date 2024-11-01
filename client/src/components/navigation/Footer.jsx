/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import emailIcon from '../../assets/icon/footer/Email.svg'
import instagramIcon from '../../assets/icon/footer/Instagram.svg'
import youtubeIcon from '../../assets/icon/footer/Youtube.svg'

const Footer = () => {

  // useEffect(() => {
  //   if (token) {
  //     getDataUser()
  //   }
  //   console.log("keynav = " + Skey)
  //   if (typeof Skey === 'string') {
  //     setSearchKey(Skey)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token])

  return (
    <footer className='flex flex-col px-10 sm:px-40 w-full h-fit bg-white z-40 relative'>
        <div className="flex flex-col sm:flex-row w-full py-10 sm:py-14 sm:gap-28 gap-10">

          <Link className="flex items-center justify-center">
            <div className="ds">FLONN</div>
          </Link>

          <div className="flex-col items-center sm:items-start hidden">
            <h1 className="ds">TENTANG</h1>
            <div className="gap-1 flex flex-col items-center sm:items-start">
              {/* <p className="bl">Siapa kami</p> */}
              {/* <p className="bl">FAQ</p> */}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h1 className="ds">AKSI</h1>
            <nav className="gap-1 flex flex-col items-center sm:items-start">
              <Link to={"/aksi"} className="bl hover:text-oldGreen">Kampanye</Link>
              <Link to={"/aksi#donasi"} className="bl hover:text-oldGreen">Donasi</Link>
              <Link to={"/aksi#volunteer-sec"} className="bl hover:text-oldGreen">Volunteer</Link>
            </nav>
          </div>
            
        </div>

        <div style={{height: "3px"}} className="flex w-full bg-oldGreen"></div>

        <div className="flex flex-col sm:flex-row w-full py-4 sm:py-8 mb-5 sm:mb-10 justify-between items-center sm:items-start gap-5 sm:gap-0">
          <div className="flex flex-row gap-2 items-center sm:items-start">
            {/* <img src={emailIcon} alt='email' className='w-6 h-6' /> */}
            {/* <img src={instagramIcon} alt='instagram' className='w-6 h-6' /> */}
            {/* <img src={youtubeIcon} alt='youtube' className='w-6 h-6' /> */}
          </div>

          <nav className="flex flex-row sm:gap-20">
            {/* <p className="bl text-center sm:text-left">Syarat & ketentuan</p> */}
            {/* <p className="bl text-center sm:text-left">Kebijakan privasi</p> */}
          </nav>
        </div>
    </footer>
  )
}

export default Footer