import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8CFF45", // سبز فسفری
        secondary: "#232323", // پس‌زمینه اصلی
        foreground: "#F2F2F2", // متن اصلی
        muted: "#B3B3B3", // متن کم‌رنگ
        accent: "#A08CFF", // دکمه‌های خاص مثل "ثبت آگهی"
        danger: "#FF4D4D", // برای هشدار یا تایمر
        border: "#2E2E2E", // خطوط حاشیه
        background: "oklch(var(--background))",
        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",
        popover: "oklch(var(--popover))",
        "popover-foreground": "oklch(var(--popover-foreground))",
        "primary-foreground": "oklch(var(--primary-foreground))",
        "secondary-foreground": "oklch(var(--secondary-foreground))",
        "muted-foreground": "oklch(var(--muted-foreground))",
        "accent-foreground": "oklch(var(--accent-foreground))",
        destructive: "oklch(var(--destructive))",
        ring: "oklch(var(--ring))",
        input: "oklch(var(--input))",
      },
      fontFamily: {
        sans: ["IRANSans", "sans-serif"],
      },
      //   borderRadius: {
      //     xl: "1rem",
      //     "2xl": "1.5rem",
      //   },
    },
  },
  plugins: [],
};

export default config;
