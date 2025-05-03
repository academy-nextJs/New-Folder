'use client'
import { Loader } from '@/components/common/Loader'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen inset-0 flex justify-center items-center mx-auto'>
      <Loader />
    </div>
  )
}

export default Loading
