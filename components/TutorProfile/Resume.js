import React from 'react'
import moment from 'moment'
import { monthNames } from 'utils/constants'

function Resume({ tutor }) {
  console.log(tutor)
  return (
    <div className="snap-fullPage flex h-[calc(100vh-79px)] flex-col items-start justify-start gap-5 pt-6 font-poppins">
      <ResumeTitle />

      {/* main */}
      <div className="w-full overflow-x-scroll">
        <MainResume qualifications={tutor?.qualifications} />
      </div>
    </div>
  )
}
export default Resume

function ResumeTitle() {
  return (
    <section className="space-y-2 pl-5 sm:mx-auto sm:p-0">
      <h2 className="text-2xl font-semibold capitalize tracking-wide text-[#5F5F5F]">
        Resume
      </h2>
      <SmallLine />
    </section>
  )
}

function SmallLine() {
  return (
    <div className="flex h-[3px] space-x-1">
      <div className=" mr-[1px] w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className=" w-[6px] rounded-full bg-[#FC4D6D]" />
      <div className="  w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}

const MainResume = ({ qualifications }) => {
  const titles = ['Duration', 'Type', 'Title/Designation']
  // const desc = [
  //   {
  //     qualification_duration_from: 'June 2016',
  //     qualification_duration_to: 'May 2018',
  //     qualification_type: 'Degree',
  //     title: 'M.A. (English Literature & Philosiphy)',
  //   },
  //   {
  //     qualification_duration_from: 'June 2016',
  //     qualification_duration_to: 'May 2020',
  //     qualification_type: 'Diploma',
  //     title: 'M.A. (English Literature & Philosiphy)',
  //   },
  //   {
  //     qualification_duration_from: 'June 2016',
  //     qualification_duration_to: 'May 2018',
  //     qualification_type: 'Degree',
  //     title: 'M.A. (English Literature & Philosiphy)',
  //   },
  // ]
  console.log(qualifications)

  return (
    <table className="w-full min-w-[1000px] overflow-scroll text-center font-poppins font-medium text-[#5F5F5F]">
      <tr className="h-20">
        {titles?.map((title, i) => (
          <th key={i}>{title}</th>
        ))}
      </tr>
      {qualifications?.map((dex, i) => (
        <tr key={i} className={`h-20  ${i % 2 == 0 ? 'bg-[#FFF7F7]' : ''}`}>
          <td className="w-[50px] whitespace-pre-wrap">
            {monthNames[
              moment(dex?.qualification_duration_from, 'YYYY-MM-DD').month()
            ] +
              ' ' +
              moment(
                dex?.qualification_duration_from,
                'YYYY-MM-DD'
              ).year()}{' '}
            -{' '}
            {monthNames[
              moment(dex?.qualification_duration_to, 'YYYY-MM-DD').month()
            ] +
              ' ' +
              moment(dex?.qualification_duration_to, 'YYYY-MM-DD').year()}
          </td>
          <td className="w-[50px] whitespace-pre-wrap">
            {dex?.qualification_type}
          </td>
          <td className="w-[50px] whitespace-pre-wrap">
            {dex?.qualification_title}
          </td>
        </tr>
      ))}
    </table>
  )
}
