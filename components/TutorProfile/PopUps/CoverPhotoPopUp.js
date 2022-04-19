import React from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import WhatsAppTree from '../../../icons/WhatsAppTree.jsx'
import { openPopUps } from '../../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'

const CoverPhotoPopUp = () => {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)

  return (
    <div className="z-30 flex h-[400px] w-[500px] flex-col items-center gap-9 rounded-xl bg-[#FFFFFF] p-6 font-roboto shadow-2xl lg:h-[522px] lg:w-[590px]">
      {/* Title and CrossButton */}
      <TopTitle setOpenPopUp={setOpenPopUp} />

      {/* Upload Box */}
      <UploadBox />

      {/* Bottom Buttons */}
      <div className="flex w-full items-center justify-between px-2">
        <Buttons
          label="Upload Photo"
          onClick={() => {}}
          styles="border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold"
        />
        {/* <Buttons
          label="Edit Cover Title"
          styles="border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold"
        /> */}
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
      <span onClick={() => setOpenPopUp({ ...false, walletPopUp: false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Upload Box
const UploadBox = () => {
  return (
    <div className="relative flex h-[300px] w-[450px] items-center justify-center border-[0.33px] border-dotted border-[#7E7E7E] lg:h-[311.8px] lg:w-[523.32px]">
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
  )
}

// Buttons
const Buttons = ({ label, styles, onClk }) => {
  return (
    <button
      onClick={onClk}
      className={`h-[38px] w-[120px] rounded-lg text-center lg:h-[42.59px] lg:w-[156.29px] ${styles}`}
    >
      {label}
    </button>
  )
}
