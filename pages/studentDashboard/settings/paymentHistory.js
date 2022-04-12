import React from 'react'

const PaymentHistory = () => {
    return (
        <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white h-[calc(100vh-150px)] max-h-fit capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl font-poppins">
            <div className="flex justify-between p-5 sm:px-8">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    Payment history
                </h1>
                <h1 className="font-bold text-[#3F97FF]">Update Billing Info</h1>
            </div>

            <hr className="text-[#E2E2E2]" />

            {/* for lg devices */}
            <div className="hidden sm:block text-md capitalize font-medium w-full">
                <HistoryLG />
            </div>

            {/* for sm devices */}
            <div className="block sm:hidden text-md capitalize font-medium w-full">
                <HistorySM />
            </div>
        </div>
    )
}

export default PaymentHistory

// for lg devices
const HistoryLG = () => {
    return (
        <div className='flex flex-col justify-center w-full'>
            {/* headings */}
            <div className='flex items-center justify-between w-full p-5 px-8 text-[#858585]'>
                <p>
                    Date
                </p>
                <p>
                    Hours
                </p>
                <p>
                    Subject
                </p>
                <p className='text-[#3F97FF] cursor-pointer'>
                    Download All
                </p>
            </div>

            {/* divider */}
            <hr className="text-[#E2E2E2]" />

            {/* details */}
            <div className='flex items-center justify-between w-full p-5 px-8 text-[#5F5F5F]'>
                <p>
                    8 Dec 2021
                </p>
                <p>
                    1hr
                </p>
                <p>
                    IT Project Management
                </p>
                <p className='text-[#3F97FF] cursor-pointer'>
                    Get Reciept
                </p>
            </div>

            {/* divider */}
            <hr className="text-[#E2E2E2]" />
        </div>
    )
}


// for sm devices
const HistorySM = () => {
    return (
        <div className='flex flex-col justify-center w-full'>
            {/* date */}
            <div className='flex items-center justify-between w-full py-3 px-8 text-[#858585]'>
                <p>
                    Date
                </p>
                <p className='text-[#5F5F5F]'>
                    8 Dec 2021
                </p>
            </div>

            {/* Hours */}
            <div className='flex items-center justify-between w-full py-3 px-8 text-[#858585]'>
                <p>
                    Hours
                </p>
                <p className='text-[#5F5F5F]'>
                    1hr
                </p>
            </div>

            {/* Subject */}
            <div className='flex items-center justify-between w-full py-3 px-8 text-[#858585]'>
                <p>
                    Subject
                </p>
                <p className='text-[#5F5F5F]'>
                    IT project Management
                </p>
            </div>

            {/* download */}
            <div className='flex items-center justify-between w-full py-3 px-8 text-[#3F97FF]'>
                <p className='cursor-pointer'>
                    Download
                </p>
                <p className='cursor-pointer'>
                    Get Receipt
                </p>
            </div>
        </div>
    )
}


// {/* Date */}
// <div className='flex sm:flex-col sm:justify-center justify-between'>
// <p className='py-4 px-8 text-[#858585]'>
//     Date
// </p>

// <hr className="text-[#E2E2E2]" />

// <p className='py-4 px-8 text-[#5F5F5F]'>
//     8 Dec 2021
// </p>

// <hr className="text-[#E2E2E2]" />
// </div>

// {/* Hours */}
// <div className='flex sm:flex-col sm:justify-center justify-between'>
// <p className='py-4 px-8 text-[#858585]'>
//     Hours
// </p>

// <hr className="text-[#E2E2E2]" />

// <p className='py-4 px-8 text-[#5F5F5F]'>
//     1hr
// </p>

// <hr className="text-[#E2E2E2]" />
// </div>

// {/* Subject */}
// <div className='flex sm:flex-col sm:justify-center justify-between'>
// <p className='py-4 px-8 text-[#858585]'>
//     Subject
// </p>

// <hr className="text-[#E2E2E2]" />

// <p className='py-4 px-8 text-[#5F5F5F]'>
//     IT Project Management
// </p>

// <hr className="text-[#E2E2E2]" />
// </div>

// {/* Download */}
// <div className='flex sm:flex-col sm:justify-center justify-between text-[#3F97FF]'>
// <p className='py-4 px-8'>
//     Download All
// </p>

// <hr className="text-[#E2E2E2]" />

// <p className='py-4 px-8'>
//     Get Reciept
// </p>

// <hr className="text-[#E2E2E2]" />
// </div>