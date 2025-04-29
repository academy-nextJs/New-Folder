import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8CFF45", // سبز فسفری
        secondary: "#232323", // پس‌زمینه اصلی
        subBg: "#363636", // پس‌زمینه فرعی
        subBg2: "#4A4A4A", // پس‌زمینه فرعی کم‌رنگ
        subText: "#AAAAAA", // متن فرعی
        foreground: "#F2F2F2", // متن اصلی
        muted: "#B3B3B3", // متن کم‌رنگ
        accent: "#A08CFF", // دکمه‌های خاص مثل "ثبت آگهی"
        danger: "#FF4D4D", // برای هشدار یا تایمر
        border: "#2E2E2E", // خطوط حاشیه
        "secondary-light": "#2D2D2D", // خاکستری کاپوننت های لندینگ
        "secondary-light2": "#393939", // خاکستری کاپوننت های کارت
        "blur-primary": '#8CFF4552', // بلور سبز 
        "blur-blue": '#7569FF52', // بلور سرمه ای
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
      keyframes: {
        popover: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        overlayShow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawerSlideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        drawerSlideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        popover: "popover 0.2s ease-out",
        overlayShow: "overlayShow 0.15s ease-out",
        drawerSlideIn: "drawerSlideIn 0.25s ease-out",
        drawerSlideOut: "drawerSlideOut 0.2s ease-out",
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
