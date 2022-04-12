import React from 'react';

const Autoconfirmation = () => {
    return (
        <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white  capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl font-poppins">
            <div
                id="heading"
                className="col-span-12  p-5 text-2xl font-semibold text-[#3d3d3d] xl:px-12"
            >
                Autoconfirmation
            </div>
            <hr className="text-[#E2E2E2]" />

            <div className="flex flex-col gap-6 w-full flex-wrap px-5 py-6 font-medium text-[#545454] text-md xl:px-12 capitalize font-roboto tracking-wide">
                {/* message */}
                <div className="flex flex-col md:flex-row gap-6 w-full flex-wrap">
                    <p className='md:w-[45%] w-full'>
                        All sessions will be confirmed automatically 72 hours after the scheduled end time unless you report an issue. Choose automatic confirmation if you trust your tutors and there are no issues with scheduling sessions through the skillyTree Calendar.
                    </p>
                    <p className='md:w-[45%] w-full'>
                        <p className='font-semibold'>
                            Autoconfirmation for sessions in the
                        </p>
                        <p>
                            skillyTree Space
                        </p>
                        <p>
                            Autoconfirm tracks the time you spend connected with your tutor in the skillyTree Space. 15 minutes after a session is completed, it is confirmed automatically and we release your tutor's payment. If there are any issues, please contact us right after the session and we'll help you find a solution.
                        </p>
                    </p>
                </div>

                {/* checkboxs */}
                <div className='flex flex-col items-center w-full justify-start gap-2'>
                    <div className='flex items-center w-full justify-start gap-3'>
                        <input type="radio" id="sessionManually" className='w-4 h-4' />
                        <label htmlFor="sessionManually" className='text-[#878787]'>
                            I want to confirm each session manually
                        </label>
                    </div>
                    <div className='flex items-center w-full justify-start gap-3'>
                        <input type="radio" id="automatically" className='w-4 h-4' />
                        <label htmlFor="automatically" className='text-[#878787]'>
                            confirm my sessions automatically after 72 hours
                        </label>
                    </div>
                </div>

                {/* button */}
                <button className='border-none flex items-center justify-center sm:w-[130px] w-full h-[40px] rounded-lg text-white font-semibold bg-[#FC4D6D]'>
                    Save Settings
                </button>
            </div>
        </div>
    )
}

export default Autoconfirmation;