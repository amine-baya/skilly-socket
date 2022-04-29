import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Server from 'utils/Server'
import { baseUrl } from 'utils/constants'
import { getCookie } from 'cookies-next'
import { getLocalStorage } from '../../../utils/cookies'

export default function Session(props) {
  const router = useRouter()
  const { sessionId } = router.query
  const [loading, setLoading] = useState(true)
  const [roomUrl, setRoomUrl] = useState('')

  const [error, showError] = useState('')
  const wherebyRef = useRef()
  const [userType, setUserType] = useState('')
  const [solved, setSolved] = useState(false)

  // useEffect(() => {
  //   setUserType(getLocalStorage('ROLE'))
  // }, [])

  //Meeting Id has to be the booking id, not the session id
  // sample meeting id: 624814e0126a1bfc2671ec7a
  useEffect(() => {
    if (sessionId && !solved) {
      console.log('session id --- ', sessionId)

      let _url = `${baseUrl}/session/student/${sessionId}`
      Server.get(_url)
        .then((res) => {
          setRoomUrl(`${res.data.student_link}?roomIntegrations=on`)
          setLoading(false)
          setSolved(true)
        })
        .catch((err) => {
          const errorMessage = err.response?.data.message
          showError(errorMessage)
          setSolved(true)
          setLoading(false)
        })
      // setRoomUrl(
      //   'https://skillytree.whereby.com/f2325aa5-122b-49c6-bf17-16627312cb04'
      // )
      setLoading(false)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [sessionId])

  useEffect(() => {
    const wherebyDiv = document.getElementById('whereby')
    wherebyDiv &&
      wherebyDiv.addEventListener('leave', () => {
        console.log('leaves')
      })
  })

  return (
    <>
      {!loading ? (
        <>
          {roomUrl && (
            <iframe
              id="whereby"
              className="h-screen w-full"
              src={roomUrl}
              ref={wherebyRef}
              allow="camera; microphone; fullscreen; speaker; display-capture"
            ></iframe>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}

      {error && <div>{error || 'oops'}</div>}
    </>
  )
}
