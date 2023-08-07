import React from 'react'

const BookNow = () => {
  return (
    <aside className='flex justify-between shadow-md items-center py-4 px-5  border-t lg:hidden sticky bottom-0 bg-white top-0'>
        <div className='text-secondary-color'>
            <p>95 services available</p>
        </div>
        <div className='bg-primary-color py-2 px-6 rounded-lg text-white font-medium text-lg'>
            <button>Book now</button>
        </div>
    </aside>
  )
}

export default BookNow