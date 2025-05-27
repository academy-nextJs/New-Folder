import AuthHeader from '@/components/auth/authHeader'
import TabContent from '@/components/auth/tabContent'
import VerifyForm from '@/components/auth/verifyForm'
import React from 'react'

const VerifyCode = () => {
    return (
        <div>
            <AuthHeader pageName="ارسال کد" />
            <TabContent defaultValue="register" registerElement={<VerifyForm />} />
        </div>
    )
}

export default VerifyCode
