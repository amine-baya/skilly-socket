import React from 'react'
import Link from 'next/link'
function NextAndBackBtn({ onNextClick, onBackClick }) {
  return (
    <>
      <div className="flex flex-col gap-4  md:flex-row">
        <button>
          <a
            onClick={() => onNextClick()}
            className="tutor-dashboard-btn   md:flex-line md:order-2"
          >
            next
          </a>
        </button>
        <button>
          <a
            onClick={() => onBackClick()}
            className="tutor-dashboard-back-btn md:flex-line  "
          >
            back
          </a>
        </button>
      </div>
    </>
  )
}

export default NextAndBackBtn
