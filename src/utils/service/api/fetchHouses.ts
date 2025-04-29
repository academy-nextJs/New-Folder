import { fetchApi } from "@/core/interceptore/fetchApi"

export const fetchHouses = async (sort: string, order: string) => {
    const response = await fetchApi.get(`/houses?sort=${sort}&order=${order}`)
    return response
}