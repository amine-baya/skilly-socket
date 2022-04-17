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
<<<<<<< Updated upstream
    <div className='absolute h-[60%] w-full bg-gradient-to-r from-[#FF7C7CB8] to-[rgba(255,189,109,0.72)]'>
      <div className='relative h-full w-full -z-10'>
        <Image
          src="/Images/TutorProfile/background.png"
          alt="background"
          objectFit="cover"
          layout="fill"
        />
      </div>
=======
    <div className="absolute top-0 -z-30  h-full  w-full ">
      <Image
        priority
        src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${user_data.background_pic}`}
        layout="fill"
        objectFit="cover"
        alt="yo"
      />
>>>>>>> Stashed changes
    </div>
  )
}


// top text 
const NameText = () => {
  return (
<<<<<<< Updated upstream
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
=======
    <div className="-mt-20 space-y-4 text-center font-bold capitalize text-white ">
      <div className=" -ml-8 text-sm tracking-[0.175em]">
        {user_data.headline}
      </div>
      <h1 className=" flex gap-[17px] text-3xl">
        <span> {user_data.name}</span>
        <div className="inline-block h-[21px] w-[21px]">
          <Image
            src={'/Images/TutorProfile/svg/right-ok.svg'}
            height={21}
            width={21}
            alt="yo"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/Images/TutorProfile/svg/australia.svg'}
            height={19}
            width={19}
            alt="yo"
          />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div className='flex flex-col justify-between gap-4 z-10 flex-1 h-full tracking-wider'>
      <div className='flex flex-col font-poppins font-bold text-[#FFFFFF] text-[20px]'>
        <p>
          Qualified TEFL Tutor and
        </p>
        <p>
          Accent Coach With
        </p>
=======
    <div className="ml-[7px] space-y-1  text-xs font-[500] tracking-[0.065em] text-[#616161]  ">
      <div className="flex gap-[10px]  ">
        <div className="ml-[-7px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/topper-cap-gray.svg'}
            priority
            height={16}
            width={16}
            alt="yo"
          />
        </div>
        <span>
          Teaches {/* FIX */}
          {/* {user_data?.subject_taught_id
            ?.map(function (elem) {
              return SUBJECTS[elem]
            })
            .join(', ')}{' '} */}
          language
        </span>
>>>>>>> Stashed changes
      </div>
      <div className='flex flex-col items-start gap-1 text-[#616161] font-medium font-roboto text-[16px]'>
        <div className='flex items-center gap-2'>
          <HatIcon />
          <p>
            Teaches English Language
          </p>
        </div>
<<<<<<< Updated upstream
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
=======
        <span>
          Speaks {/* FIX */}
          {/* {user_data.language_spoken
            .map(function (elem) {
              return elem.language
            })
            .join(', ')}{' '} */}
        </span>
      </div>
      <div className="flex gap-[10px]  ">
        <div className="ml-[-2px] mr-[4px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/circles-gray.svg'}
            height={13.33}
            width={13.33}
            alt="yo"
          />
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  )
}


// chip
const ProfileChip = () => {
  return (
<<<<<<< Updated upstream
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
=======
    <div>
      <div className="relative h-36 w-32 overflow-hidden rounded-lg bg-gradient-to-r from-[#FC4D6D] to-[#FDA02F] p-2">
        <Image
          src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${profile_img}`}
          objectFit="contain"
          layout="fill"
          alt="yo"
        />
>>>>>>> Stashed changes
      </div>
    </div>
  )
}