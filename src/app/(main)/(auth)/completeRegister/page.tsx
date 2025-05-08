'use client'
import AuthHeader from '@/components/auth/authHeader'
import CompleteRegisterForm from '@/components/auth/completeRegisterForm'
import TabContent from '@/components/auth/tabContent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const CompleteRegister = () => {
    const {t} = useTranslation("auth")

    return (
        <div>
            <AuthHeader pageName={t("completeRegisterPage.title")} />
            <TabContent defaultValue="register" registerElement={<CompleteRegisterForm />} />
        </div>
    )
}

export default CompleteRegister
