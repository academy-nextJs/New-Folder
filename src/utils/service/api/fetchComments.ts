import { fetchApi } from "@/core/interceptore/fetchApi"
import { IGetComment } from "@/types/comment-type/comment-type"

export const fetchComments = async (
    id: string, page: number, limit: number
) => {
    const response = await fetchApi.get(`/houses/${id}/comments?page=${page}&limit=${limit}`) as IGetComment[]
    return response
}