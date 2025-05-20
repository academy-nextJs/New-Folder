import { X } from "lucide-react";

interface GuestCountListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuestCount({
  isOpen,
  onClose,
}: GuestCountListModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  backdrop-blur-sm">
      <div className="w-[95%] max-w-3xl bg-border p-6 rounded-xl text-right">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">لیست مسافر ها</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-2 border border-danger text-danger px-4 py-1 rounded-full"
          >
            بستن <X size={16} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl">
          <table className="w-full text-sm text-center border-collapse">
            <thead className="bg-subText text-foreground">
              <tr className="bg-subText rounded">
                <th className="p-2 rounded-r">نام</th>
                <th className="p-2"> کد ملی</th>
                <th className="p-2">جنسیت</th>
                <th className="p-2 rounded-l">تاریخ تولد</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((_, index) => (
                <tr key={index} className="bg-subBg">
                  <td className="p-2">ممد درزی</td>
                  <td className="p-2">5770050144</td>
                  <td className="p-2">مرد</td>
                  <td className="p-2 text-primary cursor-pointer">
                    12 مرداد 1402
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
