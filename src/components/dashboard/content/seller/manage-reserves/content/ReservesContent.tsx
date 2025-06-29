'use client'
import CommonModal from '@/components/dashboard/modal/CommonModal'
import DetailReserveModal from '@/components/dashboard/modal/DetailReserveModal'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { CheckCircle, Delete, Info, MoreHorizontal, XCircle } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

const ReservesContent = () => {
    const t = useTranslations('dashboardSeller.reserves')
    const houses = [
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "تایید شده", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "در حال انتظار", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "در حال انتظار", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "تایید شده", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "تایید شده", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "تایید شده", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "تایید شده", price: "1800000", paymentStatus: "لغو شده", },
        { name: "هتل سراوان رانین رشت", passengerInformation: "سبحان عرب خزائلی ،4/1/8...", date: "12 مرداد - 1401 / 12:33", reserveStatus: "تایید شده", price: "1800000", paymentStatus: "لغو شده", },
    ]

    const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null);
    const [openModalIndex2, setOpenModalIndex2] = React.useState<number | null>(null);
    const moreRef = useRef<HTMLTableCellElement | null>(null);
    const moreRef2 = useRef<HTMLTableCellElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
                setOpenModalIndex(null);
            }
            if (moreRef2.current && !moreRef2.current.contains(event.target as Node)) {
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
                        <TableHead className='text-right text-foreground'>{t('hotelName')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('passengerInfo')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('reserveDate')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('amount')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('reserveStatus')}</TableHead>
                        <TableHead className='text-right text-foreground'>{t('paymentStatus')}</TableHead>
                        <TableHead className='text-right text-foreground'>  </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {houses.map((house, idx) => (
                        <TableRow key={idx} className=''>
                            <TableCell className='py-4'>
                                {house.name}
                            </TableCell>
                            <TableCell>
                                {house.passengerInformation}
                            </TableCell>
                            <TableCell>
                                {house.date}
                            </TableCell>
                            <TableCell>
                                {SplitNumber(house.price)}{t('currencyShort')}
                            </TableCell>
                            <TableCell>
                                <div className={` px-4 w-[120px] flex justify-center py-1 rounded-2xl ${house.reserveStatus === t('confirmed') && "bg-primary text-primary-foreground"} ${house.reserveStatus === t('pending') && "bg-orange text-orange-foreground"} ${house.reserveStatus === t('rejected') && "bg-danger text-accent-foreground"} `}> <span> {house.reserveStatus} </span> </div>
                            </TableCell>
                            <TableCell>
                                <div className={` px-4 w-[120px] py-1 flex justify-center rounded-2xl ${house.paymentStatus === t('paid') && "bg-primary text-primary-foreground"} ${house.paymentStatus === t('canceled') && "bg-danger text-accent-foreground"} `}> <span> {house.paymentStatus} </span> </div>
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
                                        <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2 whitespace-nowrap'>{t('approveReserve')} <CheckCircle size={16} /> </div>
                                        <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2 whitespace-nowrap'>{t('cancelReserve')} <XCircle size={16} /> </div>
                                        <DetailReserveModal />
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
                    <div key={idx} className='w-full px-4 py-4 bg-subBg2 rounded-xl flex flex-col gap-4 text-sm relative'>
                        <div ref={idx === openModalIndex2 ? moreRef2 : null} className='flex justify-between items-center'>
                            <div className='font-bold text-base'>{house.name}</div>
                            <MoreHorizontal
                                onClick={() => {
                                    setOpenModalIndex2(prev => prev === idx ? null : idx);
                                }}
                                className='cursor-pointer'
                            />
                            {openModalIndex2 === idx && (
                                <div className={`flex absolute left-4 bottom-full mt-2 flex-col backdrop-blur-xl border rounded-xl gap-2 p-2 z-20 shadow-2xl w-[200px] bg-transparent`}>
                                    <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2 whitespace-nowrap'>{t('approveReserve')} <CheckCircle size={16} /> </div>
                                    <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2 whitespace-nowrap'>{t('cancelReserve')} <XCircle size={16} /> </div>
                                    <div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> {t('details')} <Info size={16} /> </div>
                                    <CommonModal handleClick={t('delete')} title={t('deleteConfirm')} button={<div className='px-4 py-1 flex gap-2 rounded-xl justify-end flex-row-reverse cursor-pointer hover:bg-subBg2'> {t('delete')} <Delete size={16} /> </div>} />
                                </div>
                            )}
                        </div>

                        <div className='flex flex-col gap-4 text-right'>
                            <div className='flex gap-2'><span className='font-semibold'>{t('passengerInfo')}:</span> {house.passengerInformation}</div>
                            <div className='flex gap-2'><span className='font-semibold'>{t('reserveDate')}:</span> {house.date}</div>
                            <div className='flex gap-2'><span className='font-semibold'>{t('amount')}:</span> {SplitNumber(house.price)}{t('currencyShort')}</div>
                            <div className='flex gap-2'><span className='font-semibold'>{t('reserveStatus')}:</span>
                                <span className={`ml-2 px-3 py-1 rounded-xl ${house.reserveStatus === t('confirmed') && "bg-primary text-primary-foreground"} ${house.reserveStatus === t('pending') && "bg-orange text-orange-foreground"} ${house.reserveStatus === t('rejected') && "bg-danger text-accent-foreground"}`}>
                                    {house.reserveStatus}
                                </span>
                            </div>
                            <div className='flex gap-2'><span className='font-semibold'>{t('paymentStatus')}:</span>
                                <span className={`ml-2 px-3 py-1 rounded-xl ${house.paymentStatus === t('paid') && "bg-primary text-primary-foreground"} ${house.paymentStatus === t('canceled') && "bg-danger text-accent-foreground"}`}>
                                    {house.paymentStatus}
                                </span>
                            </div>
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
        </div>
    )
}

export default ReservesContent