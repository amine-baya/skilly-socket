import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar() {
  const router = useRouter()
  return (
    <div className="mt-9 hidden py-7 pr-7 pl-5 lg:block whitespace-nowrap">
      <nav>
        <ul className="font-medium">
          <li
            className={`block pb-5  font-roboto  ${
              router.pathname === '/tutorDashboard/myprofile/basicDetails'
                ? 'text-[#FC4D6D]'
                : 'text-[#878787]'
            } `}
          >
            <Link href="/tutorDashboard/myprofile/basicDetails">
              <a>Basic Details</a>
            </Link>
          </li>
          <li
            className={`block pb-5      ${
              router.pathname === '/tutorDashboard/myprofile/timeAvailability'
                ? 'text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[#FC4D6D]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/timeAvailability">
              <a>Time Availability</a>
            </Link>
          </li>

          <li
            className={`block pb-5     ${
              router.pathname === '/tutorDashboard/myprofile/photo'
                ? 'text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[#FC4D6D]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/photo">
              <a>Photo</a>
            </Link>
          </li>
          <li
            className={`block pb-5    ${
              router.pathname === '/tutorDashboard/myprofile/video'
                ? 'text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[#FC4D6D]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/video">
              <a>Video</a>
            </Link>
          </li>
          <li
            className={`block pb-5   ${
              router.pathname === '/tutorDashboard/myprofile/qualifications'
                ? 'text-[#FC4D6D]'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[#FC4D6D]  font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/qualifications">
              <a>Qualifications</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className=" h-auto rounded-md bg-[#FC4D6D] p-2.5 font-semibold text-white ">
        <Link href="/tutorDashboard/myprofile/settings">
          <label>Preview Profile</label>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
