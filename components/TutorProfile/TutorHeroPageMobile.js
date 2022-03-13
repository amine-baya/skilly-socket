import React from 'react'
import Image from 'next/image'
import { FiMessageCircle } from 'react-icons/fi'

function TutorHeroPageMobile() {
  return (
    <div className="relative flex h-64 items-center justify-center  md:hidden ">
      <BackgroundFullImg />
      <div className="tutor-gradient -z-10" />
      <AndrewSmith />
      <ProfileImgAndQualifications />
    </div>
  )
}

export default TutorHeroPageMobile
function BackgroundFullImg() {
  return (
    <div className="absolute top-0 -z-30  h-full  w-full ">
      <Image
        priority
        src="/Images/TutorProfile/tutor-hero-background.png"
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
function AndrewSmith() {
  return (
    <div className="-mt-20 space-y-4 text-center font-bold capitalize text-white ">
      <div className=" -ml-8 text-sm tracking-[0.175em]">hello i'm</div>
      <h1 className=" flex gap-[17px] text-3xl">
        <span> Andrew Smith</span>
        <div className="inline-block h-[21px] w-[21px]">
          <Image
            src={'/Images/TutorProfile/svg/right-ok.svg'}
            height={21}
            width={21}
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/Images/TutorProfile/svg/australia.svg'}
            height={19}
            width={19}
          />
        </div>
      </h1>
    </div>
  )
}

function ProfileImgAndQualifications() {
  return (
    <div className="mx absolute -bottom-20 mx-16 flex items-center justify-center gap-2">
      <ProfileImg />
      <div className="w-52  capitalize">
        <p className="mt-2 mb-5 text-sm font-[600] tracking-[.065em] text-white">
          Qualified TEFL tutor and accent coach with
        </p>
        <TutorDescription />
      </div>
    </div>
  )
}
function TutorDescription() {
  return (
    <div className="ml-[7px] space-y-1  text-xs font-[500] tracking-[0.065em] text-[#616161]  ">
      <div className="flex gap-[10px]  ">
        <div className="ml-[-7px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/topper-cap-gray.svg'}
            priority
            height={16}
            width={16}
          />
        </div>
        <span>Teaches English language</span>
      </div>
      <div className="flex gap-[10px]">
        <div className="   ml-[-4px]  mr-[5px] flex justify-center">
          <FiMessageCircle className="text-sm" />
        </div>
        <span>Speaks English Native </span>
      </div>
      <div className="flex gap-[10px]  ">
        <div className="ml-[-2px] mr-[4px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/circles-gray.svg'}
            height={13.33}
            width={13.33}
          />
        </div>
        <span>207 lessons</span>
      </div>
    </div>
  )
}
function ProfileImg() {
  return (
    <div>
      <div className="relative h-36 w-32 overflow-hidden rounded-lg bg-gradient-to-r from-[#FC4D6D] to-[#FDA02F] p-2">
        <Image
          src={'/Images/TutorProfile/tutor-Mobile-img.png'}
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  )
}
