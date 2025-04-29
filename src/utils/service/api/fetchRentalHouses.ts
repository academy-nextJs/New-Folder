/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchApi } from "@/core/interceptore/fetchApi"

export const fetchRentalHouses = async () => {
    const houses = await fetchApi.get(`/houses`)
    const response = houses.filter((house: any) => house.transaction_type === 'rental')
    return response
}