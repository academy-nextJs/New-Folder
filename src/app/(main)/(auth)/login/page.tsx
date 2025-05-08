'use client'
import AuthHeader from '@/components/auth/authHeader'
import RegisterForm from '@/components/auth/registerForm'
import TabContent from '@/components/auth/tabContent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
  const {t} = useTranslation("auth")
  return (
    <div>
      <AuthHeader pageName={t("loginPage.title")} />
      <TabContent registerElement={<RegisterForm />} defaultValue='login' />
    </div>
  )
}

export default LoginPage