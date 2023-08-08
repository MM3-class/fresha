import React from 'react'
import { FaCheck, FaListAlt } from 'react-icons/fa'

const About = () => {
  return (
    <div>
      <div className='space-y-3 font-semibold text-md'>
        <h1 className='text-2xl font-bold'>About</h1>
        <p>Set in the heart of Soho, one of London’s most loved and cosmopolitan regions, Lia Aesthetics is the ideal location for your Aesthetic Treatments. Designed to be a wonderful, welcoming and warm setting, this clinic is easily accessible and we welcome you to visit.</p>
      </div>
      <div className='py-5 space-y-5'>
        <h1 className='text-xl font-bold'>Opening Times</h1>
        <table className='table w-full mx-auto text-[16px] font-medium'>
          <tbody>
            <tr>
              <td>Monday</td>
              <td className='float-right'>Closed</td>
            </tr>
            <tr className='space-y-3'>
              <td>Tuesday</td>
              <td className='float-right'>10:00am - 8:00pm</td>
            </tr>
            <tr className='space-y-3'>
              <td>Wednesday</td>
              <td className='float-right'>Closed</td>
            </tr>
            <tr className='space-y-3'>
              <td>Thursday</td>
              <td className='float-right'>10:00am - 8:00pm</td>
            </tr>
            <tr className='space-y-3'>
              <td>Friday</td>
              <td className='float-right'>10:00am - 8:00pm</td>
            </tr>
            <tr><td>Saturday</td>
              <td className='float-right'>10:00am - 8:00pm</td>
            </tr>
            <tr className='space-y-3'>
              <td>Sunday</td>
              <td className='float-right'>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1 className='text-xl font-bold'>Additional information</h1>
        <div className='space-y-2 my-3 text-lg font-medium'>
          <div className='flex items-center space-x-2 '>
            <p>{<FaCheck />}</p>
            <p>Instant Confirmation</p>
          </div>
          <div className='flex items-center space-x-2 '>
            <p>{<FaListAlt />}</p>
            <p>Pay by app</p>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510207608!2d55.27180147452016!3d25.19720183170215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1691354468141!5m2!1sen!2sae" className='w-full h-60 rounded-r-xl lg:h-[600px]' />
      </div>
      <div>
      <p className='inline-block pr-2'>UK, Cameo House, 11 Bear Street, London, England</p><a href="https://www.google.com/maps/place/Burj+Khalifa+-+1+Sheikh+Mohammed+bin+Rashid+Blvd+-+Downtown+Dubai+-+Dubai/@25.197197,55.2743764,17z/data=!4m14!1m7!3m6!1s0x3e5f43348a67e24b:0xff45e502e1ceb7e2!2sBurj+Khalifa+-+1+Sheikh+Mohammed+bin+Rashid+Blvd+-+Downtown+Dubai+-+Dubai!8m2!3d25.197197!4d55.2743764!16zL20vMDNjbjB2!3m5!1s0x3e5f43348a67e24b:0xff45e502e1ceb7e2!8m2!3d25.197197!4d55.2743764!16zL20vMDNjbjB2" target='_blank' className='text-blue-600 ' >Get directions</a>
      </div>
    </div>
  )
}

export default About