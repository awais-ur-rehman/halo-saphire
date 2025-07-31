import { useEffect, useRef } from 'react'
import { useLocations } from '@/hooks/useLocations'

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
            max-width: 280px;
            min-width: 250px;
            overflow: hidden;
            position: relative;
            z-index: 10001;
          }
          .sapphire-popup .leaflet-popup-tip {
            background: white;
            border: none !important;
            outline: none !important;
            padding: 0;
          }
          .sapphire-popup .leaflet-popup-content {
            margin: 0 !important;
            border: none !important;
            outline: none !important;
            padding: 16px !important;
            width: 100% !important;
            max-width: 280px !important;
            overflow: hidden;
            position: relative;
            z-index: 10001;
          }
          .leaflet-popup {
            z-index: 10000 !important;
          }
          .leaflet-popup-content-wrapper {
            z-index: 10000 !important;
          }
          .sapphire-popup-content {
            font-family: system-ui, -apple-system, sans-serif !important;
            width: 100% !important;
            max-width: 280px !important;
            overflow: hidden !important;
            direction: ltr !important;
            text-align: left !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            position: relative;
            z-index: 10001;
            isolation: isolate;
          }
          .sapphire-popup-content * {
            direction: ltr !important;
            text-align: left !important;
            white-space: normal !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            position: relative;
            z-index: 1;
          }
          .sapphire-popup-content h3 {
            font-weight: 700 !important;
            color: #1f2937 !important;
            margin: 0 0 8px 0 !important;
            font-size: 16px !important;
            line-height: 1.4 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            direction: ltr !important;
            text-align: left !important;
            white-space: normal !important;
            position: relative;
            z-index: 2;
          }
          .sapphire-popup-content .rating-section {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            margin-bottom: 0 !important;
            flex-wrap: wrap !important;
            direction: ltr !important;
            text-align: left !important;
            position: relative;
            z-index: 2;
          }
          .sapphire-popup-content .rating-stars {
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            direction: ltr !important;
            position: relative;
            z-index: 2;
          }
        `
        document.head.appendChild(customStyles)

        const centerLat = 24.8607 // Karachi coordinates
        const centerLng = 67.0011
        
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
                width: 32px;
                height: 32px;
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
                border: 3px solid #ffffff;
                border-radius: 8px;
                box-shadow: 0 6px 20px rgba(0,0,0,0.4), 0 0 0 2px rgba(15, 23, 42, 0.3);
                position: relative;
                animation: sapphire-glow 3s infinite;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
              ">
                <div style="
                  width: 20px;
                  height: 20px;
                  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
                  border-radius: 4px;
                  box-shadow: 0 3px 12px rgba(251, 191, 36, 0.5);
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                ">
                  <div style="
                    width: 12px;
                    height: 12px;
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                    border-radius: 2px;
                    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  ">
                    <div style="
                      width: 6px;
                      height: 6px;
                      background: #fbbf24;
                      border-radius: 1px;
                      box-shadow: 0 0 4px rgba(251, 191, 36, 0.8);
                    "></div>
                  </div>
                </div>
                <div style="
                  position: absolute;
                  top: -4px;
                  right: -4px;
                  width: 12px;
                  height: 12px;
                  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                  border: 2px solid #ffffff;
                  border-radius: 50%;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  animation: status-pulse 2s infinite;
                "></div>
                <div style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
                  border-radius: 8px;
                  animation: sapphire-shine 4s infinite;
                "></div>
              </div>
              <style>
                @keyframes sapphire-glow {
                  0%, 100% {
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4), 0 0 0 2px rgba(15, 23, 42, 0.3);
                    transform: scale(1);
                  }
                  50% {
                    box-shadow: 0 6px 20px rgba(0,0,0,0.4), 0 0 0 6px rgba(15, 23, 42, 0.1);
                    transform: scale(1.08);
                  }
                }
                @keyframes status-pulse {
                  0%, 100% {
                    opacity: 1;
                    transform: scale(1);
                  }
                  50% {
                    opacity: 0.8;
                    transform: scale(1.1);
                  }
                }
                @keyframes sapphire-shine {
                  0% {
                    transform: translateX(-100%) translateY(-100%);
                  }
                  50% {
                    transform: translateX(100%) translateY(100%);
                  }
                  100% {
                    transform: translateX(-100%) translateY(-100%);
                  }
                }
              </style>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: [0, -16]
          })
        }

        const customIcon = createCustomIcon()

                            locations.forEach(location => {
                      L.marker([location.gps_coordinates.latitude, location.gps_coordinates.longitude], { icon: customIcon })
                        .addTo(map)
                        .bindPopup(`
                          <div class="sapphire-popup-content">
                            <h3>${location.title}</h3>
                            <div class="rating-section">
                              <div class="rating-stars">
                                <svg style="width: 14px; height: 14px; color: #fbbf24; fill: #fbbf24;" viewBox="0 0 24 24">
                                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"/>
                                </svg>
                                <span style="font-weight: 600; color: #374151; font-size: 14px;">${location.rating}</span>
                              </div>
                              <span style="color: #6b7280; font-size: 13px;">(${location.reviews} reviews)</span>
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