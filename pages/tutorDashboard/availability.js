import React from 'react'
import PageTitle from '../../components/TutorDashboardRegistration/PageTitle'
import Image from 'next/image'
import Link from 'next/dist/client/link'

function Availability() {
  return (
    <>
      <PageTitle title="availability" />
      <hr />
      <main className=" mb-8 flex flex-col gap-8 p-5   font-roboto text-[#545454] md:px-16">
        <h2 className="text-xl font-medium capitalize">record your video</h2>
        <p className="text-sm capitalize text-[#545454] ">
          now interoduce yourself a correct timezone is essential to coordinate
          sessions with international students
        </p>
        <h3 className="font-medium capitalize ">choose your timezone</h3>
        <InputTime />
        <section className="space-y-2 capitalize">
          <h3 className="text-lg font-medium ">set your availability</h3>
          <p className=" text-sm">
            availability shows your potential working hours.students can book
            lessons at these time
          </p>
        </section>
        <Days />
        <CompletedAndBackBtn />
      </main>
    </>
  )
}

export default Availability

const InputTime = () => {
  return (
    <select
      id="cars"
      name="cars "
      className=" max-w-xl cursor-pointer rounded-lg border-2 bg-white py-3 px-2 font-roboto text-[#9E9E9E] outline-none "
    >
      <option value="">13:53 (GMT+ 5:300- asia, kolkata</option>
      <option value="">18:53 (GMT+ 5:300- asia, Delhi</option>
      <option value="">13:53 (GMT+ 5:300- asia, kolkata</option>
    </select>
  )
}
const Days = () => {
  return (
    <div className="space-y-6">
      <Day day="monday" />
      <Day day="Tuesday" />
      <Day day="Wednesday" />
      <Day day="thursday" />
      <Day day="friday" />
      <Day day="saturday" />
      <Day day="sunday" />
    </div>
  )
}
const Day = ({ day, url = '#' }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 ">
        <div className="relative h-4 w-4 ">
          <Image
            src="/Images/ProfilePhoto/blue-tick.png"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <span className="capitalize">{day}</span>
      </div>
      <div className="flex items-center gap-2">
        <select
          name=""
          id=""
          className="w-36 rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value=""> 9:00</option>
          <option value="">17:00</option>
          <option value="">15:00</option>
        </select>
        <span>To</span>
        <select
          name=""
          id=""
          className="w-36 rounded-lg border-2 bg-white py-2 px-4
          text-[#A8A2A2] outline-none"
        >
          <option value="">17:00</option>
          <option value=""> 9:00</option>
          <option value="">15:00</option>
        </select>
        <Link href={url}>
          <a className="relative h-4 w-4">
            <Image
              src="/Images/TutorsDashboard/plus.svg"
              objectFit="cover"
              layout="fill"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
const CompletedAndBackBtn = () => {
  return (
    <div className=" mt-12 flex flex-col   gap-4 md:flex-row">
      <Link href="#">
        <a className="rounded-lg bg-[#FC4D6D] py-2 px-7 text-center capitalize text-white md:order-2 md:self-auto">
          complete registration
        </a>
      </Link>
      <Link href="/tutorDashboard/video">
        <a className="  rounded-lg border-[1px] border-[#FC4D6D] py-2 px-7 text-center capitalize text-[#FC4D6D]">
          back
        </a>
      </Link>
    </div>
  )
}
