import AuthHeader from '@/components/auth/authHeader'
import RegisterForm from '@/components/auth/registerForm'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className=''>
       <AuthHeader pageName='ورود به حساب کاربری'/>
       <RegisterForm/>
    </div>
  )
}

export default RegisterPage