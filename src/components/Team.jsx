// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaStar } from 'react-icons/fa';
import "../components/team.css"
const Team = () => {
    return (
        <div>
            <h1 className='text-3xl my-5 mx-4 font-semiBold'>Team</h1>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={4}
                    className='team-medium'
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className='text-center mx-auto '>
                            <div className='relative rounded-full lg:p-14 w-10 p-10 bg-blue-200 block'>
                                <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-user font-semibold'>I</h1>
                                <div className='flex items-center space-x-1 text-sm font-bold absolute bottom-0 left-1/2 -translate-x-1/2 px-2 bg-white border border-black rounded-full'>
                                    <p className="flex items-center">{<FaStar />}</p>
                                    <p>5.0</p>
                                </div>
                            </div>
                            <div className='text-secondary-color text-center text-sm pl-2 float-left mt-2'>
                                <p>Nurai</p>
                                <p>Beautician</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center mx-auto '>
                            <div className='relative rounded-full lg:p-14 w-10 p-10 bg-blue-200 block'>
                                <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-user font-semibold'>I</h1>
                                <div className='flex items-center space-x-1 text-sm font-bold absolute bottom-0 left-1/2 -translate-x-1/2 px-2 bg-white border border-black rounded-full'>
                                    <p className="flex items-center">{<FaStar />}</p>
                                    <p>5.0</p>
                                </div>
                            </div>
                            <div className='text-secondary-color text-center text-sm pl-2 float-left mt-2'>
                                <p>Nurai</p>
                                <p>Beautician</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center mx-auto '>
                            <div className='relative rounded-full lg:p-14 w-10 p-10 bg-blue-200 block'>
                                <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-user font-semibold'>I</h1>
                                <div className='flex items-center space-x-1 text-sm font-bold absolute bottom-0 left-1/2 -translate-x-1/2 px-2 bg-white border border-black rounded-full'>
                                    <p className="flex items-center">{<FaStar />}</p>
                                    <p>5.0</p>
                                </div>
                            </div>
                            <div className='text-secondary-color text-center text-sm pl-2 float-left mt-2'>
                                <p>Nurai</p>
                                <p>Beautician</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center mx-auto '>
                            <div className='relative rounded-full lg:p-14 w-10 p-10 bg-blue-200 block'>
                                <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-user font-semibold'>I</h1>
                                <div className='flex items-center space-x-1 text-sm font-bold absolute bottom-0 left-1/2 -translate-x-1/2 px-2 bg-white border border-black rounded-full'>
                                    <p className="flex items-center">{<FaStar />}</p>
                                    <p>5.0</p>
                                </div>
                            </div>
                            <div className='text-secondary-color text-center text-sm pl-2 float-left mt-2'>
                                <p>Nurai</p>
                                <p>Beautician</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center mx-auto '>
                            <div className='relative rounded-full lg:p-14 w-10 p-10 bg-blue-200 block'>
                                <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-user font-semibold'>I</h1>
                                <div className='flex items-center space-x-1 text-sm font-bold absolute bottom-0 left-1/2 -translate-x-1/2 px-2 bg-white border border-black rounded-full'>
                                    <p className="flex items-center">{<FaStar />}</p>
                                    <p>5.0</p>
                                </div>
                            </div>
                            <div className='text-secondary-color text-center text-sm pl-2 float-left mt-2'>
                                <p>Nurai</p>
                                <p>Beautician</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Team