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
import { useTranslations } from 'next-intl'

const ContentAddHouses = () => {
  const [step, setStep] = useState<number>(0)
  const t = useTranslations('dashboardSeller.addHouses')

  return (
    <div className='flex flex-col gap-6'>
      <Stepper currentStep={step} />
      {step === 0 && <FirstStep />}
      {step === 1 && <ThirdStep />}
      {step === 2 && <SecondStep />}
      {step === 3 && <FourthStep />}
      {step === 4 && <FifthStep />}

      <div className='flex justify-start w-full flex-row-reverse gap-6'>
        {step <= 3 && <CommonButton title={t('nextStep')} icon={<ChevronLeft size={16} />} onclick={() => {
            if(step <= 3){
                setStep(step +1)
            }
        }} />}
        {step === 4 && <CommonButton title={t('submitAd')} icon={<Plus size={16} />} onclick={() => {
            console.log(" ثبت آگهی ")
        }}/>}
        {step > 0 && <CommonButton title={t('prevStep')} classname='bg-transparent border border-foreground flex-row-reverse text-foreground' icon={<ChevronRight size={16} />} onclick={() => {
            if(step >= 0){
                setStep(step -1)
            }
        }} />}
      </div>
    </div>
  )
}

export default ContentAddHouses