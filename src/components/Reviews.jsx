import React from 'react'
import { FaStar } from 'react-icons/fa'

const Reviews = () => {
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
  const users = [
    {
      name: "Otilia P",
      time: "5 Aug 2023 1:59pm",
      comment: "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what it does and how it helps my skin. Also checked in on me throughout the session, knowing that the extraction is quite painful for some people. Will for sure come back!!!🌸"
    },
    {
      name: "Mariana D.",
      time: "3 Aug 2023 4:10pm",
      comment: "Olga is so careful with my skin and my worries. I loved how she explained me the process and how she’s been so caring for my experience there to be nice."
    },
    {
      name: "Sufiya",
      time: "29 Jul 2023 2:34pm",
      comment: "It was so nice experience"
    },
    {
      name: "Carmen R.",
      time: "21 Jun 2023 6:58pm",
      comment: "Olga is such a kind and dedicated aesthetician. She is so involved in her work and determined to do the best for your skin as all the treatments are highly effective. My acne-prone skin always looks amazing immediately after the treatments, and it keeps my acne under control. At Lia Aesthetics, you will only find professional and friendly staff. Strongly recommend! ♡"
    },
    {
      name: "Izzy B.",
      time: "20 Jun 2023 7:11pm",
      comment: "As always an incredible appointment with Olga."
    },
    {
      name: "Cristina C.",
      time: "15 Jun 2023 7:50pm",
      comment: "I’m really fond of Olga and Silvia… very professional and polite ladies! Really really pleased with the results of laser hair removal, 4 sessions only but already 70 % is gone though I have very fair and thin hair ❤️❤️ thank you so much! Definitely will come again and recommend to my friends 🙏🙏"
    },
  ]
  return (
    <div className='space-y-8 border-b-2 pb-8'>
      <h1 className='text-2xl font-bold  lg:text-5xl'>Reviews</h1>
      <div className="items-center space-x-1 mb-3 mt-2 space-y-4">
        <p className="flex items-center text-4xl">{starArray.map((star) => star.icon)}</p>
        <div className='flex items-center space-x-2 text-xl font-bold'>
          <p>5.0</p>
          <p>(15)</p>
        </div>
      </div>

      <div className=' md:grid md:grid-cols-2 md:gap-12'>{users.map((user) => (
        <div className='py-2 text-md font-medium'>
          <div className='flex items-center space-x-3'>
            <div className='relative rounded-full w-10 p-10 bg-blue-200 block'>
              <h1 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-user font-semibold'>{user.name.slice(0, 1)}</h1>
            </div>
            <div>
              <p>{user.name}</p>
              <p className='text-secondary-color'>{user.time}</p>
            </div>
          </div>
          <div className='flex py-4'>{starArray.map((star) => <p className='px-1'>{star.icon}</p>)}</div>
          <p >{user.comment}</p>
        </div>
      ))}</div>
      <button className='border-2 text-primary-color text-md font-semibold py-3 px-6 rounded-lg text-center w-11/12'>See all</button>
    </div>
  )
}

export default Reviews