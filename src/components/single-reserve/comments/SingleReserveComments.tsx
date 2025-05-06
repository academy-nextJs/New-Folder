'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { QAWidget } from '@/components/common/CommentItem'
import { IGetComment } from '@/types/comment-type/comment-type'
import { fetchComments } from '@/utils/service/api/fetchComments'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Loader } from '@/components/common/Loader'

const SingleReserveComments = ({ perPageItems }: { perPageItems?: number }) => {
  const PAGE_SIZE = perPageItems || 2
  const [comments, setComments] = useState<IGetComment[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const id = params?.id as string

  const hasNext = comments.length === PAGE_SIZE

  const fetchPage = async (pageNumber: number) => {
    setLoading(true)
    try {
      const data = (await fetchComments(id, pageNumber, PAGE_SIZE)) as IGetComment[]
      setComments(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) fetchPage(page)
  }, [id, page])

  const pages = useMemo(() => {
    const last = hasNext ? page + 1 : page
    return Array.from({ length: last }, (_, i) => i + 1)
  }, [page, hasNext])

  return (
    <div className="flex flex-col mt-8 w-full">
      {loading ? (
        <div className="flex justify-center py-10">
          <Loader />
        </div>
      ) : comments.length === 0 ? (
        <p className="text-center text-sm text-subText mb-4">
          هیچ نظری وجود ندارد.
        </p>
      ) : (
        <div className="flex gap-4">
          {comments.map((comment) => (
            <QAWidget key={comment.id} {...comment} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1 || loading}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          <ChevronRight size={16} />
        </Button>

        {pages.map((p) => (
          <Button
            key={p}
            variant={p === page ? 'default' : 'outline'}
            size="sm"
            disabled={loading}
            onClick={() => setPage(p)}
          >
            {p}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          disabled={!hasNext || loading}
          onClick={() => hasNext && setPage((p) => p + 1)}
        >
          <ChevronLeft size={16} />
        </Button>
      </div>
    </div>
  )
}

export default SingleReserveComments
