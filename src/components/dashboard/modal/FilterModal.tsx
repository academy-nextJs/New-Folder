import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const FilterModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <div className='cursor-pointer px-4 py-2 rounded-[14px] flex text-primary-foreground bg-primary text-sm hover:scale-[1.02] transition-all'> فیلتر ها </div>
            </DialogTrigger>
            <DialogContent className='rounded-2xl flex flex-col gap-8 items-start py-[50px]'>
                <DialogHeader className='flex flex-col gap-8 w-full'>
                    <DialogTitle>
                        <CommonSelect
                            label='نوع معامله'
                            selectItems={[
                                { label: 'رهن', value: 'mortgage' },
                                { label: 'اجاره', value: 'rental' },
                                { label: 'خرید', value: 'direct_purchase' },
                                { label: 'همه', value: "all" },
                            ]}
                            placeholder='اجاره'
                            color='text-subText'
                            classname='bg-subBg2 w-full'
                        />
                    </DialogTitle>
                    <DialogDescription className='flex flex-col w-full gap-4'>
                        <CommonSelect
                            label="مرتب سازی براساس"
                            selectItems={[]}
                            placeholder='تعداد شبانه روز'
                            color='text-subText'
                            classname='bg-subBg2 w-full'
                        />
                        <CommonSelect
                            selectItems={[]}
                            placeholder='نزولی'
                            color='text-subText'
                            classname='bg-subBg2 w-full'
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default FilterModal
