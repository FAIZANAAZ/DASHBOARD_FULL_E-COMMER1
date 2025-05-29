"use client";

import { ResponsiveContainer, RadialBarChart, RadialBar, Cell, PolarAngleAxis } from "recharts";
import { Card, CardBody, CardHeader, Select, SelectItem } from "@heroui/react";
import { useState } from "react";

export function CustomerGrowth() {
  const chartData = [
    { month: "Jan", men: 60, women: 40, new: 20 },
    { month: "Feb", men: 30, women: 60, new: 25 },
    { month: "Mar", men: 45, women: 35, new: 30 },
    { month: "Apr", men: 70, women: 20, new: 15 },
    { month: "May", men: 55, women: 45, new: 35 },
    { month: "Jun", men: 80, women: 50, new: 40 },
    { month: "Jul", men: 35, women: 25, new: 20 },
    { month: "Aug", men: 25, women: 15, new: 10 },
    { month: "Sep", men: 40, women: 30, new: 25 },
    { month: "Oct", men: 20, women: 35, new: 15 },
    { month: "Nov", men: 30, women: 20, new: 18 },
    { month: "Dec", men: 15, women: 25, new: 12 },
  ];

  const maxValue = Math.max(...chartData.flatMap((d) => [d.men, d.women, d.new]));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="flex flex-row justify-between items-center p-6 pb-0">
        <h3 className="text-lg font-semibold text-gray-900">Customer Growth</h3>
        <Select size="sm" defaultSelectedKeys={["thisYear"]} className="w-32">
          <SelectItem key="thisYear">In This Year</SelectItem>
          <SelectItem key="lastYear">Last Year</SelectItem>
        </Select>
      </CardHeader>

      <CardBody className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Legend */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <span className="text-sm text-gray-600">Men: 250</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                <span className="text-sm text-gray-600">Women: 120</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-sm text-gray-600">New: 60</span>
              </div>
            </div>

            {/* Simplified Bar Chart */}
            <Card className="bg-white rounded-2xl p-6 relative">
              <CardBody>
                <div className="h-48 flex items-end space-x-2 relative">
                  {chartData.map((data, index) => {
                    const menHeight = (data.men / maxValue) * 100;
                    const womenHeight = (data.women / maxValue) * 100;
                    const newHeight = (data.new / maxValue) * 100;

                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-1 flex-1 cursor-pointer relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex items-end space-x-1 h-32">
                          <div className="bg-[#10b981] rounded-t-sm w-3" style={{ height: `${menHeight}%` }}></div>
                          <div className="bg-[#6466f1] rounded-t-sm w-3" style={{ height: `${womenHeight}%` }}></div>
                          <div className="bg-[#2563eb] rounded-t-sm w-3" style={{ height: `${newHeight}%` }}></div>
                        </div>

                        {/* Tooltip */}
                        {hoveredIndex === index && (
                          <div className="absolute -top-36 right-0 bg-white border border-gray-300 shadow-md rounded-md p-4 w-36 text-right z-10">
                            <div className="text-sm text-gray-500">{data.month}, 2020</div>
                            <div className="flex items-center space-x-2 mt-2 justify-end">
                              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                              <span className="font-semibold text-gray-900">{data.men} Men</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1 justify-end">
                              <div className="w-3 h-3 rounded-full bg-[#6466f1]"></div>
                              <span className="font-semibold text-gray-900">{data.women} Women</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1 justify-end">
                              <div className="w-3 h-3 rounded-full bg-[#2563eb]"></div>
                              <span className="font-semibold text-gray-900">{data.new} New</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-1 justify-end">
                              <span className="font-semibold text-gray-900">
                                {data.men + data.women + data.new} Total
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardBody>
            </Card>

            {/* Chart Labels */}
            <div className="flex flex-wrap gap-2 justify-between sm:justify-start md:justify-between mt-4 text-xs sm:text-sm text-gray-600">
              <div className="bg-gray-100 px-2 py-1 flex items-center gap-1 sm:gap-2 rounded-2xl">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-600"></div>
                <span>Man Customer</span>
              </div>
              <div className="bg-gray-100 px-2 py-1 flex items-center gap-1 sm:gap-2 rounded-2xl">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-600"></div>
                <span>Women Customer</span>
              </div>
              <div className="bg-gray-100 px-2 py-1 flex items-center gap-1 sm:gap-2 rounded-2xl">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600"></div>
                <span>New Customer</span>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="lg:col-span-1 space-y-6">
            <Circle />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

const progressData = [
  {
    percentage: 75,
    label: "Customer Target",
    isPositive: true,
    strokeColor: "#059669",
    textColor: "text-green-600",
  },
  {
    percentage: 50,
    label: "Sales Target",
    isPositive: false,
    strokeColor: "#7c3aed",
    textColor: "text-purple-600",
  },
];

function CircularProgress({
  percentage,
  strokeColor,
}: {
  percentage: number;
  strokeColor: string;
}) {
  const total = 100;
  const data = [{ name: "Progress", value: percentage }];

  return (
    <div className="w-20 h-20">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="85%"
          outerRadius="100%"
          barSize={8}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, total]} angleAxisId={0} tick={false} />
          <RadialBar
            background={{ fill: "#d1d5db" }}
            dataKey="value"
            cornerRadius={10}
            fill={strokeColor}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </RadialBar>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-gray-900 font-semibold text-xl"
          >
            {percentage}%
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

function Circle() {
  return (
    <div className="max-w-md space-y-6 p-6 bg-white rounded-lg shadow-md">
      {progressData.map((item, index) => (
        <Card key={index} className="border border-gray-200 shadow-sm rounded-lg">
          <CardBody className="flex items-center justify-center p-6 space-x-4">
            <CircularProgress percentage={item.percentage} strokeColor={item.strokeColor} />
            <div className="text-sm text-gray-500 font-medium">{item.label}</div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
