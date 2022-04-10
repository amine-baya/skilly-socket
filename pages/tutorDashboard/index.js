import { useEffect } from 'react'
import Router from 'next/router'
import Server from '../../utils/Server'
import { getTutorProfile, ROLE_NAME } from '../../utils/constants'
import { getLocalStorage, setLocalStorage } from '../../utils/cookies'
import { getCookie } from 'cookies-next'
import Link from 'next/link'

const TutorDashboard = () => {
  useEffect(() => {
    isAuth()
  }, [])

  const isAuth = async () => {
    if (getCookie('token') && getCookie('role') === ROLE_NAME.TUTOR) {
      const user = await Server.get(getTutorProfile)
      if (user.success && user.data.role === ROLE_NAME.TUTOR) {
        setLocalStorage('user', user.data)
        if (!user.data.profile_update) {
          Router.push('/tutorDashboard/myprofile/basicDetails')
        }
      } else {
        Router.push('/auth/tutor/login')
      }
    } else {
      Router.push('/auth/tutor/login')
    }
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="fixed -z-10 h-full w-full">
          <Link href={'/tutorDashboard/about'}>
            <a className={`whitespace-nowrap  text-[18px]   font-[600]`}>
              Start
            </a>
          </Link>
          <br />
          <Link href={'/tutorProfile'}>
            <a className={`whitespace-nowrap  text-[18px]   font-[600]`}>
              View Profile
            </a>
          </Link>
          <br />
          <Link href={'/tutors'}>
            <a className={`whitespace-nowrap  text-[18px]   font-[600]`}>
              Tutors Search
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default TutorDashboard
