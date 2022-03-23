import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { Formik, Field, Form } from 'formik'
import Image from 'next/image'
import { BsCameraVideo } from 'react-icons/bs'
import { FiCheckCircle } from 'react-icons/fi'
import VidImg from '../../public/Images/vidImg.png'
import { getLocalStorage, updateUser } from '../../utils/cookies'
import Server from '../../utils/Server'
import { updateUserVideoDesc } from '../../utils/constants'

function Video() {
  const [user_data, set_user_data] = useState({})
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [startVideo, setStartVideo] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [videoLink, setVideoLink] = useState('')
  const [uploadVideoLink, setUploadVideoLink] = useState('')

  useEffect(() => {
    getUserData()
  }, [])
  const getUserData = () => {
    const user = getLocalStorage('user')
    set_user_data(user)
  }
  const videoHandleChange = (e) => {
   console.log("e",e.target.value)
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
      console.log(image.preview)
    }
    setVideoLink(image.preview)
   
    setStartVideo(false)
  }
  const WebcamCapture = () => {
    setStartVideo(!startVideo)

    setPlaying(true)
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName('app__videoFeed')[0]
        if (video) {
          video.srcObject = stream
        }
      },
      (err) => console.error(err)
    )
    
  }
  const urlHandler = (value) => {
    setStartVideo(false)
    setVideoLink(value)
  }

  const onSubmit = async (data) => {
    const user_update = await Server.put(updateUserVideoDesc, data)
    if (user_update.success) {
      updateUser({ ...data }, () => {
        Router.push('availabidivty')
      })
    }
  }

  return (
    <div className="font-bold">
     
      <div
        id="heading"
        className="col-span-12  px-5  py-5 text-3xl font-semibold text-[#3d3d3d] xl:px-20"
      >
        Video Introduction
      </div>
      <hr className="text-[#E2E2E2]" />
      <div className="my-10 px-5  text-[#545454]  xl:px-20 ">
        <p className="py-3 text-2xl">Record Your Video</p>
        <p className="">
          Now Interoduce Yourself To Students! You Can Watch And Re-Record Your
          Intro Before You Submit It.
        </p>
      </div>
      <Formik initialValues={{ video_divnk: '' }} onSubmit={onSubmit}>
        <Form>
          <div className="grid grid-cols-12 px-5  xl:px-20">
            <div className="col-span-12 md:col-span-7">
              <div className="py-3">
                {startVideo === true ? (
                  <video
                    height="244px"
                    width="452px"
                    muted
                    autoPlay
                    className="app__videoFeed"
                  ></video>
                ) :  videoLink === '' ? (
                  <div className="h-[244px] w-full bg-gray-200 md:w-[452px]"></div>
                ) : (
                  <iframe
                    className="h-[244px] w-full bg-gray-200 lg:w-[452px]"
                    src={videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="flex gap-x-10">
                <button
                  className="flex gap-2.5 rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-3 py-1 text-lg font-medium text-white"
                  type="button"
                  onClick={WebcamCapture}
                >
                  <BsCameraVideo className=" my-auto  text-2xl" />
                  Start Recording
                </button>
                <label className=" col-span-6 w-auto  cursor-pointer rounded-lg   border border-[#FC4D6D] bg-white px-3 py-1 text-lg font-medium text-[#FC4D6D]">
                  Upload Video
                  <input
                    type="file"
                    className="hidden"
                    name="image"
                    accept="video/mp4,video/x-m4v,video/*"
                    
                    onChange={(e) => videoHandleChange(e)}
                  />
                </label>
              </div>

              <div className="my-6 text-[#545454]">
                <p className=" mb-2.5  text-xl font-medium">
                  Or Paste a Link to your video
                </p>
                <p className=" font-normal">
                  Learn How To Upload Videos To{' '}
                  <a className="text-[#1180BE]">Youtube</a> or{' '}
                  <a className="text-[#1180BE]">Vimeo</a>
                </p>
              </div>
              <input
                type="text"
                placeholder="www.youtube.com/watch?sjvcscksb"
                className="mb-6 w-full rounded-xl border border-gray-300 py-3 px-5 tracking-wider outline-none md:mb-0 lg:w-4/5"
                name="video_divnk"
                onChange={(e) => urlHandler(e.target.value)}
              />
            </div>

            <div className="col-span-12 md:col-span-5 md:px-6 xl:px-12 2xl:px-[70px]">
              <p className="text-xl font-medium">Tips for a great video</p>

              <div className="font-normal  ">
                <p className="my-5 text-sm font-medium ">Technical</p>
                <div className="grid grid-cols-10 gap-y-2.5 text-[#838383]">
                  <FiCheckCircle className="b-colo" />
                  <div className="col-span-9">Record in horizontal mode</div>

                  <FiCheckCircle className="b-colo " />
                  <div className="col-span-9">
                    Position the camera at the eye levelx
                  </div>

                  <FiCheckCircle className="b-colo" />
                  <div className="col-span-9">
                    Keep video between 30 seconds and 2 minutes
                  </div>

                  <FiCheckCircle className="b-colo " />
                  <div className="col-span-9">
                    Use nuteral divghting and background
                  </div>

                  <FiCheckCircle className="b-colo inline h-auto w-auto  " />
                  <div className="col-span-9">
                    Your face and eyes are fully visible &#40;except for
                    redivgious reasons&#41;
                  </div>

                  <FiCheckCircle className="b-colo " />
                  <div className="col-span-9">
                    Avoid logos or contact information
                  </div>

                  <FiCheckCircle className="b-colo " />
                  <div className="col-span-9">
                    You are the only person in the photo
                  </div>
                </div>

                <p className="my-5 text-sm font-medium">Content</p>
                <div className="grid grid-cols-10 gap-2.5 text-[#838383]">
                  <FiCheckCircle className="b-colo " />
                  <div className="col-span-9">Greet Your Students Warmly</div>
                  <FiCheckCircle className="b-colo " />
                  <div className=" col-span-9">
                    {' '}
                    Highlight Any Teaching Certification
                  </div>
                  <FiCheckCircle className="b-colo " />
                  <div className=" col-span-9">
                    Present Your Tutoring Experience
                  </div>
                  <FiCheckCircle className="b-colo " />
                  <div className="col-span-9">
                    Invite Students To Book A Trial Session
                  </div>
                  <BsCameraVideo className="b-colo  my-auto  text-xl" />
                  <div className=" b-colo col-span-9">
                    <div>Example</div>
                  </div>
                </div>
              </div>
            </div>

            <button className="col-span-6 mt-12 w-auto rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-3 py-1 text-lg font-medium text-white md:col-span-2 md:mt-0 md:w-full ">
              save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Video
