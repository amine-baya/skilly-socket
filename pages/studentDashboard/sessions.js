import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  addDays,
  startOfDay,
  startOfWeek,
  format,
  nextDay,
  previousDay,
  isToday,
  isPast,
} from 'date-fns'
import { withRouter } from 'next/router'
import { getLocalStorage, setLocalStorage } from 'utils/cookies'
import { baseUrl } from 'utils/constants'
import Server from 'utils/Server'
import { weekNames, baseUrlProfilePic } from 'utils/constants'
import { getCookie, setCookies, removeCookies } from 'cookies-next'
import Link from 'next/link'

const MySessions = ({ router }) => {
  const [year] = useState(new Date().getFullYear())

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    let difference = +new Date(`10/01/${year}`) - +new Date()

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  // const timerComponents = []

  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return
  //   }

  //   timerComponents.push(
  //     <span>
  //       {timeLeft[interval]} {interval}{' '}
  //     </span>
  //   )
  // })
  const [allSessions, setAllSessions] = useState([])
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  useEffect(() => {
    Server.get(`${baseUrl}/session/student`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(getCookie('token')).access_token}`,
      },
    }).then((response) => {
      const resp = response.data.upcoming
      // setLocalStorage('', resp)
      // get all time slots here
      // const abcdefg = resp.map((timeSlotForDay) => {
      //   return timeSlotForDay.slots.map((timeSlot) => {
      //     return {
      //       display: timeSlot.display_time,
      //       slot_id: timeSlot.slot_id,
      //       available: timeSlot.is_available,
      //       student: timeSlot.student,
      //       tutor: timeSlot.tutor,
      //     }
      //   })
      // })
      console.log('response is ', response)
      setAllSessions(response.data.upcoming_sessions)
      // console.log(abcdefg)
      // setRandomTimes(abcdefg)
    })
  }, [router])
  return (
    <div className="mx-auto block h-full w-full whitespace-nowrap p-9 px-4 font-roboto capitalize sm:px-9">
      <div className="mb-9 flex justify-between">
        <h1 className="text-2xl font-semibold text-[#5E5252]">
          Active Sessions
        </h1>
        <h1 className="font-bold text-[#FC4D6D]">archived Sessions</h1>
      </div>

      <main className="flex flex-wrap items-center justify-center gap-[2rem] md:justify-between">
        {/* card Session */}
        {allSessions?.map((d, i) => {
          return <Card key={i} data={d} />
        })}
      </main>
    </div>
  )
}

export default withRouter(MySessions)

const Card = ({ data }) => {
  const [date, setDate] = useState(new Date(data?.student_time.date_raw))
  useEffect(() => {
    setDate(new Date(data?.student_time.day_raw))
  }, [data])
  return (
    // TODO: change height of below div back to 475px
    <div className="h-[355px] w-full rounded-2xl bg-white p-4 shadow-lg sm:w-[380px]">
      <div className="mb-2 flex flex-col gap-[11px]">
        <p className="text-base font-medium">
          {new Date(
            data?.student_time.day_raw.slice(0, 4) ===
              new Date().getFullYear() &&
              data?.student_time.day_raw.slice(5, 7) ===
                Date.now().getMonth() &&
              data?.student_time.day_raw.slice(8, 10) === Date.now().getDay()
          ) ? (
            <>
              Today, At{' '}
              <span className="font-bold text-[#FC4D6D]">
                {' '}
                {data?.student_time.from}{' '}
                {/* {timerComponents.length ? timerComponents : <>Oops</>} */}
              </span>{' '}
              (24 hour clock)
            </>
          ) : (
            <>At {data?.student_time.day_raw}</>
          )}
          {/* {JSON.stringify(new Date(
            data?.student_time.day_raw.slice(0, 4),
            data?.student_time.day_raw.slice(5, 7),
            data?.student_time.day_raw.slice(8, 10)
          ))} */}
          {console.log(startOfDay(Date.now()))}
        </p>
        <h3 className="text-2xl font-semibold tracking-wide">
          {weekNames[date.getDay()]},{' '}
          {data?.student_time.from + '-' + data?.student_time.to}
          {/* {JSON.stringify(date)} */}
        </h3>
      </div>

      <hr className="h-[3px] w-full bg-gray-300" />

      <div className="p-4 lg:px-2 lg:py-4 xl:p-4 ">
        <div className="grid grid-cols-2 gap-y-4 text-lg">
          {/* tutor */}
          <Link href={`/tutors/${data?.tutor_id}`}>
            <div className="relative mb-5 flex cursor-pointer items-center justify-start gap-2">
              <div className="relative h-10 w-10 rounded-full">
                <Image
                  src={`${baseUrlProfilePic}${data?.tutor_details.profile_img}`}
                  alt="tutor"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <label className="cursor-pointer font-bold">
                {data?.tutor_details.name}
              </label>
            </div>
          </Link>
          <p className="cursor-pointer justify-self-end font-medium text-[#3F97FF]">
            Message
          </p>

          {/* duration */}
          <label className="font-bold">duration</label>
          <p className=" justify-self-end font-medium">60min</p>

          {/* fees */}
          {/* TODO get fees from sessions API */}
          <label className="font-bold">fees</label>
          <p className=" justify-self-end font-medium">$10</p>

          {/* skill */}
          {/* TODO get subject/skill from sessions API */}
          <label className="font-bold">skill</label>
          <p className=" justify-self-end font-medium">gardening</p>

          {/* session */}
          {/* TODO uncomment session count and populate */}
          {/* <label className="font-bold">session no.</label>
          <p className=" justify-self-end font-medium">
            1{' '}
            <p className="inline cursor-pointer text-[#3F97FF]">(see agenda)</p>
          </p> */}
        </div>

        {/* <div className="mt-[40px]">
          <button className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-white ">
            {}
            enter classroom
          </button>
        </div> */}
      </div>
    </div>
  )
}
