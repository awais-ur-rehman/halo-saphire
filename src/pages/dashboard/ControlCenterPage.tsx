import { useEffect, useRef } from 'react'
import { useLocations } from '@/hooks/useLocations'
import { Star, Phone, Globe, MapPin, ShoppingBag, Package } from 'lucide-react'

export const ControlCenterPage = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const { locations, loading, error } = useLocations()

  useEffect(() => {
    const initMap = async () => {
      if (typeof window !== 'undefined' && mapRef.current && !mapInstanceRef.current && locations.length > 0) {
        const L = await import('leaflet')
        
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        link.crossOrigin = ''
        document.head.appendChild(link)

        const customStyles = document.createElement('style')
        customStyles.textContent = `
          .custom-sapphire-marker {
            background: transparent !important;
            border: none !important;
          }
          .sapphire-popup .leaflet-popup-content-wrapper {
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            border: none !important;
            outline: none !important;
            max-width: 320px;
          }
          .sapphire-popup .leaflet-popup-tip {
            background: white;
            border: none !important;
            outline: none !important;
          }
          .sapphire-popup .leaflet-popup-content {
            margin: 0 !important;
            border: none !important;
            outline: none !important;
            padding: 0;
          }
          .leaflet-popup {
            z-index: 10000 !important;
          }
          .leaflet-popup-content-wrapper {
            z-index: 10000 !important;
          }
        `
        document.head.appendChild(customStyles)

        const centerLat = locations.reduce((sum, loc) => sum + loc.gps_coordinates.latitude, 0) / locations.length
        const centerLng = locations.reduce((sum, loc) => sum + loc.gps_coordinates.longitude, 0) / locations.length

        const map = L.map(mapRef.current).setView([centerLat, centerLng], 8)

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(map)

        const createCustomIcon = () => {
          return L.divIcon({
            className: 'custom-sapphire-marker',
            html: `
              <div style="
                width: 20px;
                height: 20px;
                background-color: #dc2626;
                border: 4px solid #ffffff;
                border-radius: 50%;
                box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 0 3px rgba(220, 38, 38, 0.4);
                position: relative;
                animation: pulse 1.5s infinite;
              ">
                <div style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 8px;
                  height: 8px;
                  background-color: #ffffff;
                  border-radius: 50%;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                "></div>
              </div>
              <style>
                @keyframes pulse {
                  0% {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 0 3px rgba(220, 38, 38, 0.4);
                    transform: scale(1);
                  }
                  50% {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 0 6px rgba(220, 38, 38, 0.1);
                    transform: scale(1.1);
                  }
                  100% {
                    box-shadow: 0 4px 12px rgba(0,0,0,0.5), 0 0 0 3px rgba(220, 38, 38, 0.4);
                    transform: scale(1);
                  }
                }
              </style>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
            popupAnchor: [0, -10]
          })
        }

        const customIcon = createCustomIcon()

        locations.forEach(location => {
          const marker = L.marker([location.gps_coordinates.latitude, location.gps_coordinates.longitude], { icon: customIcon })
            .addTo(map)
            .bindPopup(`
              <div style="padding: 0; font-family: system-ui, -apple-system, sans-serif;">
                <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 16px; border-radius: 12px 12px 0 0; border-bottom: 1px solid #e2e8f0;">
                  <h3 style="font-weight: 700; color: #1f2937; margin: 0 0 8px 0; font-size: 16px; line-height: 1.4;">${location.title}</h3>
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <Star style="width: 14px; height: 14px; color: #fbbf24; fill: #fbbf24;" />
                      <span style="font-weight: 600; color: #374151; font-size: 14px;">${location.rating}</span>
                    </div>
                    <span style="color: #6b7280; font-size: 13px;">(${location.reviews} reviews)</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 6px; color: #6b7280; font-size: 13px;">
                    <MapPin style="width: 12px; height: 12px;" />
                    <span style="font-weight: 500;">${location.type}</span>
                  </div>
                </div>
                
                <div style="padding: 16px;">
                  <div style="margin-bottom: 12px;">
                    <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
                      <MapPin style="width: 14px; height: 14px; color: #6b7280; margin-top: 2px; flex-shrink: 0;" />
                      <span style="color: #374151; font-size: 13px; line-height: 1.4;">${location.address}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                      <Phone style="width: 14px; height: 14px; color: #6b7280; flex-shrink: 0;" />
                      <span style="color: #374151; font-size: 13px; font-weight: 500;">${location.phone}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                      <Globe style="width: 14px; height: 14px; color: #6b7280; flex-shrink: 0;" />
                      <a href="${location.website}" target="_blank" style="color: #3b82f6; font-size: 13px; text-decoration: none; font-weight: 500;">Visit Website</a>
                    </div>
                  </div>
                  
                  <div style="margin-bottom: 12px;">
                    <div style="font-weight: 600; color: #374151; font-size: 13px; margin-bottom: 6px;">Services Available:</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                      ${location.service_options.in_store_shopping ? 
                        '<div style="display: flex; align-items: center; gap: 4px; background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;"><ShoppingBag style="width: 12px; height: 12px;" />In-Store Shopping</div>' : ''
                      }
                      ${location.service_options.in_store_pickup ? 
                        '<div style="display: flex; align-items: center; gap: 4px; background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 500;"><Package style="width: 12px; height: 12px;" />In-Store Pickup</div>' : ''
                      }
                    </div>
                  </div>
                  
                  <div style="background: #fef3c7; border-left: 3px solid #f59e0b; padding: 8px 12px; border-radius: 6px;">
                    <div style="font-weight: 600; color: #92400e; font-size: 12px; margin-bottom: 4px;">Customer Review:</div>
                    <div style="color: #92400e; font-size: 12px; font-style: italic; line-height: 1.4;">${location.user_review.replace(/"/g, '')}</div>
                  </div>
                </div>
              </div>
            `, {
              closeButton: false,
              className: 'sapphire-popup'
            })
        })

        mapInstanceRef.current = map
      }
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [locations])

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Sapphire locations...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">Error loading locations</p>
          <p className="text-gray-600 text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full w-full">
      <div 
        ref={mapRef} 
        className="w-full h-full rounded-lg"
        style={{ minHeight: 'calc(100vh - 120px)' }}
      />
    </div>
  )
} 