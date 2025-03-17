import { Button } from "@/components/ui/button";

import {
	Sheet,
	// SheetClose,
	SheetContent,
	// SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
	return (
		<header className="relative z-50">
			<Sheet>
				<SheetTrigger className="right-5 top-10 fixed" asChild>
					<Button variant="outline">Open</Button>
				</SheetTrigger>

				<SheetContent>
					<SheetHeader>
						<SheetTitle>Navigation</SheetTitle>
					</SheetHeader>
					<div className="grid gap-4 py-4 pl-4">
						<ul>
							<li>one</li>
							<li>one</li>
							<li>one</li>
						</ul>
					</div>
					<SheetFooter>
						<Button>Login</Button>
						<Button>Sign up</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</header>
	);
}
