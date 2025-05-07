'use client'
import React, { useState } from 'react'
import SingleReserveForm from '../../common/CommentForm'
import SingleReserveComments from './SingleReserveComments'

const SingleReserveComment = () => {
    const [viewReply, setViewReply] = useState<boolean>(false)
    const [parent_comment, setParent_comment] = useState<string>('')
    const [parent_comment_id, setParent_comment_id] = useState<string | null>(null)

    return (
        <div className='flex flex-col items-center gap-12 w-full'>
            <SingleReserveForm parent_comment_id={parent_comment_id} parent_comment={parent_comment} viewReply={viewReply} />
            <svg width="999" height="3" viewBox="0 0 999 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.31134e-07" y1="1.5" x2="999" y2="1.50009" stroke="url(#paint0_linear_1_3508)" strokeWidth="3" />
                <defs>
                    <linearGradient id="paint0_linear_1_3508" x1="999" y1="3.50009" x2="-4.37115e-08" y2="3.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#AAAAAA" stopOpacity="0" />
                        <stop offset="0.455" stopColor="#565656" />
                        <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <SingleReserveComments setParent_comment={setParent_comment} setParent_comment_id={setParent_comment_id} setViewReply={setViewReply} />
        </div>
    )
}

export default SingleReserveComment
