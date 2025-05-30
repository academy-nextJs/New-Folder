'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonModal from '@/components/dashboard/modal/CommonModal'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { CheckCircle2, Coins, Delete, MapPin, MoreHorizontal, Text } from 'lucide-react'
import React, { Fragment, useEffect, useRef } from 'react'

const favorites = [
    { image: null, title: " هتل سراوان رانین رشت ", price: "1800000", address: "  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت... " },
    { image: null, title: " هتل سراوان رانین رشت ", price: "1800000", address: "  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت... " },
    { image: null, title: " هتل سراوان رانین رشت ", price: "1800000", address: "  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت... " },
    { image: null, title: " هتل سراوان رانین رشت ", price: "1800000", address: "  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت... " },
    { image: null, title: " هتل سراوان رانین رشت ", price: "1800000", address: "  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت... " },
]


const FavoritesDetail = () => {
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
        <Fragment>
            <Table className='text-right max-lg:hidden w-full'>
                <TableHeader className='bg-subBg2 rounded-t-2xl text-foreground'>
                    <TableRow className='text-right'>
                        <TableHead className='text-right text-foreground'> نام اقامتگاه </TableHead>
                        <TableHead className='text-right text-foreground'> قیمت کل </TableHead>
                        <TableHead className='text-right text-foreground'> آدرس </TableHead>
                        <TableHead className='text-right text-foreground'>  </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {favorites.map((favorite, idx) => (
                        <TableRow key={idx}>
                            <TableCell className='py-4 whitespace-nowrap flex gap-2 items-center'>
                                <img src={favorite.image ? favorite.image : "  "} alt='' className='rounded-[12px] w-[107px] h-[78px] bg-card-light' />
                                {favorite.title}
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                {SplitNumber(favorite.price)} تومن
                            </TableCell>
                            <TableCell className='truncate'>
                                {favorite.address}
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
                                        <CommonModal handleClick='رزرو' title=' آیا از رزرو مطمئن هستید؟ ' button={<div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> رزرو <CheckCircle2 size={16} /> </div>} />
                                        <CommonModal handleClick='حذف' title=' آیا از حذف علاقه مندی مطمئن هستید؟ ' button={<div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> حذف <Delete size={16} /> </div>} />
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className='flex flex-col gap-4 w-full lg:hidden'>
                {favorites.map((favorite, idx) => (
                    <div key={idx} className='w-full max-sm:flex-col bg-subBg2 px-4 py-4 rounded-xl flex gap-4'>
                        <img src={favorite.image || "  "} alt=' ' className=' min-h-full w-[200px] max-sm:w-full max-sm:h-[200px] bg-card rounded-[12px]' />
                        <div className=' h-full flex flex-col gap-2 max-sm:gap-4 text-base'>
                            <div className='flex gap-4 items-center flex-wrap'> <Text className='text-subText' size={20} /> <p className='text-subText'>  نام اقامتگاه : </p> <span> {favorite.title} </span> </div>
                            <div className='flex gap-4 items-center flex-wrap'> <Coins className='text-subText' size={20} /> <p className='text-subText'> قیمت : </p> <span className='gap-2 flex'> {SplitNumber(favorite.price)} <p>تومن </p>  </span> </div>
                            <div className='flex gap-4 items-center flex-wrap'> <MapPin className='text-subText' size={20} /> <p className='text-subText'> آدرس : </p> <span className='truncate'> {favorite.address} </span> </div>
                            <CommonButton classname='w-full bg-danger text-accent-foreground' title=" حذف "  />
                            <CommonButton classname='w-full' title=" رزرو "  />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex w-full flex-wrap justify-between items-end'>
                <div></div>
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
        </Fragment>
    )
}

export default FavoritesDetail
