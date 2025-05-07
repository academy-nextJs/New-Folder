import Header from "@/components/common/header/Header";
import { Providers } from "@/utils/service/TanstakProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "swiper/css";
import Footer from "@/components/common/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { template: "%s پروژه مسکن", default: "پروژه مسکن" },
  description: " املاک دلتا دوست خوب بچه ها ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <div className="flex flex-col justify-between mx-auto max-w-[1550px] w-screen h-screen">
          <Providers>
            <div className="px-8 w-full">
              <Header />
            </div>
            <div className="mb-[100px]">
                {children}
            </div>
            <div className="xl:px-8 px-0">
              <Footer />
            </div>
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}
