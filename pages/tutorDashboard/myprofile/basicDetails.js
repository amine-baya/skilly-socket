import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { IoMdClose } from 'react-icons/io'
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik'
import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'
import { getLocalStorage, updateUser } from '../../../utils/cookies'
import {
  updateBasicDetails,
  getTutorProfile,
  LANGUAGES,
  LanguageLevel,
  countryList,
} from '../../../utils/constants'
import Server from '../../../utils/Server'

const iconSelect = countryList.slice()

const languageOptions = LANGUAGES.slice()

function BasicDetails() {
  const [user_data, set_user_data] = useState({})

  const [languageData, setLanguageData] = useState([])
  const [nativeLanguage, setNativeLanguage] = useState('')
  const [englishFluency, setEnglishFluency] = useState('')
  const [addLanguageData, setAddLanguageData] = useState([])
  const [countryData, setCountryData] = useState('') // continue here
  const [current, setCurrent] = useState(0)
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    set_user_data(getLocalStorage('user'))
    setLanguageData(languageOptions)
    setNativeLanguage(user_data.native_language)
    setEnglishFluency(user_data.english_fluency)
    setCountryData(user_data.country)
  }, [])

  useEffect(() => {
    if (user_data && user_data.other_languages) {
      setAddLanguageData(user_data.other_languages)
      const newInput = languageData.filter(
        (item) => !addLanguageData.includes(item.name)
      )
      setLanguageData(newInput)
    }

    if (user_data.country) {
      let _tmp = countryList.findIndex((it) => it.name == user_data.country)
      setCurrent(_tmp)
    }
  }, [user_data])

  useEffect(() => {
    setFlag(true)
  }, [current])

  // const initialValues = {
  //   Qualification: [
  //     {
  //       durationTo: '',
  //       durationFrom: '',
  //       title: '',
  //       Type: '',
  //     },
  //   ],
  //   teachs: [
  //     {
  //       fee: '',
  //       teach: '',
  //       Currency: '',
  //     },
  //   ],
  // }

  const languageDataSelect = (value) => {
    setAddLanguageData([...addLanguageData, value])
    const newInput = languageData.filter((item) => item.name !== value)
    setLanguageData(newInput)
  }

  const handleClose = (item, index) => {
    const newInput = [...addLanguageData]
    setLanguageData([...languageData, { label: item, value: item }])
    newInput.splice(index, 1)
    setAddLanguageData(newInput)
  }

  console.log('user data - ', user_data)

  const initialValues = {
    country: user_data.country ? user_data.country : '',
    native_language: user_data.native_language ? user_data.native_language : '',
    english_fluency: user_data.english_fluency ? user_data.english_fluency : '',
    other_languages:
      user_data.other_languages && user_data.other_languages[0]
        ? user_data.other_languages
        : [],
    subjects_and_pricing:
      user_data.subjects_and_pricing &&
      user_data.subjects_and_pricing.length > 0
        ? user_data.subjects_and_pricing
        : [
            {
              subject: '-',
              price: '0',
              currency_format: 'USD',
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
    teachs: [
      {
        fee: '',
        teach: '',
        Currency: 'USD',
      },
    ],
  }

  const onSubmit = async (data) => {
    console.log(data)
    console.log(user_data)
    data.teachs = undefined
    // return
    // data['qualifications'] = initialValues.qualifications
    if (!data.subjects_and_pricing) {
      data.subjects_and_pricing = initialValues.subjects_and_pricing
    }
    if (!data.native_language) {
      data.native_language = user_data.native_language
    }
    if (!data.english_fluency) {
      data.english_fluency = user_data.english_fluency
    }
    if (!data.other_languages) {
      data.other_languages = user_data.other_languages
    }
    if (!data.country) {
      data.country = user_data.country
    }

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
            Welcome {user_data.first_name + ' ' + user_data.last_name}{' '}
          </h1>
          <p>
            Just <span className="font-semibold">2 minutes </span>
            to a beautiful profile of yours, using the information you provide
            below.
          </p>
        </div>
        <hr />
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500))
            let _values = values
            _values.country = countryData
            _values.native_language = nativeLanguage
            _values.english_fluency = englishFluency
            _values.other_languages = addLanguageData

            console.log(JSON.stringify(values, null, 2))
            onSubmit(_values)
            // alert(JSON.stringify(values, null, 2))
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
                      {flag && (
                        <SelectWithIcons
                          people={iconSelect}
                          current={current}
                          changestyle="border-2 border-[#C1C1C1] rounded-[10px] "
                          flag="left"
                          update={setCountryData}
                        />
                      )}
                    </div>
                    <div></div>
                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1 md:grid-cols-2">
                      <label className="self-center font-semibold">
                        I Natively Speak
                      </label>
                      <select
                        name="language"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2 "
                        // {...formik.getFieldProps("skill")}
                        id="language"
                        onChange={(e) => {
                          // setFormskillValue()
                          if (e.target.value !== 'Option') {
                            setNativeLanguage(e.target.value)
                          }
                          // formik.setFieldValue("skill", e.target.value);
                        }}
                      >
                        <option>Option</option>
                        {languageData?.length &&
                          languageData?.map((item, index) => {
                            if (
                              user_data &&
                              user_data.native_language &&
                              user_data.native_language === item.name
                            ) {
                              return (
                                <option
                                  key={index}
                                  value={item.name}
                                  selected="selected"
                                >
                                  {item.name} | {item.nativeName}
                                </option>
                              )
                            }
                            return (
                              <option key={index} value={item.name}>
                                {item.name} | {item.nativeName}
                              </option>
                            )
                          })}
                      </select>
                    </div>
                    <div></div>
                    {JSON.stringify(setLanguageData)}

                    <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1  md:grid-cols-2">
                      <label className="self-center font-semibold">
                        My English Fluency
                      </label>
                      <select
                        name="language"
                        className="rounded-[10px]  border-2 border-[#C1C1C1] p-2 "
                        // {...formik.getFieldProps("skill")}
                        id="language"
                        onChange={(e) => {
                          // setFormskillValue()
                          if (e.target.value !== 'Option') {
                            setEnglishFluency(e.target.value)
                          }
                          // formik.setFieldValue("skill", e.target.value);
                        }}
                      >
                        <option>Option</option>

                        {LanguageLevel.map((item, index) => {
                          if (
                            user_data &&
                            user_data.english_fluency &&
                            user_data.english_fluency === item
                          ) {
                            return (
                              <option
                                key={index}
                                value={item}
                                selected="selected"
                              >
                                {item}
                              </option>
                            )
                          } else {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            )
                          }
                        })}
                        {/* <option value={LanguageLevel[1]}>
                          {LanguageLevel[1]}
                        </option>
                        <option value={LanguageLevel[2]}>
                          {LanguageLevel[2]}
                        </option>
                        <option value={LanguageLevel[3]}>
                          {LanguageLevel[3]}
                        </option> */}
                      </select>
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
                          if (e.target.value !== 'Option') {
                            languageDataSelect(e.target.value)
                          }
                          // formik.setFieldValue("skill", e.target.value);
                        }}
                      >
                        <option>Option</option>
                        {languageData?.length &&
                          languageData?.map((item, index) => {
                            return (
                              <option key={index} value={item.name}>
                                {item.name} | {item.nativeName}
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
                      {/* {JSON.stringify(values.subjects_and_pricing)} */}
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
                                      placeholder="Jane Doe"
                                      className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                    >
                                      <option>Option</option>
                                      <option value="Music">Music</option>
                                      <option value="Programming">
                                        Programming
                                      </option>
                                      <option value="Gardening">
                                        Gardening
                                      </option>
                                      <option value="Yoga">Yoga</option>
                                      <option value="Hindi">Hindi</option>
                                    </Field>
                                  </div>
                                  <div className="col-span-6 grid grid-cols-1 gap-y-2 md:col-span-5  md:grid-cols-2">
                                    <label
                                      className="self-center font-semibold"
                                      htmlFor={`subjects_and_pricing.${index}.price`}
                                    >
                                      My Fee Per Hour
                                    </label>

                                    <div className="relative mt-1 h-full rounded-[10px] border-2 border-[#C1C1C1] p-2 shadow-sm">
                                      <Field
                                        type="text"
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
                                        <select
                                          id={`subjects_and_pricing.${index}.currency_format`}
                                          name={`subjects_and_pricing.${index}.currency_format`}
                                          className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-3 font-bold text-gray-500  sm:text-sm"
                                        >
                                          <option value="USD">USD</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  <div className=" col-span-3 col-start-10 flex justify-between md:col-span-1 lg:gap-3 xl:gap-8 ">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        push({
                                          subject: '-',
                                          price: '0',
                                          currency_format: 'USD',
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
                                <option>Experience</option>
                                <option>Certificate</option>
                                <option>Degree</option>
                              </Field>
                            </div>
                            <div className="order-2 col-span-10 md:order-none md:col-span-4">
                              <p
                                className="mb-5 font-semibold  "
                                name={`qualifications.${index}.qualification_title`}
                              >
                                Qualification Title
                              </p>
                              <Field
                                type="text"
                                name={`qualifications.${index}.qualification_title`}
                                className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                              />
                            </div>
                            <div className="col-span-7 md:col-span-4">
                              <p className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                                Qualification Duration
                              </p>
                              <div className="flex gap-1.5">
                                <Field
                                  name={`qualifications.${index}.qualification_duration_from`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                  type="month"
                                  value={
                                    values.qualifications[index]
                                      .qualification_duration_from
                                  }
                                ></Field>
                                <Field
                                  name={`qualifications.${index}.qualification_duration_to`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                  type="month"
                                  value={
                                    values.qualifications[index]
                                      .qualification_duration_to
                                  }
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
                              qualification_type: '',
                              qualification_title: '',
                              qualification_duration_from: '',
                              qualification_duration_to: '',
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
