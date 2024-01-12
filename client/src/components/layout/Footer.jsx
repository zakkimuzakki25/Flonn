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
    <div className='flex flex-col px-40 w-full h-fit bg-white z-50 relative'>
        <div className="flex flex-row w-full py-14 gap-28">

          <Link className="flex items-center ">
            <img src="logo" alt="" />
            <div className="ds">FLONN</div>
          </Link>

          <div className="flex flex-col">
            <h1 className="ds">TENTANG</h1>
            <div className="gap-1 flex flex-col">
              <p className="bl">Siapa kami</p>
              <p className="bl">FAQ</p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="ds">AKSI</h1>
            <div className="gap-1 flex flex-col">
              <p className="bl">Kampanye</p>
              <p className="bl">Donasi</p>
              <p className="bl">Volunteer</p>
            </div>
          </div>
            
        </div>

        <div style={{height: "3px"}} className="flex w-full bg-oldGreen"></div>

        <div className="flex flex-row w-full py-8 mb-10 justify-between">
          <div className="flex flex-row gap-2">
            <img src={emailIcon} />
            <img src={instagramIcon} />
            <img src={youtubeIcon} />
          </div>

          <div className="flex flex-row gap-20">
            <p className="bl">Syarat & ketentuan</p>
            <p className="bl">Kebijakan privasi</p>
          </div>
        </div>
    </div>
  )
}

export default Footer