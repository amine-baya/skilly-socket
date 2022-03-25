import React, { useEffect } from 'react'
import Router from 'next/router'
import Dropzone from 'react-dropzone'
import Image from 'next/image'
import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import NextAndBackBtn from '../../../components/TutorDashboardRegistration/NextAndBackBtn'
import BlueTickLine from '../../../components/TutorDashboardRegistration/BlueTick'
import Server from '../../../utils/Server'
import {
  updateUserProfilePic,
  uploadUserProfilePic,
} from '../../../utils/constants'
import { getLocalStorage, updateUser } from '../../../utils/cookies'

function ProfilePhoto() {
  const [profile_img, set_profile_img] = useState('')

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
      set_profile_img(response.data.file_name)
    }
  }
  const handleSubmit = async () => {
    if (!profile_img) {
      Router.push('certification')
    } else {
      const user_update = await Server.put(updateUserProfilePic, {
        profile_img,
      })
      if (user_update.success) {
        updateUser({ profile_img }, () => {
          Router.push('certification')
        })
      }
    }
  }
  return (
    <>
      <div className="  font-bold ">
        <div
          id="heading"
          className="col-span-12  py-5 px-5 text-3xl  font-semibold text-[#3d3d3d] xl:px-20"
        >
          Profile Photo
        </div>
        <hr className="text-[#E2E2E2]" />
        <div className="my-10 px-5  text-[#545454]  xl:px-20">
          <p className="py-3 text-2xl ">Make A Great First Impression</p>
          <p className="">
            Tutor Who Look Friendly And Professional Get The Most Students
          </p>
        </div>
        <div className="grid grid-cols-12 px-5 text-[#545454]  xl:px-20 ">
          <div className="col-span-12 space-y-8 md:col-span-6">
            <div className="flex gap-2.5 ">
              <label className="h-auto rounded-lg border border-[#FC4D6D] bg-white px-[21px] py-2.5 text-sm">
                <input type="file" name="" id="" className="hidden" />
                Upload A Photo
              </label>
              <div className=" text-xs">
                <p>JPG or PNG format</p>
                <p>Maximum size - 2MB.</p>
              </div>
            </div>
            <div className=" mb-20 flex">
              <Dropzone
                onDrop={handleDrop}
                accept="image/*"
                minSize={1024}
                maxSize={3072000}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({ className: 'dropzone md:w-96 w-full ' })}
                  >
                    <input {...getInputProps()} />
                    <p className="py-[147px] capitalize  ">
                      drag and drop your photo here
                    </p>
                  </div>
                )}
              </Dropzone>
            </div>
          </div>

          <div className="col-span-12 mt-6 space-y-8 md:col-span-6 md:mt-0">
            <p className="text-[22px] font-medium">Tips For An Amazing Photo</p>
            <div className="flex gap-3 ">
              {profile_img || user_data.profile_img ? (
                <section className="flex gap-2">
                  <div className="h-[106px] w-[106px] bg-blue-300">
                    <img
                      src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${
                        profile_img ? profile_img : user_data.profile_img
                      }`}
                      alt="img"
                    />
                  </div>
                  {/* <div className="h-[106px] w-[106px] bg-blue-300">
                    <img src="" alt="img" />
                    </div>
                    <div className="h-[106px] w-[106px] bg-blue-300">
                    <img src="" alt="img" />
                  </div> */}
                </section>
              ) : null}
            </div>

            <div>
              <div className=" grid grid-cols-12 gap-y-4  text-[#838383]">
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

          <button className=" col-span-6 mt-10 w-auto rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-3 py-1 text-lg font-medium text-white md:col-span-2 md:w-full">
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfilePhoto