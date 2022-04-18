import Head from 'next/head'
import SignUp from '../../../components/Auth/tutor/Signup'
import Link from 'next/link'

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <SignUp />
    </>
  )
}

export default SignUpPage
