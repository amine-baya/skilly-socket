import Image from 'next/image'
import InputBox1 from '../../Utils/InputBoxes/InputBox1'
import AuthButton from '../../Utils/Buttons/AuthButton'
import NavLink from 'next/link'
import Server from '../../../utils/Server'
import { ROLE_NAME, tutorLogin } from '../../../utils/constants'
import { authenticate, getLocalStorage, signout } from '../../../utils/cookies'
import Router from 'next/router'
import { useEffect } from 'react'
import { getCookie, getCookies } from 'cookies-next'

const Login = (props) => {
  useEffect(() => {
    const token = getCookie('token')
    const role = getCookie('role')
    if (token && role) {
      if (role === ROLE_NAME.TUTOR) {
        Router.push('/tutorDashboard/myprofile/basicDetails')
      } else {
        Router.push('/auth/tutor/signup')
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const login_response = await Server.post(tutorLogin, {
      email,
      password,
    })
    if (
      login_response.success &&
      login_response.data.role === ROLE_NAME.TUTOR
    ) {
      authenticate(login_response.data, ROLE_NAME.TUTOR, () =>
        Router.push('/tutorDashboard')
      )
    } else {
      signout(() => Router.push(0))
    }
  }

  return (
    <div className="h-full w-full">
      <div className="fixed -z-10 h-full w-full">
        <Image
          src="/Images/auth/bg_mobile.png"
          layout="fill"
          className="sm:hidden"
          alt='md'
        />
        <Image
          src="/Images/auth/bg_desktop.png"
          layout="fill"
          className="hidden sm:block"
          alt='lg'
        />
      </div>

      <div className="flex min-h-screen min-w-full flex-col sm:flex-row">
        <div className="relative min-h-[30vh] text-white sm:basis-[50%]">
          <div className="absolute h-full w-full sm:hidden">
            <div className="absolute -bottom-[40px] z-20 flex h-[80px] w-[80px] items-center justify-center">
              <Image src="/Images/auth/plant.png" width={80} height={80} alt='plant' />
            </div>
            <div className="absolute -bottom-[40px] right-0 z-20 flex h-[80px] w-[80px] items-center justify-center">
              <Image src="/Images/auth/bowl.png" width={60} height={60} alt='bowl' />
            </div>
            <div className="absolute z-20 flex h-full w-full items-center justify-center">
              <Image src="/Images/auth/guitar.png" width={60} height={60} alt='guitar' />
            </div>
          </div>

          <div className="absolute z-20 hidden h-full w-[65vw] sm:block">
            <div className="m-[80px]">
              <div>
                <span className="bg-gradient-to-r from-[#feae78] to-[#f94161] bg-clip-text text-5xl font-bold tracking-widest text-transparent">
                  SKILLY
                </span>
                <span className="text-5xl font-bold tracking-widest text-[#800202]">
                  TREE
                </span>
              </div>
              <div>
                <span className="tracking-[3.2px] underline underline-offset-8">
                  Upskill
                </span>
                &nbsp;
                <span className="tracking-[3.2px]">With A Personal Touch</span>
              </div>
            </div>

            <div className="absolute bottom-0 h-[80vh] w-full">
              <Image src="/Images/auth/girl.png" layout="fill" alt='girl' />
            </div>
          </div>
        </div>

        <div
          className="relative min-h-[70vh] sm:basis-[50%]"
          style={{ zIndex: 1000 }}
        >
          <div
            className="absolute
            flex
            min-h-full
           min-w-full justify-center
           rounded-tl-3xl rounded-tr-3xl
           bg-gradient-to-r from-silver_linear to-silver_linear_end 
           text-white sm:rounded-tr-none sm:rounded-bl-3xl"
          >
            <div className="absolute flex h-full w-full flex-col justify-center sm:w-2/3">
              <div className="flex w-full justify-center py-4">
                <span className="mx-2 text-4xl font-bold text-white">Log</span>
                <span className="text-4xl font-bold text-pink">In</span>
              </div>

              <div className="w-full">
                <div className="mt-8 flex justify-center">
                  <span className="px-2">
                    <Image src="/Images/auth/fb.png" width={36} height={36} alt='meta' />
                  </span>
                  <span className="px-2">
                    <Image
                      src="/Images/auth/google.png"
                      width={36}
                      height={36}
                      alt='goo'
                    />
                  </span>
                </div>
              </div>

              <div className="flex w-full items-center justify-center p-4">
                <span className="h-1 w-full bg-white"></span>
                <span className="mx-4 text-white">Or</span>
                <span className="h-1 w-full bg-white"></span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="px-4">
                  {/* <InputBox1 type="text" label="Name" id="name" /> */}
                  <InputBox1 type="email" label="Email" id="email" required />
                  <InputBox1
                    type="password"
                    label="Password"
                    id="password"
                    required
                  />
                </div>

                <div className="flex justify-between px-6 text-xs text-white">
                  <span>Forgot Password ?</span>
                  <NavLink href="/auth/tutor/signup" passHref>
                    <span className="cursor-pointer hover:text-pink">
                      Don&apos;t have an account? Sign Up
                    </span>
                  </NavLink>
                </div>

                <div className="mt-8">
                  <AuthButton type="submit" label="Log In" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
