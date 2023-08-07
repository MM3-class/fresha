import React from 'react'
import { FaGoogle, FaArrowUp } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className='bg-zinc-200  pt-5 px-5 pb-9'>
        <h1 className='text-4xl font-mono font-extrabold py-10'>Fresha</h1>
        <div className='py-2 px-6 flex items-center  outline-gray-400 mb-12 outline-1 outline outline-offset-1 space-x-2 text-xl bg-white w-fit rounded-full'>
          <button className='font-bold'>Get the app </button>
          <span>{<FaGoogle />}</span>
        </div>
        <div className="space-y-8">
          <div>
            <legend className='text-lg font-medium my-4'>About Fresha</legend>
            <ul className='space-y-2'>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div>
            <legend className='text-lg font-medium my-4'>Legal</legend>
            <ul className='space-y-2'>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Terms of use</a></li>
            </ul>
          </div>
          <div>
            <legend className='text-lg font-medium my-4'>For buslness</legend>
            <ul className='space-y-2'>
              <li><a href="#">For partners</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <legend className='text-lg font-medium my-4'>Find us on social</legend>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2'>{<FaArrowUp />}<a href="#">Facebook</a></li>
              <li className='flex items-center space-x-2'>{<FaArrowUp />}<a href="#">Twitter</a></li>
              <li className='flex items-center space-x-2'>{<FaArrowUp />}<a href="#">Linkedin</a></li>
              <li className='flex items-center space-x-2'>{<FaArrowUp />}<a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between py-6 px-4 bg-slate-50 text-secondary-color'>
        <small><span className='text-[10px] mr-1'>GB</span>English</small>
        <small>&#169; 2023 Fresha.com SV Ltd</small>
      </div>
    </>
  )
}

export default Footer