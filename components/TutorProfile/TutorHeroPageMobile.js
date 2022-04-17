import React from 'react'
import Image from 'next/image'
import WhiteTick from '../../icons/WhiteTick'
import HatIcon from '../../icons/HatIcon'
import CommentIcon from '../../icons/CommentIcon'
import CirclesIcon from '../../icons/CirclesIcon'
import { StarIcon } from '../../icons/FlagIcon'

function TutorHeroPageMobile() {
  return (
    <div className="snap-fullPage relative flex h-[calc(100vh-79px)] items-start justify-start capitalize md:hidden">
      <BackgroundImgContainer />

      <div className="flex h-full w-full flex-col items-center justify-start gap-12 sm:gap-14">
        <NameText />

        {/* photo and other things container */}
        <div className="flex w-full items-center justify-between gap-6 whitespace-normal px-6 sm:px-10">
          <ProfileImg />
          <Details />
        </div>
      </div>

      {/* ProfileChip */}
      <ProfileChip />
    </div>
  )
}

export default TutorHeroPageMobile

// BackgroundImgContainer
const BackgroundImgContainer = () => {
  return (
    <div className="absolute h-[60%] w-full bg-gradient-to-r from-[#FF7C7CB8] to-[rgba(255,189,109,0.72)]">
      <div className="relative -z-10 h-full w-full">
        <Image
          src="/Images/TutorProfile/background.png"
          alt="background"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  )
}

// top text
const NameText = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center gap-4 py-20 font-poppins font-bold text-[#FFFFFF] sm:py-16">
      <p className="text-[24px] tracking-[0.15em]">Hello I&apos;m</p>
      <div className="flex items-center justify-center gap-2 text-[35px] tracking-widest sm:text-[40px]">
        <h2>Andrew Smith</h2>
        <div className="flex items-center justify-center gap-2">
          <WhiteTick />
          {/* this is a flag */}
          <StarIcon />
        </div>
      </div>
    </div>
  )
}

// Tutor Img
function ProfileImg() {
  return (
    // comment out this div when the image is real without gradient borders
    // <div className='bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F] p-[2px] rounded-xl'>
    <div className="relative h-[150px] w-[131px] overflow-hidden rounded-xl sm:h-[180px] sm:w-[155px]">
      <Image
        src="/Images/TutorProfile/tutor-mobile-img.png"
        objectFit="contain"
        layout="fill"
        alt="tutor"
      />
    </div>
    // </div>
  )
}

// Details
const Details = () => {
  return (
    <div className="z-10 flex h-full flex-1 flex-col justify-between gap-4 tracking-wider">
      <div className="flex flex-col font-poppins text-[20px] font-bold text-[#FFFFFF]">
        <p>Qualified TEFL Tutor and</p>
        <p>Accent Coach With</p>
      </div>
      <div className="flex flex-col items-start gap-1 font-roboto text-[16px] font-medium text-[#616161]">
        <div className="flex items-center gap-2">
          <HatIcon />
          <p>Teaches English Language</p>
        </div>
        <div className="flex items-center gap-2">
          <CommentIcon />
          <p>Speaks English Native Italian B2</p>
        </div>
        <div className="flex items-center gap-2">
          <CirclesIcon />
          <p>207 Lessons</p>
        </div>
      </div>
    </div>
  )
}

// chip
const ProfileChip = () => {
  return (
    <div className="absolute bottom-[100px] right-[30px] z-30 flex h-[50px] w-[280px] items-center justify-between rounded-full bg-[#FFFFFF] px-4 py-2 font-roboto tracking-widest shadow-xl">
      <button className="text-[16px] font-extrabold text-[#FC4D6D]">
        Edit Profile
      </button>

      <button className="text-[16px] font-extrabold text-[#828282]">
        Upload Profile
      </button>

      <div>
        <svg
          width="5"
          height="20"
          viewBox="0 0 5 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="14.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="26.5" r="2.5" fill="#FC4D6D" />
        </svg>
      </div>
    </div>
  )
}
