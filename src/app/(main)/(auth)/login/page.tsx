import AuthHeader from '@/components/auth/authHeader'
import LoginForm from '@/components/auth/loginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
       <AuthHeader pageName='ثبت نام'/>
        <LoginForm/>
    </div>
  )
}

export default LoginPage