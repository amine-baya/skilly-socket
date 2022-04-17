import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { IoMdClose } from 'react-icons/io'
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik'
import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'

const languageOptions = [
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Gujrati', label: 'Gujrati' },
  { value: 'Marathi ', label: 'Marathi' },
]
const iconSelect = [
  {
    id: 1,
    name: 'India',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
  },
  {
    id: 2,
    name: 'America',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
]

function BasicDetails() {
  const [languageData, setLanguageData] = useState([])
  const [addLanguageData, setAddLanguageData] = useState([])

  useEffect(() => {
    setLanguageData(languageOptions)
  }, [])
  const initialValues = {
    Qualification: [
      {
        durationTo: '',
        durationFrom: '',
        title: '',
        Type: '',
      },
    ],
    teachs: [
      {
        fee: '',
        teach: '',
        Currency: '',
      },
    ],
  }
  const onSubmit = () => {}

  const languageDataSelect = (value) => {
    setAddLanguageData([...addLanguageData, value])
    const newInput = languageData.filter((item) => item.value !== value)
    setLanguageData(newInput)
  }

  const handleClose = (item, index) => {
    const newInput = [...addLanguageData]
    setLanguageData([...languageData, { label: item, value: item }])
    newInput.splice(index, 1)
    setAddLanguageData(newInput)
  }

  return (
    <>
      <div className=" md-[1px] h1wi ml-[1px] mb-[1px] bg-white  lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
        <div className="pl-[41px] pt-[20px] pb-[15px] font-poppins text-2xl font-semibold text-[#5E5252]">
          <h1>Basic Details</h1>
        </div>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
          }}
        >
          {({ values }) => {
            return (
              <Form className="my-10 px-5  xl:px-12">
                <div className=" mx-auto  sm:p-4">
                  <div className=" grid grid-cols-2  gap-4 md:gap-9 ">
                    <div className=" col-span-2 grid  grid-cols-1  gap-y-2   md:col-span-1  md:grid-cols-2">
                      <label className="self-center font-semibold ">
                        My Country Of Origin
                      </label>
                      <SelectWithIcons
                        people={iconSelect}
                        current={0}
                        changestyle="border-2 border-[#C1C1C1] rounded-[10px] "
                        flag="left"
                        uupdate={() => {
                          return 0
                        }}
                      />
                    </div>
                    <div></div>
                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1 md:grid-cols-2">
                      <label className="self-center font-semibold">
                        I Natively Speak
                      </label>
                      <Field
                        as="select"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2"
                      >
                        <option>Hindi</option>
                        <option>Hindi</option>
                        <option>Hindi</option>
                      </Field>
                    </div>
                    <div></div>

                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1  md:grid-cols-2">
                      <label className="self-center font-semibold">
                        My English Fluency
                      </label>
                      <Field
                        as="select"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2"
                      >
                        <option>Expert</option>
                        <option>Expert</option>
                        <option>Expert</option>
                      </Field>
                      <div></div>
                    </div>
                    <div></div>
                    <div className="col-span-2 grid   grid-cols-1 gap-y-2 md:col-span-1  md:grid-cols-2 ">
                      <label className="self-center font-semibold">
                        I Am Also Fluent With..
                      </label>
                      <select
                        name="language"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2 "
                        // {...formik.getFieldProps("skill")}
                        id="language"
                        onChange={(e) => {
                          // setFormskillValue()
                          languageDataSelect(e.target.value)
                          // formik.setFieldValue("skill", e.target.value);
                        }}
                      >
                        <option>Option</option>
                        {languageData?.length &&
                          languageData?.map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.label}
                              </option>
                            )
                          })}
                      </select>
                    </div>
                    <div className=" col-span-2 grid  md:col-span-1 md:grid-cols-7 ">
                      <div className=" col-span-7 flex  h-11 gap-x-5 self-center text-sm md:col-span-6">
                        {addLanguageData?.map((item, key) => {
                          return (
                            <div type="reset" key={key}>
                              <span className="flex h-[27px] place-items-center gap-6 rounded bg-[#F6F6F6] px-2.5">
                                {item}
                                <IoMdClose
                                  onClick={(e) => handleClose(item, key)}
                                  className=" my-auto h-auto cursor-pointer stroke-[38px]"
                                />
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className=" col-span-2  ">
                      <FieldArray name="teachs">
                        {({ insert, remove, push }) => (
                          <>
                            {values.teachs?.map((teachs, index) => (
                              <div
                                className=" grid grid-cols-12 gap-y-9  gap-x-4  md:gap-6"
                                key={index}
                              >
                                <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2">
                                  <label
                                    className="self-center font-semibold"
                                    htmlFor={`teachs.${index}.teach`}
                                  >
                                    {' '}
                                    I Will Like To Learn..
                                  </label>
                                  <Field
                                    as="select"
                                    name={`teachs.${index}.teach`}
                                    placeholder="Jane Doe"
                                    className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                  >
                                    <option>Math</option>
                                    <option>sfgsf</option>
                                    <option>sdfgsd</option>
                                  </Field>
                                </div>

                                <div className=" col-span-3 col-start-10 flex justify-between md:col-span-1 lg:gap-3 xl:gap-8 ">
                                  <button
                                    type="button"
                                    onClick={() => push({ fee: '', teach: '' })}
                                  >
                                    <RiAddFill className="text-2xl text-[#7D7D7D]" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={
                                      index <= 0 ? null : () => remove(index)
                                    }
                                  >
                                    <RiDeleteBinLine className="text-xl text-[#7D7D7D]" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </div>
                    <div className=" col-span-2  ">
                      <FieldArray name="teachs">
                        {({ insert, remove, push }) => (
                          <>
                            {values.teachs?.map((teachs, index) => (
                              <div
                                className=" grid grid-cols-12 gap-y-9  gap-x-4  md:gap-6"
                                key={index}
                              >
                                <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2">
                                  <label
                                    className="self-center font-semibold"
                                    htmlFor={`teachs.${index}.teach`}
                                  >
                                    {' '}
                                    I Will Like To Teach..
                                  </label>
                                  <Field
                                    as="select"
                                    name={`teachs.${index}.teach`}
                                    placeholder="Jane Doe"
                                    className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                  >
                                    <option>Math</option>
                                    <option>sfgsf</option>
                                    <option>sdfgsd</option>
                                  </Field>
                                </div>

                                <div className=" col-span-3 col-start-10 flex justify-between md:col-span-1 lg:gap-3 xl:gap-8 ">
                                  <button
                                    type="button"
                                    onClick={() => push({ fee: '', teach: '' })}
                                  >
                                    <RiAddFill className="text-2xl text-[#7D7D7D]" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={
                                      index <= 0 ? null : () => remove(index)
                                    }
                                  >
                                    <RiDeleteBinLine className="text-xl text-[#7D7D7D]" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                      </FieldArray>
                    </div>
                  </div>

                  <div className="my-12 text-left">
                    <button className="w-full rounded-lg bg-[#FC4D6D] py-2.5 px-4 text-white sm:w-auto ">
                      Save Settings
                    </button>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </>
  )
}

export default BasicDetails
