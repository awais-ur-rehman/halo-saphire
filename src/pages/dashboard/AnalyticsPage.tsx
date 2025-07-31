import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/common/EmptyState'
import { BarChart3 } from 'lucide-react'

export const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Store Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Comprehensive analytics and insights for your retail operations
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Analytics Overview
          </CardTitle>
          <CardDescription>
            Detailed performance metrics and trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={BarChart3}
            title="Analytics Coming Soon"
            description="Advanced analytics features are being developed. This section will include detailed charts, trends, and performance metrics."
          />
        </CardContent>
      </Card>
    </div>
  )
} 