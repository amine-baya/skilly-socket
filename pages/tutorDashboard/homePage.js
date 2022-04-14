import Image from 'next/image'
import React from 'react'
import { TiTick } from 'react-icons/ti'

function HomePage() {
  return (
    <>
      <div className=" h-full  p-5 font-roboto capitalize lg:p-2 xl:p-9">
        <div className="mb-[27px] flex gap-3 lg:mb-9 ">
          <h1 className="text-lg font-semibold text-[#5E5252] lg:text-2xl">
            Profile and trial Sessions
          </h1>
          <h1 className="mt-auto text-sm font-medium text-[#A0A0A0]">
            Last 365 days
          </h1>
        </div>

        <div className=" mb-[30px] grid grid-cols-2 gap-x-5 gap-y-[30px] lg:grid-cols-3 lg:gap-x-3 xl:gap-x-[46px] ">
          <div className="rounded-2xl bg-white  px-2.5 py-[15px] lg:px-2 lg:py-4 xl:py-[30px]  xl:px-4 ">
            <div className="mb-8 flex flex-col gap-[11px] md:mb-[54px]    ">
              <h3 className="text-lg font-semibold lg:text-2xl">
                next session
              </h3>
              <p className="text-[8px] font-medium lg:text-base">
                is with in
                <span className="font-bold text-[#FC4D6D]"> 00:00:15:35 </span>
                minutes{' '}
              </p>
            </div>
            <div className=" ">
              <div className="grid grid-cols-2 gap-y-4 text-[9px] lg:text-lg">
                <label className="font-bold">date</label>
                <p className=" justify-self-end font-medium ">12-feb-2022</p>
                <label className="font-bold">duration</label>
                <p className=" justify-self-end font-medium ">
                  3:00pm to 4:00pm
                </p>
                <label className="font-bold">skill</label>
                <p className=" justify-self-end font-medium ">gardening</p>
                <label className="font-bold">student</label>
                <p className=" justify-self-end font-medium ">mr.jhon carter</p>
                <label className="font-bold">session number</label>
                <p className=" justify-self-end font-medium ">5</p>
              </div>
              <div className="mt-[30px] mb-5  lg:mt-[59px]">
                <button className=" w-full rounded-md bg-[#FC4D6D] py-2.5 text-xs font-bold capitalize text-white md:rounded-2xl md:py-5 md:text-2xl ">
                  enter class
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white px-2.5 py-[15px] lg:px-2 lg:py-4 xl:py-[30px]  xl:px-4">
            <div className="mb-[37px] flex flex-col  gap-[14px]  ">
              <h3 className="text-xs font-semibold text-[#5E5252] lg:text-2xl">
                this month revenue
              </h3>
              <p className="text-xl font-semibold text-[#494949] lg:text-[40px]">
                $500
              </p>
            </div>
            <div className="mb-[47px] flex flex-col gap-[14px]   ">
              <h3 className="text-xs font-semibold text-[#5E5252] lg:text-2xl">
                life-time revenue
              </h3>
              <p className=" text-xl font-semibold text-[#494949] lg:text-[40px]">
                $48,789
              </p>
            </div>
            <div className="mb-[47px] flex flex-col gap-[14px]    ">
              <h3 className="text-xs font-semibold text-[#5E5252] lg:text-2xl">
                Hourly rate
              </h3>
              <div className="flex gap-[17px]">
                <p className="text-xl font-semibold text-[#494949] lg:text-[40px]">
                  $10
                </p>
                <div className="my-auto h-5 w-auto rounded-[30px] bg-[#F2F2F2] px-2 py-0.5 text-xs font-normal text-[#03CD0B]">
                  Live
                </div>
              </div>
            </div>
            <p className="mt-[14px] whitespace-normal text-[8px] font-medium text-[#767676] md:text-sm    ">
              100% of UX/UI Sessions were booked at $10 or above
            </p>
          </div>

          <div className="rounded-2xl bg-white px-2.5 py-[15px] lg:px-2 lg:py-4 xl:py-[30px] xl:px-4">
            <div className="mb-[14px] flex flex-col gap-[7px]  md:mb-[37px]  ">
              <h3 className="text-xs font-semibold text-[#5E5252] md:text-[22px]">
                Profile completion status
              </h3>
              <div className="my-auto h-5 w-[37px] rounded-[30px] bg-[#F2F2F2] px-2 py-0.5 text-xs font-normal text-[#03CD0B]">
                Live
              </div>
            </div>
            <label className="text-[9px] font-medium text-[#767676] md:text-lg">
              Profile score
            </label>
            <div className="mb-11 flex gap-[31px] md:mb-[45px]">
              <p className="text-[17px] font-semibold text-[#494949] md:text-[34px]">
                83%
              </p>
              <div className="my-auto h-5 w-auto rounded-[30px] bg-[#F2F2F2] px-2 py-0.5 text-xs font-normal text-[#03CD0B]">
                Live
              </div>
            </div>
            <div className="flex flex-col gap-[11px] text-[9px] font-medium text-[#767676] md:text-lg">
              <div className="flex gap-[11px]">
                <input
                  type="checkbox"
                  name="profileUploaded"
                  id=""
                  className=" my-auto h-2.5 w-2.5 accent-[#E04343] md:h-[18px] md:w-[18px] "
                />
                <label>profile uploaded</label>
              </div>
              <div className="flex gap-[11px]">
                <input
                  type="checkbox"
                  name="profileUploaded"
                  id=""
                  className=" my-auto h-2.5 w-2.5 accent-[#E04343] md:h-[18px] md:w-[18px]"
                />
                <label>profile uploaded</label>
              </div>
              <div className="flex gap-[11px]">
                <TiTick className="my-auto text-xl   text-[#03CD0B]" />
                <label>profile uploaded</label>
              </div>{' '}
              <div className="flex gap-[11px]">
                <TiTick className="my-auto text-xl text-[#03CD0B]" />
                <label>profile uploaded</label>
              </div>{' '}
              <div className="flex gap-[11px]">
                <TiTick className="my-auto text-xl   text-[#03CD0B]" />
                <label>profile uploaded</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[116px] grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-2">
          <div className="flex w-full flex-col   gap-6 rounded-2xl bg-white px-[22px] py-[10px] xl:px-5 xl:py-3">
            <label className="md:text-lg  font-medium text-[#767676]">
              Profile views
            </label>
            <p className="md:text-[34px] text-7 font-medium">83 </p>
          </div>
          <div className="flex w-full flex-col  gap-6 rounded-2xl bg-[#F6F6F6] px-[22px] py-[10px] xl:px-5 xl:py-3">
            <label className="md:text-lg  font-medium text-[#767676]">
              trying to book
            </label>
            <p className="md:text-[34px] text-7 font-medium">2</p>
          </div>

          <div className="flex w-full flex-col   gap-6 rounded-2xl bg-white px-[22px] py-[10px] xl:px-5 xl:py-3">
            <label className="md:text-lg  font-medium text-[#767676]">
              paid and booked
            </label>
            <p className="md:text-[34px] text-7 font-medium">1 </p>
          </div>
          <div className="flex w-full flex-col  gap-6 rounded-2xl bg-[#F6F6F6] px-[22px] xl:px-5 xl:py-3 py-[10px]">
            <label className="md:text-lg  font-medium text-[#767676]">
              conversion rate{' '}
            </label>
            <p className="md:text-[34px] text-7 font-medium">2.5%</p>
          </div>

          <div className="flex w-full flex-col   gap-6 rounded-2xl bg-white px-[22px] py-[10px] xl:px-5 xl:py-3">
            <div className="flex flex-wrap gap-2.5">
              <label className="md:text-lg  font-medium text-[#767676]">
                Availability
              </label>
              <div className="my-auto h-5 w-auto rounded-[30px] bg-[#F2F2F2] px-2 py-0.5 text-xs font-normal text-[#03CD0B]">
                Live
              </div>
            </div>
            <p className="md:text-[34px] text-7 font-medium">92.0 hrs</p>
          </div>
          <div className="flex w-full flex-col  gap-6 rounded-2xl bg-[#F6F6F6] px-[22px] py-[10px] xl:px-5 xl:py-3">
            <label className=" font-medium text-[#767676]">
              upcoming sessions
            </label>
            <p className="md:text-[34px] text-7 font-medium">23.0 hrs</p>
          </div>
        </div>

        <div className="mb-[14px] flex gap-3 md:mb-[46px] ">
          <h1 className="text-lg font-semibold text-[#5E5252] md:text-2xl">
            New students
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]   md:grid-cols-4 lg:gap-x-3 xl:gap-x-[46px] ">
          <div className="flex flex-col rounded-2xl bg-white px-2.5 py-3 lg:px-2 lg:py-4 xl:py-[30px] xl:px-[18px]  ">
            <div className="mb-2.5 flex flex-col gap-[7px]  md:mb-[37px]  ">
              <h3 className="font-semibold text-[#5E5252] md:text-xl">
                Conversion to students
              </h3>
              <p className="text-2xl font-semibold text-[#494949] md:text-[40px]">
                0.00%{' '}
              </p>
            </div>
            <div className="flex flex-col gap-[7px] text-xs  font-medium text-[#767676]  md:mb-[47px] md:text-base  ">
              <p className="whitespace-normal">
                Don’t worry! To increase your conversion to student, you can:
              </p>
              <ul className="px-5 lg:px-2 xl:px-4 ">
                <li className="list-disc">lower your hourly rate</li>
                <li className="list-disc">expand your availability</li>
                <li className="list-disc">improve your trial lessons</li>
              </ul>
            </div>
            <div className="mt-auto">
              <h1 className="text-sm font-semibold text-[#E53838] md:text-xl">
                Low
              </h1>
              <div className="mt-2.5 w-full bg-[#E9E9E9] shadow md:mt-[15px]">
                <div className="h-[3px] w-1/2 rounded-[78px] bg-[#E53838] py-1 text-center text-xs leading-none  md:h-[5px] "></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl bg-white px-2.5 py-3 lg:px-2 lg:py-4 xl:py-[30px] xl:px-[18px]  ">
            <div className="mb-[14px] flex flex-col gap-[7px]  md:mb-[37px]  ">
              <h3 className="font-semibold text-[#5E5252] md:text-xl">
                Hours per student
              </h3>
              <div className="flex gap-[14px]">
                <p className="text-2xl font-semibold text-[#494949] md:text-[40px]">
                  1.0 hrs{' '}
                </p>
                <div className="my-auto h-5 w-auto rounded-[30px] bg-[#F2F2F2] px-2 py-0.5 text-xs font-normal text-[#03CD0B]">
                  Live
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[7px] text-xs  font-medium text-[#767676]  md:mb-[47px] md:text-base  ">
              <p className="whitespace-normal ">
                Don’t worry! To increase your hours per active student, try to:
              </p>
              <ul className="px-5 lg:px-2 xl:px-4 ">
                <li className="list-disc">improve your trial lessons</li>
                <li className="list-disc">motivate your students to</li>
              </ul>
              <p> learn more often with you</p>
            </div>
            <div className="mt-auto">
              <h1 className="text-sm font-semibold text-[#E53838] md:text-xl">
                Low
              </h1>
              <div className="mt-[15px] w-full bg-[#E9E9E9] shadow">
                <div className="h-[3px] w-1/2 rounded-[78px] bg-[#E53838] py-1 text-center text-xs leading-none md:h-[5px] "></div>
              </div>
            </div>
          </div>
          <div className="space-y-[23px]">
            <div className="flex w-full flex-col  gap-6 rounded-2xl bg-white px-[22px] py-5 ">
              <div className="flex md:gap-2.5 ">
                <label className="font-medium text-[#767676] md:text-lg">
                  New students
                </label>
              </div>
              <p className="text-[34px] font-medium">0</p>
            </div>
            <div className="flex w-full flex-col  gap-6 rounded-2xl bg-white px-[22px] py-5 ">
              <div className="flex gap-2.5">
                <label className="text-lg font-medium text-[#767676]">
                  Active students
                </label>
              </div>
              <p className="text-[34px] font-medium">1</p>
            </div>
            <div className="flex w-full flex-col  gap-6 rounded-2xl bg-white px-[22px] py-5 ">
              <div className="flex md:gap-2.5 ">
                <label className="font-medium text-[#767676] md:text-lg">
                  Tutoring hours
                </label>
              </div>
              <p className="text-[34px] font-medium">1.0 hrs</p>
            </div>
          </div>
          <div className="space-y-[23px]">
            <div className="flex w-full flex-col md:gap-6 rounded-2xl bg-white px-[22px] py-5 ">
              <div className="flex md:gap-2.5 ">
                <label className="font-medium text-[#767676] md:text-lg">
                  Trial Sessions rating
                </label>
              </div>
              <p className="text-[34px] font-medium">--</p>
            </div>
            <div className="flex w-full flex-col md:gap-6 rounded-2xl bg-white px-[22px] py-5 ">
              <div className="flex md:gap-2.5 ">
                <label className="font-medium text-[#767676] md:text-lg">
                  Trials you didn’t attend
                </label>
              </div>
              <p className="text-[34px] font-medium text-[#E53838]">1/5 </p>
            </div>
            <div className="flex w-full flex-col md:gap-6 rounded-2xl  bg-white px-[22px] py-5 ">
              <div className="flex md:gap-2.5 ">
                <label className="font-medium text-[#767676] md:text-lg">
                  Trials you canceled
                </label>
              </div>
              <p className="text-[34px] font-medium text-[#E53838]">0</p>
            </div>
          </div>
        </div>
        <div className="mt-[62px] mb-[14px] flex gap-3 md:mb-[46px] ">
          <h1 className="text-lg font-semibold text-[#5E5252] md:text-2xl">
            Lifetime achievements
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-[30px]   md:grid-cols-4 lg:gap-x-3 xl:gap-x-[46px] ">

          <div className="flex w-full flex-col  gap-6 rounded-2xl bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Total net earnings
              </label>
            </div>
            <p className="text-[34px] font-medium">$0</p>
          </div>
          <div className="flex w-full flex-col md:gap-6  rounded-2xl bg-white px-[22px] py-5 ">
            <div className="flex gap-2.5">
              <label className="text-lg font-medium text-[#767676]">
                Total tutoring hours
              </label>
            </div>
            <p className="text-[34px] font-medium">1.0 hrs</p>
          </div>
          <div className="flex w-full flex-col  gap-6 rounded-2xl bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Total students
              </label>
            </div>
            <p className="text-[34px] font-medium">1</p>
          </div>


          <div className="flex w-full flex-col gap-6 rounded-2xl bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Hours per student
              </label>
            </div>
            <p className="text-[34px] font-medium">0.5 hrs</p>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-2xl bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Total reviews
              </label>
            </div>
            <p className="text-[34px] font-medium ">0 </p>
          </div>
          <div className="flex w-full flex-col md:gap-6 rounded-2xl  bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Average review rating
              </label>
            </div>
            <p className="text-[34px] font-medium ">--</p>
          </div>
          <div className="flex w-full flex-col md:gap-6 rounded-2xl  bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Average Session rating
              </label>
            </div>
            <p className="text-[34px] font-medium ">--</p>
          </div>
          <div className="flex w-full flex-col md:gap-6 rounded-2xl  bg-white px-[22px] py-5 ">
            <div className="flex md:gap-2.5 ">
              <label className="font-medium text-[#767676] md:text-lg">
                Average Session rating
              </label>
            </div>
            <p className="text-[34px] font-medium ">1</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage
