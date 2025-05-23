/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession, signOut } from 'next-auth/react';
import { showToast } from '../toast/toast';

const baseURL = 'https://delta-project.liara.run/api'

const onSuccess = async (response: Response) => {
    if (!response.ok) {
        throw response;
    }
    return response.json();
}

const onError = async (error: Response | Error) => {
    console.log(error);

    if (error instanceof Response) {
        if (error.status === 401 || error.status === 403) {
            await signOut({ callbackUrl: '/login' });
            window.location.pathname = '/login';
            showToast("error", " شما وارد نشدید! ", " بستن ")
        }

        if (error.status >= 400 && error.status < 500) {
            console.log("Client request error:", error.status);
        }
    } else if (error.message === "Network Error") {
        await signOut({ callbackUrl: '/login' });
        window.location.pathname = '/login';
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