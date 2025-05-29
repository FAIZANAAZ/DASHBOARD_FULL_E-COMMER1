"use client"

import DashboardHeader from "./DashboardHeader"
import { SideDetail } from "./sidedetail"
import OtherEmployes from "./otherEmployes"

export default function Leaderboard() {
  return (
    <div className="min-h-screen w-full">
      {/* Container with responsive padding */}
      <div className="container  px-1 sm:px-2 lg:px-2 py-2 sm:py-3 lg:py-4">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {/* Left Side: stacked DashboardHeader and OtherEmployes */}
          <div className="flex flex-col flex-1 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 min-w-0">
            <div className="w-full">
              <DashboardHeader />
            </div>
            <div className="w-full">
              <OtherEmployes />
            </div>
          </div>

          {/* Right Side: SideDetail */}
          <div className="w-full lg:w-80 xl:w-96 lg:flex-shrink-0">
            <div className="sticky top-4">
              <SideDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
