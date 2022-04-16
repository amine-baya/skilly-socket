import AboutTutor from '../components/TutorProfile/AboutTutor';
import Resume from '../components/TutorProfile/Resume';
import Reviews from '../components/TutorProfile/Reviews';
import Schedule from '../components/TutorProfile/Schedule';
import TutorHeroPage from '../components/TutorProfile/TutorHeroPage';
import TutorHeroPageMobile from '../components/TutorProfile/TutorHeroPageMobile';
import TutorFooter from "../components/TutorProfile/TutorFooter";

function TutorProfile() {
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


export default TutorProfile