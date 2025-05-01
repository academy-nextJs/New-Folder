import AuthHeader from '@/components/auth/authHeader'
import RegisterForm from '@/components/auth/registerForm'
import TabContent from '@/components/auth/tabContent'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='my-[100px]'>
      <AuthHeader pageName=' ورود به حساب کاربری ' />
      <TabContent registerElement={<RegisterForm />} defaultValue='login' />
    </div>
  )
}

export default LoginPage