import { Home, ShoppingCart, Bus, Utensils, Play } from "lucide-react";
// import { Card } from "@/components/ui/card";

type ExpenseItem = {
	category: string;
	time: string;
	description: string;
	amount: number;
};

type ExpenseGroup = {
	date: string;
	items: ExpenseItem[];
};

type Expenses = ExpenseGroup[];

type AllEntriesProps = {
	expenses: Expenses;
};

type EntryProps = {
	expenseGroup: ExpenseGroup;
};

export default function DisplayExpense({ expenses }: { expenses: Expenses }) {
	return (
		<div className="mx-1 my-1 bg-white rounded-xl p-8 ">
			<div className="space-y-8">
				<AllEntries expenses={expenses} />
			</div>
		</div>
	);
}

const AllEntries: React.FC<AllEntriesProps> = ({ expenses }) => (
	<>
		{expenses.map((group) => (
			<Entry key={group.date} expenseGroup={group} />
		))}
	</>
);

const Entry: React.FC<EntryProps> = ({ expenseGroup }) => (
	<div className="space-y-4">
		<div className="flex justify-between items-center">
			<h2 className=" font-semibold text-gray-800">
				{formatDate(expenseGroup.date)}
			</h2>
			<div className="flex space-x-1">
				<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
				<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
				<div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
			</div>
		</div>

		<div className="space-y-4">
			{expenseGroup.items.map((item, index) => (
				<div key={index} className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div
							className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${getCategoryColor(
								item.category
							)}`}
						>
							{getCategoryIcon(item.category)}
						</div>
						<div>
							<h3 className="text-lg font-medium text-gray-800">
								{item.category}
							</h3>
							<p className="text-sm text-gray-500">
								{item.time} • {item.description}
							</p>
						</div>
					</div>
					<span className="text-lg font-semibold">
						-{item.amount.toLocaleString()}
					</span>
				</div>
			))}
		</div>
	</div>
);

function getCategoryIcon(category: string) {
	switch (category) {
		case "Grocery":
		case "Groceries":
			return <ShoppingCart size={24} />;
		case "Transportation":
			return <Bus size={24} />;
		case "Housing":
			return <Home size={24} />;
		case "Food":
			return <Utensils size={24} />;
		case "Entertainment":
			return <Play size={24} />;
		default:
			return <ShoppingCart size={24} />;
	}
}

function getCategoryColor(category: string) {
	switch (category) {
		case "Grocery":
		case "Groceries":
			return "bg-blue-400";
		case "Transportation":
			return "bg-purple-500";
		case "Housing":
			return "bg-orange-400";
		case "Food":
			return "bg-red-500";
		case "Entertainment":
			return "bg-green-500";
		default:
			return "bg-gray-400";
	}
}

function formatDate(date: string) {
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	};
	return new Date(date).toLocaleDateString("en-US", options);
}
