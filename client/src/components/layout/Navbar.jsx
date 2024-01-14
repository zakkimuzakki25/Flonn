// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { DataNavbar } from '../../data/DataNavbar';
import logo from "../../../public/logo.png"

const Navbar = () => {
  const loc = useLocation();

  const [isHidden, setIsHidden] = useState(false)
  const [username, setUsername] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const token = window.localStorage.getItem('token')

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
    <div className={`${isHidden && `-translate-y-full`} navbar transition-all flex lg:px-40 lg:py-4 w-full h-28 bg-white z-50 shadow-default fixed top-0`}>
        <div className="flex w-full justify-between">

          <Link to={"/"} className="flex items-center hover:scale-105 transition-all">
            <img src={logo} alt="" className='w-20 h-20' />
            <div className="ds">FLONN</div>
          </Link>

          <div className="flex flex-row gap-6">
            {DataNavbar.map((list, index) => {
              return (
                <Link
                  key={index}
                  to={list.path}
                  className={`${
                    loc.pathname === list.path ? "text-oldGreen cursor-default" : "hover:scale-110 hover:text-black"
                  } flex ds items-center box-border transition-all duration-150 bg-none `}
                >
                  <h3 >{list.name}</h3>
                </Link>
              );
            })}
            
            {username ? (
              <>
              </>
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