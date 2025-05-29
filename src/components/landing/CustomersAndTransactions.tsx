"use client"

import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react"
import { EllipsisHorizontalIcon, CheckIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const customers = [
  { name: "Seth Daniels", email: "@sethdaniels", image: "/user.jpg" },
  { name: "Myrtle Perkins", email: "@myrtleperkins", image: "/user.jpg" },
  { name: "Dominic Baker", email: "@dominicbaker", image: "/user.jpg" },
  { name: "Ollie Baldwin", email: "@olliebaldwin", image: "/user.jpg" },
]

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

export default function CustomersAndTransactions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6">
      {/* New Customers - divided into 3 parts */}
      <Card className="border border-gray-200 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
        <CardHeader className="px-4 sm:px-6 py-3 sm:py-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">New Customers</h3>
        </CardHeader>
        <CardBody className="px-4 sm:px-6 py-3 sm:py-4 grid grid-cols-1 gap-3 sm:gap-4">
          {/* Split customers into 3 parts (for demo split in chunks) */}
          {[0, 1, 2].map((partIdx) => (
            <div key={partIdx} className="space-y-2 sm:space-y-3 border p-2 sm:p-3 rounded-md bg-gray-50">
              {customers.slice(partIdx * 1, (partIdx + 1) * 1).map((customer, idx) => (
                <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
                  <Image
                    src={customer.image || "/placeholder.svg"}
                    alt={customer.name}
                    width={40}
                    height={40}
                    className="rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-medium text-sm sm:text-base truncate">{customer.name}</p>
                    <p className="text-gray-500 text-xs sm:text-sm truncate">{customer.email}</p>
                  </div>
                  <div className="flex space-x-2 sm:space-x-3 flex-shrink-0">
                    <Button
                      isIconOnly
                      size="sm"
                      variant="bordered"
                      className="w-6 h-6 sm:w-7 sm:h-7 min-w-[1.5rem] sm:min-w-[1.75rem] border-gray-300 hover:border-yellow-500"
                    >
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                    </Button>
                    <Button
                      isIconOnly
                      size="sm"
                      variant="bordered"
                      className="w-6 h-6 sm:w-7 sm:h-7 min-w-[1.5rem] sm:min-w-[1.75rem] border-gray-300 hover:border-yellow-500"
                    >
                      <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <Button
            variant="light"
            color="primary"
            className="w-full text-xs sm:text-sm font-semibold py-2 sm:py-3 bg-gray-100 hover:bg-gray-200 mt-3 sm:mt-4"
          >
            View more Customers
          </Button>
        </CardBody>
      </Card>

      {/* Transaction History */}
      <Card className="border border-gray-200 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-2">
        <CardHeader className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">Transaction History</h3>
          <Button isIconOnly variant="light" size="sm" className="text-gray-500 hover:text-gray-700">
            <EllipsisHorizontalIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </CardHeader>
        <CardBody className="px-4 sm:px-6 bg-white py-3 sm:py-4 space-y-3 sm:space-y-5">
          {/* Header Row - Hidden on mobile, shown on larger screens */}
          <div className="hidden sm:grid grid-cols-3 py-2 sm:py-3 rounded-2xl gap-4 sm:gap-6 text-xs font-semibold bg-gray-100 text-gray-500 uppercase tracking-wide border-b border-gray-200 p-2">
            <span>Payment Number</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          {/* Transactions */}
          {transactions.map((tx, idx) => (
            <div key={idx} className="border-b border-gray-100 last:border-none pb-3 sm:pb-0">
              {/* Mobile Layout - Stacked */}
              <div className="sm:hidden space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">
                      {tx.type}{" "}
                      <span className="text-blue-600 font-semibold hover:underline cursor-pointer">{tx.id}</span>
                    </p>
                    <p className="text-gray-500 text-xs">{tx.description}</p>
                  </div>
                  <Chip
                    color={tx.statusColor}
                    variant="flat"
                    size="sm"
                    className={`capitalize px-2 py-1 rounded-lg text-xs ${tx.status.startsWith("C") ? "text-green-600" : "text-red-600"}`}
                  >
                    {tx.status}
                  </Chip>
                </div>
                <div className="font-semibold text-gray-900 text-sm">{tx.amount}</div>
              </div>

              {/* Desktop Layout - Grid */}
              <div className="hidden sm:grid grid-cols-3 gap-4 sm:gap-6 items-center py-2 sm:py-3">
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {tx.type}{" "}
                    <span className="text-blue-600 font-semibold hover:underline cursor-pointer">{tx.id}</span>
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">{tx.description}</p>
                </div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{tx.amount}</div>
                <div>
                  <Chip
                    color={tx.statusColor}
                    variant="flat"
                    size="sm"
                    className={`capitalize px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm ${tx.status.startsWith("C") ? "text-green-600" : "text-red-600"}`}
                  >
                    {tx.status}
                  </Chip>
                </div>
              </div>
            </div>
          ))}

          <Button
            variant="light"
            color="primary"
            className="w-full text-xs sm:text-sm font-semibold py-2 sm:py-3 bg-gray-100 hover:bg-gray-200"
          >
            View All transactions
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
