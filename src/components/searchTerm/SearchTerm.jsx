import { useState } from 'react'
import { FaAngleDown, FaAngleUp, FaBars } from 'react-icons/fa'
const SearchTerm = () => {
    const [isShow, setIsShow] = useState(false);
    const [isMenuShow, setIsMenuShow] = useState(false);
    return (
        <div className='relative pt-5 pb-8 flex items-center justify-between mx-auto w-full'>
            <div className=''>
                <h1 className='font-mono font-extrabold text-primary-color text-xl'>Fresha</h1>
            </div>
            <div className=' '>
                <input className=' transition-all duration-300 w-96 border p-2 focus:absolute top-5 z-30 outline-none rounded-xl focus:w-[calc(100%-0px)] mx-auto h-12 inset-0' type="text" placeholder='&#128269; Treatment or Venus' />
            </div>
            <div onClick={() => setIsMenuShow((prev) => !prev)} className='lg:hidden active:outline'>
                <FaBars />
            </div>
            <div onClick={() => setIsShow((prev) => !prev)} className='relative active:outline lg:flex items-end border py-2 px-6  md:hidden rounded-full text-xl space-x-2 transition-all duration-500'>
                <p>menu</p>
                {isShow ? (<p><FaAngleUp /></p>) : (<p><FaAngleDown /></p>)}
                {isShow && (
                    <ul className=' absolute top-14 right-5 bg-white w-44 border p-5 z-20 rounded-lg space-y-5 text-sm '>
                        <li><a href="#">Log in</a></li>
                        <li><a href="#">Download the app</a></li>
                        <li><a href="#">Customer support</a></li>
                        <li className='border-b pb-5'><a href="#"><span className='text-xs text-secondary-color'>GB</span> English</a></li>
                        <li className='font-bold'><a href="#">Fresha for business</a></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SearchTerm