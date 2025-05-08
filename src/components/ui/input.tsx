import * as React from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const {i18n} = useTranslation("")
  return (
    <input
      dir={i18n.dir()}
      type={type}
      data-slot="input"
      className={cn(
        "outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
