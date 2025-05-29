"use client"
import { Card, CardBody } from "@heroui/react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  percentage: string
  isPositive: boolean
}

function MetricCard({ title, value, percentage, isPositive }: MetricCardProps) {
  return (
    <Card className="bg-white  shadow-sm">
      <CardBody className="p-6">
        {/* Trend Icon */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1">
            <div className={`p-1 rounded ${isPositive ? "text-green-600" : "text-red-600"}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
            <div className="text-sm text-gray-500">{title}</div>
          </div>
          
        </div>

        {/* Percentage Change */}
        <div className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>{percentage}</div>
      </CardBody>
    </Card>
  )
}

export function OverviewCards() {
  const metrics = [
    { title: "Income", value: "$21.2K", percentage: "105.23%", isPositive: true },
    { title: "Expense", value: "$16.0K", percentage: "20.15%", isPositive: false },
    { title: "Total Visitor", value: "24.8K", percentage: "15.20%", isPositive: true },
    { title: "Total Customer", value: "$13.1K", percentage: "32.84%", isPositive: true },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  )
}
