import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const SkeletonCardComponent = () => {
  return (
    <div className="flex flex-col gap-4 w-[272px] h-[350px] my-10 mx-auto">
      <div className="relative">
        <Skeleton className="w-full h-[172px] rounded-[20px] bg-secondary-light2" />
        <div className="absolute top-[-20px] right-[10px]">
          <Skeleton className="w-[50px] h-[24px] rounded-[10px] bg-muted" />
        </div>
        <div className="absolute top-[-30px] left-0">
          <Skeleton className="w-[45px] h-[22px] rounded-[8px] bg-muted" />
        </div>
      </div>
      <Skeleton className="w-3/4 h-[20px] rounded bg-secondary-light2" />
      <div className="flex flex-col gap-2">
        <Skeleton className="w-1/2 h-[14px] rounded bg-muted" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="w-[60px] h-[14px] rounded bg-muted" />
          <Skeleton className="w-[60px] h-[14px] rounded bg-muted" />
          <Skeleton className="w-[60px] h-[14px] rounded bg-muted" />
        </div>
      </div>
      <Skeleton className="w-full h-[40px] rounded-[12px] bg-secondary-light2" />
    </div>
  )
}

export default SkeletonCardComponent
