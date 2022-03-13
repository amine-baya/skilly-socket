import React from 'react'
import Router from 'next/router'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'

function Description() {
  return (
    <div>
      <div className="px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        profile description
      </div>
      <hr />
      <main className="mb-8 flex flex-col gap-8 p-8   font-roboto text-[#545454] md:px-16">
        {/* 1 */}
        <div className="text-sm capitalize text-[#545454] ">
          update or creat a new profile headline and description. it will appear
          on tour tutor card on the “find tutors” page.
        </div>
        <StudentDescription />
        <div className="space-y-2">
          <input
            type="text"
            placeholder="write your headline in english"
            className="tutor-dashboard-input-style"
          />
          <div className=" capitalize text-[#8F8F8F]">
            good example: “ certified tutor with 5 years of experience”
          </div>
        </div>
        {/* 4 */}
        <IntroductionAndInterest />
        <ExperienceCertificationMethodology />
        <Trial />
        <div className="text-[#8F8F8F]">
          400 character minimum. 0 character currently
        </div>
        <NextAndBackBtn
          onNextClick={() => Router.push('video')}
          onBackClick={() => Router.push('education')}
        />
      </main>
    </div>
  )
}

export default Description

const StudentDescription = () => (
  <div className="flex flex-col gap-3">
    <div className="text-2xl  font-medium capitalize text-[#545454]">
      description for students
    </div>
    <div className="h-36 w-36 overflow-hidden rounded-md  bg-gray-200">
      <img src="" alt="img" />
    </div>
    <div className="text-2xl  font-medium capitalize text-[#545454]">
      yashvi m.
    </div>
  </div>
)

const IntroductionAndInterest = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      introduce yourself and share briefly about your interest
    </label>
    <input
      className="tutor-dashboard-input-style h-52"
      type="textarea"
      // placeholder="hello, my name is ...and i’m from... "
    />
  </div>
)

const ExperienceCertificationMethodology = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      describe your teaching experience, certification an methodology
    </label>
    <input
      className="tutor-dashboard-input-style h-52"
      type="textarea"
      // placeholder="hello, my name is ...and i’m from... "
    />
  </div>
)
const Trial = () => (
  <div className="tutors-input-n-label-style">
    <label htmlFor="" className="tutor-dashboard-label-style">
      motivate students to book a trial lesson with you
    </label>
    <input
      className="tutor-dashboard-input-style h-52"
      type="textarea"
      // placeholder="hello, my name is ...and i’m from... "
    />
  </div>
)
