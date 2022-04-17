import React from 'react'

import { Formik, Field, Form } from 'formik'

import SelectWithIcons from '../../../components/TutorDashboardRegistration/SelectWithIcons'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

const data = [
  {
    id: 1,
    name: '+91',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
  },
  {
    id: 2,
    name: '+1',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
]
function NameAndLogin() {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const initialValues = {
    verifyPassword: '',
    newPassword: '',
    currentPassword: '',
    emailusername: '',
    phonenumber: '',
    lastName: '',
    firstName: '',
  }
  const onSubmit = (data) => {
    console.log('value', data)
  }
  return (
    <>
      <div>
        <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white  capitalize lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl ">
          <div
            id="heading"
            className="col-span-12  p-5 text-3xl font-semibold text-[#3d3d3d] xl:px-12"
          >
            name and login
          </div>
          <hr className="text-[#E2E2E2]" />
          <div className="s:flex justify-between  gap-2.5 px-5 pt-[22px] pb-[30px] xl:pl-[50px] xl:pr-[57px]">
            <div className="s:pb-0 gap-3 pb-[15px] md:flex">
              <h1 className=" pb-[15px] font-roboto font-semibold text-[#545454] md:pr-[89px] md:pb-0 lg:pr-[35px] xl:pr-[87px] 2xl:pr-[150px]">
                Profile Image
              </h1>
              {files.length !== 0
                ? files.length &&
                  files?.map((file) => (
                    <div key={file.name}>
                      <div className="relative ">
                        <img
                          className="h-[141px] w-[149px] rounded-[18px]"
                          src={file?.preview}
                        />
                        <div className="absolute top-[95px]">
                          <button className="rounded-b-[18px] bg-[#C4C4C4] py-[11px] px-[60px] text-[#FFFFFF] opacity-[0.8]">
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <div
              {...getRootProps({
                className:
                  ' h-[40px] rounded-lg border border-[#FC4D6D] bg-white px-[18px] py-2.5 text-sm  xs-0  s:mt-[51px] md:mt-0 w-[148px] s:w-auto',
              })}
            >
              <input {...getInputProps()} />
              <p>Upload A Photo</p>
              <br />
              <div className=" text-xs">
                <p>maximum size-2MB</p>
              </div>
            </div>
          </div>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className="grid grid-cols-9 gap-y-6 px-5 py-6 font-semibold text-[#545454] xl:px-12">
              <label className="col-span-9 whitespace-nowrap md:col-span-2">
                first name
              </label>
              <Field
                type="text"
                name="firstName"
                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
              />
              <label className="col-span-9 whitespace-nowrap md:col-span-2">
                Last name
              </label>
              <Field
                type="text"
                name="lastName"
                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
              />
              <label className="col-span-9 whitespace-nowrap md:col-span-2">
                Date of Birth
              </label>
              <Field
                type="date"
                name="lastName"
                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-3"
              />
              <div className="col-span-9 pt-[9px]  md:col-span-3 lg:col-span-4">
                <label className="col-span-9 whitespace-nowrap md:col-span-1 md:pl-[20px]">
                  Gender:
                </label>
                <label className="pl-[21px] xl:pl-[34px] ">
                  <Field type="radio" name="picked" value="Male" />
                  Male
                </label>
                <label className="pl-[10px] xl:pl-[21px]">
                  <Field type="radio" name="picked" value="Female" />
                  Female
                </label>
              </div>

              <label className="col-span-9 whitespace-nowrap md:col-span-2">
                Phone number
              </label>
              <div className="col-span-9 flex h-11 w-full gap-x-5 rounded-lg border border-[#C1C1C1] md:col-span-7 md:gap-x-2">
                <div>
                  <SelectWithIcons
                    people={data}
                    current={0}
                    className="h-11 w-[126px] border-none"
                    flag="center"
                    changestyle="font-extrabold"
                    update={() => {
                      return 0
                    }}
                  />
                </div>
                <Field
                  type="number"
                  name="phonenumber"
                  className=" my-auto h-10 w-full focus:outline-none"
                />
              </div>
              <label className="col-span-9 whitespace-nowrap md:col-span-2">
                email/username
              </label>
              <Field
                type="text"
                name="emailusername"
                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
              />
              <label className="col-span-9 md:col-span-2 ">
                Current password
              </label>
              <Field
                type="text"
                name="currentPassword"
                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
              />
              <label className="col-span-9 whitespace-nowrap md:col-span-2">
                New password
              </label>
              <Field
                type="text"
                name="newPassword"
                className="col-span-9 h-11 w-full rounded-lg border border-[#C1C1C1] focus:outline-none md:col-span-7"
              />

              <div className="col-span-9 md:col-span-2"></div>
              <div className="col-span-9 flex  justify-between md:col-span-7">
                <button
                  className="flex gap-2.5 rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-3 py-1 text-lg font-medium capitalize text-white"
                  type="submit"
                >
                  save settings
                </button>

                <button
                  className="  w-auto  cursor-pointer rounded-lg   border border-[#FC4D6D] bg-white px-3 py-1  font-medium capitalize"
                  type="button"
                >
                  delete account
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default NameAndLogin
