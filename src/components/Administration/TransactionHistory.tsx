"use client"

import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import Image from "next/image"



const transactions = [
  {
    id: "#10023",
    type: "Payment from",
    description: "Today, 10:30 AM",
    amount: "+$650.00",
    status: "Completed",
    statusColor: "success" as const,
  },
  {
    id: "#10024",
    type: "Process refund to",
    description: "Today, 10:30 AM",
    amount: "-$250.00",
    status: "Completed",
    statusColor: "success" as const,
  },
  {
    id: "#10025",
    type: "Payment failed from",
    description: "Today, 10:30 AM",
    amount: "+$128.00",
    status: "Declined",
    statusColor: "danger" as const,
  },
]

export default function TransactionHistory() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {/* Transaction History */}
      <Card className="border border-gray-200  rounded-lg shadow-sm col-span-1 xl:col-span-2">
        <CardHeader className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900">Transaction History</h3>
          <Button isIconOnly variant="light" size="sm" className="text-gray-500 hover:text-gray-700">
            <EllipsisHorizontalIcon className="w-5 h-5" />
          </Button>
        </CardHeader>
        <CardBody className="px-4 sm:px-6 py-3 sm:py-4 space-y-5 bg-white">
          {/* Header Row */}
          <div className="hidden sm:grid sm:grid-cols-3 py-3 rounded-2xl gap-6 text-xs font-semibold bg-gray-100 text-gray-500 uppercase tracking-wide border-b border-gray-200 p-2">
            <span>Payment Number</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          {/* Transactions */}
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:grid sm:grid-cols-3 gap-2 sm:gap-6 items-center py-3 border-b border-gray-100 last:border-none"
            >
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  {tx.type} <span className="text-blue-600 font-semibold hover:underline cursor-pointer">{tx.id}</span>
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">{tx.description}</p>
              </div>
              <div className={`font-semibold text-gray-900 text-sm sm:text-base`}>{tx.amount}</div>
              <div>
                <Chip
                  color={tx.statusColor}
                  variant="flat"
                  size="sm"
                  className={`capitalize px-3 py-1 rounded-lg text-xs sm:text-sm ${tx.status.startsWith("C") ? "text-green-600" : "text-red-600"}`}
                >
                  {tx.status}
                </Chip>
              </div>
            </div>
          ))}

          <Button
            variant="light"
            color="primary"
            className="w-full text-sm font-semibold py-2 sm:py-3 bg-gray-100 hover:bg-gray-200"
          >
            View All transactions
          </Button>
        </CardBody>
      </Card>

      <RecentCustomers />

      {/* Recant Customers - divided into 3 parts */}
    </div>
  )
}

// /////////////////*************************** */

import { LineChart, Line, ResponsiveContainer } from "recharts"

// Sample data for sparkline (random example for each customer)
const sampleChartData = [
  { value: 5 },
  { value: 10 },
  { value: 7 },
  { value: 14 },
  { value: 9 },
  { value: 12 },
  { value: 8 },
]

const customerss = [
  {
    name: "Seth Daniels",
    email: "@sethdaniels",
    image: "/user.jpg",
    status: "Paid",
  },
  {
    name: "Myrtle Perkins",
    email: "@myrtleperkins",
    image: "/user.jpg",
    status: "Paid",
  },
  {
    name: "Dominic Baker",
    email: "@dominicbaker",
    image: "/user.jpg",
    status: "Pending",
  },
  {
    name: "Ollie Baldwin",
    email: "@olliebaldwin",
    image: "/user.jpg",
    status: "Paid",
  },
]

function RecentCustomers() {
  return (
    <Card className="border border-gray-200 rounded-lg   shadow-sm col-span-1">
      <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
        <h3 className="text-sm sm:text-lg font-semibold text-gray-900">Recent Customers</h3>
      </CardHeader>
      <CardBody className="px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-1 gap-4">
        {[0, 1, 2].map((partIdx) => (
          <div key={partIdx} className="space-y-3 border p-3 rounded-md bg-gray-50">
            {customerss.slice(partIdx * 1, (partIdx + 1) * 1).map((customer, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4"
              >
                <div className="flex flex-col items-center space-x-4 flex-1">
                  <div className="flex items-center space-x-4 flex-1">
                    <Image
                      src={customer.image || "/placeholder.svg"}
                      alt={customer.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">{customer.name}</p>
                      <p className="text-gray-500 text-xs sm:text-sm flex flex-col sm:flex-row items-center space-x-2">
                        <span>{customer.email}</span>
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                            customer.status.toLowerCase() === "pending" ? "text-red-600" : "text-green-600"
                          }`}
                        >
                          {customer.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* Small sparkline chart */}
                  <div className="w-20 h-8 sm:w-24 sm:h-10" style={{ width: 80, height: 30 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sampleChartData}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#3b82f6" // blue color
                          strokeWidth={2}
                          dot={false}
                          strokeLinecap="round"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <Button
          variant="light"
          color="primary"
          className="w-full text-sm font-semibold py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 mt-4"
        >
          View more Customers
        </Button>
      </CardBody>
    </Card>
  )
}
