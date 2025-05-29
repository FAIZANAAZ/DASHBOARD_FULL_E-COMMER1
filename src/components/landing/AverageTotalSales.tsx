"use client"

import { Card, CardBody, CardHeader } from "@heroui/react"

const salesData = [
  { percentage: 75, value: "84.4K", label: "Clients", color: "#16a34a", bgColor: "bg-green-100" }, // green-600
  { percentage: 50, value: "20.9K", label: "Applications", color: "#2563eb", bgColor: "bg-blue-100" }, // blue-600
  { percentage: 25, value: "32.5K", label: "Products", color: "#f97316", bgColor: "bg-orange-100" }, // orange-500
]

function CircularProgressReplacement({
  percentage,
  color,
  bgColor,
}: {
  percentage: number
  color: string
  bgColor: string
}) {
  const degree = (percentage / 100) * 360

  return (
    <div className={`relative w-16 h-16 flex items-center justify-center rounded-full bg-white`}>
      {/* Progress ring using conic-gradient */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${color} ${degree}deg, transparent 0deg)`,
        }}
      ></div>

      {/* Inner circle to create ring effect */}
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
        <span className="font-bold text-sm" style={{ color: color }}>
          {percentage}%
        </span>
      </div>
    </div>
  )
}

export default function AverageTotalSales() {
  return (
    <div className="bg-white">
      <Card>
        <CardHeader>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Average Total Sales</h3>
            <p className="text-sm text-gray-500">2019 - 2022</p>
          </div>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {salesData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <CircularProgressReplacement percentage={item.percentage} color={item.color} bgColor={item.bgColor} />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-100">
            <CardBody className="p-3">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full mt-0.5 flex-shrink-0"></div>
                <p className="text-xs text-gray-600">
                  Net sales based on the income statement are used to calculate this metric returns and refunds must be
                  factored out of total sales to measure the truly relevant to firms sales ability to generate sales.
                </p>
              </div>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </div>
  )
}
