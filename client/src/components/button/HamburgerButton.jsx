// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const HamburgerButton = ({handle, isOpen}) => {
  return (
    <button onClick={handle} className={`${isOpen ? '' : ''} lg:w-10 lg:h-10 sm:w-9 sm:h-9 w-6 h-6 flex flex-col justify-center sm:gap-1.5 gap-1 group`}>
        <div className={`${isOpen ? 'transition-all rotate-45 relative top-1.5' : 'rounded-full'} lg:w-8 lg:h-0.75 sm:w-8 sm:h-1 w-5 h-0.75 mx-auto group-hover:bg-oldGreen bg-black`}/>

        <div className={`${isOpen ? 'transition-all opacity-0' : 'rounded-full'} lg:w-8 lg:h-0.75 sm:w-8 sm:h-1 w-5 h-0.75 mx-auto group-hover:bg-oldGreen bg-black`}/>

        <div className={`${isOpen ? 'transition-all -rotate-45 relative bottom-1.5' : 'rounded-full'} lg:w-8 lg:h-0.75 sm:w-8 sm:h-1 w-5 h-0.75 mx-auto group-hover:bg-oldGreen bg-black`}/>
    </button>
  )
}

export default HamburgerButton