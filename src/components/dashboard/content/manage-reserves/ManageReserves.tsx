"use client";

import { useState, useEffect, useMemo } from "react";
import { Filter, Search, CheckCircle, AlertCircle, X } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "@/utils/service/api/booking/getAllBookings";
import { IReserveType } from "@/types/reserves-type/reserves-type";
import { useTranslations } from "next-intl";
import { BlurFade } from "@/components/magicui/blur-fade";
import FilterModal from "./FilterModal";
import ReservationTable from "./components/ReservationTable";
import ReservationMobile from "./components/ReservationMobile";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorState from "./components/ErrorState";
import ReservationPagination from "./components/ReservationPagination";
import { getHouseById } from "@/utils/service/api/houses-api";
import { IHouse } from "@/types/houses-type/house-type";

interface FilterValues {
  checkInDate: string;
  checkOutDate: string;
  reservationStatus: string;
  propertyType: string;
}

export default function HotelReservationList() {
  const t = useTranslations("dashboardBuyer.manageReserves");
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
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
    if (bookingsData?.data?.length) {
      fetchHouses();
    }
  }, [bookingsData?.data]);

  const reservations = useMemo(
    () =>
      bookingsData?.data.map((booking) => ({
        id: booking.id,
        houseId: booking.houseId.toString(),
        hotelName:
          housesData[booking.houseId]?.title || booking.houseId.toString(),
        date: booking.reservedDates[0]?.value || "",
        price: housesData[booking.houseId]?.price || "0",
        guestCount: `${booking.traveler_details.length} ${t("guest")}`,
        status: booking.status as "confirmed" | "waiting" | "cancelled",
        paymentStatus: "waiting" as const,
        propertyType: housesData[booking.houseId]?.categories?.name || "",
        traveler_details: booking.traveler_details,
      })) || [],
    [bookingsData?.data, t, housesData]
  );

  const filteredReservations = useMemo(() => {
    let filtered = reservations;

    if (searchTerm) {
      filtered = filtered.filter((r) => r.hotelName.includes(searchTerm));
    }

    if (filters) {
      if (filters.reservationStatus && filters.reservationStatus !== "all") {
        filtered = filtered.filter(
          (r) => r.status === filters.reservationStatus
        );
      }
      if (filters.propertyType && filters.propertyType !== "all") {
        filtered = filtered.filter((r) => {
          const house = housesData[r.houseId];
          return house?.categories?.name === filters.propertyType;
        });
      }
      if (filters.checkInDate) {
        filtered = filtered.filter((r) => r.date.includes(filters.checkInDate));
      }
    }

    return filtered;
  }, [searchTerm, filters, reservations, housesData]);

  const handleApplyFilters = (filterValues: FilterValues) => {
    setFilters(filterValues);
  };

  const handleClearFilters = () => {
    setFilters(null);
  };

  const renderStatusBadge = (status: string) => {
    if (status === "confirmed") {
      return (
        <div className="flex items-center w-fit bg-primary text-background text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <CheckCircle className="w-3 h-3 ml-1" />
          <span>{t("confirmed")}</span>
        </div>
      );
    } else if (status === "pending") {
      return (
        <div className="flex items-center bg-yellow-100 text-yellow-700 text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <AlertCircle className="w-3 h-3 ml-1" />
          <span>{t("waiting")}</span>
        </div>
      );
    } else if (status === "cancelled") {
      return (
        <div className="flex items-center w-fit bg-danger text-background text-xs rounded-full px-2 py-1 whitespace-nowrap">
          <X className="w-3 h-3 ml-1" />
          <span>{t("cancelled")}</span>
        </div>
      );
    }
    return null;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const totalPages = Math.ceil(filteredReservations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReservations = filteredReservations.slice(startIndex, endIndex);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorState />;
  }

  return (
    <BlurFade className="flex flex-col justify-between gap-8 bg-subBg p-4 sm:p-6 lg:p-8 rounded-xl w-full min-h-screen">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-right text-foreground">
          {t("reservationListTitle")}
        </h1>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
          dir="ltr"
        >
          <div className="flex gap-2">
            <button
              className="w-fit bg-primary text-background px-4 py-2 rounded-lg whitespace-nowrap gap-2 flex items-center justify-center"
              onClick={() => setIsFilterModalOpen(true)}
            >
              <Filter className="w-4 h-4 ml-2" />
              {t("filters")}
            </button>
            {filters && (
              <button
                className="w-fit bg-danger text-background px-4 py-2 rounded-lg whitespace-nowrap gap-2 flex items-center justify-center"
                onClick={handleClearFilters}
              >
                <X className="w-5 h-5" />
                حذف فیلتر
              </button>
            )}
          </div>

          <div className="relative flex-grow max-w-full sm:max-w-md lg:max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-foreground" />
            </div>
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
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
          <TableHeader className="bg-subBg2 text-foreground">
            <TableRow className="text-right rounded-xl">
              <TableHead className="text-right text-foreground whitespace-nowrap">
                {t("hotelName")}
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                {t("reserveDate")}
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                {t("totalPrice")}
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                {t("guestCount")}
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                {t("reservationStatus")}
              </TableHead>
              <TableHead className="text-right text-foreground whitespace-nowrap">
                {t("paymentStatus")}
              </TableHead>
              <TableHead className="text-right text-foreground"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReservations.map((reservation, idx) => (
              <TableRow key={reservation.id} className="hover:bg-subBg2">
                <TableCell className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-[107] h-[72] rounded-[12px] bg-card-light flex-shrink-0"></div>
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
                        {t("details")} <Info size={16} />
                      </div>
                      <div className="bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-border">
                        {t("edit")} <Edit size={16} />
                      </div>
                      <CommonModal
                        handleClick={t("delete")}
                        title={t("deleteConfirm")}
                        button={
                          <div className="bg-subBg px-4 py-1 flex gap-2 rounded-xl justify-between flex-row-reverse cursor-pointer hover:bg-border">
                            {t("delete")} <Delete size={16} />
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
                          {t("details")}
                        </span>
                        <Info size={16} />
                      </button>
                      <button className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-border rounded-md">
                        <span>{t("edit")}</span>
                        <Edit size={16} />
                      </button>
                      <button className="flex items-center justify-between gap-2 px-3 py-2 hover:bg-border rounded-md text-danger">
                        <span>{t("delete")}</span>
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
                <span className="text-subText">{t("guestCount")}:</span>
                <span className="font-medium">{reservation.guestCount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-subText">{t("totalPrice")}:</span>
                <span className="font-medium">{reservation.price}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-subText">{t("reservationStatus")}:</span>
                {renderStatusBadge(reservation.status)}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-subText">{t("paymentStatus")}:</span>
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
                      {t("details")} <Info size={16} />
                    </div>
                    <div className="flex items-center justify-between px-3 py-1 rounded-lg hover:bg-border cursor-pointer transition">
                      {t("edit")} <Edit size={16} />
                    </div>
                    <CommonModal
                      handleClick={t("delete")}
                      title={t("deleteConfirm")}
                      button={
                        <div className="flex items-center justify-between px-3 py-1 rounded-lg hover:bg-border cursor-pointer transition">
                          {t("delete")} <Delete size={16} />
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
                  {reservation.guestCount} {t("guest")}
                </span>
              </div>
            </div>

            <div className="text-sm grid grid-cols-2 gap-y-3 gap-x-2 text-gray-700">
              <div className="col-span-2 flex justify-between">
                <span className="text-subText">{t("reserveDate")}:</span>
                <span className="text-subText">{reservation.date}</span>
              </div>

              <div className="col-span-2 flex justify-between">
                <span className="text-subText">{t("totalPrice")}:</span>
                <span className="text-subText">{reservation.price}</span>
              </div>

              <div className="col-span-2 flex justify-between">
                <span className="text-subText">{t("reservationStatus")}:</span>
                <span>{renderStatusBadge(reservation.status)}</span>
              </div>

              <div className="col-span-2 flex justify-between">
                <span className="text-subText">{t("paymentStatus")}:</span>
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
    </BlurFade>
  );
}
