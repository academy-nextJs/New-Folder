import React, { FC } from 'react'

interface IProps {
    title: string | React.ReactNode
    content: string | React.ReactNode
}

const FacilityCard: FC<IProps> = ({ title, content }) => {
    return (
        <div className='bg-secondary-light2 text-sm w-fit h-[94] rounded-[16px] flex gap-2 flex-col p-2 justify-center items-center'>
            <span> {title} </span>
            <div className='flex justify-center whitespace-nowrap items-center bg-accent rounded-[10px] px-8 py-2'> {content} </div>
        </div>
    )
}

export default FacilityCard
