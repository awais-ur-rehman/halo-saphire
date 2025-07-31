export const APP_NAME = "Sapphire Analytics Dashboard"

export const sidebarItems = [
    {
        id: 'control-center',
        label: 'Control Center',
        icon: 'LayoutDashboard',
        href: '/dashboard/control-center'
    },
    {
        id: 'tab-1',
        label: 'Store Analytics',
        icon: 'BarChart3',
        href: '/dashboard/analytics'
    },
    {
        id: 'tab-2',
        label: 'Customer Insights',
        icon: 'Users',
        href: '/dashboard/insights'
    },
    {
        id: 'tab-3',
        label: 'Performance',
        icon: 'TrendingUp',
        href: '/dashboard/performance'
    },
    {
        id: 'tab-4',
        label: 'Reports',
        icon: 'FileText',
        href: '/dashboard/reports'
    },
]

export const bottomItems = [
    {
        id: 'settings',
        label: 'System Settings',
        icon: 'Settings',
        href: '/settings'
    },
    {
        id: 'logout',
        label: 'Logout',
        icon: 'LogOut',
        href: undefined,
        action: 'logout'
    }
]

export const routes = [
    { path: '/login', element: 'LoginPage' },
    {
        path: '/dashboard',
        element: 'MainLayout',
        children: [
            { path: 'control-center', element: 'ControlCenterPage' },
            { path: 'analytics', element: 'AnalyticsPage' },
            { path: 'insights', element: 'InsightsPage' },
            { path: 'performance', element: 'PerformancePage' },
            { path: 'reports', element: 'ReportsPage' },
        ]
    },
    { path: '/settings', element: 'SystemSettingsPage' }
] 