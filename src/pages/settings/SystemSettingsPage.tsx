import { EmptyState } from '@/components/common/EmptyState'

export const SystemSettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
          <p className="text-gray-600">Configure system preferences and settings</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <EmptyState
          title="System Settings"
          description="System configuration and settings options will be displayed here."
        />
      </div>
    </div>
  )
} 