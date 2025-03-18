import DashboardLayout from "@/layout/dashLayout";
import DisplayExpense from "@/features/expense/DisplayExpense";
import expenses from "../../../../../data/expenses";
import DisplayChart from "@/features/expense/DisplayChart";

export default function page() {
	return (
		<DashboardLayout>
			<main className="flex flex-col md:grid grid-cols-3 h-full">
				<section className="col-span-2 h-full ">
					<div className="">
						<h1 className="font-bold text-3xl">Expenses</h1>
						<p>start - end date</p>
					</div>

					<div className="md:max-h-[70vh] md:overflow-auto ">
						<DisplayExpense expenses={expenses} />
					</div>
				</section>
				<section className="col-span-1 h-full">
					<DisplayChart />
				</section>
			</main>
		</DashboardLayout>
	);
}
