import Link from "next/link"
import { useRouter } from "next/router";
function SideBar () {
    const router = useRouter();
    return (
     <div className="p-5 bg-white rounded-r-lg ">
         <span className="bg-gradient-to-r from-[#feae78] to-[#f94161] bg-clip-text text-2xl font-bold tracking-widest text-transparent block pb-36">
                  Dashboard
                </span>
         <nav>
             <ul>
              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/about" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/myprofile/about"><a>Home</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/basicDetails" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/myprofile/basicDetails"><a>My Profile</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/reviews" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/reviews"><a>My Reviews</a></Link>
              </li>

              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/messages" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/messages"><a>Messages</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/sessions" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/sessions"><a>My Sessions</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/revenue" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/revenue"><a>My Revenue</a></Link>
              </li>
              <li className={`block text-xl text-center justify-center font-bold pb-9 ${router.pathname === "/tutorDashboard/myprofile/settings" ? "bg-pink rounded-2xl h-5 mb-5" :null} font-roboto`}>
             <Link href="/tutorDashboard/settings"><a>Settings</a></Link>
              </li>
            
             </ul>
         </nav>
       
     </div>
    )
  }
  
  export default SideBar
  