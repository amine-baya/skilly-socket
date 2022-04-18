import React from 'react'
import CourseCart from '../../components/CourseCart'

const Shortlist = () => {
  return (
    <div className="mx-auto block h-full w-full whitespace-nowrap p-9 px-4 font-roboto capitalize sm:px-9">
      <div className="mb-9 flex items-end gap-3">
        <h1 className="text-2xl font-semibold text-[#5E5252]">
          My Shortlisted Tutors
        </h1>
      </div>

      {/* main container */}
      <main className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-16 md:justify-between">
        {Array.from(Array(9), (_, index) => index + 1).map((index) => (
          <CourseCart
            key={index}
            topRightTitle={'top tutors'}
            coverImg="/Images/CourseCart/girl-using-tablet.png"
            tutorName={'Radhakishan J.'}
            countryLogo={'/Images/CourseCart/united-kingdom.svg'}
            tutorImg={'/Images/CourseCart/girl-looking-up.png'}
            tutorData={{ _id: 'asf' }}
          />
        ))}
      </main>
    </div>
  )
}

export default Shortlist
