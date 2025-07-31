import { cn } from '@/utils/cn'
import type { Icon } from 'lucide-react'

interface EmptyStateProps {
  icon?: Icon
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className 
}: EmptyStateProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center', className)}>
      {Icon && (
        <Icon className="w-12 h-12 text-gray-400 mb-4" />
      )}
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-sm">
          {description}
        </p>
      )}
      {action && (
        <div className="mt-4">
          {action}
        </div>
      )}
    </div>
  )
} 