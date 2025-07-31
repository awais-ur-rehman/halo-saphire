import { useState, useEffect } from 'react'
import { locationsData } from '@/data/locations'
import type { Location } from '@/data/locations'

interface LocationData {
  local_results: Location[]
}

export const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true)
        // Try to fetch from server first
        try {
          const response = await fetch('/location.json')
          if (response.ok) {
            const data: LocationData = await response.json()
            setLocations(data.local_results)
            return
          }
        } catch (fetchError) {
          console.log('Fetch failed, using fallback data')
        }

        // Fallback to imported data
        setLocations(locationsData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch locations')
      } finally {
        setLoading(false)
      }
    }

    fetchLocations()
  }, [])

  return { locations, loading, error }
} 