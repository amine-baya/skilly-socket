import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Server from 'utils/Server'
import { getCookie, setCookies, removeCookies } from 'cookies-next'

import { weekNames, baseUrlProfilePic, baseUrl } from 'utils/constants'
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
function MySession() {
  const router = useRouter()
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
  const [allSessions, setAllSessions] = useState([])
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    Server.get(`${baseUrl}/session/tutor`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(getCookie('token')).access_token}`,
      },
    }).then((response) => {
      const resp = response.data.upcoming
      console.log('response is ', response)
      let _lst = []
      _lst = _lst.concat(
        response.data.ongoing_sessions,
        response.data.active_sessions,
        response.data.upcoming_sessions,
        response.data.booked_sessions
      )
      console.log(_lst)
      console.log('lst is ', _lst)
      setAllSessions(_lst)
      // console.log(abcdefg)
      // setRandomTimes(abcdefg)
    })
  }, [])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft())
  //   }, 1000)

  //   return () => clearTimeout(timer)
  // })
  const [bookings, setBookings] = useState([])
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

export default MySession
const Card = ({ data }) => {
  const [date, setDate] = useState(new Date())
  const [isToday, setIsToday] = useState(false)
  const [timer, setTimer] = useState('asdf')

  // useEffect(() => {
  //   console.log('data is ', date)
  //   if (
  //     parseInt(data?.tutor_time.day_raw.slice(0, 4)) === date.getFullYear() &&
  //     parseInt(data?.tutor_time.day_raw.slice(5, 7)) ===
  //       date.getMonth() + 1 &&
  //     parseInt(data?.tutor_time.day_raw.slice(8, 10)) === date.getDate()
  //   ) {
  //     setIsToday(true)
  //   }
  // }, [date])

  useEffect(() => {
    const _timer = setInterval(() => {
      const diff =
        new Date(
          `${data.tutor_time.day_raw} ${data.tutor_time.from}`
        ).getTime() - new Date().getTime()
      console.log(diff)
      let seconds = parseInt((diff / 1000) % 60)
      let minutes = parseInt((diff / (1000 * 60)) % 60)
      let hours = parseInt(diff / (1000 * 60 * 60))
      let _ans = String(hours) + ':' + String(minutes) + ':' + String(seconds)
      setTimer(_ans)
    }, 1000)

    return () => clearInterval(_timer)
  }, [date])
  return (
    <div className="h-[475px] w-full rounded-2xl bg-white p-4 shadow-lg sm:w-[380px]">
      <div className="mb-2 flex flex-col gap-[11px]">
        <p className="text-base font-medium">
          {new Date(
            `${data.tutor_time.day_raw} ${data.tutor_time.from}`
          ).getTime() -
            new Date().getTime() <
            1000 * 60 * 60 * 6 &&
          new Date(
            `${data.tutor_time.day_raw} ${data.tutor_time.from}`
          ).getTime() -
            new Date().getTime() >
            0 ? (
            <>
              Today, In{' '}
              <span className="font-bold text-[#FC4D6D]">
                {' '}
                {timer}{' '}
                {/* {timerComponents.length ? timerComponents : <>Oops</>} */}
              </span>{' '}
              Minutes (Upcoming Session)
            </>
          ) : (
            <>
              On {data?.tutor_time.day_raw} At
              <span className="font-bold text-[#FC4D6D]">
                {' '}
                {data?.tutor_time.from}{' '}
                {/* {timerComponents.length ? timerComponents : <>Oops</>} */}
              </span>{' '}
            </>
          )}
          {/* {JSON.stringify(new Date(
            data?.tutor_time.day_raw.slice(0, 4),
            data?.tutor_time.day_raw.slice(5, 7),
            data?.tutor_time.day_raw.slice(8, 10)
          ))} */}
          {console.log(startOfDay(Date.now()))}
        </p>
        <h3 className="text-2xl font-semibold tracking-wide">
          {weekNames[date.getDay()]},{' '}
          {data?.tutor_time.from + '-' + data?.tutor_time.to}
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
                  src={`${baseUrlProfilePic}${data?.student_details.profile_img}`}
                  alt="tutor"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <label className="cursor-pointer font-bold">
                {data?.student_details.name}
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
          <label className="font-bold">session no.</label>
          <p className=" justify-self-end font-medium">
            {/* 1{' '}
            <p className="inline cursor-pointer text-[#3F97FF]">(see agenda)</p> */}
          </p>
        </div>

        <div className="mt-[40px]">
          {/* {isToday ? (
            <button
              className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-white "
              onClick={() => {
                Router.push(`/session/${data?.meeting_id}`)
              }}
            >
              {}
              enter classroom
            </button>
          ) : (
            <button className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-white ">
              {}
              Reschedule
            </button>
          )} */}
          {new Date(
            `${data.tutor_time.day_raw} ${data.tutor_time.from}`
          ).getTime() -
            new Date().getTime() >
          1000 * 60 * 60 * 6 ? (
            <button className=" w-full rounded-2xl bg-[#FC4D6D]  py-5 text-2xl font-bold capitalize text-white">
              Reschedule
            </button>
          ) : new Date(
              `${data.tutor_time.day_raw} ${data.tutor_time.from}`
            ).getTime() -
              new Date().getTime() <
              1000 * 60 * 5 &&
            new Date(
              `${data.tutor_time.day_raw} ${data.tutor_time.from}`
            ).getTime() -
              new Date().getTime() >
              0 ? (
            <button
              className=" w-full cursor-not-allowed rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-gray-300	"
              onClick={() => {
                Router.push(`/session/tutor/${data?.meeting_id}`)
              }}
            >
              Join Meeting
            </button>
          ) : new Date(
              `${data.student_time.day_raw} ${data.student_time.to}`
            ).getTime() -
              new Date().getTime() >
            0 ? (
            <button
              className=" w-full rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-gray-300	"
              onClick={() => {
                Router.push(`/session/student/${data?.meeting_id}`)
              }}
            >
              Join Meeting
            </button>
          ) : (
            <button className=" w-full cursor-not-allowed rounded-2xl bg-[#FC4D6D] py-5 text-2xl font-bold capitalize text-gray-300	">
              Class Over
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
