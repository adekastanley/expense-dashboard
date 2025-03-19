import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/global/app-sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider className="bg-white">
			<AppSidebar />
			<main className="w-full  ">
				<SidebarTrigger />
				<section className="bg-white rounded-lg h-[95vh] mx-5 overflow-scroll p-5">
					{children}
				</section>
			</main>
		</SidebarProvider>
	);
}
