import { Card, CardBody, Progress, Chip } from "@heroui/react"
import Image from "next/image"

interface MetricCardProps {
  title: string
  value: string
  subtitle: string
}

function MetricCard({  value, subtitle }: MetricCardProps) {
  return (
    <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs sm:text-sm text-gray-500">{subtitle}</div>
    </div>
  )
}

interface ProgressMetricProps {
  label: string
  current: number
  total: number
  color?: "primary" | "success" | "warning"
}

function ProgressMetric({ label, current, total, color = "primary" }: ProgressMetricProps) {
  const percentage = (current / total) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-medium text-gray-700">{label}</span>
        <span className="text-xs sm:text-sm text-gray-500">
          {current} / {total}
        </span>
      </div>
      <Progress
        value={percentage}
        color={color}
        className="w-full"
        size="sm"
        classNames={{
          base: "max-w-full",
          track: "drop-shadow-md border border-default",
          indicator: "bg-gradient-to-r from-blue-500 to-blue-600",
          label: "tracking-wider font-medium text-default-600",
          value: "text-foreground/60",
        }}
      />
    </div>
  )
}

interface ActivityItemProps {
  name: string
  action: string
  avatar: string
}

function ActivityItem({ name, action }: ActivityItemProps) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg">
      <Image alt="avatar" src={"/user.jpg"} width={40} height={40} className="w-6 rounded-full h-6 sm:w-8 sm:h-8 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{name}</p>
        <p className="text-xs text-gray-500 truncate">{action}</p>
      </div>
    </div>
  )
}

export function SideDetail() {
  const activities = [
    { name: "Seth Daniels", action: "Close a deal", avatar: "/user.jpg" },
    { name: "Ollie Baldwin", action: "Just archive daily budget", avatar: "/user.jpg" },
    { name: "Dorothy Powell", action: "Close a deal", avatar: "/user.jpg" },
    { name: "Nicolas", action: "Close a deal", avatar: "/user.jpg" },
    { name: "Myrtle Perkins", action: "Just archive daily budget", avatar: "/user.jpg" },
    { name: "Dominic Baker", action: "Close a deal", avatar: "/user.jpg" },
    { name: "Nicolas", action: "Just archive daily budget", avatar: "/user.jpg" },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 w-full sm:w-80 md:w-80 lg:w-80 xl:w-80 bg-white rounded-lg shadow-md p-4 sm:p-6">
      {/* Overview Metrics Card */}
      <Card className="shadow-sm">
        <CardBody className="p-4 sm:p-6">
          <div className="text-right mb-4 sm:mb-6">
            <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">OVERVIEW</span>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <MetricCard title="Deals" value="560" subtitle="Deals" />
            <MetricCard title="Order Value" value="$21K" subtitle="Order Value" />
          </div>

          {/* Progress Metrics */}
          <div className="space-y-4 sm:space-y-6">
            <ProgressMetric label="Meetings" current={24} total={50} color="success" />
            <ProgressMetric label="Deals" current={80} total={150} color="primary" />
            <ProgressMetric label="Order Value" current={1120} total={50000} color="warning" />
          </div>
        </CardBody>
      </Card>

      {/* Activity Feed Card */}
      <Card className="shadow-sm">
        <CardBody className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Chip variant="flat" color="default" size="sm" className="text-xs font-medium">
              NEW
            </Chip>
          </div>

          <div className="space-y-1">
            {activities.map((activity, index) => (
              <ActivityItem key={index} name={activity.name} action={activity.action} avatar={activity.avatar} />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
