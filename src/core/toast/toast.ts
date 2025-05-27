'use client'
import { toast } from "sonner"

type ToastType = "success" | "error"

export const showToast = (type: ToastType, message: string, label: string, description?: string, duration?: number) => {
    toast[type](message, {
        className: "max-w-full sm:max-w-md mx-auto p-4 text-sm sm:text-base",
        action: {
            label,
            onClick: () => console.log(""),
        },
        description,
        duration,
    });
}