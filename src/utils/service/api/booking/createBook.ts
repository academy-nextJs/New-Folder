import axiosApi from "@/core/interceptore/axiosApi";
import { IBook } from "@/utils/zustand/booking";

export const createBook = async (data: IBook) => {
    const response = await axiosApi.post('/bookings', data)
    return response
}