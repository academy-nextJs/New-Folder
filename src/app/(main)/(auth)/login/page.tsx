import AuthHeader from '@/components/auth/authHeader'
import LoginForm from '@/components/auth/loginForm'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
       <AuthHeader pageName=' ورود به حساب کاربری '/>
       <LoginForm/>
    </div>
  )
}

export default LoginPage