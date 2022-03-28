import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";
import { ActiveHomeIcon, ActiveProfileIcon, HomeIcon, MessageIcon, ProfileIcon, RevenueIcon, SessionIcon, SettingIcon } from "../icons";

function SideBar() {
    const router = useRouter();
    const links = [
        { name: 'Home', link: '/tutorDashboard/about', active: router.pathname === '/tutorDashboard/about', icons: <HomeIcon />, activeIcons: <ActiveHomeIcon /> },
        { name: 'My Profile', link: '/tutorDashboard/myprofile/basicDetails', active: router.pathname?.split('/').includes('myprofile'), icons: <ProfileIcon />, activeIcons: <ActiveProfileIcon /> },
        { name: 'My Reviews', link: '/tutorDashboard/myreviews', active: router.pathname === '/tutorDashboard/myreviews', icons: <ProfileIcon />, activeIcons: <ActiveProfileIcon /> },
        { name: 'Messages', link: '/tutorDashboard/messages', active: router.pathname === '/tutorDashboard/messages', icons: <MessageIcon />, activeIcons: <ActiveProfileIcon /> },
        { name: 'My Sessions', link: '/tutorDashboard/sessions', active: router.pathname === '/tutorDashboard/sessions', icons: <SessionIcon />, activeIcons: <ActiveProfileIcon /> },
        { name: 'My Revenue', link: '/tutorDashboard/revenue', active: router.pathname === '/tutorDashboard/revenue', icons: <RevenueIcon />, activeIcons: <ActiveProfileIcon /> },
        { name: 'Settings', link: '/tutorDashboard/settings', active: router.pathname === '/tutorDashboard/settings', icons: <SettingIcon />, activeIcons: <ActiveProfileIcon /> },
    ]
    return (
        <div className="p-5 bg-white rounded-r-lg hidden md:block ">
            <span className="bg-gradient-to-r from-[#feae78] to-[#f94161] bg-clip-text text-2xl font-bold tracking-widest text-transparent block pb-12 pt-2">
                Dashboard
            </span>
            <SideBarLinks links={links} />

        </div>
    )

    
}

export default SideBar

export function SideBarLinks({links , hideIcon = false}) {
    return <nav>
        <ul>
            {links.map((item, i) => (
                <li className={`block text-lg text-left align-center justify-center font-bold font-roboto px-1 py-1 mb-5 ${item.active ? "bg-pink rounded-2xl" : ""} font-roboto`}>
                    <Link href={item.link}>
                        <a className={`flex ${item.active ? "text-white" : null}`}>
                            { hideIcon ? null : item.active ? item.activeIcons : item.icons}
                            <span className="pl-3">{item.name}</span>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>;
}