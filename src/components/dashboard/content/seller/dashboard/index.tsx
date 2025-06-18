// pages/dashboard/index.tsx
import React from "react";
import { fetchApi } from "@/core/interceptore/fetchApi";
import ComSellerDashboard from "./ComSellerDashboard";

export interface FavoritesData {
  totalUsers: number;
  totalHouses: number;
  totalBookings: number;
  averageRating: string;
}

interface Props {
  favoritesData: FavoritesData;
}

const DashboardPage = ({ favoritesData }: Props) => {
  return <ComSellerDashboard favoritesData={favoritesData} />;
};
export async function getServerSideProps() {
  try {
    const res = await fetchApi.get("/admin/dashboard");
    // چک کن که res.data حتما وجود داره
    if (!res) {
      throw new Error("No data from API");
    }
    return {
      props: {
        favoritesData: res,
      },
    };
  } catch (error) {
    console.error("خطا در دریافت داده سمت سرور:", error);
    return {
      props: {
        favoritesData: {
          totalUsers: 0,
          totalHouses: 0,
          totalBookings: 0,
          averageRating: "0",
        },
      },
    };
  }
}

export default DashboardPage;
