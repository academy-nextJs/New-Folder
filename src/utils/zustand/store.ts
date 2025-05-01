import { create } from 'zustand'

interface UserState {
    tempUserId: number | null,
    userId: null | string,
    setTempUserId: (id: number) => void,
    setUserId: (id: string) => void
}

interface EmailState {
    email: string | null,
    setEmail: (email: string) => void,
}

const useUserStore = create<UserState>((set) => ({
    tempUserId: null,
    userId: null,
    setTempUserId: (id: number) => set({ tempUserId: id }),
    setUserId: (id: string) => set({ userId: id })
}))

const useEmailStore = create<EmailState>((set) => ({
    email: null,
    setEmail: (email: string) => set({ email: email })
}))

export {useUserStore, useEmailStore}