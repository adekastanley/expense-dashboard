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
		title: "Home",
		url: "#",
		icon: "",
	},
];

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent>
				<DisplayUser />
				<SidebarGroup />

				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}
