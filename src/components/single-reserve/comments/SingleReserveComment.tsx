'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { fetchComments } from '@/utils/service/api/fetchComments'
import SingleReserveForm from '../../common/CommentForm'
import SingleReserveComments from './SingleReserveComments'
import { IGetComment } from '@/types/comment-type/comment-type'

const PAGE_SIZE = 2

const SingleReserveComment = () => {
  const [viewReply, setViewReply] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [parent_comment_id, setParent_comment_id] = useState<string | null>(null)
  const [page, setPage] = useState(1)

  const params = useParams()
  const id = params?.id as string

  const {
    data: comments = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery<IGetComment[]>({
    queryKey: ['comments', id, page],
    queryFn: () => fetchComments(id, page, PAGE_SIZE),
  })

  return (
    <div className="flex flex-col items-center gap-12 w-full">
      <SingleReserveForm
        parent_comment_id={parent_comment_id}
        title={title}
        viewReply={viewReply}
        refetch={refetch}
      />

      <svg width="999" height="3" viewBox="0 0 999 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="1.5" x2="999" y2="1.5" stroke="url(#paint0)" strokeWidth="3" />
        <defs>
          <linearGradient id="paint0" x1="999" y1="3.5" x2="0" y2="3.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AAAAAA" stopOpacity="0" />
            <stop offset="0.455" stopColor="#565656" />
            <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <SingleReserveComments
        comments={comments}
        isLoading={isLoading}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
        setTitle={setTitle}
        setParent_comment_id={setParent_comment_id}
        setViewReply={setViewReply}
        hasNext={comments.length === PAGE_SIZE}
      />
    </div>
  )
}

export default SingleReserveComment
