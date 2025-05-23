import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Book, CheckCircle, ChevronLeft, ChevronRight, Code, Coins, Edit, Megaphone, Users } from 'lucide-react'
import React from 'react'

const travelers = [
    {
        ageZone: "بزرگسال",
        fullName: " محمد رضا ساداتی ",
        gender: " مرد ",
        nationalCode: " 09229566767 ",
        birthDay: "1350 / 5 / 12",
        facility: null,
        priceFacility: null,
        price: 1520000
    }
]

const SecondStep = ({ handleCurrentStepIncrease, handleCurrentSteDecrease }: { handleCurrentStepIncrease: () => void, handleCurrentSteDecrease: () => void }) => {
    return (
        <div className='w-full flex flex-col gap-8'>

            <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
                <div className='w-full bg-subBg2 rounded-2xl flex-wrap gap-4 px-4 py-2 flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Users size={20} />
                        <span> مشخصات مسافران </span>
                    </div>
                    <div className='flex text-primary gap-3 cursor-pointer items-center'>
                        <Edit size={20} />
                        <span> ویرایش مسافران </span>
                    </div>
                </div>
                <div className='w-full px-4 py-4'>
                    <Table className='text-right w-full'>
                        <TableHeader className='rounded-2xl text-foreground'>
                            <TableRow className='text-right'>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> بازه سنی </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> نام و نام خانوادگی </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> جنسیت </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> کدملی / شماره یا پاسپورت </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> تاریخ تولد </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> خدمات </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> مبلغ خدمات </TableHead>
                                <TableHead className='text-right whitespace-nowrap text-foreground'> قیمت </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {travelers.map((traveler, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className='py-4 whitespace-nowrap'>
                                        {traveler.ageZone || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.fullName || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.gender || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.nationalCode || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.birthDay || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.facility || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.priceFacility || "-"}
                                    </TableCell>
                                    <TableCell className='whitespace-nowrap'>
                                        {traveler.price || "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
                <div className='w-full bg-subBg2 rounded-2xl flex-wrap gap-4 px-4 py-2 flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Coins size={20} />
                        <span> هزینه جانبی </span>
                    </div>
                </div>
                <span className='mx-4 font-light leading-10'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                    متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                </span>
            </div>

            <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
                <div className='w-full bg-subBg2 rounded-2xl px-4 py-2 flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Megaphone size={20} />
                        <span> طلاع رسانی سفر  <span className='text-primary'> ( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود . ) </span></span>
                    </div>
                </div>
                <div className='px-4 w-full flex gap-4 items-center pb-4 flex-wrap'>
                    <div className='flex gap-2 items-center'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.06215 1.53451C4.38431 0.663888 5.61569 0.663888 5.93785 1.53451L6.46097 2.94821C6.56226 3.22193 6.77807 3.43774 7.05179 3.53903L8.46549 4.06215C9.33611 4.38431 9.33611 5.61569 8.46549 5.93785L7.05179 6.46097C6.77807 6.56226 6.56226 6.77807 6.46097 7.05179L5.93785 8.46549C5.61569 9.33611 4.38431 9.33611 4.06215 8.46549L3.53903 7.05179C3.43774 6.77807 3.22193 6.56226 2.94821 6.46097L1.53451 5.93785C0.663888 5.61569 0.663888 4.38431 1.53451 4.06215L2.94821 3.53903C3.22193 3.43774 3.43774 3.22193 3.53903 2.94821L4.06215 1.53451Z" fill="white" />
                        </svg>
                        <span className='text-primary'> <span className='text-foreground'> شماره تماس: </span> 09267687999 </span>
                    </div>
                    <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="16" x2="0.999999" y2="4.37113e-08" stroke="#DDDDDD" strokeWidth="2" />
                    </svg>
                    <div className='flex gap-2 items-center'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.06215 1.53451C4.38431 0.663888 5.61569 0.663888 5.93785 1.53451L6.46097 2.94821C6.56226 3.22193 6.77807 3.43774 7.05179 3.53903L8.46549 4.06215C9.33611 4.38431 9.33611 5.61569 8.46549 5.93785L7.05179 6.46097C6.77807 6.56226 6.56226 6.77807 6.46097 7.05179L5.93785 8.46549C5.61569 9.33611 4.38431 9.33611 4.06215 8.46549L3.53903 7.05179C3.43774 6.77807 3.22193 6.56226 2.94821 6.46097L1.53451 5.93785C0.663888 5.61569 0.663888 4.38431 1.53451 4.06215L2.94821 3.53903C3.22193 3.43774 3.43774 3.22193 3.53903 2.94821L4.06215 1.53451Z" fill="white" />
                        </svg>
                        <span className='text-primary'> <span className='text-foreground'> ایمیل: </span> Examle@gmail.com </span>
                    </div>
                </div>
            </div>

            <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
                <div className='w-full bg-subBg2 rounded-2xl flex-wrap gap-4 px-4 py-2 flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Code size={20} />
                        <span> کد تخفیف </span>
                    </div>
                </div>

                <div className='w-full flex gap-4 px-4 pb-4 items-end flex-wrap'>
                    <CommonInput placeholder=' وارد کنید...' label='کد تخفیف' classname='text-subText w-full placeholder:text-subText border-subText' color='text-subText' />
                    <CommonButton title={" اعمال کد تخفیف "} icon={<CheckCircle size={16} />} classname='bg-transparent flex border-primary border w-fit text-primary' />
                </div>
            </div>

            <div className='relative w-full max-lg:mt-[30px] flex justify-center items-center'>
                <svg className='max-lg:hidden' width="100%" height="84" viewBox="0 0 1376 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="100%" height="82" rx="31" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeDasharray="16 16" />
                </svg>
                <div className='w-full flex absolute justify-between flex-wrap gap-4 max-w-[1300px] px-4 py-2 text-lg md:text-2xl'>
                    <div className='flex gap-3 items-center'>
                        <Book size={20} />
                        <span> قیمت بلیط <span className='text-primary'> {SplitNumber(1500000)} <span> ت </span> </span></span>
                    </div>
                    <div className='flex gap-4'>
                        <CommonButton onclick={handleCurrentSteDecrease} title={" مرحله قبل "} icon={<ChevronRight size={16} />} classname='bg-transparent border-foreground flex flex-row-reverse border w-fit text-foreground' />
                        <CommonButton onclick={handleCurrentStepIncrease} title={" پرداخت آنلاین "} icon={<ChevronLeft size={16} />} classname='bg-transparent flex border-primary border w-fit text-primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondStep
