import { useState, useEffect } from 'react'
import { locationsData } from '@/data/locations'
import type { Location } from '@/data/locations'

export const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadLocations = () => {
      try {
        setLoading(true)
        // Use the imported TypeScript data directly
        setLocations(locationsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load locations')
      } finally {
        setLoading(false)
      }
    }

    loadLocations()
  }, [])

  return { locations, loading, error }
} 