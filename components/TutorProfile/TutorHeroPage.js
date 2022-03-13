import Image from 'next/image'
import Link from 'next/link'
import { FiMessageCircle } from 'react-icons/fi'

export default function TutorHeroPage() {
  return (
    <div className="relative hidden   h-[calc(100vh-79px)]  overflow-hidden md:flex">
      <BackgroundFullImg />
      <BottomText />
      <div className="tutor-gradient -z-10" />
      <main className="!z-50  mt-[10%] ml-[7%] flex h-[327px]   w-[822px] gap-[27px]  font-poppins ">
        <LeftImg css={''} />
        <RightText css={''} />
      </main>
    </div>
  )
}

function BackgroundFullImg() {
  return (
    <div className="absolute top-0 -z-30  h-full  w-full ">
      <Image
        priority
        src={'/Images/TutorProfile/tutor-hero-background.png'}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
function BottomText() {
  return (
    <div className=" absolute  bottom-4   -z-20  flex w-full justify-center gap-[66px] text-center font-poppins  font-bold uppercase tracking-[0.19em]  opacity-80 md:text-7xl  xl:text-[6.5rem]">
      <span className="text-white">professional</span>
      <span className="text-black">Chef</span>
    </div>
  )
}

function LeftImg() {
  return (
    <div className="border-3 overflow-hidden rounded-xl border-white ">
      <Image
        src={'/Images/TutorProfile/tutor-img.png'}
        height={327}
        width={224}
      />
    </div>
  )
}

function RightText({ css }) {
  return (
    <div className={`  h-[327px]  capitalize text-white `}>
      <div>
        <div className="font-bold">
          <div className=" mt-1 text-[24px] tracking-[0.175em]">hello i'm</div>
          <h1 className=" flex gap-[17px] text-[56px]">
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
        <p className="mb-[18px] font-[600] tracking-[.065em]">
          Qualified TEFL tutor and accent coach with experience!
        </p>
        <div className="text-[18px] font-[500]">
          <TutorDescription />
          <div className="mt-[28px] flex items-center gap-[27px]">
            <Link href={'/'}>
              <a className="btn-shadow rounded-full bg-[#FC4D6D] px-[19px]   py-[9px] font-bold tracking-[0.01em] transition delay-75 ease-in-out hover:bg-[#e02e4ff5]">
                Book Trial
              </a>
            </Link>
            <div className="text-[20px] normal-case "> Rs.999/hr</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TutorDescription() {
  return (
    <div className="ml-[7px] font-[500] tracking-[0.065em]  ">
      <div className="flex gap-[10px]  ">
        <div className="ml-[-7px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/topper-cap.svg'}
            height={20}
            width={22}
          />
        </div>
        <span>Teaches English language</span>
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
        <span>Speaks English Native Italian B2</span>
      </div>
      <div className="flex gap-[10px]  ">
        <div className="ml-[-2px] mr-[4px] flex justify-center">
          <Image
            src={'/Images/TutorProfile/svg/circles.svg'}
            height={16}
            width={16}
          />
        </div>
        <span>207 lessons</span>
      </div>
    </div>
  )
}
