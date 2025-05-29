"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 250 },
  { month: "Apr", value: 400 },
  { month: "May", value: 550 },
  { month: "Jun", value: 500 },
  { month: "Jul", value: 350 },
];

export default function VisitorsChart() {
  return (
    <Card className=" rounded-lg shadow-md">
      <CardBody>
        <div className="h-40 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#5b4def" // purple line color
                strokeWidth={3}
                dot={false}
                strokeLinecap="round"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold">$21.2K</p>
            <p className="text-sm text-gray-400">Visitors this year</p>
          </div>

          <div className="flex items-center text-green-600 font-semibold space-x-1">
            <ArrowTrendingUpIcon className="h-5 w-5" />
            <span>105.23%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
