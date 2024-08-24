"use client";

import React, { useMemo } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const chartData = [
  { browser: "chrome", visitors: 30, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 30, fill: "var(--color-safari)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#ddd",
  },
  safari: {
    label: "Safari",
    color: "rgb(255, 0, 61)",
  },
} satisfies ChartConfig;

const PiechartTotal = () => {

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px] basis-[60%]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={50}
                strokeWidth={20}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-lg font-bold"
                          >
                            {totalVisitors.toLocaleString()}%
                          </tspan>
                          {/* <tspan
                                      x={viewBox.cx}
                                      y={(viewBox.cy || 0) + 24}
                                      className="fill-muted-foreground"
                                    >
                                      Visitors
                                    </tspan> */}
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="flex flex-col justify-between items-end space-y-3 basis-[40%]">
            <HiOutlineDotsHorizontal className="h-8 w-8 text-[#CED0DE]" />
            <h3 className="font-inter text-[#5A5E7C] text-sm font-medium max-w-24">
              Total Number Of Sellers
            </h3>
            <Image
              src={"/Vector Smart Object.png"}
              alt="Vector"
              width={60}
              height={25}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PiechartTotal;
