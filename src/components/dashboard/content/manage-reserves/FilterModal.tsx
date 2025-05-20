import { useState } from "react";
import { X, Calendar } from "lucide-react";

interface FilterValues {
  checkInDate: string;
  checkOutDate: string;
  reservationStatus: string;
  propertyType: string;
}

// Define props interface for the component
interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}

const FilterModal = ({ isOpen, onClose, onApplyFilters }: FilterModalProps) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [reservationStatus, setReservationStatus] = useState("تایید شده");
  const [propertyType, setPropertyType] = useState("آپارتمان");

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
            className="text-gray-500 hover:text-gray-700 flex items-center border border-danger rounded-2xl p-1"
          >
            <span className="mr-1 text-danger">بستن</span>
            <X className="h-5 w-5 text-danger" />
          </button>
          <h2 className="text-lg font-bold">فیلترها</h2>
        </div>

        <div className="p-4 space-y-6" dir="rtl">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-right">
                تاریخ رفت:
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  placeholder="مثال: 1404/1/3"
                  type="text"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 pr-2 pl-8 bg-transparent outline-none text-right dark:bg-card"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-right">
                تاریخ برگشت:
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  placeholder="مثال: 1404/1/5"
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
                وضعیت رزرو:
              </label>
              <div className="relative">
                <select
                  value={reservationStatus}
                  onChange={(e) => setReservationStatus(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 bg-background text-right appearance-none dark:bg-card"
                >
                  <option value="تایید شده">تایید شده</option>
                  <option value="در انتظار">در انتظار</option>
                  <option value="لغو شده">لغو شده</option>
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
                نوع ملک:
              </label>
              <div className="relative">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full border border-border rounded-lg p-2 bg-background text-right appearance-none dark:bg-card"
                >
                  <option value="آپارتمان">آپارتمان</option>
                  <option value="هتل">هتل</option>
                  <option value="ویلا">ویلا</option>
                  <option value="سوئیت">سوئیت</option>
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
            اعمال فیلتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
