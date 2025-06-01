/* eslint-disable */

import { Bath, BedDouble, Car, LucideCopy, Star, Trees, X } from "lucide-react";
import { useState } from "react";
import PaymentListModal from "./PaymentListModal";
import ReservesModals from "./ReservesModal";
import { useTranslations } from "next-intl";

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReserveModal({ isOpen, onClose }: ReserveModalProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isReserveModals, setIsReserveModals] = useState(false);
  const t = useTranslations("modals.reserveModal");

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex lg:items-center md:items-center  sm:items-start items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto max-h-screen"
      >
        <div className="relative w-[95%] max-w-6xl rounded-2xl bg-border p-6 text-right shadow-xl ">
          <h2 className="mb-4 lg:text-2xl md:text-2xl sm:text-2xl font-bold text-foreground text-sm">
            {t("hotelName")}
          </h2>
          <button
            onClick={onClose}
            className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-danger px-4 py-1 text-danger hover:bg-subBg"
          >
            {t("close")} <X />
          </button>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2" dir="ltr">
            <div className="space-y-4">
              <p className="text-sm leading-7 text-subText">
                {t("description")}
              </p>

              <div
                className="flex flex-wrap items-center gap-3 text-sm"
                dir="rtl"
              >
                <span className="text-subText">{t("tags")} :</span>
                {["بالکن", "مسکونی", "آپارتمان", "آپارتمان", "آپارتمان"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="rounded-md border border-primary px-4 py-1 text-primary"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative h-64 w-full rounded-2xl bg-gray-100">
              <img
                alt=""
                src=" "
                className="absolute inset-0 flex items-center justify-center text-2xl text-gray-400"
              ></img>

              <button className="absolute left-3 top-3 rounded-md bg-primary p-1.5 text-foreground shadow-md">
                <LucideCopy className="text-bacgkroundW" size={20} />
              </button>

              <div className="absolute right-3 top-3 rounded-md bg-gradient-to-r from-accent to-accent px-3 py-1 text-foreground shadow-md">
                <span className="flex items-center gap-1 text-sm text-bacgkroundW">
                  <Star className="text-bacgkroundW" /> {t("stars")}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p className="mb-2 text-foreground">
              <strong>{t("addressLabel")} :</strong> {t("address")}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-foreground">
              <span className="flex items-center gap-1">
                <BedDouble size={16} />{t("bedrooms")}
              </span>
              <span className="flex items-center gap-1">
                <Car size={16} />{t("parking")}
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />{t("bathrooms")}
              </span>
              <span className="flex items-center gap-1">
                <Trees size={16} />
                {t("yard")}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-md text-subText">
              <strong>{t("priceLabel")} :</strong>
              <span className="ml-2 rounded-md bg-border px-4 py-1 text-subText">
                {t("price")}
              </span>
            </div>

            <div className="flex gap-4">
              <button
                className="rounded-xl bg-primary px-6 py-2 text-background"
                onClick={() => setIsReserveModals(true)}
              >
                {t("reserves")}
              </button>
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="rounded-xl border border-primary px-6 py-2 text-background bg-primary"
              >
                {t("payments")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <PaymentListModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
      <ReservesModals
        isOpen={isReserveModals}
        onClose={() => setIsReserveModals(false)}
      />
    </>
  );
}