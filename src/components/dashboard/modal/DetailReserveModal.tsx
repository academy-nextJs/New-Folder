'use client'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Info, X, MapPin, Calendar, Bed, Car, Bath, Trees } from 'lucide-react'
import React, { useState } from 'react'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import PaymentsModalReserves from './PaymentsModalReserves'
import PassengersModal from './PassengersModal'

const DetailReserveModal = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> جزییات <Info size={16} /> </div>
            </DialogTrigger>
            <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl py-8 px-6 w-full max-w-[1050px]'>
                <DialogTitle>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-xl font-bold'>هتل همایون فرکیش ایران</h2>
                        <CommonButton
                            onclick={() => setOpen(false)}
                            title='بستن'
                            icon={<X />}
                            classname='border border-danger bg-transparent text-danger'
                        />
                    </div>
                </DialogTitle>

                <div className='overflow-y-auto overflow-x-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <div className='flex flex-col gap-4 justify-between'>
                            <img src={"  "} alt='تصویر' className='w-full max-md:h-[150px] h-[300px] bg-muted rounded-xl flex items-center justify-center text-muted-foreground' />
                            <div className='flex flex-col gap-4 text-sm text-muted-foreground'>
                                <div className='flex items-center gap-2 truncate'><MapPin size={16} /> کیش، گیلان، رشت، چابکسر، جاده رشت...</div>
                                <div className='flex gap-4 items-center flex-wrap text-subText'>
                                    <div className='flex gap-2'>
                                        <Bed size={16} />
                                        <span> 4 خوابه </span>
                                    </div>
                                    |
                                    <div className='flex gap-2'>
                                        <Car size={16} />
                                        <span> 1 پارکینگ </span>
                                    </div>
                                    |
                                    <div className='flex gap-2'>
                                        <Bath size={16} />
                                        <span> 2 حمام </span>
                                    </div>
                                    |
                                    <div className='flex gap-2'>
                                        <Trees size={16} />
                                        <span> حیاط </span>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-subBg2 px-4 py-2 rounded-xl flex justify-between gap-4 flex-wrap'>
                                <h2 className='text-subText'> قیمت خرید: </h2>
                                <span className='text-subText'> {SplitNumber(15000000)}ت </span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 text-right'>
                            <p className='text-sm leading-7 text-muted-foreground max-md:truncate text-justify'>
                                آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان.  آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان.
                            </p>
                            <div className='text-xs flex gap-2 text-muted-foreground'>
                                <Calendar size={16} />
                                تاریخ رزرو: <span className='font-semibold'>12 مرداد - 1401 / 12:33</span>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <h2 className='text-subText whitespace-nowrap'> برچسب ها: </h2>
                                <div className='flex flex-wrap gap-2 mt-2 text-sm'>
                                    <span className='px-3 py-1 rounded-full bg-primary text-primary-foreground'>رایگان</span>
                                    <span className='px-3 py-1 rounded-full bg-primary text-primary-foreground'>تایید شده</span>
                                    <span className='px-3 py-1 rounded-full bg-primary text-primary-foreground'>پرداخت شده</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex justify-end gap-4'>
                    <PassengersModal />
                    <PaymentsModalReserves />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DetailReserveModal
