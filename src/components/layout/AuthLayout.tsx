import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <Outlet />
    </div>
  )
} 