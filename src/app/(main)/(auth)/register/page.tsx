import AuthHeader from '@/components/auth/authHeader'
import RegisterForm from '@/components/auth/registerForm'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className=''>
       <AuthHeader pageName='ثبت نام'/>
       <RegisterForm/>
    </div>
  )
}

export default RegisterPage