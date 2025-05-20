import axios, { AxiosResponse, AxiosError } from "axios";
import { removeToken } from '../cookie/auth';
import { showToast } from "../toast/toast";
import { getSession } from "next-auth/react";

const baseURL = 'https://delta-project.liara.run/api';

const axiosApi = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response: AxiosResponse) => {
    return response.data;
}

const onError = (err: AxiosError) => {
    console.log(err);

    if (err.message === "Network Error" || err.response?.status === 403) {
        removeToken();
        window.location.pathname = '/login';
        showToast("error", " شما وارد نشدید! ", " بستن ")
    }

    if (err.response?.status === 401) {
        removeToken();
        window.location.pathname = '/login';
        showToast("error", " شما وارد نشدید! ", " بستن ")
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
