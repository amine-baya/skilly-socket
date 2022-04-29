import React, { useState, useRef, useEffect } from 'react'
import { getCookie } from 'cookies-next'
import LeftArrowButton from 'components/Utils/Buttons/LeftArrowButton'
import RightArrowButton from 'components/Utils/Buttons/RightArrowButton'

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
import CrossIcon from 'icons/CrossIcon'
import PopUpButton from 'components/Utils/Buttons/PopUpButton'

import Router from 'next/router'
import { useRecoilState } from 'recoil'
import {
  selectedSlots,
  selectedTutor,
  openPopUps,
  totalSelectedSlots,
} from 'Atoms/PopUpAtoms'
import { baseUrl } from 'utils/constants'
import Server from 'utils/Server'
import { getLocalStorage, setLocalStorage } from 'utils/cookies'

const CalenderPopUp = ({ link, stage, setStage, edit, setEdit }) => {
  const TOKEN = getCookie('token')
    ? JSON.parse(getCookie('token')).access_token
    : false
  const [tutor, setTutor] = useState('')
  const [tutorTimezone, setTutorTimezone] = useState('')
  useEffect(() => {
    setTutor(getLocalStorage('book_tutor')?._id)
    setTutorTimezone(getLocalStorage('book_tutor')?.tutor_timezone)
  }, [])

  const [selectedTutorData, setSelectedTutor] = useRecoilState(selectedTutor)
  console.log({ selectedTutorData })
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [totalSelectedTimes, setTotalSelectedTimes] =
    useRecoilState(totalSelectedSlots)
  const [selectedTimes, setSelectedTimes] = useRecoilState(selectedSlots)
  const [weekDates, setWeekDates] = useState(takeWeek())
  const [randomTimes, setRandomTimes] = useState([
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
    ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
  ])
  const [clashedTimings, setClashedTimings] = useState([])
  const copyTimeRef = useRef()

  const _weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
  const [weekDays, setWeekDays] = useState(_weekDays)

  useEffect(() => {
    const initialDate = weekDates[0].toISOString().split('T')[0]
    let offset = weekDates[0].getDay()
    console.log('today is ', offset)
    let _lst = []
    for (let i = 0; i < 7; i++) {
      _lst.push(_weekDays[offset])
      if (offset == 6) {
        offset = 0
      } else {
        offset++
      }
    }
    setWeekDays(_lst)
    const lastDate = weekDates[6].toISOString().split('T')[0]

    console.log(initialDate, ' - ', lastDate)

    // /slot?student_timezone=Asia/Kolkata&tutor_timezone=Pacific/Fiji&tutor_id=625812ecd49b556dd4b2d77b&start_date=2022-04-19&end_date=2022-04-22
    const studentTimezone = getLocalStorage('user').timezone
    // console.log('student timezone is - ', studentTimezone)
    if (!tutorTimezone || !studentTimezone) {
      return
    }
    Server.get(
      `${baseUrl}/slot?student_timezone=${studentTimezone}&tutor_timezone=${tutorTimezone}&tutor_id=${tutor}&start_date=${initialDate}&end_date=${lastDate}`
    ).then((response) => {
      const resp = response.data
      setLocalStorage('temp_slots', resp)
      // get all time slots here
      const abcdefg = resp.map((timeSlotForDay) => {
        return timeSlotForDay.slots.map((timeSlot) => {
          return {
            display: timeSlot.display_time,
            slot_id: timeSlot.slot_id,
            available: timeSlot.is_available,
            student: timeSlot.student,
            tutor: timeSlot.tutor,
          }
        })
      })
      console.log(abcdefg)
      setRandomTimes(abcdefg)
    })
  }, [weekDates, tutor, tutorTimezone])

  // function to take week dates
  function takeWeek(start = new Date()) {
    let date = start
    console.log('day starts at ', startOfDay(start))
    const week = [...Array(7)].map((_, i) => addDays(date, i))
    console.log(week)
    return week
  }

  // getting fist and last days every time buttons press
  let firstDay = weekDates[0]
  let firstDayString = firstDay?.toDateString()
  let LastDay = weekDates[6]
  let LastDayString = LastDay?.toDateString()

  // to store the timeslots with their dates
  const handleTimeSlot = (rowIndex, colIndex, id) => {
    if (randomTimes[rowIndex][colIndex].available) {
      console.log('handling', rowIndex, colIndex, id)
      if (selectedTimes.filter((key) => key === id).length > 0) {
        const tempSelected = [...selectedTimes].filter((key) => key !== id)
        setSelectedTimes(tempSelected)
      } else {
        const newTime = id
        setSelectedTimes([...selectedTimes, newTime])
      }

      console.log('selected times are -', selectedTimes)
    }
    // console.log(randomTimes)
  }

  // *************** Selected items are stored in an array with Date and Time selected and Id is to filter tham individually ********************

  useEffect(() => {
    setTotalSelectedTimes(selectedTimes?.length)
  }, [selectedTimes, setTotalSelectedTimes])

  // on click of right button
  const handleNextWeek = () => {
    let lastDate = [...weekDates][6]
    const newWeek = takeWeek(nextDay(lastDate, 0))

    setWeekDates(newWeek)

    // // To CopyTime
    // if(copyTimeRef.current.checked){
    //     let
    // }
    // console.log(copyTimeRef.current.checked);
  }

  // on click of left button
  const handleLastWeek = () => {
    let firstDate = [...weekDates][0]
    const newWeek = takeWeek(previousDay(firstDate, 0))

    setWeekDates(newWeek)
  }

  const cancelSelection = () => {
    console.log('canceling - ', selectedTimes)
    Server.post(
      `${baseUrl}/slot/cancel`,
      {
        slots: selectedTimes,
        tutor_id: tutor,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + TOKEN,
        },
      }
    )
      .then((response) => {
        console.log(response)
        if (response.success) {
          setStage(0)
          setSelectedTimes([])
        }
      })
      .catch((err) => {
        console.log(err)

        alert('clash detected, please select another time slot')
      })
  }

  const handleCheck = () => {
    console.log('so far selected timings are - ', selectedTimes)
    console.log('tutor id is - ', tutor)
    Server.post(
      `${baseUrl}/slot/check`,
      {
        slots: selectedTimes,
        tutor_id: tutor,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + TOKEN,
        },
      }
    )
      .then((response) => {
        console.log(response)
        if (response.success) {
          setStage(1)
        }
      })
      .catch((err) => {
        console.log(err)
        const clashed = err.data.data.unavailable_slots.map((item) => {
          return item.id
        })

        setClashedTimings(clashed)

        alert('clash detected, please select another time slot')
      })
  }
  const handleConfirm = () => {
    console.log('so far selected timings are - ', selectedTimes)
    console.log('tutor id is - ', tutor)
    Server.post(
      `${baseUrl}/slot/confirm`,
      {
        tutor_id: tutor,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + TOKEN,
        },
      }
    )
      .then((response) => {
        console.log(response)
        if (response.success) {
          setStage(2)
        }
      })
      .catch((err) => {
        console.log(err)
        const clashed = err.data.data.unavailable_slots.map((item) => {
          return item.id
        })

        setClashedTimings(clashed)

        alert('clash detected, please select another time slot')
      })
  }

  const createMeetings = () => {
    //TODO Update the tutor and student id here
    // console.log({ tutor })
    Server.post(`${baseUrl}/booking/create`, {
      selectedTimes,
      tutor: tutor,
    })
      .then((res) => {
        console.log(res.data)
        // alert('submitted')
        Router.push('/studentDashboard/mySession')
      })
      .catch((err) => {
        console.log({ err })
        const clashed = err.response.data.message.clashedTimings.map((item) => {
          return item.id
        })

        setClashedTimings(clashed)

        alert('clash detected, please select another time slot')

        //Auto remove clashed timings
        // const clashedItems = selectedTimes.filter(
        //   (item) => clashed.filter((clash) => item.id !== clash.id).length > 0
        // );
        // setSelectedTimes(clashedItems);
      })
  }

  // Bottom Button and Sessions selected
  const BottomButton = ({ selectedTimes, link, setOpenPopUp }) => {
    return (
      <div className="bottom-0 flex w-full items-center justify-between gap-4 px-3">
        {/* Left */}
        <div className="flex items-center justify-center gap-2">
          <div className="font-medium text-[#373737]">
            <p className="text-right sm:text-lg ">Total Hourly</p>
            <p>Sessions Selected</p>
          </div>
          <h2 className="text-5xl font-bold">{selectedTimes.length}</h2>
        </div>

        {/* Right */}
        {stage === 0 ? (
          <button
            data={{ selectedTimes }}
            setOpenPopUp={setOpenPopUp}
            onClick={handleCheck}
          >
            Proceed
          </button>
        ) : stage === 1 ? (
          <div className="flex gap-4">
            <button
              data={{ selectedTimes }}
              setOpenPopUp={setOpenPopUp}
              onClick={cancelSelection}
            >
              Cancel
            </button>
            <button
              data={{ selectedTimes }}
              setOpenPopUp={setOpenPopUp}
              onClick={handleConfirm}
            >
              Confirm Slots
            </button>
          </div>
        ) : stage === 2 ? (
          <div className="flex gap-4">
            <button
              data={{ selectedTimes }}
              setOpenPopUp={setOpenPopUp}
              onClick={cancelSelection}
            >
              Cancel
            </button>
            {/* <button
              data={{ selectedTimes }}
              setOpenPopUp={setOpenPopUp}
              onClick={handleSessionBook}
            >
              Pay now
            </button> */}
          </div>
        ) : (
          'a'
        )}
      </div>
    )
  }

  return (
    <div
      className={`z-[9999999999999999] h-[594px] w-[406px] rounded-3xl bg-white text-[#FC4D6D] sm:h-[683px] sm:w-[521px] `}
    >
      {/* top */}
      <TopHeader setOpenPopUp={setOpenPopUp} />

      {/* main */}
      <div className="flex w-full flex-col items-center p-2 pt-4 sm:px-4 sm:py-2">
        <div className="flex w-full flex-col items-center pb-4">
          {/* top */}
          <div className="flex w-full flex-wrap items-center justify-center px-3 pb-3 sm:pb-8 sm:pt-5">
            {/* <div className="hidden sm:inline-block">
              <LeftArrowButton handleLastWeek={handleLastWeek} />
            </div> */}

            {/* Date */}
            <p className="font-poppins font-medium  text-[#383737]">
              {format(weekDates[0], 'dd')} {firstDayString.split(' ')[1]} -{' '}
              {format(weekDates[6], 'dd')} {LastDayString.split(' ')[1]}
            </p>

            {/* only for les than sm */}
            {/* <div className="flex items-center justify-between gap-8 sm:hidden">
              <LeftArrowButton handleLastWeek={handleLastWeek} />
              <RightArrowButton handleNextWeek={handleNextWeek} />
            </div> */}

            {/* CopyTimeSlot */}
            {/* <div className="form-check flex items-center justify-center space-x-1">
              <input
                ref={copyTimeRef}
                type="checkbox"
                id="copyTime"
                className="form-check-input h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border border-[#1180BE] bg-white bg-contain bg-center bg-no-repeat transition duration-200 checked:border-blue-600 checked:bg-blue-600 checked:text-blue-600 focus:outline-none"
              />
              <label htmlFor="copyTime" className="font-medium text-[#373737]">
                Copy Lastweek Time Slots
              </label>
            </div>

            <div className="hidden sm:inline-block">
              <RightArrowButton handleNextWeek={handleNextWeek} />
            </div> */}
          </div>

          {/* center */}
          <div className="h-[383.56px] w-[360.95px] overflow-y-scroll rounded-xl bg-[#FFF1F3] px-1 py-2 sm:h-[441px] sm:w-[472px]">
            <div className="flex flex-col gap-2 font-poppins">
              {/* weekdays */}
              <div className="flex items-center justify-between gap-1 px-2 text-center sm:px-4">
                {weekDays?.map((day, i) => (
                  <p
                    key={i}
                    className="w-7 text-sm font-bold uppercase text-[#565656]"
                  >
                    {day}
                  </p>
                ))}
              </div>

              {/* weekdates */}
              <div className="flex items-center justify-between gap-1 px-2 pb-3 text-center sm:px-4">
                {weekDates?.map((date, i) => (
                  <p
                    key={i}
                    className={`w-7 rounded-full bg-gradient-to-br p-[1px] font-semibold text-[#454545] ${
                      isToday(date)
                        ? 'from-[#FC4D6D] to-[#FDA02F] text-white'
                        : ''
                    }`}
                  >
                    {format(date, 'dd')}
                  </p>
                ))}
              </div>

              {/* TimeSlots */}
              <div className="flex justify-between gap-2">
                {randomTimes &&
                  randomTimes.map((times, rowIndex) => (
                    <div key={rowIndex} className="flex w-full flex-col gap-3">
                      {times.length > 0 ? (
                        times?.map((time, colIndex) => {
                          const timeB = randomTimes[rowIndex][colIndex].display
                          const id = randomTimes[rowIndex][colIndex].slot_id
                          return (
                            <p
                              key={colIndex}
                              className={`cursor-pointer rounded-full px-[3px] text-center text-sm font-medium transition duration-200 sm:px-3 sm:py-[1px] sm:font-semibold ${
                                (selectedTimes?.filter(
                                  (key) =>
                                    key ===
                                    randomTimes[rowIndex][colIndex].slot_id
                                )).length > 0
                                  ? `${
                                      clashedTimings.includes(id)
                                        ? 'bg-gray-500'
                                        : 'bg-[#FC4D6D]'
                                    } text-white`
                                  : ''
                              } ${
                                randomTimes[rowIndex][colIndex].available
                                  ? ''
                                  : 'cursor-default rounded-full px-[3px] text-center text-sm font-medium text-[#B4B4B4] sm:px-3 sm:py-[1px] sm:font-semibold'
                              }`}
                              onClick={() =>
                                handleTimeSlot(rowIndex, colIndex, id)
                              }
                            >
                              {time.display}
                            </p>
                          )
                        })
                      ) : (
                        <p
                          key={rowIndex}
                          className={`cursor-default rounded-full px-[3px] text-center text-sm font-medium text-[#B4B4B4] sm:px-3 sm:py-[1px] sm:font-semibold `}
                        >
                          NA
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}

        <BottomButton
          selectedTimes={selectedTimes}
          link={link}
          setOpenPopUp={setOpenPopUp}
        />
        {/* <button onClick={createMeetings}>TEMP SUBMIT</button> */}
      </div>
    </div>
  )
}

export default CalenderPopUp

// Top Title
const TopHeader = ({ setOpenPopUp }) => {
  return (
    <div className="flex h-10 w-full items-center justify-between border-b border-[#DCDCDC] px-5 py-7">
      <p className="text-xl font-bold">Select Your Slots</p>
      <span onClick={() => setOpenPopUp({ ...false, walletPopUp: false })}>
        <CrossIcon />
      </span>
    </div>
  )
}
