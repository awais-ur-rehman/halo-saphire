import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, LoginCredentials, AuthState } from '@/types/auth'

interface AuthStore extends AuthState {
    login: (credentials: LoginCredentials) => Promise<void>
    logout: () => void
    setUser: (user: User) => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    clearError: () => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (credentials: LoginCredentials) => {
                set({ isLoading: true, error: null })
                try {
                    // TODO: Replace with actual API call
                    // const response = await authApi.login(credentials)

                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 1000))

                    const mockUser: User = {
                        id: '1',
                        email: credentials.email,
                        name: 'Admin User',
                        role: 'admin',
                        avatar: undefined,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                    }

                    set({
                        user: mockUser,
                        isAuthenticated: true,
                        isLoading: false,
                        error: null,
                    })
                } catch (error) {
                    set({
                        isLoading: false,
                        error: error instanceof Error ? error.message : 'Login failed',
                    })
                }
            },

            logout: () => {
                set({
                    user: null,
                    isAuthenticated: false,
                    error: null,
                })
            },

            setUser: (user: User) => {
                set({ user, isAuthenticated: true })
            },

            setLoading: (loading: boolean) => {
                set({ isLoading: loading })
            },

            setError: (error: string | null) => {
                set({ error })
            },

            clearError: () => {
                set({ error: null })
            },
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
) 