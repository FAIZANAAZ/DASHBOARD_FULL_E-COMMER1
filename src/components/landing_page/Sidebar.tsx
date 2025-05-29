"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button, Card, CardBody } from "@heroui/react"
import {
  HomeIcon,
  ChartBarIcon,
  DocumentIcon,
  CogIcon,
  ShoppingCartIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"

const menuItemsData = [
  { icon: HomeIcon, label: "Overview" },
  { icon: ChartBarIcon, label: "Leaderboard" },
  { icon: DocumentIcon, label: "Spreadsheets" },
  { icon: CogIcon, label: "Administration" },
  { icon: ShoppingCartIcon, label: "Sales" },
  { icon: ClockIcon, label: "Schedule" },
]

const teamItems = [
  { icon: ChatBubbleLeftIcon, label: "Message", hasNotification: true },
  { icon: QuestionMarkCircleIcon, label: "Support" },
]

export default function Sidebar({ activeTab }: { activeTab: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [salesSubMenuOpen, setSalesSubMenuOpen] = useState(["Sales", "Product", "Order"].includes(activeTab))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sales tab active rahe agar activeTab "Sales", "Product" ya "Order" ho
  const isSalesTabActive = ["Sales", "Product", "Order"].includes(activeTab)

  const navigateToTab = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", tab)
    router.push(`/?${params.toString()}`)
    // Auto close sidebar when any tab is clicked
    setMobileMenuOpen(false)
  }

  const handleMainTabClick = (label: string) => {
    if (label === "Sales") {
      setSalesSubMenuOpen((prev) => !prev)
      navigateToTab("Sales")
    } else {
      setSalesSubMenuOpen(false)
      navigateToTab(label)
    }
  }

  const handleSalesSubTabClick = (label: string) => {
    navigateToTab(label) // "Product" ya "Order"
    setSalesSubMenuOpen(true) // submenu khula rahe
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Toggle Button - Only Arrow */}
      <Button
        variant="light"
        className="fixed left-0 top-0 z-[60] sm:hidden  bg-yellow-300 rounded-1xl  border border-gray-200 shadow-sm min-w-8 h-14 p-0"
        onClick={toggleMobileMenu}
      >
        <ChevronRightIcon className={`w-5 h-5 transition-transform ${mobileMenuOpen ? "rotate-180" : ""}`} />
      </Button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[45] sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Full Sidebar for Mobile (open) and Desktop */}
      <aside
        className={`fixed left-0 top-0 sm:top-3 h-screen sm:h-[calc(100vh-1.5rem)] w-64 bg-white border-r border-gray-200 p-4 z-[55] transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="space-y-6 pt-16 sm:pt-0">
          {/* Main Navigation */}
          <nav className="space-y-1">
            {menuItemsData.map((item) => (
              <div key={item.label} className="flex flex-col gap-y-2">
                <Button
                  variant={activeTab === item.label || (item.label === "Sales" && isSalesTabActive) ? "flat" : "light"}
                  className={`w-full justify-start flex items-center gap-2 rounded-2xl min-h-10 ${
                    activeTab === item.label || (item.label === "Sales" && isSalesTabActive)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 bg-gray-100"
                  }`}
                  onClick={() => handleMainTabClick(item.label)}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Button>

                {/* Sales submenu */}
                {item.label === "Sales" && salesSubMenuOpen && (
                  <div className="ml-6 mt-1 flex flex-col space-y-1">
                    {["Product", "Order"].map((subLabel) => (
                      <Button
                        key={subLabel}
                        variant={activeTab === subLabel ? "flat" : "light"}
                        className={`w-full justify-start text-sm min-h-8 ${
                          activeTab === subLabel ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                        }`}
                        onClick={() => handleSalesSubTabClick(subLabel)}
                      >
                        <span className="truncate">{subLabel}</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Teams Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Teams</h3>
            <nav className="space-y-1">
              {teamItems.map((item) => (
                <Button
                  key={item.label}
                  variant="light"
                  className="w-full flex justify-start items-center gap-2 text-gray-600 hover:bg-gray-50 relative min-h-10"
                  onClick={() => navigateToTab(item.label)}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                  {item.hasNotification && <div className="absolute right-3 w-2 h-2 bg-red-500 rounded-full"></div>}
                </Button>
              ))}
            </nav>
          </div>

          {/* Upgrade Section */}
          <Card className="bg-blue-50 border-blue-100 mt-8">
            <CardBody className="p-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                <span className="text-white text-sm font-bold">i</span>
              </div>
              <h4 className="font-medium text-gray-900 mb-1 text-sm leading-tight">
                Upgrade to Pro for more resources
              </h4>
              <Button color="primary" className="w-full mt-3 bg-blue-600 min-h-8 text-sm">
                Upgrade
              </Button>
            </CardBody>
          </Card>
        </div>
      </aside>

      {/* Content Spacer for Desktop only */}
      <div className="hidden sm:block w-64 flex-shrink-0"></div>
    </>
  )
}
