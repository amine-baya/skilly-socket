import React from 'react';

const PaymentHistory = () => {
    return (
        <div className='bg-white lg:ml-[33px] lg:mt-[31px] lg:rounded-[18px] min-w-fit font-poppins pb-[263px]'>
            <div className='flex justify-between border-b'>
                <h1 className='font-semibold text-[16px] s:text-[22px] sm:text-2xl  text-[#5E5252] sm:pl-[50px] pt-[11px] lg:pt-[20px] pb-[11px] lg:pb-[19px] ml-[16px] lg:ml-0'>Payment History</h1>
                <h1 className='font-semibold text-[14px] sm:text-[18px]  text-[#3F97FF] sm:pr-[33px] pt-[11px] lg:pt-[30px] pb-[22px] mr-[16px] lg:mr-0'>Update Billing Info</h1>
            </div>
            <div >
                <table className=' flex flex-row sm:flex-col justify-between'>
                    <thead className='pl-[16px] sm:pl-0'>
                        <tr className='sm:border-b h-[57px] sm:grid sm:grid-cols-4 items-center text-[#858585]'>
                            <td className='sm:pl-[59px] block sm:inline mt-4 sm:mt-0'>Date</td>
                            <td className='block sm:inline mt-[15px] sm:mt-0'>Hours</td>
                            <td className='block sm:inline mt-[14px] sm:mt-0'>Subject</td>
                            <td className='sm:text-right sm:pr-[33px] text-[#3F97FF] text-[14px] block sm:inline mt-4 sm:mt-0'>Download All</td>
                        </tr>
                    </thead>

                    <tbody className='pr-[18px] sm:pr-0'>
                        <tr className='sm:border-b h-[57px] sm:grid sm:grid-cols-4 items-center text-[#5F5F5F]'>
                            <td className='sm:pl-[59px] block text-right sm:text-left sm:inline mt-4 sm:mt-0'>8 Dec 2021</td>
                            <td className='block sm:inline text-right sm:text-left mt-[15px] sm:mt-0'>1hr</td>
                            <td className='block sm:inline text-right sm:text-left mt-[14px] sm:mt-0'>IT Project Management</td>
                            <td className='text-right sm:pr-[33px] text-[#3F97FF] text-[14px] block sm:inline mt-4 sm:mt-0'>Get Receipt</td>
                        </tr>

                    </tbody>
                </table>
                <div className='border-t mx-[37px] mt-[17px] sm:border-0 sm:mt-0'></div>
                <div className='text-center pt-[47px] pb-[30px] sm:hidden'>
                    <button className='bg-[#FC4D6D] px-[70px] xs:px-[85px] s:px-[120px]  h-[40px]  rounded-[8px] text-[#FFFFFF]'>Save Settings</button>
                </div>
            </div>

        </div>
    )
}

export default PaymentHistory