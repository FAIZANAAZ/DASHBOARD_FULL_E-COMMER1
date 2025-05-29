"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";
import { ResponsiveContainer, RadialBarChart, RadialBar, Cell, PolarAngleAxis } from "recharts";

const progressData = [
  {
    percentage: 75,
    label: "Hit Rate this year",
    change: "+20.15%",
    isPositive: true,
    strokeColor: "#059669", // Tailwind emerald-600 color hex (green)
    textColor: "text-green-600",
  },
  {
    percentage: 50,
    label: "Deals this year",
    change: "-20.15%",
    isPositive: false,
    strokeColor: "#7c3aed", // Tailwind violet-600 color hex (purple)
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
            background={{ fill: "#d1d5db" }} // Tailwind gray-300 for background ring
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

export default function ProgressMetrics() {
  return (
    <div className="  space-y-6 p-6 bg-white rounded-lg shadow-md">
      {progressData.map((item, index) => (
        <Card key={index} className="border border-gray-200 shadow-sm rounded-lg">
          <CardBody className="flex items-center space-x-5 p-6">
            <div className="flex items-center justify-between w-full   space-x-2">
              <CircularProgress percentage={item.percentage} strokeColor={item.strokeColor} />
             <Chip
                startContent={
                  item.isPositive ? (
                    <ArrowTrendingUpIcon className={`w-4 h-4 ${item.textColor}`} />
                  ) : (
                    <ArrowTrendingDownIcon className={`w-4 h-4 ${item.textColor}`} />
                  )
                }
                color={item.isPositive ? "success" : "danger"}
                variant="flat"
                size="sm"
                className={`${item.textColor} font-semibold`}
              >
                {item.change}
              </Chip>
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1 font-medium">{item.label}</div>
             
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}



    


      