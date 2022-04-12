import React from 'react';
import Image from 'next/image';

const MySessions = () => {
    return (
        <div className="h-full whitespace-nowrap font-roboto capitalize px-4 sm:px-9 p-9 w-full block mx-auto">
            <div className="mb-9 flex justify-between">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    Active Sessions
                </h1>
                <h1 className="font-bold text-[#FC4D6D]">archived Sessions</h1>
            </div>

            <main className="flex items-center md:justify-between justify-center flex-wrap gap-[2rem]">
                {/* card Session */}
                <Card />
                <Card />
                <Card />
            </main>
        </div>
    )
}

export default MySessions;


const Card = () => {
    return (
        <div className="sm:w-[380px] w-full h-[475px] rounded-2xl bg-white p-4 shadow-lg">
            <div className="mb-2 flex flex-col gap-[11px]">
                <p className="text-base font-medium">
                    Today within
                    <span className="font-bold text-[#FC4D6D]"> 00:00:15:35 </span>
                    minutes{' '}
                </p>
                <h3 className="text-2xl tracking-wide font-semibold">Tue, 3:30PM-4:30PM</h3>
            </div>

            <hr className='w-full h-[3px] bg-gray-300' />

            <div className="p-4 lg:px-2 lg:py-4 xl:p-4 ">
                <div className="grid grid-cols-2 gap-y-4 text-lg">
                    {/* tutor */}
                    <div className='relative flex items-center justify-start gap-2 mb-5'>
                        <div className='relative rounded-full w-10 h-10'>
                            <Image
                                src='/Images/revuserimg.png'
                                alt='tutor'
                                objectFit='contain'
                                layout='fill'
                            />
                        </div>
                        <label className="font-bold">Jhon Carter</label>
                    </div>
                    <p className="justify-self-end font-medium text-[#3F97FF] cursor-pointer">Message</p>

                    {/* duration */}
                    <label className="font-bold">duration</label>
                    <p className=" justify-self-end font-medium">60min</p>

                    {/* fees */}
                    <label className="font-bold">fees</label>
                    <p className=" justify-self-end font-medium">$10</p>

                    {/* skill */}
                    <label className="font-bold">skill</label>
                    <p className=" justify-self-end font-medium">gardening</p>

                    {/* session */}
                    <label className="font-bold">session no.</label>
                    <p className=" justify-self-end font-medium">5 <p className='text-[#3F97FF] cursor-pointer inline'>(see agenda)</p></p>
                </div>

                <div className="mt-[40px]">
                    <button className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-white ">
                        enter classroom
                    </button>
                </div>
            </div>
        </div>
    )
}