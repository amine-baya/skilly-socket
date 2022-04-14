import Image from 'next/image';
import Link from 'next/link';
import { PencilIcon } from "@heroicons/react/solid";

function AboutTutor() {
  return (
    <div className="snap-fullPage relative mx-auto flex flex-col sm:items-center items-start lg:justify-center lg:gap-0 gap-4 px-4">
      <TopTitle />

      {/* mainContainer For lg deivces */}
      <main className='hidden lg:flex items-center justify-center flex-wrap-reverse gap-8'>
        <Video />
        <Description />
      </main>

      {/* mainContainer For lg deivces */}
      <main className='lg:hidden flex flex-col items-start justify-center md:gap-6 gap-3'>
        <DescriptionPhone />
        <VideoPhone />
      </main>

      {/* skills background */}
      <p className='absolute lg:block hidden font-poppins font-semibold text-[#F1F1F1] text-center -z-[10] text-[350px] bottom-[-150px] tracking-widest'>
        SKILLS
      </p>
    </div>
  )
}

export default AboutTutor;

const TopTitle = () => {
  return (
    <div className='flex flex-col lg:items-center items-start justify-center lg:gap-4 gap-2 font-poppins capitalize tracking-wide'>
      <p className='hidden lg:inline-block font-bold text-[#FC4D6D]'>
        About us
      </p>
      <h2 className="text-2xl font-semibold text-[#5F5F5F]">
        About the tutor
      </h2>
      <span className='hidden lg:inline-block'>
        <SmallLine />
      </span>
      <span className='lg:hidden'>
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
    <div className=" mx-auto  flex w-full h-auto  flex-col gap-4 sm:w-[467px] md:w-auto ">
      <div className="  md:white-linear-gradient rounded-lg bg-gradient-to-r  from-[#FD4E6D] to-[#FDA02F]  p-1.5 sm:h-[302px] sm:w-[467px] h-[302px] md:rounded-xl  ">
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
                alt=''
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
                  alt=''
                />
              ))}
            </div>
            <div className=" text-center font-poppins text-[14px] font-[600] text-[#5F5F5F]  ">
              ( 36 reviews )
            </div>
          </div>
        </div>
      </div>

      <button
        className="rounded-lg border-2 border-[#FC4D6D] py-1.5  text-center text-lg font-semibold capitalize text-[#FC4D6D] md:order-2 md:text-[22px]">
        send message
      </button>
    </div>
  )
}

// for md and sm devices
function VideoPhone(props) {
  // overflow-hidden  rounded-xl bg-gradient-to-r from-[#FD4E6D] to-[#FDA02F] p-1
  return (
    <div className="mx-auto flex w-full h-auto flex-col gap-4 sm:w-[467px] md:w-auto ">
      <div className="md:white-linear-gradient rounded-lg bg-gradient-to-r from-[#FD4E6D] to-[#FDA02F]  p-1.5 md:h-[302px] sm:w-[467px] h-[200px] md:rounded-xl  ">
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
                alt=''
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
                  alt=''
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

const Description = () => {
  return (
    <div className='flex flex-col items-end justify-between gap-3 h-full sm:w-[467px] w-full font-roboto'>
      {/* Edit Button */}
      <button className='flex items-center justify-center gap-3 font-semibold text-[#FC4D6D]'>
        <span className='w-5'>
          <PencilIcon />
        </span>
        <p>
          Edit Description
        </p>
      </button>

      {/* Description */}
      <article className='flex flex-col items-center justify-between gap-2 font-medium text-[#858585] capitalize tracking-wider'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus dignissim elit rutrum cras tincidunt. Aliquet quis et, elit ultricies aliquam. Pulvinar sagittis enim, id amet cursus amet. Lectus auctor velit vitae commodo. Tincidunt senectus tincidunt ac et pellentesque turpis nulla morbi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus dignissim elit rutrum cras tincidunt. Aliquet quis et, elit ultricies aliquam. Pulvinar sagittis enim, id amet cursus amet. Lectus auctor velit vitae commodo. Tincidunt senectus tincidunt ac et pellentesque turpis nulla morbi.
        </p>
      </article>

      {/* Buttons */}
      <div className='flex items-center w-full sm:justify-evenly justify-between font-poppins'>
        <button className='w-[205px] h-[45px] rounded-full text-center bg-[#FC4D6D] text-white font-bold shadow-xl tracking-wider'>
          Book Trail Session
        </button>
        <p className='font-semibold text-[#565656]'>
          Rs.999/hr
        </p>
      </div>
    </div>
  )
}

// for md and sm devices
const DescriptionPhone = () => {
  return (
    <div className='flex flex-col items-end justify-between md:gap-3 gap-2 h-full sm:w-[467px] w-full font-roboto'>
      {/* Edit Button */}
      <button className='flex items-center justify-center gap-3 font-semibold text-[#FC4D6D]'>
        <span className='w-5'>
          <PencilIcon />
        </span>
        <p>
          Edit Description
        </p>
      </button>

      {/* Description */}
      <article className='flex flex-col items-center font-medium text-[#858585] capitalize tracking-wider'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus dignissim elit rutrum cras tincidunt. Aliquet quis et, elit ultricies aliquam. Pulvinar sagittis enim, id amet cursus amet. Lectus auctor velit vitae commodo. Tincidunt senectus tincidunt ac et pellentesque turpis nulla morbi.
        </p>
      </article>

      {/* Buttons */}
      <div className='flex items-center w-full sm:justify-evenly justify-between font-poppins'>
        <button className='w-[205px] h-[45px] rounded-full text-center bg-[#FC4D6D] text-white font-bold shadow-xl tracking-wider'>
          Book Trail Session
        </button>
        <p className='font-semibold text-[#565656]'>
          Rs.999/hr
        </p>
      </div>
    </div>
  )
}