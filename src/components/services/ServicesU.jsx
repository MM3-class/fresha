import React from 'react'
import { FaPlus } from 'react-icons/fa'

const ServicesU = () => {
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
                <div className='md:border md:rounded-lg md:p-5 md:my-4 flex items-center justify-between border-b mx-auto py-5 space-y-2 text-primary-color text-md font-semibold w-11/12'>
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

export default ServicesU