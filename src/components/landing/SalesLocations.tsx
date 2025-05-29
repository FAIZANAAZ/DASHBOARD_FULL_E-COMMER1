"use client"

import { Card, CardBody, CardHeader } from "@heroui/react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Image from "next/image"

type Location = {
  country: string
  coords: [number, number]
  flag: string
  value: string
  color: string
  images: string
}

const locationData: Location[] = [
  {
    country: "United States",
    coords: [37.0902, -95.7129],
    flag: "🇺🇸",
    value: "12.5K",
    color: "#3b82f6",
    images: "/usa.jpg",
  },
  {
    country: "China",
    coords: [35.8617, 104.1954],
    flag: "🇨🇳",
    value: "5.3K",
    color: "#10b981",
    images: "/china.jpg",
  },
  {
    country: "Turkey",
    coords: [38.9637, 35.2433],
    flag: "🇹🇷",
    value: "2.7K",
    color: "#f97316",
    images: "/turkey.jpg",
  },
  {
    country: "Brazil",
    coords: [-14.235, -51.9253],
    flag: "🇧🇷",
    value: "1.0K",
    color: "#60a5fa",
    images: "/brazil.jpg",
  },
]

// Fix Leaflet default icon issue in Next.js
delete (L.Icon.Default as any).prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

export default function SalesLocations() {
  return (
    <Card className="border-gray-200 p-3 sm:p-4 md:p-6">
      <CardHeader className="px-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Sales Locations</h3>
      </CardHeader>

      <CardBody className="bg-white rounded-lg shadow-sm p-2 sm:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left panel: Sales list */}
          <div className="lg:col-span-1 space-y-2 sm:space-y-3 max-w-md mx-auto lg:mx-0 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">21.2K</div>
              <div className="flex items-center text-green-600 font-semibold space-x-1">
                <span className="text-sm sm:text-base">+105.23%</span>
              </div>
            </div>

            {locationData.map(({ country, images, value }, i) => (
              <Card key={i} className="bg-gray-100 border-none shadow-none rounded-lg w-full p-0 my-1">
                <CardBody className="flex items-center justify-between p-2 sm:p-3">
                  {/* Left side: Number + Flag + Country */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                    <div className="flex items-center justify-center rounded-md w-6 h-6 sm:w-7 sm:h-7 text-sm sm:text-base font-semibold bg-gray-300 flex-shrink-0">
                      {i + 1}.
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src={images || "/placeholder.svg"}
                        alt={country}
                        width={30}
                        height={20}
                        className="w-6 h-4 sm:w-7 sm:h-5 md:w-8 md:h-5 object-cover rounded-sm"
                      />
                    </div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base truncate flex-1 min-w-0">
                      {country}
                    </div>
                    <span className="font-semibold text-gray-900 whitespace-nowrap text-sm sm:text-base flex-shrink-0">
                      {value}
                    </span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Right panel: Leaflet Map */}
          <div className="lg:col-span-2 h-48 sm:h-64 md:h-72 lg:h-[350px] w-full rounded-lg overflow-hidden">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locationData.map(({ country, coords, flag, value }, idx) => (
                <Marker key={idx} position={coords}>
                  <Popup>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl">{flag}</div>
                      <div className="font-semibold text-sm sm:text-base">{country}</div>
                      <div className="text-xs sm:text-sm">{value} Customers</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
