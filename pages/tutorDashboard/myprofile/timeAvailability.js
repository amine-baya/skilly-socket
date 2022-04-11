import React, { useState } from 'react'

import { Field, FieldArray, Form, Formik } from 'formik'
import FormikControl from '../../../components/Utils/FormikComponents/FormikControl'
// import TimeAvailabilityCard from '../../../components/Utils/FormikComponents/TimeAvailabilityCard'
import { timezoneList } from '../../../utils/constants'
import axios from 'axios'

function TimeAvailability() {
  const initialValues = {
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
  }

  const [timezone, setTimezone] = useState('America/Los_Angeles')

  // useEffect(() => {
  //   axios.put('http://65.0.176.119:5087/tutor/update/time-availability', JSON.stringify(availability), { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUzZGNjM2Q1YTVkNTFmMGEyOWU4ZjEiLCJyb2xlIjoiVFVUT1IiLCJpYXQiOjE2NDk2NjQ4NzUsImV4cCI6MTY0OTgzNzY3NX0.MV0gw0EWZQmLk2tGl97lCCwakbrcZSgK0Jfq9mSoxpA' } })
  //     .then(response => console.log(response)).catch((e) => console.log(e));
  // }, [availability])

  const onSubmit = (value) => {
    const availability = []
    for (const key in value) {
      const result = value[key].filter((val) => val.from && val.to)
      if (result.length > 0) {
        availability.push({ day: key, slots: result })
      }
    }

    if (availability.length === 0) {
      return alert('Please Select Atleast One Slot')
    }

    const payload = {
      timezone,
      availability,
    }
  }

  return (
    <div className="md-[1px] h1wi ml-[1px] mb-[1px] bg-white  lg:ml-[30px] lg:mt-[34px] lg:mb-[30px] lg:rounded-2xl">
      <div className=" p-5  xl:px-12">
        <h1 className="text-3xl font-semibold">Time Availability</h1>
      </div>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
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
                  Choose Your Timezone{' '}
                </p>

                <Field
                  as="select"
                  name="timezone"
                  className="w-7/12 rounded-[10px] border border-[#C1C1C1] px-5 py-3 text-[#9E9E9E]"
                  onChange={(e) => setTimezone(e.target.value)}
                >
                  {timezoneList.map((val, index) => {
                    return (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    )
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
              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default TimeAvailability
