import Image from 'next/image'
import ProfilePhotoPopUp from './PopUps/ProfilePhotoPopUp'
import { openPopUps } from '../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'
import CoverPhotoPopUp from './PopUps/CoverPhotoPopUp'

export default function TutorHeroPage() {
  // top open and close popup
  const [profilePopUp, setProfilePopUp] = useRecoilState(openPopUps)
  const [CoverPopUp, setCoverPopUp] = useRecoilState(openPopUps)

  return (
    <div className="snap-fullPage relative hidden h-[calc(100vh-79px)] items-center justify-start overflow-hidden bg-gradient-to-r from-[#FF7C7CB8] to-[#C4C4C400] md:flex">
      <BackgroundImg />
      {/* camera  */}
      <div
        onClick={() => setCoverPopUp({ ...false, CoverPhotoPopUp: true })}
        className="absolute top-[15px] right-[15px] z-[1] cursor-pointer"
      >
        <div className="relative h-[22.5px] w-[27.5px]">
          <Image
            src="/Images/TutorProfile/camera.png"
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      {/* Profession */}
      <p className="absolute -bottom-6 hidden w-full text-center font-poppins text-[100px] font-semibold uppercase tracking-[25px] text-[#424242] opacity-50 lg:block">
        <span className="text-[#FFFFFF]">Professional</span> chef
      </p>

      {/* ProfileChip */}
      <ProfileChip />

      {/* main */}
      <div className="flex items-center gap-8 pl-8 lg:pl-16">
        <UserImage setProfilePopUp={setProfilePopUp} />

        {/* profile photo popup */}
        {profilePopUp.ProfilePhotoPopUp && <ProfilePhotoPopUp />}

        {CoverPopUp.CoverPhotoPopUp && <CoverPhotoPopUp />}
      </div>
    </div>
  )
}

const BackgroundImg = () => {
  return (
    <div className="absolute h-full w-full">
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

const UserImage = ({ setProfilePopUp }) => {
  return (
    <div className="relative h-[200px] w-[200px] rounded-lg lg:h-[280px] lg:w-[280px]">
      {/* camera */}
      <div
        onClick={() => setProfilePopUp({ ...false, ProfilePhotoPopUp: true })}
        className="absolute top-[15px] right-[15px] z-[1] cursor-pointer"
      >
        <div className="relative h-[22.5px] w-[27.5px]">
          <Image
            src="/Images/TutorProfile/camera.png"
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      {/* userImage */}
      <Image
        src="/Images/TutorProfile/tutor.png"
        alt="tutor"
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
}

const ProfileChip = () => {
  return (
    <div className="absolute bottom-[60px] left-[30px] flex h-[40px] w-[216px] items-center justify-between rounded-full bg-[#FFFFFF] px-4 py-2 font-roboto shadow-xl sm:w-[300px] lg:bottom-[100px] lg:left-[60px]">
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

      <button className="text-[16px] font-extrabold text-[#FC4D6D]">
        Edit Profile
      </button>

      <button className="text-[16px] font-extrabold text-[#828282]">
        Upload Profile
      </button>
    </div>
  )
}
