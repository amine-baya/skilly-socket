import React from 'react'
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineExclamationCircle,
} from 'react-icons/ai'


import { BiTimeFive } from 'react-icons/bi'
function Schedule() {
  return (
    <div className="mx-auto  w-full md:bg-[#fafafa]">
      <div className="border- m-2 mt-6 flex max-w-[863px]  flex-col gap-4 rounded-xl  px-2 py-6  font-poppins md:mx-auto md:border-none">
        <section className="mx-0 space-y-2 md:mx-auto ">
          <h2 className="text-2xl font-semibold capitalize tracking-wide text-[#5F5F5F]">
            schedule
          </h2>
          <SmallLine />
        </section>
        <section className="my-6  hidden items-center gap-4 rounded-xl bg-[#FFF2F4] py-4 px-5 text-lg text-[#9A9A9A] md:flex">
          <AiOutlineExclamationCircle className="text-xl" />
          <p>
            Choose the time for your first lesson. The timings are displayed in
            your local timezone.
          </p>
        </section>
        <DateAndButtons />
        <TimeZone />
        <hr className="hidden md:flex" />
        <Calender />
        <DesktopTimeZone />
      </div>
    </div>
  )
}

export default Schedule
function SmallLine() {
  return (
    <div className="flex h-[3px]  ">
      <div className="  w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className=" ml-[5px] w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}
function DateAndButtons() {
  return (
    <section className="flex items-center justify-between">
      <div className="font-semibold  capitalize text-[#383737] md:text-lg md:text-[#686767] ">
        29 jan - feb 4, 2022
      </div>
      <div className="flex gap-8">
        <button className="rounded-xl bg-[#FC4D6D] px-4  text-lg text-white md:rounded-2xl md:px-6  ">
          <div className="rounded-full border-white md:border-2 md:p-[2px]">
            <AiOutlineArrowLeft />
          </div>
        </button>
        <button className="rounded-xl bg-[#FC4D6D] px-4 py-2 text-lg text-white md:rounded-2xl md:py-1.5 md:px-6 ">
          <div className="rounded-full border-white md:border-2 md:p-[2px]">
            <AiOutlineArrowRight />
          </div>
        </button>
      </div>
    </section>
  )
}
function TimeZone() {
  return (
    <select className="mx-auto  w-full rounded-lg bg-[#fff1f3] px-4 py-2 text-sm text-[#9A9A9A] md:hidden">
      <option>00:51, 25 January 2022 IST [refresh]</option>
    </select>
  )
}
function DesktopTimeZone() {
  return (
    <div className="my-6 hidden md:flex">
      <div className="flex items-center gap-2 text-lg text-[#9A9A9A]">
        <BiTimeFive className="text-xl" />
        <select className="font-semibold outline-none">
          <option>Indian Standard Time</option>
        </select>
        <div className="ml-6">00:51, 25 January 2022 IST [refresh]</div>
      </div>
    </div>
  )
}
//

function Calender() {
  return (
    <div className=" flex justify-between px-1 text-center text-sm">
      <Sunday />
      <Monday />
      <Tuesday />
      <Wednesday />
      <Thursday />
      <Friday />
      <Saturday />
    </div>
  )
}
function Sunday() {
  return (
    <div className="space-y-6">
      <div className="space-y-3 text-center">
        <div className="font-bold uppercase text-[#565656]  md:text-2xl">
          su
        </div>
        <div className="rounded-full  bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F]  p-1.5  font-semibold text-white md:p-3 md:text-[22px] ">
          29
        </div>
      </div>
      <div class="space-y-3 text-[#848484] md:text-lg">
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
      </div>
    </div>
  )
}
function Monday() {
  return (
    <div className="space-y-6">
      <DayAndDate day="mo" date="30" />
      <div class="space-y-3 text-[#FC4D6D] md:text-lg ">
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
      </div>
    </div>
  )
}
function Tuesday() {
  return (
    <div className="space-y-6">
      <DayAndDate day="tu" date="31" />
      <div class="space-y-3 text-[#FC4D6D] md:text-lg  ">
        <div>11:30</div>
        <div>11:30</div>
        <div>11:30</div>
      </div>
    </div>
  )
}
function Wednesday() {
  return (
    <div className="space-y-6">
      <DayAndDate day="we" date="1" />
      <div class="space-y-3 text-[#FC4D6D]  md:text-lg">
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div className="rounded-full bg-[#FC4D6D] px-2 text-white">14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
      </div>
    </div>
  )
}
function Thursday() {
  return (
    <div className="space-y-6">
      <DayAndDate day="th" date="2" />
      <div class="space-y-3 text-[#FC4D6D]  md:text-lg">
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
      </div>
    </div>
  )
}
function Friday() {
  return (
    <div className="space-y-6">
      <DayAndDate day="fr" date="3" />
      <div class="space-y-3 text-[#FC4D6D]  md:text-lg">
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
      </div>
    </div>
  )
}
function Saturday() {
  return (
    <div className="space-y-6">
      <DayAndDate day="sa" date="4" />
      <div class="space-y-3  text-[#FC4D6D] md:text-lg ">
        <div>14:30</div>
        <div>14:30</div>
        <div>14:30</div>
      </div>
    </div>
  )
}

function DayAndDate({ day, date }) {
  return (
    <div className="space-y-3 text-center">
      <div className="font-bold  uppercase text-[#565656] md:text-2xl">
        {day}
      </div>
      <div className=" p-1.5 font-semibold md:p-3 md:text-[22px] ">{date}</div>
    </div>
  )
}
