"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import expenses from "../../../data/expenses";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

// type ExpenseItem = {
// 	category: string;
// 	time: string;
// 	description: string;
// 	amount: number;
// };
// type ExpenseGroup = {
// 	date: string;
// 	items: ExpenseItem[];
// };
const tally: Record<string, number> = {};

expenses.forEach((group) => {
	group.items.forEach((item) => {
		if (tally[item.category]) {
			tally[item.category] += item.amount;
		} else {
			tally[item.category] = item.amount;
		}
	});
});

console.log("tally is", tally);
const chartData = [
	{ category: "Grocery", desktop: tally.Grocery },
	{ category: "Transportation", desktop: tally.Transportation },
	{ category: "Housing", desktop: tally.Housing },
	{ category: "Food", desktop: tally.Food },
	{ category: "Entertainment", desktop: tally.Entertainment },
	{ category: "Health", desktop: tally.Health },
];

const chartConfig = {
	desktop: {
		label: "amount",
		color: "black",
		// color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export default function DisplayChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>What you spent your money on</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							left: 50,
						}}
					>
						<XAxis type="number" dataKey="desktop" hide />
						<YAxis
							dataKey="category"
							type="category"
							tickLine={false}
							tickMargin={2}
							axisLine={false}
							className="text-sm "

							// tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					Trending up by X% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					Lorem ipsum dolor sit.
				</div>
			</CardFooter>
		</Card>
	);
}
