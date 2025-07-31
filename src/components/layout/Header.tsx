import { useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { sidebarItems, bottomItems } from '@/utils/constants'

export const Header = () => {
  const location = useLocation()
  const { user, logout } = useAuth()

  const getBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs = []
    
    let currentPath = ''
    for (const segment of pathSegments) {
      currentPath += `/${segment}`
      
      const navItem = [...sidebarItems, ...bottomItems].find(item => 
        item.href === currentPath
      )
      
      if (navItem) {
        breadcrumbs.push({
          label: navItem.label,
          href: currentPath,
        })
      }
    }
    
    return breadcrumbs
  }

  const handleLogout = () => {
    logout()
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm">
        <span className="text-gray-500">Dashboard</span>
                            {breadcrumbs.map((breadcrumb) => (
                      <div key={breadcrumb.href} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">
                          {breadcrumb.label}
                        </span>
                      </div>
                    ))}
      </nav>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 hover:bg-gray-200">
          <Search className="w-4 h-4 text-gray-600" />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative hover:bg-gray-200">
          <Bell className="w-4 h-4 text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 w-9 p-0 rounded-full hover:bg-gray-200">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback className="bg-gray-200 text-gray-700">
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
} 