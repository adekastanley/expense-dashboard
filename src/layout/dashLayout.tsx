import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/global/app-sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider className="bg-black">
			<AppSidebar />
			<main className="w-full ">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
