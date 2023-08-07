import React from 'react'

const RightSide = () => {
    return (
        <div className='border  rounded-lg flex flex-col justify-start items-start p-8 sticky right-0 top-[100px]'>
            <div className=' border-b mb-8 pb-8 w-full space-y-4'>
                <h1>Beauty Loft Salon</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Featured</p>
                <button className='text-center bg-black text-white w-full mt-6 py-3 rounded-xl'>Book now</button>
            </div>
            <div className=' border-b mb-8 pb-8 space-y-4'>
                <p>open until 9:00pm</p>
                <p>Science Park Mont Rose Tower A, Al Barsha South, Dubai Get directions</p>
            </div>
            <div className=' border-b mb-8 pb-8  space-y-4'>
                <h1>Membership</h1>
                <p>Buy a bundle of appointments.</p>
                <h1>Gift Cards</h1>
                <p>Treat yourself or a friend to future visits</p>
            </div>
        </div>
    )
}

export default RightSide