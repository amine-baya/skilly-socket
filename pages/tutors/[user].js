import AboutTutor from 'components/TutorProfile/AboutTutor'
import Resume from 'components/TutorProfile/Resume'
import Reviews from 'components/TutorProfile/Reviews'
import Schedule from 'components/TutorProfile/Schedule'
import TutorHeroPage from 'components/TutorProfile/TutorHeroPage'
import TutorHeroPageMobile from 'components/TutorProfile/TutorHeroPageMobile'
import TutorFooter from 'components/TutorProfile/TutorFooter'

import { useState, useEffect } from 'react'
import { getLocalStorage } from 'utils/cookies'
import { baseUrl, getTutorPublicProfile } from '../../utils/constants'
import Server from '../../utils/Server'
import axios from 'axios'
async function TutorProfile({ tutor }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    if (!getLocalStorage('user')) {
      setUser({ _id: '1111', role: 'STUDENT' })
    } else {
      setUser(getLocalStorage('user'))
    }
  }, [])
  // await axios({
  //   method: 'GET',
  //   url: getTutorPublicProfile,
  //   baseURL: baseUrl,
  //   params: { user_id: context.query.user },
  // })
  //   .then(function (response) {
  //     // tutor = response
  //     console.log(response)
  //     // return { tutor: response }
  //     // console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //     console.log({ tutor: error })
  //   })
  return (
    <div className="full-page-snap-main">
      {/* <TutorHeroPageMobile tutor={tutor} user={user} />
      <TutorHeroPage tutor={tutor} user={user} />
      <Reviews />
      <AboutTutor tutor={tutor} user={user} />
      <Schedule />
      <Resume tutor={tutor} /> */}
      <TutorFooter />
    </div>
  )
}

TutorProfile.getInitialProps = async function (context) {
  //   const { user } = context.query
  //   const res = await fetch(`http://localhost:3000/api/tutors/${user}`)
  //   const tutor = await res.json()
  //   return { tutor }
  // const tutor = await Server.get(getTutorPublicProfile, context.query.user)
  let tutor = 'sfd'
  // await axios({
  //   method: 'GET',
  //   url: getTutorPublicProfile,
  //   baseURL: baseUrl,
  //   params: { user_id: context.query.user },
  // })
  //   .then(function (response) {
  //     tutor = response
  //     console.log(response)
  //     return { tutor: response.data }
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //     return { tutor: { _id: 'sdf' } }
  //   })
  // console.log(tutor)
  return { tutor: 'asd' }
}

export default TutorProfile
