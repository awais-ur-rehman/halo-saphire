import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { useUIStore } from '@/store/uiStore'

export const MainLayout = () => {
  const { sidebarCollapsed } = useUIStore()

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div 
        className="transition-all duration-300"
        style={{ 
          marginLeft: sidebarCollapsed ? '6rem' : '18rem'
        }}
      >
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-8xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
} 