import { useState } from "react";
import { X, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

interface FilterValues {
  checkInDate: string;
  checkOutDate: string;
  reservationStatus: string;
  propertyType: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}

const FilterModal = ({ isOpen, onClose, onApplyFilters }: FilterModalProps) => {
  const t = useTranslations("modals.filter2");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [reservationStatus, setReservationStatus] = useState(t("approved"));
  const [propertyType, setPropertyType] = useState(t("apartment"));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-xl w-full max-w-md overflow-hidden shadow-lg">
        <div
          className="flex justify-between items-center p-4 border-b border-border"
          dir="ltr"
        >
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm gap-2 px-2 flex items-center border border-danger rounded-2xl p-1"
          >
            <span className="mr-1 text-danger">{t("close")}</span>
            <X className="h-5 w-5 text-danger" />
          </button>
          <h2 className="text-lg font-bold">{t("filters")}</h2>
        </div>

        <div className="p-4 space-y-6" dir="rtl">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-right">
                {t("checkInDate")}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  placeholder={t("checkInDatePlaceholder")}
                  type="text"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 pr-2 pl-8 bg-transparent outline-none text-right dark:bg-card"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-right">
                {t("checkOutDate")}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  placeholder={t("checkOutDatePlaceholder")}
                  type="text"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 pr-2 pl-8 bg-transparent outline-none text-right dark:bg-card"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-right">
                {t("reservationStatus")}
              </label>
              <div className="relative">
                <select
                  value={reservationStatus}
                  onChange={(e) => setReservationStatus(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 bg-background text-right appearance-none dark:bg-card"
                >
                  <option value={t("approved")}>{t("approved")}</option>
                  <option value={t("pending")}>{t("pending")}</option>
                  <option value={t("canceled")}>{t("canceled")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-right">
                {t("propertyType")}
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 bg-background text-right appearance-none dark:bg-card"
                >
                  <option value={t("apartment")}>{t("apartment")}</option>
                  <option value={t("hotel")}>{t("hotel")}</option>
                  <option value={t("villa")}>{t("villa")}</option>
                  <option value={t("suite")}>{t("suite")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border flex justify-center">
          <button
            type="button"
            onClick={() => {
              onApplyFilters({
                checkInDate,
                checkOutDate,
                reservationStatus,
                propertyType,
              });
              onClose();
            }}
            className="bg-primary text-background px-10 py-2 rounded-full font-medium"
          >
            {t("applyFilter")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;