import React from 'react'
import Signin from '../../components/signin/signIn.component';
import SignUp from '../../components/sign-up/signUp.component';
import './sign-in-sign-up.style.scss'

function SignIn() {
  return (
    <div className='sign-in-sign-up'>
      <Signin/>
      <SignUp/>
    </div>
  )
}

export default SignIn
