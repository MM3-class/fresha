import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Featured = () => {
    const arr = [
        {
            service: "Underarms",
            time: "10min",
            price: "£60"
        },
        {
            service: "Hollywood bikini (including perianal, navel)",
            time: "25min",
            price: "£130"
        },
        {
            service: "Laser Hair Removal package of min 6 sessions Full legs (bikini free)",
            time: "10min",
            price: "£180",
            save: "Save 42%"
        },
        {
            service: "Medical Deep Pore Cleansing (congested skin)",
            time: "10min",
            price: "£150.50",
            save: "Save 14%"
        },

    ]
    return (
        <div className='py-10'>
                {arr?.map((service) => (
                    <div className='flex items-center justify-between border-b mx-auto md:my-4 md:border md:rounded-lg p-5 space-y-2 text-primary-color text-md font-semibold w-11/12'>   
                       <div>
                       <p>{service.service}</p>
                        <p className='pb-3 text-secondary-color'>{service.time}</p>
                        <p className='inline pr-2'>{service.price}</p><span className='text-green-600'>{service.save}</span>
                       </div>
                        <div className='p-2 bg-gray-200 rounded-md font-light text-sm'>
                            {<FaPlus />}
                        </div>
                    </div>
                ))}

        </div>
    )
}

export default Featured