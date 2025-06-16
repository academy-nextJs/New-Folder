/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession, signIn, signOut } from 'next-auth/react';
import { showToast } from '../toast/toast';

const baseURL = 'https://delta-project.liara.run/api'

const onSuccess = async (response: Response) => {
    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
}

const onError = async (error: Response | Error) => {
    const session = await getSession();
    const refreshToken = session?.refreshToken;

    const handleRefreshToken = async () => {
        if (refreshToken) {
            const response = await fetch(`${baseURL}/auth/refresh`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: refreshToken })
            });

            const data = await response.json();
            if (response.ok) {
                await signIn("credentials", {
                    redirect: false,
                    accessToken: data?.accessToken,
                    refreshToken: refreshToken,
                });
            } else {
                await signOut({ callbackUrl: '/login' });
                showToast("error", "شما وارد نشده‌اید!", "بستن");
            }
        } else {
            await signOut({ callbackUrl: '/login' });
            showToast("error", "شما وارد نشده‌اید!", "بستن");
        }
    }

    if (error instanceof Response) {
        if (error.status === 401 || error.status === 403) {
            handleRefreshToken()
        }

        if (error.status >= 400 && error.status < 500) {
            const errorData = await error.json().catch(() => null);
            console.log("Client request error:", errorData?.message || error.status);
            throw new Error(errorData?.message || `HTTP error! status: ${error.status}`);
        }
    }

    if (error instanceof Error) {
        if (error.message === "invalid token" || error.message === "Invalid token") {
            await signOut({ callbackUrl: '/login' });
            showToast("error", "توکن نامعتبر است. لطفا دوباره وارد شوید.", "بستن");
        }
    }

    throw error;
}


async function fetchWithAuth(url: string, options: RequestInit = {}) {
    try {
        const session = await getSession();
        const token = session?.accessToken

        const headers = {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
            ...options.headers,
        }

        const response = await fetch(`${baseURL}${url}`, {
            ...options,
            headers,
        });

        return await onSuccess(response);
    } catch (error) {
        return onError(error as Response | Error);
    }
}

export const fetchApi = {
    get: <T>(url: string, options?: RequestInit): Promise<T> =>
        fetchWithAuth(url, { ...options, method: 'GET' }),

    post: <T>(url: string, data: any, options?: RequestInit): Promise<T> =>
        fetchWithAuth(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data)
        }),

    put: <T>(url: string, data: any, options?: RequestInit): Promise<T> =>
        fetchWithAuth(url, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data)
        }),

    delete: <T>(url: string, options?: RequestInit): Promise<T> =>
        fetchWithAuth(url, { ...options, method: 'DELETE' }),
}; 