import React, { useEffect, useState } from 'react'

const Header = () => {
  const [showBar, setShowBar] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setShowBar(true)
      console.log('ss')
    } else {
      setShowBar(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setShowBar])
  return (
    <nav className={`duration-700 fixed w-full bg-white shadow-sm top-0 py-4 px-5 border-b z-20 ${showBar ? "block" : "hidden"} ${showBar ? "top-0" : "-top-[60px]"}`}>
      <ul className=' flex space-x-4 font-medium'>
        <li className='active:border-b active:border-black'><a href="#photos">Photos</a></li>
        <li className='active:border-b active:border-black'><a href="#services">Services</a></li>
        <li className='active:border-b active:border-black'><a href="#team">Team</a></li>
        <li className='active:border-b active:border-black'><a href="#reviews">Reviews</a></li>
        <li className='active:border-b active:border-black'><a href="#buy">Buy</a></li>
        <li className='active:border-b active:border-black'><a href="#about">About</a></li>
      </ul>
    </nav>
  )
}

export default Header