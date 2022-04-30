import React, { useState, useEffect } from 'react'
import PaymentProfileContainer from './PaymentProfileContainer'
import PopUpContainer from './PopUpContainer'
import { useRecoilState } from 'recoil'
import { openPopUps, totalSelectedSlots } from '../../Atoms/PopUpAtoms'
import { getLocalStorage } from 'utils/cookies'

const PaymentCheckOutContainer = () => {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [totalSelectedTimes, setTotalSelectedTimes] =
    useRecoilState(totalSelectedSlots)

  const [stage, setStage] = useState(0)
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(true)

  console.log(totalSelectedTimes)

  return (
    <div className="mx-auto flex h-full min-h-fit w-full flex-wrap-reverse items-center justify-center gap-10 bg-[#F8D3A87A] py-10">
      <PopUpContainer
        setOpenPopUp={setOpenPopUp}
        totalSelectedTimes={totalSelectedTimes}
        openPopUp={openPopUp}
        setTotalSelectedTimes={setTotalSelectedTimes}
        stage={stage}
        setStage={setStage}
        edit={edit}
        setEdit={setEdit}
        loading={loading}
        setLoading={setLoading}
      />
      <PaymentProfileContainer
        setOpenPopUp={setOpenPopUp}
        totalSelectedTimes={totalSelectedTimes}
        openPopUp={openPopUp}
        stage={stage}
        setEdit={setEdit}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  )
}

export default PaymentCheckOutContainer
