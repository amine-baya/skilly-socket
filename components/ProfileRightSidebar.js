import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar() {
  const router = useRouter()
  return (
    <div className="lg:mt-9 p-3 whitespace-nowrap">
      <nav>
        <ul className="flex flex-row overflow-x-scroll justify-between gap-3 lg:whitespace-nowrap text-[14px] lg:flex-col ">
          <li
            className={` font-roboto font-semibold  lg:pb-9 lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/basicDetails'
                ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
                : 'text-[#878787]'
            } `}
          >
            <Link href="/tutorDashboard/myprofile/basicDetails">
              <a>Basic Details</a>
            </Link>
          </li>
          <li
            className={` font-semibold  lg:pb-9 lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/timeAvailability'
                ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/timeAvailability">
              <a>Time Availability</a>
            </Link>
          </li>

          <li
            className={` font-semibold  lg:pb-9 lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/photo'
                ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/photo">
              <a>Photo</a>
            </Link>
          </li>
          <li
            className={` font-semibold  lg:pb-9 lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/video'
                ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/video">
              <a>Video</a>
            </Link>
          </li>
          <li
            className={` font-semibold  lg:pb-9 lg:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/qualifications'
                ? 'lg:lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D] '
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/qualifications">
              <a>Qualifications</a>
            </Link>
          </li>
          {/* <li
            className={` font-semibold  lg:pb-9 lg:text-xl ${
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
      <div className=" h-auto rounded-md bg-[#FC4D6D] p-2.5 font-semibold text-white lg:block hidden ">
        <Link href="/tutorDashboard/myprofile/settings">
          <label>Preview Profile</label>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
