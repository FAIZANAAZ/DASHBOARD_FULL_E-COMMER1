import { CustomerGrowth } from "./CustomerGrowth"
import { OverviewCards } from "./OverviewCards"
import { TimeFilters } from "./TimeFilters"
import TransactionHistory from "./TransactionHistory"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container with Responsive Padding */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Header Section */}
          <header className="w-full">
            <TimeFilters />
          </header>

          {/* Metrics Overview Section */}
          <section className="w-full">
            <OverviewCards />
          </section>

          {/* Analytics Section */}
          <section className="w-full">
            <CustomerGrowth />
          </section>

          {/* Data Tables Section - Responsive Grid Layout */}
          
            <div className="w-full">
              <TransactionHistory />
            </div>
            
        
        </div>
      </div>
    </div>
  )
}
