"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
	{ date: "2025-01-01", desktop: 22, mobile: 150 },
	{ date: "2025-01-02", desktop: 7, mobile: 180 },
	{ date: "2025-01-03", desktop: 17, mobile: 120 },
	{ date: "2025-01-04", desktop: 2, mobile: 260 },
	{ date: "2025-01-05", desktop: 3, mobile: 290 },
	{ date: "2025-02-06", desktop: 31, mobile: 340 },
	{ date: "2025-02-07", desktop: 45, mobile: 180 },
	{ date: "2025-02-08", desktop: 9, mobile: 320 },
	{ date: "2025-02-09", desktop: 59, mobile: 110 },
	{ date: "2025-02-10", desktop: 21, mobile: 190 },
	{ date: "2025-02-11", desktop: 37, mobile: 350 },
	{ date: "2025-02-12", desktop: 22, mobile: 210 },
	{ date: "2025-02-13", desktop: 32, mobile: 380 },
	{ date: "2025-03-14", desktop: 17, mobile: 220 },
	{ date: "2025-02-15", desktop: 12, mobile: 170 },
	{ date: "2025-03-16", desktop: 18, mobile: 190 },
	{ date: "2025-03-17", desktop: 23, mobile: 360 },
	{ date: "2025-04-18", desktop: 34, mobile: 410 },
	{ date: "2025-04-19", desktop: 3, mobile: 180 },
	{ date: "2025-04-20", desktop: 9, mobile: 150 },
];

const chartConfig = {
	views: {
		label: "Amount spent",
	},
	desktop: {
		label: "Total",
		color: "#2dd881",
		// color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function DisplayDateChart() {
	const [activeChart, setActiveChart] =
		React.useState<keyof typeof chartConfig>("desktop");

	const total = React.useMemo(
		() => ({
			desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
			mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
		}),
		[]
	);

	return (
		<Card>
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-5 sm:pb-6">
					<CardTitle>Total spending</CardTitle>
					<CardDescription>
						Showing all expenses in the 4 last months
					</CardDescription>
				</div>
				<div className="flex">
					{["desktop"].map((key) => {
						const chart = key as keyof typeof chartConfig;
						return (
							<button
								key={chart}
								data-active={activeChart === chart}
								className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
								onClick={() => setActiveChart(chart)}
							>
								<span className="text-xs text-muted-foreground">
									{chartConfig[chart].label}
								</span>
								<span className="text-lg font-bold leading-none sm:text-3xl">
									{total[key as keyof typeof total].toLocaleString()}
								</span>
							</button>
						);
					})}
				</div>
			</CardHeader>
			<CardContent className="px-2 sm:p-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								});
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="views"
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										});
									}}
								/>
							}
						/>
						<Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
