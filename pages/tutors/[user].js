import AboutTutor from 'components/TutorProfile/AboutTutor'
import Resume from 'components/TutorProfile/Resume'
import Reviews from 'components/TutorProfile/Reviews'
import Schedule from 'components/TutorProfile/Schedule'
import TutorHeroPage from 'components/TutorProfile/TutorHeroPage'
import TutorHeroPageMobile from 'components/TutorProfile/TutorHeroPageMobile'
import TutorFooter from 'components/TutorProfile/TutorFooter'

function TutorProfile({ tutor }) {
  return (
    <div className="full-page-snap-main">
      <TutorHeroPageMobile />
      <TutorHeroPage />
      <Reviews />
      <AboutTutor />
      {/* <Schedule /> */}
      <Resume />
      <TutorFooter />
    </div>
  )
}

TutorProfile.getInitialProps = async function (context) {
  //   const { user } = context.query
  //   const res = await fetch(`http://localhost:3000/api/tutors/${user}`)
  //   const tutor = await res.json()
  //   return { tutor }
  return { tutor: 0 }
}

export default TutorProfile
