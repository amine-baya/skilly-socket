import React from 'react'
import { useEffect, useState } from 'react'
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri'
import { IoMdAddCircleOutline } from 'react-icons/io'

import { Form, Formik, Field, FieldArray } from 'formik'
import { BackgroundImage } from '../../../components/Uploadphoto'

const Qualifications = () => {
  const [background_img, set_background_img] = useState()

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
    Qualification: [
      {
        durationTo: '',
        durationFrom: '',
        title: '',
        Type: '',
        institute: '',
      },
    ],
  }
  const onSubmit = (e) => {
    console.log('e', e)
  }

  return (
    <div className=" h1wi bg-white sm:rounded-2xl lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] h1wi">
      <h1 className=" p-5  text-3xl font-semibold text-[#3d3d3d]  xl:px-12  ">
        Qualifications
      </h1>
      <hr className="text-[#E2E2E2]  " />
      <div className="bg-[ #F2F2F2] px-5 xl:px-12 pb-2">
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500))
              alert(JSON.stringify(values, null, 2))
            }}
          >
            {({ values }) => {
              return (
                <Form>
                  <div className="xs:m-0 xs:mx-0 xs:p-0  sm:mx-auto">
                    <FieldArray name="Qualification">
                      {({ insert, remove, push }) => (
                        <>
                          {values.Qualification?.map((Qualification, index) => (
                            <div
                              className="mt-9 grid grid-cols-12 gap-3 bg-[#F2F2F2] p-4 md:p-[26px] xl:gap-x-8"
                              key={index}
                            >
                              <div className="col-span-5 md:col-span-3">
                                <p
                                  className="mb-5 overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold "
                                  name={`Qualification.${index}.Type`}
                                >
                                  Qualification Type
                                </p>
                                <Field
                                  as="select"
                                  name={`Qualification.${index}.Type`}
                                  className="w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                >
                                  <option>Experience</option>
                                  <option>Certificate</option>
                                  <option>Degree</option>
                                </Field>
                              </div>
                              <div className="order-2 col-span-12 md:order-none md:col-span-4">
                                <p
                                  className="mb-5 font-semibold  "
                                  name={`Qualification.${index}.title`}
                                >
                                  Qualification Title
                                </p>
                                <Field
                                  type="text"
                                  name={`Qualification.${index}.title`}
                                  className=" w-full rounded-[10px] border-2 border-[#C1C1C1] p-2"
                                />
                              </div>
                              <div className="col-span-7 md:col-span-4">
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

                              <div className="order-6 col-span-1 mt-11 self-center justify-self-center md:order-none">
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  <RiDeleteBinLine className="text-xl text-[#7D7D7D]" />
                                </button>
                              </div>
                              <div className="order-2 col-span-11 md:order-none ">
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
                                  <label className=" col-span-6 w-auto  cursor-pointer rounded-lg   border border-[#FC4D6D] bg-white px-3 py-1 text-lg font-medium text-[#FC4D6D]">
                                    Upload Video
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
                                institute: '',
                              })
                            }
                            className="order-7 mx-auto flex gap-x-2 p-4 font-bold text-[#2294CD] md:order-none  "
                          >
                            <IoMdAddCircleOutline className="self-center text-[#7D7D7D]" />
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
