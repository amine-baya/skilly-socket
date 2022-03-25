import Link from "next/link"
import { useRouter } from "next/router";

function SideBar () {
    const router = useRouter();
    return (
     <div className="mt-9 p-7">
         <nav>
             <ul>
              <li className={`block text-xl text-center justify-center font-semibold pb-9  font-roboto w-32 ${router.pathname === "/tutorDashboard/myprofile/basicDetails" ? "text-pink" : "text-[#878787]"} `}>
             <Link href="/tutorDashboard/myprofile/basicDetails"><a>Basic Details</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-semibold pb-9 ${router.pathname === "/tutorDashboard/myprofile/timeAvailability" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
             <Link href="/tutorDashboard/myprofile/timeAvailability"><a>Time Availability</a></Link>
              </li>

              <li className={`block text-xl text-center justify-center font-semibold pb-9 ${router.pathname === "/tutorDashboard/myprofile/photo" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
             <Link href="/tutorDashboard/myprofile/photo"><a>Photo</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-semibold pb-9 ${router.pathname === "/tutorDashboard/myprofile/video" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
             <Link href="/tutorDashboard/myprofile/video"><a>Video</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-semibold pb-9 ${router.pathname === "/tutorDashboard/myprofile/qualifications" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`}>
             <Link href="/tutorDashboard/myprofile/qualifications"><a>Qualifications</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-semibold pb-9 ${router.pathname === "/tutorDashboard/myprofile/settings" ? "text-pink" : "text-[#878787]"}  font-roboto w-32 router.pathname == "/" ? active :text-[pink]`} >
             <Link href="/tutorDashboard/myprofile/settings"><a>Profile</a></Link>
              </li>
            
             </ul>
         </nav>
       
     </div>
    )
  }
  
  export default SideBar
  