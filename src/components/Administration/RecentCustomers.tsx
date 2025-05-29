"use client"
import { Card, CardBody, CardHeader, Avatar, Chip, Button } from "@heroui/react"
import { MoreHorizontal } from "lucide-react"

interface Customer {
  name: string
  username: string
  status: "paid" | "pending"
  avatar: string
}

export function RecentCustomers() {
  const customers: Customer[] = [
    {
      name: "Seth Daniels",
      username: "@sethdaniels",
      status: "paid",
      avatar: "/user.jpg",
    },
    {
      name: "Myrtle Perkins",
      username: "@myrtleperkins",
      status: "paid",
      avatar: "/user.jpg",
    },
    {
      name: "Dominic Baker",
      username: "@myrtleperkins",
      status: "pending",
      avatar: "/user.jpg",
    },
    {
      name: "Ollie Baldwin",
      username: "@olliebaldwin",
      status: "paid",
      avatar: "/user.jpg",
    },
  ]

  return (
    <Card className="bg-white shadow-sm w-full max-w-full">
      <CardHeader className="flex flex-row justify-between items-center p-4 sm:p-6 pb-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate pr-2">Recent Customers</h3>
        <Button variant="light" size="sm" isIconOnly className="flex-shrink-0">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardBody className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0 gap-2 sm:gap-3"
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <Avatar
                  src={customer.avatar}
                  alt={customer.name}
                  size="md"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-900 text-sm sm:text-base truncate">{customer.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500 truncate">{customer.username}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <Chip
                  color={customer.status === "paid" ? "success" : "warning"}
                  variant="flat"
                  size="sm"
                  className="capitalize text-xs sm:text-sm"
                >
                  {customer.status}
                </Chip>

                {/* Mini chart placeholder */}
                <div className="w-8 h-4 sm:w-12 sm:h-6 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-2 sm:w-8 sm:h-3 bg-blue-200 rounded-sm"></div>
                </div>
              </div>
            </div>
          ))}

          {/* View More Button */}
          <div className="pt-3 sm:pt-4">
            <Button variant="light" size="sm" className="text-blue-600 text-sm">
              View more Customers
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
