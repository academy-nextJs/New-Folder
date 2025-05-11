import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bacgkroundW: "var(--bacgkroundW)",
        textComment: "var(--textComment)",
        cardComment: "var(--cardComment)",
        iconsecendary: "var(--iconsecendary)",
        "text-about": "var(--text-about)",
        "card-body": "var(--card-body)",
        primary: "var(--primary)", // سبز فسفری
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)", // پس‌زمینه اصلی
        "secondary-static": "var(--secondary-static)", // پس‌زمینه ثابت
        "secondary-foreground": "var(--secondary-foreground)",
        background: "var(--background)",
        bgDash: "var(--bgDash)", // پس‌زمینه داشبورد
        foreground: "var(--foreground)", // متن اصلی
        subBg: "var(--subBg)", // پس‌زمینه فرعی
        subBg2: "var(--subBg2)", // پس‌زمینه فرعی کم‌رنگ
        subText: "var(--subText)", // متن فرعی
        muted: "var(--muted)", // متن کم‌رنگ
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)", // دکمه‌های خاص مثل "ثبت آگهی"
        "accent-foreground": "var(--accent-foreground)",
        danger: "var(--danger)", // برای هشدار یا تایمر
        destructive: "var(--destructive)",
        border: "var(--border)", // خطوط حاشیه
        "secondary-light": "var(--secondary-light)", // خاکستری کاپوننت های لندینگ
        "secondary-light2": "var(--secondary-light2)", // خاکستری کاپوننت های کارت
        "secondary-light3": "var(--secondary-light3)", // 2 خاکستری کاپوننت های کارت
        "secondary-light4": "var(--secondary-light4)", // 2 خاکستری کاپوننت های کارت
        "blur-primary": "var(--blur-primary)", // بلور سبز
        "blur-blue": "var(--blur-blue)", // بلور سرمه ای
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        input: "var(--input)",
        ring: "var(--ring)",
        "card-light": "var(--card-light)",
        "card-secondary": "var(--card-secondary)",
        "card-secondary2": "var(--card-secondary2)",
        "card-secondary3": "var(--card-secondary3)",
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
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  plugins: [],
};

export default config;
