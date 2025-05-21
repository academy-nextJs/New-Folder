'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Bell, X } from 'lucide-react'
import React, { useState } from 'react'

const NotifModal = () => {

    const [open, setOpen] = useState<boolean>();

    return (
        <Dialog onOpenChange={setOpen} open={open} >
            <DialogTrigger>
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md cursor-pointer transition-colors"> <Bell size={16} /> تنظیمات نوتیفیکیشن </div>
            </DialogTrigger>
            <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl flex flex-col gap-8 items-center'>
                <DialogHeader className='flex justify-between flex-row w-full items-center my-4'>
                    <DialogTitle className='text-xl'>
                        تنظیمات نوتیفیکیشن
                    </DialogTitle>
                    <DialogDescription>
                        <CommonButton onclick={() => setOpen(false)} title='بستن' icon={<X />} classname='border border-danger bg-transparent text-danger' />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='w-full'>
                    <div className='flex flex-col gap-4 w-full mx-auto justify-center items-center'>
                        <div className='flex w-full justify-between text-lg items-center'>
                            نوتیفیکیشن رزرو
                            <Switch />
                        </div>
                        <div className='flex w-full justify-between text-lg items-center'>
                            نوتیفیکیشن پرداخت
                            <Switch />
                        </div>
                        <div className='flex w-full justify-between text-lg items-center'>
                            نوتیفیکیشن تخفیف
                            <Switch />
                        </div>
                        <div className='flex w-full justify-between text-lg items-center'>
                            نوتیفیکیشن سیستمی
                            <Switch />
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default NotifModal
