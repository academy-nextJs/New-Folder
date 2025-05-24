import { BlurFade } from '@/components/magicui/blur-fade'
import React from 'react'
import ReservesHeader from './header/ReservesHeader'
import ReservesContent from './content/ReservesContent'

const ReservesComponent = () => {
    return (
        <BlurFade className='px-4 bg-subBg rounded-xl py-4 flex flex-col gap-6'>
            <ReservesHeader />
            <svg width="100%" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="100%" y2="1" stroke="#888888" strokeOpacity="0.26" strokeDasharray="7 7" />
            </svg>
            <ReservesContent />
        </BlurFade>
    )
}

export default ReservesComponent
