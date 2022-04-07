import { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import SearchBox from 'components/Layouts/Navbar/Searchbox'
import axios from 'axios'
import CourseCart from 'components/CourseCart'
import CalenderPopUp from 'components/PaymentPage/PopUps/CalenderPopUp'
import { useRecoilState } from 'recoil'
import { openPopUps, totalSelectedSlots } from 'Atoms/PopUpAtoms'
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

  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [totalSelectedTimes, setTotalSelectedTimes] =
    useRecoilState(totalSelectedSlots)

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
    <>
      <Head>
        <title>Skilly tree</title>
      </Head>
      <div className=" mt-8 flex justify-center">
        <SearchBox onSearch={(val) => setSearchText(val)} />
      </div>

      <div className=" my-8 mx-16 flex flex-wrap content-center justify-center gap-x-8 gap-y-8">
        {tutorData
          ? tutorData.map(function (dd, key) {
              return (
                <CourseCart
                  key={key}
                  topRightTitle={'top tutors'}
                  coverImg={`${baseUrlProfilePic}${dd.background_pic}`}
                  tutorName={dd.tutor_name}
                  countryLogo={'/Images/CourseCart/united-kingdom.svg'}
                  tutorImg={`${baseUrlProfilePic}${dd.profile_img}`}
                  tutorData={dd}
                />
              )
            })
          : null}
      </div>

      <main className="mx-auto flex h-[calc(100vh-79px)] w-full max-w-[calc(1440px-160px)] snap-y snap-mandatory flex-wrap items-center justify-evenly gap-y-[6rem] gap-x-2 overflow-scroll overflow-x-hidden scroll-smooth py-11 transition  delay-150 duration-1000 ease-in-out lg:justify-around">
        {Array.from(Array(15), (_, index) => index + 1).map((index) => (
          <Link href={'/tutors'} passHref key={index}>
            <CourseCart
              tutorId={index} //TODO Replace this with actual tutor id
              setOpenPopUp={setOpenPopUp}
              topRightTitle={'top tutors'}
              coverImg="/Images/CourseCart/girl-using-tablet.png"
              tutorName={'Radhakishan J.'}
              countryLogo={'/Images/CourseCart/united-kingdom.svg'}
              tutorImg={'/Images/CourseCart/girl-looking-up.png'}
            />
          </Link>
        ))}

        {/* TimeSlot PopUp */}
        {openPopUp.calendarPopUp && (
          <div className="absolute z-40 flex w-full items-center justify-center bg-gray-50/5">
            <CalenderPopUp
              setOpenPopUp={setOpenPopUp}
              setTotalSelectedTimes={setTotalSelectedTimes}
              link={'/payment'}
            />
          </div>
        )}
      </main>
    </>
  )
}

export default Tutors
