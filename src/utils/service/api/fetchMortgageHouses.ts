/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchApi } from "@/core/interceptore/fetchApi"

export const fetchMortgageHouses = async () => {
    const houses = await fetchApi.get(`/houses`) as any
    const response = houses.filter((house: any) => house.transaction_type === 'mortgage')
    return response
}