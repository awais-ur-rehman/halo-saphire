import { useAuthStore } from '@/store/authStore'
import type { LoginCredentials } from '@/types/auth'

export const useAuth = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    setUser,
    setLoading,
    setError,
    clearError,
  } = useAuthStore()

  const handleLogin = async (credentials: LoginCredentials) => {
    await login(credentials)
  }

  const handleLogout = () => {
    logout()
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login: handleLogin,
    logout: handleLogout,
    setUser,
    setLoading,
    setError,
    clearError,
  }
} 