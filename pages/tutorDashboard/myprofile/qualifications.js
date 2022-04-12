import React from 'react'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { Form, Formik, Field, FieldArray } from 'formik'
import { BackgroundImage } from '../../../components/Uploadphoto'
import { getLocalStorage, updateUser } from '../../../utils/cookies'
import { updateUserQualification } from '../../../utils/constants'
import Server from '../../../utils/Server'

const Qualifications = () => {
  const [background_img, set_background_img] = useState()
  const [user_data, set_user_data] = useState({})

  useEffect(() => {
    set_user_data(getLocalStorage('user'))
  }, [])

  const handleChange = async (acceptedFiles) => {
    let data = new FormData()
    if (acceptedFiles) {
      data.append('profile_pic', acceptedFiles, acceptedFiles.name)
      // const response = await Server.post(uploadUserBackgroundPic, data)
      // if (response.success) {
      set_background_img(response.data.file_name)
      // }
    }
  }

  const initialValues = {
    qualifications: user_data.qualifications
      ? user_data.qualifications
      : [
          {
            qualification_duration_to: '',
            qualification_duration_from: '',
            qualification_title: '',
            qualification_type: '',
          },
        ],
  }

  const onSubmit = async (values) => {
    const user_update = await Server.put(updateUserQualification, values)
    if (user_update.success) {
      updateUser({ ...values }, () => {
        Router.push('/tutorDashboard')
      })
    }
  }

  return (
    <div className=" h1wi h1wi bg-white sm:rounded-2xl lg:ml-[30px] lg:mt-[34px] lg:mb-[30px]">
      <h1 className=" p-5  text-3xl font-semibold text-[#3d3d3d]  xl:px-12  ">
        Qualifications
      </h1>
      <hr className="text-[#E2E2E2]  " />
      <div className="bg-[ #F2F2F2] px-5 pb-2 xl:px-12">
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              onSubmit(values)
            }}
            enableReinitialize
          >
            {({ values }) => {
              return (
                <Form>
                  <div className="xs:m-0 xs:mx-0 xs:p-0  sm:mx-auto">
                    <FieldArray name="qualifications">
                      {({ insert, remove, push }) => (
                        <>
                          {values.qualifications?.map(
                            (qualification, index) => (
                              <div
                                className="mt-9 grid grid-cols-12 gap-3 rounded-[15px] bg-[#F2F2F2] p-4 md:p-[26px] xl:gap-x-8"
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
                                    <option value="Experience">
                                      Experience
                                    </option>
                                    <option value="Certificate">
                                      Certificate
                                    </option>
                                    <option value="Bachelors">Bachelors</option>
                                    <option value="Degree">Degree</option>
                                  </Field>
                                </div>
                                <div className="order-2 col-span-12 md:order-none md:col-span-4">
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

                                <div className="order-6 col-span-1 mt-11 self-center justify-self-center md:order-none">
                                  <button
                                    type="button"
                                    onClick={
                                      index <= 0 ? null : () => remove(index)
                                    }
                                  >
                                    <RiDeleteBinLine className="text-xl text-[#7D7D7D]" />
                                  </button>
                                </div>
                                {/* <div className="order-2 col-span-11 md:order-none ">
                                <p className="mb-5 font-semibold xs:text-[13px] sm:text-[16px] ">
                                  Degree Issuing Institute
                                </p>
                                <Field
                                  type="text"
                                  name={`qualification.${index}.institute`}
                                  className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2 "
                                />
                              </div>
                              <div className="order-7 col-span-12  md:order-none ">
                                <div className="text-lg capitalize ">
                                  Upload Your Certificates To Increase The
                                  Credibility Of Your Profile(Optional)
                                </div>
                                <br />
                                <br />
                                <div className="flex items-center gap-2">
                                  <label className=" col-span-6 w-auto  cursor-pointer rounded-lg border   border-[#FC4D6D] bg-white px-3 py-1 text-lg font-medium capitalize text-[#FC4D6D]">
                                    upload a photo
                                    <input
                                      type="file"
                                      className="hidden"
                                      name="image"
                                    />
                                  </label>
                                  <div className="text-xs">
                                    <div className="">JPG or PNG format</div>
                                    <div>Maximum size - 20MB.</div>
                                  </div>
                                </div>
                              </div> */}
                              </div>
                            )
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              push({
                                qualification_duration_to: '',
                                qualification_duration_from: '',
                                qualification_title: '',
                                qualification_type: '',
                              })
                            }
                            className="order-7 flex gap-x-2 p-4 font-bold text-[#2294CD] md:order-none  "
                          >
                            <IoMdAddCircleOutline className="self-center text-[#2294CD]" />
                            Add Additional Qualification
                          </button>
                        </>
                      )}
                    </FieldArray>

                    <div className="my-9 w-full text-right">
                      <button className="w-full rounded-lg bg-[#FC4D6D] py-2.5 px-6 text-white lg:w-auto  ">
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              )
            }}
          </Formik>
        </>
      </div>
    </div>
  )
}

export default Qualifications
