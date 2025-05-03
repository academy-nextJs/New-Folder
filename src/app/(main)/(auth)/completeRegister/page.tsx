import AuthHeader from '@/components/auth/authHeader'
import CompleteRegisterForm from '@/components/auth/completeRegisterForm'
import TabContent from '@/components/auth/tabContent'
import React from 'react'

const CompleteRegister = () => {
    

    return (
        <div>
            <AuthHeader pageName=' ثبت نام ' />
            <TabContent defaultValue="register" registerElement={<CompleteRegisterForm />} />
        </div>
    )
}

export default CompleteRegister
