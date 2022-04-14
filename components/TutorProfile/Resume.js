import React from 'react';

function Resume() {
  return (
    <div className="snap-fullPage h-[calc(100vh-79px)] flex flex-col gap-5 items-start justify-start pt-6 font-poppins">
      <ResumeTitle />

      {/* main */}
      <div className='w-full overflow-x-scroll'>
        <MainResume />
      </div>
    </div>
  )
}
export default Resume;

function ResumeTitle() {
  return (
    <section className="space-y-2 sm:mx-auto sm:p-0 pl-5">
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

const MainResume = () => {
  const titles = ['Duration', 'Type', 'Title/Designation', 'Institute'];
  const desc = [
    { duration: 'June 2016 - May 2018', type: 'Degree', title: 'M.A. (English Literature & Philosiphy)', institute: 'New Hamshire and Oxford College of Arts (London, UK)' },
    { duration: 'June 2016 - May 2020', type: 'Diploma', title: 'M.A. (English Literature & Philosiphy)', institute: 'New Hamshire and Oxford College of Arts (London, UK)' },
    { duration: 'June 2016 - May 2018', type: 'Degree', title: 'M.A. (English Literature & Philosiphy)', institute: 'New Hamshire and Oxford College of Arts (London, UK)' },
  ]

  return (
    <table className='w-full min-w-[1000px] overflow-scroll text-center font-poppins font-medium text-[#5F5F5F]'>
      <tr className='h-20'>
        {titles?.map((title, i) => (
          <th key={i}>
            {title}
          </th>
        ))}
      </tr>
      {desc?.map((dex, i) => (
        <tr key={i} className={`h-20  ${i % 2 == 0 ? 'bg-[#FFF7F7]' : ''}`}>
          <td className='w-[50px] whitespace-pre-wrap'>
            {dex?.duration}
          </td>
          <td className='w-[50px] whitespace-pre-wrap'>
            {dex?.type}
          </td>
          <td className='w-[50px] whitespace-pre-wrap'>
            {dex?.title}
          </td>
          <td className='w-[50px] whitespace-pre-wrap'>
            {dex?.institute}
          </td>
        </tr>
      ))}
    </table>
  )
}