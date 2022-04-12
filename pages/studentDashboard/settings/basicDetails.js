import Image from 'next/image';
import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const BasicDetails = () => {
    return (
        <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white  capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl ">
            <div
                id="heading"
                className="col-span-12  p-5 text-3xl font-semibold text-[#3d3d3d] xl:px-12"
            >
                Basic Details
            </div>

            <hr className="text-[#E2E2E2]" />

            <div className="flex flex-col gap-6 px-5 py-6 font-semibold text-[#545454] text-lg xl:px-12 capitalize">
                {/* country of origin */}
                <div className='flex items-center justify-start flex-wrap sm:gap-6 gap-3 w-full'>
                    <p>My Country of origin</p>
                    <div className='relative border-2 border-[#C1C1C1] rounded-lg sm:w-[175px] w-full h-[44px] flex items-center justify-center pl-10 pr-5'>
                        <div className='absolute left-4'>
                            <div className='relative rounded-full w-[18px] h-[18px]'>
                                <Image
                                    src="/Images/ukIcon.png"
                                    alt='ico'
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <select className='w-full rounded-lg outline-none border-none'>
                            <option value="india">India</option>
                            <option value="britain">Britain</option>
                        </select>
                    </div>
                </div>

                {/* native speak */}
                <div className='flex items-center justify-start flex-wrap sm:gap-[70px] gap-3 w-full'>
                    <p>I Natively Speak</p>
                    <div className='border-2 border-[#C1C1C1] rounded-lg sm:w-[175px] w-full h-[44px] flex items-center justify-center px-4'>
                        <input
                            type='text'
                            className='w-full rounded-lg outline-none border-none'
                            placeholder='Hindi'
                        />
                    </div>
                </div>

                {/* english fluency */}
                <div className='flex items-center justify-start flex-wrap sm:gap-[45px] gap-3 w-full'>
                    <p>My English Fluency</p>
                    <div className='border-2 border-[#C1C1C1] rounded-lg sm:w-[175px] w-full h-[44px] flex items-center justify-center px-4'>
                        <select className='w-full rounded-lg outline-none border-none'>
                            <option value="expert">Expert</option>
                            <option value="beginner">Beginner</option>
                        </select>
                    </div>
                </div>

                {/* custom */}
                <div className='flex items-center justify-start flex-wrap sm:gap-[35px] gap-3 w-full'>
                    <p className='truncate'>I will like to learn...</p>
                    <div className='border-2 border-[#C1C1C1] rounded-lg sm:w-[175px] w-full h-[44px] flex items-center justify-center px-4'>
                        <input
                            type='text'
                            className='w-full rounded-lg outline-none border-none'
                            placeholder='Math'
                        />
                    </div>
                    <div className='flex items-center sm:justify-center gap-6 sm:w-fit w-full justify-end'>
                        {/* Plus */}
                        <span className='cursor-pointer scale-110'>
                            <AiOutlinePlus />
                        </span>
                        {/* Delete */}
                        <span className='cursor-pointer scale-110'>
                            <MdOutlineDelete />
                        </span>
                    </div>
                </div>

                {/* custom */}
                <div className='flex items-center justify-start flex-wrap sm:gap-[35px] gap-3 w-full'>
                    <p className='truncate'>I will like to learn...</p>
                    <div className='border-2 border-[#C1C1C1] rounded-lg sm:w-[175px] w-full h-[44px] flex items-center justify-center px-4'>
                        <input
                            type='text'
                            className='w-full rounded-lg outline-none border-none'
                            placeholder='Math'
                        />
                    </div>
                    <div className='flex items-center sm:justify-center gap-6 sm:w-fit w-full justify-end'>
                        {/* Plus */}
                        <span className='cursor-pointer scale-110'>
                            <AiOutlinePlus />
                        </span>
                        {/* Delete */}
                        <span className='cursor-pointer scale-110'>
                            <MdOutlineDelete />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDetails;

