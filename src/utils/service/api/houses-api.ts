/* eslint-disable @typescript-eslint/no-explicit-any */

import { fetchApi } from "@/core/interceptore/fetchApi"
import { IHouse } from "@/types/houses-type/house-type";

export const getHouses = async (
    transactionType: string,
    search: string,
    order: "ASC" | "DESC",
    sort: string,
    location?: string,
    minPrice?: number | "",
    maxPrice?: number | "",
) => {
    const url =
        `/houses?transactionType=${transactionType}` +
        `&search=${encodeURIComponent(search)}` +
        `&order=${order}` +
        `&sort=${sort}` +
        `&location=${encodeURIComponent(location ?? '')}` +
        (minPrice !== '' ? `&minPrice=${minPrice}` : '') +
        (maxPrice !== '' ? `&maxPrice=${maxPrice}` : '');

    const response = await fetchApi.get(url) as IHouse[];

    return response
}