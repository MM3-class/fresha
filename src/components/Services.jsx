import React, { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import ServicesA from './services/ServicesA'
import ServicesB from './services/ServicesB'
import ServicesC from './services/ServicesC'
import ServicesD from './services/ServicesD'
import ServicesE from './services/ServicesE'
import ServicesF from './services/ServicesF'
import ServicesG from './services/ServicesG'
import ServicesU from './services/ServicesU'
import ServicesX from './services/ServicesX'
import ServicesZ from './services/ServicesZ'
import Featured from './services/Featured'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../components/services.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
const Services = () => {
  return (
    <div className=''>
      <h1 className='text-3xl my-5 mx-4 font-semiBold  lg:text-5xl lg:font-bold'>Services</h1>
      <div className='relative'>
        <nav className='truncate overflow-hidden w-full relative'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            slidesPerGroup={3}
            className='arrow-small'
            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/">Featured</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceA">JULY & AUGUST OFFERS %%</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceB">Laser Hair Removal Women Face</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceC">Laser Hair Removal Women Upper Body</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceD">Laser Hair Removal  Lower Body Women</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceE">Women Laser Hair Removal Packages</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceF">Laser Hair Removal Men -Face</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceG">Laser Hair Removal Men-Upper Body</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceU">Laser Hair Removal Men - Lower Body</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceX">HydraFacial  Glowing Skin</NavLink>
            </SwiperSlide>
            <SwiperSlide className='truncate rounded-lg px-2 py-2'>
              <NavLink className="duration-700 aria-[current=page]:bg-primary-color aria-[current=page]:text-white font-semibold max-w-6xl py-2 px-4 rounded-lg" to="/serviceZ">Skin Consultations</NavLink>
            </SwiperSlide>
          </Swiper>
        </nav>
        <div className="arrow-left arrow right-10 z-10 bg-white  -top-8 rounded-full text-lg absolute"><FaAngleLeft /></div>
        <div className="arrow-right arrow right-0 z-10 bg-white  -top-8 rounded-full text-lg absolute"><FaAngleRight /></div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Featured />} />
          <Route path="/serviceA" element={<ServicesA />} />
          <Route path="/serviceB" element={<ServicesB />} />
          <Route path="/serviceC" element={<ServicesC />} />
          <Route path="/serviceD" element={<ServicesD />} />
          <Route path="/serviceE" element={<ServicesE />} />
          <Route path="/serviceF" element={<ServicesF />} />
          <Route path="/serviceG" element={<ServicesG />} />
          <Route path="/serviceU" element={<ServicesU />} />
          <Route path="/serviceX" element={<ServicesX />} />
          <Route path="/serviceZ" element={<ServicesZ />} />
        </Routes>
      </div>
      <div className='text-center'>

        <button className='border-2 text-primary-color text-md font-semibold py-3 px-6 rounded-lg text-center w-11/12'>See all</button>
      </div>
    </div>
  )
}

export default Services