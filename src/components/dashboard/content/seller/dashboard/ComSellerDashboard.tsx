"use client";

import React, { useEffect, useState } from "react";
import MiniCard from "./cards/MiniCard";
import StatusProfile from "./cards/StatusProfile";
import SituationPayroll from "./cards/SituationPayroll";
import RecentReserves from "./cards/RecentReserves";
import { fetchApi } from "@/core/interceptore/fetchApi";

interface DashboardData {
  totalUsers: number;
  totalHouses: number;
  totalBookings: number;
  averageRating: string;
}

const ComSellerDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetchApi.get("/admin/dashboard");
        if (!res) throw new Error("Failed to fetch");
        const json = await res;

        setData(json);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }
    fetchData();
  }, []);

  if (!data) return <div></div>;

  const dataMiniCards = [
    {
      number: data.totalHouses,
      title: "totalProperties",
      href: "/dashboard/seller/manage-houses/my-houses",
    },
    {
      number: data.totalBookings,
      title: "activeReserves",
      href: "/dashboard/seller/manage-reserves",
    },
    {
      number: data.totalUsers,
      title: "pendingReserves",
      href: "/dashboard/seller/manage-reserves",
    }, // عدد ثابت یا از داده بگیر
    {
      number: data.averageRating,
      title: "todayVisits",
      href: "/dashboard/seller/manage-houses/my-houses",
    },
  ];

  return (
    <div className="bg-bgDash rounded-xl py-4 flex flex-col gap-8">
      <div className="w-full max-lg:flex-col flex flex-row gap-4 justify-between">
        {dataMiniCards.map((data, idx) => (
          <MiniCard key={idx} {...data} idx={idx} />
        ))}
      </div>
      <div className="flex w-full justify-between gap-4 h-fit max-lg:flex-col">
        <SituationPayroll />
        <StatusProfile />
      </div>
      <RecentReserves />
    </div>
  );
};

export default ComSellerDashboard;
