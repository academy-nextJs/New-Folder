/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchApi } from "@/core/interceptore/fetchApi"

export const fetchHouses = async (sort: string, order: string, transactionType: "rental" | "mortgage" | "reservation" | "direct_purchase" | "") => {
    const response = await fetchApi.get(`/houses?sort=${sort}&order=${order}&transactionType=${transactionType}`) as any
    return response
}