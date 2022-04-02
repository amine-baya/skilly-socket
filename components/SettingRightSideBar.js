import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


function SettingRightSideBar() {
    const router = useRouter()
  return (
    <div className="lg:mt-[110px] mt-5 xl:mr-14 mr-7 xl:ml-[26px] ml-3 whitespace-nowrap font-poppins">
    <nav>
      <ul className="flex flex-row overflow-x-scroll justify-between gap-y-[19px] lg:whitespace-nowrap text-[14px] lg:flex-col ">
        <li
          className={` font-roboto font-semibold   lg:text-xl ${
            router.pathname === '/tutorDashboard/settings/nameAndLogin'
              ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
              : 'text-[#878787]'
          } `}
        >
          <Link href="/tutorDashboard/settings/nameAndLogin">
            <a>Name And Login</a>
          </Link>
        </li>
        <li
          className={` font-roboto font-semibold   lg:text-xl ${
            router.pathname === '/tutorDashboard/settings/settingNotification'
              ? 'lg:text-[#FC4D6D] lg:border-none border-b-4 border-[#FC4D6D]'
              : 'text-[#878787]'
          } `}
        >
          <Link href="/tutorDashboard/settings/settingNotification">
            <a>Notification</a>
          </Link>
        </li>

       
      </ul>
    </nav>
   
  </div>
  )
}

export default SettingRightSideBar