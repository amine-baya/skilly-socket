import React, { useState, useEffect } from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import WhatsAppTree from '../../../icons/WhatsAppTree.jsx'
import { openPopUps } from '../../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'
import Dropzone, { useDropzone } from 'react-dropzone'

const CoverPhotoPopUp = () => {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)

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
    <div className="z-30 flex h-[400px] w-[500px] flex-col items-center gap-9 rounded-xl bg-[#FFFFFF] p-6 font-roboto shadow-2xl lg:h-[522px] lg:w-[590px]">
      {/* Title and CrossButton */}
      <TopTitle setOpenPopUp={setOpenPopUp} />

      {/* Upload Box */}
      <div
        {...getRootProps({
          className:
            'dropzone lg:w-[523.32px] lg:h-[311.8px] w-[450px] h-[300px]',
        })}
        className="relative flex h-[300px] w-[450px] items-center justify-center border-[0.33px] border-dotted border-[#7E7E7E] lg:h-[311.8px] lg:w-[523.32px]"
      >
        <input {...getInputProps()} />
        <WhatsAppTree styles="absolute" />
        <div className="flex flex-col items-center gap-3 text-center font-bold">
          <p className="text-[18px] text-[#838383]">
            Drag And Drop Your Photo Here
          </p>
          <div className="flex flex-col items-center text-[12px] text-[#545454]">
            <p>JPG,PNG Or WEBP Format</p>
            <p>Maximum Size - 2MB.</p>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex w-full items-center justify-between px-2">
        {/* upload photo button */}
        <button
          {...getRootProps({
            className:
              'lg:w-[156.29px] lg:h-[42.59px] w-[120px] h-[38px] text-center rounded-lg border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold',
          })}
        >
          <input {...getInputProps()} />
          <p>Upload Photo</p>
        </button>

        <Buttons
          label="Edit Cover Title"
          styles="border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold"
        />
        <Buttons
          label="Save Changes"
          styles="font-medium text-[#FFFFFF] bg-[#FC4D6D]"
        />
      </div>
    </div>
  )
}

export default CoverPhotoPopUp

// Top Title
const TopTitle = ({ setOpenPopUp }) => {
  return (
    <div className="flex w-full items-center justify-between pl-2">
      <p className="text-xl font-bold text-[#3F3F3F]">Upload Cover Photo</p>
      <span onClick={() => setOpenPopUp({ ...false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Buttons
const Buttons = ({ label, styles }) => {
  return (
    <button
      className={`h-[38px] w-[120px] rounded-lg text-center lg:h-[42.59px] lg:w-[156.29px] ${styles}`}
    >
      {label}
    </button>
  )
}
