import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { IoMdClose } from 'react-icons/io'
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik'
import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'
import { getLocalStorage, updateUser } from '../../../utils/cookies'
import {
  studentUpdateBasicDetails,
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

  const [nativeLanguage, setNativeLanguage] = useState('')
  const [englishFluency, setEnglishFluency] = useState('')
  const [languageData, setLanguageData] = useState([])
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
  const initialValues = {
    country: user_data.country ? user_data.country : '',
    native_language: user_data.native_language ? user_data.native_language : '',
    english_fluency: user_data.english_fluency ? user_data.english_fluency : '',

    interested_skills:
      user_data.interested_skills && user_data.interested_skills
        ? user_data.interested_skills
        : [
          {
            subject: '-',
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
    // data['interested_skills'] = initialValues.interested_skills
    console.log(data)
    data.teachs = undefined
    // return
    data['qualifications'] = user_data.qualifications
    if (!data.interested_skills) {
      data.interested_skills = initialValues.interested_skills
    }
    if (!data.native_language) {
      data.native_language = user_data.native_language
    }
    if (!data.english_fluency) {
      data.english_fluency = user_data.english_fluency
    }
    if (!data.country) {
      data.country = user_data.country
    }

    const user_update = await Server.put(studentUpdateBasicDetails, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('/tutorDashboard/myprofile/timeAvailability')
      })
    }
  }

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

  return (
    <>
      <div className=" md-[1px] ml-[1px] mb-[1px] bg-white  lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
        <div className="pl-[41px] pt-[20px] pb-[15px] font-poppins text-2xl font-semibold text-[#5E5252]">
          <h1>Basic Details</h1>
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

                    <div className=" col-span-2  ">
                      <FieldArray name="interested_skills">
                        {({ insert, remove, push }) => (
                          <>
                            {values.interested_skills?.map(
                              (interested_skills, index) => (
                                <div
                                  className="mb-9 grid grid-cols-12 gap-y-9  gap-x-4  md:gap-6"
                                  key={index}
                                >
                                  <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2">
                                    <label
                                      className="self-center font-semibold"
                                      htmlFor={`interested_skills.${index}.subject`}
                                    >
                                      {' '}
                                      I Will Like To Learn..
                                    </label>
                                    <Field
                                      as="select"
                                      name={`interested_skills.${index}.subject`}
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

                                  <div className=" col-span-3 col-start-10 flex justify-between md:col-span-1 lg:gap-3 xl:gap-8 ">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        push({
                                          subject: '-',
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
