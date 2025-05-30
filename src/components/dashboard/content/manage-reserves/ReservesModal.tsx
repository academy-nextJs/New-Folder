import { X } from "lucide-react";
import { useTranslations } from "next-intl";

interface ListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservesModals({ isOpen, onClose }: ListModalProps) {
  const t = useTranslations("modals.reservesList");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  backdrop-blur-sm">
      <div className="w-[95%] max-w-3xl bg-border p-6 rounded-xl text-right">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">{t("title")}</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-2 border border-danger text-danger px-4 py-1 rounded-full"
          >
            {t("close")} <X size={16} />
          </button>
        </div>

        <div className="overflow-hidden rounded-xl">
          <table className="w-full text-sm text-center border-collapse">
            <thead className="bg-subText text-foreground">
              <tr className="bg-textComment dark:bg-subText rounded-xl">
                <th className="p-2 rounded-r">{t("date")}</th>
                <th className="p-2 rounded-r"></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((_, index) => (
                <tr key={index} className="bg-subBg">
                  <td className="p-2">{t("sampleDate")}</td>
                  <td className="p-2 text-primary cursor-pointer">
                    {t("guestCount")}
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