import axios, { AxiosResponse, AxiosError } from "axios";
import { showToast } from "../toast/toast";
import { getSession, signIn, signOut } from "next-auth/react";

const baseURL = 'https://delta-project.liara.run/api';

const axiosApi = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response: AxiosResponse) => {
    return response.data;
}

const onError = async (err: AxiosError) => {
    const session = await getSession();
    const refreshToken = session?.refreshToken;

    if (err.message === "Network Error" || err.response?.status === 403) {
        if (refreshToken) {
            const response = await fetch(`${baseURL}/auth/refresh`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: refreshToken })
            })
            const data = await response.json();
            if (response.ok) {
                await signIn("credentials", {
                    redirect: false,
                    accessToken: data?.accessToken,
                    refreshToken: data?.refreshToken,
                })
            }
            else {
                await signOut({ callbackUrl: '/login' });
                showToast("error", " شما وارد نشدید! ", " بستن ")
            }
        }
        else {
            await signOut({ callbackUrl: '/login' });
            showToast("error", " شما وارد نشدید! ", " بستن ")
        }
    }

    if (err.response?.status === 401) {
        if (refreshToken) {
            const response = await fetch(`${baseURL}/auth/refresh`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: refreshToken })
            })
            const data = await response.json();
            if (response.ok) {
                await signIn("credentials", {
                    redirect: false,
                    accessToken: data?.accessToken,
                    refreshToken: data?.refreshToken,
                })
            }
            else {
                await signOut({ callbackUrl: '/login' });
                showToast("error", " شما وارد نشدید! ", " بستن ")
            }
        }
        else {
            await signOut({ callbackUrl: '/login' });
            showToast("error", " شما وارد نشدید! ", " بستن ")
        }
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
