import DashboardLayout from "@/layout/dashLayout";
import DisplayExpense from "@/features/expense/DisplayExpense";
import expenses from "../../../../../data/expenses";
import DisplayChart from "@/features/expense/DisplayChart";
import { Card } from "@/components/ui/card";

export default function page() {
	return (
		<DashboardLayout>
			<main className="flex flex-col-reverse md:grid grid-cols-3 h-full gap-5 relative">
				<section className="col-span-2 h-full  ">
					<div className="">
						<h1 className="font-bold text-3xl mb-3">Expenses</h1>
						{/* <p>start - end date</p> */}
					</div>

					<div className="flex flex-col gap-5">
						<div className="md:max-h-[80vh] h-auto md:overflow-auto ">
							<Card>
								<DisplayExpense expenses={expenses} />
							</Card>
						</div>
					</div>
				</section>
				<section className="col-span-1   pt-12  relative">
					<DisplayChart />
				</section>
			</main>
		</DashboardLayout>
	);
}
