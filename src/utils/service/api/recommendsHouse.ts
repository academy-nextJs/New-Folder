/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchApi } from "@/core/interceptore/fetchApi"

export const getRecommendsHouse = async () => {
    const response = await fetchApi.get(`/recommendations/120`) as any
    return response
}