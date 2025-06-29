import { fetchApi } from "@/core/interceptore/fetchApi"
import { Category } from "@/types/categories-type/categories-type"

export const getCategories = async (name?: string) => {
    const response = await fetchApi.get(`/categories${name && `?name=${name}`}`) as { totalCount: number, data: Category[] }
    return response
}