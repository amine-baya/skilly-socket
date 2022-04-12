import React from 'react';
import CourseCart from "../../components/CourseCart";

const Shortlist = () => {
    return (
        <div className="h-full whitespace-nowrap font-roboto capitalize px-4 sm:px-9 p-9 w-full block mx-auto">
            <div className="mb-9 flex gap-3 items-end">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    My Shortlisted Tutors
                </h1>
            </div>


            {/* main container */}
            <main className='flex flex-wrap items-center md:justify-between justify-center w-full gap-x-8 gap-y-16'>
                {Array.from(Array(9), (_, index) => index + 1).map((index) => (
                    <CourseCart
                        key={index}
                        topRightTitle={'top tutors'}
                        coverImg="/Images/CourseCart/girl-using-tablet.png"
                        tutorName={'Radhakishan J.'}
                        countryLogo={'/Images/CourseCart/united-kingdom.svg'}
                        tutorImg={'/Images/CourseCart/girl-looking-up.png'}
                    />
                ))}
            </main>
        </div>
    )
}

export default Shortlist;