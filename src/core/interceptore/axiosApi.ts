import axios, { AxiosResponse, AxiosError } from "axios";
import { getToken, removeToken } from '../cookie/auth';

const baseURL = 'https://delta-project.liara.run/api';

const instance = axios.create({
    baseURL: baseURL,
});

const onSuccess = (response: AxiosResponse) => {
    return response.data;
}

const onError = (err: AxiosError) => {
    console.log(err);

    if (err.message === "Network Error") {
        removeToken();
        window.location.pathname = '/login';
    }

    if (err.response?.status === 401) {
        removeToken();
        window.location.pathname = '/login';
    }

    if (err.response?.status && err.response?.status >= 400 && err.response?.status < 500) {
        console.log("Client request error:", err.response?.status);
    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use(async (opt) => {
    const token = await getToken();
    if (token) {
        opt.headers.Authorization = 'Bearer ' + token;
    }
    return opt;
});

export default instance;
