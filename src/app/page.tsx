import DashboardPage from "@/components/Administration/admistrate"
import AnalyticsOverview from "@/components/landing_page/AnalyticsOverview"
import AverageTotalSales from "@/components/landing_page/AverageTotalSales"
import CustomersAndTransactions from "@/components/landing_page/CustomersAndTransactions"
import ProgressMetrics from "@/components/landing_page/ProgressMetrics"
import SalesFigures from "@/components/landing_page/SalesFigures"
import SalesLocations from "@/components/landing_page/SalesLocations"
import SalesReport from "@/components/landing_page/SalesReport"
import VisitorsChart from "@/components/landing_page/visitorchat"
import Leaderboard from "@/components/leaderboard/leader"
import Sidebar from "@/components/landing_page/Sidebar"
import ProductsTable from "@/components/Product_pages/products-table"
import OrdersTable from "@/components/Order_pages/orders-table"
import Navbar from "@/components/navbar"

interface HomeProps {
  searchParams: { tab?: string }
}

export default function Home({ searchParams }: HomeProps) {
  const activeTab = searchParams.tab || "Overview"

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} />

        {/* Main Content */}
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
            </div>
          )}
          {activeTab === "Product" && (
            <div className="space-y-4 sm:space-y-6">
              <ProductsTable />
            </div>
          )}
          {activeTab === "Order" && (
            <div className="space-y-4 sm:space-y-6">
              <OrdersTable 
                searchQuery={""} 
                onToggleSelection={() => {
                  console.log("Toggle selection")
                }} 
              />
            </div>
          )}
        </main>
      </div>
    </>
  )
}
