import { Bath, BedDouble, Car, LucideCopy, Star, Trees, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PaymentListModal from "./PaymentListModal";
import ReservesModals from "./ReservesModal";

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReserveModal({ isOpen, onClose }: ReserveModalProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isReserveModals, setIsReserveModals] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex lg:items-center md:items-center  sm:items-start items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto max-h-screen
"
      >
        <div className="relative w-[95%] max-w-6xl rounded-2xl bg-border p-6 text-right shadow-xl ">
          {/* Close button */}

          {/* Header */}
          <h2 className="mb-4 lg:text-2xl md:text-2xl sm:text-2xl font-bold text-foreground text-sm">
            هتل همایون فر کیش ایران
          </h2>
          <button
            onClick={onClose}
            className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-danger px-4 py-1 text-danger hover:bg-subBg"
          >
            بستن <X />
          </button>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2" dir="ltr">
            {/* Right - Text content */}
            <div className="space-y-4">
              <p className="text-sm leading-7 text-subText">
                آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و
                سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج
                و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی
                روزمره‌تان. آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی
                روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد،
                یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و
                شروعی نو در زندگی روزمره‌تان. آپارتمانی دنج و آرام در قلب شهر،
                جایی که زندگی روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی
                منحصربه‌فرد، یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های
                خوش، آرامش و شروعی نو در زندگی روزمره‌تان. محلی برای لحظه‌های
                خوش، آرامش و شروعی نو در زندگی روزمره‌تان. محلی برای لحظه‌های
                خوش، آرامش و شروعی نو در زندگی روزمره‌تان.
              </p>

              {/* Tags */}
              <div
                className="flex flex-wrap items-center gap-3 text-sm"
                dir="rtl"
              >
                <span className="text-subText">برچسب ها :</span>
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

            {/* Left - Image */}
            <div className="relative h-64 w-full rounded-2xl bg-gray-100">
              {/* Fake image */}
              <Image
                alt=""
                src={""}
                className="absolute inset-0 flex items-center justify-center text-2xl text-gray-400"
              ></Image>

              {/* Top left icon */}
              <button className="absolute left-3 top-3 rounded-md bg-primary p-1.5 text-foreground shadow-md">
                <LucideCopy className="text-bacgkroundW" size={20} />
              </button>

              {/* Top right star */}
              <div className="absolute right-3 top-3 rounded-md bg-gradient-to-r from-accent to-accent px-3 py-1 text-foreground shadow-md">
                <span className="flex items-center gap-1 text-sm text-bacgkroundW">
                  <Star className="text-bacgkroundW" /> ۵ ستاره
                </span>
              </div>
            </div>
          </div>

          {/* Address and Features */}
          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            <p className="mb-2 text-foreground">
              <strong>آدرس :</strong> گیلان، رشت، میدان آزادی، جنب چهارراه
              عظیمی، گیلان، رشت...
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-foreground">
              <span className="flex items-center gap-1">
                <BedDouble size={16} />۴ خواب
              </span>
              <span className="flex items-center gap-1">
                <Car size={16} />۱ پارکینگ
              </span>
              <span className="flex items-center gap-1">
                <Bath size={16} />۲ حمام
              </span>
              <span className="flex items-center gap-1">
                <Trees size={16} />
                ۵۰ متر حیاط
              </span>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-md text-subText">
              <strong>قیمت خرید :</strong>
              <span className="ml-2 rounded-md bg-border px-4 py-1 text-subText">
                ۵,۰۰۰,۰۰۰ ت
              </span>
            </div>

            <div className="flex gap-4">
              <button
                className="rounded-xl bg-primary px-6 py-2 text-background"
                onClick={() => setIsReserveModals(true)}
              >
                رزرو ها
              </button>
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="rounded-xl border border-primary px-6 py-2 text-background bg-primary"
              >
                پرداختی ها
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
