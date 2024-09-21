// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { DataNavbar } from '../../data/DataNavbar';
import logo from "../../assets/logo/logo.png"
import { BaseAPI } from '../../api/API';
import { DefaultPhotoProfile } from '../../data/DefaultData';

const Navbar = () => {
  const loc = useLocation();

  const [isHidden, setIsHidden] = useState(false)
  const [photo, setPhoto] = useState('')
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      getDataUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const getDataUser = () => {
    // console.log(`Bearer ${token}`)
    BaseAPI.get('navbar', {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        console.log("data", res)
        const pic = res.data.data.photo
        if (pic == "") {
          setPhoto(DefaultPhotoProfile)
        } else {
          setPhoto(pic)
        }
      }, (err) => {
        console.log("error : ", err)
      })
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > navbar.offsetHeight && lastScrollY < window.scrollY) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${isHidden && `-translate-y-full`} navbar transition-all flex px-1 py-1 md:px-40 md:py-4 w-full h-10 md:h-28 bg-white z-50 shadow-default fixed top-0`}>
        <div className="flex w-full justify-between">

          <Link to={"/"} className="flex items-center hover:scale-105 transition-all">
            <img src={logo} alt="" className='w-7 h-7 md:w-20 md:h-20' />
            <div className="ds">FLONN</div>
          </Link>

          <div className="flex flex-row gap-6">
            {DataNavbar.map((list, index) => {
              return (
                <Link
                  key={index}
                  to={list.path}
                  className={`${
                    loc.pathname.includes(list.path) ? "text-oldGreen cursor-default" : "hover:scale-110 hover:text-black"
                  } flex ds items-center box-border transition-all duration-150 bg-none`}
                >
                  <h3 >{list.name}</h3>
                </Link>
              );
            })}
            
            {token ? (
                <Link
                  to="/profile"
                  className={`w-14 h-14 rounded-full overflow-hidden self-center`}
                >
                  <img src={photo ? photo : "https://i.pinimg.com/originals/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </Link>
            ) : (
              <>
                <div className="flex flex-row gap-6 items-center">
                  <Link
                    to="/masuk"
                    className={` flex ds hover:scale-110 items-center box-border hover:text-black transition-all duration-150 bg-none `}
                  >
                    <h3 >Masuk</h3>
                  </Link>

                  <Link
                    to="/daftar"
                    className={`flex ds items-center h-fit text-white box-border hover:text-black transition-all duration-150 bg-none lg:px-5 lg:py-1 bg-oldGreen rounded-2xl`}
                  >
                    <h3 >Daftar</h3>
                  </Link>
                </div>
              </>
            )}
          </div>

        </div>
    </div>
  )
}

export default Navbar