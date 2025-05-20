/* eslint-disable */

'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonModal from '@/components/dashboard/modal/CommonModal'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Coins, Delete, Edit, Home, Info, LayoutGrid, MoreHorizontal, PlusCircle } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const ContentMyHouses = () => {
    const houses = [
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
        { name: "آپارتمان لوکس زعفرانیه", facilities: " 2 خوابه ، 2 حمامه ، ظرفیت 6 نفر ", address: "  خیابان ولیعصر، تهران، منطقه مرکزی", price: "1200000" },
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
                        <TableHead className='text-right text-foreground'> نام </TableHead>
                        <TableHead className='text-right text-foreground'> ویژگی ها </TableHead>
                        <TableHead className='text-right text-foreground'> آدرس </TableHead>
                        <TableHead className='text-right text-foreground'> قیمت </TableHead>
                        <TableHead className='text-right text-foreground'> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {houses.map((house, idx) => (
                        <TableRow key={idx}>
                            <TableCell className='py-4'>
                                {house.name}
                            </TableCell>
                            <TableCell>
                                {house.facilities}
                            </TableCell>
                            <TableCell>
                                {house.address}
                            </TableCell>
                            <TableCell>
                                {house.price}
                            </TableCell>
                            <TableCell className='relative' ref={idx === openModalIndex ? moreRef : null}>
                                <MoreHorizontal
                                    onClick={() => {
                                        setOpenModalIndex(prev => prev === idx ? null : idx);
                                    }}
                                    className='cursor-pointer'
                                />
                                {openModalIndex === idx && (
                                    <div className={`flex absolute left-full ${idx > 1 ? "bottom-full" : "top-full"} flex-col rounded-xl gap-4 p-2 z-20 bg-subBg shadow-2xl`}>
                                        <div onClick={() => redirect(`/rent/5`)} className='bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-subBg2'> جزییات <Info size={16} /> </div>
                                        <div className='bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-subBg2'> ویرایش <Edit size={16} /> </div>
                                        <CommonModal handleClick='حذف' title=' آیا از حذف ملک مطمئن هستید؟ ' button={<div className='bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-subBg2'> حذف <Delete size={16} /> </div>} />
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
                        <div className=' h-full flex flex-col gap-2 max-sm:gap-4 text-sm'>
                            <div className='flex gap-2 items-center text-base my-2 max-sm:text-lg'> <span> {house.name} </span> </div>
                            <div className='flex gap-2 items-center'> <LayoutGrid className='text-muted' size={16} /> <span> {house.facilities} </span> </div>
                            <div className='flex gap-2 items-center'> <Home className='text-muted' size={16} /> <span> {house.address} </span> </div>
                            <div className='flex gap-2 items-center'> <Coins className='text-muted' size={16} /> <span className='gap-2 flex'> {SplitNumber(house.price)} <p>تومن </p>  </span> </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex w-full flex-wrap justify-between items-end'>
                <CommonButton onclick={() => redirect("/dashboard/manage-houses/add-houses")} icon={<PlusCircle size={20} />} title='افزودن ملک' />
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
