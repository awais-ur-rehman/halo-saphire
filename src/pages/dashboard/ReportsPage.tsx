import { EmptyState } from '@/components/common/EmptyState'

export const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate and view comprehensive reports</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <EmptyState
          title="Reports Dashboard"
          description="Comprehensive reporting tools and analytics will be displayed here."
        />
      </div>
    </div>
  )
} 