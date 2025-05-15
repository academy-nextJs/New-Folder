'use client'
import React, { useState } from 'react'
import Stepper from '../stepper/Stepper'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import FirstStep from './steps/FirstStep'
import ThirdStep from './steps/ThirdStep'
import SecondStep from './steps/SecondStep'
import FourthStep from './steps/FourthStep'
import FifthStep from './steps/FifthStep'

const ContentAddHouses = () => {
  const [step, setStep] = useState<number>(4)

  return (
    <div className='flex flex-col gap-6'>
      <Stepper currentStep={step} />
      {step === 0 && <FirstStep />}
      {step === 1 && <SecondStep />}
      {step === 2 && <ThirdStep />}
      {step === 3 && <FourthStep />}
      {step === 4 && <FifthStep />}

      <div className='flex justify-start w-full flex-row-reverse gap-6'>
        {step <= 3 && <CommonButton title=' مرحله بعد ' icon={<ChevronLeft size={16} />} onclick={() => {
            if(step <= 3){
                setStep(step +1)
            }
        }} />}
        {step === 4 && <CommonButton title=' ثبت آگهی ' icon={<Plus size={16} />} onclick={() => {
            console.log(" ثبت آگهی ")
        }}/>}
        {step > 0 && <CommonButton title=' مرحله قبل ' classname='bg-transparent border border-foreground flex-row-reverse text-foreground' icon={<ChevronRight size={16} />} onclick={() => {
            if(step >= 0){
                setStep(step -1)
            }
        }} />}
      </div>
    </div>
  )
}

export default ContentAddHouses
