import { ChevronRight, PhoneCall } from 'lucide-react'
import React from 'react'
import FooterInfo from './footer-info/FooterInfo'
import Person from '@/assets/FooterPicture.png'
import DeltaLogo from '@/assets/delta-logo.png'
import Image from 'next/image'
import FooterForm from './footer-form/FooterForm'

const Footer = () => {
    return (
        <div className='bg-[#8CFF45] w-full mt-[50px] rounded-2xl'>
            <div className='xl:flex hidden'>
                <div className='bg-[#8CFF45] w-4/12 px-8 py-6 rounded-2xl'>
                    <div className='bg-[#232323] text-[#FFFFFF] flex flex-row-reverse gap-3 w-fit px-4 py-2 rounded-2xl'> <PhoneCall className='w-[20px]' /> <span> 09229167194 - 09154569872 </span> </div>
                </div>
                <div className='bg-[#232323] w-10/12 flex justify-end rounded-br-[100px]'>
                    <Image alt='' className='' src={DeltaLogo} />
                </div>
            </div>
            <div className='bg-[#232323] w-full md:flex justify-end xl:hidden rounded'>
                <Image alt='' className='' src={DeltaLogo} />
            </div>
            <div className='py-6 px-8 relative'>
                <div>
                    <div className="text-black flex flex-col gap-4">

                        <div className="flex flex-row w-fit items-center gap-4 justify-end">
                            <span className="xl:text-base text-sm">همیشه کنارتیم</span>
                            <div className='flex gap-1 justify-center items-center'>
                                <ChevronRight size={16} />
                                <ChevronRight size={12} />
                                <ChevronRight size={8} />
                            </div>
                        </div>

                        <h2 className="xl:text-[32px] font-semibold text-xl tracking-tight">
                            24 ساعت روز و 7 روز هفته در اختیار شماییم!
                        </h2>

                        <p className="xl:text-[20px] text-base tracking-tighter">
                            تیم دلتا با ارائه بهترین نیروهای خدماتی و سرویس‌های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد.
                        </p>
                    </div>
                    <FooterForm classname='xl:absolute xl:top-[250px] xl:my-0 my-10' />
                </div>
                <div>
                    <div className='flex flex-col items-end'>
                        <Image className='grayscale-100 relative left-[40px] xl:block hidden' alt='' src={Person} width={524} height={40} />
                        <FooterInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
