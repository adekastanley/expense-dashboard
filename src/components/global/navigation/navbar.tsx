import { Button } from "@/components/ui/button";

export default function Nav() {
	return (
		<header className="relative">
			<div className="absolute top-5 w-full flex justify-between lg:px-20 items-center">
				<div>Logo</div>
				<ul className="flex gap-5 items-center">
					<li>
						<Button className="w-20">Sign up</Button>
					</li>
					<li>
						<Button className="w-20 outline-1 outline-solid outline-primary bg-transparent text-primary">
							Log In
						</Button>
					</li>
				</ul>
			</div>
		</header>
	);
}
