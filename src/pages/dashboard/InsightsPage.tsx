import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/common/EmptyState'
import { Users } from 'lucide-react'

export const InsightsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Customer Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Deep analysis of customer behavior and preferences
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Customer Analytics
          </CardTitle>
          <CardDescription>
            Behavioral patterns and customer journey analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={Users}
            title="Customer Insights Coming Soon"
            description="Advanced customer analytics and behavioral insights are being developed. This section will include customer segmentation, journey mapping, and preference analysis."
          />
        </CardContent>
      </Card>
    </div>
  )
} 