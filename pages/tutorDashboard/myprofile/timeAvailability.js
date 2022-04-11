import React, { useEffect, useState } from 'react'

import { Field, FieldArray, Form, Formik } from 'formik'
import FormikControl from '../../../components/Utils/FormikComponents/FormikControl'
import TimeAvailabilityCard from '../../../components/Utils/FormikComponents/TimeAvailabilityCard'
import axios from 'axios'

function TimeAvailability() {
  const initialValues = {
    MondayName: [
      {
        from: '',
        to: '',
      },
    ],
    TuesdayName: [
      {
        from: '',
        to: '',
      },
    ],
    WednesdayName: [
      {
        from: '',
        to: '',
      },
    ],
    ThursdayName: [
      {
        from: '',
        to: '',
      },
    ],
    FridayName: [
      {
        from: '',
        to: '',
      },
    ],
    SaturdayName: [
      {
        from: '',
        to: '',
      },
    ],
  }

  const [timezone, setTimezone] = useState('');

  // format accr to postman body
  const [availability, setAvailability] = useState({
    timezone: timezone || "America/Los_Angeles",
    availability: [
      {
        day: 'monday',
        slots: initialValues.MondayName
      },
      {
        day: 'tuesday',
        slots: initialValues.TuesdayName
      },
      {
        day: 'wednesday',
        slots: initialValues.WednesdayName
      },
      {
        day: 'thursday',
        slots: initialValues.ThursdayName
      },
      {
        day: 'friday',
        slots: initialValues.FridayName
      },
      {
        day: 'saturday',
        slots: initialValues.SaturdayName
      }
    ]
  })

  // useEffect(() => {
  //   axios.put('http://65.0.176.119:5087/tutor/update/time-availability', JSON.stringify(availability), { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUzZGNjM2Q1YTVkNTFmMGEyOWU4ZjEiLCJyb2xlIjoiVFVUT1IiLCJpYXQiOjE2NDk2NjQ4NzUsImV4cCI6MTY0OTgzNzY3NX0.MV0gw0EWZQmLk2tGl97lCCwakbrcZSgK0Jfq9mSoxpA' } })
  //     .then(response => console.log(response)).catch((e) => console.log(e));
  // }, [availability])

  console.log(availability);

  const onSubmit = (value) => {
    console.log('value', value)
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
                  className="w-7/12 rounded-[10px] border border-[#C1C1C1] px-5 py-3 text-[#9E9E9E]"
                >
                  <option value='Asia, Kolkata'>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                  <option value='Asia, Kolkata'>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                  <option value='Asia, Kolkata'>13:53 (GMT+ 5:300- Asia, Kolkata</option>
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
                    name="MondayName"
                    formik={formik}
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Tuesday"
                    name="TuesdayName"
                    formik={formik}
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Wednesday"
                    name="WednesdayName"
                    formik={formik}
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Thursday"
                    name="ThursdayName"
                    formik={formik}
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Friday"
                    name="FridayName"
                    formik={formik}
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Saturday"
                    name="SaturdayName"
                    formik={formik}
                  />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default TimeAvailability
