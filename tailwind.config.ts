import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8CFF45", // سبز فسفری
        secondary: "#1A1A1A", // پس‌زمینه اصلی
        foreground: "#F2F2F2", // متن اصلی
        muted: "#B3B3B3", // متن کم‌رنگ
        accent: "#A08CFF", // دکمه‌های خاص مثل "ثبت آگهی"
        danger: "#FF4D4D", // برای هشدار یا تایمر
        border: "#2E2E2E", // خطوط حاشیه
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
