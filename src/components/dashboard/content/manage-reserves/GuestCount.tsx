import { X } from "lucide-react";
import { useTranslations } from "next-intl";

interface GuestCountListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuestCount({
  isOpen,
  onClose,
}: GuestCountListModalProps) {
  const t = useTranslations("dashboardBuyer.manageReserves");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  backdrop-blur-sm">
      <div className="w-[95%] max-w-3xl bg-border p-6 rounded-xl text-right">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">{t("guestListTitle")}</h2>
          <button
            onClick={onClose}
            className="flex items-center gap-2 border border-danger text-danger px-4 py-1 rounded-full"
          >
            {t("close")} <X size={16} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl">
          <table className="w-full text-sm text-center border-collapse">
            <thead className="bg-subText text-foreground">
              <tr className="bg-subText rounded">
                <th className="p-2 rounded-r">{t("name")}</th>
                <th className="p-2">{t("nationalCode")}</th>
                <th className="p-2">{t("gender")}</th>
                <th className="p-2 rounded-l">{t("birthDate")}</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((_, index) => (
                <tr key={index} className="bg-subBg">
                  <td className="p-2">{t("sampleName")}</td>
                  <td className="p-2">{t("sampleNationalCode")}</td>
                  <td className="p-2">{t("sampleGender")}</td>
                  <td className="p-2 text-primary cursor-pointer">
                    {t("sampleBirthDate")}
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