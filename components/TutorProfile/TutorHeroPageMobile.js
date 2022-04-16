import React from 'react';
import Image from 'next/image';
import WhiteTick from "../../icons/WhiteTick";
import HatIcon from "../../icons/HatIcon";
import CommentIcon from "../../icons/CommentIcon";
import CirclesIcon from "../../icons/CirclesIcon";
import { StarIcon } from "../../icons/FlagIcon";

function TutorHeroPageMobile() {
  return (
    <div className="snap-fullPage h-[calc(100vh-79px)] relative flex md:hidden items-start justify-start capitalize">
      <BackgroundImgContainer />

      <div className='flex items-center justify-start flex-col w-full h-full gap-12 sm:gap-14'>
        <NameText />

        {/* photo and other things container */}
        <div className='flex items-center justify-between sm:px-10 px-6 w-full whitespace-normal gap-6'>
          <ProfileImg />
          <Details />
        </div>
      </div>

      {/* ProfileChip */}
      <ProfileChip />
    </div>
  )
}

export default TutorHeroPageMobile;


// BackgroundImgContainer
const BackgroundImgContainer = () => {
  return (
    <div className='absolute h-[60%] w-full bg-gradient-to-r from-[#FF7C7CB8] to-[rgba(255,189,109,0.72)]'>
      <div className='relative h-full w-full -z-10'>
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
    <div className='flex items-center justify-center w-full flex-col gap-4 z-10 font-poppins font-bold text-[#FFFFFF] py-20 sm:py-16'>

      <p className='tracking-[0.15em] text-[24px]'>
        Hello I&apos;m
      </p>
      <div className='flex items-center justify-center gap-2 tracking-widest sm:text-[40px] text-[35px]'>
        <h2>
          Andrew Smith
        </h2>
        <div className='flex items-center justify-center gap-2'>
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
    <div className="relative sm:h-[180px] sm:w-[155px] h-[150px] w-[131px] overflow-hidden rounded-xl">
      <Image
        src='/Images/TutorProfile/tutor-mobile-img.png'
        objectFit="contain"
        layout="fill"
        alt='tutor'
      />
    </div>
    // </div>
  )
}


// Details
const Details = () => {
  return (
    <div className='flex flex-col justify-between gap-4 z-10 flex-1 h-full tracking-wider'>
      <div className='flex flex-col font-poppins font-bold text-[#FFFFFF] text-[20px]'>
        <p>
          Qualified TEFL Tutor and
        </p>
        <p>
          Accent Coach With
        </p>
      </div>
      <div className='flex flex-col items-start gap-1 text-[#616161] font-medium font-roboto text-[16px]'>
        <div className='flex items-center gap-2'>
          <HatIcon />
          <p>
            Teaches English Language
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <CommentIcon />
          <p>
            Speaks English Native Italian B2
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <CirclesIcon />
          <p>
            207 Lessons
          </p>
        </div>
      </div>
    </div>
  )
}


// chip
const ProfileChip = () => {
  return (
    <div className='flex items-center justify-between absolute bottom-[100px] right-[30px] w-[280px] h-[50px] bg-[#FFFFFF] tracking-widest rounded-full px-4 py-2 font-roboto shadow-xl z-30'>
      <button className='text-[#FC4D6D] font-extrabold text-[16px]'>
        Edit Profile
      </button>

      <button className='text-[#828282] font-extrabold text-[16px]'>
        Upload Profile
      </button>

      <div>
        <svg width="5" height="20" viewBox="0 0 5 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="14.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="26.5" r="2.5" fill="#FC4D6D" />
        </svg>
      </div>
    </div>
  )
}