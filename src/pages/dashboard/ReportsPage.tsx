import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EmptyState } from '@/components/common/EmptyState'
import { FileText } from 'lucide-react'

export const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Reports & Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Generate comprehensive reports and detailed analytics
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Report Center
          </CardTitle>
          <CardDescription>
            Custom reports and data export functionality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={FileText}
            title="Reports Coming Soon"
            description="Advanced reporting and analytics features are being developed. This section will include customizable reports, data export, and automated reporting capabilities."
          />
        </CardContent>
      </Card>
    </div>
  )
} 