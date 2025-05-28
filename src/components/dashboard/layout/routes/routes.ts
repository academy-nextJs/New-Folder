import { Routes } from "@/types/routes-type/routes-type";
import { BellDot, Coins, Heart, Home, House, HousePlus, PlusCircle, Settings, SquaresSubtract, User } from "lucide-react";

export const routes = [
  { label: "داشبورد", href: `/dashboard`, icon: Home },
  { label: "اطلاعات کاربری", href: "/dashboard/profile", icon: User },
  { label: "مدیریت رزرو ها", href: "/dashboard/manage-reserves", icon: PlusCircle },
  { label: "علاقه مندی ها", href: "/dashboard/favorites", icon: Heart },
  { label: "پرداخت ها", href: "/dashboard/payments", icon: Coins },
  { label: "اعلان ها", href: "/dashboard/notifications", icon: BellDot },
] as Routes[]

export const sellerRoutes = [
  { label: "داشبورد", href: "/dashboard/seller", icon: Home },
  { label: "اطلاعات کاربری", href: "/dashboard/seller/profile", icon: User },
  {
    label: "مدیریت املاک", href: "/dashboard/seller/manage-houses", icon: Settings, children: [
      { label: "املاک من", href: "/dashboard/seller/manage-houses/my-houses", icon: House },
      { label: "ملک جدید", href: "/dashboard/seller/manage-houses/add-houses", icon: HousePlus },
    ]
  },
  { label: "مدیریت رزروها", href: "/dashboard/seller/manage-reserves", icon: PlusCircle },
  { label: "مدیریت مالی", href: "/dashboard/seller/payments", icon: Coins },
  { label: "مدیریت نظرات", href: "/dashboard/seller/manage-comments", icon: SquaresSubtract },
  { label: "اعلان ها", href: "/dashboard/seller/notifications", icon: BellDot },
] as Routes[]