'use client'
import { toast } from "sonner"

type ToastType = "success" | "error"

export const showToast = (type: ToastType, message: string, label: string, description?: string, duration?: number) => {
    toast[type](message, {
        action: {
            label,
            onClick: () => console.log("Undo"),
        },
        description,
        duration
    })
}