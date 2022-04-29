import React, { useState, useEffect } from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import { openPopUps } from '../../../Atoms/PopUpAtoms'
import { useRecoilState } from 'recoil'
import { updateUserDescription, baseUrl } from '../../../utils/constants'
import Server from '../../../utils/Server'
import { getCookie } from 'cookies-next'
import { setLocalStorage } from '../../../utils/cookies'

const DescriptionPopUp = ({ setChangeFlag }) => {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [data, setData] = useState('')
  const [update, setUpdate] = useState(false)
  const TOKEN = getCookie('token')
    ? JSON.parse(getCookie('token')).access_token
    : false
  useEffect(() => {
    if (data) {
      const res = fetch(`${baseUrl}${updateUserDescription}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ description: data }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data)
          setLocalStorage('user', data.data)
          // setOpenPopUp(false)
          // setTutor(data.data)
          setOpenPopUp && setOpenPopUp({ ...false })
          setChangeFlag(true)
        })
    }
  }, [update])

  const handleChange = (e) => {
    console.log(e)
    setData(e.target.value)
  }

  // Top Title
  const TopTitle = ({ setOpenPopUp }) => {
    return (
      <div className="flex w-full items-center justify-between pl-2">
        <p className="text-xl font-bold text-[#3F3F3F]">Edit Description</p>
        <span onClick={() => setOpenPopUp({ ...false })}>
          <CrossIcon />
        </span>
      </div>
    )
  }

  // Buttons
  const Buttons = ({ label, styles, setOpenPopUp, action }) => {
    return (
      <button
        onClick={() => setOpenPopUp && setOpenPopUp({ ...false })}
        className={`h-[42.59px] w-[156.29px] rounded-lg text-center ${styles}`}
      >
        {label}
      </button>
    )
  }
  // input box
  const InputBox = () => {
    return (
      <textarea
        defaultValue={''}
        value={data}
        onChange={handleChange}
        className="relative flex h-[300px] w-full resize-none items-center justify-center rounded-xl border-[2px] border-[#e5e5e5] bg-[#F7F7F7] p-3 outline-none"
      />
    )
  }
  return (
    <div className="z-30 flex h-[400px] w-full flex-col items-center gap-9 rounded-xl bg-[#FFFFFF] p-6 font-roboto shadow-2xl sm:w-[500px] lg:h-[500px] lg:w-[590px]">
      {/* Title and CrossButton */}
      <TopTitle setOpenPopUp={setOpenPopUp} />

      {/* Input Box */}
      <textarea
        defaultValue={''}
        value={data}
        onChange={handleChange}
        className="relative flex h-[300px] w-full resize-none items-center justify-center rounded-xl border-[2px] border-[#e5e5e5] bg-[#F7F7F7] p-3 outline-none"
      />

      {/* Bottom Buttons */}
      <div className="flex w-full items-center justify-between gap-4">
        <Buttons
          setOpenPopUp={setOpenPopUp}
          label="Cancel Changes"
          styles="border-[1.2px] border-[#FC4D6D] text-[#545454] font-bold"
        />
        <button
          onClick={() => {
            setUpdate(true)
          }}
          className={`h-[42.59px] w-[156.29px] rounded-lg bg-[#FC4D6D] text-center font-medium text-[#FFFFFF]`}
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default DescriptionPopUp
