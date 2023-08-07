// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Businesses2 = () => {
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
        <SwiperSlide className='truncate rounded-lg px-2 py-2'>
          <ul className="space-y-2">
            <li><a href="#">Beauty Salons in Fitzrovia</a></li>
            <li><a href="#">Beauty Salons in West End</a></li>
            <li><a href="#">Beauty Salons in Knightsbridge and </a></li>
            <li><a href="#">Beauty Salons in Marylebone High S</a></li>
            <li><a href="#">Beauty Salons in Camden</a></li>
            <li><a href="#">Beauty Salons in Mayfair</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className='truncate rounded-lg px-2 py-2'>
          <ul className="space-y-2">
            <li><a href="#">Beauty Salons in Belgravia</a></li>
            <li><a href="#">Beauty Salons in Brompton and Hans</a></li>
            <li><a href="#">Beauty Salons in Soho</a></li>
            <li><a href="#">Beauty Salons in Bloomsbury</a></li>
            <li><a href="#">Beauty Salons in Marylebone</a></li>
            <li><a href="#">Beauty Salons in Charing Cross</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className='truncate rounded-lg px-2 py-2'>
          <ul className="space-y-2">
            <li><a href="#">Beauty Salons in Westminster</a></li>
            <li><a href="#">Beauty Salons in Euston</a></li>
            <li><a href="#">Beauty Salons in St George's Fields</a></li>
            <li><a href="#">Beauty Salons in Royal Hospital</a></li>
            <li><a href="#">Beauty Salons in Victoria</a></li>
            <li><a href="#">Beauty Salons in Vincent Square</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className='truncate rounded-lg px-2 py-2'>
          <ul className="space-y-2">
            <li><a href="#">Women's Haircuts</a></li>
            <li><a href="#">Eyebrow Shaping</a></li>
            <li><a href="#">Anti-Wrinkle Injections</a></li>
            <li><a href="#">Dermal Fillers</a></li>
            <li><a href="#">Hair Treatments</a></li>
            <li><a href="#">Lash Lifts</a></li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className='truncate rounded-lg px-2 py-2'>
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

export default Businesses2