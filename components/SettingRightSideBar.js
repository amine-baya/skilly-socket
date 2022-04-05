import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function SettingRightSideBar() {
  const router = useRouter()
  return (
    <div className="mt-5 mr-7 ml-3 whitespace-nowrap font-poppins lg:mt-[110px] xl:mr-14 xl:ml-[26px]">
      <nav>
        <ul className="flex flex-row justify-between gap-y-[19px] overflow-x-scroll text-[14px] lg:flex-col lg:whitespace-nowrap ">
          <li
            className={` font-roboto font-semibold   lg:text-xl ${
              router.pathname === '/tutorDashboard/settings/nameAndLogin'
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:text-[#FC4D6D]'
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
                ? 'border-b-4 border-[#FC4D6D] lg:border-none lg:text-[#FC4D6D]'
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
