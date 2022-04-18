import React from 'react'
import PaymentCheckOutContainer from 'components/PaymentPage/PaymentCheckOutContainer'

const Payment = ({ tutor }) => {
  console.log(tutor)
  return (
    <div>
      <PaymentCheckOutContainer {...{ tutor }} />
    </div>
  )
}
Payment.getInitialProps = async function (context) {
  //   const { user } = context.query
  //   const res = await fetch(`http://localhost:3000/api/tutors/${user}`)
  //   const tutor = await res.json()
  //   return { tutor }
  return {
    tutor: {
      _id: '625812ecd49b556dd4b2d77bXX',
      first_name: 'Mohit',
      last_name: 'Chahal',
      name: 'Mohit Chahal',
      // email: 'test@test.com',
      other_languages: ['English', 'Danish'],
      role: 'TUTOR',
      profile_update: false,
      is_verified: true,
      is_active: false,
      subjects_and_pricing: [{ subject: '-', price: 0, currency_format: '-' }],
      qualifications: [
        {
          qualification_type: 'Experience',
          qualification_title: 'Teaching Programming',
          qualification_duration_from: '1970-01-01T00:00:02.012Z',
          qualification_duration_to: '1970-01-01T00:00:02.015Z',
        },
      ],
      availability: [
        {
          day: 'monday',
          slots: [
            { slot_id: 'v29X7VhM84vYRntyeTID4', from: '01:30', to: '12:30' },
          ],
        },
        {
          day: 'tuesday',
          slots: [
            { slot_id: 'UxaNEHaRJsfCVJeenVBB3', from: '01:30', to: '07:30' },
          ],
        },
      ],
      // createdAt: '2022-04-14T12:26:20.142Z',
      // updatedAt: '2022-04-17T12:01:36.964Z',
      // __v: 0,
      country: 'India',
      english_fluency: 'Full Professional Proficiency',
      native_language: 'Hindi',
      timezone: 'Asia/Kolkata',
    },
  }
}

export default Payment
