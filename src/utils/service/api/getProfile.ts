/* eslint-disable */

import { fetchApi } from "@/core/interceptore/fetchApi"
import { IProfile } from "@/types/profile-type/profile-type";

export const getProfile = async (userId: string) => {
    const response = await fetchApi.get(`/users/${userId}`) as any;
    const user = response?.user as IProfile;
    return user;
}