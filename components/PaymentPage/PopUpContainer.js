import React from 'react'
import CalenderPopUp from './PopUps/CalenderPopUp'
import CouponPopUp from './PopUps/CouponPopUp'
import KarmaPopUp from './PopUps/KarmaPopUp'
import WalletPopUp from './PopUps/WalletPopUp'

const PopUpContainer = ({
  openPopUp,
  setOpenPopUp,
  setTotalSelectedTimes,
  totalSelectedTimes,
  tutor,
  stage,
  setStage,
  edit,
  setEdit,
  loading,
  setLoading,
}) => {
  return (
    <div className="h-[594px] w-[406px] rounded-3xl bg-[#FFFFFF] shadow-md sm:h-[683px] sm:w-[521px]">
      {true && (
        <CalenderPopUp
          stage={stage}
          setStage={setStage}
          setOpenPopUp={setOpenPopUp}
          setTotalSelectedTimes={setTotalSelectedTimes}
          edit={edit}
          setEdit={setEdit}
          loading={loading}
          setLoading={setLoading}
        />
      )}

      {openPopUp.couponPopUp && (
        <CouponPopUp
          setOpenPopUp={setOpenPopUp}
          totalSelectedTimes={totalSelectedTimes}
        />
      )}

      {openPopUp.karmaPopUp && (
        <KarmaPopUp
          setOpenPopUp={setOpenPopUp}
          totalSelectedTimes={totalSelectedTimes}
        />
      )}

      {openPopUp.walletPopUp && (
        <WalletPopUp
          setOpenPopUp={setOpenPopUp}
          totalSelectedTimes={totalSelectedTimes}
        />
      )}
    </div>
  )
}

export default PopUpContainer
