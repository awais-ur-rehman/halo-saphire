export const APP_NAME = "Sapphire Analytics Dashboard"

export const sidebarItems = [
    {
        id: 'control-center',
        label: 'Control Center',
        icon: 'LayoutDashboard',
        href: '/dashboard/control-center'
    },
    {
        id: 'branches',
        label: 'Branches',
        icon: 'Building',
        href: '/dashboard/branches'
    },
    {
        id: 'competitor-analysis',
        label: 'Competitor Analysis',
        icon: 'Target',
        href: '/dashboard/competitor-analysis'
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
            { path: 'branches', element: 'BranchesPage' },
            { path: 'competitor-analysis', element: 'CompetitorAnalysisPage' },
            { path: 'reports', element: 'ReportsPage' },
        ]
    },
    { path: '/settings', element: 'SystemSettingsPage' }
] 