import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Field, FieldArray, Form, Formik } from 'formik'
import FormikControl from '../../../components/Utils/FormikComponents/FormikControl'
import { getLocalStorage, updateUser } from '../../../utils/cookies'
// import TimeAvailabilityCard from '../../../components/Utils/FormikComponents/TimeAvailabilityCard'
import { timezoneList, baseUrl } from '../../../utils/constants'
import axios from 'axios'
import Server from '../../../utils/Server'

function TimeAvailability() {
  const [user, setUser] = useState({})
  const [flag, setFlag] = useState(false) // turns true when all data is loaded from localstorage
  const [initialValues, setInitialValues] = useState({
    monday: [
      {
        from: '',
        to: '',
      },
    ],
    tuesday: [
      {
        from: '',
        to: '',
      },
    ],
    wednesday: [
      {
        from: '',
        to: '',
      },
    ],
    thursday: [
      {
        from: '',
        to: '',
      },
    ],
    friday: [
      {
        from: '',
        to: '',
      },
    ],
    saturday: [
      {
        from: '',
        to: '',
      },
    ],
    sunday: [
      {
        from: '',
        to: '',
      },
    ],
  })
  const [timezone, setTimezone] = useState('America/Los_Angeles')

  // console.log(initialValues)
  useEffect(() => {
    Server.get(`${baseUrl}/tutor/profile`)
      .then((res) => {
        const user = res.data
        setUser(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (user.availability) {
      let _in = {}
      for (let i = 0; i < user.availability.length; i++) {
        let day = user.availability[i].day
        _in = initialValues
        _in[day] = user.availability[i].slots
        // console.log(day, user.availability[i].slots)
        // console.log(initialValues['sunday'])
      }

      setInitialValues(_in)
      console.log('initial values are ', initialValues)
      setFlag(true)
    } else {
      setFlag(true)
    }

    if (user.timezone) {
      setTimezone(user.timezone)
    }
    console.log('availability is ', initialValues)
  }, [user])


  const onSubmit = async (value) => {
    const availability = []
    console.log('start')
    for (const key in value) {
      const result = value[key].filter((val) => val.from && val.to)
      if (result.length > 0) {
        //
        let _result = []
        console.log('RESULT - ', result)
        for (var i = 0; i < result.length; i++) {
          let _from = parseInt(result[i].from.slice(0, 2))
          let _from_min = result[i].from.slice(3, 5)
          let _to = parseInt(result[i].to.slice(0, 2))
          let _to_min = result[i].to.slice(3, 5)
          if (_to - _from > 1 && _from_min === _to_min) {
            console.log(_from + ' ' + _to)
            let _tmp = []
            for (var j = _from; j < _to; j++) {
              if (j < 10) {
                let from = '0' + String(j) + ':' + _from_min
                let to = ''
                if (j < 9) {
                  to = '0' + String(j + 1) + ':' + _from_min
                } else {
                  to = String(j + 1) + ':' + _from_min
                }
                _tmp.push({ from, to })
              } else {
                let from = String(j) + ':' + _from_min
                let to = String(j + 1) + ':' + _from_min
                _tmp.push({ from, to })
              }
            }
            _result = [..._result, ..._tmp]
            // _result.push(_tmp.slice())
            console.log('magic is ', _tmp)
          } else if (_to - _from > 1 && _from_min !== _to_min) {
            if (_to_min === '00') {
              _to -= 1
            }
            console.log(_from + ' ' + _to)
            let _tmp = []
            for (var j = _from; j < _to; j++) {
              if (j < 10) {
                let from = '0' + String(j) + ':' + _from_min
                let to = ''
                if (j < 9) {
                  to = '0' + String(j + 1) + ':' + _from_min
                } else {
                  to = String(j + 1) + ':' + _from_min
                }
                _tmp.push({ from, to })
              } else {
                let from = String(j) + ':' + _from_min
                let to = String(j + 1) + ':' + _from_min
                _tmp.push({ from, to })
              }
            }
            _result = [..._result, ..._tmp]
            // _result.concat(_tmp.slice())
            console.log('magic is ', _tmp)
          } else {
            if (
              (_from === _to && _from_min === '00' && _to_min === '30') ||
              (_from === _to - 1 && _from_min === '30' && _to_min === '00')
            ) {
              console.log('cannot book slots of less than an hour', result[i])
            } else {
              console.log('else - ', result[i])
              _result.push(result[i])
            }
          }
        }
        // sorting array now
        _result.sort((a, b) => {
          if (a.from < b.from) {
            return -1
          } else {
            return 1
          }
        })
        // validating (removing conflicting timings)
        if (_result.length === 0) {
          console.log('empty array')
          return alert(
            'You need to fill at least one slot. Receiving zero slots right now'
          )
        } else {
          let current = _result[0]
          for (let i = 1; i < _result.length; i++) {
            console.log('current ', current, 'next ', _result[i])
            if (current.from.slice(0, 2) === _result[i].from.slice(0, 2)) {
              console.log(
                'Conflicting timing removed - ',
                _result[i],
                'because of',
                current
              )
              _result.splice(i, 1)
              i -= 1
            } else if (
              current.from.slice(3, 5) === '30' &&
              current.to.slice(0, 2) === _result[i].from.slice(0, 2) &&
              _result[i].from.slice(3, 5) === '00'
            ) {
              console.log(
                '2.0 Conflicting timing removed - ',
                _result[i],
                'because of',
                current
              )
              _result.splice(i, 1)
              i -= 1
            } else {
              current = _result[i]
            }
          }
          availability.push({ day: key, slots: _result })
          // console.log(result)
        }
      }
    }
    console.log('outptut is - ', availability)
    // return
    // for (const key in value) {
    //   const result = value[key].filter((val) => val.from && val.to)
    //   if (result.length > 0) {
    //     availability.push({ day: key, slots: result })
    //   }
    // }

    if (availability.length === 0) {
      return alert('Please Select Atleast One Slot')
    }
    console.log(availability)

    const payload = {
      timezone,
      availability,
    }
    // console.log('payload is', payload)

    const user_update = await Server.put(
      '/tutor/update/time-availability',
      payload
    )
    if (user_update.success) {
      console.log(payload)
      updateUser({ ...payload }, () => {
        Router.push('/tutorDashboard/myprofile/photo')
      })
    }
  }

  return (
    <div className="md-[1px] ml-[1px] mb-[1px] bg-white lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
      <div className=" p-5  xl:px-12">
        <h1 className="text-3xl font-semibold">Time Availability</h1>
      </div>
      <hr />
      {flag && (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => {
            // console.log('Formik props', formik)
            return (
              <Form>
                <div className=" my-10 p-5  xl:px-12">
                  <h1 className="text-2xl font-semibold">Set Your Timezone</h1>
                  <p className="my-4">
                    A Correct Timezone Is Essential To Coordinate Sessions With
                    International Students
                  </p>

                  <p className="mt-9 mb-6 font-semibold">
                    {' '}
                    Choose Your Timezone{' '}<span className='text-red-500'>*</span>
                  </p>

                  <Field
                    as="select"
                    name="timezone"
                    className="w-7/12 rounded-[10px] border border-[#C1C1C1] px-5 py-3 text-[#383838] font-medium"
                    onChange={(e) => setTimezone(e.target.value)}
                  >
                    {timezoneList.map((val, index) => {
                      if (timezone === val) {
                        return (
                          <option key={index} value={val} selected="selected">
                            {val}
                          </option>
                        )
                      } else {
                        return (
                          <option key={index} value={val}>
                            {val}
                          </option>
                        )
                      }
                    })}
                  </Field>

                  <h1 className="mt-12 text-2xl font-semibold">
                    Set Your Availability
                  </h1>
                  <p className="my-4 capitalize">
                    availability shows your potential working hours.
                    <br />
                    students can book sessions at these time
                  </p>
                  <div className="space-y-6">
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Monday"
                      name="monday"
                      formik={formik}
                    />
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Tuesday"
                      name="tuesday"
                      formik={formik}
                    />
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Wednesday"
                      name="wednesday"
                      formik={formik}
                    />
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Thursday"
                      name="thursday"
                      formik={formik}
                    />
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Friday"
                      name="friday"
                      formik={formik}
                    />
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Saturday"
                      name="saturday"
                      formik={formik}
                    />
                    <FormikControl
                      control="timeAvailabilityCard"
                      weekName="Sunday"
                      name="sunday"
                      formik={formik}
                    />
                  </div>
                </div>
                <div className="col-span-12 my-10 flex gap-x-10 md:col-span-6">
                  {/* <div>
                    <button className="  w-auto rounded-lg border border-[#FC4D6D] bg-white px-3 py-1 text-lg font-medium text-[#FC4D6D] md:col-span-2 md:w-full">
                      Skip For Now
                    </button>
                  </div> */}
                  <div className='flex w-full items-end justify-end sm:pr-12 pb-6 pr-6'>
                    <button className="rounded-lg border border-[#FC4D6D] bg-[#FC4D6D] px-7 py-1 text-lg font-medium text-white md:col-span-2 md:mt-0">
                      Next
                    </button>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      )}
    </div>
  )
}

export default TimeAvailability
