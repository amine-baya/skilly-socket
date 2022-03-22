import React, { useState } from 'react'
import FormikControl from './FormikControl'
import { Field, FieldArray } from 'formik'
import { WiDayHaze } from 'react-icons/wi'
import { BsSun, BsCloudMoon } from 'react-icons/bs'
import nightIcon from '../../../public/Images/nightIcon.png'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import Image from 'next/image'

function TimeAvailabilityCard({ weekName, name }) {
  const [indexValue, setIndexValue] = useState('')
  return (
    <>
      <div className="grid grid-cols-2 gap-10 bg-[#F2F2F2]  p-6">
        {/* <div className="col-span-2 flex md:flex-row flex-col md:justify-between"> */}
        <p className="col-span-2 text-lg font-medium md:col-span-1">
          {weekName}
        </p>
        <div className="order-2 col-span-2 flex justify-between gap-x-5 md:order-none md:col-span-1 md:justify-end">
          <p className="self-center font-medium">Copy Below Timings For</p>

          <select className=" w-auto rounded-[10px] border border-[#C1C1C1] px-4  py-1">
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
        {/* </div> */}

        <FieldArray name={name} className="col-span-2">
          {(fieldArrayProps) => {
            const { push, remove, form } = fieldArrayProps
            const { values } = form
            const cardName = values[name]

            return (
              <>
                {cardName.map((timeAvailable, index) => (
                  <div>
                    {index === 0 ? (
                      <WiDayHaze className="text-3xl text-[#7D7D7D]" />
                    ) : index === 1 ? (
                      <BsSun className="mb-1 text-2xl text-[#7D7D7D]" />
                    ) : index === 2 ? (
                      <BsCloudMoon className="mb-1 text-2xl text-[#7D7D7D]" />
                    ) : (
                      <div className="h-7 w-7">
                        <Image src={nightIcon} alt="" />
                      </div>
                    )}
               

                    <div className="flex flex-col gap-4 md:flex-row">
                      <div className=" w-full">
                        <Field
                          as="select"
                          name={`${cardName}.${index}.from`}
                          className=" w-full rounded-[10px] border border-[#C1C1C1] p-3 "
                        >
                          <option>7:00 AM </option>
                          <option>7:30 AM </option>
                          <option>8:00 AM </option>
                          <option>8:30 AM </option>
                          <option>9:00 AM </option>
                          <option>9:30 AM </option>
                        </Field>
                      </div>
                      <label className="my-auto font-bold">To</label>
                      <div className=" w-full">
                        <Field
                          as="select"
                          name={`${cardName}.${index}.to`}
                          className=" w-full rounded-[10px] border  border-[#C1C1C1] p-3 "
                        >
                          <option>7:00 AM </option>
                          <option>7:30 AM </option>
                          <option>8:00 AM </option>
                          <option>8:30 AM </option>
                          <option>9:00 AM </option>
                          <option>9:30 AM </option>
                        </Field>
                      </div>
                      <button type="button">
                        <RiDeleteBinLine
                          className="text-xl"
                          onClick={index > 0 ? () => remove(index) : ''}
                        />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={
                    // indexValue<=2 ?
                    () => push('')
                    //  : null
                  }
                  className="order-4 col-span-2 flex gap-x-2 font-bold  text-[#2294CD] md:order-none md:col-span-1 md:mx-auto "
                >
                  <IoMdAddCircleOutline className="my-auto text-xl" />
                  <p className="my-auto">Add Additional Time Slot</p>
                </button>
              </>
            )
          }}
        </FieldArray>
      </div>
    </>
  )
}

export default TimeAvailabilityCard
