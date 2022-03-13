import { useEffect } from 'react'
import Router from 'next/router'
import Server from '../../utils/Server'
import { getUserProfile, ROLE_NAME } from '../../utils/constants'
import { setLocalStorage } from '../../utils/cookies'
import { getCookie } from 'cookies-next'

const tutorDashboard = () => {
  useEffect(() => {
    if (true) {
      isAuth()
    }
  }, [])

  const isAuth = async () => {
    if (getCookie('token')) {
      const user = await Server.get(getUserProfile)
      if (user.success && user.data.role_name === ROLE_NAME.TUTOR) {
        const login_response = user.data
        setLocalStorage('user', {
          ...login_response,
          ...login_response.tutor_details,
          ...login_response.tutor_profile,
          tutor_details: undefined,
          tutor_profile: undefined,
        })
      } else {
        Router.push('/auth/login')
      }
    } else {
      Router.push('/auth/login')
    }
  }

  return 'This is Tutor Dashboard'
}

export default tutorDashboard
