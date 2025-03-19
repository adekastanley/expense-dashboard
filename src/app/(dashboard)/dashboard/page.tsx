import { DisplayDateChart } from "@/features/expense/DisplayDateChart";
import DashboardLayout from "@/layout/dashLayout";

export default function page() {
	const currentDate = new Date();
	const today = currentDate.toDateString();
	return (
		<DashboardLayout>
			<div>
				<h1 className="font-bold text-3xl">Dashboard</h1>
				<div>{today}</div>

				<div>
					<DisplayDateChart />
				</div>
			</div>
		</DashboardLayout>
	);
}
