import Image from 'next/image'
import Link from 'next/link'
import { PencilIcon } from '@heroicons/react/solid'
import { openPopUps, selectedTutor } from '../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'
import DescriptionPopUp from './PopUps/DescriptionPopUp'
import { useEffect, useState } from 'react'
import CalenderPopUp from 'components/PaymentPage/PopUps/CalenderPopUp'
import { useRouter } from 'next/router'
import { getLocalStorage } from '../../utils/cookies'

function AboutTutor({ user, tutor }) {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)

  const router = useRouter()
  // const [reload, setReload] = useState(false)

  return (
    <div className="snap-fullPage relative mx-auto flex flex-col items-start gap-4 sm:items-center lg:justify-center lg:gap-0">
      {openPopUp.calendarPopUp && (
        <div className="absolute z-[99999999999999999999] flex w-full items-center justify-center bg-gray-50/5">
          <CalenderPopUp tutorTimezone={tutor.timezone} link={'/payment'} />
        </div>
      )}
      <TopTitle />

      {/* mainContainer For lg deivces */}
      <main className="mt-3 hidden flex-wrap-reverse items-center justify-center gap-8 lg:flex">
        <Video />
        <Description user={user} tutor={tutor} setOpenPopUp={setOpenPopUp} />
      </main>

      {/* mainContainer For lg deivces */}
      <main className="flex flex-col items-start justify-center gap-3 px-4 md:gap-6 lg:hidden">
        <DescriptionPhone
          user={user}
          tutor={tutor}
          setOpenPopUp={setOpenPopUp}
        />
        <VideoPhone />
      </main>

      {/* skills background */}
      <p className="absolute bottom-[-150px] -z-[10] hidden text-center font-poppins text-[350px] font-semibold tracking-widest text-[#F1F1F1] lg:block">
        SKILLS
      </p>

      {/* DescriptionPopUp */}
      {openPopUp.DescriptionPopUp && (
        <div className="absolute flex h-full w-full items-center justify-center bg-gray-500/50">
          <DescriptionPopUp
          // reload={setReload}
          />
        </div>
      )}
    </div>
  )
}

export default AboutTutor

const TopTitle = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 px-4 font-poppins capitalize tracking-wide lg:items-center lg:gap-4">
      <p className="hidden font-bold text-[#FC4D6D] lg:inline-block">
        About us
      </p>
      <h2 className="text-2xl font-semibold text-[#5F5F5F]">About the tutor</h2>
      <span className="hidden lg:inline-block">
        <SmallLine />
      </span>
      <span className="lg:hidden">
        <ThreeLine />
      </span>
    </div>
  )
}

function SmallLine() {
  return (
    <div className="flex h-[3px]">
      <div className="w-[32px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}

function ThreeLine() {
  return (
    <div className="flex h-[3px] gap-2">
      <div className="w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className="w-[6px] rounded-full bg-[#FC4D6D]" />
      <div className="w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}

// for lg devices
function Video(props) {
  // overflow-hidden  rounded-xl bg-gradient-to-r from-[#FD4E6D] to-[#FDA02F] p-1
  return (
    <div className=" mx-auto  flex h-auto w-full  flex-col gap-4 sm:w-[467px] md:w-auto ">
      <div className="  md:white-linear-gradient h-[302px] rounded-lg  bg-gradient-to-r from-[#FD4E6D]  to-[#FDA02F] p-1.5 sm:h-[302px] sm:w-[467px] md:rounded-xl  ">
        <div className="relative order-2 flex h-full w-full  items-center justify-center   overflow-hidden   rounded-xl  md:order-1     ">
          {/* <div className="relative order-2 flex items-center justify-center   overflow-hidden   rounded-xl  md:order-1 md:h-[486px] md:w-[430px]    "> */}
          {/* <Image
            priority
            src={`http://img.youtube.com/vi/${props.user_data.video_link}/0.jpg`}
            layout="fill"
            objectFit="cover"
          /> */}

          <div className="white-linear-gradient absolute  bottom-0" />
          <Link href={'#'}>
            <a className=" relative z-10 h-16 w-16 transition-all delay-150  ease-in-out hover:scale-[1.2] md:h-[76.67px] md:w-[76.67px]">
              <Image
                src={'/Images/TutorProfile/svg/video-play-btn.svg'}
                objectFit="cover"
                layout="fill"
                alt=""
              />
            </a>
          </Link>

          <div className="absolute  bottom-[15px] hidden flex-col  justify-center gap-[14px] md:flex">
            <div className=" flex justify-center gap-2 ">
              {Array.from(Array(5), (index) => index + 1).map((index) => (
                <Image
                  key={index}
                  src={'/Images/TutorProfile/svg/yellow-star.svg'}
                  height={19.38}
                  width={19.03}
                  alt=""
                />
              ))}
            </div>
            <div className=" text-center font-poppins text-[14px] font-[600] text-[#5F5F5F]  ">
              ( 36 reviews )
            </div>
          </div>
        </div>
      </div>

      <button className="rounded-lg border-2 border-[#FC4D6D] py-1.5  text-center text-lg font-semibold capitalize text-[#FC4D6D] md:order-2 md:text-[22px]">
        send message
      </button>
    </div>
  )
}

// for md and sm devices
function VideoPhone(props) {
  // overflow-hidden  rounded-xl bg-gradient-to-r from-[#FD4E6D] to-[#FDA02F] p-1
  return (
    <div className="mx-auto flex h-auto w-full flex-col gap-4 sm:w-[467px] md:w-auto ">
      <div className="md:white-linear-gradient h-[200px] rounded-lg bg-gradient-to-r from-[#FD4E6D]  to-[#FDA02F] p-1.5 sm:w-[467px] md:h-[302px] md:rounded-xl  ">
        <div className="relative order-2 flex h-full w-full  items-center justify-center   overflow-hidden   rounded-xl  md:order-1     ">
          {/* <div className="relative order-2 flex items-center justify-center   overflow-hidden   rounded-xl  md:order-1 md:h-[486px] md:w-[430px]    "> */}
          {/* <Image
            priority
            src={`http://img.youtube.com/vi/${props.user_data.video_link}/0.jpg`}
            layout="fill"
            objectFit="cover"
          /> */}

          <div className="white-linear-gradient absolute  bottom-0" />
          <Link href={'#'}>
            <a className=" relative z-10 h-16 w-16 transition-all delay-150  ease-in-out hover:scale-[1.2] md:h-[76.67px] md:w-[76.67px]">
              <Image
                src={'/Images/TutorProfile/svg/video-play-btn.svg'}
                objectFit="cover"
                layout="fill"
                alt=""
              />
            </a>
          </Link>

          <div className="absolute  bottom-[15px] hidden flex-col  justify-center gap-[14px] md:flex">
            <div className=" flex justify-center gap-2 ">
              {Array.from(Array(5), (index) => index + 1).map((index) => (
                <Image
                  key={index}
                  src={'/Images/TutorProfile/svg/yellow-star.svg'}
                  height={19.38}
                  width={19.03}
                  alt=""
                />
              ))}
            </div>
            <div className=" text-center font-poppins text-[14px] font-[600] text-[#5F5F5F]  ">
              ( 36 reviews )
            </div>
          </div>
        </div>
      </div>

      <button className="rounded-lg border-2 border-[#FC4D6D] py-1.5 text-center text-lg font-semibold capitalize text-[#FC4D6D] md:order-2 md:text-[22px]">
        send message
      </button>
    </div>
  )
}

const Description = ({ user, tutor }) => {
  // const [description, setDescription] = useState(tutor?.description)
  // if (user._id === tutor._id) {
  //   setDescription(getLocalStorage('user').description)
  // }
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [selectedTutorData, setSelectedTutor] = useRecoilState(selectedTutor)

  return (
    <div className="flex h-full w-full flex-col items-end  gap-3 font-roboto sm:w-[467px]">
      {/* TimeSlot PopUp */}

      {/* Edit Button */}
      {user?._id == tutor?._id ? (
        <button
          onClick={() => setOpenPopUp({ ...false, DescriptionPopUp: true })}
          className="flex items-center justify-center gap-3 font-semibold text-[#FC4D6D]"
        >
          <span className="w-5">
            <PencilIcon />
          </span>
          <p>Edit Description</p>
        </button>
      ) : (
        <div className="h-4"></div>
      )}

      {/* Description */}
      <article className="flex flex-col items-center justify-between gap-2 self-start font-medium capitalize tracking-wider text-[#858585]">
        {console.log('tutor is ', tutor)}
        {tutor?._id === user._id && user?.description ? (
          <p>{`${user.description}`}</p>
        ) : tutor?._id !== user._id && tutor?.description ? (
          <p>{`${tutor.description}`}</p>
        ) : tutor?._id !== user._id && tutor?.description ? (
          <p>{`${tutor.description}`}</p>
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
            dignissim elit rutrum cras tincidunt. Aliquet quis et, elit
            ultricies aliquam. Pulvinar sagittis enim, id amet cursus amet.
            Lectus auctor velit vitae commodo. Tincidunt senectus tincidunt ac
            et pellentesque turpis nulla morbi.
          </p>
        )}
      </article>

      {/* Buttons */}
      <div className="mt-auto flex w-full items-center justify-between font-poppins sm:justify-evenly">
        {user.role !== 'STUDENT' ? (
          <>
            <button
              // href={`/book/${tutor?._id}`}
              onClick={() => {
                setSelectedTutor(tutor?._id)
                // alert(tutor._id)
                setOpenPopUp && setOpenPopUp({ ...false, calendarPopUp: true })
              }}
              className="flex h-[45px] w-[205px] items-center justify-center rounded-full bg-[#FC4D6D] text-center font-bold tracking-wider text-white shadow-xl"
            >
              Book Trial Session
            </button>
            <p className="font-semibold text-[#565656]">Rs.999/hr</p>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

// for md and sm devices
const DescriptionPhone = ({ user, tutor, setOpenPopUp }) => {
  return (
    <div className="flex h-full w-full flex-col items-end justify-between gap-2 font-roboto sm:w-[467px] md:gap-3">
      {/* Edit Button */}
      {user?._id == tutor?._id ? (
        <button
          onClick={() => setOpenPopUp({ ...false, DescriptionPopUp: true })}
          className="flex items-center justify-center gap-3 font-semibold text-[#FC4D6D]"
        >
          <span className="w-5">
            <PencilIcon />
          </span>
          <p>Edit Description</p>
        </button>
      ) : (
        <div className="h-4"></div>
      )}
      {/* Description */}
      <article className="flex flex-col items-center font-medium capitalize tracking-wider text-[#858585]">
        {tutor?.description ? (
          <p>{`${tutor.description}`}</p>
        ) : (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus
            dignissim elit rutrum cras tincidunt. Aliquet quis et, elit
            ultricies aliquam. Pulvinar sagittis enim, id amet cursus amet.
            Lectus auctor velit vitae commodo. Tincidunt senectus tincidunt ac
            et pellentesque turpis nulla morbi.
          </p>
        )}
      </article>
      {/* Buttons */}
      <div className="flex w-full items-center justify-between font-poppins sm:justify-evenly">
        {user.role !== 'STUDENT' ? (
          <>
            <button className="h-[45px] w-[205px] rounded-full bg-[#FC4D6D] text-center font-bold tracking-wider text-white shadow-xl">
              Book Trail Session
            </button>
            <p className="font-semibold text-[#565656]">Rs.999/hr</p>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
