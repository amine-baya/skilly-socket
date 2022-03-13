import { useState } from 'react'

function Resume() {
  return (
    <div className="  font-poppins md:bg-white">
      <Mobile />
      <Desktop />
    </div>
  )
}
export default Resume

function Mobile() {
  const [education, setEducation] = useState(true)
  //   const [resume, setResume] = useState('education')

  console.log(education)
  return (
    // md:hidden
    <div className=" my-10 mx-auto px-6  sm:w-[376px] md:hidden  ">
      <ResumeTitle />
      <select
        // value={}
        // onChange={() => setEducation(!education)}
        className="mt-6 w-full rounded-lg border-2 bg-white py-2 px-4 text-sm text-[#9A9A9A] outline-none"
      >
        <option onSelect={() => setEducation(true)} value="education">
          Education
        </option>
        <option onSelect={() => setEducation(false)} value="Certification">
          Certification
        </option>
      </select>
      <Education />
      <Certifications />
    </div>
  )
}

function ResumeTitle() {
  return (
    <section className="mx-0 space-y-2 md:mx-auto">
      <h2 className="text-2xl font-semibold capitalize tracking-wide text-[#5F5F5F]">
        Resume
      </h2>
      <SmallLine />
    </section>
  )
}
function Desktop() {
  const [education, setEducation] = useState(true)
  // const [certification, setCertification] = useState(false)
  const activeLink =
    'relative cursor-pointer text-[#FC4D6D] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-8 after:rounded-full after:bg-[#FC4D6D]'
  return (
    <div className=" hidden space-y-6  py-16 capitalize md:block">
      <div className="ml-3 mb-12 flex justify-center">
        <ResumeTitle />
      </div>
      <section className="flex justify-center gap-4   ">
        <div className="mr-16 mt-4 space-y-10 font-medium capitalize text-[#5F5F5F] ">
          <div className="text-2xl ">Duration</div>
          {education ? (
            <>
              <div className="text-lg">2020 — 2020</div>
              <div className="text-lg">test edu</div>
            </>
          ) : (
            <>
              <div className="text-lg">2020 — 2020</div>
              <div className="text-lg text-blue-300">test cerft</div>
            </>
          )}
        </div>
        <div className="h-56 w-[1px] rounded-full bg-[#DADADA] " />
        <div className="ml-20 w-96 space-y-10">
          <div className=" mt-4 space-x-12 text-2xl font-medium capitalize text-[#5F5F5F]">
            <span
              onClick={() => setEducation(!education)}
              className={`cursor-pointer ${education && activeLink}`}
            >
              Education
            </span>
            <span
              onClick={() => setEducation(!education)}
              className={`cursor-pointer ${!education && activeLink}`}
            >
              Certifications
            </span>
          </div>
          {education ? (
            <div className="text-lg text-[#787878] ">
              Teaching English as a foreign language tefl education
            </div>
          ) : (
            <div className="text-lg text-[#787878] ">
              Teaching English as a foreign language tefl Certification
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
function SmallLine() {
  return (
    <div className="flex h-[3px] space-x-1   ">
      <div className=" mr-[1px] w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className=" w-[6px] rounded-full bg-[#FC4D6D]" />
      <div className="  w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}

function Education() {
  return (
    <div className=" my-4  w-80 space-y-4 px-4 font-poppins text-sm font-medium  capitalize ">
      <h2 className="text-[#251f1f]">Education</h2>
      <section className="space-y-2">
        <h2 className=" text-[#5F5F5F]">2020 — 2020</h2>
        <p className="text-[#787878]">
          Teaching English as a foreign Language TEFL
        </p>
      </section>
      <hr />
      <section className="space-y-2">
        <h2 className=" text-[#5F5F5F]">2020 — 2020</h2>
        <p className="text-[#787878]">
          Teaching English as a foreign Language TEFL
        </p>
      </section>
    </div>
  )
}

function Certifications() {
  return (
    <div className=" my-4 hidden  w-80 space-y-4 px-4 font-poppins text-sm font-medium  capitalize ">
      <h2 className="text-[#251f1f]">Certifications</h2>

      <section className="space-y-2">
        <h2 className=" text-[#5F5F5F]">2020 — 2020</h2>
        <p className="text-[#787878]">
          Teaching English as a foreign Language TEFL
        </p>
      </section>
      <hr />
      <section className="space-y-2">
        <h2 className=" text-[#5F5F5F]">2020 — 2020</h2>
        <p className="text-[#787878]">
          Teaching English as a foreign Language TEFL
        </p>
      </section>
    </div>
  )
}
