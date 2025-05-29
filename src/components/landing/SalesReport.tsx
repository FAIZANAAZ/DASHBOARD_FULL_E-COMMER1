"use client"

import { useState } from "react"
import { Button, Card, CardBody, CardHeader } from "@heroui/react"

const chartData = [
  { month: "Jan", online: 400, offline: 300 },
  { month: "Feb", online: 300, offline: 200 },
  { month: "Mar", online: 500, offline: 400 },
  { month: "Apr", online: 350, offline: 250 },
  { month: "May", online: 600, offline: 500 },
  { month: "Jun", online: 450, offline: 350 },
  { month: "Jul", online: 1500, offline: 259 }, // Highlight month
  { month: "Aug", online: 400, offline: 300 },
  { month: "Sep", online: 650, offline: 550 },
  { month: "Oct", online: 500, offline: 400 },
  { month: "Nov", online: 700, offline: 600 },
  { month: "Dec", online: 600, offline: 500 },
]

export default function SalesReport() {
  const maxValue = Math.max(...chartData.flatMap((d) => [d.online, d.offline]))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      <div className="p-4 rounded-lg w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        {/* Toggle Button */}
        <h2 className="text-black p-2 rounded-4xl font-bold">Sales Report</h2>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="solid" className="hover:bg-gray-200 bg-white flex items-center text-black rounded-lg">
            <div className="mr-2 h-3 w-3 rounded-full bg-[#10b981]"></div>
            online
          </Button>
          <Button variant="solid" className="hover:bg-gray-200 flex items-center bg-white text-black rounded-lg">
            <div className="mr-2 h-3 w-3 rounded-full bg-[#6466f1]"></div>
            offline
          </Button>
        </div>
      </div>
      <Card className="bg-white rounded-2xl p-2 sm:p-4 md:p-6 relative">
        <CardHeader></CardHeader>
        <CardBody>
          <div className="h-48 flex items-end space-x-1 sm:space-x-2 relative overflow-x-auto pb-6">
            {chartData.map((data, index) => {
              const onlineHeight = (data.online / maxValue) * 100
              const offlineHeight = (data.offline / maxValue) * 100

              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-1 flex-1 min-w-[20px] cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setHoveredIndex(null)}
                >
                  <div className="flex items-end space-x-1 h-32">
                    {/* Offline bar */}
                    <div
                      className="bg-[#10b981] rounded-t-sm w-2 sm:w-3 md:w-4"
                      style={{ height: `${offlineHeight}%` }}
                    ></div>
                    {/* Online bar */}
                    <div
                      className="bg-[#6466f1] rounded-t-sm w-2 sm:w-3 md:w-4"
                      style={{ height: `${onlineHeight}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500">{data.month}</span>
                </div>
              )
            })}

            {/* Hover tooltip box */}
            {hoveredIndex !== null && (
              <div
                className="absolute bg-white border border-gray-300 shadow-md rounded-md p-2 sm:p-4 w-28 sm:w-36 text-right z-10"
                style={{
                  top: "0",
                  right: hoveredIndex > chartData.length - 3 ? "0" : "auto",
                  left: hoveredIndex < 3 ? "0" : "auto",
                }}
              >
                <div className="text-xs sm:text-sm text-gray-500">{chartData[hoveredIndex].month}, 2020</div>
                <div className="flex items-center space-x-2 mt-1 sm:mt-2 justify-end">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#10b981]"></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    ${chartData[hoveredIndex].offline}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1 justify-end">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#6466f1]"></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">
                    ${(chartData[hoveredIndex].online / 1000).toFixed(1)}K
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
