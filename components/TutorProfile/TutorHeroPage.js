import Image from 'next/image';
import ProfilePhotoPopUp from "./PopUps/ProfilePhotoPopUp";
import { openPopUps } from "../../Atoms/PopUpAtoms";
import { useRecoilState } from "recoil";
import CoverPhotoPopUp from './PopUps/CoverPhotoPopUp';

export default function TutorHeroPage() {
  // top open and close popup
  const [profilePopUp, setProfilePopUp] = useRecoilState(openPopUps);
  const [CoverPopUp, setCoverPopUp] = useRecoilState(openPopUps);

  return (
    <div className="snap-fullPage relative hidden md:flex h-[calc(100vh-79px)] items-center justify-start overflow-hidden bg-gradient-to-r from-[#FF7C7CB8] to-[#C4C4C400]">
      <BackgroundImg />
      {/* camera  */}
      <div onClick={() => setCoverPopUp({ ...false, CoverPhotoPopUp: true })} className='absolute z-[1] top-[15px] right-[15px] cursor-pointer'>
        <div className='relative w-[27.5px] h-[22.5px]'>
          <Image
            src="/Images/TutorProfile/camera.png"
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      {/* Profession */}
      <p className='hidden lg:block absolute w-full text-center -bottom-6 font-poppins font-semibold text-[100px] text-[#424242] uppercase opacity-50 tracking-[25px]'>
        <span className='text-[#FFFFFF]'>
          Professional
        </span> chef
      </p>

      {/* ProfileChip */}
      <ProfileChip />

<<<<<<< Updated upstream
      {/* main */}
      <div className='flex items-center gap-8 lg:pl-16 pl-8'>
        <UserImage setProfilePopUp={setProfilePopUp} />

        {/* profile photo popup */}
        {profilePopUp.ProfilePhotoPopUp && (
          <ProfilePhotoPopUp />
        )}

        {CoverPopUp.CoverPhotoPopUp && (
          <CoverPhotoPopUp />
        )}
      </div>
=======
function BackgroundFullImg({ user_data }) {
  return (
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

const BackgroundImg = () => {
  return (
    <div className='absolute h-full w-full'>
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

const UserImage = ({ setProfilePopUp }) => {
  return (
    <div className='relative lg:w-[280px] lg:h-[280px] w-[200px] h-[200px] rounded-lg'>
      {/* camera */}
      <div onClick={() => setProfilePopUp({ ...false, ProfilePhotoPopUp: true })} className='absolute z-[1] top-[15px] right-[15px] cursor-pointer'>
        <div className='relative w-[27.5px] h-[22.5px]'>
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
<<<<<<< Updated upstream
        src='/Images/TutorProfile/tutor.png'
        alt='tutor'
        layout='fill'
        objectFit='contain'
=======
        src={`https://akbh.s3.ap-south-1.amazonaws.com/skillshare/user/profile_img/${user_data.profile_img}`}
        height={327}
        width={224}
        alt="yo"
>>>>>>> Stashed changes
      />
    </div>
  )
}

const ProfileChip = () => {
  return (
    <div className='flex items-center justify-between absolute lg:bottom-[100px] bottom-[60px] lg:left-[60px] left-[30px] sm:w-[300px] w-[216px] h-[40px] bg-[#FFFFFF] rounded-full px-4 py-2 font-roboto shadow-xl'>
      <div>
<<<<<<< Updated upstream
        <svg width="5" height="20" viewBox="0 0 5 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="14.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="26.5" r="2.5" fill="#FC4D6D" />
        </svg>
=======
        <div className="font-bold">
          <div className=" mt-1 text-[24px] tracking-[0.175em]">
            {user_data.headline}
          </div>
          <h1 className=" flex gap-[17px] text-[56px]">
            <span> {user_data.name}</span>
            <div className="inline-block h-[21px] w-[21px]">
              {user_data.active ? (
                <Image
                  src={'/Images/TutorProfile/svg/right-ok.svg'}
                  height={21}
                  width={21}
                  alt="yo"
                />
              ) : null}
            </div>
            {/* <div className="inline-block">
              <Image
                src={'/Images/TutorProfile/svg/australia.svg'}
                height={19}
                width={19}
              />
            </div> */}
          </h1>
        </div>
        <p className="mb-[18px] font-[600] tracking-[.065em]">
          {user_data.teaching_experience}
        </p>
        <div className="text-[18px] font-[500]">
          <TutorDescription user_data={user_data} />
          <div className="mt-[28px] flex items-center gap-[27px]">
            <Link href={'/'}>
              <a className="btn-shadow rounded-full bg-[#FC4D6D] px-[19px]   py-[9px] font-bold tracking-[0.01em] transition delay-75 ease-in-out hover:bg-[#e02e4ff5]">
                Book Trial
              </a>
            </Link>
            <div className="text-[20px] normal-case ">
              {' '}
              Rs.{user_data.hourly_rate}/hr
            </div>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>

<<<<<<< Updated upstream
      <button className='text-[#FC4D6D] font-extrabold text-[16px]'>
        Edit Profile
      </button>

      <button className='text-[#828282] font-extrabold text-[16px]'>
        Upload Profile
      </button>
=======
function TutorDescription({ user_data }) {
  return (
    <div className="ml-[7px] font-[500] tracking-[0.065em]  ">
      <div className="flex gap-[10px]  ">
        <div className="ml-[-7px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/topper-cap.svg'}
            height={20}
            width={22}
            alt="yo"
          />
        </div>
        <span>
          Teaches{' '}
          {user_data?.subject_taught_id
            ?.map(function (elem) {
              return SUBJECTS[elem]
            })
            .join(', ')}{' '}
          language
        </span>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="  ml-[-4px]  mr-[5px] flex justify-center">
          {/* <Image
            src={'/Images/TutorProfile/svg/message.svg'}
            height={13.5}
            width={13.5}
          /> */}
          <FiMessageCircle />
        </div>
        <span>
          Speaks {/* FIX */}
          {/* {user_data.language_spoken
            .map(function (elem) {
              return elem.language
            })
            .join(', ')} */}
        </span>
      </div>
      <div className="flex gap-[10px]  ">
        <div className="ml-[-2px] mr-[4px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/circles.svg'}
            height={16}
            width={16}
            alt="yo"
          />
        </div>
        <span>0 lessons</span>
      </div>
>>>>>>> Stashed changes
    </div>
  )
}