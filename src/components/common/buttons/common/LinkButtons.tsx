'use client'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import React, { FC } from 'react'
import {ChevronLeft} from 'lucide-react'
import { ILinkButton } from '@/types/buttons-type/buttons-type'

const LinkButtons: FC<ILinkButton> = ({ title, classname, link }) => {
  return (
    <div>
      <Button variant={'scale'} onClick={() => redirect(link)} className={`cursor-pointer rounded-xl flex ${classname}`}>  
        <ChevronLeft />
        {title}
       </Button>
    </div>
  )
}

export default LinkButtons
