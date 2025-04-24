'use client'
import { InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { IOTPInput } from '@/types/input-type/input-types'
import { OTPInput } from 'input-otp'
import React, { FC } from 'react'

const OtpInput: FC<IOTPInput> = ({ onchange }) => {
    return (
        <div className='rtl'>
            <OTPInput maxLength={5} onChange={onchange} >
                <InputOTPGroup>
                    <InputOTPSlot className='text-white border-[#565656] rounded-[12px] size-[44px]' index={0} />
                    <InputOTPSlot className='text-white border-[#565656] rounded-[12px] size-[44px]' index={1} />
                    <InputOTPSlot className='text-white border-[#565656] rounded-[12px] size-[44px]' index={2} />
                    <InputOTPSlot className='text-white border-[#565656] rounded-[12px] size-[44px]' index={3} />
                    <InputOTPSlot className='text-white border-[#565656] rounded-[12px] size-[44px]' index={4} />
                </InputOTPGroup>
            </OTPInput>
        </div>
    )
}

export default OtpInput
