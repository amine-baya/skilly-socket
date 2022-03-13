import React from 'react'
import Router from 'next/router'
import NextAndBackBtn from '../../components/TutorDashboardRegistration/NextAndBackBtn'

function Certification() {
  return (
    <div className="mb-8">
      <div className=" px-5 pt-3 pb-4 font-poppins text-2xl font-semibold capitalize text-[#5E5252] md:px-16">
        teaching certification
      </div>
      <hr />
      <main className="mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
        {/* 1 */}
        <div className="text-sm capitalize text-[#545454] ">
          do you have teaching certificates? if so, describe them to enhance
          your profile credibility and get more students
        </div>
        <Subject />
        <Certificate />
        <Description />
        <IssuedBy />
        <YearOfStudy />
      </main>
      <UploadPhoto />
      <main className="  flex flex-col gap-5 p-5 font-roboto   text-[#545454]  md:px-16">
        <div className="-mt-2 text-sm font-medium capitalize text-[#42ADE2]">
          add another language
        </div>
        <CheckBox />
        <NextAndBackBtn
          onNextClick={() => Router.push('education')}
          onBackClick={() => Router.push('photo')}
        />
      </main>
    </div>
  )
}

export default Certification

const Subject = () => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      Subject
    </label>
    {/* <input
      className="tutor-dashboard-input-style "
      type="text"
      placeholder="choose a subject"
    /> */}
    <select
      id=""
      name=""
      className="cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto capitalize text-[#9E9E9E] outline-none md:w-96 "
    >
      <option value="">choose a subject </option>
    </select>
  </div>
)
const Certificate = () => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      certificate
    </label>
    <input className="tutor-dashboard-input-style " type="text" />
  </div>
)
const Description = () => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      Description
    </label>
    <input className="tutor-dashboard-input-style " type="text" />
  </div>
)
const IssuedBy = () => (
  <div className="tutors-input-n-label-style   ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      issued by
    </label>
    <input className="tutor-dashboard-input-style " type="text" />
  </div>
)
const YearOfStudy = () => (
  <div className="tutors-input-n-label-style    ">
    <label htmlFor="" className=" tutor-dashboard-label-style  ">
      year of study
    </label>
    <div className="grid  grid-cols-2 gap-6">
      <div className="flex  w-80 items-center  gap-2 md:w-96 ">
        <select
          name=""
          id=""
          className="w-full rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value=""> Select</option>
          <option value="">17:00</option>
          <option value="">15:00</option>
        </select>
        <span>To</span>
        <select
          name=""
          id=""
          className="w-full rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value="">Select</option>
          <option value=""> 9:00</option>
          <option value="">15:00</option>
        </select>
        <div className="relative h-4 w-4"></div>
      </div>
    </div>
  </div>
)
const UploadPhoto = () => (
  <div className="flex w-full flex-col gap-8 bg-[#F2F2F2] p-5 md:px-16">
    <div className="text-lg capitalize">
      upload your certificate to increase the credibility of your profile
    </div>
    <div className="flex items-center gap-2">
      <div className="rounded-lg border-[1px] border-[#FC4D6D]  py-3 px-6 text-sm font-medium  capitalize">
        upload a photo
      </div>
      <div className="text-xs">
        <div className="">JPG or PNG format</div>
        <div>Maximum size - 2MB.</div>
      </div>
    </div>
  </div>
)

const CheckBox = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        name=""
        id=""
        className=" h-6 w-6 border-2 border-gray-300 bg-blue-200 "
      />
      <span className="capitalize">
        i don’t have any teaching certification yet
      </span>
    </div>
  </div>
)
