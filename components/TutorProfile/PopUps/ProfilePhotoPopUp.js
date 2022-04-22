import React, { useState, useEffect } from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import WhatsAppTree from '../../../icons/WhatsAppTree'
import { openPopUps } from '../../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'
import Dropzone, { useDropzone } from 'react-dropzone'

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
    console.log(files)
  }, [files])

  return (
    <div className="relative flex h-[300px] w-[500px] flex-col items-center justify-center gap-10 rounded-xl bg-[#FFFFFF] p-6 font-roboto shadow-2xl lg:h-[350px] lg:w-[640px]">
      <WhatsAppTree styles="absolute" />

      <div className="flex h-full w-full flex-col items-center justify-between">
        {/* Title and CrossButton */}
        <TopTitle setProfilePopUp={setProfilePopUp} />

        <div className="flex w-full items-end justify-between gap-2">
          {/* Upload Box */}
          <div
            {...getRootProps({
              className:
                'dropzone lg:w-[240px] lg:h-[240px] w-[200px] h-[200px]',
            })}
            className="flex h-[200px] w-[200px] items-center justify-center border-[0.8px] border-dashed border-[#7E7E7E] lg:h-[240px] lg:w-[240px]"
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-3 text-center font-bold">
              <p className="text-[14px] text-[#838383]">
                Drag And Drop Your Photo Here
              </p>
              <div className="flex flex-col items-center text-[11px] text-[#545454]">
                <p>JPG,PNG Or WEBP Format</p>
                <p>Maximum Size - 2MB.</p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-between gap-4">
            {/* upload photo button */}
            <button
              {...getRootProps({
                className:
                  'lg:w-[156.29px] lg:h-[42.59px] w-[125px] h-[30px] text-center rounded-lg border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold',
              })}
            >
              <input {...getInputProps()} />
              <p>Upload Photo</p>
            </button>

            {/* save changes */}
            <button className="h-[30px] w-[125px] rounded-lg bg-[#FC4D6D] text-center font-medium text-[#FFFFFF] lg:h-[42.59px] lg:w-[156.29px]">
              <p>Save Changes</p>
            </button>
          </div>
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

// Upload Box
const UploadBox = () => {
  return (
    <div className="flex h-[200px] w-[200px] items-center justify-center border-[0.8px] border-dashed border-[#7E7E7E] lg:h-[240px] lg:w-[240px]">
      <div className="flex flex-col items-center gap-3 text-center font-bold">
        <p className="text-[14px] text-[#838383]">
          Drag And Drop Your Photo Here
        </p>
        <div className="flex flex-col items-center text-[11px] text-[#545454]">
          <p>JPG,PNG Or WEBP Format</p>
          <p>Maximum Size - 2MB.</p>
        </div>
      </div>
    </div>
  )
}
