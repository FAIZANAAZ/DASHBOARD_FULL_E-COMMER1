"use client"

import { Card, CardBody, CardHeader, Button, CardFooter } from "@heroui/react"
import { useState } from "react"

const metrics = [
  {
    title: "SALES",
    value: "$21.2K",
    subValue: "(vs $10.3K last year)",
    change: "+105.23%",
    isPositive: true,
  },
  {
    title: "PURCHASE",
    value: "$16.0K",
    subValue: "(vs $20.0K last year)",
    change: "-20.1%",
    isPositive: false,
  },
  {
    title: "RETURN",
    value: "$259.0",
    subValue: "(vs $225.0 last year)",
    change: "+15.20%",
    isPositive: true,
  },
  {
    title: "MARKETING",
    value: "$13.1K",
    subValue: "(vs $9.9K last year)",
    change: "+32.64%",
    isPositive: true,
  },
]

export default function AnalyticsOverview() {
  const [showYears, setShowYears] = useState(false)

  return (
    <div className="w-full px-2 sm:px-0">
      <div className="bg-[#f9fafb] p-3 sm:p-4 rounded-lg w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        {/* Toggle Button */}
        <Button onClick={() => setShowYears(!showYears)} variant="solid" className="flex items-center gap-2">
          <h2 className="text-black bg-gray-200 p-1.5 sm:p-2 rounded-3xl text-xs sm:text-sm">
            <span className="text-gray-600">Show </span> : This Year
          </h2>
        </Button>

        {/* Toggle Content */}
        {showYears && (
          <div className="flex flex-wrap gap-3 sm:gap-6 items-center">
            <div className="text-gray-600 text-sm cursor-pointer hover:text-blue-600 transition">1 Year</div>
            <div className="text-gray-600 text-sm cursor-pointer hover:text-blue-600 transition">2 Year</div>
            <div className="text-gray-600 text-sm cursor-pointer hover:text-blue-600 transition">3 Year</div>
          </div>
        )}

        <Button
          variant="solid"
          className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-xs sm:text-sm py-1.5 px-2 sm:py-2 sm:px-3"
        >
          Generate Report
        </Button>
      </div>

      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Analytics Overview</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {metrics.map(({ title, value, subValue, change, isPositive }) => (
          <Card
            key={title}
            className="p-3 sm:p-5 rounded-lg shadow-sm bg-white flex flex-col justify-center items-center"
          >
            <CardHeader className="text-xs text-center font-semibold text-gray-900 mb-1 sm:mb-2">{title}</CardHeader>
            <CardBody className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-0.5 sm:mb-1">
              {value}
            </CardBody>
            <div className="text-xs text-gray-500 mb-2 sm:mb-4">{subValue}</div>
            <CardFooter
              className={`flex items-center gap-1 font-semibold text-xs sm:text-sm ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 sm:w-3 sm:h-3 border-l-2 border-b-2 ${
                  isPositive ? "border-green-600 rotate-45" : "border-red-600 -rotate-45"
                }`}
                style={{ marginBottom: "2px" }}
              />
              {change}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
