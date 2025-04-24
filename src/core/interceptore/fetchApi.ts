/* eslint-disable @typescript-eslint/no-explicit-any */


import { getToken } from '../cookie/auth'

const baseURL = 'https://delta-project.liara.run/api'

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token =await getToken()
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  }

  const response = await fetch(`${baseURL}${url}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export const api = {
  get: (url: string, options?: RequestInit) => 
    fetchWithAuth(url, { ...options, method: 'GET' }),
  
  post: (url: string, data: any, options?: RequestInit) => 
    fetchWithAuth(url, { 
      ...options, 
      method: 'POST',
      body: JSON.stringify(data)
    }),
  
  put: (url: string, data: any, options?: RequestInit) => 
    fetchWithAuth(url, { 
      ...options, 
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  
  delete: (url: string, options?: RequestInit) => 
    fetchWithAuth(url, { ...options, method: 'DELETE' }),
} 