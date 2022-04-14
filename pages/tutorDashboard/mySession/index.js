import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from "next/link"
import { useRouter } from 'next/router'
import Server from 'utils/Server'
import { baseUrl } from 'utils/constants'

function MySession() {
  const router = useRouter()
  useEffect(() => {
    Server.get(`${baseUrl}/booking/all`).then((response) => {
      const bookingsList = response.data
      // sort bookings by start_date
      const sortedBookings = bookingsList.sort((a, b) => {
        return parseInt(a.start_date) - parseInt(b.start_date)
      })
      setBookings(sortedBookings)
    })
  }, [])
  const [bookings, setBookings] = useState([])
  return (
    <>
      <div className=" h-full whitespace-nowrap p-5 font-roboto capitalize lg:p-2 xl:p-9">
        <div className="mb-9 flex justify-between ">
          <h1 className="text-2xl font-semibold text-[#5E5252]">
            Active Sessions
          </h1>
          <Link href="/tutorDashboard/mySession/archivedSessions" className="font-bold text-[#FC4D6D]">archived Sessions </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 xl:gap-9 ">
          {bookings.map(function (booking, i) {
            const startDate = new Date(booking.start_date * 1000)
            const endDate = new Date(booking.start_date * 1000 + 3600 * 1000)

            // start date's week in human readable format
            const weekday = startDate.toLocaleString('default', {
              weekday: 'short',
            })

            // start date time in human readable format
            const startTime = startDate.toLocaleString('default', {
              hour: 'numeric',
              minute: 'numeric',
            })

            // end date time in human readable format
            const endTime = endDate.toLocaleString('default', {
              hour: 'numeric',
              minute: 'numeric',
            })

            const currentTime = parseInt(new Date() / 1000)
            const startTimeB = parseInt(booking.start_date)
            const endTimeB = startTimeB + 3600

            console.log({ currentTime, startTimeB, endTimeB })

            const diff = startTimeB - currentTime

            const diffHours = Math.floor(diff / 3600)
            const diffMinutes = Math.floor((diff % 3600) / 60)
            const diffSeconds = Math.floor((diff % 3600) % 60)

            let status, style, text, in6Hours, onClick

            onClick = () => { }
            if (currentTime < startTimeB) {
              if (diff < 3600 * 6) {
                in6Hours = true
                text = 'Session is starting soon'
                // text = `Session is starting in ${diffHours} hours  ${diffMinutes} minutes`
              } else {
                in6Hours = false

                text = 'Session has not started yet'
              }
              style = 'bg-blue-200'
              status = 'pending'
            } else if (currentTime > endTimeB) {
              text = 'Session has ended'
              style = 'bg-green-200'
              status = 'ended'
            } else {
              text = 'Session is active'
              style = 'bg-red-200'
              status = 'active'

              onClick = () => {
                console.log({ booking })
                router.push('/session/' + booking.booking_id)
              }
            }
            //TODO Add the preferred color scheme here for the button
            //temp override button style
            style = 'bg-[#FC4D6D]'

            return (
              <div className="rounded-2xl bg-white" key={i}>
                <div className="flex flex-col gap-2.5 p-4 lg:px-2 lg:py-4 xl:p-4   ">
                  {in6Hours && (
                    // TODO Add this
                    <h3 className="font-medium">
                      today, within{' '}
                      <span className="text-[#FC4D6D]">
                        {/* {diffHours}:{diffMinutes} */}
                        {diffHours} hrs {diffMinutes} mins
                      </span>
                    </h3>
                  )}
                  <p className="text-2xl font-semibold">
                    {weekday}, {startTime}-{endTime}
                  </p>
                </div>
                <hr className="bg-[#CECECE]" />
                <div className="p-4 lg:px-2 lg:py-4 xl:p-4 ">
                  <div className="mb-9 flex justify-between">
                    <div className="flex gap-3 lg:gap-1 xl:gap-3">
                      <div className="h-11 w-11 rounded-full bg-gray-500"></div>
                      <label className="my-auto text-lg font-semibold">
                        abhayanshu s.
                      </label>
                    </div>
                    <button className="text-[#42ADE2]">Message</button>
                  </div>
                  <div className="grid grid-cols-2 gap-y-4 text-lg">
                    <label className="font-bold">duration</label>
                    <p className=" justify-self-end font-medium ">60min</p>
                    <label className="font-bold">fees</label>
                    <p className=" justify-self-end font-medium ">$10</p>
                    <label className="font-bold">skill</label>
                    <p className=" justify-self-end font-medium ">gardening</p>
                    <label className="font-bold">session no.</label>
                    <p className=" justify-self-end font-medium ">
                      5 ( <span className="text-[#42ADE2]">see agenda</span>)
                    </p>
                  </div>
                  <div className="mt-[75px]  mb-5">
                    <button
                      onClick={onClick}
                      className={`w-full rounded-2xl  py-5 text-2xl font-bold capitalize text-white ${style}`}
                    >
                      {text}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MySession

{
  /* <div className="mt-[75px]  mb-5">
<button className=" w-full rounded-2xl bg-[#C1C1C1] py-5 font-bold capitalize text-white text-2xl">
reschedule session
</button>
</div> */
}
{
  /* <div className="mt-[75px]  mb-5">
                <button className=" w-full rounded-2xl bg-[#FF7A92] py-5 font-bold capitalize text-white text-2xl ">
                enter in 00:30:29
                </button>
              </div> */
}
