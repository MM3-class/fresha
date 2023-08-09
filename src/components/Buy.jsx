import React from 'react'

const Buy = () => {
  return (
    <div className=' space-y-4'>
      <h1 className='text-2xl font-bold  lg:text-5xl'>Buy</h1>
      <div className='flex items-center justify-between'>
        <div>
        <p>Membership</p>
        <p className='text-secondary-color'>buy a bundle of appointment</p>
        </div>
        <button className='py-2 px-3 border-2 font-semibold rounded-md'>Buy</button>
      </div>
      <div className='flex items-center justify-between'>
        <div className=''>
        <p>Gift Cards</p>
        <p>treat yourself or your friend to future visits</p>
        </div>
        <button className='py-2 px-3 border-2 font-semibold rounded-md'>Buy</button>
      </div>
    </div>
  )
}

export default Buy