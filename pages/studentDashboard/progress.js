import React from 'react';
import Image from 'next/image';
import { AiOutlineLeft } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import TickGreen from "../../icons/TickGreen.jsx";

const Progress = () => {
    return (
        <div className="h-full whitespace-nowrap font-roboto px-4 sm:px-9 p-9 w-full block mx-auto capitalize">
            <div className="mb-9 flex gap-3 items-end">
                <h1 className="text-2xl font-semibold text-[#5E5252]">
                    My Progress
                </h1>
            </div>

            <main className='flex items-center justify-between w-full flex-wrap-reverse gap-8'>
                {/* main */}
                <Main />

                {/* right sidebar */}
                <RightSidebar />
            </main>
        </div>
    )
}

export default Progress;


// main
const Main = () => {
    return (
        <div className='bg-white rounded-2xl sm:flex-1 sm:w-fit w-full max-h-fit py-4 px-8'>
            {/* top */}
            <Top />

            {/* center */}
            <div className='flex items-center justify-between w-full flex-wrap mt-14 mx-auto gap-5'>
                {/* steps */}
                {/* for lg */}
                <Steps />
                {/* for sm */}
                <StepsMobile />

                {/* sidebox */}
                <Sidebox />
            </div>
        </div>
    )
}


// Main's top
const Top = () => {
    return (
        <div className='flex items-center justify-between w-full'>
            {/* image and subject */}
            <div className='flex items-center justify-center gap-3'>
                <div className='relative w-14 h-14'>
                    <Image
                        src='/Images/revuserimg.png'
                        alt='tutor'
                        objectFit='contain'
                        layout='fill'
                    />
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h2 className='font-bold text-xl'>
                        Gardening
                    </h2>
                    <small className='text-[#5F5F5F] font-medium'>
                        Annette Black Sessions for gardening
                    </small>
                </div>
            </div>

            <button className='border-none text-[#5B5151] font-medium flex items-center justify-center gap-1'>
                <AiOutlineLeft /> Back
            </button>
        </div>
    )
}


// steps
const Steps = () => {
    return (
        <div className='overflow-y-scroll w-[300px] max-h-[450px]'>
            <div className='hidden md:flex flex-col items-center font-roboto'>
                {/* 1st */}
                <div className='flex items-start w-full justify-between gap-3'>
                    <div className='flex flex-col gap-1 items-end'>
                        <p>
                            Session 1
                        </p>
                        <p className='text-[#888888]'>
                            Introduction
                        </p>
                    </div>

                    {/* check */}
                    <div className='flex items-center justify-center flex-col'>
                        <TickGreen />
                    </div>

                    {/* chip */}
                    <small className='text-[#20C374] font-medium mt-2'>
                        completed
                    </small>
                </div>

                {/* lines */}
                <VerticalLines />

                {/* 2nd */}
                <div className='flex items-start w-full justify-between gap-3'>
                    <div className='flex flex-col gap-1 items-end'>
                        <p>
                            Session 2
                        </p>
                        <p className='text-[#888888]'>
                            Introduction
                        </p>
                    </div>

                    {/* check */}
                    <div className='flex items-center justify-center flex-col mt-1'>
                        <p className='w-[45px] h-[45px] rounded-full text-white text-2xl bg-[#00E676] flex items-center justify-center font-semibold'>
                            2
                        </p>
                    </div>

                    {/* chip */}
                    <small className='font-medium rounded-md mt-2 text-[#1976D2]'>
                        In Progress
                    </small>
                </div>

                {/* lines */}
                <VerticalLines />

                {/* 3nd */}
                <div className='flex items-start w-full justify-between gap-3'>
                    <div className='flex flex-col gap-1 items-end'>
                        <p>
                            Session 3
                        </p>
                        <p className='text-[#888888]'>
                            Introduction
                        </p>
                    </div>

                    {/* check */}
                    <div className='flex items-center justify-center flex-col'>
                        <TickGreen />
                    </div>

                    {/* chip */}
                    <small className='text-[#20C374] font-medium mt-2'>
                        completed
                    </small>
                </div>

                {/* lines */}
                <VerticalLines />
            </div>
        </div>
    )
}


// steps for modile
const StepsMobile = () => {
    return (
        <div className='overflow-x-scroll h-[150px] max-w-full'>
            <div className='md:hidden flex items-center justify-start h-full w-fit'>
                {/* 1st */}
                <div className='flex flex-col items-center justify-between h-full'>
                    {/* chip */}
                    <small className='text-[#20C374] font-medium mt-2'>
                        completed
                    </small>

                    {/* check */}
                    <div className='flex items-center justify-center flex-col'>
                        <TickGreen />
                    </div>

                    <div className='flex flex-col gap-1 items-center'>
                        <p>
                            Session 1
                        </p>
                        <p className='text-[#888888]'>
                            Introduction
                        </p>
                    </div>
                </div>

                {/* lines */}
                <HorizontalLines />

                {/* 2nd */}
                <div className='flex flex-col items-center justify-between h-full'>
                    {/* chip */}
                    <small className='font-medium rounded-md mt-2 text-[#1976D2]'>
                        In Progress
                    </small>

                    {/* check */}
                    <div className='flex items-center justify-center flex-col mt-1'>
                        <p className='w-[45px] h-[45px] rounded-full text-white text-2xl bg-[#00E676] flex items-center justify-center font-semibold'>
                            2
                        </p>
                    </div>

                    <div className='flex flex-col gap-1 items-center'>
                        <p>
                            Session 2
                        </p>
                        <p className='text-[#888888]'>
                            Introduction
                        </p>
                    </div>
                </div>

                {/* lines */}
                <HorizontalLines />

                {/* 3nd */}
                <div className='flex flex-col items-center justify-between h-full'>
                    {/* chip */}
                    <small className='font-medium rounded-md mt-2 text-[#1976D2]'>
                        In Progress
                    </small>

                    {/* check */}
                    <div className='flex items-center justify-center flex-col mt-1'>
                        <p className='w-[45px] h-[45px] rounded-full text-white text-2xl bg-[#00E676] flex items-center justify-center font-semibold'>
                            3
                        </p>
                    </div>

                    <div className='flex flex-col gap-1 items-center'>
                        <p>
                            Session 3
                        </p>
                        <p className='text-[#888888]'>
                            Introduction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


// util lines vertical
const HorizontalLines = () => {
    return (
        <>
            <span className='w-14 h-[2px] bg-[#9E9E9E] relative bottom-[10px]' />
            <span className='h-2 w-[8px] rounded-full bg-[#9E9E9E] relative bottom-[10px]' />
            <span className='w-14 h-[2px] bg-[#9E9E9E] ml-4 relative bottom-[10px]' />
        </>
    )
}


// util lines vertical
const VerticalLines = () => {
    return (
        <>
            <span className='h-14 w-[2px] bg-[#9E9E9E] relative left-[10px]' />
            <span className='w-2 h-[8px] rounded-full bg-[#9E9E9E] relative left-[10px]' />
            <span className='h-14 w-[2px] bg-[#9E9E9E] mt-4 relative left-[10px]' />
        </>
    )
}


// sidebox
const Sidebox = () => {
    return (
        <div className='flex flex-col gap-3 p-3 border-2 border-[#C8C8C8] rounded-lg sm:w-[397px] w-full h-full font-roboto overflow-y-scroll'>
            {/* session */}
            <div className='flex flex-col w-full gap-1'>
                <div className='flex items-center justify-between'>
                    <p className='font-medium text-[#484848]'>
                        Session 1
                    </p>
                    <small className='font-bold text-[#20C374]'>
                        completed
                    </small>
                </div>
                <div className='flex items-center'>
                    <p className='font-medium text-[#8C8C8C]'>
                        Introduction
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='font-medium text-[#8C8C8C]'>
                        Date - 5-March-2022
                    </p>
                    <button className='flex items-center justify-center'>
                        <FiEdit />
                    </button>
                </div>
            </div>

            {/* session agenda */}
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-[#484848]'>
                    Session Agenda
                </p>
                <p className='text-[#414141] whitespace-normal text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum duis orci blandit commodo cursus
                    <br />
                    lacus adipiscing molestie. Suspendisse enim dui id sed id lectus pharetra eleifend. Faucibus sit ut cras scelerisque. Dolor tortor sed placerat dui sociis
                </p>
                <div className='flex justify-end w-full'>
                    <button className='font-bold text-[#818181] text-[12px]'>
                        Read more
                    </button>
                </div>
            </div>

            {/* session tutor remark */}
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-[#484848]'>
                    Post Session Tutor Remarks
                </p>
                <p className='text-[#414141] whitespace-normal text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum duis orci blandit commodo cursus
                    <br />
                    lacus adipiscing molestie. Suspendisse enim dui id sed id lectus pharetra eleifend. Faucibus sit ut cras scelerisque. Dolor tortor sed placerat dui sociis
                </p>
                <div className='flex justify-end w-full'>
                    <button className='font-bold text-[#818181] text-[12px]'>
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}


// right sidebar
const RightSidebar = () => {
    return (
        <div className='flex flex-col sm:w-[309px] w-full md:h-[600px] h-fit gap-2'>
            <p className='pl-1 font-semibold text-lg tracking-wide text-[#414141]'>
                My Targeted skills
            </p>
            {/* skills */}
            <div className='flex flex-col items-center gap-2 bg-white rounded-2xl w-full md:h-full md:max-h-full max-h-[330px] py-3 overflow-y-scroll'>
                {/* map on it */}
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
                <SkillsCard />
            </div>
        </div>
    )
}


// skills card
const SkillsCard = () => {
    return (
        <div className='w-full h-[75px] flex flex-1 items-center justify-start md:gap-4 gap-6 md:pl-5 pl-8 py-2 rounded-md'>
            {/* Image */}
            <div className='relative w-12 h-12'>
                <Image
                    src='/Images/revuserimg.png'
                    alt='tutor'
                    objectFit='contain'
                    layout='fill'
                />
            </div>

            <div className='flex flex-col items-start justify-center'>
                <h2 className='font-semibold text-lg text-[#565555] tracking-wide'>
                    Arlene McCoy
                </h2>
                <p className='text-[#5F5F5F] font-medium'>
                    Gardening
                </p>
            </div>
        </div>
    )
}


// circle green
// #2E9C3F

// line
// #9E9E9E

// secont text color
// #888888

// in progress color
// #1976D2
// its bg
// #F6F4FD

// circle border and text color
// #9E9E9E