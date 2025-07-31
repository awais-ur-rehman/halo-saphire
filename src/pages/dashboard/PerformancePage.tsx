import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/common/EmptyState'
import { TrendingUp } from 'lucide-react'

export const PerformancePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Performance Metrics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track and analyze key performance indicators
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Performance Overview
          </CardTitle>
          <CardDescription>
            KPI tracking and performance optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={TrendingUp}
            title="Performance Metrics Coming Soon"
            description="Advanced performance tracking and KPI monitoring features are being developed. This section will include real-time metrics, trend analysis, and performance optimization tools."
          />
        </CardContent>
      </Card>
    </div>
  )
} 