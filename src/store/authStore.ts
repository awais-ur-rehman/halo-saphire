import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserRole, LoginCredentials } from '@/types/auth'

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
    login: (credentials: LoginCredentials) => Promise<void>
    logout: () => void
    setUser: (user: User) => void
    setLoading: (isLoading: boolean) => void
    setError: (error: string | null) => void
    clearError: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            login: async (credentials: LoginCredentials) => {
                set({ isLoading: true, error: null })
                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 1000))

                    const mockUser: User = {
                        id: '1',
                        name: 'Admin User',
                        email: credentials.email,
                        role: 'admin' as UserRole,
                        avatar: undefined,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }

                    set({ user: mockUser, isAuthenticated: true, isLoading: false })
                } catch (error) {
                    set({ error: 'Login failed', isLoading: false })
                }
            },

            logout: () => {
                set({ user: null, isAuthenticated: false, error: null })
            },

            setUser: (user: User) => set({ user }),
            setLoading: (isLoading: boolean) => set({ isLoading }),
            setError: (error: string | null) => set({ error }),
            clearError: () => set({ error: null })
        }),
        {
            name: 'auth-storage',
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated
            })
        }
    )
) 