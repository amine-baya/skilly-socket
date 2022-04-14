import React from 'react';
import CrossIcon from "../../../icons/CrossIcon";
import WhatsAppTree from "../../../icons/WhatsAppTree.jsx";
import { openPopUps } from "../../../Atoms/PopUpAtoms";
import { useRecoilState } from "recoil";

const CoverPhotoPopUp = () => {
    const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps);

    return (
        <div className='flex flex-col p-6 items-center gap-9 bg-[#FFFFFF] lg:w-[590px] lg:h-[522px] w-[500px] h-[400px] font-roboto rounded-xl shadow-2xl z-30'>
            {/* Title and CrossButton */}
            <TopTitle setOpenPopUp={setOpenPopUp} />

            {/* Upload Box */}
            <UploadBox />

            {/* Bottom Buttons */}
            <div className='flex items-center justify-between w-full px-2'>
                <Buttons label='Upload Photo' styles='border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold' />
                <Buttons label='Edit Cover Title' styles='border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold' />
                <Buttons label='Save Changes' styles='font-medium text-[#FFFFFF] bg-[#FC4D6D]' />
            </div>
        </div>
    )
}

export default CoverPhotoPopUp;


// Top Title
const TopTitle = ({ setOpenPopUp }) => {
    return (
        <div className='flex w-full justify-between items-center pl-2'>
            <p className='font-bold text-xl text-[#3F3F3F]'>Upload Cover Photo</p>
            <span onClick={() => setOpenPopUp({ ...false, walletPopUp: false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// Upload Box
const UploadBox = () => {
    return (
        <div className='flex items-center justify-center lg:w-[523.32px] lg:h-[311.8px] w-[450px] h-[300px] relative border-[0.33px] border-[#7E7E7E] border-dotted'>
            <WhatsAppTree styles='absolute' />
            <div className='flex items-center gap-3 flex-col text-center font-bold'>
                <p className='text-[#838383] text-[18px]'>
                    Drag And Drop Your Photo Here
                </p>
                <div className='flex items-center flex-col text-[#545454] text-[12px]'>
                    <p>
                        JPG,PNG Or WEBP Format
                    </p>
                    <p>
                        Maximum Size - 2MB.
                    </p>
                </div>
            </div>
        </div>
    )
}


// Buttons
const Buttons = ({ label, styles }) => {
    return (
        <button className={`lg:w-[156.29px] lg:h-[42.59px] w-[120px] h-[38px] text-center rounded-lg ${styles}`}>
            {label}
        </button>
    )
}