import { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import SearchBox from 'components/Layouts/Navbar/Searchbox'
import axios from 'axios'
import CourseCart from 'components/CourseCart'
import CalenderPopUp from 'components/PaymentPage/PopUps/CalenderPopUp'
import { useRecoilState } from 'recoil'
import { openPopUps, totalSelectedSlots, selectedTutor } from 'Atoms/PopUpAtoms'
import {
  baseUrlProfilePic,
  LanguageLevel,
  LANGUAGES,
  SUBJECTS,
  typesenseUrl,
} from 'utils/constants'
import Link from 'next/link'
import Image from 'next/image'

const Tutors = () => {
  const [tutorData, setTutorData] = useState(null)
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [selectedTutorData, setSelectedTutor] = useRecoilState(selectedTutor)

  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [totalSelectedTimes, setTotalSelectedTimes] = useRecoilState(totalSelectedSlots)

  useEffect(() => {
    async function defaultFunc() {
      let res = await axios.get(typesenseUrl + '/tutor/search', {
        params: { q: searchText },
      })

      if (res && res.data && res.data.success) {
        console.log(res.data.data.hits, 'res.data.data.hits')
        setTutorData(res.data.data.hits)
        setTotalCount(res.data.data.out_of)
        setCount(res.data.data.found)
      }
    }
    defaultFunc()
  }, [searchText, page])

  return (
    <main className="mx-auto flex h-[calc(100vh-79px)] w-full max-w-[calc(1440px-160px)] snap-y snap-mandatory flex-wrap items-center justify-evenly gap-y-[6rem] gap-x-2 overflow-scroll overflow-x-hidden scroll-smooth py-11 transition  delay-150 duration-1000 ease-in-out lg:justify-around">

      {tutorData
        ? tutorData.map(function (dd, key) {
          return (
            // <Link href={'/tutors'} passHref key={key}>
            <CourseCart
              topRightTitle={'top tutors'}
              key={key}
              coverImg={`${baseUrlProfilePic}${dd.background_pic}`}
              tutorName={dd.tutor_name}
              setOpenPopUp={setOpenPopUp}
              setSelectedTutor={setSelectedTutor}
              countryLogo={'/Images/CourseCart/united-kingdom.svg'}
              tutorImg={`${baseUrlProfilePic}${dd.profile_img}`}
              tutorData={dd}
            />
            // </Link>
          )
        })
        : null
      }


      {/* TimeSlot PopUp */}
      {openPopUp.calendarPopUp && (
        <div className="absolute z-40 flex w-full items-center justify-center bg-gray-50/5">
          <CalenderPopUp
            tutor={selectedTutorData}
            setOpenPopUp={setOpenPopUp}
            setTotalSelectedTimes={setTotalSelectedTimes}
            link={'/payment'}
          />
        </div>
      )
      }
    </main >
  )
}

export default Tutors
