import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BusinessesA = () => {
  return (
    <div className='flex space-x-5 overflow-hidden truncate px-1'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className=' py-2'>
          <ul className="space-y-2">
            <li><a href="#">Beauty Salons</a></li>
            <li><a href="#">Eyebrows & Lashes</a></li>
            <li><a href="#">Hair Salons</a></li>
            <li><a href="#">Facials</a></li>
            <li><a href="#">Nail Salons</a></li>
            <li><a href="#">Eyelash Tinting</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className=' py-2'>
          <ul className="space-y-2">
            <li><a href="#">Massage</a></li>
            <li><a href="#">Eyelash Extensions</a></li>
            <li><a href="#">Manicures</a></li>
            <li><a href="#">Men's Haircuts</a></li>
            <li><a href="#">Aesthetics</a></li>
            <li><a href="#">Waxing Salons</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className=' py-2'>
          <ul className="space-y-2">
            <li><a href="#">Eyebrow Tinting</a></li>
            <li><a href="#">Hair Colouring</a></li>
            <li><a href="#">Pedicures</a></li>
            <li><a href="#">Gel Nails</a></li>
            <li><a href="#">Face Waxing</a></li>
            <li><a href="#">Blow Dries and Blowouts</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className=' py-2'>
          <ul className="space-y-2">
            <li><a href="#">Women's Haircuts</a></li>
            <li><a href="#">Eyebrow Shaping</a></li>
            <li><a href="#">Anti-Wrinkle Injections</a></li>
            <li><a href="#">Dermal Fillers</a></li>
            <li><a href="#">Hair Treatments</a></li>
            <li><a href="#">Lash Lifts</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className=' py-2'>
          <ul className="space-y-2">
            <li><a href="#">Arm Waxing</a></li>
            <li><a href="#">Leg Waxing</a></li>
            <li><a href="#">Brow Lamination</a></li>
            <li><a href="#">Hollywood Waxing</a></li>
            <li><a href="#">Lash Lift and Tint Treatments</a></li>
            <li><a href="#">Bikini Waxing</a></li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BusinessesA