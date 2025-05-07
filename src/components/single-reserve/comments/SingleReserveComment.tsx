import React from 'react'
import SingleReserveForm from '../../common/CommentForm'
import SingleReserveComments from './SingleReserveComments'

const SingleReserveComment = () => {
    return (
        <div className='flex flex-col items-center gap-12 w-full'>
            <SingleReserveForm />
            <svg width="999" height="3" viewBox="0 0 999 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.31134e-07" y1="1.5" x2="999" y2="1.50009" stroke="url(#paint0_linear_1_3508)" stroke-width="3" />
                <defs>
                    <linearGradient id="paint0_linear_1_3508" x1="999" y1="3.50009" x2="-4.37115e-08" y2="3.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#AAAAAA" stop-opacity="0" />
                        <stop offset="0.455" stop-color="#565656" />
                        <stop offset="1" stop-color="#AAAAAA" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <SingleReserveComments />
        </div>
    )
}

export default SingleReserveComment
