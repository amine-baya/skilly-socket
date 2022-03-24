import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { IoMdClose } from 'react-icons/io'
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik'

const languageOptions = [
  { value: 'Tamil', label: 'Tamil' },
  { value: 'Gujrati', label: 'Gujrati' },
  { value: 'Marathi ', label: 'Marathi' },
]

function basicDetails() {
  const [languageData, setLanguageData] = useState([])
  const [addLanguageData, setAddLanguageData] = useState([])

  useEffect(() => {
    setLanguageData(languageOptions)
  }, [])
  const initialValues = {
    phNumbers: [''],
    qualification: [''],
    friends: [
      {
        name: '',
        email: '',
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
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          console.log('first', formik)
          return (
            <Form>
              <div className="container mx-auto p-4">
                <h1 className="text-3xl font-semibold">Welcome Yash Mehta</h1>
                <p>
                  Just <span className="font-semibold">2 minutes </span>
                  to a beautiful profile of yours, using the information you
                  provide below.
                </p>
              </div>
              <hr />
              <div className="container mx-auto p-4">
                <div className=" grid grid-cols-2  gap-4 md:gap-9 ">
                  <div className=" col-span-2 grid  grid-cols-1  gap-y-2   md:col-span-1  md:grid-cols-2">
                    <label className="self-center font-semibold ">
                      My Country Of Origin
                    </label>
                    <select className="rounded-[10px] border-2 border-[#C1C1C1] p-2">
                      <option>India</option>
                      <option>India</option>
                      <option>India</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div></div>
                  <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1 md:grid-cols-2">
                    <label className="self-center font-semibold">
                      I Natively Speak
                    </label>
                    <select className="rounded-[10px]  border-2 border-[#C1C1C1] p-2">
                      <option>Hindi</option>
                      <option>Hindi</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                  <div></div>

                  <div className=" col-span-2  grid grid-cols-1 gap-y-2   md:col-span-1  md:grid-cols-2">
                    <label className="self-center font-semibold">
                      My English Fluency
                    </label>
                    <select className="rounded-[10px]  border-2 border-[#C1C1C1] p-2">
                      <option>Expert</option>
                      <option>Expert</option>
                      <option>Expert</option>
                    </select>
                    <div></div>
                  </div>
                  <div></div>
                  <div className="col-span-2 grid   grid-cols-1 gap-y-2 md:col-span-1  md:grid-cols-2 ">
                    <label className="self-center font-semibold">
                      I am also fluent with..
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
                    <div className=" col-span-7 flex  h-11 justify-between self-center text-sm md:col-span-6">
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
                    <FieldArray name="phNumbers">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { phNumbers } = values
                        console.log('remove', remove)
                        return (
                          <>
                            {phNumbers.map((phNumber, index) => (
                              <div
                                key={index}
                                className=" mb-9 grid grid-cols-12 gap-y-9 gap-x-4 md:gap-9"
                              >
                                <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2 ">
                                  <label className="self-center font-semibold">
                                    I will like to teach..
                                  </label>
                                  <Field
                                    as="select"
                                    name={`phNumber.${index}.teach`}
                                    className="rounded-[10px]  border-2 border-[#C1C1C1] p-2"
                                  >
                                    <option>Math</option>
                                    <option>sfgsf</option>
                                    <option>sdfgsd</option>
                                  </Field>
                                </div>
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 md:col-span-5  md:grid-cols-2">
                                  <label className=" self-center font-semibold ">
                                    My fee per hour
                                  </label>

                                  <Field
                                    as="select"
                                    className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                    name={`phNumber.${index}.fee`}
                                  >
                                    <option>750</option>
                                    <option>514</option>
                                    <option>651</option>
                                  </Field>
                                </div>
                                <div className=" col-span-3 col-start-10 flex justify-between md:col-span-1 ">
                                  <button
                                    type="button"
                                    onClick={() => push('')}
                                  >
                                    <RiAddFill className="text-2xl" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    <RiDeleteBinLine className="text-xl" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </>
                        )
                      }}
                    </FieldArray>
                    {/* <FieldArray name="phNumbers">
                      {({ insert, remove, push }) => (
                        <div>
                          {formik.values?.friends?.length > 0 &&
                            formik.values.friends.map((phNumber, index) => (
                              <div className="mb-9 grid grid-cols-12 gap-y-9 gap-x-4 md:gap-9" key={index}>
                                <div className="grid-col-1 col-span-6  grid   gap-y-2  md:grid-cols-2 ">
                                  <label className="self-center font-semibold">
                                    I will like to teach..
                                  </label>
                                  <Field
                                    as="select"
                                    name={`phNumber.${index}.teach`}
                                    className="rounded-[10px]  border-2 border-[#C1C1C1] p-2"
                                  >
                                    <option>Math</option>
                                    <option>sfgsf</option>
                                    <option>sdfgsd</option>
                                  </Field>
                                </div>
                                <div className="col-span-6 grid grid-cols-1 gap-y-2 md:col-span-5  md:grid-cols-2">
                                  <label className=" self-center font-semibold ">
                                    My fee per hour
                                  </label>

                                  <Field
                                    as="select"
                                    className="rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                    name={`phNumber.${index}.fee`}
                                  >
                                    <option>750</option>
                                    <option>514</option>
                                    <option>651</option>
                                  </Field>
                                </div>
                                <div className="col">
                                  <button
                                    type="button"
                                    className=" col-span-3 col-start-10 flex justify-between md:col-span-1 "
                                    onClick={() => push({ fee: '', teach: '' })}
                                  >
                                    <RiAddFill className="text-2xl" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            <RiDeleteBinLine className="text-xl" />
                          </button>
                        </div>
                      )}
                    </FieldArray> */}
                  </div>
                </div>
                <FieldArray name="qualification">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps
                    const { values } = form
                    const { qualification } = values

                    return (
                      <>
                        {qualification.map((qualification, index) => (
                          <>
                            <div className="mt-9 grid grid-cols-12 gap-5 bg-[#F2F2F2] p-4 md:gap-x-8 md:p-[26px]">
                              <div
                                className="col-span-6 md:col-span-3"
                                key={index}
                              >
                                <p className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold ">
                                  Qualification Type
                                </p>
                                <Field
                                  as="select"
                                  name={`Qualification.${index}.Type`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                >
                                  <option>experience</option>
                                  <option>certificate</option>
                                  <option>degree</option>
                                </Field>
                              </div>
                              <div className="order-2 col-span-10 md:order-none md:col-span-5">
                                <p className="mb-5 font-semibold  ">
                                  Qualification Title
                                </p>
                                <Field
                                  type="text"
                                  name={`Qualification.${index}.title`}
                                  className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                />
                              </div>
                              <div className="col-span-6 md:col-span-3">
                                <p className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
                                  Qualification Duration
                                </p>
                                <div className="flex gap-1.5">
                                  <Field
                                    as="select"
                                    name={`Qualification.${index}.durationFrom`}
                                    className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                  >
                                    <option>From</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                  </Field>
                                  <Field
                                    as="select"
                                    name={`Qualification.${index}.durationTo`}
                                    className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                  >
                                    <option>To</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                  </Field>
                                </div>
                              </div>
                              <div className="order-last col-span-1 mt-11 self-center justify-self-center md:order-none">
                                <button
                                  type="button"
                                  onClick={index > 0 ? () => remove(index) : ''}
                                >
                                  <RiDeleteBinLine className="text-xl " />
                                </button>
                              </div>
                            </div>
                          </>
                        ))}
                        <button
                          type="button"
                          onClick={() => push('')}
                          className="mx-auto flex gap-x-2 p-4 font-bold text-[#2294CD] "
                        >
                          <IoMdAddCircleOutline className="self-center" />
                          Add Additional Qualification
                        </button>
                      </>
                    )
                  }}
                </FieldArray>

                <div className="my-9 text-right">
                  <button className="w-full rounded-lg bg-[#FC4D6D] py-2.5 px-4 text-white sm:w-auto ">
                    Save and Next
                  </button>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="friends">
              {({ insert, remove, push }) => (
                <div>
                  {values.friends?.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          <label htmlFor={`friends.${index}.name`}>Name</label>
                          <Field
                            name={`friends.${index}.name`}
                            placeholder="Jane Doe"
                            type="text"
                          />
                        </div>
                        <div className="col">
                          <label htmlFor={`friends.${index}.email`}>
                            Email
                          </label>
                          <Field
                            name={`friends.${index}.email`}
                            placeholder="jane@acme.com"
                            type="email"
                          />
                        </div>
                        <div className="col">
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => push({ name: '', email: '' })}
                  >
                    Add Friend
                  </button>
                </div>
              )}
            </FieldArray>
            <button type="submit">Invite</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default basicDetails
