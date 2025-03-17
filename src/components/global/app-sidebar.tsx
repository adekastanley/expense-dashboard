import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

import DisplayUser from "@/features/user/DisplayUser";

const sidebarContent = [
	{
		title: "Dashboard",
		url: "#",
		icon: "",
	},
	{
		title: "Expenses",
		url: "#",
		icon: "",
	},
	{
		title: "Wallets",
		url: "#",
		icon: "",
	},
	{
		title: "Summary",
		url: "#",
		icon: "",
	},
	{
		title: "Accounts",
		url: "#",
		icon: "",
	},
	{
		title: "Settings",
		url: "#",
		icon: "",
	},
];

export default function AppSidebar() {
	return (
		<Sidebar className="border-0 outline-none">
			<SidebarHeader />
			<SidebarContent className=" mt-10 px-10 ">
				<DisplayUser />
				<SidebarGroup />
				<div className="mt-20">
					<ul className="gap-5 flex flex-col">
						{sidebarContent.map((item, index) => (
							<li key={index} className="font-semibold text-3xl text-gray-400">
								<a href={item.url}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>

				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
