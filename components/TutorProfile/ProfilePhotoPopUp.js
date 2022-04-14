import React from 'react';
import CrossIcon from "../../icons/CrossIcon";
import WhatsAppTree from "../../icons/WhatsAppTree";
import { openPopUps } from "../../Atoms/PopUpAtoms";
import { useRecoilState } from "recoil";

const ProfilePhotoPopUp = () => {
    // top open and close popup
    const [profilePopUp, setProfilePopUp] = useRecoilState(openPopUps);

    return (
        <div className='flex flex-col p-6 items-center justify-center gap-10 bg-[#FFFFFF] lg:w-[640px] lg:h-[350px] w-[500px] h-[300px] relative font-roboto rounded-xl shadow-2xl'>
            <WhatsAppTree styles='absolute' />

            <div className='flex flex-col items-center justify-between h-full w-full'>
                {/* Title and CrossButton */}
                <TopTitle setProfilePopUp={setProfilePopUp} />

                <div className='flex items-end justify-between w-full gap-2'>
                    {/* Upload Box */}
                    <UploadBox />

                    {/* Bottom Buttons */}
                    <div className='flex items-center justify-between gap-4'>
                        <Buttons label='Upload Photo' styles='border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold' />
                        <Buttons label='Save Changes' styles='font-medium text-[#FFFFFF] bg-[#FC4D6D]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePhotoPopUp;


// Top Title
const TopTitle = ({ setProfilePopUp }) => {
    return (
        <div className='flex w-full justify-between items-center pl-2'>
            <p className='font-bold lg:text-2xl text-lg text-[#3F3F3F]'>Upload Cover Photo</p>
            <span onClick={() => setProfilePopUp({ ...false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// Upload Box
const UploadBox = () => {
    return (
        <div className='flex items-center justify-center lg:w-[240px] lg:h-[240px] w-[200px] h-[200px] border-[0.8px] border-[#7E7E7E] border-dashed'>
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
    )
}


// Buttons
const Buttons = ({ label, styles }) => {
    return (
        <button className={`lg:w-[156.29px] lg:h-[42.59px] w-[125px] h-[30px] text-center rounded-lg ${styles}`}>
            {label}
        </button>
    )
}