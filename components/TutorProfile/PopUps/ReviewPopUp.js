import React from 'react';
import CrossIcon from "../../../icons/CrossIcon";
import { openPopUps } from "../../../Atoms/PopUpAtoms";
import { useRecoilState } from "recoil";

const ReviewPopUp = () => {
    const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps);

    return (
        <div className='flex flex-col p-6 items-center gap-9 bg-[#FFFFFF] lg:w-[590px] lg:h-[500px] sm:w-[500px] w-full h-[400px] font-roboto rounded-xl shadow-2xl z-30'>
            {/* Title and CrossButton */}
            <TopTitle setOpenPopUp={setOpenPopUp} />

            {/* Input Box */}
            <InputBox />

            {/* Bottom Buttons */}
            <div className='flex items-center justify-between w-full gap-4'>
                <Buttons setOpenPopUp={setOpenPopUp} label='Cancel Changes' styles='border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold' />
                <Buttons label='Save Changes' styles='font-medium text-[#FFFFFF] bg-[#FC4D6D]' />
            </div>
        </div>
    )
}

export default ReviewPopUp;


// Top Title
const TopTitle = ({ setOpenPopUp }) => {
    return (
        <div className='flex w-full justify-between items-center pl-2'>
            <p className='font-bold text-xl text-[#3F3F3F]'>Add Review</p>
            <span onClick={() => setOpenPopUp({ ...false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// input box
const InputBox = () => {
    return (
        <textarea className='flex items-center justify-center w-full h-[300px] relative outline-none p-3 border-[2px] border-[#e5e5e5] bg-[#F7F7F7] rounded-xl resize-none' />
    )
}


// Buttons
const Buttons = ({ label, styles, setOpenPopUp }) => {
    return (
        <button onClick={() => (setOpenPopUp && setOpenPopUp({ ...false }))}
            className={`w-[156.29px] h-[42.59px] text-center rounded-lg ${styles}`}>
            {label}
        </button>
    )
}