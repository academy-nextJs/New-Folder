"use client";

import { useState, useEffect, useRef } from "react";
import {
  MoreHorizontal,
  X,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Info,
  Edit,
  Delete,
  Search,
  Filter,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import FilterModal from "./FilterModal";
import ReserveModal from "./ReserveModal";
import GuestCount from "./GuestCount";

interface Reservation {
  id: number;
  hotelName: string;
  date: string;
  price: string;
  guestCount: string;
  status: "confirmed" | "waiting" | "cancelled";
  paymentStatus: "paid" | "waiting" | "cancelled" | "confirmed";
  propertyType?: string;
}

interface FilterValues {
  checkInDate: string;
  checkOutDate: string;
  reservationStatus: string;
  propertyType: string;
}

interface CommonModalProps {
  handleClick: string;
  title: string;
  button: React.ReactNode;
}

const CommonModal = ({ button }: CommonModalProps) => {
  return <div className="cursor-pointer">{button}</div>;
};

export default function HotelReservationList() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isGuestCount, setIsGuestCount] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterValues | null>(null);
  const moreRef = useRef<HTMLTableCellElement | null>(null);
  const cardActionsRef = useRef<HTMLDivElement | null>(null);

  const reservations: Reservation[] = [
    {
      id: 1,
      hotelName: "هتل سراوان رالین رشت",
      date: "۱۴ مرداد - ۱۴۰۱/۰۴/۱۳",
      price: "۸,۰۰۰,۰۰۰ تومان",
      guestCount: "۲ عدد مسافر",
      status: "confirmed",
      paymentStatus: "cancelled",
    },
    {
      id: 2,
      hotelName: "هتل سراوان رالین رشت",
      date: "۱۴ مرداد - ۱۴۰۱/۰۴/۱۳",
      price: "۸,۰۰۰,۰۰۰ تومان",
      guestCount: "۲ عدد مسافر",
      status: "confirmed",
      paymentStatus: "cancelled",
    },
    {
      id: 3,
      hotelName: "هتل سراوان رالین رشت",
      date: "۱۴ مرداد - ۱۴۰۱/۰۴/۱۳",
      price: "۸,۰۰۰,۰۰۰ تومان",
      guestCount: "۲ عدد مسافر",
      status: "confirmed",
      paymentStatus: "cancelled",
    },
    {
      id: 4,
      hotelName: "هتل سراوان رالین رشت",
      date: "۱۴ مرداد - ۱۴۰۱/۰۴/۱۳",
      price: "۸,۰۰۰,۰۰۰ تومان",
      guestCount: "۲ عدد مسافر",
      status: "confirmed",
      paymentStatus: "cancelled",
    },
    {
      id: 5,
      hotelName: "هتل سراوان رالین رشت",
      date: "۱۴ مرداد - ۱۴۰۱/۰۴/۱۳",
      price: "۸,۰۰۰,۰۰۰ تومان",
      guestCount: "۲ عدد مسافر",
      status: "confirmed",
      paymentStatus: "cancelled",
    },
  ];
  const [filteredReservations, setFilteredReservations] =
    useState<Reservation[]>(reservations);

  useEffect(() => {
    let filtered = reservations;

    if (searchTerm) {
      filtered = filtered.filter((r) => r.hotelName.includes(searchTerm));
    }

    if (filters) {
      if (filters.reservationStatus) {
        filtered = filtered.filter(
          (r) => r.status === filters.reservationStatus
        );
      }
      if (filters.propertyType) {
        filtered = filtered.filter(
          (r) => r.propertyType === filters.propertyType
        );
      }
      if (filters.checkInDate) {
        filtered = filtered.filter((r) => r.date.includes(filters.checkInDate));
      }
    }

    setFilteredReservations(filtered);
  }, [searchTerm, filters]);

  const handleApplyFilters = (filterValues: FilterValues) => {
    console.log("Applied filters:", filterValues);
    setFilters(filterValues);
  };

  const renderStatusBadge = (status: string) => {
    if (status === "confirmed") {
      return (
        <div className="flex items-center w-fit bg-primary text-background text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <CheckCircle className="w-3 h-3 ml-1" />
          <span>تایید شده</span>
        </div>
      );
    } else if (status === "waiting") {
      return (
        <div className="flex items-center bg-yellow-100 text-yellow-700 text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <AlertCircle className="w-3 h-3 ml-1" />
          <span>در انتظار</span>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderPaymentStatusBadge = (status: string) => {
    if (status === "paid") {
      return (
        <div className="flex items-center whitespace-nowrap">
          <CreditCard className="w-4 h-4 ml-1" />
          <span>پرداخت</span>
        </div>
      );
    } else if (status === "waiting") {
      return (
        <div className="flex items-center w-fit bg-yellow-100 text-yellow-700 text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <AlertCircle className="w-3 h-3 ml-1" />
          <span>در انتظار</span>
        </div>
      );
    } else if (status === "cancelled") {
      return (
        <div className="flex items-center w-fit bg-danger text-background text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <X className="w-3 h-3 ml-1" />
          <span>لغو شده</span>
        </div>
      );
    } else if (status === "confirmed") {
      return (
        <div className="flex items-center whitespace-nowrap">
          <CheckCircle className="w-4 h-4 text-primary ml-1" />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex flex-col justify-between gap-8 bg-background p-4 sm:p-6 lg:p-8 rounded-xl w-full min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-right text-foreground">
          لیست رزرو های شما
        </h1>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          dir="ltr"
        >
          <button
            className="w-28 bg-primary text-background px-4 py-2 rounded-lg whitespace-nowrap flex items-center justify-center"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <Filter className="w-4 h-4 ml-2" />
            فیلترها
          </button>

          <div className="relative flex-grow max-w-full sm:max-w-md lg:max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4  text-foreground" />
            </div>
            <input
              type="text"
              placeholder="... نام هتل مورد نظر"
              className="pl-10 pr-4 py-2 rounded-lg border bg-border dark:bg-card text-right w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
      />

      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
      />

      <GuestCount
        isOpen={isGuestCount}
        onClose={() => setIsGuestCount(false)}
      />
      <div className="overflow-hidden rounded-xl border border-border hidden lg:block">
        <Table className="text-right w-full">
          <TableHeader className="bg-border dark:bg-subBg text-foreground">
            <TableRow className="text-right rounded-xl">
              <TableHead className="text-right text-foreground whitespace-nowrap">
                نام اقامتگاه
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                تاریخ رزرو
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                قیمت کل
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                تعداد مسافر
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                وضعیت رزرو
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                وضعیت پرداخت
              </TableHead>
              <TableHead className="text-right text-foreground"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReservations.map((reservation, idx) => (
              <TableRow
                key={reservation.id}
                className="hover:bg-border dark:hover:bg-subBg"
              >
                <TableCell className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="text-right whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
                      {reservation.hotelName}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {reservation.date}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {reservation.price}
                </TableCell>
                <TableCell
                  className="whitespace-nowrap cursor-pointer"
                  onClick={() => setIsGuestCount(true)}
                >
                  {reservation.guestCount}
                </TableCell>
                <TableCell>{renderStatusBadge(reservation.status)}</TableCell>
                <TableCell>
                  {renderPaymentStatusBadge(reservation.paymentStatus)}
                </TableCell>
                <TableCell
                  className="relative"
                  ref={idx === openModalIndex ? moreRef : null}
                >
                  <MoreHorizontal
                    onClick={() => {
                      setOpenModalIndex((prev) => (prev === idx ? null : idx));
                    }}
                    className="cursor-pointer"
                  />
                  {openModalIndex === idx && (
                    <div
                      className={`flex absolute left-full ${
                        idx > 2 ? "bottom-full" : "top-2"
                      } flex-col rounded-xl gap-2 p-2 z-20 bg-subBg shadow-2xl`}
                    >
                      <div
                        className="bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-border"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsReserveModalOpen(true);
                          setOpenModalIndex(null);
                        }}
                      >
                        جزییات <Info size={16} />
                      </div>
                      <div className="bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-border">
                        ویرایش <Edit size={16} />
                      </div>
                      <CommonModal
                        handleClick="حذف"
                        title=" آیا از حذف ملک مطمئن هستید؟ "
                        button={
                          <div className="bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-border">
                            حذف <Delete size={16} />
                          </div>
                        }
                      />
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="hidden sm:flex md:flex lg:hidden flex-col gap-4">
        {filteredReservations.map((reservation, idx) => (
          <div
            key={reservation.id}
            className="flex flex-col bg-subBg border border-border rounded-xl overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div
                ref={idx === openModalIndex ? cardActionsRef : null}
                className="relative"
              >
                <button
                  onClick={() =>
                    setOpenModalIndex((prev) => (prev === idx ? null : idx))
                  }
                  className="p-1 rounded-full hover:bg-border transition-colors"
                >
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </button>

                {openModalIndex === idx && (
                  <div className="absolute right-8 top-0 mt-1 z-20 bg-subBg rounded-lg shadow-lg border border-border w-40">
                    <div className="flex flex-col p-1">
                      <button className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-border rounded-md">
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsReserveModalOpen(true);
                            setOpenModalIndex(null);
                          }}
                        >
                          جزییات
                        </span>
                        <Info size={16} />
                      </button>
                      <button className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-border rounded-md">
                        <span>ویرایش</span>
                        <Edit size={16} />
                      </button>
                      <button className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-border rounded-md text-danger">
                        <span>حذف</span>
                        <Delete size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <h3 className="font-bold text-foreground">
                    {reservation.hotelName}
                  </h3>
                  <p className="text-xs text-subText">{reservation.date}</p>
                </div>
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-2 gap-y-3 p-4">
              <div className="flex justify-between">
                <span className="text-subText">تعداد مسافر:</span>
                <span className="font-medium">{reservation.guestCount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-subText">قیمت کل:</span>
                <span className="font-medium">{reservation.price}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-subText">وضعیت رزرو:</span>
                {renderStatusBadge(reservation.status)}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-subText">وضعیت پرداخت:</span>
                {renderPaymentStatusBadge(reservation.paymentStatus)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden flex flex-col gap-4">
        {filteredReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="w-full rounded-xl p-4 border border-border bg-subBg shadow-md relative"
          >
            <div className="absolute top-4 left-4 z-20">
              <button
                onClick={() =>
                  setOpenModalIndex((prev) =>
                    prev === reservation.id ? null : reservation.id
                  )
                }
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>

              {openModalIndex === reservation.id && (
                <div className="absolute left-0 mt-2 w-36 bg-subBg rounded-lg shadow-xl z-30">
                  <div className="flex flex-col gap-1 p-2">
                    <div
                      className="flex items-center justify-between px-3 py-1 rounded-lg hover:bg-border cursor-pointer transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsReserveModalOpen(true);
                        setOpenModalIndex(null);
                      }}
                    >
                      جزییات <Info size={16} />
                    </div>
                    <div className="flex items-center justify-between px-3 py-1 rounded-lg hover:bg-border cursor-pointer transition">
                      ویرایش <Edit size={16} />
                    </div>
                    <CommonModal
                      handleClick="حذف"
                      title=" آیا از حذف ملک مطمئن هستید؟ "
                      button={
                        <div className="flex items-center justify-between px-3 py-1 rounded-lg hover:bg-border cursor-pointer transition">
                          حذف <Delete size={16} />
                        </div>
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0" />
              <div className="flex flex-col text-right">
                <span className="text-base font-bold">
                  {reservation.hotelName}
                </span>
                <span className="text-xs text-subText">
                  {reservation.guestCount} مهمان
                </span>
              </div>
            </div>

            <div className="text-sm grid grid-cols-2 gap-y-3 gap-x-2 text-gray-700">
              <div className="col-span-2 flex justify-between">
                <span className="text-subText">تاریخ رزرو:</span>
                <span className="text-subText">{reservation.date}</span>
              </div>

              <div className="col-span-2 flex justify-between">
                <span className="text-subText">قیمت کل:</span>
                <span className="text-subText">{reservation.price}</span>
              </div>

              <div className="col-span-2 flex justify-between">
                <span className="text-subText">وضعیت رزرو:</span>
                <span>{renderStatusBadge(reservation.status)}</span>
              </div>

              <div className="col-span-2 flex justify-between">
                <span className="text-subText">وضعیت پرداخت:</span>
                <span>
                  {renderPaymentStatusBadge(reservation.paymentStatus)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink className="bg-primary text-primary-foreground">
                1
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationLink>2</PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
