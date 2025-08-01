import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/ui/button'
import { sidebarItems, bottomItems } from '@/utils/constants'
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Building,
  Target
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useUIStore } from '@/store/uiStore'

const iconMap = {
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  Building,
  Target,
}

export const Sidebar = () => {
  const location = useLocation()
  const { logout } = useAuth()
  const { sidebarCollapsed, toggleSidebar } = useUIStore()

  const handleLogout = () => {
    logout()
  }

  const renderIcon = (iconName: string, isActive: boolean) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? (
      <IconComponent className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "w-6 h-6" : "w-5 h-5",
        isActive ? "text-white" : "text-gray-700"
      )} />
    ) : null
  }

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/')
  }

  return (
    <div className="relative">
      <div
        className={cn(
          'fixed top-4 left-4 bottom-4 bg-[#f7f7f7] rounded-2xl transition-all duration-300 z-50 flex flex-col ',
          sidebarCollapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex items-center justify-between p-4">
          {!sidebarCollapsed && <Logo size="sm" />}
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  sidebarCollapsed 
                    ? active 
                      ? 'justify-center w-10 h-10 bg-black rounded-full mx-auto' 
                      : 'justify-center w-10 h-10 hover:bg-gray-200 rounded-full mx-auto'
                    : active
                      ? 'bg-black text-white px-1'
                      : 'text-gray-700 hover:bg-gray-100 px-1'
                )}
              >
                {renderIcon(item.icon, active)}
                {!sidebarCollapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 space-y-2">
          {bottomItems.map((item) => {
            const active = item.href ? isActive(item.href) : false
            return (
              <div key={item.id}>
                {item.action === 'logout' ? (
                  <Button
                    variant="default"
                    className={cn(
                      'flex items-center gap-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      sidebarCollapsed 
                        ? active 
                          ? 'justify-center w-10 h-10 hover:bg-gray-200 rounded-full mx-auto' 
                          : 'justify-start w-10 h-10 text-gray-700 hover:bg-gray-100 mx-auto'
                        : active
                          ? 'bg-black text-white px-1'
                          : 'text-gray-700 hover:bg-gray-100 px-1'
                    )}
                    onClick={handleLogout}
                  >
                    {renderIcon(item.icon, false)}
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </Button>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className={cn(
                      'flex items-center gap-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      sidebarCollapsed 
                        ? active 
                          ? 'justify-center w-10 h-10 hover:bg-gray-200 rounded-full mx-auto' 
                          : 'justify-start w-10 h-10 text-gray-700 hover:bg-gray-100 mx-auto'
                        : active
                          ? 'bg-black text-white px-1'
                          : 'text-gray-700 hover:bg-gray-100 px-1'
                    )}
                  >
                    {renderIcon(item.icon, active)}
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={toggleSidebar}
        className="fixed top-6 left-4 z-50 h-8 w-8 p-0 bg-white rounded-full border border-gray-200 hover:bg-gray-50"
        style={{ 
          left: sidebarCollapsed ? '4rem' : '16rem',
          transition: 'left 0.3s ease'
        }}
      >
        {sidebarCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </Button>
    </div>
  )
} 