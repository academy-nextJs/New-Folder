'use server'
import { cookies } from "next/headers"

export const getToken = async () => {
   const cookieStore = await cookies()
   return cookieStore.get('token')?.value
}

export const removeToken = async () => {
  'use server'
  const cookieStore = await cookies()
  cookieStore.delete('token')
}
