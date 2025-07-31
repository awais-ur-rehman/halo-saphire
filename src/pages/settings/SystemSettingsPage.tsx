import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/common/EmptyState'
import { Settings } from 'lucide-react'

export const SystemSettingsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          System Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Configure system preferences and administrative settings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            System Configuration
          </CardTitle>
          <CardDescription>
            Manage system preferences and administrative settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={Settings}
            title="Settings Coming Soon"
            description="System configuration and administrative settings are being developed. This section will include user management, system preferences, and security settings."
          />
        </CardContent>
      </Card>
    </div>
  )
} 