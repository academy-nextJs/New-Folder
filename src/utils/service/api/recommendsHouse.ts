/* eslint-disable @typescript-eslint/no-explicit-any */

import { getToken } from "@/core/cookie/auth"
import { fetchApi } from "@/core/interceptore/fetchApi"

export const getRecommendsHouse = async (sort: string, order: string, transactionType: "rental" | "mortgage" | "reservation" | "direct_purchase" | "") => {
    const token = await getToken()
    if (!token) {
        const response = await fetchApi.get(`/houses?limit=4&sort=${sort}&order=${order}&transactionType=${transactionType}`) as any
        return response
    }
    else {
        const response = await fetchApi.get(`/recommendations/120`) as any
        return response
    }
}