import React, { useEffect } from 'react'
import Router from 'next/router'
import Dropzone, { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import NextAndBackBtn from '../../../components/TutorDashboardRegistration/NextAndBackBtn'
import BlueTickLine from '../../../components/TutorDashboardRegistration/BlueTick'
import Server from '../../../utils/Server'
import {
  baseUrl,
  uploadUserProfilePic,
  updateUserProfilePic,
} from '../../../utils/constants'
import { getLocalStorage, updateUser } from '../../../utils/cookies'
import FormData from 'form-data'
import axios from 'axios'
import { getCookie } from 'cookies-next'

function ProfilePhoto() {
  // already written code
  const [profile_img, set_profile_img] = useState(new FormData())
  const [image, setImage] = useState({ preview: '', raw: '' })

  const [user_data, set_user_data] = useState({})

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }

  const handleDrop = async (acceptedFiles) => {
    let data = new FormData()
    data.append('profile_pic', acceptedFiles[0], acceptedFiles[0].name)
    const response = await Server.post(uploadUserProfilePic, data)
    if (response.success) {
      profile_img.set('profile_pic', acceptedFiles[0])

      console.log(profile_img)
      set_profile_img(profile_img)
    }
  }
  const photoHandleChange = (e) => {
    console.log('e', e.target.value)
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
      profile_img.set('profile_pic', e.target.files[0])
      set_profile_img(profile_img)
    }
  }
  const handleSubmit = async () => {
    if (!profile_img) {
      console.log('Could not find profile picture')
      Router.push('/tutorDashboard/myprofile/video')
    } else {
      console.log(profile_img.profile_pic)
      const response = await axios({
        method: 'post',
        url: baseUrl + uploadUserProfilePic,
        data: profile_img,
        headers: {
          'Content-Type': `multipart/form-data`,
          Authorization: `BEARER ${JSON.parse(getCookie('token')).access_token
            }`,
        },
      })

      console.log('response', response)

      if (response.data.success) {
        console.log('profile picture uploaded')
        const user_upload = await Server.put(updateUserProfilePic, {
          profile_img: response.data.data.file_name,
        })
        console.log('user profile picture update')
        Router.push('/tutorDashboard/myprofile/video')
      }
    }
  }

  // their merged code
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
      profile_img.set('profile_pic', acceptedFiles[0])
      set_profile_img(profile_img)
      console.log(profile_img)
    },
  })

  return (
    <>
      <div className="md-[1px] ml-[1px] mb-[1px] bg-white font-bold  lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
        <div
          id="heading"
          className="col-span-12  py-5 px-5 text-3xl  font-semibold text-[#3d3d3d] xl:px-12"
        >
          Profile Photo
        </div>
        <hr className="text-[#E2E2E2]" />
        <div className="my-10 px-5  text-[#545454]  xl:px-12">
          <p className="py-3 text-2xl ">Make A Great First Impression</p>
          <p className="">
            Tutor Who Look Friendly And Professional Get The Most Students
          </p>
        </div>
        <div className="lg: grid grid-cols-12 gap-x-2  px-5 text-[#545454] xl:px-12">
          <div className="col-span-12 space-y-8 md:col-span-6">
            <div className="flex gap-2.5 ">
              <div
                {...getRootProps({
                  className:
                    ' h-auto rounded-lg border border-[#FC4D6D] bg-white px-[21px] py-2.5 text-sm',
                })}
              >
                <input {...getInputProps()} />
                <p>Upload A Photo</p>
              </div>
              <div className=" text-xs">
                <p>JPG or PNG format</p>
                <p>Maximum size - 2MB.</p>
              </div>
            </div>
            <div className=" mb-20 flex">
              <div {...getRootProps({ className: 'dropzone lg:w-96 w-full ' })}>
                <input {...getInputProps()} />
                <p className="py-[147px] capitalize  ">
                  drag and drop your photo here
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-6 space-y-8 md:col-span-6 md:mt-0">
            <p className="text-[22px] font-medium">Tips For An Amazing Photo</p>
            <div className="flex gap-3 ">
              {files.length !== 0
                ? files.length &&
                files?.map((file) => (
                  <div className="  h-auto bg-blue-300" key={file.name}>
                    <div>
                      <Image src={file?.preview} />
                    </div>
                  </div>
                ))
                : null}
            </div>

            <div>
              <div className=" grid grid-cols-12 gap-y-4  capitalize  text-[#838383]">
                <FiCheckCircle className="b-colo indivne mr-2" />
                <div className=" col-span-11 ">
                  smile and look at the camera
                </div>
                <FiCheckCircle className="b-colo " />
                <div className=" col-span-11  ">
                  frame youe head and shoulder
                </div>
                <FiCheckCircle className="b-colo " />
                <div className=" col-span-11 ">
                  your photo is centered and upright
                </div>
                <FiCheckCircle className="b-colo " />
                <div className=" col-span-11 ">
                  use nuteral divghting and background
                </div>
                <FiCheckCircle className="b-colo " />
                <div className=" col-span-11 ">
                  your face and eyes are fully visible &#40;except for
                  redivgious reasons &#41;
                </div>
                <FiCheckCircle className="b-colo " />
                <div className=" col-span-11  ">
                  avoid logos or contact information
                </div>
                <FiCheckCircle className="b-colo " />
                <div className="  col-span-11 ">
                  you are the only person in the photo
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 my-10 flex gap-x-10 md:col-span-6">
            <div>
              <button className="  w-auto rounded-lg border border-[#FC4D6D] bg-white px-3 py-1 text-lg font-medium text-[#FC4D6D] md:col-span-2 md:w-full">
                Skip For Now
              </button>
            </div>
            <div className="">
              <button
                onClick={() => handleSubmit()}
                className=" w-auto rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-7 py-1 text-lg font-medium text-white md:col-span-2 md:mt-0 md:w-full "
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePhoto
