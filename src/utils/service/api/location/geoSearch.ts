import { fetchApi } from "@/core/interceptore/fetchApi";

export const geoSearch = async (lat: number, lng: number, radius: number) => {
  const response = await fetchApi.get(`/houses/geo-search?lat=${lat}&lng=${lng}&radius=${radius}`);
  return response;
};