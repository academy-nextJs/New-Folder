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

const ContentMyHouses = () => {
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
                        <TableHead className='text-right text-foreground'> نام اقامتاگ </TableHead>
                        <TableHead className='text-right text-foreground'> قیمت </TableHead>
                        <TableHead className='text-right text-foreground'> امتیاز </TableHead>
                        <TableHead className='text-right text-foreground'> قیمت </TableHead>
                        <TableHead className='text-right text-foreground'> بازیدها </TableHead>
                        <TableHead className='text-right text-foreground'> رزرو ها </TableHead>
                        <TableHead className='text-right text-foreground'> وضعیت </TableHead>
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
                                {SplitNumber(house.price)}ت
                            </TableCell>
                            <TableCell>
                                {house.rating} از 5
                            </TableCell>
                            <TableCell>
                                {house.views} تا
                            </TableCell>
                            <TableCell>
                                {house.reserves} بار
                            </TableCell>
                            <TableCell>
                                <div className={` px-8 py-1 w-fit rounded-2xl ${house.status === 'فعال' && "bg-primary text-primary-foreground"} ${house.status === 'در انتظار' && "bg-orange text-orange-foreground"} ${house.status === 'غیرفعال' && "bg-danger text-accent-foreground"} `}> <span> {house.status} </span> </div>
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
                                        <div onClick={() => redirect(`/rent/5`)} className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> جزییات <Info size={16} /> </div>
                                        <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> ویرایش <Edit size={16} /> </div>
                                        <CommonModal handleClick='حذف' title=' آیا از حذف ملک مطمئن هستید؟ ' button={<div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> حذف <Delete size={16} /> </div>} />
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
                            <div className='flex gap-2 items-center text-base gap-4 my-2 max-sm:text-lg justify-between flex-wrap'> <span> {house.name} </span> <div className='bg-accent text-accent-foreground px-4 py-1 flex gap-2 text-sm rounded-2xl'> <Star size={16} /> {house.rating} ستاره </div> </div>
                            <div className='flex gap-2 items-center'> <LayoutGrid className='text-subText' size={16} /> <span className='text-subText'> رزرو ها: </span> <span> {house.reserves} بار </span> </div>
                            <div className='flex gap-2 items-center'> <Home className='text-subText' size={16} /> <span className='text-subText'> بازدید ها: </span> <span> {house.views} تا </span>  </div>
                            <div className={` px-8 py-1 w-fit rounded-2xl ${house.status === 'فعال' && "bg-primary text-primary-foreground"} ${house.status === 'در انتظار' && "bg-orange text-orange-foreground"} ${house.status === 'غیرفعال' && "bg-danger text-accent-foreground"} `}> <span> {house.status} </span> </div>
                            <div className='flex gap-2 items-center'> <Coins className='text-subText' size={16} /> <span className='gap-2 flex'> {SplitNumber(house.price)} <p>تومن </p>  </span> </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex w-full flex-wrap justify-between items-end'>
                <CommonButton onclick={() => redirect("/dashboard/seller/manage-houses/add-houses")} icon={<PlusCircle size={20} />} title='افزودن ملک' />
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
