'use client'

import { 
  Card, 
  CardBody, 
  Button, 
  Avatar, 
  Select,
  SelectItem,
  Chip
} from '@heroui/react'
import { MessageCircle } from 'lucide-react'


// Mock data for the user cards
const userData = [
  {
    id: 1,
    name: 'Nicolas',
    role: 'Marketing',
    value: 852,
    avatar: '/user.jpg'
  },
  {
    id: 2,
    name: 'Edwin Holt',
    role: 'Developer',
    value: 452,
    avatar: '/user.jpg'
  },
  {
    id: 3,
    name: 'Nettie Brooks',
    role: 'Customer',
    value: 235,
    avatar: '/user.jpg'
  }
]

// Simple chart component placeholder
const MiniChart = () => (
  <div className="w-full  flex items-end justify-center space-x-1 ">
    {[20, 35, 25, 45, 30, 55, 40, 60, 35, 50].map((height, index) => (
      <div
        key={index}
        className="bg-blue-200 rounded-sm transition-all duration-300 hover:bg-blue-300"
        style={{ 
          height: `${height}%`, 
          width: '8px',
          minHeight: '4px'
        }}
      />
    ))}
  </div>
)

export default function DashboardHeader() {
  return (
    <div className="rounded-2xl  bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Overview
          </h1>
          
          <Select
            placeholder="Today"
            className="w-32"
            size="sm"
            variant="flat"
            defaultSelectedKeys={["today"]}
            aria-label="Select time period"
          >
            <SelectItem key="today">Today</SelectItem>
            <SelectItem key="week">This Week</SelectItem>
            <SelectItem key="month">This Month</SelectItem>
          </Select>
        </div>

        {/* User Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.map((user) => (
            <Card
              key={user.id}
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              isPressable
            >
              <CardBody className="p-6 text-center">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <Avatar
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                    className="w-16 h-16 border-3 border-gray-100"
                    isBordered
                  />
                </div>

                {/* User Info */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {user.name}
                </h3>
                
                <Chip
                  variant="flat"
                  color="default"
                  size="sm"
                  className="mb-4"
                >
                  {user.role}
                </Chip>

                {/* Mini Chart */}
                <MiniChart />

                {/* Value */}
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  {user.value.toLocaleString()}
                </div>

                {/* Message Button */}
                <Button
                  variant="bordered"
                 
                  className="w-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center space-x-1 bg-gray-100 rounded-2xl"
                  size="md"
                >
                  <MessageCircle size={18} />
                 <span> Message</span>
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
