/* eslint-disable */

'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonModal from '@/components/dashboard/modal/CommonModal'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Coins, Delete, Edit, Home, Info, LayoutGrid, MoreHorizontal, PlusCircle, Star } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

const ContentMyHouses = () => {
    const t = useTranslations('dashboardSeller.myHouses')
    const houses = [
        { name: "آپارتمان لوکس زعفرانیه", rating: 4, views: 5, reserves: 5, price: "1200000", status: "فعال" },
        { name: "آپارتمان لوکس زعفرانیه", rating: 4, views: 5, reserves: 5, price: "1200000", status: "فعال" },
        { name: "آپارتمان لوکس زعفرانیه", rating: 4, views: 5, reserves: 5, price: "1200000", status: "در انتظار" },
        { name: "آپارتمان لوکس زعفرانیه", rating: 4, views: 5, reserves: 5, price: "1200000", status: "در انتظار" },
        { name: "آپارتمان لوکس زعفرانیه", rating: 4, views: 5, reserves: 5, price: "1200000", status: "غیرفعال" },
    ]

    const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null);
    const moreRef = useRef<HTMLTableCellElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
                setOpenModalIndex(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className='flex flex-col justify-between gap-8'>
            <Table className='text-right max-lg:hidden overflow-hidden'>
                <TableHeader className='bg-subBg2 rounded-2xl text-foreground'>
                    <TableRow className='text-right'>
                        <TableHead className='text-right text-foreground'>{t('houseName')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('price')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('rating')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('views')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('reserves')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('status')}</TableHead>
                        <TableHead className='text-right text-foreground'>  </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {houses.map((house, idx) => (
                        <TableRow key={idx} className=''>
                            <TableCell className='py-4 flex gap-4 items-center'>
                                <img src={"  "} alt='' className='w-[108] h-[72] rounded-2xl bg-subBg2' />
                                {house.name}
                            </TableCell>
                            <TableCell>
                                {SplitNumber(house.price)} {t('currency')}
                            </TableCell>
                            <TableCell>
                                {house.rating} {t('from5')}
                            </TableCell>
                            <TableCell>
                                {house.views} {t('count')}
                            </TableCell>
                            <TableCell>
                                {house.reserves} {t('times')}
                            </TableCell>
                            <TableCell>
                                <div className={` px-8 py-1 w-fit rounded-2xl ${house.status === t('active') && "bg-primary text-primary-foreground"} ${house.status === t('pending') && "bg-orange text-orange-foreground"} ${house.status === t('inactive') && "bg-danger text-accent-foreground"} `}> <span> {house.status} </span> </div>
                            </TableCell>
                            <TableCell className='relative' ref={idx === openModalIndex ? moreRef : null}>
                                <MoreHorizontal
                                    onClick={() => {
                                        setOpenModalIndex(prev => prev === idx ? null : idx);
                                    }}
                                    className='cursor-pointer'
                                />
                                {openModalIndex === idx && (
                                    <div className={`flex absolute left-full ${idx > 1 ? "bottom-0" : "top-0"} flex-col backdrop-blur-md border rounded-xl gap-2 p-2 z-20 shadow-2xl`}>
                                        <div onClick={() => redirect(`/rent/5`)} className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> {t('details')} <Info size={16} /> </div>
                                        <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> {t('edit')} <Edit size={16} /> </div>
                                        <CommonModal handleClick={t('delete')} title={t('deleteConfirm')} button={<div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> {t('delete')} <Delete size={16} /> </div>} />
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className='flex flex-col gap-4 w-full lg:hidden'>
                {houses.map((house, idx) => (
                    <div key={idx} className='w-full max-sm:flex-col bg-subBg2 px-4 py-2 rounded-xl flex gap-4'>
                        <img src={"  "} alt='' className='w-1/3 max-sm:w-full max-sm:h-[200px] bg-secondary-light3 rounded-xl' />
                        <div className=' h-full flex flex-col gap-2 max-sm:gap-4 text-base'>
                            <div className='flex gap-2 items-center text-base gap-4 my-2 max-sm:text-lg justify-between flex-wrap'> <span> {house.name} </span> <div className='bg-accent text-accent-foreground px-4 py-1 flex gap-2 text-sm rounded-2xl'> <Star size={16} /> {house.rating} {t('star')} </div> </div>
                            <div className='flex gap-2 items-center'> <LayoutGrid className='text-subText' size={16} /> <span className='text-subText'>{t('reserves')}:</span> <span> {house.reserves} {t('times')} </span> </div>
                            <div className='flex gap-2 items-center'> <Home className='text-subText' size={16} /> <span className='text-subText'>{t('views')}:</span> <span> {house.views} {t('count')} </span>  </div>
                            <div className={` px-8 py-1 w-fit rounded-2xl ${house.status === t('active') && "bg-primary text-primary-foreground"} ${house.status === t('pending') && "bg-orange text-orange-foreground"} ${house.status === t('inactive') && "bg-danger text-accent-foreground"} `}> <span> {house.status} </span> </div>
                            <div className='flex gap-2 items-center'> <Coins className='text-subText' size={16} /> <span className='gap-2 flex'> {SplitNumber(house.price)} <p>{t('currency')}</p>  </span> </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex w-full flex-wrap justify-between items-end'>
                <CommonButton onclick={() => redirect("/dashboard/seller/manage-houses/add-houses")} icon={<PlusCircle size={20} />} title={t('addHouse')} />
                <div>
                    <Pagination className='w-fit'>
                        <PaginationContent className="justify-center mt-6">
                            <PaginationItem>
                                <PaginationPrevious />
                            </PaginationItem>

                            <PaginationItem className='flex gap-2'>
                                <PaginationLink className='bg-primary text-primary-foreground'>
                                    1
                                </PaginationLink>
                                <PaginationLink className=''>
                                    2
                                </PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationNext />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default ContentMyHouses