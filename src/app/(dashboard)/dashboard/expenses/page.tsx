import DashboardLayout from "@/layout/dashLayout";
import DisplayExpense from "@/features/expense/DisplayExpense";
import expenses from "../../../../../data/expenses";
import DisplayChart from "@/features/expense/DisplayChart";
import { DisplayDateChart } from "@/features/expense/DisplayDateChart";

export default function page() {
	return (
		<DashboardLayout>
			<main className="flex flex-col md:grid grid-cols-3 h-full gap-5">
				<section className="col-span-2 h-full  ">
					<div className="">
						<h1 className="font-bold text-3xl mb-3">Expenses</h1>
						{/* <p>start - end date</p> */}
					</div>

					<div className="flex flex-col gap-5">
						<div>
							<DisplayDateChart />
						</div>
						<div className="md:max-h-[70vh] h-auto md:overflow-auto ">
							<DisplayExpense expenses={expenses} />
						</div>
					</div>
				</section>
				<section className="col-span-1 h-full  pt-12 ">
					<DisplayChart />
				</section>
			</main>
		</DashboardLayout>
	);
}
