import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const PopUpButton = ({ label, link, setOpenPopUp, data }) => {
  return (
    <>
      {data ? (
        <button
          className="h-[29px] w-[105px] rounded-full bg-gradient-to-r from-pink to-gradient_yellow px-4 text-center text-lg font-bold text-white sm:h-[37px] sm:w-[133px]"
          onClick={() => {
            Router.push({ pathname: link, query: data })
          }}
        >
          {label}
        </button>
      ) : link ? (
        <Link href={link} passHref>
          <button
            onClick={() => setOpenPopUp({ ...false })}
            // type={props.type}
            className="h-[29px] w-[105px] rounded-full bg-gradient-to-r from-pink to-gradient_yellow px-4 text-center text-lg font-bold text-white sm:h-[37px] sm:w-[133px]"
          >
            {label}
          </button>
        </Link>
      ) : (
        <button
          // type={props.type}
          className="h-[29px] w-[105px] rounded-full bg-gradient-to-r from-pink to-gradient_yellow px-4 text-center text-lg font-bold text-white sm:h-[37px] sm:w-[133px]"
        >
          {label}
        </button>
      )}
    </>
  )
}

export default PopUpButton
