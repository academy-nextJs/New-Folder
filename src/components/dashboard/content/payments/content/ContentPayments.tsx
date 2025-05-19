/* eslint-disable */

'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonModal from '@/components/dashboard/modal/CommonModal'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Check, CheckCircle, CheckCircle2, Coins, Delete, Edit, Flower, Home, Info, LayoutGrid, MoreHorizontal, Phone, PlusCircle, Rocket, SquaresSubtract, X } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const ContentPayment = () => {
    const payments = [
        { date: "12 مرداد - 1401 / 12:33", phoneNumber: 123456789123456, price: 1250000, status: true, paymentType: "شارژ کیف پول" },
        { date: "12 مرداد - 1401 / 12:33", phoneNumber: 123456789123456, price: 1250000, status: false, paymentType: "شارژ کیف پول" },
        { date: "12 مرداد - 1401 / 12:33", phoneNumber: 123456789123456, price: 1250000, status: false, paymentType: "شارژ کیف پول" },
        { date: "12 مرداد - 1401 / 12:33", phoneNumber: 123456789123456, price: 1250000, status: true, paymentType: "شارژ کیف پول" },
        { date: "12 مرداد - 1401 / 12:33", phoneNumber: 123456789123456, price: 1250000, status: true, paymentType: "شارژ کیف پول" },
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
                        <TableHead className='text-right text-foreground'> تاریخ </TableHead>
                        <TableHead className='text-right text-foreground'> شماره پیگیری </TableHead>
                        <TableHead className='text-right text-foreground'> مبلغ </TableHead>
                        <TableHead className='text-right text-foreground'> وضعیت پرداخت </TableHead>
                        <TableHead className='text-right text-foreground'> نوع تراکنش </TableHead>
                        <TableHead className='text-right text-foreground'> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {payments.map((payment, idx) => (
                        <TableRow key={idx}>
                            <TableCell className='py-4 whitespace-nowrap'>
                                {payment.date}
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                {payment.phoneNumber}
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                {payment.price}
                            </TableCell>
                            <TableCell>
                                <div className={`px-2 py-1 flex gap-2 whitespace-nowrap w-fit rounded-[16px] pl-6 items-center ${payment.status ? "bg-primary text-primary-foreground" : "bg-danger text-accent-foreground"}`}> {payment.status ? <CheckCircle2 size={14} /> : <X size={14} />} {payment.status ? " تایید شده " : " تایید نشده "} </div>
                            </TableCell>
                            <TableCell className='whitespace-nowrap'>
                                {payment.paymentType}
                            </TableCell>
                            <TableCell className='cursor-pointer whitespace-nowrap'>
                                مشاهده رسید
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className='flex flex-col gap-4 w-full lg:hidden'>
                {payments.map((payment, idx) => (
                    <div key={idx} className='w-full max-sm:flex-col bg-subBg2 px-4 py-4 rounded-xl flex gap-4'>
                        <div className=' h-full flex flex-col gap-2 max-sm:gap-4 text-base'>
                            <div className='flex gap-4 items-center flex-wrap'> <Rocket className='text-subText' size={20} /> <p className='text-subText'> تاریخ : </p> <span> {payment.date} </span> </div>
                            <div className='flex gap-4 items-center flex-wrap'> <LayoutGrid className='text-subText' size={20} />  <p className='text-subText'> نوع تراکنش : </p> <span> {payment.paymentType} </span> </div>
                            <div className='flex gap-4 items-center flex-wrap'> <Phone className='text-subText' size={20} /> <p className='text-subText'> شماره پیگیری : </p> <span> {payment.phoneNumber} </span> </div>
                            <div className='flex gap-4 items-center flex-wrap'> <Coins className='text-subText' size={20} /> <p className='text-subText'> قیمت : </p> <span className='gap-2 flex'> {SplitNumber(payment.price)} <p>تومن </p>  </span> </div>
                            <div className='flex gap-4 items-center flex-wrap'> <Flower className='text-subText' size={20} /> <div className={`px-2 py-1 flex gap-2 whitespace-nowrap w-fit rounded-[16px] pl-6 items-center ${payment.status ? "bg-primary text-primary-foreground" : "bg-danger text-accent-foreground"}`}> {payment.status ? <CheckCircle2 size={14} /> : <X size={14} />} {payment.status ? " تایید شده " : " تایید نشده "} </div> </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex w-full flex-wrap justify-end items-end'>
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

export default ContentPayment
