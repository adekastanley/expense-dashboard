import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

import DisplayUser from "@/features/user/DisplayUser";
import DisplayPaths from "../ui/DisplayPaths";

const sidebarContent = [
	{
		title: "Dashboard",
		url: "/dashboard",
	},
	{
		title: "Expenses",
		url: "/dashboard/expenses",
	},
	{
		title: "Wallets",
		url: "#",
	},
	{
		title: "Summary",
		url: "#",
	},
	{
		title: "Accounts",
		url: "#",
	},
	{
		title: "Settings",
		url: "#",
	},
];

export default function AppSidebar() {
	return (
		<Sidebar className="border-0 outline-none ">
			<SidebarHeader />
			<SidebarContent className=" mt-10 px-10  ">
				<DisplayUser />
				<SidebarGroup />
				<div className="mt-0">
					<DisplayPaths paths={sidebarContent} />
				</div>

				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
