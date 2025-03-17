import { Button } from "@/components/ui/button";

import {
	Sheet,
	// SheetClose,
	SheetContent,
	SheetDescription,
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

				<SheetContent side="bottom">
					<SheetHeader>
						<SheetTitle>Login or Sign up</SheetTitle>
					</SheetHeader>

					<SheetFooter>
						<Button
							variant={"outline"}
							className="bg-transparent outline outline-primary  text-primary"
						>
							Login
						</Button>
						<Button>Sign up</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</header>
	);
}
