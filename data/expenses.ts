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

const expenses: Expenses = [
	{
		date: "2025-03-18",
		items: [
			{
				category: "Grocery",
				time: "17:12",
				description: "Belanja di pasar",
				amount: -326800,
			},
			{
				category: "Transportation",
				time: "14:45",
				description: "Naik bus umum",
				amount: -15000,
			},
			{
				category: "Housing",
				time: "10:00",
				description: "Bayar Listrik",
				amount: -185750,
			},
			{
				category: "Groceries",
				time: "19:30",
				description: "Supermarket Belanja",
				amount: -79000,
			},
		],
	},
	{
		date: "2025-03-17",
		items: [
			{
				category: "Food and Drink",
				time: "12:30",
				description: "Makan Siang di Kafe",
				amount: -98000,
			},
			{
				category: "Entertainment",
				time: "20:00",
				description: "Nonton Bioskop",
				amount: -35200,
			},
			{
				category: "Transportation",
				time: "08:00",
				description: "Taksi ke kantor",
				amount: -45000,
			},
		],
	},
	{
		date: "2025-03-16",
		items: [
			{
				category: "Health",
				time: "09:00",
				description: "Beli Obat",
				amount: -25000,
			},
			{
				category: "Utilities",
				time: "16:00",
				description: "Bayar Internet",
				amount: -120000,
			},
			{
				category: "Food and Drink",
				time: "19:00",
				description: "Makan Malam",
				amount: -88000,
			},
		],
	},
	{
		date: "2025-03-15",
		items: [
			{
				category: "Entertainment",
				time: "21:00",
				description: "Beli Game Online",
				amount: -59000,
			},
			{
				category: "Transportation",
				time: "07:30",
				description: "Naik KRL",
				amount: -12000,
			},
			{
				category: "Housing",
				time: "11:00",
				description: "Bayar Air",
				amount: -50000,
			},
		],
	},
];

export default expenses;
