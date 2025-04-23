'use client'
import { Button } from '@/components/ui/button'
import { ILinkButtons } from '@/types/buttons-type/linkButtons-type'
import { redirect } from 'next/navigation'
import React, { FC } from 'react'
import {ChevronLeft} from 'lucide-react'

const LinkButtons: FC<ILinkButtons> = ({ title, classname, link }) => {
  return (
    <div>
      <Button variant={'scale'} onClick={() => redirect(link)} className={`cursor-pointer rounded-xl h-[36px] flex ${classname}`}>  
        <ChevronLeft />
        {title}
       </Button>
    </div>
  )
}

export default LinkButtons
