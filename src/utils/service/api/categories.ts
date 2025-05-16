import { fetchApi } from "@/core/interceptore/fetchApi"
import { Category } from "@/types/categories-type/categories-type"

export const getCategories = async () => {
    const response = await fetchApi.get<Category[]>("/categories")
    return response
}