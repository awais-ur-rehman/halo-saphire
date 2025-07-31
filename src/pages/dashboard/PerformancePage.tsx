import { EmptyState } from '@/components/common/EmptyState'

export const PerformancePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Performance Metrics</h1>
          <p className="text-gray-600">Track and analyze performance across all stores</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <EmptyState
          title="Performance Dashboard"
          description="Detailed performance metrics and KPIs will be displayed here."
        />
      </div>
    </div>
  )
} 