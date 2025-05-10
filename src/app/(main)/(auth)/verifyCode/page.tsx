'use client'
import AuthHeader from '@/components/auth/authHeader'
import TabContent from '@/components/auth/tabContent'
import VerifyForm from '@/components/auth/verifyForm'
import React from 'react'
import { useTranslation } from 'react-i18next'

const VerifyCode = () => {
    const {t} = useTranslation("auth")

    return (
        <div>
            <AuthHeader pageName={t("verifyCodePage.title")} />
            <TabContent defaultValue="register" registerElement={<VerifyForm />} />
        </div>
    )
}

export default VerifyCode
