import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
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
				<SheetTrigger className="right-5 top-10 fixed " asChild>
					<Button className=" " variant="outline">
						Open
					</Button>
				</SheetTrigger>

				<SheetContent>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">Lorem, ipsum dolor.</div>
					<SheetFooter>
						<Button>Login</Button>
						<Button>Sign up</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</header>
	);
}
