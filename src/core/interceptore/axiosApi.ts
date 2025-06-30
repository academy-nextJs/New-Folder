/* eslint-disable */
import axios, { AxiosResponse, AxiosError } from "axios";
import { showToast } from "../toast/toast";
import { getSession, signIn, signOut } from "next-auth/react";
import { fetchApi } from "./fetchApi";

const baseURL = 'https://delta-project.liara.run/api';

const axiosApi = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response: AxiosResponse) => {
    return response.data;
}

const onError = async (err: AxiosError) => {
    const session = await getSession() as any;
    const refreshToken = session?.refreshToken;
    const password = session?.password;

    const handleRefreshToken = async () => {
            try {
                if (refreshToken) {
                    const response = await fetchApi.post(`${baseURL}/auth/refresh`, { token: refreshToken }) as { accessToken: string }
    
                    if (response) {
                        await signIn("credentials", {
                            redirect: false,
                            accessToken: response?.accessToken,
                            refreshToken: refreshToken,
                            password: password
                        });
                    } else {
                        await signOut({ callbackUrl: '/login' });
                        showToast("error", "شما وارد نشده‌اید!", "بستن");
                    }
                } else {
                    await signOut({ callbackUrl: '/login' });
                    showToast("error", "شما وارد نشده‌اید!", "بستن");
                }
            } catch {
                await signOut({ callbackUrl: '/login' });
                showToast("error", "شما وارد نشده‌اید!", "بستن");
            }
        }

    if (err.response?.status === 403) {
        await handleRefreshToken()
    }

    if (err.response?.status === 401) {
        await handleRefreshToken()
    }

    if (err.response?.status && err.response?.status >= 400 && err.response?.status < 500) {
        console.log("Client request error:", err.response?.status);
    }

    return Promise.reject(err);
}

axiosApi.interceptors.response.use(onSuccess, onError);

axiosApi.interceptors.request.use(async (opt) => {
    const session = await getSession();
    const token = session?.accessToken

    if (token) {
        opt.headers.Authorization = 'Bearer ' + token;
    }
    return opt;
});

export default axiosApi;
