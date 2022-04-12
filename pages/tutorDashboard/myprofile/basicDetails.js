import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { IoMdClose } from 'react-icons/io'
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik'
import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'
import { getLocalStorage, updateUser } from '../../../utils/cookies'
import { updateBasicDetails } from '../../../utils/constants'
import Server from '../../../utils/Server'

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
  const [user_data, set_user_data] = useState({})

  useEffect(() => {
    set_user_data(getLocalStorage('user'))
  }, [])

  const initialValues = {
    country: user_data.country ? user_data.country : '',
    native_language: user_data.native_language ? user_data.native_language : '',
    english_fluency: user_data.english_fluency ? user_data.english_fluency : '',
    other_languages:
      user_data.other_languages && user_data.other_languages[0]
        ? user_data.other_languages
        : [],
    subjects_and_pricing:
      user_data.subjects_and_pricing && user_data.subjects_and_pricing[0]
        ? user_data.subjects_and_pricing
        : [
            {
              subject: '',
              price: '',
              currency_format: '',
            },
          ],
    qualifications:
      user_data.qualifications && user_data.qualifications[0]
        ? user_data.qualifications
        : [
            {
              qualification_type: '',
              qualification_title: '',
              qualification_duration_from: '',
              qualification_duration_to: '',
            },
          ],
  }
  const onSubmit = async (data) => {
    const user_update = await Server.put(updateBasicDetails, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('/tutorDashboard/myprofile/timeAvailability')
      })
    }
  }

  return (
    <>
      <div className=" md-[1px] h1wi ml-[1px] mb-[1px] bg-white  lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
        <div className="  p-5  xl:px-12">
          <h1 className="text-3xl font-semibold">
            Welcome {user_data.first_name ? user_data.first_name : ''}
          </h1>
          <p>
            Just <span className="font-semibold">2 minutes </span>
            to a beautiful profile of yours, using the information you provide
            below.
          </p>
        </div>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize
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
                      <Field
                        as="select"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2"
                        name="country"
                        id="country"
                        required
                      >
                        <option value="">Select </option>
                        <option value="America">America </option>
                        <option value="Pakistan">Pakistan </option>
                        <option value="India">India </option>
                      </Field>
                    </div>
                    <div></div>
                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1 md:grid-cols-2">
                      <label className="self-center font-semibold">
                        I Natively Speak
                      </label>
                      <Field
                        as="select"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2"
                        name="native_language"
                        id="native_language"
                        required
                      >
                        <option value="">Select </option>
                        <option value="Hindi">Hindi </option>
                        <option value="English">English </option>
                        <option value="Marathi">Marathi </option>
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
                        name="english_fluency"
                        id="english_fluency"
                        required
                      >
                        <option value="">Select </option>
                        <option value="Beginner">Beginner </option>
                        <option value="Intermidiate">Intermidiate </option>
                        <option value="Expert">Expert </option>
                      </Field>
                      <div></div>
                    </div>
                    <div></div>
                    <div className="col-span-2 grid   grid-cols-1 gap-y-2 md:col-span-1  md:grid-cols-2 ">
                      <label className="self-center font-semibold">
                        I Am Also Fluent With..
                      </label>
                      <Field
                        as="select"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2 "
                        // {...formik.getFieldProps("skill")}
                        id="other_languages"
                        name="other_languages"
                        multiple
                      >
                        <option value="">Select </option>
                        <option value="Hindi">Hindi </option>
                        <option value="Marathi">Marathi </option>
                        <option value="Gujarati">Gujarati </option>
                      </Field>
                    </div>
                    <div className=" col-span-2  ">
                      <FieldArray name="subjects_and_pricing">
                        {({ insert, remove, push }) => (
                          <>
                            {values.subjects_and_pricing?.map(
                              (subjects_and_pricing, index) => (
                                <div
                                  className="mb-9 grid grid-cols-12 gap-y-9  gap-x-4  md:gap-6"
                                  key={index}
                                >
                                  <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2">
                                    <label
                                      className="self-center font-semibold"
                                      htmlFor={`subjects_and_pricing.${index}.subject`}
                                    >
                                      {' '}
                                      I Will Like To Teach..
                                    </label>
                                    <Field
                                      as="select"
                                      name={`subjects_and_pricing.${index}.subject`}
                                      id={`subjects_and_pricing.${index}.subject`}
                                      placeholder="Jane Doe"
                                      className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                    >
                                      <option value="">Select</option>
                                      <option value="Math">Math</option>
                                      <option value="English">English</option>
                                      <option value="Coding">Coding</option>
                                    </Field>
                                  </div>
                                  <div className="col-span-6 grid grid-cols-1 gap-y-2 md:col-span-5  md:grid-cols-2">
                                    <label
                                      className="self-center font-semibold"
                                      htmlFor={`subjects_and_pricing.${index}.price`}
                                    >
                                      My Price Per Hour
                                    </label>

                                    <div className="relative mt-1 h-full rounded-[10px] border-2 border-[#C1C1C1] p-2 shadow-sm">
                                      <Field
                                        type="number"
                                        name={`subjects_and_pricing.${index}.price`}
                                        id={`subjects_and_pricing.${index}.price`}
                                        className="block h-full w-full rounded-md border-gray-300  focus:outline-none"
                                        placeholder="000  "
                                      />
                                      <div className="absolute inset-y-0 right-0 flex items-center">
                                        <label
                                          htmlFor="currency_format"
                                          className="sr-only"
                                        >
                                          Currency
                                        </label>
                                        <Field
                                          as="select"
                                          id={`subjects_and_pricing.${index}.currency_format`}
                                          name={`subjects_and_pricing.${index}.currency_format`}
                                          className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-3 font-bold text-gray-500  sm:text-sm"
                                        >
                                          <option value="">Select</option>
                                          <option value="USD">USD</option>
                                          <option value="CAD">CAD</option>
                                          <option value="EUR">EUR</option>
                                          <option value="INR">INR</option>
                                        </Field>
                                      </div>
                                    </div>
                                  </div>

                                  <div className=" col-span-3 col-start-10 flex justify-between md:col-span-1 lg:gap-3 xl:gap-8 ">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        push({
                                          subject: '',
                                          price: '',
                                          currency_format: '',
                                        })
                                      }
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
                              )
                            )}
                          </>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                  <FieldArray name="qualifications">
                    {({ insert, remove, push }) => (
                      <>
                        {values.qualifications?.map((qualifications, index) => (
                          <div
                            className="mt-9 grid grid-cols-12 gap-3 bg-[#F2F2F2] p-4 md:p-[26px] xl:gap-x-8"
                            key={index}
                          >
                            <div className="col-span-5 md:col-span-3">
                              <p
                                className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold "
                                name={`qualifications.${index}.qualification_type`}
                              >
                                Qualification Type
                              </p>
                              <Field
                                as="select"
                                name={`qualifications.${index}.qualification_type`}
                                className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                              >
                                <option value="">Select</option>
                                <option value="Experience">Experience</option>
                                <option value="Certificate">Certificate</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Degree">Degree</option>
                              </Field>
                            </div>
                            <div className="order-2 col-span-10 md:order-none md:col-span-5">
                              <p
                                className="mb-5 font-semibold  "
                                name={`qualifications.${index}.title`}
                              >
                                Qualification Title
                              </p>
                              <Field
                                type="text"
                                id={`qualifications.${index}.qualification_title`}
                                name={`qualifications.${index}.qualification_title`}
                                className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                              />
                            </div>
                            <div className="col-span-7 md:col-span-3">
                              <p className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                                Qualification Duration
                              </p>
                              <div className="flex gap-1.5">
                                <Field
                                  id={`qualifications.${index}.qualification_duration_from`}
                                  name={`qualifications.${index}.qualification_duration_from`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                ></Field>
                                <Field
                                  id={`qualifications.${index}.qualification_duration_to`}
                                  name={`qualifications.${index}.qualification_duration_to`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                ></Field>
                              </div>
                            </div>
                            <div className="order-last col-span-1 mt-11 self-center justify-self-center md:order-none">
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
                        <button
                          type="button"
                          onClick={() =>
                            push({
                              durationTo: '',
                              durationFrom: '',
                              title: '',
                              Type: '',
                            })
                          }
                          className="mx-auto flex gap-x-2 p-4 font-bold text-[#2294CD]  "
                        >
                          <IoMdAddCircleOutline className="self-center text-[#2294CD]" />
                          Add Additional Qualification
                        </button>
                      </>
                    )}
                  </FieldArray>

                  <div className="my-12 text-right">
                    <button className="w-full rounded-lg bg-[#FC4D6D] py-2.5 px-4 text-white sm:w-auto ">
                      Save and Next
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
