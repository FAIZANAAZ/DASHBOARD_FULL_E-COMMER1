"use client"
import { Button } from "@heroui/react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts"

const data = [
  { name: "Jan", Marketing: 450, Direct: 600 },
  { name: "Feb", Marketing: 600, Direct: 700 },
  { name: "Mar", Marketing: 550, Direct: 600 },
  { name: "Apr", Marketing: 700, Direct: 550 },
  { name: "May", Marketing: 750, Direct: 500 },
  { name: "Jun", Marketing: 650, Direct: 450 },
  { name: "Jul", Marketing: 550, Direct: 350, selected: true },
  { name: "Aug", Marketing: 500, Direct: 400 },
  { name: "Sep", Marketing: 600, Direct: 500 },
  { name: "Oct", Marketing: 550, Direct: 600 },
  { name: "Nov", Marketing: 450, Direct: 500 },
  { name: "Dec", Marketing: 550, Direct: 580 },
]

import type { TooltipProps } from "recharts"

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length && label !== undefined) {
    return (
      <div className="rounded bg-white p-3 shadow-md">
        <p className="mb-1 text-sm font-medium text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-gray-900">${payload[0].value}.0</p>
      </div>
    )
  }
  return null
}

interface CustomDotProps {
  cx: number
  cy: number
  payload: { selected?: boolean }
}
const CustomDot = (props: CustomDotProps) => {
  const { cx, cy, payload } = props
  if (payload.selected) {
    return <circle cx={cx} cy={cy} r={6} fill="#6466f1" stroke="white" strokeWidth={2} />
  }
  return null
}

export default function SalesFigures() {
  return (
    <div className="rounded-lg bg-gray-100 p-3 sm:p-6 shadow-sm w-full">
      <div className="p-2 sm:p-4 rounded-lg w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h2 className="text-black bg-gray-200 p-2 rounded-3xl text-sm sm:text-base">Sales Figures</h2>

        <div className="flex flex-col sm:flex-row items-start xs:items-center gap-2 xs:gap-0 w-full sm:w-auto">
          <Button
            variant="solid"
            className="xs:ml-4 hover:bg-gray-200 bg-white flex items-center text-black rounded-lg text-xs sm:text-sm w-full xs:w-auto justify-center xs:justify-start"
          >
            <div className="mr-2 h-3 w-3 rounded-full bg-[#10b981]"></div>
            Marketing
          </Button>
          <Button
            variant="solid"
            className="xs:ml-4 hover:bg-gray-200 flex items-center bg-white text-black rounded-lg text-xs sm:text-sm w-full xs:w-auto justify-center xs:justify-start"
          >
            <div className="mr-2 h-3 w-3 rounded-full bg-[#6466f1]"></div>
            Direct
          </Button>
        </div>
      </div>

      <div className="h-[200px] sm:h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorMarketing" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6466f1" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#6466f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDirect" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              domain={[0, 1200]}
              ticks={[0, 200, 400, 600, 800, 1000, 1200]}
              width={60}
            />
            <Tooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="Marketing"
              stroke="#6466f1"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              isAnimationActive={true}
              animationDuration={1000}
              connectNulls={true}
              dot={(props) => <CustomDot {...props} />}
            />
            <Line
              type="monotone"
              dataKey="Direct"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
              isAnimationActive={true}
              animationDuration={1000}
              connectNulls={true}
            />
            <ReferenceDot
              x="Jul"
              y={550}
              r={0}
              label={{
                value: "$259.0",
                position: "top",
                fill: "#111827",
                fontSize: 14,
                fontWeight: 500,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
