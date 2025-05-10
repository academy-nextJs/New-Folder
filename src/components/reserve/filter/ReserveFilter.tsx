'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Filter, MapPin, Megaphone } from 'lucide-react'
import React, { FC, useState } from 'react'
import ReserveModalMap from '../map/ReserveModalMap'
import { motion } from 'framer-motion'

interface IReserveFilter {
    setOrder: React.Dispatch<React.SetStateAction<'DESC' | 'ASC'>>
    setSort: React.Dispatch<React.SetStateAction<string>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    setLocation: React.Dispatch<React.SetStateAction<string>>
    houseLength?: number
}

const ReserveFilter: FC<IReserveFilter> = ({ setOrder, setSort, setSearch, houseLength, setLocation }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className='bg-secondary-light4 w-full md:flex-nowrap flex-wrap gap-4 rounded-[24px] px-4 py-3 flex justify-between'>
            <div className='flex md:flex-row md:flex-wrap flex-col w-full gap-4'>
                <CommonSelect
                    placeholder='استان ، شهر ، هتل ....'
                    onValueChange={(value => {
                        setLocation(value)
                    })}
                    icon={<MapPin size={16} className='text-subText' />}
                    selectItems={[
                        { label: 'آبادان', value: 'abadan' },
                        { label: 'اراک', value: 'arak' },
                        { label: 'ارومیه', value: 'urmia' },
                        { label: 'اردبیل', value: 'ardabil' },
                        { label: 'اصفهان', value: 'isfahan' },
                        { label: 'اهواز', value: 'ahvaz' },
                        { label: 'ایلام', value: 'ilam' },
                        { label: 'بجنورد', value: 'bojnord' },
                        { label: 'بندرعباس', value: 'bandarabbas' },
                        { label: 'بوشهر', value: 'bushehr' },
                        { label: 'بیرجند', value: 'birjand' },
                        { label: 'تبریز', value: 'tabriz' },
                        { label: 'تهران', value: 'tehran' },
                        { label: 'خرم‌آباد', value: 'khorramabad' },
                        { label: 'رشت', value: 'rasht' },
                        { label: 'زاهدان', value: 'zahedan' },
                        { label: 'زنجان', value: 'zanjan' },
                        { label: 'ساری', value: 'sari' },
                        { label: 'سمنان', value: 'semnan' },
                        { label: 'سنندج', value: 'sanandaj' },
                        { label: 'شهرکرد', value: 'shahrekord' },
                        { label: 'شیراز', value: 'shiraz' },
                        { label: 'قزوین', value: 'qazvin' },
                        { label: 'قم', value: 'qom' },
                        { label: 'کرج', value: 'karaj' },
                        { label: 'کرمان', value: 'kerman' },
                        { label: 'کرمانشاه', value: 'kermanshah' },
                        { label: 'گرگان', value: 'gorgan' },
                        { label: 'مشهد', value: 'mashhad' },
                        { label: 'همدان', value: 'hamedan' },
                        { label: 'یاسوج', value: 'yasuj' },
                        { label: 'یزد', value: 'yazd' }
                    ]}
                    color='text-subText dark:group-hover:text-white'
                    label='مقصد یا  هتل شما '
                    classname='px-4 py-5 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                />
                <CommonSelect
                    onValueChange={(value => {
                        if (value === 'last_updated') {
                            setSort('last_updated')
                            setOrder('DESC')
                        }
                        if (value === 'price_low') {
                            setSort('price')
                            setOrder('ASC')
                        }
                        if (value === 'rate') {
                            setSort('rate')
                            setOrder('DESC')
                        }
                    })}
                    placeholder="جدید ترین ها"
                    icon={<Filter size={16} className='text-subText' />}
                    selectItems={[
                        { label: 'جدید ترین ها', value: 'last_updated' },
                        { label: 'ارزان ترین ها', value: 'price_low' },
                        { label: 'محبوب ترین ها', value: 'rate' },
                    ]}
                    color='text-subText dark:group-hover:text-white'
                    label='مرتب سازی بر اساس'
                    classname='px-4 py-5 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                />
                <CommonInput
                    onchange={(e) => setSearch(e.target.value)}
                    label='جستجو'
                    classname='px-4 py-2 border-subText xl:w-[600px] w-full dark:group-hover:placeholder:text-white placeholder:text-subText dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    color='text-subText dark:group-hover:text-white'
                    placeholder='نام هتل مورد نظر .....'
                />

            </div>
            <div className='flex gap-4 justify-center items-center'>
                <div className='px-4 py-2 border md:mx-0 mx-auto border-card-foreground items-center justify-center rounded-[16px] flex flex-nowrap gap-2 text-sm'>
                    <Megaphone size={20} />
                    <span className='whitespace-nowrap'> تعداد آگهی : {houseLength} </span>
                </div>
                <CommonButton onclick={() => setIsOpen(true)} icon={<MapPin />} title='نقشه' classname='bg-transparent border-foreground border text-foreground flex xl:hidden' />
                <ReserveModalMap isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </motion.div>
    )
}

export default ReserveFilter
