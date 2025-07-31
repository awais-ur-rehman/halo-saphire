import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/common/EmptyState'
import { LayoutDashboard } from 'lucide-react'

export const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to Sapphire Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Your comprehensive retail analytics dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5" />
              Control Center
            </CardTitle>
            <CardDescription>
              Centralized management and monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access real-time analytics, performance metrics, and system controls.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Store Analytics</CardTitle>
            <CardDescription>
              Comprehensive store performance insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Track sales, inventory, and operational metrics across all locations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Insights</CardTitle>
            <CardDescription>
              Deep customer behavior analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Understand customer preferences, trends, and engagement patterns.
            </p>
          </CardContent>
        </Card>
      </div>

      <EmptyState
        icon={LayoutDashboard}
        title="Dashboard Overview"
        description="This is your main dashboard. Navigate to specific sections using the sidebar to view detailed analytics and insights."
      />
    </div>
  )
} 