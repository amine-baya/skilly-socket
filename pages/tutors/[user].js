import AboutTutor from 'components/TutorProfile/AboutTutor'
import Resume from 'components/TutorProfile/Resume'
import Reviews from 'components/TutorProfile/Reviews'
import Schedule from 'components/TutorProfile/Schedule'
import TutorHeroPage from 'components/TutorProfile/TutorHeroPage'
import TutorHeroPageMobile from 'components/TutorProfile/TutorHeroPageMobile'
import TutorFooter from 'components/TutorProfile/TutorFooter'
import CalenderPopUp from 'components/PaymentPage/PopUps/CalenderPopUp'
import { useState, useEffect } from 'react'
import { getLocalStorage } from 'utils/cookies'
import { getTutorPublicProfile, baseUrl } from 'utils/constants'
import fetch from 'isomorphic-fetch'
import { withRouter } from 'next/router'
import { openPopUps, selectedTutor } from '../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'

function TutorProfile({ router }) {
  console.log(router.query.user)
  const [user, setUser] = useState({})
  const [tutor, setTutor] = useState({})
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)

  // useEffect(() => {
  //   setUser(getLocalStorage('user'))
  //   if (!getLocalStorage('user')) {
  //     setUser({ _id: '1111', role: 'STUDENT' })
  //   }
  //   const res = fetch(
  //     `${baseUrl}${getTutorPublicProfile}?user_id=${router.query.user}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data)
  //       setTutor(data.data)
  //     })
  //   // const tutor = res
  //   console.log(tutor)
  // }, [])
  useEffect(() => {
    setUser(getLocalStorage('user'))
    if (!getLocalStorage('user')) {
      setUser({ _id: '1111', role: 'STUDENT' })
    }
    const res = fetch(
      `${baseUrl}${getTutorPublicProfile}?user_id=${router.query.user}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data)
        setTutor(data.data)
      })
    // const tutor = res
    console.log(tutor)
  }, [router])

  return (
    <div className="full-page-snap-main">
      <TutorHeroPageMobile tutor={tutor} user={user} />
      <TutorHeroPage tutor={tutor} user={user} />
      <Reviews />
      <AboutTutor tutor={tutor} user={user} />
      {/* TimeSlot PopUp */}
      {openPopUp.calendarPopUp && (
        <div className="absolute z-[99999999999999999999] flex w-full items-center justify-center bg-gray-50/5">
          <CalenderPopUp link={'/payment'} />
        </div>
      )}
      <Schedule />
      <Resume tutor={tutor} />
      <TutorFooter />
    </div>
  )
}

// TutorProfile.getInitialProps = async function (context) {
//   //   const { user } = context.query

//   //   return { tutor }
//   return {
//     tutor: {
//       _id: '625812ecd49b556dd4b2d77bXX',
//       first_name: 'Mohit',
//       last_name: 'Chahal',
//       name: 'Mohit Chahal',
//       // email: 'test@test.com',
//       other_languages: ['English', 'Danish'],
//       role: 'TUTOR',
//       profile_update: false,
//       is_verified: true,
//       is_active: false,
//       subjects_and_pricing: [{ subject: '-', price: 0, currency_format: '-' }],
//       qualifications: [
//         {
//           qualification_type: 'Experience',
//           qualification_title: 'Teaching Programming',
//           qualification_duration_from: '1970-01-01T00:00:02.012Z',
//           qualification_duration_to: '1970-01-01T00:00:02.015Z',
//         },
//       ],
//       availability: [
//         {
//           day: 'monday',
//           slots: [
//             { slot_id: 'v29X7VhM84vYRntyeTID4', from: '01:30', to: '12:30' },
//           ],
//         },
//         {
//           day: 'tuesday',
//           slots: [
//             { slot_id: 'UxaNEHaRJsfCVJeenVBB3', from: '01:30', to: '07:30' },
//           ],
//         },
//       ],
//       // createdAt: '2022-04-14T12:26:20.142Z',
//       // updatedAt: '2022-04-17T12:01:36.964Z',
//       // __v: 0,
//       country: 'India',
//       english_fluency: 'Full Professional Proficiency',
//       native_language: 'Hindi',
//       timezone: 'Asia/Kolkata',
//     },
//   }
// }

export default withRouter(TutorProfile)
