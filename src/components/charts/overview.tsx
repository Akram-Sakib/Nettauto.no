"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Monday",
    total: 10,
  },
  {
    name: "Tuesday",
    total: 20,
  },
  {
    name: "Wednesday",
    total: 30,
  },
  {
    name: "Thursday",
    total: 40,
  },
  {
    name: "Friday",
    total: 50,
  },
  {
    name: "Saturday",
    total: 60,
  },
  {
    name: "Sunday",
    total: 70,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={true}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="rgb(255, 0, 61)"
          radius={[4, 4, 0, 0]}
          barSize={15}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
