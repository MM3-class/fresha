import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa"
import nearbyA from "../../assets/nearby1.jpg"
import nearbyB from "../../assets/nearby2.jpg"
import nearbyC from "../../assets/nearby3.jpg"
import nearbyD from "../../assets/nearby4.jpg"
import nearbyE from "../../assets/nearby5.jpg"
import nearbyF from "../../assets/nearby6.jpg"
import nearbyG from "../../assets/nearby7.jpg"
import nearbyU from "../../assets/nearby8.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../services.css'
const Nearby = () => {

  return (
    <div>
      <h1 className='text-3xl my-5 mx-4 font-semiBold'>Venues nearby</h1>
      <div className="relative ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={4}
          breakpoints={{
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            1025: {
              slidesPerView: 4,
              slidesPerGroup: 4
            },
          }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl  w-46 md:h-80 md:w-70 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyA} className=" group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className="pl-2">(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className="px-2 border">Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl w-46 md:h-80 md:w-70 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyB} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl md:h-80 md:w-70 w-46 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyC} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl md:h-80 md:w-70 w-46 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyD} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl md:h-80 md:w-70 w-46 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyE} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl md:h-80 md:w-70 w-46 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyF} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl md:h-80 md:w-70 w-46 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyG} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='truncate rounded-lg px-2 py-2'>
            <div className="card border group rounded-xl md:h-80 md:w-70 w-46 h-60 flex flex-col justify-between">
              <div className="img w-full md:h-60 h-40 overflow-hidden">
                <img src={nearbyU} className="group-hover:scale-125 duration-700 object-cover w-full h-full rounded-t-xl" alt="nearby1" />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-md font-bold truncate ">Kohlbaa Beauty Salon</h3>
                <div className="flex items-center">
                  <p>4.9</p>
                  <p className="pl-1">{<FaStar />}</p>
                  <p className='pl-2'>(139)</p>
                </div>
                <p className="text-secondary-color truncate">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, possimus?</p>
                <button className='px-2 border'>Beauty salon</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="arrow-left arrow absolute -left-5 border p-3 text-secondary-color bg-white font-thin rounded-full top-1/2 -translate-y-1/2 z-20 text-2xl"><FaArrowLeft /></div>
        <div className="arrow-right arrow absolute -right-5 border p-3 text-secondary-color bg-white font-thin rounded-full top-1/2 -translate-y-1/2 z-20 text-2xl"><FaArrowRight /></div>
      </div>
    </div>
  )
}

export default Nearby