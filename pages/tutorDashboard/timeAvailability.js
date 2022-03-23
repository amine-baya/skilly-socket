import React from 'react'

import { Field, FieldArray, Form, Formik } from 'formik'
import FormikControl from '../../components/Utils/FormikComponents/FormikControl'
import TimeAvailabilityCard from '../../components/Utils/FormikComponents/TimeAvailabilityCard'

function timeAvailability() {
  const initialValues = {
 
    MondayName: [''],
    TuesdayName: [''],
    WednesdayName: [''],
    ThursdayName: [''],
    FridayName: [''],
    SaturdayName: [''],
  }
  const onSubmit = () => {}
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold">Availability</h1>
      </div>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          
          return (
            <Form>
              <div className="container mx-auto p-4">
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
                  className="w-7/12 rounded-[10px] border border-[#C1C1C1] px-5 py-3"
                >
                  <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                  <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                  <option>13:53 (GMT+ 5:300- Asia, Kolkata</option>
                </Field>

                <h1 className="mt-12 text-2xl font-semibold">
                  Set Your Availability
                </h1>
                <p className="my-4">
                  availability shows your potential working hours.
                  <br />
                  students can book sessions at these time
                </p>
                <div className="space-y-6">
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Monday"
                    name="MondayName"
                  />
                  
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Tuesday"
                    name="TuesdayName"
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Wednesday"
                    name="WednesdayName"
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Thursday"
                    name="ThursdayName"
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Friday"
                    name="FridayName"
                  />
                  <FormikControl
                    control="timeAvailabilityCard"
                    weekName="Saturday"
                    name="SaturdayName"
                  />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default timeAvailability
