import React, { useState, useEffect } from 'react';
import CrossIcon from "../../../icons/CrossIcon";
import WhatsAppTree from "../../../icons/WhatsAppTree";
import { openPopUps } from "../../../Atoms/PopUpAtoms";
import { useRecoilState } from "recoil";
import Dropzone, { useDropzone } from 'react-dropzone';

const ProfilePhotoPopUp = () => {
  // top open and close popup
  const [profilePopUp, setProfilePopUp] = useRecoilState(openPopUps)

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

    useEffect(() => {
        console.log(files);
    }, [files])

    return (
        <div className='flex flex-col p-6 items-center justify-center gap-10 bg-[#FFFFFF] lg:w-[640px] lg:h-[350px] w-[500px] h-[300px] relative font-roboto rounded-xl shadow-2xl'>
            <WhatsAppTree styles='absolute' />

      console.log(profile_img)
      set_profile_img(profile_img)
    }
  }
  const handleFileChange = (e) => {
    console.log(e.target.value)
    // console.log('e', e.target.value)
    // if (e.target.files.length) {
    //   setImage({
    //     preview: URL.createObjectURL(e.target.files[0]),
    //     raw: e.target.files[0],
    //   })
    //   profile_img.set('profile_pic', e.target.files[0])
    //   set_profile_img(profile_img)
    //   console.log(profile_img)
    // }
  }
  // uploading files
  const [files, setFiles] = useState([])

                <div className='flex items-end justify-between w-full gap-2'>
                    {/* Upload Box */}
                    <div {...getRootProps({ className: 'dropzone lg:w-[240px] lg:h-[240px] w-[200px] h-[200px]' })} className='flex items-center justify-center lg:w-[240px] lg:h-[240px] w-[200px] h-[200px] border-[0.8px] border-[#7E7E7E] border-dashed'>
                        <input {...getInputProps()} />
                        <div className='flex items-center gap-3 flex-col text-center font-bold'>
                            <p className='text-[#838383] text-[14px]'>
                                Drag And Drop Your Photo Here
                            </p>
                            <div className='flex items-center flex-col text-[#545454] text-[11px]'>
                                <p>
                                    JPG,PNG Or WEBP Format
                                </p>
                                <p>
                                    Maximum Size - 2MB.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className='flex items-center justify-between gap-4'>
                        {/* upload photo button */}
                        <button {...getRootProps({
                            className:
                                'lg:w-[156.29px] lg:h-[42.59px] w-[125px] h-[30px] text-center rounded-lg border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold',
                        })}>
                            <input {...getInputProps()} />
                            <p>Upload Photo</p>
                        </button>

                        {/* save changes */}
                        <button className='lg:w-[156.29px] lg:h-[42.59px] w-[125px] h-[30px] text-center rounded-lg font-medium text-[#FFFFFF] bg-[#FC4D6D]'>
                            <p>Save Changes</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex h-[300px] w-[500px] flex-col items-center justify-center gap-10 rounded-xl bg-[#FFFFFF] p-6 font-roboto shadow-2xl lg:h-[350px] lg:w-[640px]">
      <WhatsAppTree styles="absolute" />

      <div className="flex h-full w-full flex-col items-center justify-between">
        {/* Title and CrossButton */}
        <TopTitle setProfilePopUp={setProfilePopUp} />

// Top Title
const TopTitle = ({ setProfilePopUp }) => {
    return (
        <div className='flex w-full justify-between items-center pl-2'>
            <p className='font-bold lg:text-2xl text-lg text-[#3F3F3F]'>Upload Profile Photo</p>
            <span onClick={() => setProfilePopUp({ ...false })}>
                <CrossIcon />
            </span>
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotoPopUp

// Top Title
const TopTitle = ({ setProfilePopUp }) => {
  return (
    <div className="flex w-full items-center justify-between pl-2">
      <p className="text-lg font-bold text-[#3F3F3F] lg:text-2xl">
        Upload Profile Photo
      </p>
      <span onClick={() => setProfilePopUp({ ...false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Buttons
const Buttons = ({ label, styles }) => {
  return (
    <button
      className={`h-[30px] w-[125px] rounded-lg text-center lg:h-[42.59px] lg:w-[156.29px] ${styles}`}
    >
      {label}
    </button>
  )
}
