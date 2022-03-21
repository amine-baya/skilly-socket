import React from 'react'
import { WiDayHaze } from 'react-icons/wi'
import { BsSun } from 'react-icons/bs'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'

function timeAvailability() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold">Availability</h1>
      </div>
      <hr />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold">Set Your Timezone</h1>
        <p className="my-4">
          A Correct Timezone Is Essential To Coordinate Sessions With
          International Students
        </p>

        <p className="mt-9 mb-6 font-semibold"> Choose Your Timezone </p>

        <select className="w-7/12 rounded-[10px] border border-[#C1C1C1] px-5 py-3">
          <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
          <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
          <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
        </select>

        <h1 className="mt-12 text-2xl font-semibold">Set Your Availability</h1>
        <p className="my-4">
          availability shows your potential working hours.
          <br />
          students can book sessions at these time
        </p>

        <div className="grid grid-cols-2 gap-10 bg-[#F2F2F2]  p-6">
          <div className="col-span-2 flex justify-between">
            <p className="text-lg font-medium">Monday</p>
            <div className="flex justify-end gap-x-5">
              <p className="self-center font-medium">Copy Below Timings For</p>

              <select className=" rounded-[10px] border border-[#C1C1C1] px-4 py-1">
                <option className="hidden " disabled selected>
                  Select Days
                </option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
            </div>
          </div>

          <div>
            <WiDayHaze className="text-3xl" />
            <div className="flex gap-4">
              <div className=' w-full'>
                <select className=" rounded-[10px] border border-[#C1C1C1] p-3 w-full ">
                  <option>7:00 AM </option>
                  <option>7:30 AM </option>
                  <option>8:00 AM </option>
                  <option>8:30 AM </option>
                  <option>9:00 AM </option>
                  <option>9:30 AM </option>
                </select>
              </div>
              <label className="my-auto font-bold">To</label>
              <div className=' w-full'>
                <select className=" rounded-[10px] border border-[#C1C1C1]  p-3 w-full ">
                  <option>7:00 AM </option>
                  <option>7:30 AM </option>
                  <option>8:00 AM </option>
                  <option>8:30 AM </option>
                  <option>9:00 AM </option>
                  <option>9:30 AM </option>
                </select>
              </div>
              <button type='button'><RiDeleteBinLine className="text-xl" /></button>
            </div>
          </div>
          <div>
            <BsSun className="text-2xl mb-1" />
            <div className="flex gap-4">
              <div className=' w-full'>
                <select className=" rounded-[10px] border border-[#C1C1C1] p-3 w-full ">
                  <option>7:00 AM </option>
                  <option>7:30 AM </option>
                  <option>8:00 AM </option>
                  <option>8:30 AM </option>
                  <option>9:00 AM </option>
                  <option>9:30 AM </option>
                </select>
              </div>
              <label className="my-auto font-bold">To</label>
              <div className=' w-full'>
                <select className=" rounded-[10px] border border-[#C1C1C1]  p-3 w-full ">
                  <option>7:00 AM </option>
                  <option>7:30 AM </option>
                  <option>8:00 AM </option>
                  <option>8:30 AM </option>
                  <option>9:00 AM </option>
                  <option>9:30 AM </option>
                </select>
              </div>
              <button type='button'><RiDeleteBinLine className="text-xl" /></button>
            </div>
            <div>
                <button type='button'  className="mx-auto flex gap-x-2 p-4 font-bold text-[#2294CD] "> 
                <IoMdAddCircleOutline className="self-center" />
                Add Additional Time Slot</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default timeAvailability
