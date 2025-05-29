"use client"

import { useState } from "react"

import DashboardPage from "@/components/Administration/admistrate"
import AnalyticsOverview from "@/components/landing/AnalyticsOverview"
import AverageTotalSales from "@/components/landing/AverageTotalSales"
import CustomersAndTransactions from "@/components/landing/CustomersAndTransactions"
import ProgressMetrics from "@/components/landing/ProgressMetrics"
import SalesFigures from "@/components/landing/SalesFigures"
import SalesLocations from "@/components/landing/SalesLocations"
import SalesReport from "@/components/landing/SalesReport"
import VisitorsChart from "@/components/landing/visitorchat"
import Leaderboard from "@/components/leaderboard/leader"
import Sidebar from "@/components/landing/Sidebar"

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview") // Default tab

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content - Fully responsive */}
      <main className="flex-1 p-3 sm:p-4 md:p-6 bg-gray-50 min-h-screen w-full">
        {activeTab === "Overview" && (
          <div className="space-y-4 sm:space-y-6">
            <AnalyticsOverview />
            <div>
              <SalesFigures />
            </div>
            <div className="w-full max-w-full overflow-hidden">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-6 md:gap-5 sm:gap-4">
                <div className="w-full min-w-0 flex-1">
                  <ProgressMetrics />
                </div>
                <div className="w-full min-w-0 flex-1">
                  <VisitorsChart />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              <AverageTotalSales />
              <SalesReport />
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm">
              <SalesLocations />
            </div>
            <div>
              <CustomersAndTransactions />
            </div>
          </div>
        )}
        {activeTab === "Leaderboard" && (
          <div className="w-full">
            <Leaderboard />
          </div>
        )}
        {activeTab === "Administration" && (
          <div className="w-full">
            <DashboardPage />
          </div>
        )}
        {activeTab === "Sales" && (
          <div className="space-y-4 sm:space-y-6">
            <SalesFigures />
            <SalesReport />
            {/* You can add more sales related components here */}
          </div>
        )}
        {/* Other tabs content can be conditionally rendered here */}
      </main>
    </div>
  )
}
