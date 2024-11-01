// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { DataNavbar } from '../../data/DataNavbar';
import logo from "../../assets/logo/logo.png"
import { DefaultPhotoProfile } from '../../data/DefaultData';
import HamburgerButton from '../button/HamburgerButton';
import { BaseAPI } from '../../api/Api';

const Navbar = () => {
  const loc = useLocation();

  const [isHidden, setIsHidden] = useState(false)
  const [photo, setPhoto] = useState('')
  const token = window.localStorage.getItem('token')

  const [menuOpen, setMenuOpen] = useState(false)

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (token) {
      getDataUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const getDataUser = () => {
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
        window.localStorage.setItem('token', '')
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
    <navbar className={"w-full flex flex-col justify-center items-center fixed top-0 left-0 z-50"}>
      <div className={`${isHidden && `-translate-y-full`} navbar transition-all flex px-5 py-10 md:px-40 md:py-4 w-full h-10 md:h-28 bg-white shadow-default`}>
        <div className="flex w-full justify-between">

          <Link to={"/"} className="flex items-center hover:scale-105 transition-all">
            <img src={logo} alt="" className='w-7 h-7 md:w-20 md:h-20' />
            <div className="ds">FLONN</div>
          </Link>

          <div className="flex-row flex gap-3 sm:gap-6">
            {DataNavbar.map((list, index) => {
              return (
                <Link
                  key={index}
                  to={list.path}
                  className={`${
                    loc.pathname.includes(list.path) ? "text-oldGreen cursor-default" : "hover:scale-110 hover:text-black"
                  } ds items-center box-border transition-all duration-150 bg-none hidden sm:flex`}
                >
                  <h3 >{list.name}</h3>
                </Link>
              );
            })}
            
            {/* profile */}
            {token ? (
                <Link
                  to="/profile"
                  className={`w-7 h-7 shrink-0 sm:w-14 sm:h-14 rounded-full overflow-hidden self-center`}
                >
                  <img src={photo ? photo : "https://i.pinimg.com/originals/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg"} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </Link>
            ) : (
              <>
                <div className="sm:flex flex-row gap-6 items-center hidden">
                  <Link
                    to="/masuk"
                    className={` flex ds hover:scale-110 items-center box-border hover:text-black transition-all duration-150 bg-none `}
                  >
                    <h3 >Masuk</h3>
                  </Link>

                  <Link
                    to="/daftar"
                    className={`flex ds items-center h-fit text-white box-border hover:text-black transition-all duration-150 bg-none px-3 lg:px-5 py-0.5 lg:py-1 bg-oldGreen rounded-2xl`}
                  >
                    <h3 >Daftar</h3>
                  </Link>
                </div>
              </>
            )}

            {/* hamburger menu */}
            <div className='flex sm:hidden h-full w-full justify-center items-center'>
              <HamburgerButton handle={handleButtonClick} isOpen={menuOpen}/>
            </div>

          </div>

        </div>
    </div>
    {menuOpen && (
      <div
        className={`bg-white text-black h-fit w-full lg:w-full justify-around items-center flex flex-col transition-all duration-300 animate-navbar-hide py-7 z-40`}
      >
        {DataNavbar.map((item, index) => (
          <Link
          key={index}
          to={item.path}
          className={`${
            loc.pathname.includes(item.path) ? "text-oldGreen cursor-default" : "hover:scale-110 hover:text-black"
          } flex ds items-center box-border transition-all duration-150 bg-none`}
        >
          <h3 >{item.name}</h3>
        </Link>
        ))}
        {!token && (
          <div className="flex flex-row gap-5 items-center mt-5">
          <Link
            to="/masuk"
            className={` flex ds hover:scale-110 items-center box-border hover:text-black transition-all duration-150 bg-none `}
          >
            <h3 >Masuk</h3>
          </Link>

          <Link
            to="/daftar"
            className={`flex ds items-center h-fit text-white box-border hover:text-black transition-all duration-150 bg-none px-3 py-0.5 bg-oldGreen rounded-2xl`}
          >
            <h3 >Daftar</h3>
          </Link>
        </div>
        )}
      </div>
    )}
    </navbar>
  )
}

export default Navbar