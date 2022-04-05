import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ActiveHomeIcon,
  ActiveProfileIcon,
  HomeIcon,
  MessageIcon,
  ProfileIcon,
  RevenueIcon,
  ReviewIcon,
  SessionIcon,
  SettingIcon,
} from '../icons'
function SideBar() {
  const router = useRouter()
  const links = [
    {
      name: 'Home',
      link: '/tutorDashboard/homePage',
      active: router.pathname === '/tutorDashboard/homePage',
      icons: <HomeIcon />,
      activeIcons: <ActiveHomeIcon />,
    },
    {
      name: 'My Profile',
      link: '/tutorDashboard/myprofile/basicDetails',
      active: router.pathname?.split('/').includes('myprofile'),
      icons: <ProfileIcon />,
      activeIcons: <ActiveProfileIcon />,
    },
    {
      name: 'My Reviews',
      link: '/tutorDashboard/myreviews',
      active: router.pathname === '/tutorDashboard/myreviews',
      icons: <ReviewIcon />,
      activeIcons: <ReviewIcon />,
    },
    {
      name: 'Messages',
      link: '/tutorDashboard/messages',
      active: router.pathname === '/tutorDashboard/messages',
      icons: <MessageIcon />,
      activeIcons: <MessageIcon />,
    },
    {
      name: 'My Sessions',
      link: '/tutorDashboard/mySession',
      active: router.pathname === '/tutorDashboard/mySession',
      icons: <SessionIcon />,
      activeIcons: <SessionIcon />,
    },
    {
      name: 'My Revenue',
      link: '/tutorDashboard/revenue',
      active: router.pathname === '/tutorDashboard/revenue',
      icons: <RevenueIcon />,
      activeIcons: <RevenueIcon />,
    },
    {
      name: 'Settings',
      link: '/tutorDashboard/settings/nameAndLogin',
      active: router.pathname?.split('/').includes('settings'),
      icons: <SettingIcon />,
      activeIcons: <SettingIcon />,
    },
  ]
  return (
    <div className=" hidden w-[232px] min-w-[232px] max-w-[232px] whitespace-nowrap rounded-r-lg bg-white px-2 lg:block ">
      <span className="block bg-gradient-to-r from-[#FC4D6D] to-[#FDA02F] bg-clip-text py-8 text-center font-poppins text-2xl font-bold tracking-widest text-transparent">
        Dashboard
      </span>
      <SideBarLinks links={links} />
    </div>
  )
}

export default SideBar

export function SideBarLinks({ links, hideIcon = false }) {
  return (
    <nav className="w-full">
      <ul className="">
        {links.map((item, i) => (
          <li
            key={i}
            className={`align-center mb-5 block justify-center text-left font-roboto text-lg  font-bold ${
              item.active
                ? 'rounded-2xl bg-pink px-4 py-3 xl:px-5 2xl:px-9'
                : 'px-4 py-3 xl:px-5 2xl:px-9'
            } font-roboto`}
          >
            <Link href={item.link}>
              <a className={`flex ${item.active ? 'text-white' : null}`}>
                {hideIcon ? null : item.active ? item.activeIcons : item.icons}
                <span className="pl-3">{item.name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
