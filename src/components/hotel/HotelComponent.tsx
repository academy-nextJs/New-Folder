'use client'
import React, { useState } from 'react'
import Stepper from './stepper/Stepper'
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import FourthStep from './steps/FourthStep';

const HotelComponent = () => {

  const [currentStep, setCurrentStep] = useState<number>(3);
  const handleCurrentStepIncrease = () => {
    setCurrentStep(currentStep +1)
  }
  const handleCurrentStepDecrease = () => {
    setCurrentStep(currentStep -1)
  }

  return (
    <div className='flex flex-col gap-8'>
      <Stepper currentStep={currentStep} />
      {currentStep === 0 && <FirstStep handleCurrentStepIncrease={handleCurrentStepIncrease} />}
      {currentStep === 1 && <SecondStep handleCurrentStepIncrease={handleCurrentStepIncrease} handleCurrentSteDecrease={handleCurrentStepDecrease} />}
      {currentStep === 3 && <FourthStep handleCurrentStepIncrease={handleCurrentStepIncrease} />}
    </div>
  )
}

export default HotelComponent
