import React from 'react'
import { useRouter } from 'next/router'


function SettingRightSideBar() {
    const router = useRouter()
  return (
    <div className="lg:mt-9 p-3 whitespace-nowrap">
    <nav>
      <ul className="flex flex-row overflow-x-scroll justify-between gap-3 lg:whitespace-nowrap text-[14px] lg:flex-col ">
        <li
          className={` font-roboto font-semibold  lg:pb-9 lg:text-xl ${
            router.pathname === '/tutorDashboard/settings/nameAndLogin'
              ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
              : 'text-[#878787]'
          } `}
        >
          <Link href="/tutorDashboard/settings/settingNotification">
            <a>Name And Login</a>
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
            <a>Notification</a>
          </Link>
        </li>

       
      </ul>
    </nav>
   
  </div>
  )
}

export default SettingRightSideBar