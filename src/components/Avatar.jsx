import AVATAR1 from "../assets/avatar-1.jpg";
import AVATAR2 from "../assets/avatar-2.jpg";
import AVATAR3 from "../assets/avatar-3.jpg";
import { FaHeart, FaShareSquare, FaStar } from "react-icons/fa"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../components/avatar.css";
const starArray = [
  {
    "icon": <FaStar />
  },
  {
    "icon": <FaStar />
  },
  {
    "icon": <FaStar />
  },
  {
    "icon": <FaStar />
  },
  {
    "icon": <FaStar />
  },
]
const Avatar = () => {
  return (
    <section className="md:px-8">
      <nav className="overflow-hidden truncate">
        <ul className='flex space-x-2 w-full mx-3 py-4 overflow-hidden'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Beauty Salons</a></li>
          <li><a href="#">London</a></li>
          <li><a href="#">St James's</a></li>
          <li><a href="#">Lia Aesthetics</a></li>
        </ul>
      </nav>
      <div className="top-0">
        <div className="hidden md:block">
          <h1 className="text-4xl font-bold lg:text-6xl">Beauty Loft Salon</h1>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center pt-2 pb-4 mb-2 text-md font-semibold">
              <p>4.8</p>
              <div className="flex items-center">
                <p> <FaStar /></p>
                <p> <FaStar /></p>
                <p> <FaStar /></p>
                <p> <FaStar /></p>
                <p> <FaStar /></p>
              </div>
              <p>(76)</p>
              <p className="text-green-600">open</p>
              <p>Until: 9:00pm</p>
              <p>Science Park Mont Rose</p>
            </div>
            <div className="flex items-center text-xl space-x-2 ">
              <p className="p-3 border  border-secondary-color rounded-full"><FaShareSquare /></p>
              <p className="p-3 border  border-secondary-color rounded-full"><FaHeart /></p>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          className="medium-screen"
          breakpoints={
            {
              768: {
                slidesPerView: 3
              }
            }
          }
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="grid-main">
              <img className=" w-full h-96 md:h-[700px] object-cover" src={AVATAR1} alt="avatar1" />
            </SwiperSlide>
            <SwiperSlide className="grid-right-top">
              <img className=" w-full h-96 md:h-[700px] object-cover" src={AVATAR2} alt="avatar2" />
            </SwiperSlide>
            <SwiperSlide className="grid-right-bottom">
              <img className=" w-full h-96 md:h-[700px] object-cover" src={AVATAR3} alt="avatar3" />
            </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-4 px-5 font-semibold text-primary-color text-md">
        <h1 className="text-2xl font-bold ">Lia Aesthetics</h1>
        <div className="flex items-center space-x-1 mb-3 mt-2">
          <p>5.0</p>
          <p className="flex">{starArray.map((star) => star.icon)}</p>
          <p className="text-blue-600">(15)</p>
        </div>
        <ul className="text-blue-600">
          <li>UK, Cameo House, 11 Bear Street, London</li>
        </ul>
        <p className="text-orange-600 py-3 text-lg">Closed</p>
        <p className="text-lg bg-green-200 w-20 h-8 rounded-md border-green-950 text-green-900 text-center">Deals</p>
      </div>
    </section>
  )
}

export default Avatar