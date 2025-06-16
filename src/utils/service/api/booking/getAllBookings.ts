import { fetchApi } from "@/core/interceptore/fetchApi";

export const getAllBookings = async (page: number, limit: number, sort: string, order: string) => {
    const response = await fetchApi.get(`/bookings?page=${page}&limit=${limit}&sort=${sort}&order=${order}`)
    return response
}