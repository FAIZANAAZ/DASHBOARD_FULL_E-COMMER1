"use client"
import { Button } from "@heroui/react"
import { Download } from "lucide-react"

export function TimeFilters() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      {/* Time Period Filter Buttons */}
      <div className="flex gap-2 bg-gray-200 p-2 rounded-3xl text-gray-600">
        <Button variant="solid" color="default" size="sm" className="text-black border-r-1 border-gray-300">  
          1 Year
        </Button>
        <Button variant="ghost" color="default" size="sm" className="text-gray-600 border-r-1 border-gray-300">
          2 Year
        </Button>
        <Button variant="ghost" color="default" size="sm" className="text-gray-600">
          3 Year
        </Button>
      </div>

      {/* Generate Report Button */}
      <Button
        color="primary"
        size="sm"
        
        className="bg-blue-600 flex items-center gap-2 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        <span>
          Generate Report
        </span>
      </Button>
    </div>
  )
}
