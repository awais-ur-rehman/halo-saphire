import { useState, useEffect } from 'react'

export interface Location {
  position: number
  title: string
  place_id: string
  data_id: string
  data_cid: string
  gps_coordinates: {
    latitude: number
    longitude: number
  }
  rating: number
  reviews: number
  type: string
  address: string
  phone: string
  website: string
  extensions: {
    service_options: string
  }
  service_options: {
    in_store_shopping: boolean | null
    in_store_pickup: boolean
  }
  user_review: string
}

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
        const response = await fetch('/src/data/location.json')
        if (!response.ok) {
          throw new Error('Failed to fetch locations')
        }
        const data: LocationData = await response.json()
        setLocations(data.local_results)
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