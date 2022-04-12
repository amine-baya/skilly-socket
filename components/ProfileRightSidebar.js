import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar() {
  const router = useRouter()
  return (
    <div className="mt-5 mr-7 ml-3 whitespace-nowrap font-poppins lg:mt-[110px] xl:mr-14 xl:ml-[26px]">
      <nav>
        <ul className="flex flex-row justify-between gap-y-[19px] overflow-x-scroll text-[14px] lg:flex-col lg:whitespace-nowrap ">
          <li
            className={` font-roboto font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/basicDetails'
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:text-[#FC4D6D]'
                : 'text-[#878787]'
            } `}
          >
            <Link href="/tutorDashboard/myprofile/basicDetails">
              <a>Basic Details</a>
            </Link>
          </li>
          <li
            className={` font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/timeAvailability'
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/timeAvailability">
              <a>Time Availability</a>
            </Link>
          </li>

          <li
            className={` font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/photo'
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/photo">
              <a>Photo</a>
            </Link>
          </li>
          <li
            className={` font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/video'
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/video">
              <a>Video</a>
            </Link>
          </li>
          <li
            className={` font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/qualifications'
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:lg:text-[#FC4D6D] '
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/qualifications">
              <a>Qualifications</a>
            </Link>
          </li>
          {/* <li
            className={` font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/settings'
                ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/settings">
              <a>Profile</a>
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className=" hidden h-auto w-auto rounded-md bg-[#FC4D6D] py-2.5 px-[13px] font-roboto text-lg font-medium text-white lg:block">
        <Link href="/tutorDashboard/myprofile/settings" passHref>
          <label>Preview Profile</label>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
