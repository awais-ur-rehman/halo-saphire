import { EmptyState } from '@/components/common/EmptyState'

export const InsightsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Insights</h1>
          <p className="text-gray-600">Deep customer behavior analysis and trends</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <EmptyState
          title="Customer Insights Dashboard"
          description="Detailed customer behavior analysis and insights will be displayed here."
        />
      </div>
    </div>
  )
} 