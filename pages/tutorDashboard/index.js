import { useEffect } from 'react'
import Router from 'next/router'
import { ROLE_NAME } from '../../utils/constants'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import { getLocalStorage } from '../../utils/cookies'

const TutorDashboard = () => {
  useEffect(() => {
    isAuth()
  }, [])

  const isAuth = async () => {
    if (getCookie('token') && getCookie('role') === ROLE_NAME.TUTOR) {
      const user_profile_update = getLocalStorage('user').profile_update
      if (!user_profile_update)
        Router.push('/tutorDashboard/myprofile/basicDetails')
    } else {
      Router.push('/auth/tutor/login')
    }
  }

  return (
    <>
      <div className="h-full w-full">
        <div className="fixed -z-10 h-full w-full">
          <Link href={'/tutorDashboard/myprofile/basicDetails'}>
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
