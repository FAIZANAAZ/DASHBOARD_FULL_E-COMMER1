"use client"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Card,
  CardBody,
} from "@heroui/react"
import { MoreVertical } from "lucide-react"
import Image from "next/image"

// Sample employee data
const employees = [
  {
    id: 1,
    name: "Seth Daniels",
    avatar: "/user.jpg",
    office: "",
    paymentNumber: "948-396-0546",
    phoneNumber: "948-396-0546",
    closedDeals: 852,
    performanceData: [10, 30, 15, 25, 20, 30, 25],
    trend: "up",
  },
  {
    id: 2,
    name: "Myrtle Perkins",
    avatar: "/user.jpg",
    office: "Office",
    paymentNumber: "955-493-9701",
    phoneNumber: "955-493-9701",
    closedDeals: "1.5K",
    performanceData: [20, 10, 30, 15, 25, 20, 15],
    trend: "down",
  },
  {
    id: 3,
    name: "Dominic Baker",
    avatar: "/user.jpg",
    office: "Office",
    paymentNumber: "948-396-0546",
    phoneNumber: "948-396-0546",
    closedDeals: 5,
    performanceData: [15, 10, 20, 15, 25, 10, 5],
    trend: "up",
  },
]

// Simple line chart component using SVG
const MiniChart = ({ data, trend }: { data: number[]; trend: string }) => {
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue || 1

  const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 60
      const y = 20 - ((value - minValue) / range) * 15
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className="w-12 h-5 sm:w-16 sm:h-6">
      <svg width="60" height="20" className="overflow-visible w-full h-full">
        <polyline
          points={points}
          fill="none"
          stroke={trend === "up" ? "#22c55e" : "#ef4444"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function OtherEmployes() {
  return (
    <div className="container rounded-2xl py-3 sm:py-6 max-w-5xl px-2 sm:px-4">
      <Card className="shadow-sm bg-white rounded-2xl">
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <Table
              aria-label="Employee table"
              removeWrapper
              classNames={{
                th: "bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider",
                td: "py-2 sm:py-4",
              }}
            >
              <TableHeader>
                <TableColumn className="bg-gray-50 border-b min-w-[200px] sm:min-w-0">
                  <div className="py-2 sm:py-3 px-2 sm:px-4">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900">Other employees</h3>
                  </div>
                </TableColumn>
                <TableColumn className="bg-gray-50 border-b min-w-[120px] sm:min-w-0">{""}</TableColumn>
                <TableColumn className="bg-gray-50 border-b min-w-[150px] sm:min-w-0">{""}</TableColumn>
              </TableHeader>
              <TableBody>
                {[
                  <TableRow key="header" className="bg-gray-200 text-black">
                    <TableCell className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 sm:px-4">
                      PAYMENT NUMBER
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 sm:px-4">
                      PHONE NUMBER
                    </TableCell>
                    <TableCell className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 sm:px-4">
                      CLOSED DEALS
                    </TableCell>
                  </TableRow>,
                  ...employees.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="px-2 sm:px-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Image
                            src={"/user.jpg"}
                            alt={employee.name}
                            width={28}
                            height={28}
                            className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 rounded-full"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                              {employee.name}
                            </span>
                            {employee.office && (
                              <span className="text-xs text-gray-500 truncate">{employee.office}</span>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="px-2 sm:px-4">
                        <span className="text-xs sm:text-sm text-gray-900">{employee.phoneNumber}</span>
                      </TableCell>
                      <TableCell className="px-2 sm:px-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                            <span className="text-xs sm:text-sm text-gray-900 flex-shrink-0">
                              {employee.closedDeals}
                            </span>
                            <div className="hidden xs:block sm:block">
                              <MiniChart data={employee.performanceData} trend={employee.trend} />
                            </div>
                          </div>
                          <Button
                            isIconOnly
                            variant="light"
                            size="sm"
                            className="text-gray-400 hover:text-gray-600 flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8"
                          >
                            <MoreVertical size={14} className="sm:w-4 sm:h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )),
                ]}
              </TableBody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
